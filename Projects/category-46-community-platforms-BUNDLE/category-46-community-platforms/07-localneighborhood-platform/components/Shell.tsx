
import { templateMeta, records } from '@/data/mock';

const metrics = [
  { label: 'Active Modules', value: templateMeta.modules.length.toString(), delta: '+18%' },
  { label: 'Mock Records', value: records.length.toString(), delta: '+12%' },
  { label: 'Automation Score', value: '87%', delta: '+7%' },
  { label: 'Readiness', value: 'Sale-ready', delta: 'Portfolio' },
];

export function Shell() {
  return <main className="min-h-screen bg-slate-950 text-slate-100">
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.32),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,.22),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-200">Category {templateMeta.categoryNumber} · {templateMeta.category}</div>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">{templateMeta.templateName}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{templateMeta.description}. Built as a distinct {templateMeta.uiPattern} with frontend screens and backend mock routes.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-2xl bg-white px-5 py-3 font-bold text-slate-950" href="/dashboard">Open Dashboard</a>
            <a className="rounded-2xl border border-white/20 px-5 py-3 font-bold text-white" href="/api/health">API Health</a>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-soft">
          <div className="rounded-[1.5rem] bg-slate-900 p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="font-bold">Live Control Preview</span><span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">Online</span></div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {metrics.map((m) => <div key={m.label} className="rounded-2xl bg-white/5 p-4"><p className="text-xs text-slate-400">{m.label}</p><p className="mt-2 text-2xl font-black">{m.value}</p><p className="text-xs text-emerald-300">{m.delta}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-[260px_1fr] lg:px-8">
      <aside className="rounded-3xl border border-white/10 bg-white/5 p-4">
        <p className="mb-3 text-sm font-bold text-slate-300">Modules</p>
        <div className="space-y-2">{templateMeta.modules.map((m) => <div key={m} className="rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-200">{m}</div>)}</div>
      </aside>
      <div className="grid gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-black">Operations Board</h2><input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm outline-none" placeholder="Smart search..." /></div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-left text-sm"><thead className="bg-white/10 text-slate-300"><tr><th className="p-3">Name</th><th className="p-3">Status</th><th className="p-3">Owner</th><th className="p-3">Value</th></tr></thead><tbody>{records.map((r) => <tr key={r.id} className="border-t border-white/10"><td className="p-3 font-semibold">{r.name}</td><td className="p-3">{r.status}</td><td className="p-3 text-slate-300">{r.owner}</td><td className="p-3">{r.value}</td></tr>)}</tbody></table>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {['Empty State','Loading State','Error State'].map((state) => <div key={state} className="rounded-3xl border border-white/10 bg-white/5 p-5"><p className="font-black">{state}</p><p className="mt-2 text-sm text-slate-400">Production-ready UX placeholder for {templateMeta.category}.</p></div>)}
        </div>
      </div>
    </section>
  </main>
}
