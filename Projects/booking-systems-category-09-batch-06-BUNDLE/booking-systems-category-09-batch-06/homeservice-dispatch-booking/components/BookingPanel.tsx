import { site } from "@/data/site";

export function BookingPanel() {
  return (
    <div className="rounded-[2.5rem] border border-white bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Booking command</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">{site.bookingEntity} flow</h3>
        </div>
        <span className={`rounded-full bg-gradient-to-r ${site.accent} px-5 py-3 text-sm font-black text-white`}>Conversion-ready UI</span>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {site.steps.map((step, index) => (
          <div key={step} className="rounded-3xl bg-slate-50 p-5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-sm font-black text-white">{index + 1}</span>
            <p className="mt-4 text-sm font-black text-slate-950">{step}</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">Structured UX state for this booking step.</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {site.slots.map((slot) => (
          <button key={slot} className="focus-ring rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left text-sm font-black text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white">
            {slot}
            <span className="block pt-1 text-xs font-semibold opacity-70">Available option</span>
          </button>
        ))}
      </div>
    </div>
  );
}
