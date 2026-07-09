import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@allinall/database';
import { formatDate, leadStatusLabels } from '@/lib/labels';

type Props = { params: Promise<{ id: string }> };

export default async function VisitorDetailPage({ params }: Props) {
  const { id } = await params;
  const visitor = await prisma.visitorSession.findUnique({
    where: { id },
    include: {
      pageViews: { orderBy: { enteredAt: 'desc' } },
      events: { orderBy: { createdAt: 'desc' } },
      leads: { orderBy: { createdAt: 'desc' } },
    },
  });

  if (!visitor) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/visitors" className="text-sm text-primary hover:underline">
          ← الزوار
        </Link>
        <h2 className="mt-2 text-2xl font-bold">تفاصيل الزائر</h2>
        <p className="mt-1 font-mono text-sm text-muted" dir="ltr">
          {visitor.visitorId}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="stat-card">
          <p className="text-sm text-muted">الحالة</p>
          <p className="mt-2 font-semibold">{visitor.isActive ? 'نشط / داخل الموقع' : 'خرج'}</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">أول زيارة</p>
          <p className="mt-2 font-semibold">{formatDate(visitor.firstSeenAt)}</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">آخر نشاط</p>
          <p className="mt-2 font-semibold">{formatDate(visitor.lastSeenAt)}</p>
        </div>
      </div>

      <section className="stat-card">
        <h3 className="mb-4 font-semibold">مسار الصفحات</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>الصفحة</th>
              <th>دخل</th>
              <th>خرج</th>
              <th>المدة (ث)</th>
            </tr>
          </thead>
          <tbody>
            {visitor.pageViews.map((pv) => (
              <tr key={pv.id}>
                <td>{pv.path}</td>
                <td className="text-muted">{formatDate(pv.enteredAt)}</td>
                <td className="text-muted">{pv.leftAt ? formatDate(pv.leftAt) : '—'}</td>
                <td>{pv.durationSec ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="stat-card">
        <h3 className="mb-4 font-semibold">الأحداث</h3>
        {visitor.events.length === 0 ? (
          <p className="text-sm text-muted">لا أحداث</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {visitor.events.map((ev) => (
              <li key={ev.id} className="flex flex-wrap gap-2 border-b border-border/50 py-2">
                <span className="badge bg-primary/15 text-primary">{ev.type}</span>
                <span className="text-muted">{ev.path}</span>
                <span className="text-muted">{formatDate(ev.createdAt)}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="stat-card">
        <h3 className="mb-4 font-semibold">الطلبات المرتبطة</h3>
        {visitor.leads.length === 0 ? (
          <p className="text-sm text-muted">لم يُرسل طلبًا</p>
        ) : (
          <ul className="space-y-2">
            {visitor.leads.map((lead) => (
              <li key={lead.id}>
                <Link href={`/leads/${lead.id}`} className="text-primary hover:underline">
                  {lead.ref} — {lead.name} ({leadStatusLabels[lead.status]})
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
