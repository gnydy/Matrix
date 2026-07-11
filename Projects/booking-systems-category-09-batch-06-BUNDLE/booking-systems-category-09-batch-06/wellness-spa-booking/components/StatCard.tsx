export function StatCard({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-soft">
      <p className="text-sm font-bold text-slate-500">{label}</p>
      <p className="mt-3 text-4xl font-black tracking-tight text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
    </div>
  );
}
