import { POSConsole } from '@/components/POSConsole';
import { MetricCard } from '@/components/MetricCard';
import { store } from '@/data/store';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card">
          <span className="badge">{store.targetClient}</span>
          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">{store.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{store.useCase}</p>
          <p className="mt-3 text-sm font-bold text-slate-500">{store.arabicDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3"><a className="btn-primary" href="#pos">Open cashier</a><a className="btn-soft" href="/api/health">Test backend API</a></div>
        </div>
        <div className="card">
          <span className="badge">Layout Strategy</span>
          <h2 className="mt-4 text-2xl font-black">{store.layout}</h2>
          <p className="mt-3 text-slate-600">{store.layoutNote}</p>
          <div className="mt-6 grid gap-3">
            {store.backendRoutes.map((route) => <code key={route} className="rounded-2xl bg-slate-950 px-4 py-3 text-sm text-white">{route}</code>)}
          </div>
        </div>
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-4">
        {store.metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </section>
      <div id="pos" className="mt-6"><POSConsole /></div>
    </main>
  );
}
