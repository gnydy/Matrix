import { NextRequest, NextResponse } from 'next/server';
import { store } from '@/data/store';
import { createReceipt } from '@/lib/pos';

export async function GET() {
  return NextResponse.json({ data: store.sales, count: store.sales.length });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body?.items?.length) {
    return NextResponse.json({ error: 'items are required' }, { status: 400 });
  }
  const receipt = createReceipt(body);
  return NextResponse.json({ message: 'Sale created in mock API', receipt }, { status: 201 });
}
