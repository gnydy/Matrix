import { Shell } from '@/components/Shell';
import { ScheduleBoard } from '@/components/ScheduleBoard';
import { site } from '@/data/site';

export default function AppointmentsPage() {
  return (
    <Shell title="Appointment Booking Flow" eyebrow="Booking system UI">
      <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">New appointment</p>
          <h3 className="mt-2 text-3xl font-black text-slate-950">Book a patient visit</h3>
          <div className="mt-6 grid gap-4">
            {['Patient name', 'Phone number', 'Department', 'Doctor', 'Preferred date', 'Insurance / payment'].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-bold text-slate-600">
                {label}<input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:ring-4 focus:ring-slate-100" placeholder={label} />
              </label>
            ))}
            <button className={`rounded-2xl bg-gradient-to-r ${site.gradient} px-5 py-4 text-sm font-black text-white`}>Create booking mock</button>
          </div>
        </section>
        <ScheduleBoard />
      </div>
    </Shell>
  );
}
