import { site } from '@/data/site';
import { Shell } from '@/components/Shell';
import { StatCards } from '@/components/StatCards';
import { PatientTable } from '@/components/PatientTable';
import { ScheduleBoard } from '@/components/ScheduleBoard';
import { DepartmentGrid } from '@/components/DepartmentGrid';
import { StateShowcase } from '@/components/StateShowcase';

export default function HomePage() {
  return (
    <Shell title="Healthcare Operations Overview">
      <section className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${site.gradient} p-8 text-white shadow-soft`}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-white/70">{site.audience}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">A production-ready healthcare interface for {site.useCase}.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">{site.notes}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/appointments" className="rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-950">Open booking flow</a>
              <a href="/patients" className="rounded-2xl border border-white/30 px-5 py-3 text-sm font-black text-white">Review patient mock records</a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/20 bg-white/10 p-5 backdrop-blur">
            <div className="grid gap-3">
              {site.features.map((feature) => <div key={feature} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-white/85">{feature}</div>)}
            </div>
          </div>
        </div>
      </section>
      <StatCards />
      <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <ScheduleBoard />
        <DepartmentGrid />
      </div>
      <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <PatientTable />
        <StateShowcase />
      </div>
    </Shell>
  );
}
