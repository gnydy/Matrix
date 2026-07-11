import { AppShell } from '@/components/AppShell';
import { site } from '@/data/site';

export default function ReportsPage() {
  return (
    <AppShell>
      <h1 className="mb-5 text-4xl font-black">Reports dashboard</h1>
      <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Revenue curve placeholder</p><div className="mt-6 flex h-72 items-end gap-3">{[30,58,42,76,61,90,72,96,66,84,75,100].map((h, i) => <div key={i} className="flex-1 rounded-t-2xl bg-slate-900" style={{height: `${h}%`}} />)}</div></div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-2xl font-black">Departments</h2><div className="mt-5 space-y-3">{site.departments.map((d, i) => <div key={d}><div className="flex justify-between text-sm font-bold"><span>{d}</span><span>{62+i*5}%</span></div><div className="mt-2 h-3 rounded-full bg-slate-100"><div className="h-3 rounded-full bg-slate-900" style={{width: `${62+i*5}%`}} /></div></div>)}</div></div>
      </div>
    </AppShell>
  );
}
