import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate, projectStatusLabels } from '@/lib/labels';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
    include: {
      customer: { select: { id: true, code: true, name: true } },
      _count: { select: { milestones: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">المشاريع</h2>
          <p className="mt-1 text-sm text-muted">تنفيذ وتسليم بعد قبول العرض</p>
        </div>
        <Link href="/projects/new" className="btn-primary inline-flex min-h-[44px] items-center px-4">
          مشروع جديد
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>الكود</th>
              <th>الاسم</th>
              <th>العميل</th>
              <th>المراحل</th>
              <th>الحالة</th>
              <th>الاستحقاق</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td>
                  <Link href={`/projects/${p.id}`} className="font-medium text-primary hover:underline">
                    {p.code}
                  </Link>
                </td>
                <td>{p.name}</td>
                <td>
                  <Link href={`/customers/${p.customer.id}`} className="hover:underline">
                    {p.customer.name}
                  </Link>
                </td>
                <td>{p._count.milestones}</td>
                <td>
                  <span className="badge bg-primary/15 text-primary">
                    {projectStatusLabels[p.status] ?? p.status}
                  </span>
                </td>
                <td className="text-muted">{p.dueDate ? formatDate(p.dueDate) : '—'}</td>
              </tr>
            ))}
            {projects.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-muted">
                  لا توجد مشاريع — أنشئ مشروعاً من عرض مقبول
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
