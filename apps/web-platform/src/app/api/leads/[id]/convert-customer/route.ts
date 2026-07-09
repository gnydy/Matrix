import {
  CustomerDeployment,
  CustomerStatus,
  LeadStatus,
  prisma,
} from '@allinall/database';
import { NextResponse } from 'next/server';
import { writeAudit } from '@/lib/audit';
import { generateCustomerCode } from '@/lib/codes';

type Params = { params: Promise<{ id: string }> };

export async function POST(_request: Request, { params }: Params) {
  const { id: leadId } = await params;

  const lead = await prisma.lead.findUnique({
    where: { id: leadId },
    include: { customer: true },
  });

  if (!lead) {
    return NextResponse.json({ error: 'الطلب غير موجود' }, { status: 404 });
  }

  if (lead.customer) {
    return NextResponse.json(
      { error: 'تم تحويل هذا الطلب مسبقًا', customerId: lead.customer.id },
      { status: 409 },
    );
  }

  const customer = await prisma.$transaction(async (tx) => {
    const created = await tx.customer.create({
      data: {
        code: generateCustomerCode(),
        name: lead.name,
        company: lead.company,
        phone: lead.phone,
        email: lead.email,
        planId: lead.planId,
        leadId: lead.id,
        deploymentType: CustomerDeployment.saas,
        status: CustomerStatus.onboarding,
        notes: {
          create: {
            body: `تم التحويل من الطلب ${lead.ref}`,
          },
        },
      },
    });

    await tx.lead.update({
      where: { id: leadId },
      data: { status: LeadStatus.won },
    });

    await tx.leadNote.create({
      data: {
        leadId,
        body: `تم تحويل الطلب إلى عميل ${created.code}`,
      },
    });

    return created;
  });

  await writeAudit({
    action: 'convert',
    entity: 'lead',
    entityId: leadId,
    metadata: { customerId: customer.id, code: customer.code },
  });

  return NextResponse.json({ customerId: customer.id, code: customer.code });
}
