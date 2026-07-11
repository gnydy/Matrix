import { NextResponse } from 'next/server';
import { site } from '@/data/site';
export async function GET() { return NextResponse.json({ ok: true, template: site.title, category: site.category, modules: site.modules.length }); }
