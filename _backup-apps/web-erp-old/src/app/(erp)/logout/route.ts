
import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAMES = [
  "session",
  "token",
  "accessToken",
  "matrix_session",
  "matrix_token",
  "erp_session",
  "erp_token",
  "allinall_session",
  "aia_session",
  "matrix_erp_session"
];

function clearAuthCookies(response: NextResponse) {
  for (const name of COOKIE_NAMES) {
    const safeName = encodeURIComponent(name);

    response.headers.append(
      'Set-Cookie',
      safeName + '=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax',
    );

    response.headers.append(
      'Set-Cookie',
      safeName + '=; Path=/erp; Max-Age=0; HttpOnly; SameSite=Lax',
    );
  }

  return response;
}

export async function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL('/erp/login', request.url));

  return clearAuthCookies(response);
}

export async function POST() {
  const response = NextResponse.json({ ok: true });

  return clearAuthCookies(response);
}
