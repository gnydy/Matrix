import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-sky-50 text-slate-950"><section className="mx-auto max-w-7xl px-6 py-8"><header className="flex items-center justify-between"><b className="text-3xl">{site.name}</b><button className="rounded-full bg-blue-600 px-5 py-3 text-white">Book appointment</button></header><div className="mt-14 grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><SectionBadge>Care access network</SectionBadge><h1 className="mt-8 text-6xl font-black leading-none">A clinic website that behaves like a patient journey system.</h1><p className="mt-6 text-lg leading-8 text-slate-600">{site.idea}</p></div><div className="rounded-[2rem] bg-white p-6 shadow-glow"><h2 className="text-2xl font-black">Triage selector</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{site.services.map((s,i)=><div key={s} className="rounded-3xl border border-blue-100 bg-blue-50 p-5"><b className="text-blue-700">0{i+1}</b><h3 className="mt-3 font-black">{s}</h3><p className="mt-2 text-sm text-slate-600">Patient-friendly intake block.</p></div>)}</div></div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
