import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-slate-100 text-slate-950"><section className="grid min-h-screen lg:grid-cols-[1.1fr_.9fr]"><div className="p-8 lg:p-16"><SectionBadge>Logistics tower</SectionBadge><h1 className="mt-8 text-6xl font-black leading-none">Every shipment visible before the client asks.</h1><p className="mt-6 text-xl leading-9 text-slate-600">{site.idea}</p><div className="mt-10 grid gap-4 md:grid-cols-2">{site.services.map((s)=><div key={s} className="rounded-3xl bg-white p-6 shadow-sm"><b>{s}</b><p className="mt-2 text-sm text-slate-500">Operational module preview.</p></div>)}</div></div><div className="bg-slate-950 p-8 text-white lg:p-16"><h2 className="text-3xl font-black">Route board</h2>{['Cairo → Alexandria','Warehouse A → Retailers','Port → Factory','Same-day lane'].map((x,i)=><div key={x} className="mt-5 rounded-3xl bg-white/10 p-5"><span className="text-sky-300">TRK-{i+104}</span><h3 className="mt-2 text-2xl font-bold">{x}</h3><div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-sky-400" style={{width:`${70+i*7}%`}} /></div></div>)}</div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
