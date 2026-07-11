import { AppShell } from '@/components/AppShell';
import { ProductTable } from '@/components/DataTable';

export default function ProductsPage() {
  return <AppShell><h1 className="mb-5 text-4xl font-black">Product catalog</h1><ProductTable /></AppShell>;
}
