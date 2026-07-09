import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate } from '@/lib/labels';

export default async function EventsPage() {
  const events = await prisma.siteEvent.findMany({
    orderBy: { createdAt: 'desc' },
    take: 150,
    include: { session: { select: { visitorId: true } } },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">سجل الأحداث</h2>
        <p className="mt-1 text-sm text-muted">نقرات، نماذج، طلبات، واتساب — كل التفاعلات</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>النوع</th>
              <th>الصفحة</th>
              <th>الزائر</th>
              <th>تفاصيل</th>
              <th>الوقت</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={ev.id}>
                <td>
                  <span className="badge bg-primary/15 text-primary">{ev.type}</span>
                </td>
                <td>{ev.path ?? '—'}</td>
                <td>
                  <Link href={`/visitors/${ev.sessionId}`} className="text-primary hover:underline">
                    {ev.session.visitorId.slice(0, 10)}…
                  </Link>
                </td>
                <td className="max-w-xs truncate text-xs text-muted">
                  {ev.metadata ? JSON.stringify(ev.metadata) : '—'}
                </td>
                <td className="text-muted">{formatDate(ev.createdAt)}</td>
              </tr>
            ))}
            {events.length === 0 && (
              <tr>
                <td colSpan={5} className="py-10 text-center text-muted">
                  لا أحداث بعد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
