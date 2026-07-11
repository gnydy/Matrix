import { Header, Footer, ProductCard, MetricCard, Badge, Money } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function HomePage() {
  return <main className="min-h-screen bg-[#07080f] text-white lg:pl-72">
    <Header mode="side" />
    
      <section className="mx-auto max-w-7xl px-5 py-10"><div className="grid gap-6 lg:grid-cols-[1fr_1fr]"><div><Badge>Spec commerce</Badge><h1 className="mt-6 text-6xl font-black leading-tight">Compare before checkout.</h1><p className="mt-5 text-lg text-slate-300">{store.concept}</p><div className="mt-8 grid gap-4 md:grid-cols-2"><MetricCard label="Warranty" value="24M"/><MetricCard label="Products" value="640"/></div></div><div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-5"><div className="grid gap-4">{products.slice(0,4).map((p) => <div key={p.slug} className="grid grid-cols-[1fr_auto] rounded-2xl border border-white/10 p-4"><div><strong>{p.name}</strong><p className="text-sm text-slate-300">{p.specs[0]}</p></div><span className="font-black"><Money value={p.price} /></span></div>)}</div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Featured commerce components</p><h2 className="mt-3 text-4xl font-black">Product modules ready for customization</h2></div>
        <a href="/products" className="rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-black">View full catalog</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.slice(0,3).map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <div className="grid gap-5 md:grid-cols-4">
        {store.features.map((feature) => <div key={feature} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"><span className="text-2xl font-black text-cyan-300">✓</span><h3 className="mt-4 font-black">{feature}</h3><p className="mt-2 text-sm text-slate-300">Included as frontend-ready UI, prepared for real backend logic later.</p></div>)}
      </div>
    </section>
    <Footer />
  </main>;
}
