import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { ProfessionalDashboard } from '@/components/professional-ui';
import { getSession } from '@/lib/auth';

export default async function ErpHomePage() {
  const session = await getSession();

  if (!session) redirect('/login');

  return (
    <ErpShell userName={session.name}>
      <ProfessionalDashboard />
    </ErpShell>
  );
}
