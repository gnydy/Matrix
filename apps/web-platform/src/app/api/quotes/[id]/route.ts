import { QuoteStatus, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as { status?: string; note?: string };

  if (!body.status || !Object.values(QuoteStatus).includes(body.status as QuoteStatus)) {
    return NextResponse.json({ error: 'حالة غير صالحة' }, { status: 400 });
  }

  const status = body.status as QuoteStatus;
  const data: {
    status: QuoteStatus;
    sentAt?: Date;
    acceptedAt?: Date;
  } = { status };

  if (status === QuoteStatus.sent) {
    data.sentAt = new Date();
  }
  if (status === QuoteStatus.accepted) {
    data.acceptedAt = new Date();
  }

  await prisma.quote.update({ where: { id }, data });

  if (body.note) {
    await prisma.quoteNote.create({
      data: { quoteId: id, body: body.note },
    });
  }

  return NextResponse.json({ ok: true });
}
