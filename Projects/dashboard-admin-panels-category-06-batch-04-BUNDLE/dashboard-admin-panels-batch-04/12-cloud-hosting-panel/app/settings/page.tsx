import { AdminShell } from "@/components/AdminShell";
import { DataTable } from "@/components/DataTable";
import { ChartPanel } from "@/components/ChartPanel";
import { dashboard } from "@/data/dashboard";

export default function SettingsControl() {
  return (
    <AdminShell title="Settings" eyebrow="System preferences, admin options and configuration screens.">
      <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Settings</p>
          <h3 className="mt-3 text-3xl font-black">Control layer for {dashboard.industry}</h3>
          <p className="mt-4 leading-7 opacity-70">This screen is a frontend mock designed to show how a real admin product can manage data, permissions, empty states, loading states and operational decisions.</p>
          <div className="mt-6 grid gap-3">
            {dashboard.modules.slice(0, 5).map((item) => <div key={item} className="rounded-2xl bg-[var(--soft)] p-4 font-black text-[var(--accent)]">{item}</div>)}
          </div>
        </section>
        <div className="space-y-6">
          <ChartPanel />
          <DataTable />
        </div>
      </div>
    </AdminShell>
  );
}
