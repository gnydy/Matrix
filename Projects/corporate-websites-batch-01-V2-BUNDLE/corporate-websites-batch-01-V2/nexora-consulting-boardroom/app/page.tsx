import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() {
  return <main className="bg-[#f7f1e8] text-slate-950">
    <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8"><b className="text-3xl">{site.name}</b><button className="rounded-full bg-slate-950 px-5 py-3 text-white">Request board memo</button></header>
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-16 lg:grid-cols-[1.1fr_.9fr]"><div><SectionBadge>Executive advisory</SectionBadge><h1 className="mt-8 text-6xl font-black leading-none md:text-8xl">Board-level consulting for decisions that cannot drift.</h1><p className="mt-8 max-w-2xl text-xl leading-9 text-slate-700">{site.idea}</p></div><article className="rounded-[2rem] border border-slate-300 bg-white p-8 shadow-glow"><p className="text-sm uppercase tracking-[.3em] text-slate-500">Board note</p><h2 className="mt-5 text-3xl font-black">90-day operating model reset</h2><div className="mt-8 grid gap-4">{site.services.map((s)=><div key={s} className="border-b border-slate-200 pb-4"><b>{s}</b><p className="text-sm text-slate-600">Structured advisory lane with measurable executive outputs.</p></div>)}</div></article></section>
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
