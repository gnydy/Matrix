type MetricCardProps = { label: string; value: string; note?: string };
export function MetricCard({ label, value, note }: MetricCardProps) {
  return <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{label}</p>
    <p className="mt-3 text-3xl font-black text-slate-950">{value}</p>
    {note ? <p className="mt-2 text-sm leading-6 text-slate-600">{note}</p> : null}
  </div>;
}
