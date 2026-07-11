import { site } from '@/data/site';

export function ScheduleBoard() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Calendar / slots</p>
      <h3 className="mt-1 text-2xl font-black text-slate-950">Appointment stream</h3>
      <div className="mt-5 space-y-3">
        {site.appointments.map((slot) => (
          <article key={slot.time + slot.patient} className="flex flex-col justify-between gap-3 rounded-3xl border border-slate-100 bg-slate-50 p-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{slot.time} · {slot.room}</p>
              <h4 className="mt-1 font-black text-slate-950">{slot.patient}</h4>
              <p className="text-sm text-slate-500">{slot.type}</p>
            </div>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-600 ring-1 ring-slate-200">{slot.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
