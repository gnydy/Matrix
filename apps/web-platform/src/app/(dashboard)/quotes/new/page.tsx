import Link from 'next/link';
import { prisma } from '@allinall/database';
import { NewQuoteForm } from '@/components/new-quote-form';

type Props = { searchParams: Promise<{ customerId?: string }> };

export default async function NewQuotePage({ searchParams }: Props) {
  const { customerId } = await searchParams;
  const customers = await prisma.customer.findMany({
    orderBy: { name: 'asc' },
    select: { id: true, code: true, name: true },
  });

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <Link href="/quotes" className="text-sm text-primary hover:underline">
          ← عروض الأسعار
        </Link>
        <h2 className="mt-2 text-2xl font-bold">عرض سعر جديد</h2>
        <p className="mt-1 text-sm text-muted">يُسجّل داخلياً — التسليم للعميل يدوياً (بريد/اجتماع)</p>
      </div>
      <NewQuoteForm customers={customers} defaultCustomerId={customerId} />
    </div>
  );
}
