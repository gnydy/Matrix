import {
  CustomerDeployment,
  CustomerStatus,
  prisma,
} from '@allinall/database';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as {
    status?: string;
    deploymentType?: string;
    note?: string;
  };

  const data: {
    status?: CustomerStatus;
    deploymentType?: CustomerDeployment;
  } = {};

  if (body.status) {
    if (!Object.values(CustomerStatus).includes(body.status as CustomerStatus)) {
      return NextResponse.json({ error: 'حالة غير صالحة' }, { status: 400 });
    }
    data.status = body.status as CustomerStatus;
  }

  if (body.deploymentType) {
    if (
      !Object.values(CustomerDeployment).includes(body.deploymentType as CustomerDeployment)
    ) {
      return NextResponse.json({ error: 'نوع نشر غير صالح' }, { status: 400 });
    }
    data.deploymentType = body.deploymentType as CustomerDeployment;
  }

  if (Object.keys(data).length === 0 && !body.note) {
    return NextResponse.json({ error: 'لا توجد بيانات للتحديث' }, { status: 400 });
  }

  await prisma.customer.update({
    where: { id },
    data,
  });

  if (body.note) {
    await prisma.customerNote.create({
      data: { customerId: id, body: body.note },
    });
  }

  return NextResponse.json({ ok: true });
}
