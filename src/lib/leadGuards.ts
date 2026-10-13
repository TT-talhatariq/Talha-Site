/**
 * Keeps POST /api/leads cheap for Supabase. In-memory, so per server instance:
 * a speed bump against abuse and repeat saves, not a hard guarantee (same
 * trade-off as rateLimit.ts). The database also ignores no-op saves, so a
 * missed dedupe here costs one read, never a write.
 */

const HOUR_MS = 60 * 60 * 1000;
/** Per IP per hour. Buyers need under 10, but mobile carriers share IPs, so this is loose. */
const PER_IP_LIMIT = 120;
/** Ceiling across everyone, so a botnet cannot run up Supabase usage. */
const GLOBAL_HOURLY_LIMIT = 3000;

interface Bucket {
  count: number;
  resetAt: number;
}

const perIp = new Map<string, Bucket>();
const global: Bucket = { count: 0, resetAt: 0 };

function consume(bucket: Bucket, limit: number, now: number) {
  if (bucket.resetAt <= now) {
    bucket.count = 0;
    bucket.resetAt = now + HOUR_MS;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

export function checkLeadRateLimit(ip: string, now = Date.now()) {
  if (perIp.size > 5000) {
    for (const [key, bucket] of perIp) {
      if (bucket.resetAt <= now) perIp.delete(key);
    }
  }

  let bucket = perIp.get(ip);
  if (!bucket) {
    bucket = { count: 0, resetAt: 0 };
    perIp.set(ip, bucket);
  }
  if (!consume(bucket, PER_IP_LIMIT, now)) {
    return { allowed: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  if (!consume(global, GLOBAL_HOURLY_LIMIT, now)) {
    return { allowed: false, retryAfter: Math.ceil((global.resetAt - now) / 1000) };
  }
  return { allowed: true, retryAfter: 0 };
}

/** Last payload saved per session, to skip identical repeats. */
const SEEN_TTL_MS = 10 * 60 * 1000;
const SEEN_MAX = 5000;
const seen = new Map<string, { signature: string; at: number }>();

export function alreadySaved(sessionId: string, signature: string, now = Date.now()) {
  const hit = seen.get(sessionId);
  return !!hit && hit.signature === signature && now - hit.at < SEEN_TTL_MS;
}

export function rememberSaved(sessionId: string, signature: string, now = Date.now()) {
  if (seen.size >= SEEN_MAX) {
    // Maps iterate in insertion order, so this drops the oldest entries.
    for (const key of seen.keys()) {
      seen.delete(key);
      if (seen.size < SEEN_MAX * 0.9) break;
    }
  }
  seen.delete(sessionId);
  seen.set(sessionId, { signature, at: now });
}

/** Test hook. */
export function resetLeadGuards() {
  perIp.clear();
  seen.clear();
  global.count = 0;
  global.resetAt = 0;
}
