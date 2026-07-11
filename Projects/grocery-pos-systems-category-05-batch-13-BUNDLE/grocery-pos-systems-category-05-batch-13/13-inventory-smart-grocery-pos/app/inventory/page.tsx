import { AppShell } from '@/components/AppShell';
import { site } from '@/data/site';

export default function InventoryPage() {
  return (
    <AppShell>
      <h1 className="mb-5 text-4xl font-black">Inventory control</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {site.alerts.map((a) => <div key={a.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase text-slate-500">{a.level} · {a.time}</p><h2 className="mt-2 text-xl font-black">{a.title}</h2></div>)}
      </div>
    </AppShell>
  );
}
