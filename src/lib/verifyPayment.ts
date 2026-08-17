/**
 * Payment screenshot verification.
 *
 * The screenshot is downscaled in the browser and read by Gemini server-side.
 * An earlier version tried Tesseract locally first to save a few cents, but it
 * added 10+ seconds to checkout on mid-range phones, which is a bad trade on a
 * page where every extra second costs conversions.
 */

/** Longest edge we upload — keeps text crisp while the upload stays small. */
const UPLOAD_EDGE = 1600;
/** Give up rather than leave the buyer staring at a spinner. */
const TIMEOUT_MS = 25_000;

export interface PaymentVerification {
  verified: boolean;
  /** User-facing reason, when the server supplied one. */
  error?: string;
}

const GENERIC_ERROR =
  "We couldn't verify this payment screenshot. If this is a mistake, please send your details along with the screenshot via WhatsApp at 0325-7460090.";

/** Re-encode to a modest JPEG so the upload is fast on Pakistani mobile data. */
async function toUploadBlob(file: File): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file);

    const scale = Math.min(
      1,
      UPLOAD_EDGE / Math.max(bitmap.width, bitmap.height),
    );
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);

    const ctx = canvas.getContext('2d');
    if (!ctx) return file;

    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', 0.85),
    );

    return blob ?? file;
  } catch {
    // HEIC and other formats the browser cannot decode still upload fine raw.
    return file;
  }
}

/** Verify a payment screenshot names the expected payee. */
export async function verifyPaymentScreenshot(
  file: File,
): Promise<PaymentVerification> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const body = new FormData();
    body.append('file', await toUploadBlob(file), 'receipt.jpg');

    const response = await fetch('/api/ocr', {
      method: 'POST',
      body,
      signal: controller.signal,
    });

    const result = await response.json().catch(() => null);

    if (result?.verified) return { verified: true };
    return { verified: false, error: result?.error ?? GENERIC_ERROR };
  } catch (error) {
    console.error('Payment verification failed:', error);
    return { verified: false, error: GENERIC_ERROR };
  } finally {
    clearTimeout(timer);
  }
}
