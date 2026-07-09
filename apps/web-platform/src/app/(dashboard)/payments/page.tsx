import Link from 'next/link';
import { prisma } from '@allinall/database';
import { formatDate, paymentStatusLabels } from '@/lib/labels';

export default async function PaymentsPage() {
  const payments = await prisma.payment.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
    include: {
      customer: { select: { id: true, code: true, name: true } },
      quote: { select: { id: true, number: true } },
    },
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">المدفوعات</h2>
          <p className="mt-1 text-sm text-muted">تسجيل يدوي — بدون بوابة دفع إلكترونية</p>
        </div>
        <Link href="/payments/new" className="btn-primary inline-flex min-h-[44px] items-center px-4">
          تسجيل دفعة
        </Link>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>المرجع</th>
              <th>العميل</th>
              <th>العرض</th>
              <th>المبلغ</th>
              <th>الحالة</th>
              <th>الاستحقاق</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>
                  <Link href={`/payments/${p.id}`} className="font-medium text-primary hover:underline">
                    {p.ref}
                  </Link>
                </td>
                <td>
                  <Link href={`/customers/${p.customer.id}`} className="hover:underline">
                    {p.customer.name}
                  </Link>
                </td>
                <td>
                  {p.quote ? (
                    <Link href={`/quotes/${p.quote.id}`} className="text-primary hover:underline">
                      {p.quote.number}
                    </Link>
                  ) : (
                    '—'
                  )}
                </td>
                <td dir="ltr">
                  {p.amount.toLocaleString('ar-EG')} {p.currency}
                </td>
                <td>
                  <span className="badge bg-primary/15 text-primary">
                    {paymentStatusLabels[p.status] ?? p.status}
                  </span>
                </td>
                <td className="text-muted">{p.dueDate ? formatDate(p.dueDate) : '—'}</td>
              </tr>
            ))}
            {payments.length === 0 && (
              <tr>
                <td colSpan={6} className="py-10 text-center text-muted">
                  لا توجد مدفوعات بعد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
