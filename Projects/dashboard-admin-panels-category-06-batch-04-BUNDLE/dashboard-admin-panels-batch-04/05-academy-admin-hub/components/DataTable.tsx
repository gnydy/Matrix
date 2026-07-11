import { dashboard } from "@/data/dashboard";

export function DataTable() {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-6 md:flex-row md:items-center md:justify-between dark:border-white/10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Live Records</p>
          <h3 className="mt-2 text-2xl font-black">Priority queue</h3>
        </div>
        <input className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--accent)] dark:border-white/10" placeholder="Smart search..." />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.18em] text-slate-500 dark:bg-white/5">
            <tr><th className="px-6 py-4">Item</th><th className="px-6 py-4">Owner</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Risk</th><th className="px-6 py-4">Action</th></tr>
          </thead>
          <tbody>
            {dashboard.records.map((record, index) => (
              <tr key={record} className="border-t border-slate-100 dark:border-white/10">
                <td className="px-6 py-4 font-black">{record}</td>
                <td className="px-6 py-4 opacity-70">{dashboard.roles[index % dashboard.roles.length]}</td>
                <td className="px-6 py-4"><span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-black text-[var(--accent)]">{dashboard.states[index % dashboard.states.length]}</span></td>
                <td className="px-6 py-4">{["Low", "Medium", "High", "Watch"][index % 4]}</td>
                <td className="px-6 py-4"><button className="font-black text-[var(--accent)]">Review</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
