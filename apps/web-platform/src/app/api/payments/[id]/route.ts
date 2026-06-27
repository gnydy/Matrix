import { PaymentStatus, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as { status?: string };

  if (!body.status || !Object.values(PaymentStatus).includes(body.status as PaymentStatus)) {
    return NextResponse.json({ error: 'حالة غير صالحة' }, { status: 400 });
  }

  const status = body.status as PaymentStatus;
  const data: { status: PaymentStatus; paidAt?: Date | null } = { status };

  if (status === PaymentStatus.recorded) {
    data.paidAt = new Date();
  }

  await prisma.payment.update({ where: { id }, data });

  return NextResponse.json({ ok: true });
}
