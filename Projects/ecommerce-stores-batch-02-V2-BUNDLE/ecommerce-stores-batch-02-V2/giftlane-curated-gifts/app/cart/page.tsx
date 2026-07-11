import { Header, Money, Footer } from '@/components/storefront';
import { products } from '@/data/products';

export default function CartPage() {
  const selected = products.slice(0,3);
  const subtotal = selected.reduce((sum, item) => sum + item.price, 0);
  return <main className="min-h-screen bg-slate-50 text-slate-950">
    <Header />
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.2fr_.8fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.25em] text-fuchsia-500">Cart UI mock</p>
        <h1 className="mt-3 text-5xl font-black">Order basket</h1>
        <div className="mt-8 grid gap-4">{selected.map((item) => <div key={item.slug} className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 md:grid-cols-[96px_1fr_auto] md:items-center"><div className="h-24 rounded-3xl bg-gradient-to-br from-fuchsia-400 to-pink-600" /><div><h2 className="text-xl font-black">{item.name}</h2><p className="mt-2 text-sm text-slate-600">{item.summary}</p></div><strong><Money value={item.price} /></strong></div>)}</div>
      </div>
      <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6"><h2 className="text-2xl font-black">Order summary</h2><div className="mt-6 grid gap-3 text-sm text-slate-600"><div className="flex justify-between"><span>Subtotal</span><strong className="text-inherit"><Money value={subtotal} /></strong></div><div className="flex justify-between"><span>Mock delivery</span><strong>Free</strong></div><div className="flex justify-between"><span>Estimated tax</span><strong>Included</strong></div></div><div className="mt-6 rounded-2xl bg-gradient-to-r from-fuchsia-400 to-pink-600 px-5 py-4 text-center font-black text-white">Continue to checkout</div></aside>
    </section><Footer /></main>;
}
