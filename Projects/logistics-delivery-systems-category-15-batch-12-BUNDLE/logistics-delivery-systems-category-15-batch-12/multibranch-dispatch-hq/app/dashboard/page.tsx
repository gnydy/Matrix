import { Shell } from '@/components/Shell';
import { MetricCards, OrderTable } from '@/components/Cards';
import { site } from '@/data/site';

export default function DashboardPage() {
  return (
    <Shell>
      <div className="space-y-8">
        <MetricCards />
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="panel rounded-3xl p-6 lg:col-span-2">
            <h2 className="text-2xl font-black">Operations control room</h2>
            <p className="mt-2 text-slate-500">Role-based dashboard concept for managers, dispatchers, finance, and support.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Dispatcher view', 'Manager view', 'Support view', 'Finance view'].map((role) => (
                <div key={role} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <strong>{role}</strong>
                  <p className="mt-1 text-sm text-slate-500">Custom widgets, permissions, and operational priorities for this role.</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panel rounded-3xl p-6">
            <h3 className="text-xl font-bold">System states</h3>
            <div className="mt-5 space-y-3">
              {['Loading shipments', 'Empty route result', 'Failed delivery error', 'New exception notification'].map((state, index) => (
                <div key={state} className="rounded-2xl bg-slate-50 p-4">
                  <span className="text-xs font-semibold" style={{ color: site.accent }}>STATE 0{index + 1}</span>
                  <p className="mt-1 text-sm text-slate-600">{state}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <OrderTable />
      </div>
    </Shell>
  );
}
