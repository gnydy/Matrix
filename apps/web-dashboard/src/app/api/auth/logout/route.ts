import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'matrix_dashboard_session';

export async function POST() {
  const response = NextResponse.json({
    ok: true,
  });

  response.cookies.set({
    name: SESSION_COOKIE,
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    path: '/',
    maxAge: 0,
  });

  return response;
}