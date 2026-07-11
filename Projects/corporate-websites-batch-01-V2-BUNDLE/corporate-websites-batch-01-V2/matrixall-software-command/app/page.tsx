import { site } from "../data/site";
import { MetricCard } from "../components/MetricCard";
import { SectionBadge } from "../components/SectionBadge";

export default function Page() {
  return <main className="min-h-screen bg-slate-950 text-white">
    <section className="grid min-h-screen lg:grid-cols-[280px_1fr]">
      <aside className="border-r border-white/10 bg-slate-900 p-6">
        <div className="text-2xl font-black">{site.name}</div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{site.idea}</p>
        <nav className="mt-10 grid gap-3 text-sm text-slate-300"><span>Command</span><span>Delivery pods</span><span>AI automation</span><span>Client desk</span></nav>
      </aside>
      <div className="p-6 lg:p-10">
        <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-8 shadow-glow">
          <SectionBadge>Corporate operating system</SectionBadge>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-7xl">Software company website shaped like a live delivery control room.</h1>
          <div className="mt-8 flex flex-wrap gap-3">{site.services.map((item) => <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85">{item}</span>)}</div>
        </div>
        <section className="mt-8 grid gap-5 md:grid-cols-3">{site.stats.map((item) => <MetricCard key={item[0]} value={item[0]} label={item[1]} note="Commercial proof block for portfolio presentation." />)}</section>
        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]"><div className="rounded-3xl border border-white/10 bg-white/10 p-6"><h2 className="text-2xl font-bold">Delivery pipeline</h2><div className="mt-6 grid gap-4">{['Discovery','Architecture','Build','QA','Launch'].map((x,i)=><div key={x} className="flex items-center gap-4 rounded-2xl bg-slate-950/60 p-4"><b className="text-cyan-300">0{i+1}</b><span>{x}</span><span className="ml-auto text-sm text-slate-400">ready</span></div>)}</div></div><div className="rounded-3xl bg-white p-6 text-slate-950"><h3 className="text-xl font-black">Client fit</h3><p className="mt-3 leading-7 text-slate-600">{site.client}</p><button className="mt-6 w-full rounded-2xl bg-slate-950 px-5 py-4 font-bold text-white">Book software audit</button></div></section>
      </div>
    </section><Footer />
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
