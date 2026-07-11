import { site } from '@/data/site';

export function StatCards() {
  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {site.stats.map((stat) => (
        <article key={stat.label} className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">{stat.label}</p>
          <div className="mt-4 flex items-end justify-between gap-4">
            <strong className="text-4xl font-black text-slate-950">{stat.value}</strong>
            <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${site.chip}`}>{stat.trend}</span>
          </div>
          <p className="mt-3 text-sm text-slate-500">{stat.note}</p>
        </article>
      ))}
    </section>
  );
}
