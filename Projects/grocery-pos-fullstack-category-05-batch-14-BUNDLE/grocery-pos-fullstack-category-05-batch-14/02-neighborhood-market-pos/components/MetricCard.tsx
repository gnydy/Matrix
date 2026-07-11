export function MetricCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <div className="small-card">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <strong className="mt-3 block text-2xl text-slate-950">{value}</strong>
      <span className="mt-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{change}</span>
    </div>
  );
}
