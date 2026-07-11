import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-emerald-50 text-slate-950"><section className="mx-auto max-w-7xl px-6 py-8"><header className="flex justify-between"><b className="text-3xl">{site.name}</b><span>SLA operations</span></header><div className="mt-14 grid gap-8 lg:grid-cols-[420px_1fr]"><aside className="rounded-[2rem] bg-slate-950 p-6 text-white"><h2 className="text-2xl font-black">Work-order desk</h2>{['Open','Assigned','Resolved','Escalated'].map((x,i)=><div key={x} className="mt-4 rounded-2xl bg-white/10 p-4"><b>{x}</b><span className="float-right text-emerald-300">{18+i*7}</span></div>)}</aside><div><SectionBadge>Facility management</SectionBadge><h1 className="mt-8 text-6xl font-black leading-none">Maintenance and service contracts presented with operational proof.</h1><p className="mt-6 text-lg leading-8 text-slate-600">{site.idea}</p></div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
