import { NextResponse } from 'next/server';
import { createPublicLead } from '../../../../lib/dashboard/dashboard-leads-store';

function badRequest(message: string) {
  return NextResponse.json(
    {
      ok: false,
      error: message,
    },
    { status: 400 },
  );
}

export async function POST(request: Request) {
  const body = await request.json();

  const honeypot = String(body.website ?? '').trim();

  if (honeypot) {
    return NextResponse.json({
      ok: true,
      skipped: true,
    });
  }

  const startedAt = Number(body.formStartedAt ?? 0);

  if (startedAt && Date.now() - startedAt < 1200) {
    return badRequest('Form submitted too fast.');
  }

  const name = String(body.name ?? '').trim();
  const phone = String(body.phone ?? '').trim();

  if (name.length < 2) {
    return badRequest('Name is required.');
  }

  if (phone.length < 6) {
    return badRequest('Phone is required.');
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    '';

  const userAgent = request.headers.get('user-agent') ?? '';

  const lead = createPublicLead({
    name,
    phone,
    email: body.email,
    company: body.company,
    requestType: body.requestType,
    service: body.service,
    budget: body.budget,
    message: body.message,
    page: body.page,
    source: body.source ?? 'website',
    locale: body.locale ?? 'ar',
    ip,
    userAgent,
  });

  return NextResponse.json({
    ok: true,
    leadNumber: lead.leadNumber,
    data: {
      id: lead.id,
      leadNumber: lead.leadNumber,
      status: lead.status,
      createdAt: lead.createdAt,
    },
  });
}