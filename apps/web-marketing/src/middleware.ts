import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isBlockedBotUserAgent } from '@allinall/security/bot-protection';
import { securityHeaders } from '@allinall/security/headers';

function withSecurityHeaders(response: NextResponse): NextResponse {
  for (const [key, value] of Object.entries(securityHeaders())) {
    response.headers.set(key, value);
  }
  return response;
}

export function middleware(request: NextRequest) {
  const ua = request.headers.get('user-agent');
  const path = request.nextUrl.pathname;

  if (path.startsWith('/api/') && isBlockedBotUserAgent(ua)) {
    return withSecurityHeaders(new NextResponse(null, { status: 403 }));
  }

  return withSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|og.png|twitter-image.png|sitemap.xml|robots.txt).*)'],
};
