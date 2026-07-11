import { Shell } from "@/components/Shell";
import { DashboardBoard } from "@/components/DashboardBoard";
import { StatCard } from "@/components/StatCard";
import { site } from "@/data/site";

export default function DashboardPage() {
  return (
    <Shell eyebrow="Control room">
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-5 pb-8 md:grid-cols-4">
          {site.statLabels.map((label, index) => (
            <StatCard key={label} label={label} value={site.stats[index]} detail="Admin metric placeholder with realistic business reading." />
          ))}
        </div>
        <DashboardBoard />
      </section>
    </Shell>
  );
}
