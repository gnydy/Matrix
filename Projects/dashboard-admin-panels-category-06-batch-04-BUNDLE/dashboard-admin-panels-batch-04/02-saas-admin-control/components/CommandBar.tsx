import { dashboard } from "@/data/dashboard";

export function CommandBar() {
  return (
    <section className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1fr_auto] dark:border-white/10 dark:bg-white/5">
      <div>
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Command search</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {dashboard.modules.slice(0, 4).map((module) => <span key={module} className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-black text-[var(--accent)]">{module}</span>)}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black dark:border-white/10">Bulk edit</button>
        <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white dark:bg-white dark:text-slate-950">Automate</button>
      </div>
    </section>
  );
}
