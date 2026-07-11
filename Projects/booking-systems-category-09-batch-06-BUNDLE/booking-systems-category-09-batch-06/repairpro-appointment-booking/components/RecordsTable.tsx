import { site } from "@/data/site";
import { initials } from "@/lib/utils";

export function RecordsTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-soft">
      <div className="border-b border-slate-100 p-6">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Booking records</p>
        <h3 className="mt-2 text-2xl font-black text-slate-950">Recent {site.bookingEntity.toLowerCase()} activity</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {site.records.map((record) => (
          <div key={record.join("-")} className="grid gap-4 p-5 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
            <div className="flex items-center gap-3">
              <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${site.accent} text-xs font-black text-white`}>{initials(record[0])}</span>
              <span className="text-sm font-black text-slate-950">{record[0]}</span>
            </div>
            <span className="text-sm font-bold text-slate-600">{record[1]}</span>
            <span className="text-sm font-bold text-slate-600">{record[2]}</span>
            <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black text-slate-700">{record[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
