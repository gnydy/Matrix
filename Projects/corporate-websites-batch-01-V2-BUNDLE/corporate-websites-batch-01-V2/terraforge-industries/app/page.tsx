import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-zinc-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><nav className="flex justify-between"><b className="text-2xl">{site.name}</b><span>Factory OS website</span></nav><div className="mt-12 rounded-[2rem] bg-gradient-to-br from-red-600 to-orange-500 p-10"><h1 className="max-w-4xl text-6xl font-black">Industrial credibility with production-floor evidence.</h1><p className="mt-5 max-w-2xl text-lg text-white/80">{site.idea}</p></div><div className="mt-8 grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><aside className="rounded-3xl bg-white p-6 text-zinc-950"><h2 className="text-2xl font-black">Line status</h2>{site.stats.map((s)=><MetricCard key={s[0]} value={s[0]} label={s[1]} />)}</aside><div className="grid gap-4 md:grid-cols-2">{site.services.map((s,i)=><div key={s} className="rounded-3xl border border-white/10 bg-white/10 p-6"><b className="text-orange-300">Cell 0{i+1}</b><h3 className="mt-4 text-2xl font-black">{s}</h3><p className="mt-3 text-zinc-300">Clear operational section, not a generic service card.</p></div>)}</div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
