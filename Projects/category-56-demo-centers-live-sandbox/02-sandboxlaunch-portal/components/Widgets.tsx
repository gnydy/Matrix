import { site } from '@/data/site';

export function HeroPanel() {
  return (
    <section className="brand-panel overflow-hidden rounded-[2rem] p-8 shadow-2xl lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-white/70">{site.visualPattern}</div>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white lg:text-6xl">{site.templateName}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950" href="/api/health">Test API</a>
            <a className="rounded-2xl border border-white/25 px-5 py-3 text-sm font-black text-white" href={site.modules[0].href}>Open module</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
          <div className="grid gap-3">
            {site.records.slice(0,4).map((r) => <div key={r.id} className="rounded-2xl bg-white/10 p-4 text-white"><div className="flex justify-between"><b>{r.name}</b><span>{r.value}</span></div><p className="mt-2 text-sm text-white/60">{r.owner} · {r.status}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function MetricGrid() {
  return <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{site.metrics.map((m) => <div className="card p-5" key={m.label}><div className="text-sm font-semibold text-slate-500">{m.label}</div><div className="mt-3 text-3xl font-black text-slate-950">{m.value}</div><div className="mt-2 text-sm font-bold accent-text">{m.change}</div></div>)}</section>;
}

export function ModuleGrid() {
  return <section className="mt-8 grid gap-5 lg:grid-cols-3">{site.modules.map((m, i) => <a href={m.href} className="card block p-6 transition hover:-translate-y-1 hover:shadow-xl" key={m.href}><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-lg font-black text-white" style={{background: site.accent}}>{i+1}</div><h3 className="text-xl font-black text-slate-950">{m.label}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{m.summary}</p></a>)}</section>;
}

export function RecordsTable() {
  return <div className="card mt-8 overflow-hidden"><div className="border-b border-slate-200 p-5"><h2 className="text-xl font-black text-slate-950">Operational records</h2></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">ID</th><th className="p-4">Name</th><th className="p-4">Owner</th><th className="p-4">Status</th><th className="p-4">Value</th></tr></thead><tbody>{site.records.map((r) => <tr className="border-t border-slate-100" key={r.id}><td className="p-4 font-bold">{r.id}</td><td className="p-4">{r.name}</td><td className="p-4">{r.owner}</td><td className="p-4"><span className="status-pill">{r.status}</span></td><td className="p-4 font-black">{r.value}</td></tr>)}</tbody></table></div></div>;
}

export function ActionBoard() {
  return <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{site.actions.map((a) => <button key={a} className="card p-5 text-left font-black text-slate-900 hover:border-slate-400"><span className="accent-text">Action</span><br />{a}</button>)}</section>;
}
