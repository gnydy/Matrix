import { QuoteStatus, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';
import { writeAudit } from '@/lib/audit';
import { generateQuoteNumber } from '@/lib/codes';

export async function POST(request: Request) {
  const body = (await request.json()) as {
    customerId?: string;
    title?: string;
    description?: string;
    amount?: number;
    validUntil?: string;
  };

  if (!body.customerId) {
    return NextResponse.json({ error: 'العميل مطلوب' }, { status: 400 });
  }

  const customer = await prisma.customer.findUnique({ where: { id: body.customerId } });
  if (!customer) {
    return NextResponse.json({ error: 'العميل غير موجود' }, { status: 404 });
  }

  const quote = await prisma.quote.create({
    data: {
      number: generateQuoteNumber(),
      customerId: body.customerId,
      title: body.title?.trim() || null,
      description: body.description?.trim() || null,
      amount: body.amount ?? null,
      validUntil: body.validUntil ? new Date(body.validUntil) : null,
      status: QuoteStatus.draft,
    },
  });

  await writeAudit({
    action: 'create',
    entity: 'quote',
    entityId: quote.id,
    metadata: { number: quote.number, customerId: body.customerId },
  });

  return NextResponse.json({ id: quote.id, number: quote.number });
}
