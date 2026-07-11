import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-neutral-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><span>Investor relations</span></header><div className="mt-14 rounded-[2rem] bg-gradient-to-br from-yellow-500 to-neutral-800 p-10"><h1 className="max-w-5xl text-6xl font-black leading-none">Portfolio, governance and sector thesis in one holding-company interface.</h1><p className="mt-6 max-w-2xl text-lg text-white/80">{site.idea}</p></div><div className="mt-8 grid gap-5 md:grid-cols-3">{site.stats.map((item) => <MetricCard key={item[0]} value={item[0]} label={item[1]} note="Commercial proof block for portfolio presentation." />)}</div><div className="mt-8 grid gap-4 md:grid-cols-4">{site.services.map(s=><div key={s} className="rounded-3xl bg-white/10 p-5"><b>{s}</b></div>)}</div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
