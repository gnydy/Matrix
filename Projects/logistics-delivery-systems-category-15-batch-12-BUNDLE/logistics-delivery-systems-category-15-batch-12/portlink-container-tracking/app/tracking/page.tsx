import { Shell } from '@/components/Shell';
import { site } from '@/data/site';

export default function TrackingPage() {
  return (
    <Shell>
      <section className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="panel rounded-3xl p-6">
          <h2 className="text-3xl font-black tracking-tight">Shipment tracking</h2>
          <p className="mt-3 text-slate-500">Customer and support-team tracking interface with milestone history and delivery controls.</p>
          <div className="mt-6 rounded-3xl bg-slate-100 p-4">
            <label className="text-xs font-bold uppercase tracking-wide text-slate-500">Tracking number</label>
            <div className="mt-2 flex gap-2">
              <input defaultValue={site.orders[0].id} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2" />
              <button className="rounded-2xl px-5 font-semibold text-white" style={{ background: site.accent }}>Search</button>
            </div>
          </div>
        </div>
        <div className="panel rounded-3xl p-6">
          <h3 className="text-xl font-bold">Milestone timeline</h3>
          <div className="mt-6 space-y-4">
            {site.timeline.map((event, index) => (
              <div key={event.step} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-white" style={{ background: index < 3 ? site.accent : '#cbd5e1' }}>{index + 1}</div>
                <div>
                  <strong>{event.step}</strong>
                  <p className="mt-1 text-sm text-slate-500">{event.detail}</p>
                  <span className="mt-2 inline-block rounded-full bg-white px-3 py-1 text-xs text-slate-500 ring-1 ring-slate-200">{event.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
