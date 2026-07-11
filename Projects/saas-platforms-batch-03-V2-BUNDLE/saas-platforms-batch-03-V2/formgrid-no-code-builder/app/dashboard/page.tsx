import { activity, highlights, metrics, rows, template } from "@/data/mock";
import { MiniNav } from "@/components/Ui";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen md:grid-cols-[260px_1fr]">
        <aside className="border-r border-white/10 p-6">
          <div className="rounded-2xl bg-white p-4 font-black text-slate-950">{template.name}</div>
          <div className="mt-8 space-y-2 text-sm text-slate-300">
            {highlights.map((item) => <div key={item} className="rounded-xl px-3 py-2 hover:bg-white/10">{item}</div>)}
          </div>
        </aside>
        <section className="p-6 md:p-10">
          <MiniNav links={["Home", "Pricing", "Dashboard", "Auth"]} />
          <div className="mt-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Dashboard</p>
              <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Operational control room</h1>
            </div>
            <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">Export report</button>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {metrics.map((m) => <div key={m.label} className="rounded-3xl bg-white/10 p-6"><b className="text-4xl">{m.value}</b><p className="mt-2 text-slate-300">{m.label}</p></div>)}
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-white p-6 text-slate-950">
              <h2 className="text-2xl font-semibold">Workspace table</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                {rows.map((row) => <div key={row.name} className="grid grid-cols-4 border-b border-slate-100 p-4 text-sm last:border-0"><span className="font-medium">{row.name}</span><span>{row.owner}</span><span>{row.state}</span><span className="text-right">{row.score}</span></div>)}
              </div>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-6">
              <h2 className="text-2xl font-semibold">Activity</h2>
              <div className="mt-6 space-y-3">{activity.map((item) => <div key={item.title} className="rounded-2xl bg-white/10 p-4"><p className="font-medium">{item.title}</p><p className="text-sm text-slate-300">{item.status} · {item.time}</p></div>)}</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
