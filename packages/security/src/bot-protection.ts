export const HONEYPOT_FIELD = 'website';
export const FORM_STARTED_FIELD = 'formStartedAt';

const BAD_BOT_PATTERNS = [
  'curl/',
  'wget/',
  'python-requests',
  'scrapy',
  'httpclient',
  'libwww-perl',
  'sqlmap',
  'nikto',
  'nmap',
  'masscan',
  'zgrab',
  'semrushbot',
  'ahrefsbot',
  'mj12bot',
  'dotbot',
  'petalbot',
  'bytespider',
  'gptbot',
  'claudebot',
  'ccbot',
];

const ALLOWED_BOT_PATTERNS = [
  'googlebot',
  'bingbot',
  'yandexbot',
  'duckduckbot',
  'slurp',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
];

export function isBlockedBotUserAgent(userAgent: string | null | undefined): boolean {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  if (ALLOWED_BOT_PATTERNS.some((b) => ua.includes(b))) return false;
  return BAD_BOT_PATTERNS.some((b) => ua.includes(b));
}

export function verifyBotProtection(
  body: Record<string, unknown>,
  minFillMs = 3000,
): { ok: true } | { ok: false; reason: string } {
  const honeypot = body[HONEYPOT_FIELD] ?? body._gotcha ?? body.url ?? body.company_website;
  if (honeypot != null && String(honeypot).trim() !== '') {
    return { ok: false, reason: 'honeypot' };
  }

  const startedRaw = body[FORM_STARTED_FIELD];
  if (startedRaw != null && startedRaw !== '') {
    const started = Number(startedRaw);
    if (!Number.isFinite(started) || Date.now() - started < minFillMs) {
      return { ok: false, reason: 'too_fast' };
    }
  }

  return { ok: true };
}

/** Silent reject for bots — returns fake success to avoid training spammers */
export function isSilentBotReject(reason: string): boolean {
  return reason === 'honeypot' || reason === 'too_fast';
}
