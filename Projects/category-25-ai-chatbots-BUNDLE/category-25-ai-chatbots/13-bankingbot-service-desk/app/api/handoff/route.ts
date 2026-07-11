import { NextResponse } from 'next/server';
import { site } from '@/data/site';
export async function GET() { return NextResponse.json({ module: 'handoff', records: site.records, stats: site.stats }); }
export async function POST(request: Request) { const body = await request.json().catch(() => ({})); return NextResponse.json({ ok: true, module: 'handoff', received: body, id: 'mock-' + Date.now() }, { status: 201 }); }
