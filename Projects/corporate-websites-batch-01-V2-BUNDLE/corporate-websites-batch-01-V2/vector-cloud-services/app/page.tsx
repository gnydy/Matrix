import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-slate-950 text-white"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><span className="text-cyan-300">Status: operational</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[1fr_480px]"><div><h1 className="text-6xl font-black leading-none">Cloud services website with uptime proof and developer-grade buying paths.</h1><p className="mt-6 text-lg leading-8 text-slate-300">{site.idea}</p><div className="mt-8 flex flex-wrap gap-3">{site.services.map(s=><span key={s} className="rounded-full border border-cyan-300/30 px-4 py-2 text-cyan-100">{s}</span>)}</div></div><div className="rounded-[2rem] bg-white p-6 text-slate-950"><h2 className="text-2xl font-black">Region status</h2>{['eu-west','me-central','us-east','asia-edge'].map((r,i)=><div key={r} className="mt-4 rounded-2xl bg-slate-100 p-4"><b>{r}</b><span className="float-right text-emerald-600">{99.98-i/100}%</span></div>)}</div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
