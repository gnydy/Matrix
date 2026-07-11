import { Shell } from '@/components/Shell';
import { Topbar, StatCards, RecordsTable, ModuleGrid, ApprovalFlow, EmptyAndErrorStates } from '@/components/ErpBlocks';
import { site, modules, records, phases } from '@/data/site';

export default function HomePage() {
  return (
    <Shell>
      <Topbar />

        <section className="px-5 py-8 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="card rounded-[2rem] p-8"><p className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">Branch performance grid</p><h2 className="mt-4 text-5xl font-black">{site.concept}</h2><div className="mt-8 grid gap-3 sm:grid-cols-2">{modules.map((m, i) => <div key={m} className="rounded-2xl border border-slate-200 bg-white p-4"><b>{m}</b><p className="mt-2 text-sm text-slate-500">Queue #{i+1} with filters and actions.</p></div>)}</div></div>
            <div className="space-y-5"><div className="rounded-[2rem] bg-[var(--dark)] p-6 text-white"><h3 className="text-2xl font-black">Control Room</h3><p className="mt-2 text-white/60">Fast action panel for managers.</p><div className="mt-6 grid gap-3">{records.map((r) => <button key={r.id} className="rounded-2xl bg-white/10 p-4 text-left font-bold">{r.name} — {r.status}</button>)}</div></div><ApprovalFlow/></div>
          </div>
        </section>
        <section className="space-y-6 px-5 py-8 lg:px-8"><StatCards/><RecordsTable/></section>

    </Shell>
  );
}
