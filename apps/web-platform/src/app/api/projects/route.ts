import { ProjectStatus, prisma } from '@allinall/database';
import { NextResponse } from 'next/server';
import { writeAudit } from '@/lib/audit';
import { generateProjectCode } from '@/lib/codes';

const DEFAULT_MILESTONES = [
  { title: 'تأهيل النظام', tasks: ['إعداد البيئة', 'استيراد البيانات'] },
  { title: 'التطوير والإعداد', tasks: ['ضبط الموديولات', 'اختبار داخلي'] },
  { title: 'التدريب', tasks: ['تدريب المستخدمين'] },
  { title: 'التسليم', tasks: ['Go-live', 'متابعة ما بعد التسليم'] },
];

export async function POST(request: Request) {
  const body = (await request.json()) as {
    customerId?: string;
    quoteId?: string;
    name?: string;
    description?: string;
    dueDate?: string;
  };

  if (!body.customerId || !body.name?.trim()) {
    return NextResponse.json({ error: 'بيانات غير مكتملة' }, { status: 400 });
  }

  if (body.quoteId) {
    const quote = await prisma.quote.findFirst({
      where: { id: body.quoteId, customerId: body.customerId, status: 'accepted' },
      include: { project: true },
    });
    if (!quote) {
      return NextResponse.json({ error: 'عرض غير صالح أو غير مقبول' }, { status: 400 });
    }
    if (quote.project) {
      return NextResponse.json({ error: 'يوجد مشروع لهذا العرض' }, { status: 409 });
    }
  }

  const project = await prisma.$transaction(async (tx) => {
    const created = await tx.project.create({
      data: {
        code: generateProjectCode(),
        name: body.name!.trim(),
        customerId: body.customerId!,
        quoteId: body.quoteId || null,
        description: body.description?.trim() || null,
        dueDate: body.dueDate ? new Date(body.dueDate) : null,
        status: ProjectStatus.planning,
        startDate: new Date(),
      },
    });

    for (let i = 0; i < DEFAULT_MILESTONES.length; i++) {
      const m = DEFAULT_MILESTONES[i];
      const milestone = await tx.projectMilestone.create({
        data: { projectId: created.id, title: m.title, sortOrder: i },
      });
      for (let j = 0; j < m.tasks.length; j++) {
        await tx.projectTask.create({
          data: { milestoneId: milestone.id, title: m.tasks[j], sortOrder: j },
        });
      }
    }

    return created;
  });

  await writeAudit({
    action: 'create',
    entity: 'project',
    entityId: project.id,
    metadata: { code: project.code, customerId: body.customerId },
  });

  return NextResponse.json({ id: project.id, code: project.code });
}
