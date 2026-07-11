import { Nav } from '@/components/Nav';
import { SectionHeader } from '@/components/SectionHeader';
import { PropertyCard } from '@/components/PropertyCard';
import { MetricCard } from '@/components/MetricCard';
import { DashboardPreview } from '@/components/DashboardPreview';
import { site } from '@/data/site';

export default function HomePage() {
  return <main>
    <Nav />
    <section className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${site.soft}, #ffffff)` }}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 shadow-soft">Category 13 · Real Estate Platform · {site.market}</p>
          <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 sm:text-7xl">{site.name}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">{site.positioning} Built with a {site.layout} concept for {site.target}.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="/listings" className="rounded-full px-6 py-4 font-black text-white shadow-soft" style={{ background: site.accent }}>Explore listings</a><a href="/dashboard" className="rounded-full border border-slate-200 bg-white px-6 py-4 font-black text-slate-950">View dashboard</a></div>
        </div>
        <div className="glass-panel rounded-[2.5rem] p-5 shadow-soft">
          <div className="rounded-[2rem] p-6 text-white" style={{ background: site.accent }}><p className="text-sm font-bold opacity-80">Business use case</p><h2 className="mt-2 text-3xl font-black">{site.usecase}</h2></div>
          <div className="mt-5 grid grid-cols-2 gap-4">{site.stats.map(s => <MetricCard key={s.label} label={s.label} value={s.value} />)}</div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><SectionHeader eyebrow="Featured inventory" title="Property discovery that feels like a real product" description="Listings, filters, details, agents, calculator, viewing flow, and dashboard previews are included as frontend mock interfaces." /><div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{site.properties.map(p => <PropertyCard key={p.slug} property={p} />)}</div></section>
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><DashboardPreview /></section>
  </main>;
}
