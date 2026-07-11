import { Shell } from "@/components/Shell";
import { BookingPanel } from "@/components/BookingPanel";
import { RecordsTable } from "@/components/RecordsTable";
import { site } from "@/data/site";

export default function BookingPage() {
  return (
    <Shell eyebrow="Booking flow">
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-white bg-white p-8 shadow-soft">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Use case</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Book a {site.bookingEntity.toLowerCase()} with a clear conversion path.</h1>
            <p className="mt-5 text-base leading-8 text-slate-600">{site.useCase}</p>
            <div className="mt-6 grid gap-3">
              {site.features.map((feature) => (
                <div key={feature} className="rounded-2xl bg-slate-50 p-4 text-sm font-black text-slate-700">{feature}</div>
              ))}
            </div>
          </div>
          <BookingPanel />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-14">
        <RecordsTable />
      </section>
    </Shell>
  );
}
