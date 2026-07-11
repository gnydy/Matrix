import { site } from '@/data/site';

export function ReportCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2">
      {site.reports.map((report) => (
        <article key={report.title} className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-sm">
          <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${site.chip}`}>{report.status}</span>
          <h3 className="mt-4 text-xl font-black text-slate-950">{report.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-500">{report.metric}</p>
          <div className="mt-5 h-28 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs font-bold text-slate-400">Chart placeholder / report visualization</div>
        </article>
      ))}
    </section>
  );
}
