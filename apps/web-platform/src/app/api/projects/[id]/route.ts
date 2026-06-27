import { ProjectStatus, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';
import { writeAudit } from '@/lib/audit';

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as { status?: string };

  if (!body.status || !Object.values(ProjectStatus).includes(body.status as ProjectStatus)) {
    return NextResponse.json({ error: 'حالة غير صالحة' }, { status: 400 });
  }

  await prisma.project.update({
    where: { id },
    data: { status: body.status as ProjectStatus },
  });

  await writeAudit({
    action: 'status_change',
    entity: 'project',
    entityId: id,
    metadata: { status: body.status },
  });

  return NextResponse.json({ ok: true });
}
