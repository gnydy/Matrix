import { Header, Footer, ProductCard, MetricCard, Badge, Money } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function HomePage() {
  return <main className="min-h-screen bg-[#07080f] text-white ">
    <Header mode="top" />
    
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="rounded-[3rem] border border-white/10 bg-white/5 p-8 lg:p-10"><Badge>Private commerce</Badge><h1 className="mt-8 text-6xl font-black leading-[0.95] lg:text-7xl">Collector-grade watch commerce.</h1><p className="mt-6 text-lg leading-8 text-slate-300">{store.concept}</p><div className="mt-8 flex flex-wrap gap-3"><a href="/products" className="rounded-full bg-gradient-to-r from-amber-400 to-yellow-600 px-6 py-3 font-black text-white">Explore drops</a><a href="/control-room" className="rounded-full border border-amber-300/40 px-6 py-3 font-black">Control room</a></div></div>
        <div className="grid gap-5"><div className="min-h-[380px] rounded-[3rem] bg-gradient-to-br from-amber-400 to-yellow-600 p-8 text-white"><div className="noise h-full rounded-[2rem] border border-white/20 p-6"><p className="text-sm font-black uppercase tracking-[0.3em]">Limited drop</p><h2 className="mt-28 text-5xl font-black">{products[0].name}</h2></div></div><div className="grid gap-5 md:grid-cols-3"><MetricCard label="Avg order" value="42K"/><MetricCard label="Private buyers" value="820"/><MetricCard label="Drops" value="14"/></div></div>
      </section>
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
        {store.features.map((feature) => <div key={feature} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"><span className="text-2xl font-black text-amber-300">✓</span><h3 className="mt-4 font-black">{feature}</h3><p className="mt-2 text-sm text-slate-300">Included as frontend-ready UI, prepared for real backend logic later.</p></div>)}
      </div>
    </section>
    <Footer />
  </main>;
}
