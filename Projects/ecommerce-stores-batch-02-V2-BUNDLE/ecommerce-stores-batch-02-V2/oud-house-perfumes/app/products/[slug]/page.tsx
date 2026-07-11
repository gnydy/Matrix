import { Header, Money, Badge, Footer } from '@/components/storefront';
import { products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailsPage({ params }: { params: any }) {
  const product = products.find((item) => item.slug === params.slug) ?? products[0];
  return <main className="min-h-screen bg-[#07080f] text-white"><Header />
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.1fr_.9fr]">
      <div className="min-h-[560px] rounded-[3rem] bg-gradient-to-br from-yellow-300 to-amber-600 p-8 text-white"><div className="noise h-full rounded-[2rem] border border-white/20 p-8"><Badge>Product detail</Badge><h1 className="mt-8 max-w-2xl text-6xl font-black">{product.name}</h1><p className="mt-5 max-w-xl text-lg text-white/80">{product.summary}</p></div></div>
      <aside className="rounded-[3rem] border border-white/10 bg-white/5 p-8"><p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-300">{product.category}</p><h2 className="mt-3 text-4xl font-black"><Money value={product.price} /></h2><p className="mt-4 leading-7 text-slate-300">A complete mock detail page with specs, trust blocks, stock information, and conversion controls.</p><div className="mt-6 grid gap-3">{product.specs.map((spec) => <div key={spec} className="rounded-2xl border border-white/10 p-4 text-sm font-bold">{spec}</div>)}</div><button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-yellow-300 to-amber-600 px-6 py-4 font-black text-white">Add to cart mock</button></aside>
    </section><Footer /></main>;
}
