import { PageShell } from '@/components/PageShell';
import { CourseGrid, FeatureGrid, LearningTimeline, StatCards } from '@/components/EducationBlocks';
import { site } from '@/data/site';

export default function HomePage() {
  return (
    <PageShell>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className={`text-sm font-black uppercase tracking-[0.28em] ${site.theme.text}`}>{site.layout}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">{site.hero}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{site.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/courses" className={`rounded-2xl ${site.theme.button} px-6 py-4 text-center text-sm font-black text-white shadow-soft`}>Explore learning paths</a>
            <a href="/student-dashboard" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-black text-white">Preview dashboard</a>
          </div>
        </div>
        <div className="glass rounded-[2.5rem] p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-slate-400">Education control room</p><h2 className="text-2xl font-black">{site.name}</h2></div>
            <span className={`rounded-full ${site.theme.button} px-3 py-1 text-xs font-bold text-white`}>LMS UI</span>
          </div>
          <div className="mt-6 grid gap-3">
            {site.courses.map((course, index) => (
              <div key={course} className="rounded-3xl bg-white/[0.05] p-4">
                <div className="flex justify-between text-sm"><span className="font-bold">{course}</span><span className="text-slate-400">{86 - index * 9}%</span></div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className={`${site.theme.button} h-full`} style={{ width: `${86 - index * 9}%` }} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-8"><StatCards /></section>
      <section className="mx-auto max-w-7xl px-5 py-12"><FeatureGrid /></section>
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr]"><LearningTimeline /><CourseGrid /></section>
    </PageShell>
  );
}
