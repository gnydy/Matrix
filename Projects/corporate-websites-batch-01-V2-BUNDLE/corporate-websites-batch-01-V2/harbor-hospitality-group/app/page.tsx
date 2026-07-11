import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-blue-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><button className="rounded-full bg-amber-400 px-5 py-3 font-bold text-blue-950">Explore properties</button></header><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1fr]"><div><h1 className="text-6xl font-black leading-none">Hospitality group website built around guest flow and property proof.</h1><p className="mt-6 text-lg text-blue-100/80">{site.idea}</p></div><div className="grid gap-4">{['Arrival','Stay','Events','Loyalty'].map((x,i)=><div key={x} className="rounded-3xl bg-white/10 p-5"><b className="text-amber-300">0{i+1}</b><h3 className="mt-2 text-2xl font-bold">{x}</h3></div>)}</div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
