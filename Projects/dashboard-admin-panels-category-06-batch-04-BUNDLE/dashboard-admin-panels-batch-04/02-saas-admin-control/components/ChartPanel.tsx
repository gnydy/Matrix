import { dashboard } from "@/data/dashboard";

export function ChartPanel() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Performance</p>
          <h3 className="mt-2 text-2xl font-black">Operational pulse</h3>
        </div>
        <span className="rounded-full bg-[var(--soft)] px-4 py-2 text-xs font-black text-[var(--accent)]">Mock chart</span>
      </div>
      <div className="mt-8 grid grid-cols-8 items-end gap-3">
        {dashboard.chart.map((value, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="w-full rounded-t-2xl bg-[var(--accent)]/80" style={{ height: `${value}px` }} />
            <span className="text-[10px] font-bold opacity-50">W{index + 1}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
