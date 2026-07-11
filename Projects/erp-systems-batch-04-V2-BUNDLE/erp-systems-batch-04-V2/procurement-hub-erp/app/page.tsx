import { Shell } from '@/components/Shell';
import { Topbar, StatCards, RecordsTable, ModuleGrid, ApprovalFlow, EmptyAndErrorStates } from '@/components/ErpBlocks';
import { site, modules, records, phases } from '@/data/site';

export default function HomePage() {
  return (
    <Shell>
      <Topbar />

        <section className="px-5 py-8 lg:px-8">
          <div className="rounded-[2rem] bg-white p-5 shadow-xl"><div className="flex flex-wrap items-end justify-between gap-4 p-4"><div><p className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">RFQ comparison lanes</p><h2 className="mt-3 text-4xl font-black">{site.concept}</h2></div><button className="rounded-full bg-[var(--accent)] px-5 py-3 font-black text-white">Create Workflow</button></div>
          <div className="grid gap-4 md:grid-cols-5">{phases.map((phase, i) => <div key={phase} className="min-h-80 rounded-3xl bg-slate-100 p-4"><div className="font-black">{phase}</div><div className="mt-4 space-y-3">{records.slice(0, i % 3 + 1).map((r) => <div key={r.id} className="rounded-2xl bg-white p-4 shadow-sm"><b>{r.name}</b><p className="mt-1 text-xs text-slate-500">{r.owner}</p></div>)}</div></div>)}</div></div>
        </section>
        <section className="space-y-6 px-5 py-8 lg:px-8"><StatCards/><ModuleGrid/><RecordsTable/></section>

    </Shell>
  );
}
