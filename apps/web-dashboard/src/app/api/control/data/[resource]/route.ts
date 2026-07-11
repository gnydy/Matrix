import { NextResponse } from 'next/server';
import {
  createRecord,
  isResource,
  listRecords,
  listTrash,
  seedDB,
} from '../../../../../lib/db/control-store';

export async function GET(
  _request: Request,
  context: { params: Promise<{ resource: string }> },
) {
  try {
    const { resource } = await context.params;

    seedDB();

    if (resource === 'trash') {
      return NextResponse.json({
        ok: true,
        data: listTrash(),
      });
    }

    if (!isResource(resource)) {
      return NextResponse.json(
        { ok: false, error: `Unknown resource: ${resource}` },
        { status: 404 },
      );
    }

    return NextResponse.json({
      ok: true,
      data: listRecords(resource),
    });
  } catch (error) {
    console.error('GET /api/control/data/[resource] failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Internal API error',
        data: [],
      },
      { status: 500 },
    );
  }
}

export async function POST(
  request: Request,
  context: { params: Promise<{ resource: string }> },
) {
  try {
    const { resource } = await context.params;

    if (!isResource(resource)) {
      return NextResponse.json(
        { ok: false, error: `Unknown resource: ${resource}` },
        { status: 404 },
      );
    }

    if (resource === 'auditLogs') {
      return NextResponse.json(
        { ok: false, error: 'Audit logs are read-only' },
        { status: 403 },
      );
    }

    const body = await request.json();
    const record = createRecord(resource, body);

    return NextResponse.json({
      ok: true,
      data: record,
    });
  } catch (error) {
    console.error('POST /api/control/data/[resource] failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Internal API error',
      },
      { status: 500 },
    );
  }
}