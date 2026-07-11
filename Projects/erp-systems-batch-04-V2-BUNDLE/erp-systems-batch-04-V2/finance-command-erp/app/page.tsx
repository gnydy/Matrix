import { Shell } from '@/components/Shell';
import { Topbar, StatCards, RecordsTable, ModuleGrid, ApprovalFlow, EmptyAndErrorStates } from '@/components/ErpBlocks';
import { site, modules, records, phases } from '@/data/site';

export default function HomePage() {
  return (
    <Shell>
      <Topbar />

        <section className="erp-grid bg-slate-950 px-5 py-8 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 xl:grid-cols-[1fr_440px]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/50">Split CFO desk</p>
              <h2 className="mt-6 max-w-4xl text-5xl font-black leading-tight lg:text-7xl">{site.concept}</h2>
              <div className="mt-8 flex flex-wrap gap-3"><a className="rounded-full bg-[var(--accent)] px-6 py-3 font-black text-white" href="#records">Inspect Records</a><a className="rounded-full border border-white/20 px-6 py-3 font-black text-white" href="/dashboard">Executive Dashboard</a></div>
            </div>
            <div className="dark-card rounded-[2rem] p-6"><h3 className="text-xl font-black">Risk Signals</h3><div className="mt-5 space-y-4">{modules.slice(0,4).map((m, i) => <div key={m} className="rounded-2xl bg-white/10 p-4"><div className="flex justify-between"><span>{m}</span><b>{i === 1 ? 'Review' : 'Healthy'}</b></div><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-[var(--accent)]" style={{width: `${60 + i*8}%`}} /></div></div>)}</div></div>
          </div>
        </section>
        <section className="space-y-6 px-5 py-8 lg:px-8"><StatCards/><RecordsTable/><ApprovalFlow/></section>

    </Shell>
  );
}
