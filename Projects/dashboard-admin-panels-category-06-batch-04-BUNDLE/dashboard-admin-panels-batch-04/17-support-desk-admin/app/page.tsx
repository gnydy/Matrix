import { AdminShell } from "@/components/AdminShell";
import { MetricCard } from "@/components/MetricCard";
import { ChartPanel } from "@/components/ChartPanel";
import { DataTable } from "@/components/DataTable";
import { CommandBar } from "@/components/CommandBar";
import { dashboard } from "@/data/dashboard";

export default function HomePage() {
  return (
    <AdminShell title="Admin Overview" eyebrow={dashboard.desc}>
      <div className={`grid gap-6 ${dashboard.layout === "command" ? "lg:grid-cols-[1.2fr_.8fr]" : ""}`}>
        <div className="space-y-6">
          <CommandBar />
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {dashboard.metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
          </section>
          <DataTable />
        </div>
        <div className="space-y-6">
          <ChartPanel />
          <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Modules</p>
            <div className="mt-5 grid gap-3">
              {dashboard.modules.map((module) => <div key={module} className="rounded-2xl border border-slate-100 p-4 font-bold dark:border-white/10">{module}</div>)}
            </div>
          </section>
        </div>
      </div>
    </AdminShell>
  );
}
