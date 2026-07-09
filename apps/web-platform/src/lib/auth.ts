import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const COOKIE = 'matrix_admin_session';

function getSecret() {
  const secret = process.env.JWT_SECRET ?? process.env.SESSION_SECRET;
  if (!secret) throw new Error('JWT_SECRET غير معرّف');
  return new TextEncoder().encode(secret);
}

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  tenantId: string | null;
  roles: string[];
  permissions: string[];
};

function apiBase() {
  return process.env.MATRIX_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:4000';
}

export async function createSessionFromToken(token: string, user: SessionUser) {
  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/control',
    maxAge: 60 * 60 * 24 * 7,
  });
  jar.set('matrix_admin_profile', JSON.stringify(user), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/control',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const jar = await cookies();
  jar.set(COOKIE, '', { path: '/control', maxAge: 0 });
  jar.set('matrix_admin_profile', '', { path: '/control', maxAge: 0 });
}

export async function getSession(): Promise<SessionUser | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, getSecret());
    return {
      id: String(payload.sub),
      email: String(payload.email),
      name: String(payload.name ?? payload.email),
      tenantId: payload.tenantId ? String(payload.tenantId) : null,
      roles: Array.isArray(payload.roles) ? payload.roles.map(String) : [],
      permissions: Array.isArray(payload.permissions) ? payload.permissions.map(String) : [],
    };
  } catch {
    return null;
  }
}

export async function loginViaApi(email: string, password: string) {
  const res = await fetch(`${apiBase()}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const json = (await res.json()) as {
    ok?: boolean;
    data?: { token: string; user: SessionUser };
    error?: string;
  };
  if (!res.ok || !json.ok || !json.data?.token) {
    return { ok: false as const, error: json.error ?? 'بيانات الدخول غير صحيحة' };
  }
  return { ok: true as const, token: json.data.token, user: json.data.user };
}