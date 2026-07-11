import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-white text-slate-950"><section className="px-6 py-8"><nav className="mx-auto flex max-w-7xl justify-between"><b className="text-3xl">{site.name}</b><span>Studio index</span></nav><div className="mx-auto mt-14 grid max-w-7xl gap-6 lg:grid-cols-12"><div className="rounded-[2rem] bg-fuchsia-600 p-8 text-white lg:col-span-7"><h1 className="text-6xl font-black leading-none">A corporate site for a studio that sells taste and process.</h1><p className="mt-6 text-lg text-white/80">{site.idea}</p></div><div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:col-span-5"><SectionBadge>Selected cases</SectionBadge>{site.caseStudies.map(c=><p key={c} className="mt-5 border-b border-white/10 pb-4 text-2xl font-black">{c}</p>)}</div>{site.services.map((s,i)=><div key={s} className={`rounded-[2rem] p-6 lg:col-span-3 ${i%2?'bg-slate-100':'bg-pink-100'}`}><b>{s}</b><p className="mt-12 text-sm text-slate-600">Visual system block.</p></div>)}</div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
