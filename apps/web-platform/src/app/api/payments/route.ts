import { PaymentStatus, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';
import { writeAudit } from '@/lib/audit';
import { generatePaymentRef } from '@/lib/codes';

export async function POST(request: Request) {
  const body = (await request.json()) as {
    customerId?: string;
    quoteId?: string;
    amount?: number;
    dueDate?: string;
    method?: string;
    notes?: string;
  };

  if (!body.customerId || body.amount == null || body.amount <= 0) {
    return NextResponse.json({ error: 'بيانات غير مكتملة' }, { status: 400 });
  }

  const customer = await prisma.customer.findUnique({ where: { id: body.customerId } });
  if (!customer) {
    return NextResponse.json({ error: 'العميل غير موجود' }, { status: 404 });
  }

  if (body.quoteId) {
    const quote = await prisma.quote.findFirst({
      where: { id: body.quoteId, customerId: body.customerId },
    });
    if (!quote) {
      return NextResponse.json({ error: 'العرض غير مرتبط بهذا العميل' }, { status: 400 });
    }
    const existing = await prisma.payment.findUnique({ where: { quoteId: body.quoteId } });
    if (existing) {
      return NextResponse.json({ error: 'يوجد دفعة مسجّلة لهذا العرض' }, { status: 409 });
    }
  }

  const payment = await prisma.payment.create({
    data: {
      ref: generatePaymentRef(),
      customerId: body.customerId,
      quoteId: body.quoteId || null,
      amount: body.amount,
      dueDate: body.dueDate ? new Date(body.dueDate) : null,
      method: body.method || null,
      notes: body.notes?.trim() || null,
      status: PaymentStatus.pending,
    },
  });

  await writeAudit({
    action: 'create',
    entity: 'payment',
    entityId: payment.id,
    metadata: { ref: payment.ref, amount: body.amount },
  });

  return NextResponse.json({ id: payment.id, ref: payment.ref });
}
