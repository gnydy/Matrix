import { Header, Footer, ProductCard, MetricCard, Badge, Money } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function HomePage() {
  return <main className="min-h-screen bg-slate-50 text-slate-950 ">
    <Header mode="top" />
    
      <section className="mx-auto max-w-7xl px-5 py-10"><div className="grid gap-6 lg:grid-cols-[1fr_1fr_1fr]"><div className="rounded-[3rem] border border-slate-200 bg-white p-8 lg:col-span-1"><Badge>Maker market</Badge><h1 className="mt-6 text-5xl font-black">Every product has a maker story.</h1><p className="mt-5 text-slate-600">{store.concept}</p></div>{products.slice(0,4).map((p,i)=><div key={p.slug} className={`rounded-[3rem] border border-slate-200 bg-white p-5 ${i===0?'lg:col-span-2':''}`}><div className="h-64 rounded-[2rem] bg-gradient-to-br from-amber-400 to-yellow-600"></div><h3 className="mt-4 text-2xl font-black">{p.name}</h3><p className="mt-2 text-sm text-slate-600">Made by artisan booth #14</p></div>)}</div></section>
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-sm font-black uppercase tracking-[0.25em] text-amber-300">Featured commerce components</p><h2 className="mt-3 text-4xl font-black">Product modules ready for customization</h2></div>
        <a href="/products" className="rounded-full border border-amber-300/40 px-5 py-3 text-sm font-black">View full catalog</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.slice(0,3).map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <div className="grid gap-5 md:grid-cols-4">
        {store.features.map((feature) => <div key={feature} className="rounded-[1.5rem] border border-slate-200 bg-white p-5"><span className="text-2xl font-black text-amber-300">✓</span><h3 className="mt-4 font-black">{feature}</h3><p className="mt-2 text-sm text-slate-600">Included as frontend-ready UI, prepared for real backend logic later.</p></div>)}
      </div>
    </section>
    <Footer />
  </main>;
}
