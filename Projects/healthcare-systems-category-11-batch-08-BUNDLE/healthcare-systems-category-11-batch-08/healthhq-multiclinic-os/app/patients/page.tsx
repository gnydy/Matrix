import { Shell } from '@/components/Shell';
import { PatientTable } from '@/components/PatientTable';

export default function PatientsPage() {
  return (
    <Shell title="Patient Records Mock" eyebrow="Frontend-only patient UI">
      <PatientTable />
      <section className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-2xl font-black text-slate-950">Patient profile layout</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {['Clinical summary', 'Visit timeline', 'Documents / reports'].map((card) => <div key={card} className="min-h-44 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 font-bold text-slate-500">{card}</div>)}
        </div>
      </section>
    </Shell>
  );
}
