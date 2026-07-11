import { requireDashboardSession } from '@/lib/auth';
import { DashboardShell } from '@/components/dashboard-shell';
export default async function DashboardLayout({children}:{children:React.ReactNode}){const session=await requireDashboardSession();return <DashboardShell user={session.user}>{children}</DashboardShell>}
