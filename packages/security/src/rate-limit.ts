type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();

export type RateLimitResult = {
  ok: boolean;
  limit: number;
  remaining: number;
  retryAfterSec?: number;
};

export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  let bucket = store.get(key);

  if (!bucket || now >= bucket.resetAt) {
    bucket = { count: 0, resetAt: now + windowMs };
    store.set(key, bucket);
  }

  bucket.count += 1;
  if (store.size > 10_000) pruneRateLimitStore();
  const remaining = Math.max(0, limit - bucket.count);

  if (bucket.count > limit) {
    return {
      ok: false,
      limit,
      remaining: 0,
      retryAfterSec: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  return { ok: true, limit, remaining };
}

export function rateLimitKey(scope: string, ip: string): string {
  return `${scope}:${ip}`;
}

/** Prune stale buckets occasionally (dev/long-running processes) */
export function pruneRateLimitStore(maxAgeMs = 60 * 60 * 1000): void {
  const now = Date.now();
  for (const [key, bucket] of store.entries()) {
    if (now - bucket.resetAt > maxAgeMs) store.delete(key);
  }
}
