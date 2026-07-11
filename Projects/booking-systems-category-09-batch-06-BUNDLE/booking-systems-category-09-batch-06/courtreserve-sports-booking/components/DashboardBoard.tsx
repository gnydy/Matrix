import { site } from "@/data/site";

export function DashboardBoard() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2.5rem] border border-white bg-slate-950 p-6 text-white shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/50">Operations dashboard</p>
            <h3 className="mt-2 text-2xl font-black">Live booking control</h3>
          </div>
          <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-black">Mock UI</span>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {site.dashboardCards.map((card, index) => (
            <div key={card} className="rounded-3xl bg-white/10 p-5">
              <div className="h-24 rounded-2xl bg-gradient-to-br from-white/25 to-white/5" />
              <p className="mt-4 text-sm font-black">{card}</p>
              <p className="mt-2 text-xs leading-5 text-white/55">Chart placeholder, alerts, and operational reading #{index + 1}.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[2.5rem] border border-white bg-white p-6 shadow-soft">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-500">Role-based UI</p>
        <h3 className="mt-2 text-2xl font-black text-slate-950">Access model</h3>
        <div className="mt-6 space-y-3">
          {site.roles.map((role) => (
            <div key={role} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
              <div>
                <p className="text-sm font-black text-slate-950">{role}</p>
                <p className="text-xs font-semibold text-slate-500">Permissions, workflows, and dashboard states.</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-600">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
