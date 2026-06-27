import {
  getClientIpFromHeaders,
  isSilentBotReject,
  rateLimit,
  rateLimitKey,
  verifyBotProtection,
} from '@allinall/security';
import { HttpException, HttpStatus } from '@nestjs/common';
import type { Request } from 'express';

export function clientIp(req: Request): string {
  return getClientIpFromHeaders({
    get: (name: string) => {
      const v = req.headers[name.toLowerCase()];
      if (Array.isArray(v)) return v[0] ?? null;
      return v ?? null;
    },
  });
}

export function enforceRateLimit(scope: string, ip: string, limit: number, windowMs: number): void {
  const result = rateLimit(rateLimitKey(scope, ip), limit, windowMs);
  if (!result.ok) {
    throw new HttpException('Too many requests', HttpStatus.TOO_MANY_REQUESTS);
  }
}

export function checkBotProtection(
  body: Record<string, unknown>,
): { blocked: true; ref: string } | null {
  const bot = verifyBotProtection(body);
  if (bot.ok) return null;
  if (isSilentBotReject(bot.reason)) {
    return { blocked: true, ref: fakeLeadRef() };
  }
  throw new HttpException('Invalid request', HttpStatus.BAD_REQUEST);
}

function fakeLeadRef(): string {
  const year = new Date().getFullYear();
  const seq = Math.floor(100000 + Math.random() * 900000);
  return `AIA-${year}-${seq}`;
}
