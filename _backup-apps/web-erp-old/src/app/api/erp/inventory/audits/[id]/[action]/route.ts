import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const COOKIE = 'matrix_erp_session';

function apiBase() {
  return process.env.MATRIX_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:4000';
}

async function proxy(method: string, path: string, body?: unknown) {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  const res = await fetch(`${apiBase()}/api/v1${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json();
  return NextResponse.json(json, { status: res.status });
}

export async function PATCH(request: Request, ctx: { params: Promise<{ id: string; action: string }> }) {
  const { id, action } = await ctx.params;
  if (action === 'lines') {
    const body = await request.json();
    return proxy('PATCH', `/erp/inventory/audits/${id}/lines`, body);
  }
  return proxy('PATCH', `/erp/inventory/audits/${id}/${action}`);
}
