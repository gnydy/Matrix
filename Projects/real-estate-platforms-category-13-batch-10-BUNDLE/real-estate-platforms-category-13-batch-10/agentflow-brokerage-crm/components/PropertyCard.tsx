import { formatEgp } from '@/lib/format';

type Property = { slug: string; title: string; area: string; price: number; beds: number; size: number; status: string; yield: number; tags: readonly string[] };
export function PropertyCard({ property }: { property: Property }) {
  return <article className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1">
    <div className="relative h-44 bg-gradient-to-br from-slate-100 to-slate-300">
      <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-slate-700">{property.status}</div>
      <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white/85 p-3 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{property.area}</p>
        <h3 className="mt-1 font-black text-slate-950">{property.title}</h3>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-end justify-between gap-4">
        <div><p className="text-xs font-bold text-slate-500">Starting price</p><p className="text-lg font-black text-slate-950">{formatEgp(property.price)}</p></div>
        <div className="rounded-2xl bg-slate-50 px-3 py-2 text-right text-xs font-bold text-slate-600">{property.yield}% yield</div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-sm">
        <span className="rounded-2xl bg-slate-50 p-3 font-bold">{property.beds} beds</span>
        <span className="rounded-2xl bg-slate-50 p-3 font-bold">{property.size} m²</span>
        <span className="rounded-2xl bg-slate-50 p-3 font-bold">Verified</span>
      </div>
      <a href={`/property/${property.slug}`} className="mt-5 block rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-black text-slate-900 hover:bg-slate-950 hover:text-white">View property details</a>
    </div>
  </article>;
}
