import { NextResponse } from 'next/server';
import {
  softDeletePortfolioProject,
  updatePortfolioProject,
} from '../../../../../lib/db/dashboard-db';

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const body = await request.json();

  const updated = updatePortfolioProject(id, body);

  if (!updated) {
    return NextResponse.json(
      { ok: false, error: 'Portfolio project not found' },
      { status: 404 },
    );
  }

  return NextResponse.json({
    ok: true,
    data: updated,
  });
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const deleted = softDeletePortfolioProject(id);

  if (!deleted) {
    return NextResponse.json(
      { ok: false, error: 'Portfolio project not found' },
      { status: 404 },
    );
  }

  return NextResponse.json({
    ok: true,
    data: deleted,
  });
}