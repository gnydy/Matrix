import Link from 'next/link';
import { prisma } from '@allinall/database';
import { NewPaymentForm } from '@/components/new-payment-form';

type Props = { searchParams: Promise<{ customerId?: string; quoteId?: string }> };

export default async function NewPaymentPage({ searchParams }: Props) {
  const { customerId, quoteId } = await searchParams;
  const customers = await prisma.customer.findMany({
    orderBy: { name: 'asc' },
    select: { id: true, code: true, name: true },
  });
  const quotes = await prisma.quote.findMany({
    where: { status: { in: ['sent', 'accepted'] } },
    orderBy: { createdAt: 'desc' },
    select: { id: true, number: true, customerId: true, amount: true },
  });

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <Link href="/payments" className="text-sm text-primary hover:underline">
          ← المدفوعات
        </Link>
        <h2 className="mt-2 text-2xl font-bold">تسجيل دفعة</h2>
      </div>
      <NewPaymentForm
        customers={customers}
        quotes={quotes}
        defaultCustomerId={customerId}
        defaultQuoteId={quoteId}
      />
    </div>
  );
}
