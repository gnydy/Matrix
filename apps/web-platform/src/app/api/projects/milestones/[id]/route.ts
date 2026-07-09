import { prisma } from '@allinall/database';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function PATCH(request: Request, { params }: Params) {
  const { id } = await params;
  const body = (await request.json()) as { done?: boolean };

  if (typeof body.done !== 'boolean') {
    return NextResponse.json({ error: 'بيانات غير صالحة' }, { status: 400 });
  }

  await prisma.projectMilestone.update({
    where: { id },
    data: { done: body.done },
  });

  return NextResponse.json({ ok: true });
}
