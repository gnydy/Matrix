import { NextResponse } from 'next/server';
import {
  isResource,
  softDeleteRecord,
  updateRecord,
} from '../../../../../../lib/db/control-store';

export async function PATCH(
  request: Request,
  context: { params: Promise<{ resource: string; id: string }> },
) {
  try {
    const { resource, id } = await context.params;

    if (!isResource(resource)) {
      return NextResponse.json(
        { ok: false, error: `Unknown resource: ${resource}` },
        { status: 404 },
      );
    }

    const body = await request.json();
    const updated = updateRecord(resource, id, body);

    if (!updated) {
      return NextResponse.json(
        { ok: false, error: 'Record not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      ok: true,
      data: updated,
    });
  } catch (error) {
    console.error('PATCH /api/control/data/[resource]/[id] failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Internal API error',
      },
      { status: 500 },
    );
  }
}

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ resource: string; id: string }> },
) {
  try {
    const { resource, id } = await context.params;

    if (!isResource(resource)) {
      return NextResponse.json(
        { ok: false, error: `Unknown resource: ${resource}` },
        { status: 404 },
      );
    }

    const deleted = softDeleteRecord(resource, id);

    if (!deleted) {
      return NextResponse.json(
        { ok: false, error: 'Record not found' },
        { status: 404 },
      );
    }

    return NextResponse.json({
      ok: true,
      data: deleted,
    });
  } catch (error) {
    console.error('DELETE /api/control/data/[resource]/[id] failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Internal API error',
      },
      { status: 500 },
    );
  }
}