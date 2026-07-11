import { site } from '@/data/site';

export function DashboardPreview() {
  return <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-soft">
    <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-widest text-slate-500">Control room</p><h3 className="mt-2 text-3xl font-black text-slate-950">Lead and listing operations</h3></div><span className="rounded-full px-4 py-2 text-sm font-black text-white" style={{ background: site.accent }}>Role-based mock UI</span></div>
    <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="p-4">Client</th><th className="p-4">Requirement</th><th className="p-4">Stage</th><th className="p-4">Budget</th></tr></thead><tbody>{site.dashboardRows.map(r => <tr key={r.client} className="border-t border-slate-100"><td className="p-4 font-bold">{r.client}</td><td className="p-4">{r.need}</td><td className="p-4"><span className="rounded-full bg-slate-100 px-3 py-1 font-bold">{r.stage}</span></td><td className="p-4 font-bold">{r.budget}</td></tr>)}</tbody></table></div>
  </div>;
}
