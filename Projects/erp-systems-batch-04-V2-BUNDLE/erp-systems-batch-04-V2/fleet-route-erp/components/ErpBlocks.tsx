import { modules, records, stats, phases, site } from '@/data/site';

export function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 px-5 py-4 backdrop-blur-xl lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-400">Live mock ERP</p>
          <h1 className="text-xl font-black lg:text-2xl">{site.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="pill bg-white text-sm font-bold">Smart Search</button>
          <button className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-black text-white">Request Demo</button>
        </div>
      </div>
    </header>
  );
}

export function StatCards() {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{stats.map((stat) => <div key={stat.label} className="card rounded-3xl p-5"><p className="text-sm font-bold text-slate-500">{stat.label}</p><div className="mt-3 text-3xl font-black">{stat.value}</div><p className="mt-2 text-sm text-slate-500">{stat.detail}</p></div>)}</div>;
}

export function RecordsTable() {
  return (
    <div className="card overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b border-slate-200 p-5">
        <div><h2 className="text-lg font-black">Operational Records</h2><p className="text-sm text-slate-500">Mock table designed for ERP credibility.</p></div>
        <button className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-black text-white">New Record</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr><th className="p-4">ID</th><th className="p-4">Name</th><th className="p-4">Owner</th><th className="p-4">Status</th><th className="p-4">Value</th><th className="p-4">Trend</th></tr></thead>
          <tbody>{records.map((row) => <tr key={row.id} className="border-t border-slate-100"><td className="p-4 font-black">{row.id}</td><td className="p-4">{row.name}</td><td className="p-4 text-slate-500">{row.owner}</td><td className="p-4"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">{row.status}</span></td><td className="p-4 font-black">{row.value}</td><td className="p-4 text-slate-500">{row.trend}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}

export function ModuleGrid() {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{modules.map((m, index) => <div key={m} className="card rounded-3xl p-5"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 font-black text-white">{index + 1}</div><h3 className="text-lg font-black">{m}</h3><p className="mt-2 text-sm text-slate-500">Dedicated module preview with roles, states, filters and actions.</p></div>)}</div>;
}

export function ApprovalFlow() {
  return <div className="card rounded-3xl p-5"><h2 className="text-lg font-black">Approval Workflow</h2><div className="mt-5 grid gap-3 md:grid-cols-5">{phases.map((phase, index) => <div key={phase} className="rounded-2xl border border-slate-200 bg-white p-4"><div className="text-xs font-bold text-slate-400">Step {index + 1}</div><div className="mt-2 font-black">{phase}</div><div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-[var(--accent)]" style={{ width: `${30 + index * 14}%` }} /></div></div>)}</div></div>;
}

export function EmptyAndErrorStates() {
  return <div className="grid gap-4 md:grid-cols-3"><div className="card rounded-3xl p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Empty state</p><h3 className="mt-3 font-black">No exceptions found</h3><p className="mt-2 text-sm text-slate-500">Designed for clean enterprise UX.</p></div><div className="card rounded-3xl p-5"><p className="text-xs font-bold uppercase tracking-widest text-slate-400">Loading state</p><div className="mt-4 space-y-2"><span className="block h-3 rounded bg-slate-200"/><span className="block h-3 w-3/4 rounded bg-slate-200"/><span className="block h-3 w-1/2 rounded bg-slate-200"/></div></div><div className="card rounded-3xl p-5"><p className="text-xs font-bold uppercase tracking-widest text-red-400">Error state</p><h3 className="mt-3 font-black">Sync failed</h3><p className="mt-2 text-sm text-slate-500">Retry and escalation UI included.</p></div></div>;
}
