import { AppShell } from '@/components/AppShell';
import { OrdersTable } from '@/components/DataTable';

export default function SalesPage() {
  return <AppShell><h1 className="mb-5 text-4xl font-black">Sales and receipts</h1><OrdersTable /></AppShell>;
}
