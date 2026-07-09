import Link from 'next/link';
import { prisma } from '@allinall/database';
import {
  customerDeploymentLabels,
  customerStatusLabels,
  formatDate,
} from '@/lib/labels';

export default async function CustomersPage() {
  const customers = await prisma.customer.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
    include: { lead: { select: { ref: true, id: true } } },
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">العملاء</h2>
        <p className="mt-1 text-sm text-muted">عملاء تم تحويلهم من طلبات أو إضافتهم يدويًا</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>الكود</th>
              <th>الاسم</th>
              <th>الشركة</th>
              <th>الهاتف</th>
              <th>النشر</th>
              <th>الحالة</th>
              <th>الطلب الأصلي</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <Link
                    href={`/customers/${customer.id}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {customer.code}
                  </Link>
                </td>
                <td>{customer.name}</td>
                <td className="text-muted">{customer.company ?? '—'}</td>
                <td dir="ltr">{customer.phone ?? '—'}</td>
                <td>{customerDeploymentLabels[customer.deploymentType] ?? customer.deploymentType}</td>
                <td>
                  <span className="badge bg-primary/15 text-primary">
                    {customerStatusLabels[customer.status] ?? customer.status}
                  </span>
                </td>
                <td>
                  {customer.lead ? (
                    <Link href={`/leads/${customer.lead.id}`} className="text-primary hover:underline">
                      {customer.lead.ref}
                    </Link>
                  ) : (
                    '—'
                  )}
                </td>
                <td className="text-muted">{formatDate(customer.createdAt)}</td>
              </tr>
            ))}
            {customers.length === 0 && (
              <tr>
                <td colSpan={8} className="py-10 text-center text-muted">
                  لا يوجد عملاء بعد — حوّل طلبًا مؤهلًا من صفحة الطلبات
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
