import { Shell } from '@/components/Shell';
import { MetricCards, OrderTable } from '@/components/Cards';
import { site } from '@/data/site';

export default function HomePage() {
  return (
    <Shell>
      <div className="space-y-10">
        <MetricCards />
        <section className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="panel rounded-3xl p-6">
            <p className="text-sm font-semibold" style={{ color: site.accent }}>Business positioning</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight">Designed for {site.client}</h2>
            <p className="mt-4 leading-7 text-slate-600">{site.positioning}</p>
            <div className="mt-6 grid gap-3">
              {site.modules.map((module) => (
                <div key={module.title} className="rounded-2xl bg-slate-50 p-4">
                  <strong>{module.title}</strong>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panel rounded-3xl p-6">
            <h2 className="text-2xl font-black tracking-tight">Template capability map</h2>
            <p className="mt-2 text-sm text-slate-500">A frontend template that can be connected later to shipments, routes, drivers, and billing APIs.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {site.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl text-white" style={{ background: site.accent }}>✓</span>
                  <p className="text-sm leading-6 text-slate-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <OrderTable />
      </div>
    </Shell>
  );
}
