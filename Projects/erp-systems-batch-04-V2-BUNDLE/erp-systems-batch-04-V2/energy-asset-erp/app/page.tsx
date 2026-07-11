import { Shell } from '@/components/Shell';
import { Topbar, StatCards, RecordsTable, ModuleGrid, ApprovalFlow, EmptyAndErrorStates } from '@/components/ErpBlocks';
import { site, modules, records, phases } from '@/data/site';

export default function HomePage() {
  return (
    <Shell>
      <Topbar />

        <section className="px-5 py-8 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[360px_1fr]">
            <div className="card rounded-[2rem] p-6"><p className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">Asset reliability map</p><h2 className="mt-5 text-5xl font-black leading-none">{site.name}</h2><p className="mt-5 text-slate-600">{site.concept}</p><div className="mt-8 space-y-3">{modules.map((m) => <div key={m} className="rounded-2xl bg-slate-100 p-4 font-bold">{m}</div>)}</div></div>
            <div className="rounded-[2rem] bg-slate-950 p-5 text-white"><div className="grid gap-4 md:grid-cols-3">{modules.concat(modules).slice(0,9).map((m, i) => <div key={`${m}-${i}`} className="rounded-3xl border border-white/10 bg-white/5 p-5"><div className="text-xs text-white/40">Cell {i+1}</div><div className="mt-8 text-xl font-black">{m}</div><div className="mt-4 h-2 rounded bg-white/10"><div className="h-2 rounded bg-[var(--accent)]" style={{width: `${35+i*6}%`}} /></div></div>)}</div></div>
          </div>
        </section>
        <section className="space-y-6 px-5 py-8 lg:px-8"><StatCards/><RecordsTable/><EmptyAndErrorStates/></section>

    </Shell>
  );
}
