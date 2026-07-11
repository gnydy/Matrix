import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() {
  return <main className="min-h-screen bg-black text-emerald-50">
    <section className="mx-auto max-w-7xl px-6 py-10"><div className="flex items-center justify-between"><b className="font-mono text-2xl">{site.name}</b><span className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-black">SOC ONLINE</span></div><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_420px]"><div><SectionBadge>Threat-resilient corporate site</SectionBadge><h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">Security services presented like a live defense platform.</h1><p className="mt-6 text-lg leading-8 text-emerald-100/70">{site.client}</p></div><div className="rounded-[2rem] border border-emerald-400/30 bg-emerald-400/10 p-6 font-mono"><p>threat.feed/live</p>{['Endpoint anomaly','Credential risk','Cloud exposure','Vendor access'].map((x,i)=><div key={x} className="mt-4 rounded-xl bg-black/60 p-4"><span className="text-emerald-300">0{i+1}</span> {x}<b className="float-right">blocked</b></div>)}</div></div><div className="mt-10 grid gap-5 md:grid-cols-4">{site.services.map((s)=><div key={s} className="rounded-3xl border border-emerald-400/20 p-5"><b>{s}</b><p className="mt-3 text-sm text-emerald-100/60">Trust-building service card.</p></div>)}</div></section><Footer />
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
