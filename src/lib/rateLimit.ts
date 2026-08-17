/**
 * In-memory rate limiting for the OCR route.
 *
 * Caveat worth knowing: serverless platforms run several instances and recycle
 * them, so these counters are per-instance and reset on cold start. That makes
 * this a speed bump against casual abuse, not a hard guarantee. The real
 * backstop against a surprise bill is a budget cap on the Google Cloud project.
 * If you outgrow this, swap the Map for Upstash Redis and keep the interface.
 */

/** Verification attempts allowed per IP within the window. */
const PER_IP_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;

/** Hard ceiling across all users, so a botnet still cannot run up the bill. */
const GLOBAL_DAILY_LIMIT = 300;
const DAY_MS = 24 * 60 * 60 * 1000;

interface Bucket {
  count: number;
  resetAt: number;
}

const perIp = new Map<string, Bucket>();
const global: Bucket = { count: 0, resetAt: 0 };

/** Drop expired buckets so the Map cannot grow without bound. */
function evictExpired(now: number) {
  for (const [ip, bucket] of perIp) {
    if (bucket.resetAt <= now) perIp.delete(ip);
  }
}

function consume(bucket: Bucket, limit: number, windowMs: number, now: number) {
  if (bucket.resetAt <= now) {
    bucket.count = 0;
    bucket.resetAt = now + windowMs;
  }

  if (bucket.count >= limit) {
    return { allowed: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export interface RateLimitResult {
  allowed: boolean;
  /** Seconds until the caller may retry. */
  retryAfter: number;
  /** Attempts left for this IP in the current window. */
  remaining: number;
  reason?: 'ip' | 'global';
}

/** Count one verification attempt from `ip`, reporting whether it may proceed. */
export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();

  if (perIp.size > 5000) evictExpired(now);

  const globalCheck = consume(global, GLOBAL_DAILY_LIMIT, DAY_MS, now);
  if (!globalCheck.allowed) {
    return {
      allowed: false,
      retryAfter: globalCheck.retryAfter,
      remaining: 0,
      reason: 'global',
    };
  }

  let bucket = perIp.get(ip);
  if (!bucket) {
    bucket = { count: 0, resetAt: 0 };
    perIp.set(ip, bucket);
  }

  const ipCheck = consume(bucket, PER_IP_LIMIT, WINDOW_MS, now);
  return {
    allowed: ipCheck.allowed,
    retryAfter: ipCheck.retryAfter,
    remaining: Math.max(0, PER_IP_LIMIT - bucket.count),
    reason: ipCheck.allowed ? undefined : 'ip',
  };
}

/** Best-effort client IP, trusting the proxy headers Vercel sets. */
export function clientIp(headers: Headers) {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return headers.get('x-real-ip') ?? 'unknown';
}
