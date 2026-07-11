import { NextRequest, NextResponse } from 'next/server';
import { createReceipt } from '@/lib/pos';

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'invalid json' }, { status: 400 });
  return NextResponse.json(createReceipt(body));
}
