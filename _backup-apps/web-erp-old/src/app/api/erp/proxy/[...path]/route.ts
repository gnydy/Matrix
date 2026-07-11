import { NextResponse } from 'next/server';
import { getToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: Promise<{
    path?: string[];
  }>;
};

async function proxy(request: Request, context: RouteContext) {
  const token = await getToken();

  if (!token) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { path = [] } = await context.params;
  const sourceUrl = new URL(request.url);
  const baseUrl = process.env.MATRIX_API_URL || 'http://127.0.0.1:4000';
  const targetUrl = `${baseUrl}/api/v1/erp/${path.join('/')}${sourceUrl.search}`;

  const headers = new Headers();
  headers.set('Authorization', `Bearer ${token}`);

  const contentType = request.headers.get('content-type');
  if (contentType) headers.set('Content-Type', contentType);

  const init: RequestInit = {
    method: request.method,
    headers,
    cache: 'no-store',
  };

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    const body = await request.text();
    if (body) init.body = body;
  }

  const response = await fetch(targetUrl, init);
  const text = await response.text();

  return new NextResponse(text, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('content-type') || 'application/json',
    },
  });
}

export function GET(request: Request, context: RouteContext) {
  return proxy(request, context);
}

export function POST(request: Request, context: RouteContext) {
  return proxy(request, context);
}

export function PATCH(request: Request, context: RouteContext) {
  return proxy(request, context);
}

export function PUT(request: Request, context: RouteContext) {
  return proxy(request, context);
}

export function DELETE(request: Request, context: RouteContext) {
  return proxy(request, context);
}