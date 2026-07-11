import { site } from '@/data/site';

export function DepartmentGrid() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Departments</p>
      <h3 className="mt-1 text-2xl font-black text-slate-950">Care units workload</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {site.departments.map((department, index) => (
          <article key={department} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <strong className="text-slate-950">{department}</strong>
              <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${site.chip}`}>{82 - index * 7}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white">
              <div className={`h-2 rounded-full bg-gradient-to-r ${site.gradient}`} style={{ width: `${82 - index * 7}%` }} />
            </div>
            <p className="mt-3 text-sm text-slate-500">Capacity, doctors and room allocation mock.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
