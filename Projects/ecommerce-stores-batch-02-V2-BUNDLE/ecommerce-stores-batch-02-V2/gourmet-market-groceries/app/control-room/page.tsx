import { Header, MetricCard, Footer } from '@/components/storefront';
import { products } from '@/data/products';

export default function ControlRoomPage() {
  return <main className="min-h-screen bg-slate-50 text-slate-950"><Header />
    <section className="mx-auto max-w-7xl px-5 py-12"><p className="text-sm font-black uppercase tracking-[0.25em] text-green-600">Commerce control room</p><h1 className="mt-3 text-5xl font-black">Merchant dashboard preview</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-4"><MetricCard label="Revenue" value="148K"/><MetricCard label="Orders" value="642"/><MetricCard label="Conversion" value="8.4%"/><MetricCard label="Stock alerts" value="7"/></div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_.9fr]"><div className="rounded-[2rem] border border-slate-200 bg-white p-6"><h2 className="text-2xl font-black">Product operations</h2><div className="mt-5 overflow-hidden rounded-2xl border border-slate-200"><table className="w-full text-left text-sm"><thead className="bg-green-100 text-slate-950"><tr><th className="p-4">Product</th><th>Stock</th><th>Status</th></tr></thead><tbody>{products.map((p) => <tr key={p.slug} className="border-t border-slate-200"><td className="p-4 font-bold">{p.name}</td><td>{p.stock}</td><td><span className="rounded-full border border-green-300 px-3 py-1 text-xs font-black">Active</span></td></tr>)}</tbody></table></div></div><div className="rounded-[2rem] border border-slate-200 bg-white p-6"><h2 className="text-2xl font-black">Automation cards</h2>{['Low stock alert','Abandoned cart reminder','VIP customer segment','Weekly sales report'].map((x) => <div key={x} className="mt-4 rounded-2xl border border-slate-200 p-4 text-sm font-bold">{x}<p className="mt-1 font-normal text-slate-600">Mock automation prepared for real workflow logic.</p></div>)}</div></div>
    </section><Footer /></main>;
}
