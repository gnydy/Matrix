import { NextResponse } from 'next/server';
import { store } from '@/data/store';
import { getInventorySummary } from '@/lib/pos';

export async function GET() {
  return NextResponse.json({ summary: getInventorySummary(), products: store.products });
}
