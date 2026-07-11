import { NextResponse } from 'next/server';
import { getVisiblePortfolioProjects } from '../../../lib/portfolio';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    ok: true,
    projects: getVisiblePortfolioProjects(),
  });
}