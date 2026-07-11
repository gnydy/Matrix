import { Header, Footer, ProductCard, MetricCard, Badge, Money } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function HomePage() {
  return <main className="min-h-screen bg-slate-50 text-slate-950 ">
    <Header mode="top" />
    
      <section className="mx-auto max-w-7xl px-5 py-10"><div className="rounded-[3rem] border border-slate-200 bg-white p-8"><div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]"><div><Badge>Parent-safe UX</Badge><h1 className="text-6xl font-black leading-tight">A cheerful store with serious trust cues.</h1><p className="mt-5 text-slate-600">{store.concept}</p></div><div className="grid grid-cols-2 gap-4">{['0-2','3-5','6-8','9+'].map((a)=><div key={a} className="rounded-full bg-gradient-to-r from-sky-300 to-blue-500 p-8 text-center text-3xl font-black text-white">{a}</div>)}</div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-sm font-black uppercase tracking-[0.25em] text-sky-600">Featured commerce components</p><h2 className="mt-3 text-4xl font-black">Product modules ready for customization</h2></div>
        <a href="/products" className="rounded-full border border-sky-300 px-5 py-3 text-sm font-black">View full catalog</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.slice(0,3).map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <div className="grid gap-5 md:grid-cols-4">
        {store.features.map((feature) => <div key={feature} className="rounded-[1.5rem] border border-slate-200 bg-white p-5"><span className="text-2xl font-black text-sky-600">✓</span><h3 className="mt-4 font-black">{feature}</h3><p className="mt-2 text-sm text-slate-600">Included as frontend-ready UI, prepared for real backend logic later.</p></div>)}
      </div>
    </section>
    <Footer />
  </main>;
}
