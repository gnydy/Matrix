import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const COOKIE = 'matrix_erp_session';
const PROFILE_COOKIE = 'matrix_erp_profile';

function getSecretText() {
  return process.env.JWT_SECRET ?? process.env.SESSION_SECRET ?? 'dev_secret_change_me';
}

function getSecret() {
  return new TextEncoder().encode(getSecretText());
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
  return (process.env.MATRIX_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:4000').trim().replace(/\/$/, '');
}

function demoAllowed() {
  return process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_ALLOW_DEMO_LOGIN === 'true';
}

async function createDemoToken(email: string) {
  const user: SessionUser = {
    id: 'demo-admin',
    email,
    name: 'مدير النظام',
    tenantId: 'demo-company',
    roles: ['owner', 'admin'],
    permissions: ['*'],
  };

  const token = await new SignJWT({
    email: user.email,
    name: user.name,
    tenantId: user.tenantId,
    roles: user.roles,
    permissions: user.permissions,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret());

  return { token, user };
}

export async function createSessionFromToken(token: string, user: SessionUser) {
  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/erp',
    maxAge: 60 * 60 * 24 * 7,
  });
  jar.set(PROFILE_COOKIE, JSON.stringify(user), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/erp',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const jar = await cookies();
  for (const path of ['/', '/erp']) {
    jar.set(COOKIE, '', { path, maxAge: 0 });
    jar.set(PROFILE_COOKIE, '', { path, maxAge: 0 });
  }
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

export async function getToken(): Promise<string | null> {
  const jar = await cookies();
  return jar.get(COOKIE)?.value ?? null;
}

export async function loginViaApi(email: string, password: string) {
  try {
    const res = await fetch(`${apiBase()}/api/v1/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      cache: 'no-store',
    });

    const json = (await res.json().catch(() => null)) as {
      ok?: boolean;
      data?: { token: string; user: SessionUser };
      error?: string;
      message?: string;
    } | null;

    if (res.ok && json?.ok && json.data?.token) {
      return { ok: true as const, token: json.data.token, user: json.data.user };
    }

    if (demoAllowed() && email === 'admin@matrix.local' && password === 'Admin@2030') {
      const demo = await createDemoToken(email);
      return { ok: true as const, token: demo.token, user: demo.user };
    }

    return { ok: false as const, error: json?.error ?? json?.message ?? 'بيانات الدخول غير صحيحة' };
  } catch {
    if (demoAllowed() && email === 'admin@matrix.local' && password === 'Admin@2030') {
      const demo = await createDemoToken(email);
      return { ok: true as const, token: demo.token, user: demo.user };
    }

    return { ok: false as const, error: 'تعذر الاتصال بالـ API' };
  }
}
