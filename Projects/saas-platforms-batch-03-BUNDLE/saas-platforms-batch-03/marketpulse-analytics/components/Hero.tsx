import Link from 'next/link';
import { site } from '@/data/site';

export function Hero() {
  return (
    <section className={`relative overflow-hidden ${site.surface} px-5 py-20 grid-bg`}>
      <div className={`absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${site.accent} opacity-20 blur-3xl`} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">{site.visualTone}</div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">{site.tagline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{site.useCase}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/dashboard" className={`rounded-2xl bg-gradient-to-r ${site.accent} px-6 py-3 font-bold text-slate-950`}>Open dashboard preview</Link>
            <Link href="/docs" className="rounded-2xl border border-white/10 px-6 py-3 font-bold text-white hover:border-white/30">Read docs</Link>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-4">
            {site.metrics.map((metric) => (
              <div key={metric.label} className="glass rounded-2xl p-4">
                <dt className="text-2xl font-black text-white">{metric.value}</dt>
                <dd className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="glass rounded-[2rem] p-4 shadow-2xl shadow-black/40">
          <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5">
            <div className="mb-6 flex items-center justify-between">
              <div><p className="text-sm text-slate-400">Live workspace</p><h2 className="text-2xl font-black text-white">Command Center</h2></div>
              <span className={`rounded-full bg-gradient-to-r ${site.accent} px-3 py-1 text-xs font-black text-slate-950`}>ACTIVE</span>
            </div>
            <div className="grid gap-3">
              {site.screens.map((screen, index) => (
                <div key={screen} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sm font-bold text-white">0{index + 1}</span><span className="font-semibold text-slate-200">{screen}</span></div>
                  <div className="h-2 w-28 overflow-hidden rounded-full bg-white/10"><div className={`h-full rounded-full bg-gradient-to-r ${site.accent}`} style={{ width: `${76 + index * 5}%` }} /></div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI summary</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">The workspace is healthy. One workflow needs review, two reports are ready, and onboarding can be improved this week.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
