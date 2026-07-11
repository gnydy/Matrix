
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { CashierModuleClient } from '@/components/cashier-module-client';
import { getSession } from '@/lib/auth';

export default async function CashierPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <CashierModuleClient />
    </ErpShell>
  );
}
