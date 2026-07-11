import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-white text-slate-950"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><span>Technical office</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]"><div><h1 className="text-6xl font-black leading-none">Engineering services shown through drawings, specs and discipline control.</h1><p className="mt-6 text-lg leading-8 text-slate-600">{site.idea}</p></div><div className="rounded-[2rem] bg-blue-950 p-6 text-white"><h2 className="text-2xl font-black">Blueprint matrix</h2>{site.services.map((s,i)=><div key={s} className="mt-4 grid grid-cols-[80px_1fr_80px] rounded-xl border border-blue-300/20 p-4"><b>DWG-{i+1}</b><span>{s}</span><span>REV {i+2}</span></div>)}</div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
