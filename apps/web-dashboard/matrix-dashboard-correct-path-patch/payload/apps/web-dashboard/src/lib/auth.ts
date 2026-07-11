import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@allinall/database';
import { randomToken, sha256 } from './security';

const COOKIE_NAME = 'matrix_dashboard_session';

export type DashboardSession = {
  id: string;
  expiresAt: Date;
  user: { id: string; email: string; name: string; role: string; status: string };
};

export async function getDashboardSession(): Promise<DashboardSession | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;
  const session = await prisma.matrixAdminSession.findUnique({
    where: { tokenHash: sha256(token) },
    include: { user: { select: { id: true, email: true, name: true, role: true, status: true } } },
  });
  if (!session || session.expiresAt <= new Date() || session.user.status !== 'active') return null;
  return session as DashboardSession;
}

export async function requireDashboardSession(): Promise<DashboardSession> {
  const session = await getDashboardSession();
  if (!session) redirect('/login');
  return session;
}

export async function createDashboardSession(userId: string): Promise<void> {
  const token = randomToken(32);
  const days = Math.max(1, Math.min(30, Number(process.env.MATRIX_DASHBOARD_SESSION_DAYS || 7)));
  const expiresAt = new Date(Date.now() + days * 86_400_000);
  const h = await headers();
  await prisma.matrixAdminSession.create({
    data: {
      userId,
      tokenHash: sha256(token),
      ipHash: sha256(h.get('x-forwarded-for') || h.get('x-real-ip') || 'unknown'),
      userAgent: h.get('user-agent')?.slice(0, 500),
      expiresAt,
    },
  });
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
  });
}

export async function destroyDashboardSession(): Promise<void> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (token) await prisma.matrixAdminSession.deleteMany({ where: { tokenHash: sha256(token) } });
  store.set(COOKIE_NAME, '', { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 0 });
}
