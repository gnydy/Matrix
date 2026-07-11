import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-slate-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><nav className="flex justify-between"><b className="text-2xl">{site.name}</b><span className="text-violet-300">Private advisory desk</span></nav><div className="mt-16 grid gap-10 lg:grid-cols-[1fr_480px]"><div><h1 className="text-6xl font-black leading-none">Financial advisory that looks disciplined before the first call.</h1><p className="mt-6 text-lg leading-8 text-slate-300">{site.client}</p><div className="mt-8 flex flex-wrap gap-3">{site.services.map(s=><span key={s} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950">{s}</span>)}</div></div><div className="rounded-[2rem] bg-white p-6 text-slate-950"><h2 className="text-2xl font-black">Capital desk</h2>{site.stats.map(s=><div key={s[0]} className="mt-5 flex justify-between border-b border-slate-200 pb-4"><span>{s[1]}</span><b>{s[0]}</b></div>)}<button className="mt-6 w-full rounded-2xl bg-violet-600 px-5 py-4 font-bold text-white">Request finance model</button></div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
