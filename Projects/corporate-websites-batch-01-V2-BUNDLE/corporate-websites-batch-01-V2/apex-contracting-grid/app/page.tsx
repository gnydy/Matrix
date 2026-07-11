import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() {
  return <main className="bg-neutral-950 text-white">
    <section className="relative overflow-hidden px-6 py-8"><nav className="mx-auto flex max-w-7xl items-center justify-between"><b className="text-2xl">{site.name}</b><span className="rounded-full border border-yellow-400 px-4 py-2 text-yellow-300">Pre-qualified contractor</span></nav><div className="mx-auto mt-16 grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]"><div><h1 className="text-6xl font-black leading-none md:text-8xl">Built proof before the bid meeting.</h1><p className="mt-6 text-lg leading-8 text-neutral-300">{site.idea}</p></div><div className="grid gap-4 md:grid-cols-2">{['Safety file','Equipment pool','Project gallery','Bid pack'].map((x,i)=><div key={x} className="min-h-44 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/15 to-white/5 p-6"><b className="text-4xl text-yellow-300">{i+1}</b><h3 className="mt-8 text-2xl font-black">{x}</h3></div>)}</div></div></section>
    <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-16 md:grid-cols-3">{site.stats.map((item) => <MetricCard key={item[0]} value={item[0]} label={item[1]} note="Commercial proof block for portfolio presentation." />)}</section><Footer />
  </main>;
}

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
