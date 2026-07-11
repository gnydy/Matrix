import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-white text-slate-950"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex items-center justify-between"><b className="text-3xl">{site.name}</b><button className="rounded-full bg-emerald-600 px-5 py-3 text-white">View energy assets</button></header><div className="mt-16 grid gap-8 lg:grid-cols-[.9fr_1.1fr]"><div><SectionBadge>Energy infrastructure</SectionBadge><h1 className="mt-8 text-6xl font-black leading-none">A corporate site built around assets, impact and grid confidence.</h1><p className="mt-6 text-lg leading-8 text-slate-600">{site.idea}</p></div><div className="rounded-[2rem] bg-slate-950 p-6 text-white"><p className="text-sm text-emerald-300">Infrastructure map mock</p><div className="mt-6 grid grid-cols-3 gap-3">{Array.from({length:12}).map((_,i)=><div key={i} className="h-20 rounded-2xl bg-gradient-to-br from-emerald-400/80 to-sky-500/40" />)}</div></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{site.stats.map((item) => <MetricCard key={item[0]} value={item[0]} label={item[1]} note="Commercial proof block for portfolio presentation." />)}</div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
