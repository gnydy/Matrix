
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { HrModuleClient } from '@/components/hr-module-client';
import { getSession } from '@/lib/auth';

export default async function HrPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <HrModuleClient />
    </ErpShell>
  );
}
