import { NextResponse } from 'next/server';
import { site } from '@/data/site';

export async function GET() {
  return NextResponse.json({ ok: true, kind: 'actions', category: site.categoryName, template: site.templateName, records: site.records, modules: site.modules });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({ ok: true, kind: 'actions', received: body, createdAt: new Date().toISOString(), template: site.templateName });
}
