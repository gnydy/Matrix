import { Header, Footer, ProductCard, MetricCard, Badge, Money } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function HomePage() {
  return <main className="min-h-screen bg-slate-50 text-slate-950 ">
    <Header mode="top" />
    
      <section className="px-5 py-8"><div className="mx-auto max-w-7xl"><div className="grid gap-4 lg:grid-cols-[.8fr_1.2fr_.6fr]"><div className="rounded-[2.5rem] border border-slate-200 bg-white p-8"><Badge>Runway edit</Badge><h1 className="mt-10 text-6xl font-black leading-none">Shop the full visual season.</h1><p className="mt-5 text-slate-600">{store.concept}</p></div><div className="min-h-[620px] rounded-[3rem] bg-gradient-to-br from-rose-400 to-pink-600 p-8 text-white"><div className="flex h-full flex-col justify-end"><p className="text-sm uppercase tracking-[0.35em]">Look 04</p><h2 className="mt-3 text-7xl font-black">{products[1].name}</h2></div></div><div className="grid gap-4"><ProductCard product={products[0]}/><ProductCard product={products[2]}/></div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div><p className="text-sm font-black uppercase tracking-[0.25em] text-rose-500">Featured commerce components</p><h2 className="mt-3 text-4xl font-black">Product modules ready for customization</h2></div>
        <a href="/products" className="rounded-full border border-rose-300/50 px-5 py-3 text-sm font-black">View full catalog</a>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.slice(0,3).map((product) => <ProductCard key={product.slug} product={product} />)}
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 pb-16">
      <div className="grid gap-5 md:grid-cols-4">
        {store.features.map((feature) => <div key={feature} className="rounded-[1.5rem] border border-slate-200 bg-white p-5"><span className="text-2xl font-black text-rose-500">✓</span><h3 className="mt-4 font-black">{feature}</h3><p className="mt-2 text-sm text-slate-600">Included as frontend-ready UI, prepared for real backend logic later.</p></div>)}
      </div>
    </section>
    <Footer />
  </main>;
}
