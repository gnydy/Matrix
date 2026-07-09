import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate } from '@/lib/labels';

export default async function VisitorsPage() {
  const visitors = await prisma.visitorSession.findMany({
    orderBy: { lastSeenAt: 'desc' },
    take: 100,
    include: {
      _count: { select: { pageViews: true, events: true, leads: true } },
      pageViews: { orderBy: { enteredAt: 'desc' }, take: 1 },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">الزوار</h2>
        <p className="mt-1 text-sm text-muted">من دخل الموقع، ماذا شاهد، ومتى خرج</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>معرّف الزائر</th>
              <th>آخر صفحة</th>
              <th>صفحات</th>
              <th>أحداث</th>
              <th>طلبات</th>
              <th>نشط</th>
              <th>أول زيارة</th>
              <th>آخر نشاط</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((v) => (
              <tr key={v.id}>
                <td>
                  <Link href={`/visitors/${v.id}`} className="font-medium text-primary hover:underline">
                    {v.visitorId.slice(0, 12)}…
                  </Link>
                </td>
                <td className="text-muted">{v.pageViews[0]?.path ?? '—'}</td>
                <td>{v._count.pageViews}</td>
                <td>{v._count.events}</td>
                <td>{v._count.leads}</td>
                <td>
                  {v.isActive ? (
                    <span className="badge bg-success/15 text-success">نشط</span>
                  ) : (
                    <span className="badge bg-border text-muted">خرج</span>
                  )}
                </td>
                <td className="text-muted">{formatDate(v.firstSeenAt)}</td>
                <td className="text-muted">{formatDate(v.lastSeenAt)}</td>
              </tr>
            ))}
            {visitors.length === 0 && (
              <tr>
                <td colSpan={8} className="py-10 text-center text-muted">
                  لا يوجد زوار مسجلون — افتح الموقع التسويقي لتجربة التتبع
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
