import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-slate-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><span className="text-cyan-300">AI governance ready</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_480px]"><div><SectionBadge>AI lab corporate</SectionBadge><h1 className="mt-8 text-6xl font-black leading-none">AI products explained through pilots, models and governance.</h1><p className="mt-6 text-lg leading-8 text-slate-300">{site.idea}</p></div><div className="rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6"><h2 className="text-2xl font-black">Experiment console</h2>{site.services.map((s,i)=><div key={s} className="mt-4 rounded-2xl bg-black/40 p-4"><b>AI-0{i+1}</b><span className="ml-4">{s}</span><span className="float-right text-cyan-300">scored</span></div>)}</div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
