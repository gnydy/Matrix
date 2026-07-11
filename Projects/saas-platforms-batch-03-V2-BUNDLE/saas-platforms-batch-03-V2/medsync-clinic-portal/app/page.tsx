import Link from "next/link";
import { Badge, MetricCard, PrimaryLink, SecondaryLink, SectionTitle, MiniNav } from "@/components/Ui";
import { template, metrics, highlights, activity, rows } from "@/data/mock";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-teal-50">
      <section className="px-6 py-8"><MiniNav links={["Home", "Pricing", "Dashboard", "Auth"]} />
        <div className="mx-auto mt-12 grid max-w-7xl gap-8 md:grid-cols-[430px_1fr]"><div><Badge>{template.archetype}</Badge><h1 className="mt-6 text-5xl font-semibold">{template.name}</h1><p className="mt-6 text-lg text-slate-600">{template.hero}</p><div className="mt-8"><PrimaryLink>{template.cta}</PrimaryLink></div></div><div className="rounded-[2rem] bg-white p-6 shadow-soft"><div className="grid gap-4 md:grid-cols-2">{rows.map((r,i) => <div key={r.name} className="rounded-3xl border border-teal-100 p-5"><div className="flex items-center justify-between"><b>Patient {i+1}</b><span className="rounded-full bg-teal-100 px-3 py-1 text-xs">{r.state}</span></div><p className="mt-6 text-3xl font-semibold">Room {i+2}</p><p className="mt-2 text-sm text-slate-500">Doctor: {r.owner}</p></div>)}</div></div></div>
      </section>
      <section className="px-6 py-24">
        <SectionTitle kicker="Product depth" title="Built to feel like real SaaS, not a flat landing page" text="The template includes selling sections, operational interface previews, mock data, dashboard states, pricing, onboarding, and conversion-focused calls to action." />
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">✓</div>
              <h3 className="font-semibold text-slate-950">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">A production-looking module prepared for demos, portfolio cards, and client customization.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[2.5rem] bg-slate-950 p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <Badge>Dashboard mock</Badge>
            <h2 className="mt-5 text-3xl font-semibold md:text-5xl">Control room included for portfolio-grade proof.</h2>
            <p className="mt-5 text-slate-300">Clients buy confidence. This template shows how the SaaS would operate after login, not only how the marketing page looks.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryLink href="/dashboard">View dashboard</PrimaryLink>
              <SecondaryLink href="/pricing">View pricing</SecondaryLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-semibold">Operational activity</span>
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200">Live mock</span>
            </div>
            <div className="mt-5 space-y-3">
              {activity.map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-2xl bg-white/10 p-4">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-slate-300">{item.time}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Go to market</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-950">Positioned for paid template sales and client customization.</h2>
              <p className="mt-4 text-slate-600">This layout can be sold as a standalone SaaS template or used as a proof-of-capability page in the MatrixAll template marketplace.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {rows.map((row) => (
                <div key={row.name} className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-950">{row.name}</span>
                    <span className="text-sm text-slate-500">{row.score}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">Owner: {row.owner}</p>
                  <p className="mt-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{row.state}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
