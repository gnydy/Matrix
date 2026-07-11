import { NextResponse, type NextRequest } from 'next/server';

const SESSION_COOKIE = 'matrix_dashboard_session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLoggedIn =
    request.cookies.get(SESSION_COOKIE)?.value === 'authenticated';

  if (pathname === '/control/login') {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/control', request.url));
    }

    return NextResponse.next();
  }

  if (pathname.startsWith('/control') && !isLoggedIn) {
    return NextResponse.redirect(new URL('/control/login', request.url));
  }

  if (pathname.startsWith('/api/control') && !isLoggedIn) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Unauthorized',
      },
      { status: 401 },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/control/:path*', '/api/control/:path*'],
};