import { Shell } from '@/components/Shell';
import { Topbar, StatCards, RecordsTable, ModuleGrid, ApprovalFlow, EmptyAndErrorStates } from '@/components/ErpBlocks';
import { site, modules, records, phases } from '@/data/site';

export default function HomePage() {
  return (
    <Shell>
      <Topbar />

        <section className="px-5 py-8 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
            <div className="card rounded-[2rem] p-8"><p className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">People operations timeline</p><h2 className="mt-5 text-5xl font-black">{site.concept}</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{modules.map((m, i) => <div key={m} className="rounded-3xl border border-slate-200 p-5"><div className="text-4xl font-black text-[var(--accent)]">{i+1}</div><h3 className="mt-4 text-xl font-black">{m}</h3><p className="mt-2 text-sm text-slate-500">Profile-driven workflow with notes, states and ownership.</p></div>)}</div></div>
            <div className="rounded-[2rem] bg-slate-950 p-6 text-white"><h3 className="text-2xl font-black">Queue Monitor</h3><div className="mt-5 space-y-3">{records.map((r) => <div key={r.id} className="rounded-2xl bg-white/10 p-4"><b>{r.id}</b><p className="mt-1 text-sm text-white/60">{r.name} • {r.status}</p></div>)}</div></div>
          </div>
        </section>
        <section className="space-y-6 px-5 py-8 lg:px-8"><StatCards/><RecordsTable/><EmptyAndErrorStates/></section>

    </Shell>
  );
}
