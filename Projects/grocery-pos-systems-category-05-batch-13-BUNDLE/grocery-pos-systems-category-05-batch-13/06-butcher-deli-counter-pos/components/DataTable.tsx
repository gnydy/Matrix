import { site } from '@/data/site';

export function ProductTable() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[760px] text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500">
          <tr><th className="p-4">SKU</th><th className="p-4">Product</th><th className="p-4">Category</th><th className="p-4">Price</th><th className="p-4">Stock</th><th className="p-4">Velocity</th></tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {site.products.map((p) => (
            <tr key={p.sku} className="hover:bg-slate-50"><td className="p-4 font-bold">{p.sku}</td><td className="p-4 font-black">{p.name}</td><td className="p-4">{p.category}</td><td className="p-4">{p.price}</td><td className="p-4">{p.stock}</td><td className="p-4">{p.velocity}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function OrdersTable() {
  return (
    <div className="grid gap-3">
      {site.orders.map((o) => (
        <div key={o.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3"><b>{o.id}</b><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black">{o.status}</span></div>
          <p className="mt-2 text-sm text-slate-500">{o.customer} · {o.method}</p>
          <p className="mt-3 text-2xl font-black">{o.amount}</p>
        </div>
      ))}
    </div>
  );
}
