import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() { return <main className="bg-slate-100 text-slate-950"><section className="mx-auto max-w-7xl px-6 py-10"><header className="flex items-center justify-between border-b border-slate-300 pb-6"><b className="text-3xl">{site.name}</b><span>Corporate legal counsel</span></header><div className="mt-12 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><h1 className="text-6xl font-black leading-none">A law firm website structured like a risk intake system.</h1><p className="mt-6 text-lg leading-8 text-slate-600">{site.idea}</p></div><div className="rounded-[2rem] bg-white p-6 shadow-sm"><h2 className="text-2xl font-black">Matter workflow</h2>{['Intake','Document review','Legal position','Action plan'].map((x,i)=><div key={x} className="mt-4 flex items-center gap-4 rounded-2xl border border-slate-200 p-4"><b>0{i+1}</b><span>{x}</span><span className="ml-auto text-slate-400">controlled</span></div>)}</div></div></section><Footer /></main>; }

function Footer() {
  return <footer className="border-t border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p>© 2026 {site.name}. Corporate template built for MatrixAll portfolio.</p>
      <div className="flex flex-wrap gap-4"><span>Security</span><span>Privacy</span><span>Support</span><span>Get a Quote</span></div>
    </div>
  </footer>;
}
