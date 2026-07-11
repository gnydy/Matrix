import { Shell } from '@/components/Shell';
import { DepartmentGrid } from '@/components/DepartmentGrid';
import { site } from '@/data/site';

export default function DepartmentsPage() {
  return (
    <Shell title="Departments & Doctors">
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <DepartmentGrid />
        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Doctors</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950">Schedule and load</h3>
          <div className="mt-5 space-y-3">
            {site.doctors.map((doctor) => (
              <article key={doctor.name} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                  <div><strong className="text-slate-950">{doctor.name}</strong><p className="text-sm text-slate-500">{doctor.role}</p></div>
                  <span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${site.chip}`}>{doctor.load}</span>
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{doctor.slots}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
