import { site, dashboardRows, activity } from '@/data/site';

export function FeatureGrid() {
  return (
    <section id="product" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Product architecture</p><h2 className="mt-3 text-4xl font-black text-white">Built as a product, not a generic landing page.</h2></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {site.features.map((feature, index) => (
            <article key={feature} className="card-hover rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <span className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${site.accent} text-sm font-black text-slate-950`}>{index + 1}</span>
              <h3 className="text-xl font-black text-white">{feature}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Production-ready UI section with mock data, empty-state thinking, and scalable component structure.</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Workflow() {
  return (
    <section className="bg-slate-900 px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Workflow UX</p><h2 className="mt-3 text-4xl font-black text-white">A clear route from setup to measurable outcome.</h2><p className="mt-5 text-slate-400 leading-7">The flow is designed so a client understands what the SaaS does in seconds, then sees operational depth through dashboard screens.</p></div>
        <div className="grid gap-4 md:grid-cols-4">
          {site.workflow.map((step, index) => (
            <div key={step} className="rounded-3xl border border-white/10 bg-slate-950 p-5">
              <span className="text-3xl font-black text-white">0{index + 1}</span>
              <p className="mt-6 text-sm font-bold leading-6 text-slate-200">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DashboardPreview() {
  return (
    <section className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Dashboard preview</p><h2 className="mt-3 text-4xl font-black text-white">Control room with real SaaS signals.</h2></div><span className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Role-based UI concept</span></div>
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.18em] text-slate-500"><tr><th className="p-4">Workspace</th><th className="p-4">Status</th><th className="p-4">Owner</th><th className="p-4">Score</th><th className="p-4">Trend</th></tr></thead>
              <tbody>{dashboardRows.map(row => <tr key={row.name} className="border-t border-white/10"><td className="p-4 font-bold text-white">{row.name}</td><td className="p-4 text-slate-300">{row.status}</td><td className="p-4 text-slate-400">{row.owner}</td><td className="p-4 text-slate-300">{row.score}</td><td className="p-4 text-emerald-300">{row.trend}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="grid gap-4">
            {activity.map((item, index) => <div key={item} className="rounded-3xl border border-white/10 bg-slate-950 p-5"><p className="text-xs uppercase tracking-[0.22em] text-slate-500">Activity {index + 1}</p><p className="mt-2 text-sm leading-6 text-slate-300">{item}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingBlocks() {
  return (
    <section className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center"><p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Pricing</p><h2 className="mt-3 text-4xl font-black text-white">Plans built for selling the template commercially.</h2></div>
        <div className="grid gap-5 md:grid-cols-3">{site.plans.map((plan, index) => <div key={plan} className={`rounded-[2rem] border p-6 ${index === 1 ? 'border-white/30 bg-white/[0.07]' : 'border-white/10 bg-white/[0.03]'}`}><h3 className="text-2xl font-black text-white">{plan}</h3><p className="mt-3 text-sm leading-7 text-slate-400">Best for {index === 0 ? 'early validation and demos' : index === 1 ? 'real client delivery and customization' : 'enterprise packaging and internal systems'}.</p><div className="my-6 text-4xl font-black text-white">{site.price}</div><button className={`w-full rounded-2xl bg-gradient-to-r ${site.accent} px-5 py-3 font-black text-slate-950`}>Request customization</button></div>)}</div>
      </div>
    </section>
  );
}

export function IntegrationsCloud() {
  return (
    <section className="bg-slate-900 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Integrations</p><h2 className="mt-3 text-4xl font-black text-white">Integration-ready interface for modern SaaS sales pages.</h2></div>
        <div className="flex flex-wrap gap-3">{site.integrations.map((integration) => <span key={integration} className="rounded-2xl border border-white/10 bg-slate-950 px-5 py-4 text-sm font-bold text-slate-200">{integration}</span>)}</div>
      </div>
    </section>
  );
}

export function SecurityPanel() {
  return (
    <section className="bg-slate-950 px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {['Role-based access concept','Audit logs and activity history','Secure onboarding and session UX'].map((item) => <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7"><h3 className="text-xl font-black text-white">{item}</h3><p className="mt-3 text-sm leading-7 text-slate-400">Frontend section prepared for real implementation with auth, permissions, validation, and server-side policy enforcement.</p></div>)}
      </div>
    </section>
  );
}
