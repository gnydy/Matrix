import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@allinall/database';
import { ProjectStatusForm } from '@/components/project-status-form';
import { ProjectMilestonesPanel } from '@/components/project-milestones-panel';
import { formatDate, projectStatusLabels } from '@/lib/labels';

type Props = { params: Promise<{ id: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await prisma.project.findUnique({
    where: { id },
    include: {
      customer: true,
      quote: true,
      milestones: {
        orderBy: { sortOrder: 'asc' },
        include: { tasks: { orderBy: { sortOrder: 'asc' } } },
      },
    },
  });

  if (!project) notFound();

  const doneMilestones = project.milestones.filter((m) => m.done).length;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/projects" className="text-sm text-primary hover:underline">
          ← المشاريع
        </Link>
        <h2 className="mt-2 text-2xl font-bold">{project.code}</h2>
        <p className="mt-1 text-muted">
          {project.name} · {projectStatusLabels[project.status]}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="stat-card grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted">العميل</p>
              <Link href={`/customers/${project.customer.id}`} className="font-semibold text-primary hover:underline">
                {project.customer.name}
              </Link>
            </div>
            <div>
              <p className="text-sm text-muted">التقدّم</p>
              <p className="font-semibold">
                {doneMilestones}/{project.milestones.length} مراحل
              </p>
            </div>
            {project.quote && (
              <div>
                <p className="text-sm text-muted">العرض</p>
                <Link href={`/quotes/${project.quote.id}`} className="font-semibold text-primary hover:underline">
                  {project.quote.number}
                </Link>
              </div>
            )}
            <div>
              <p className="text-sm text-muted">التسليم المستهدف</p>
              <p className="font-semibold">
                {project.dueDate ? formatDate(project.dueDate) : '—'}
              </p>
            </div>
          </div>

          {project.description && (
            <div className="stat-card">
              <p className="text-sm text-muted">الوصف</p>
              <p className="mt-2 whitespace-pre-wrap">{project.description}</p>
            </div>
          )}

          <ProjectMilestonesPanel
            projectId={project.id}
            milestones={project.milestones.map((m) => ({
              id: m.id,
              title: m.title,
              done: m.done,
              tasks: m.tasks.map((t) => ({ id: t.id, title: t.title, done: t.done })),
            }))}
          />
        </div>

        <ProjectStatusForm projectId={project.id} currentStatus={project.status} />
      </div>
    </div>
  );
}
