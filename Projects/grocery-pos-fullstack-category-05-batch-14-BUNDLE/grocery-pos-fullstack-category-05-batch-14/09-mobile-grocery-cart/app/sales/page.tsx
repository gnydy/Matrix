import { ProductTable } from '@/components/ProductTable';
import { MetricCard } from '@/components/MetricCard';
import { store } from '@/data/store';
import { getInventorySummary, money } from '@/lib/pos';

export default function Page() {
  const summary = getInventorySummary();
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="card">
        <span className="badge">Sales, Invoices & Receipts</span>
        <h1 className="mt-4 text-4xl font-black">Sales, Invoices & Receipts</h1>
        <p className="mt-3 text-slate-600">Mock frontend + backend-ready page for {store.title}. This screen is structured for later database integration.</p>
      </div>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard label="Stock Units" value={String(summary.totalStock)} change="live mock" />
        <MetricCard label="Stock Value" value={money(summary.value)} change="estimated" />
        <MetricCard label="Low Stock Items" value={String(summary.lowStock.length)} change="review needed" />
      </section>
      <section className="mt-6"><ProductTable /></section>
    </main>
  );
}
