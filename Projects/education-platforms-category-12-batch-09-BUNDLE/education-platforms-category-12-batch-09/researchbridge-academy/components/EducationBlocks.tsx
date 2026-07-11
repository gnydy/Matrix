import { site } from '@/data/site';

export function StatCards() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {site.metrics.map((metric) => (
        <div key={metric.label} className="glass rounded-3xl p-5">
          <p className="text-sm text-slate-400">{metric.label}</p>
          <p className="mt-3 text-3xl font-black">{metric.value}</p>
          <p className={`mt-2 text-xs font-semibold ${site.theme.text}`}>{metric.trend}</p>
        </div>
      ))}
    </section>
  );
}

export function CourseGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {site.courses.map((course, index) => (
        <article key={course} className="glass rounded-[2rem] p-5 transition hover:-translate-y-1 hover:bg-white/10">
          <div className="flex items-center justify-between">
            <span className={`rounded-full ${site.theme.button} px-3 py-1 text-xs font-bold text-white`}>Track {index + 1}</span>
            <span className="text-xs text-slate-400">{6 + index * 2} modules</span>
          </div>
          <h3 className="mt-5 text-xl font-black">{course}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">A complete learning path with lessons, assignments, progress states, and instructor feedback UI.</p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <div className={`h-full ${site.theme.button}`} style={{ width: `${68 - index * 7}%` }} />
          </div>
        </article>
      ))}
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {site.features.map((feature) => (
        <div key={feature} className={`rounded-3xl border ${site.theme.border} bg-white/[0.04] p-5`}>
          <div className={`mb-4 h-10 w-10 rounded-2xl ${site.theme.button} opacity-90`} />
          <h3 className="font-black">{feature}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-400">Designed as a production-looking frontend block with mock data, responsive behavior, and clear editing points.</p>
        </div>
      ))}
    </section>
  );
}

export function LearningTimeline() {
  return (
    <div className="glass rounded-[2rem] p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-black">Learning pathway</h2>
        <span className={`rounded-full ${site.theme.button} px-3 py-1 text-xs font-bold text-white`}>Live mock</span>
      </div>
      <div className="space-y-4">
        {['Onboarding', 'Core Lessons', 'Practice Work', 'Assessment', 'Certificate'].map((step, index) => (
          <div key={step} className="flex gap-4 rounded-2xl bg-white/[0.04] p-4">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-2xl ${index < 3 ? site.theme.button : 'bg-white/10'} text-sm font-black text-white`}>{index + 1}</span>
            <div>
              <p className="font-bold">{step}</p>
              <p className="text-sm text-slate-400">Role-aware UX state for students, teachers, and administrators.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OperationsTable({ title = 'Recent learning activity' }: { title?: string }) {
  const rows = site.courses.map((course, index) => ({ course, owner: site.personas[index % site.personas.length], progress: `${72 - index * 6}%`, state: index % 2 === 0 ? 'On track' : 'Needs review' }));
  return (
    <div className="glass overflow-hidden rounded-[2rem]">
      <div className="flex items-center justify-between border-b border-white/10 p-5">
        <h2 className="text-xl font-black">{title}</h2>
        <span className="text-xs text-slate-400">Mock operational table</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-white/[0.04] text-slate-400">
            <tr><th className="px-5 py-3">Course</th><th className="px-5 py-3">Owner</th><th className="px-5 py-3">Progress</th><th className="px-5 py-3">State</th></tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.course} className="border-t border-white/10">
                <td className="px-5 py-4 font-semibold">{row.course}</td>
                <td className="px-5 py-4 text-slate-300">{row.owner}</td>
                <td className="px-5 py-4"><span className={site.theme.text}>{row.progress}</span></td>
                <td className="px-5 py-4"><span className="rounded-full bg-white/10 px-3 py-1 text-xs">{row.state}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
