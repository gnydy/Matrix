import { Header, MetricCard, Footer } from '@/components/storefront';

export default function AccountPage() {
  return <main className="min-h-screen bg-[#07080f] text-white"><Header />
    <section className="mx-auto max-w-7xl px-5 py-12"><p className="text-sm font-black uppercase tracking-[0.25em] text-red-300">Customer area mock</p><h1 className="mt-3 text-5xl font-black">Account dashboard</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-4"><MetricCard label="Orders" value="12"/><MetricCard label="Wishlist" value="28"/><MetricCard label="Saved carts" value="3"/><MetricCard label="Support" value="1"/></div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]"><div className="rounded-[2rem] border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-black">Recent activity</h2>{['Order placed','Wishlist updated','Address edited','Support ticket opened'].map((x) => <div key={x} className="mt-4 rounded-2xl border border-white/10 p-4 text-sm text-slate-300">{x}</div>)}</div><div className="rounded-[2rem] border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-black">Personalization controls</h2><p className="mt-3 text-sm leading-6 text-slate-300">This area gives the template buyer a clear place to connect authentication, order history, recommendations, and customer preferences.</p><div className="mt-6 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 p-5 font-black text-white">Ready for real auth later</div></div></div>
    </section><Footer /></main>;
}
