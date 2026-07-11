import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-stone-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><span>Investor property desk</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]"><div><h1 className="text-6xl font-black leading-none">Real estate credibility built around assets, not slogans.</h1><p className="mt-6 text-lg leading-8 text-stone-300">{site.idea}</p></div><div className="rounded-[2rem] bg-amber-400 p-6 text-stone-950"><h2 className="text-2xl font-black">Map + listings mock</h2>{['North Residence','Capital Offices','West Villas'].map((x,i)=><div key={x} className="mt-4 rounded-2xl bg-white p-4"><b>{x}</b><span className="float-right">{i+8}% ROI</span></div>)}</div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{site.stats.map((item) => <MetricCard key={item[0]} value={item[0]} label={item[1]} note="Commercial proof block for portfolio presentation." />)}</div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
