import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate, leadSourceLabels, leadStatusLabels } from '@/lib/labels';

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">الطلبات والعملاء المحتملون</h2>
        <p className="mt-1 text-sm text-muted">كل من طلب نظامًا أو تواصل عبر الموقع</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>المرجع</th>
              <th>الاسم</th>
              <th>الشركة</th>
              <th>الهاتف</th>
              <th>المصدر</th>
              <th>الحالة</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>
                  <Link href={`/leads/${lead.id}`} className="font-medium text-primary hover:underline">
                    {lead.ref}
                  </Link>
                </td>
                <td>{lead.name}</td>
                <td className="text-muted">{lead.company ?? '—'}</td>
                <td dir="ltr">{lead.phone ?? '—'}</td>
                <td>{leadSourceLabels[lead.source] ?? lead.source}</td>
                <td>
                  <span className="badge bg-primary/15 text-primary">
                    {leadStatusLabels[lead.status] ?? lead.status}
                  </span>
                </td>
                <td className="text-muted">{formatDate(lead.createdAt)}</td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={7} className="py-10 text-center text-muted">
                  لا توجد طلبات بعد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
