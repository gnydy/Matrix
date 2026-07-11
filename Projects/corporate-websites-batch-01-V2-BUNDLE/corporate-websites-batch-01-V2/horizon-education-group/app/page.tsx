import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-orange-50 text-slate-950"><section className="mx-auto max-w-7xl px-6 py-8"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><button className="rounded-full bg-slate-950 px-5 py-3 text-white">Start admission</button></header><div className="mt-14"><SectionBadge>Education group</SectionBadge><h1 className="mt-8 max-w-5xl text-6xl font-black leading-none">Programs, campuses and outcomes in one decision-friendly interface.</h1></div><div className="mt-10 grid gap-6 lg:grid-cols-[360px_1fr]"><aside className="rounded-[2rem] bg-white p-6 shadow-sm"><h2 className="text-2xl font-black">Program finder</h2>{site.services.map(s=><button key={s} className="mt-4 block w-full rounded-2xl bg-orange-100 p-4 text-left font-bold">{s}</button>)}</aside><div className="grid gap-5 md:grid-cols-3">{site.stats.map((item) => <MetricCard key={item[0]} value={item[0]} label={item[1]} note="Commercial proof block for portfolio presentation." />)}</div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
