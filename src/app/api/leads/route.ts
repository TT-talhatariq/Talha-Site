import { NextRequest, NextResponse } from 'next/server';

import { alreadySaved, checkLeadRateLimit, rememberSaved } from '@/lib/leadGuards';
import { COURSE_PRICE_PKR, parseLeadPayload } from '@/lib/leads';
import { clientIp } from '@/lib/rateLimit';

/** The browser sends a few hundred bytes; refuse anything bigger outright. */
const MAX_BODY_BYTES = 4 * 1024;
/** Never hold a checkout's background save open longer than this. */
const SUPABASE_TIMEOUT_MS = 5_000;

const noContent = () => new NextResponse(null, { status: 204 });

/**
 * Saves one checkout visit as a lead (see db/migrations/checkout_leads.sql in
 * the LMS repo). 204 saved, 400 bad input, 429 rate limited. The browser
 * ignores every outcome, so none of this can affect the buyer.
 */
export async function POST(request: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    console.error('Lead capture is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  let lead;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Too large' }, { status: 413 });
    }
    lead = parseLeadPayload(JSON.parse(raw));
  } catch {
    lead = null;
  }
  if (!lead) {
    return NextResponse.json({ error: 'Invalid lead' }, { status: 400 });
  }

  // Same session, same data as the last save: nothing to tell Supabase.
  const { sessionId, ...fields } = lead;
  const signature = JSON.stringify(fields);
  if (alreadySaved(sessionId, signature)) return noContent();

  // Only requests that would actually reach Supabase count against the limit.
  const limit = checkLeadRateLimit(clientIp(request.headers));
  if (!limit.allowed) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } },
    );
  }

  try {
    const response = await fetch(
      `${supabaseUrl.replace(/\/+$/, '')}/rest/v1/rpc/upsert_checkout_lead`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
        },
        signal: AbortSignal.timeout(SUPABASE_TIMEOUT_MS),
        body: JSON.stringify({
          p_session_id: sessionId,
          p_name: lead.name,
          p_whatsapp: lead.whatsapp,
          p_email: lead.email || null,
          p_course: lead.course,
          p_stage: lead.stage,
          p_price: COURSE_PRICE_PKR[lead.course],
        }),
      },
    );

    if (!response.ok) {
      console.error('Lead save failed:', response.status, await response.text());
      return NextResponse.json({ error: 'Save failed' }, { status: 502 });
    }
  } catch (error) {
    console.error('Lead save error:', error);
    return NextResponse.json({ error: 'Save failed' }, { status: 502 });
  }

  rememberSaved(sessionId, signature);
  return noContent();
}
