import {
  getClientIpFromHeaders,
  isSilentBotReject,
  rateLimit,
  rateLimitKey,
  verifyBotProtection,
} from '@allinall/security';
import { NextResponse } from 'next/server';

export function jsonOk<T>(data: T, status = 200) {
  return NextResponse.json(data, { status });
}

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status });
}

export function checkRateLimit(
  request: Request,
  scope: string,
  limit: number,
  windowMs: number,
): NextResponse | null {
  const ip = getClientIpFromHeaders(request.headers);
  const result = rateLimit(rateLimitKey(scope, ip), limit, windowMs);
  if (!result.ok) {
    return jsonError('طلبات كثيرة — حاول لاحقاً', 429);
  }
  return null;
}

export function checkBotProtection(
  body: Record<string, unknown>,
): NextResponse | { silent: true } | null {
  const bot = verifyBotProtection(body);
  if (bot.ok) return null;
  if (isSilentBotReject(bot.reason)) {
    return { silent: true };
  }
  return jsonError('تعذر معالجة الطلب', 400);
}

export function silentLeadOk() {
  const year = new Date().getFullYear();
  const seq = Math.floor(100000 + Math.random() * 900000);
  return jsonOk({ ref: `AIA-${year}-${seq}`, id: 'blocked' });
}

/** @deprecated use getClientIpFromHeaders from @allinall/security */
export function getClientIp(request: Request): string | null {
  const ip = getClientIpFromHeaders(request.headers);
  return ip === 'unknown' ? null : ip;
}
