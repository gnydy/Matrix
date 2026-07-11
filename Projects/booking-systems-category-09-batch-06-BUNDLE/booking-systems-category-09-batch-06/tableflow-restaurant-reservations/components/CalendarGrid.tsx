import { site } from "@/data/site";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function CalendarGrid() {
  return (
    <div className="rounded-[2.5rem] border border-white bg-white p-6 shadow-soft">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Availability calendar</p>
          <h3 className="mt-2 text-2xl font-black text-slate-950">{site.name} weekly capacity</h3>
        </div>
        <button className={`rounded-full bg-gradient-to-r ${site.accent} px-5 py-3 text-sm font-black text-white`}>Add block</button>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-7">
        {days.map((day, index) => (
          <div key={day} className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs font-black uppercase tracking-wider text-slate-500">{day}</p>
            <div className="mt-4 space-y-3">
              {site.slots.slice(0, 3).map((slot, slotIndex) => (
                <div key={`${day}-${slot}`} className={`rounded-2xl p-3 text-xs font-black ${slotIndex === index % 3 ? "bg-slate-950 text-white" : "bg-white text-slate-700"}`}>
                  {slot}
                  <span className="block pt-1 text-[10px] font-semibold opacity-70">{slotIndex === index % 3 ? "Peak" : "Open"}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
