import { Header, ProductCard, Badge, Footer } from '@/components/storefront';
import { products, store } from '@/data/products';

export default function ProductsPage() {
  return <main className="min-h-screen bg-slate-50 text-slate-950">
    <Header />
    <section className="mx-auto max-w-7xl px-5 py-12">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="h-fit rounded-[2rem] border border-slate-200 bg-white p-6">
          <Badge>Smart catalog</Badge>
          <h1 className="mt-5 text-4xl font-black">{store.industry} catalog</h1>
          <p className="mt-4 text-sm leading-6 text-slate-600">{store.concept}</p>
          <div className="mt-6 grid gap-3">
            {store.features.map((feature) => <button key={feature} className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-bold">{feature}</button>)}
          </div>
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-600 p-5 text-white"><p className="text-xs font-black uppercase tracking-[0.25em]">Filter logic</p><p className="mt-2 text-sm">Mock filters are designed as UI-ready controls for real data later.</p></div>
        </aside>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => <div key={product.slug} className="break-inside-avoid pb-6"><ProductCard product={product} wide={store.pattern === 'comparison-hub' || store.pattern === 'digital-marketplace'} /></div>)}
        </div>
      </div>
    </section>
    <Footer />
  </main>;
}
