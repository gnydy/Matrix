import { Shell } from "@/components/Shell";
import { CalendarGrid } from "@/components/CalendarGrid";
import { site } from "@/data/site";

export default function CalendarPage() {
  return (
    <Shell eyebrow="Calendar and slots">
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-4xl font-black tracking-tight text-slate-950">Availability management for {site.bookingEntity.toLowerCase()} operations.</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">Slot grids, peak indicators, blocked times, and role visibility are represented as frontend-ready mock states.</p>
        </div>
        <CalendarGrid />
      </section>
    </Shell>
  );
}
