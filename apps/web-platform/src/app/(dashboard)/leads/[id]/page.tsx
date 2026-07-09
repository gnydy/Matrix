import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma, asStringArray } from '@allinall/database';
import { LeadStatusForm } from '@/components/lead-status-form';
import { ConvertToCustomerButton } from '@/components/convert-to-customer-button';
import { formatDate, leadSourceLabels, leadStatusLabels } from '@/lib/labels';

type Props = { params: Promise<{ id: string }> };

export default async function LeadDetailPage({ params }: Props) {
  const { id } = await params;
  const lead = await prisma.lead.findUnique({
    where: { id },
    include: {
      notes: { orderBy: { createdAt: 'desc' } },
      customer: true,
      session: {
        include: { pageViews: { orderBy: { enteredAt: 'desc' }, take: 10 } },
      },
    },
  });

  if (!lead) notFound();

  const modules = asStringArray(lead.modules);

  return (
    <div className="space-y-6">
      <div>
        <Link href="/leads" className="text-sm text-primary hover:underline">
          ← الطلبات
        </Link>
        <h2 className="mt-2 text-2xl font-bold">{lead.ref}</h2>
        <p className="mt-1 text-muted">
          {leadSourceLabels[lead.source]} · {leadStatusLabels[lead.status]}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="stat-card grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted">الاسم</p>
              <p className="font-semibold">{lead.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted">الشركة</p>
              <p className="font-semibold">{lead.company ?? '—'}</p>
            </div>
            <div>
              <p className="text-sm text-muted">الهاتف</p>
              <p className="font-semibold" dir="ltr">
                {lead.phone ?? '—'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">البريد</p>
              <p className="font-semibold" dir="ltr">
                {lead.email ?? '—'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">نوع الطلب</p>
              <p className="font-semibold">{lead.requestType ?? '—'}</p>
            </div>
            <div>
              <p className="text-sm text-muted">الباقة</p>
              <p className="font-semibold">{lead.planId ?? '—'}</p>
            </div>
          </div>

          {modules.length > 0 && (
            <div className="stat-card">
              <p className="text-sm text-muted">الموديولات</p>
              <p className="mt-2">{modules.join(' · ')}</p>
            </div>
          )}

          {lead.message && (
            <div className="stat-card">
              <p className="text-sm text-muted">الرسالة</p>
              <p className="mt-2 whitespace-pre-wrap">{lead.message}</p>
            </div>
          )}

          <div className="stat-card">
            <h3 className="mb-4 font-semibold">الملاحظات</h3>
            {lead.notes.length === 0 ? (
              <p className="text-sm text-muted">لا ملاحظات</p>
            ) : (
              <ul className="space-y-3">
                {lead.notes.map((n) => (
                  <li key={n.id} className="rounded-xl border border-border/60 p-3 text-sm">
                    <p>{n.body}</p>
                    <p className="mt-2 text-xs text-muted">{formatDate(n.createdAt)}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {lead.session && (
            <div className="stat-card">
              <h3 className="mb-4 font-semibold">مسار الزائر قبل الطلب</h3>
              <ul className="space-y-1 text-sm text-muted">
                {lead.session.pageViews.map((pv) => (
                  <li key={pv.id}>
                    {pv.path} — {formatDate(pv.enteredAt)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <LeadStatusForm leadId={lead.id} currentStatus={lead.status} />
          {lead.customer ? (
            <div className="stat-card">
              <h3 className="font-semibold">العميل</h3>
              <p className="mt-2 text-sm">
                <Link href={`/customers/${lead.customer.id}`} className="text-primary hover:underline">
                  عرض سجل العميل
                </Link>
              </p>
            </div>
          ) : (
            <ConvertToCustomerButton leadId={lead.id} />
          )}
        </div>
      </div>
    </div>
  );
}
