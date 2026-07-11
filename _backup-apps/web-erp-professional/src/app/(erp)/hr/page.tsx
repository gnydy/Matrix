import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { ProfessionalModulePage } from '@/components/professional-ui';
import { getSession } from '@/lib/auth';

export default async function Page() {
  const session = await getSession();

  if (!session) redirect('/login');

  return (
    <ErpShell userName={session.name}>
      <ProfessionalModulePage moduleKey="hr" />
    </ErpShell>
  );
}
