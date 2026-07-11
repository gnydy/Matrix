
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { CoreApiClient } from '@/components/core-api-client';
import { getSession } from '@/lib/auth';

export default async function CustomersPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <CoreApiClient />
    </ErpShell>
  );
}
