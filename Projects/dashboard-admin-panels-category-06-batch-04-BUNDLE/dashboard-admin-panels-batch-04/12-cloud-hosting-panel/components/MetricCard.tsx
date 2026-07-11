export function MetricCard({ label, value, change }: { label: string; value: string; change: string }) {
  const positive = !change.startsWith("-");
  return (
    <article className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{label}</p>
        <span className={`rounded-full px-3 py-1 text-xs font-black ${positive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"}`}>{change}</span>
      </div>
      <p className="mt-5 text-3xl font-black tracking-tight">{value}</p>
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
        <div className="h-full w-2/3 rounded-full bg-[var(--accent)]" />
      </div>
    </article>
  );
}
