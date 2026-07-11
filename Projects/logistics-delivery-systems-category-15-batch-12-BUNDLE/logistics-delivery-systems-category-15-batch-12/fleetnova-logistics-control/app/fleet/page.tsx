import { Shell } from '@/components/Shell';
import { StatusPill } from '@/components/Cards';
import { site } from '@/data/site';

export default function FleetPage() {
  return (
    <Shell>
      <section className="grid gap-5 lg:grid-cols-5">
        {site.drivers.map((driver) => (
          <article key={driver.name} className="panel rounded-3xl p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-white" style={{ background: site.accent }}>{driver.name.split(' ').map(p => p[0]).join('')}</div>
            <h3 className="mt-4 text-lg font-bold">{driver.name}</h3>
            <p className="text-sm text-slate-500">{driver.vehicle} • {driver.zone}</p>
            <div className="mt-4 flex items-center justify-between"><span className="text-sm text-slate-500">Score</span><strong>{driver.score}</strong></div>
            <div className="mt-3"><StatusPill value={driver.status} /></div>
          </article>
        ))}
      </section>
    </Shell>
  );
}
