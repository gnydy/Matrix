import { NextResponse } from 'next/server';
import { dashboardSummary } from '../../../../lib/db/control-store';

export async function GET() {
  try {
    return NextResponse.json({
      ok: true,
      data: dashboardSummary(),
    });
  } catch (error) {
    console.error('GET /api/control/dashboard failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Internal API error',
        data: {
          counts: {},
          recentAudits: [],
        },
      },
      { status: 500 },
    );
  }
}