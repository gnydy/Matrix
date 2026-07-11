import { Nav } from '@/components/Nav';
import { MortgageCalculator } from '@/components/MortgageCalculator';
import { site } from '@/data/site';
import { formatEgp } from '@/lib/format';

export function generateStaticParams() { return site.properties.map(p => ({ slug: p.slug })); }

export default function PropertyDetails({ params }: { params: { slug: string } }) {
  const property = site.properties.find(p => p.slug === params.slug) ?? site.properties[0];
  return <main><Nav /><section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8"><div className="rounded-[2.5rem] bg-gradient-to-br from-slate-100 to-slate-300 p-8"><span className="rounded-full bg-white px-4 py-2 text-sm font-black">{property.status}</span><h1 className="mt-8 text-5xl font-black text-slate-950">{property.title}</h1><p className="mt-4 text-xl text-slate-700">{property.area} · {site.market}</p></div><aside className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft"><p className="text-sm font-bold text-slate-500">Starting price</p><p className="mt-2 text-4xl font-black">{formatEgp(property.price)}</p><div className="mt-6 grid grid-cols-3 gap-3 text-center"><span className="rounded-2xl bg-slate-50 p-4 font-bold">{property.beds} beds</span><span className="rounded-2xl bg-slate-50 p-4 font-bold">{property.size} m²</span><span className="rounded-2xl bg-slate-50 p-4 font-bold">{property.yield}% yield</span></div><a href="/booking" className="mt-6 block rounded-2xl px-5 py-4 text-center font-black text-white" style={{ background: site.accent }}>Book viewing</a></aside></section><section className="px-4 pb-20"><MortgageCalculator /></section></main>;
}
