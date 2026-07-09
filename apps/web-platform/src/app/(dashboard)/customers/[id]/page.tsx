import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma, asStringArray } from '@allinall/database';
import { CustomerStatusForm } from '@/components/customer-status-form';
import {
  customerDeploymentLabels,
  customerStatusLabels,
  formatDate,
  leadSourceLabels,
} from '@/lib/labels';

type Props = { params: Promise<{ id: string }> };

export default async function CustomerDetailPage({ params }: Props) {
  const { id } = await params;
  const customer = await prisma.customer.findUnique({
    where: { id },
    include: {
      notes: { orderBy: { createdAt: 'desc' } },
      lead: true,
    },
  });

  if (!customer) notFound();

  const leadModules = customer.lead ? asStringArray(customer.lead.modules) : [];

  return (
    <div className="space-y-6">
      <div>
        <Link href="/customers" className="text-sm text-primary hover:underline">
          ← العملاء
        </Link>
        <h2 className="mt-2 text-2xl font-bold">{customer.code}</h2>
        <p className="mt-1 text-muted">
          {customerDeploymentLabels[customer.deploymentType]} ·{' '}
          {customerStatusLabels[customer.status]}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="stat-card grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted">الاسم</p>
              <p className="font-semibold">{customer.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted">الشركة</p>
              <p className="font-semibold">{customer.company ?? '—'}</p>
            </div>
            <div>
              <p className="text-sm text-muted">الهاتف</p>
              <p className="font-semibold" dir="ltr">
                {customer.phone ?? '—'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">البريد</p>
              <p className="font-semibold" dir="ltr">
                {customer.email ?? '—'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">الباقة</p>
              <p className="font-semibold">{customer.planId ?? '—'}</p>
            </div>
            <div>
              <p className="text-sm text-muted">تاريخ التسجيل</p>
              <p className="font-semibold">{formatDate(customer.createdAt)}</p>
            </div>
          </div>

          {customer.lead && (
            <div className="stat-card">
              <h3 className="mb-3 font-semibold">الطلب الأصلي</h3>
              <p className="text-sm">
                <Link href={`/leads/${customer.lead.id}`} className="text-primary hover:underline">
                  {customer.lead.ref}
                </Link>
                {' · '}
                {leadSourceLabels[customer.lead.source]}
              </p>
              {leadModules.length > 0 && (
                <p className="mt-2 text-sm text-muted">{leadModules.join(' · ')}</p>
              )}
              {customer.lead.message && (
                <p className="mt-2 whitespace-pre-wrap text-sm">{customer.lead.message}</p>
              )}
            </div>
          )}

          <div className="stat-card">
            <h3 className="mb-4 font-semibold">الملاحظات</h3>
            {customer.notes.length === 0 ? (
              <p className="text-sm text-muted">لا ملاحظات</p>
            ) : (
              <ul className="space-y-3">
                {customer.notes.map((n) => (
                  <li key={n.id} className="rounded-xl border border-border/60 p-3 text-sm">
                    <p>{n.body}</p>
                    <p className="mt-2 text-xs text-muted">{formatDate(n.createdAt)}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <CustomerStatusForm
            customerId={customer.id}
            currentStatus={customer.status}
            currentDeployment={customer.deploymentType}
          />
          <Link
            href={`/quotes/new?customerId=${customer.id}`}
            className="stat-card block text-center text-sm font-medium text-primary hover:underline"
          >
            + عرض سعر لهذا العميل
          </Link>
        </div>
      </div>
    </div>
  );
}
