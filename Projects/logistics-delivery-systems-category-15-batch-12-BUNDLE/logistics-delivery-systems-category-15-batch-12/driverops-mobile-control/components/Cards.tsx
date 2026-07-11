import { site } from '@/data/site';

export function MetricCards() {
  return (
    <section className="grid gap-4 md:grid-cols-4">
      {site.metrics.map((metric) => (
        <div key={metric.label} className="panel rounded-3xl p-5">
          <p className="text-sm text-slate-500">{metric.label}</p>
          <strong className="mt-2 block text-3xl tracking-tight text-slate-950">{metric.value}</strong>
          <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{metric.note}</span>
        </div>
      ))}
    </section>
  );
}

export function StatusPill({ value }: { value: string }) {
  const intent = value.toLowerCase().includes('delayed') || value.toLowerCase().includes('exception') || value.toLowerCase().includes('high')
    ? 'bg-rose-50 text-rose-700 ring-rose-200'
    : value.toLowerCase().includes('transit') || value.toLowerCase().includes('route') || value.toLowerCase().includes('active')
      ? 'bg-blue-50 text-blue-700 ring-blue-200'
      : 'bg-emerald-50 text-emerald-700 ring-emerald-200';
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ring-1 ${intent}`}>{value}</span>;
}

export function OrderTable() {
  return (
    <div className="panel overflow-hidden rounded-3xl">
      <div className="flex items-center justify-between border-b border-slate-100 p-5">
        <div>
          <h2 className="text-xl font-bold">Shipment operations</h2>
          <p className="text-sm text-slate-500">Mock operational table ready for API integration.</p>
        </div>
        <button className="rounded-2xl px-4 py-2 text-sm font-semibold text-white" style={{ background: site.accent }}>Export report</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr><th className="px-5 py-3">Shipment</th><th className="px-5 py-3">Customer</th><th className="px-5 py-3">Route</th><th className="px-5 py-3">ETA</th><th className="px-5 py-3">Risk</th><th className="px-5 py-3">Status</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {site.orders.map((order) => (
              <tr key={order.id} className="bg-white hover:bg-slate-50">
                <td className="px-5 py-4 font-semibold text-slate-950">{order.id}</td>
                <td className="px-5 py-4 text-slate-600">{order.customer}</td>
                <td className="px-5 py-4 text-slate-600">{order.route}</td>
                <td className="px-5 py-4 font-medium">{order.eta}</td>
                <td className="px-5 py-4"><StatusPill value={order.risk} /></td>
                <td className="px-5 py-4"><StatusPill value={order.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
