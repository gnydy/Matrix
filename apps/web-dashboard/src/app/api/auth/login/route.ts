import { NextResponse } from 'next/server';

const SESSION_COOKIE = 'matrix_dashboard_session';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const password = String(body.password ?? '').trim();
    const expectedPassword =
      String(process.env.DASHBOARD_OWNER_PASSWORD ?? 'Owner@Matrix-2026-Login!91').trim();

    if (password !== expectedPassword) {
      return NextResponse.json(
        {
          ok: false,
          error: 'رمز المالك غير صحيح.',
        },
        { status: 401 },
      );
    }

    const response = NextResponse.json({
      ok: true,
    });

    response.cookies.set({
      name: SESSION_COOKIE,
      value: 'authenticated',
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/',
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'فشل تسجيل الدخول.',
      },
      { status: 500 },
    );
  }
}