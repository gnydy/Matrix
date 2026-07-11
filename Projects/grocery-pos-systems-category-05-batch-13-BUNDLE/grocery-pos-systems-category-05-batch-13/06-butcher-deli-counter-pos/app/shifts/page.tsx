import { AppShell } from '@/components/AppShell';
import { site } from '@/data/site';

export default function ShiftsPage() {
  return (
    <AppShell>
      <h1 className="mb-5 text-4xl font-black">Cashier shifts</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {['Morning shift','Afternoon shift','Night shift','Supervisor review'].map((s, i) => <div key={s} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase text-slate-500">Register {i+1}</p><h2 className="mt-2 text-xl font-black">{s}</h2><p className="mt-3 text-sm text-slate-500">Cashiers: {site.metrics[3].value} · variance mock: EGP {i*18}</p></div>)}
      </div>
    </AppShell>
  );
}
