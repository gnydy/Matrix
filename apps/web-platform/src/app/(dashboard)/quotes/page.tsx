import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate, quoteStatusLabels } from '@/lib/labels';

export default async function QuotesPage() {
  const quotes = await prisma.quote.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
    include: { customer: { select: { id: true, code: true, name: true } } },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">عروض الأسعار</h2>
          <p className="mt-1 text-sm text-muted">إدارة داخلية — بدون إرسال واتساب</p>
        </div>
        <Link href="/quotes/new" className="btn-primary inline-flex min-h-[44px] items-center px-4">
          عرض سعر جديد
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>الرقم</th>
              <th>العميل</th>
              <th>العنوان</th>
              <th>المبلغ</th>
              <th>الحالة</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((q) => (
              <tr key={q.id}>
                <td>
                  <Link href={`/quotes/${q.id}`} className="font-medium text-primary hover:underline">
                    {q.number}
                  </Link>
                </td>
                <td>
                  <Link href={`/customers/${q.customer.id}`} className="hover:underline">
                    {q.customer.name}
                  </Link>
                  <span className="mr-1 text-xs text-muted">({q.customer.code})</span>
                </td>
                <td>{q.title ?? '—'}</td>
                <td dir="ltr">
                  {q.amount != null ? `${q.amount.toLocaleString('ar-EG')} ${q.currency}` : '—'}
                </td>
                <td>
                  <span className="badge bg-primary/15 text-primary">
                    {quoteStatusLabels[q.status] ?? q.status}
                  </span>
                </td>
                <td className="text-muted">{formatDate(q.createdAt)}</td>
              </tr>
            ))}
            {quotes.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-muted">
                  لا توجد عروض بعد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
