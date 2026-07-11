import { Shell } from "@/components/Shell";
import { SectionTitle } from "@/components/SectionTitle";
import { StatCard } from "@/components/StatCard";
import { BookingPanel } from "@/components/BookingPanel";
import { DashboardBoard } from "@/components/DashboardBoard";
import { RecordsTable } from "@/components/RecordsTable";
import { site } from "@/data/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <Shell eyebrow={site.domain}>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-slate-500 shadow-sm">{site.tone}</p>
          <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-7xl">{site.name}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600">{site.positioning}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/booking" className={`rounded-full bg-gradient-to-r ${site.accent} px-7 py-4 text-center text-sm font-black text-white shadow-soft`}>Start booking flow</Link>
            <Link href="/dashboard" className="rounded-full border border-slate-200 bg-white px-7 py-4 text-center text-sm font-black text-slate-950">View control room</Link>
          </div>
        </div>
        <div className="rounded-[2.75rem] border border-white bg-white/75 p-5 shadow-soft">
          <div className={`rounded-[2rem] bg-gradient-to-br ${site.accent} p-6 text-white`}>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/70">Live booking preview</p>
            <h2 className="mt-3 text-3xl font-black">{site.bookingEntity}</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">{site.useCase}</p>
            <div className="mt-7 grid gap-3">
              {site.steps.map((step) => (
                <div key={step} className="rounded-2xl bg-white/15 p-4 text-sm font-bold">{step}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-14 md:grid-cols-4">
        {site.statLabels.map((label, index) => (
          <StatCard key={label} label={label} value={site.stats[index]} detail={`Operational metric for ${site.bookingEntity.toLowerCase()} performance.`} />
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <SectionTitle eyebrow="Conversion architecture" title="A booking system that feels complete before backend starts." text={site.visual} />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.features.map((feature) => (
            <div key={feature} className="rounded-[2rem] border border-white bg-white/80 p-6 shadow-sm">
              <p className="text-lg font-black text-slate-950">{feature}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">Reusable UI block with mock data, states, and clean responsive spacing.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <BookingPanel />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <DashboardBoard />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">
        <RecordsTable />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-white/50">Portfolio-ready template</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight">Sell it as a frontend booking product, then upgrade it to real backend when requested.</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/65">{site.target}. Use it for demos, client pitching, and custom implementation offers.</p>
        </div>
      </section>
    </Shell>
  );
}
