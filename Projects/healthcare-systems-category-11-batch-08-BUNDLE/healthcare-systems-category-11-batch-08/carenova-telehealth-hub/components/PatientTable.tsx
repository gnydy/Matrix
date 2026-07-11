import { site } from '@/data/site';

export function PatientTable() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">Patient records</p>
          <h3 className="mt-1 text-2xl font-black text-slate-950">Mock patient queue</h3>
        </div>
        <input className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-slate-100" placeholder="Smart search UI placeholder" />
      </div>
      <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-[0.2em] text-slate-400">
            <tr><th className="p-4">Patient</th><th className="p-4">Case</th><th className="p-4">Status</th><th className="p-4">Time</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {site.patients.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50">
                <td className="p-4"><strong className="text-slate-950">{p.name}</strong><p className="text-xs text-slate-400">{p.id}</p></td>
                <td className="p-4 text-slate-600">{p.case}</td>
                <td className="p-4"><span className={`rounded-full px-3 py-1 text-xs font-black ring-1 ${site.chip}`}>{p.status}</span></td>
                <td className="p-4 font-bold text-slate-700">{p.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
