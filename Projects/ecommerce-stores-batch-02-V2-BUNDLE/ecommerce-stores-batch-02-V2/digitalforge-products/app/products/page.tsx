import { Header, ProductCard, Badge, Footer } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function ProductsPage() {
  return <main className="min-h-screen bg-[#07080f] text-white">
    <Header />
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="h-fit rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <Badge>Smart catalog</Badge>
          <h1 className="mt-5 text-4xl font-black">{store.industry} catalog</h1>
          <p className="mt-4 text-sm leading-6 text-slate-300">{store.concept}</p>
          <div className="mt-6 grid gap-3">
            {store.features.map((feature) => <button key={feature} className="rounded-2xl border border-white/10 px-4 py-3 text-left text-sm font-bold">{feature}</button>)}
          </div>
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-400 to-fuchsia-600 p-5 text-white"><p className="text-xs font-black uppercase tracking-[0.25em]">Filter logic</p><p className="mt-2 text-sm">Mock filters are designed as UI-ready controls for real data later.</p></div>
        </aside>
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product, index) => <div key={product.slug} className="break-inside-avoid pb-6"><ProductCard product={product} wide={store.pattern === 'comparison-hub' || store.pattern === 'digital-marketplace'} /></div>)}
        </div>
      </div>
    </section>
    <Footer />
  </main>;
}
