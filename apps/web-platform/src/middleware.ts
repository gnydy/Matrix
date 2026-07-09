import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import { securityHeaders } from '@allinall/security/headers';

const COOKIE = 'matrix_admin_session';

function withSecurityHeaders(response: NextResponse): NextResponse {
  for (const [key, value] of Object.entries(securityHeaders())) {
    response.headers.set(key, value);
  }
  return response;
}

async function verifySessionToken(token: string): Promise<boolean> {
  const secret = process.env.JWT_SECRET ?? process.env.SESSION_SECRET;
  if (!secret || secret.length < 8) return false;
  try {
    await jwtVerify(token, new TextEncoder().encode(secret));
    return true;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth')) {
    return withSecurityHeaders(NextResponse.next());
  }

  const token = request.cookies.get(COOKIE)?.value;
  if (!token || !(await verifySessionToken(token))) {
    return withSecurityHeaders(NextResponse.redirect(new URL('/login', request.url)));
  }

  return withSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
