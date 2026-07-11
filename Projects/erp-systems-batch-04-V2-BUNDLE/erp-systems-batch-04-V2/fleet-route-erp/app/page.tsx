import { Shell } from '@/components/Shell';
import { Topbar, StatCards, RecordsTable, ModuleGrid, ApprovalFlow, EmptyAndErrorStates } from '@/components/ErpBlocks';
import { site, modules, records, phases } from '@/data/site';

export default function HomePage() {
  return (
    <Shell>
      <Topbar />

        <section className="grid min-h-[720px] gap-0 lg:grid-cols-[420px_1fr]">
          <div className="bg-slate-950 p-8 text-white"><p className="text-xs font-black uppercase tracking-[0.35em] text-white/40">Dispatch route tower</p><h2 className="mt-5 text-5xl font-black leading-tight">{site.concept}</h2><div className="mt-8 space-y-3">{records.map((r) => <div key={r.id} className="rounded-3xl bg-white/10 p-4"><div className="flex justify-between"><b>{r.name}</b><span>{r.value}</span></div><p className="mt-1 text-sm text-white/50">{r.trend}</p></div>)}</div></div>
          <div className="erp-grid relative p-8"><div className="grid h-full gap-4 md:grid-cols-3">{modules.concat(modules).slice(0,6).map((m, i) => <div key={`${m}-${i}`} className="card rounded-[2rem] p-5"><div className="h-28 rounded-3xl bg-slate-100"/><h3 className="mt-5 text-xl font-black">{m}</h3><p className="mt-2 text-sm text-slate-500">Map/card-based operational unit.</p></div>)}</div></div>
        </section>
        <section className="space-y-6 px-5 py-8 lg:px-8"><StatCards/><ApprovalFlow/><RecordsTable/></section>

    </Shell>
  );
}
