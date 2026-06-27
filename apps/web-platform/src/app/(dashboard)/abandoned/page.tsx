import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate } from '@/lib/labels';

export default async function AbandonedPage() {
  const formStarts = await prisma.siteEvent.findMany({
    where: { type: 'form_started' },
    orderBy: { createdAt: 'desc' },
    include: {
      session: {
        include: {
          leads: true,
          pageViews: { orderBy: { enteredAt: 'desc' }, take: 5 },
        },
      },
    },
    take: 100,
  });

  const abandoned = formStarts.filter((ev) => ev.session.leads.length === 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">لم يكملوا الطلب</h2>
        <p className="mt-1 text-sm text-muted">
          زوار بدأوا نموذج طلب أو تواصل ولم يرسلوه — كانوا يريدون الطلب
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>النموذج</th>
              <th>الصفحة</th>
              <th>الزائر</th>
              <th>آخر صفحات</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {abandoned.map((ev) => {
              const meta = ev.metadata as { formId?: string } | null;
              return (
                <tr key={ev.id}>
                  <td>{meta?.formId ?? 'نموذج'}</td>
                  <td>{ev.path ?? '—'}</td>
                  <td>
                    <Link
                      href={`/visitors/${ev.sessionId}`}
                      className="text-primary hover:underline"
                    >
                      {ev.session.visitorId.slice(0, 10)}…
                    </Link>
                  </td>
                  <td className="text-muted text-xs">
                    {ev.session.pageViews.map((p) => p.path).join(' → ')}
                  </td>
                  <td className="text-muted">{formatDate(ev.createdAt)}</td>
                </tr>
              );
            })}
            {abandoned.length === 0 && (
              <tr>
                <td colSpan={5} className="py-10 text-center text-muted">
                  لا يوجد نماذج متروكة حاليًا
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
