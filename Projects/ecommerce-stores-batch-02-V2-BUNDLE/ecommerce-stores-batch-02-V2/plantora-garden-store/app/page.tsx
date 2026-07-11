import { Header, Footer, ProductCard, MetricCard, Badge, Money } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function HomePage() {
  return <main className="min-h-screen bg-slate-50 text-slate-950 ">
    <Header mode="top" />
    
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-10 lg:grid-cols-[.8fr_1.2fr]"><div className="rounded-[3rem] border border-slate-200 bg-white p-8"><Badge>Care based store</Badge><h1 className="mt-6 text-6xl font-black">Shop plants by light, water and skill.</h1><p className="mt-5 text-slate-600">{store.concept}</p>{['Low light','Weekly water','Beginner safe'].map((x)=><div key={x} className="mt-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-700 px-5 py-3 font-black text-white">{x}</div>)}</div><div className="grid gap-4 md:grid-cols-2">{products.map((p)=><ProductCard key={p.slug} product={p} />)}</div></section>
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-sm font-black uppercase tracking-[0.25em] text-emerald-600">Featured commerce components</p><h2 className="mt-3 text-4xl font-black">Product modules ready for customization</h2></div>
        <a href="/products" className="rounded-full border border-emerald-300 px-5 py-3 text-sm font-black">View full catalog</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.slice(0,3).map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <div className="grid gap-5 md:grid-cols-4">
        {store.features.map((feature) => <div key={feature} className="rounded-[1.5rem] border border-slate-200 bg-white p-5"><span className="text-2xl font-black text-emerald-600">✓</span><h3 className="mt-4 font-black">{feature}</h3><p className="mt-2 text-sm text-slate-600">Included as frontend-ready UI, prepared for real backend logic later.</p></div>)}
      </div>
    </section>
    <Footer />
  </main>;
}
