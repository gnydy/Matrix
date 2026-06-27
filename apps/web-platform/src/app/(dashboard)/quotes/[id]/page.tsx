import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@allinall/database';
import { QuoteStatusForm } from '@/components/quote-status-form';
import { QuoteProjectActions } from '@/components/quote-project-actions';
import { formatDate, quoteStatusLabels } from '@/lib/labels';

type Props = { params: Promise<{ id: string }> };

export default async function QuoteDetailPage({ params }: Props) {
  const { id } = await params;
  const quote = await prisma.quote.findUnique({
    where: { id },
    include: {
      customer: true,
      notes: { orderBy: { createdAt: 'desc' } },
      payment: true,
      project: true,
    },
  });

  if (!quote) notFound();

  return (
    <div className="space-y-6">
      <div>
        <Link href="/quotes" className="text-sm text-primary hover:underline">
          ← عروض الأسعار
        </Link>
        <h2 className="mt-2 text-2xl font-bold">{quote.number}</h2>
        <p className="mt-1 text-muted">{quoteStatusLabels[quote.status]}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="stat-card grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted">العميل</p>
              <p className="font-semibold">
                <Link href={`/customers/${quote.customer.id}`} className="text-primary hover:underline">
                  {quote.customer.name}
                </Link>
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">المبلغ</p>
              <p className="font-semibold" dir="ltr">
                {quote.amount != null
                  ? `${quote.amount.toLocaleString('ar-EG')} ${quote.currency}`
                  : '—'}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">العنوان</p>
              <p className="font-semibold">{quote.title ?? '—'}</p>
            </div>
            <div>
              <p className="text-sm text-muted">صالح حتى</p>
              <p className="font-semibold">
                {quote.validUntil ? formatDate(quote.validUntil) : '—'}
              </p>
            </div>
          </div>

          {quote.description && (
            <div className="stat-card">
              <p className="text-sm text-muted">التفاصيل</p>
              <p className="mt-2 whitespace-pre-wrap">{quote.description}</p>
            </div>
          )}

          <div className="stat-card">
            <h3 className="mb-4 font-semibold">الملاحظات</h3>
            {quote.notes.length === 0 ? (
              <p className="text-sm text-muted">لا ملاحظات</p>
            ) : (
              <ul className="space-y-3">
                {quote.notes.map((n) => (
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
          <QuoteStatusForm quoteId={quote.id} currentStatus={quote.status} />
          {quote.status === 'accepted' && (
            <QuoteProjectActions
              quoteId={quote.id}
              hasProject={!!quote.project}
              projectId={quote.project?.id}
            />
          )}
        </div>
      </div>
    </div>
  );
}
