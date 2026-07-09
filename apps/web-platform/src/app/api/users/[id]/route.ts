import { AdminRole, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';
import { writeAudit } from '@/lib/audit';

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as {
    name?: string;
    role?: string;
    active?: boolean;
  };

  const data: { name?: string; role?: AdminRole; active?: boolean } = {};
  if (body.name) data.name = body.name.trim();
  if (body.role && Object.values(AdminRole).includes(body.role as AdminRole)) {
    data.role = body.role as AdminRole;
  }
  if (typeof body.active === 'boolean') data.active = body.active;

  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: 'لا توجد بيانات' }, { status: 400 });
  }

  const user = await prisma.adminUser.update({ where: { id }, data });
  await writeAudit({
    action: 'update',
    entity: 'admin_user',
    entityId: id,
    metadata: data,
  });

  return NextResponse.json(user);
}
