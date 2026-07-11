import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { getSession } from '@/lib/auth';
import { WorkflowModuleClient } from '@/components/workflow-module-client';

export default async function Page() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <ErpShell userName={session.name}>
      <WorkflowModuleClient />
    </ErpShell>
  );
}
