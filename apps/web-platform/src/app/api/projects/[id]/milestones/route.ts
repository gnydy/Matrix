import { prisma } from '@allinall/database';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function POST(request: Request, { params }: Params) {
  const { id: projectId } = await params;
  const body = (await request.json()) as { title?: string };

  if (!body.title?.trim()) {
    return NextResponse.json({ error: 'العنوان مطلوب' }, { status: 400 });
  }

  const count = await prisma.projectMilestone.count({ where: { projectId } });
  const milestone = await prisma.projectMilestone.create({
    data: {
      projectId,
      title: body.title.trim(),
      sortOrder: count,
    },
  });

  return NextResponse.json({ id: milestone.id });
}
