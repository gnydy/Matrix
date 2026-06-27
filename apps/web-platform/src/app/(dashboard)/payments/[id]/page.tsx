import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@allinall/database';
import { PaymentStatusForm } from '@/components/payment-status-form';
import { formatDate, paymentMethodLabels, paymentStatusLabels } from '@/lib/labels';

type Props = { params: Promise<{ id: string }> };

export default async function PaymentDetailPage({ params }: Props) {
  const { id } = await params;
  const payment = await prisma.payment.findUnique({
    where: { id },
    include: { customer: true, quote: true },
  });

  if (!payment) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/payments" className="text-sm text-primary hover:underline">
          ← المدفوعات
        </Link>
        <h2 className="mt-2 text-2xl font-bold">{payment.ref}</h2>
        <p className="mt-1 text-muted">{paymentStatusLabels[payment.status]}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="stat-card grid gap-4 sm:grid-cols-2 lg:col-span-2">
          <div>
            <p className="text-sm text-muted">العميل</p>
            <p className="font-semibold">
              <Link href={`/customers/${payment.customer.id}`} className="text-primary hover:underline">
                {payment.customer.name}
              </Link>
            </p>
          </div>
          <div>
            <p className="text-sm text-muted">المبلغ</p>
            <p className="font-semibold" dir="ltr">
              {payment.amount.toLocaleString('ar-EG')} {payment.currency}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted">طريقة الدفع</p>
            <p className="font-semibold">
              {payment.method ? (paymentMethodLabels[payment.method] ?? payment.method) : '—'}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted">تاريخ الاستحقاق</p>
            <p className="font-semibold">
              {payment.dueDate ? formatDate(payment.dueDate) : '—'}
            </p>
          </div>
          {payment.paidAt && (
            <div>
              <p className="text-sm text-muted">تاريخ التسجيل كمدفوع</p>
              <p className="font-semibold">{formatDate(payment.paidAt)}</p>
            </div>
          )}
          {payment.quote && (
            <div>
              <p className="text-sm text-muted">عرض السعر</p>
              <p className="font-semibold">
                <Link href={`/quotes/${payment.quote.id}`} className="text-primary hover:underline">
                  {payment.quote.number}
                </Link>
              </p>
            </div>
          )}
          {payment.notes && (
            <div className="sm:col-span-2">
              <p className="text-sm text-muted">ملاحظات</p>
              <p className="mt-1 whitespace-pre-wrap">{payment.notes}</p>
            </div>
          )}
        </div>

        <PaymentStatusForm paymentId={payment.id} currentStatus={payment.status} />
      </div>
    </div>
  );
}
