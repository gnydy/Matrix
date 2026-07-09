'use client';

const VISITOR_KEY = 'matrix-visitor-id';
const SESSION_KEY = 'matrix-session-id';

export function getVisitorId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}

export function getSessionId(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem(SESSION_KEY);
}

export function setSessionId(id: string) {
  sessionStorage.setItem(SESSION_KEY, id);
}

export async function ensureSession(): Promise<string | null> {
  const existing = getSessionId();
  if (existing) return existing;

  const res = await fetch('/api/public/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      visitorId: getVisitorId(),
      referrer: document.referrer || null,
      locale: navigator.language,
    }),
  });

  if (!res.ok) return null;
  const data = (await res.json()) as { sessionId: string };
  setSessionId(data.sessionId);
  return data.sessionId;
}

export async function trackEvent(
  type: string,
  path?: string,
  metadata?: Record<string, unknown>,
) {
  const sessionId = getSessionId() ?? (await ensureSession());
  if (!sessionId) return;

  await fetch('/api/public/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId, type, path: path ?? window.location.pathname, metadata }),
  });
}

export async function submitLead(payload: Record<string, unknown>) {
  const sessionId = getSessionId() ?? (await ensureSession());
  const res = await fetch('/api/public/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, sessionId, visitorId: getVisitorId() }),
  });
  if (!res.ok) {
    const err = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(err.error ?? 'فشل إرسال الطلب');
  }
  return res.json() as Promise<{ ref: string }>;
}
