import { DashboardShell } from '@/components/dashboard-shell';
import { ensureSeedAdmin } from '@/lib/audit';

export const dynamic = 'force-dynamic';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await ensureSeedAdmin();
  return <DashboardShell>{children}</DashboardShell>;
}
