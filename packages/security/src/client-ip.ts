export function getClientIpFromHeaders(
  headers: Headers | { get(name: string): string | null },
): string {
  const forwarded = headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first.slice(0, 64);
  }
  const realIp = headers.get('x-real-ip');
  if (realIp) return realIp.trim().slice(0, 64);
  return 'unknown';
}
