import { Header, Footer, ProductCard, MetricCard, Badge, Money } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function HomePage() {
  return <main className="min-h-screen bg-slate-50 text-slate-950 ">
    <Header mode="top" />
    
      <section className="mx-auto max-w-7xl px-5 py-10"><div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr]"><div><Badge>Reading desk</Badge><h1 className="mt-6 text-6xl font-black">A bookstore built around shelves and reading lists.</h1><p className="mt-5 text-slate-600">{store.concept}</p></div><div className="rounded-[3rem] border border-slate-200 bg-white p-6"><div className="grid gap-4 md:grid-cols-3">{products.map((p)=><div key={p.slug} className="min-h-64 rounded-2xl bg-gradient-to-b from-indigo-400 to-blue-700 p-5 text-white"><p className="text-sm uppercase tracking-[0.2em]">Book</p><h3 className="mt-20 text-xl font-black">{p.name}</h3></div>)}</div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-sm font-black uppercase tracking-[0.25em] text-indigo-600">Featured commerce components</p><h2 className="mt-3 text-4xl font-black">Product modules ready for customization</h2></div>
        <a href="/products" className="rounded-full border border-indigo-300 px-5 py-3 text-sm font-black">View full catalog</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.slice(0,3).map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <div className="grid gap-5 md:grid-cols-4">
        {store.features.map((feature) => <div key={feature} className="rounded-[1.5rem] border border-slate-200 bg-white p-5"><span className="text-2xl font-black text-indigo-600">✓</span><h3 className="mt-4 font-black">{feature}</h3><p className="mt-2 text-sm text-slate-600">Included as frontend-ready UI, prepared for real backend logic later.</p></div>)}
      </div>
    </section>
    <Footer />
  </main>;
}
