export function MetricCard({ label, value }: { label: string; value: string }) {
  return <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
    <p className="text-sm font-bold text-slate-500">{label}</p>
    <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
  </div>;
}
