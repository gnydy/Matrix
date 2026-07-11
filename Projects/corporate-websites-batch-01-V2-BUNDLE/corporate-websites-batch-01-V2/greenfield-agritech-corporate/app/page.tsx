import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-green-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><span>Field intelligence</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[.9fr_1.1fr]"><div><SectionBadge>Agritech corporate</SectionBadge><h1 className="mt-8 text-6xl font-black leading-none">A modern farm technology website with sensor proof and supply clarity.</h1><p className="mt-6 text-lg text-green-100/70">{site.idea}</p></div><div className="rounded-[2rem] bg-lime-300 p-6 text-green-950"><h2 className="text-2xl font-black">Field sensor grid</h2><div className="mt-6 grid grid-cols-4 gap-3">{Array.from({length:16}).map((_,i)=><div key={i} className="h-16 rounded-2xl bg-green-800/20 p-2 text-xs">Zone {i+1}</div>)}</div></div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
