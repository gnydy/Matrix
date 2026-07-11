import { NextResponse } from 'next/server';
import { store } from '@/data/store';

export async function GET() {
  return NextResponse.json({ ok: true, service: store.title, type: 'grocery-pos-fullstack-mock', routes: store.backendRoutes });
}
