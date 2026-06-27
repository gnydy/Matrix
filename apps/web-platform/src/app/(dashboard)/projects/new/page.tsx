import Link from 'next/link';
import { prisma } from '@allinall/database';
import { NewProjectForm } from '@/components/new-project-form';

type Props = { searchParams: Promise<{ customerId?: string; quoteId?: string }> };

export default async function NewProjectPage({ searchParams }: Props) {
  const { customerId, quoteId } = await searchParams;
  const customers = await prisma.customer.findMany({
    orderBy: { name: 'asc' },
    select: { id: true, code: true, name: true },
  });
  const quotes = await prisma.quote.findMany({
    where: { status: 'accepted', project: null },
    orderBy: { createdAt: 'desc' },
    select: { id: true, number: true, customerId: true, title: true },
  });

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <Link href="/projects" className="text-sm text-primary hover:underline">
          ← المشاريع
        </Link>
        <h2 className="mt-2 text-2xl font-bold">مشروع جديد</h2>
      </div>
      <NewProjectForm
        customers={customers}
        quotes={quotes}
        defaultCustomerId={customerId}
        defaultQuoteId={quoteId}
      />
    </div>
  );
}
