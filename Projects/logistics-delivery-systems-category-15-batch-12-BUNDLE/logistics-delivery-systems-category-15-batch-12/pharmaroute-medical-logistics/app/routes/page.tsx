import { Shell } from '@/components/Shell';
import { site } from '@/data/site';

export default function RoutesPage() {
  return (
    <Shell>
      <section className="space-y-6">
        <div className="panel rounded-3xl p-6">
          <h2 className="text-3xl font-black tracking-tight">Route planning board</h2>
          <p className="mt-3 text-slate-500">Dispatchers can compare stops, distance, risk, and route health before assigning capacity.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {site.routes.map((route) => (
            <div key={route.name} className="panel rounded-3xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-xl font-bold">{route.name}</h3><p className="mt-1 text-sm text-slate-500">{route.distance} total distance</p></div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">{route.health}</span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-slate-50 p-4"><strong className="block text-2xl">{route.stops}</strong><span className="text-xs text-slate-500">Stops</span></div>
                <div className="rounded-2xl bg-slate-50 p-4"><strong className="block text-2xl">{route.distance}</strong><span className="text-xs text-slate-500">Distance</span></div>
                <div className="rounded-2xl bg-slate-50 p-4"><strong className="block text-2xl">94%</strong><span className="text-xs text-slate-500">Capacity</span></div>
              </div>
              <button className="mt-6 w-full rounded-2xl px-4 py-3 font-semibold text-white" style={{ background: site.accent }}>Assign route</button>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
