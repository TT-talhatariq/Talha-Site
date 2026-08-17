import { NextRequest, NextResponse } from 'next/server';

import { matchesPayee } from '@/lib/payeeMatch';
import { checkRateLimit, clientIp } from '@/lib/rateLimit';

/** Cheapest Gemini model with vision open to new keys; see ai.google.dev/gemini-api/docs/pricing. */
const MODEL = 'gemini-3.5-flash-lite';
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

/** Refuse oversized uploads before they cost us a Gemini call. */
const MAX_BYTES = 5 * 1024 * 1024;

/**
 * Gemini is usually well under 3s, but the free tier occasionally stalls for
 * 30s+. Cut it off rather than hold the checkout page open that long.
 */
const TIMEOUT_MS = 20_000;

const PROMPT = `You are reading a screenshot of a Pakistani mobile wallet or bank
transfer receipt (JazzCash, EasyPaisa, UBL, Meezan, Raast, etc).

Transcribe it. Do not judge whether the payment is valid — only report what is
printed. If a field is absent, use an empty string. Preserve digits exactly as
shown, including any masking characters such as * or x.

Respond with JSON only, matching this shape:
{"recipientName": "", "recipientNumber": "", "amount": "", "text": ""}

"text" must contain the full raw text of the receipt.`;

/** Gemini occasionally wraps JSON in a fenced block; tolerate that. */
function parseModelJson(raw: string) {
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = (fenced ? fenced[1] : raw).trim();

  try {
    return JSON.parse(candidate);
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not set');
    return NextResponse.json(
      { verified: false, error: 'OCR is not configured' },
      { status: 500 },
    );
  }

  const limit = checkRateLimit(clientIp(request.headers));
  if (!limit.allowed) {
    const message =
      limit.reason === 'global'
        ? 'Verification is temporarily unavailable. Please send your screenshot via WhatsApp at 0325-7460090.'
        : 'Too many verification attempts. Please send your screenshot via WhatsApp at 0325-7460090.';

    return NextResponse.json(
      { verified: false, error: message, rateLimited: true },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!(file instanceof Blob)) {
      return NextResponse.json(
        { verified: false, error: 'No screenshot uploaded' },
        { status: 400 },
      );
    }

    if (file.size > MAX_BYTES) {
      return NextResponse.json(
        { verified: false, error: 'Screenshot is too large' },
        { status: 413 },
      );
    }

    const base64 = Buffer.from(await file.arrayBuffer()).toString('base64');

    const response = await fetch(`${ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: PROMPT },
              {
                inline_data: {
                  mime_type: file.type || 'image/jpeg',
                  data: base64,
                },
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0,
          responseMimeType: 'application/json',
        },
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Gemini error:', response.status, detail);
      return NextResponse.json(
        { verified: false, error: 'OCR request failed' },
        { status: 502 },
      );
    }

    const result = await response.json();
    const raw = result?.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
    const parsed = parseModelJson(raw);

    // Fall back to the raw response so a malformed JSON reply is still usable.
    const haystack = parsed
      ? [parsed.recipientName, parsed.recipientNumber, parsed.text]
          .filter(Boolean)
          .join('\n')
      : raw;

    return NextResponse.json({
      verified: matchesPayee(haystack),
      remaining: limit.remaining,
    });
  } catch (error) {
    console.error('OCR proxy error:', error);
    return NextResponse.json(
      { verified: false, error: 'OCR request failed' },
      { status: 500 },
    );
  }
}
