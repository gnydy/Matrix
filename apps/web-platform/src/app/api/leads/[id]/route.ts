import { LeadStatus, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as { status?: string; note?: string };

  if (!body.status || !Object.values(LeadStatus).includes(body.status as LeadStatus)) {
    return NextResponse.json({ error: 'حالة غير صالحة' }, { status: 400 });
  }

  await prisma.lead.update({
    where: { id },
    data: { status: body.status as LeadStatus },
  });

  if (body.note) {
    await prisma.leadNote.create({
      data: { leadId: id, body: body.note },
    });
  }

  return NextResponse.json({ ok: true });
}
