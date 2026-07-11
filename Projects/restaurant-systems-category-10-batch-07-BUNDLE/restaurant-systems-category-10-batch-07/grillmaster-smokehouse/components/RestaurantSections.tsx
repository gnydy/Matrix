import Link from 'next/link';
import { kitchenTickets, orders, reservations, site } from '@/data/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-90" style={{ background: `linear-gradient(135deg, ${site.dark}, ${site.accent})` }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div className="text-white">
          <span className="rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] ring-1 ring-white/20">{site.segment}</span>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">{site.positioning}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">{site.useCase}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/order" className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950">{site.cta}</Link>
            <Link href="/dashboard" className="rounded-full border border-white/25 px-6 py-4 text-sm font-black text-white">View control room</Link>
          </div>
        </div>
        <div className="surface rounded-[2rem] p-5 shadow-soft">
          <div className="rounded-[1.6rem] bg-white p-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Live service</p>
                <p className="text-2xl font-black text-slate-950">Operations board</p>
              </div>
              <span className="rounded-full px-3 py-1 text-xs font-black text-white" style={{ background: 'var(--accent)' }}>Live mock</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {site.metrics.map((m) => <div key={m} className="rounded-3xl bg-slate-50 p-4"><p className="text-2xl font-black text-slate-950">{m.split(' ')[0]}</p><p className="mt-1 text-xs font-bold text-slate-500">{m.split(' ').slice(1).join(' ')}</p></div>)}
            </div>
            <div className="mt-5 rounded-3xl border border-slate-100 p-4">
              <p className="text-sm font-black text-slate-950">Next reservation</p>
              <div className="mt-3 space-y-2">
                {reservations.slice(0,3).map((r) => <div key={r.time} className="flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-sm"><span className="font-bold text-slate-700">{r.time} · {r.party}</span><span className="font-black text-slate-950">{r.table}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-black uppercase tracking-[0.25em]" style={{ color: 'var(--accent)' }}>Template concept</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">Built as a restaurant operating frontend, not a simple brochure.</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {site.features.map((feature) => <div key={feature} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"><div className="mb-6 h-12 w-12 rounded-2xl" style={{ background: 'var(--light)' }} /><h3 className="text-lg font-black text-slate-950">{feature}</h3><p className="mt-3 text-sm leading-6 text-slate-600">Designed for real conversion and operations demos with replaceable mock data.</p></div>)}
      </div>
    </section>
  );
}

export function MenuShowcase() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="text-sm font-black uppercase tracking-[0.25em] text-slate-400">Signature menu</p><h2 className="mt-3 text-4xl font-black text-slate-950">Menu cards ready for online ordering.</h2></div>
          <Link href="/menu" className="rounded-full px-6 py-4 text-sm font-black text-white" style={{ background: 'var(--accent)' }}>Open menu</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {site.menu.map((dish, i) => <div key={dish} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50"><div className="h-36" style={{ background: `linear-gradient(135deg, ${site.light}, white)` }} /><div className="p-5"><p className="text-lg font-black text-slate-950">{dish}</p><p className="mt-2 text-sm text-slate-600">Chef card #{i + 1} · editable item description.</p><p className="mt-5 text-2xl font-black" style={{ color: 'var(--accent)' }}>${(12 + i * 4).toFixed(0)}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}

export function OrdersTable() {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between"><h2 className="text-2xl font-black text-slate-950">Order queue</h2><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">Mock data</span></div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead><tr className="border-b border-slate-200 text-xs uppercase tracking-[0.18em] text-slate-400"><th className="py-3">Order</th><th>Customer</th><th>Type</th><th>Status</th><th>Value</th><th>ETA</th></tr></thead>
          <tbody>
            {orders.map((o) => <tr key={o.id} className="border-b border-slate-100"><td className="py-4 font-black text-slate-950">{o.id}</td><td className="font-bold text-slate-700">{o.customer}</td><td>{o.type}</td><td><span className="rounded-full px-3 py-1 text-xs font-black" style={{ background: 'var(--light)', color: 'var(--accent)' }}>{o.status}</span></td><td className="font-black">{o.value}</td><td>{o.eta}</td></tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ReservationsBoard() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {reservations.map((r) => <div key={r.time} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm"><p className="text-3xl font-black text-slate-950">{r.time}</p><p className="mt-2 text-sm font-bold text-slate-600">{r.party} · {r.table}</p><p className="mt-4 rounded-full px-3 py-2 text-xs font-black" style={{ background: 'var(--light)', color: 'var(--accent)' }}>{r.status}</p></div>)}
    </div>
  );
}

export function KitchenBoard() {
  return (
    <div className="grid gap-5 lg:grid-cols-4">
      {kitchenTickets.map((t) => <div key={t.station} className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">{t.station}</p><p className="mt-4 text-3xl font-black text-slate-950">{t.tickets}</p><p className="mt-2 text-sm font-bold text-slate-600">{t.item}</p><p className="mt-5 rounded-full px-3 py-2 text-xs font-black text-white" style={{ background: 'var(--accent)' }}>{t.load}</p></div>)}
    </div>
  );
}

export function ControlRoom() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-[2rem] p-8 text-white shadow-soft" style={{ background: `linear-gradient(135deg, ${site.dark}, ${site.accent})` }}>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/60">Control room</p>
          <h2 className="mt-4 text-4xl font-black">Front-office and back-office in one sellable template.</h2>
          <div className="mt-8 space-y-3">
            {site.modules.map((m) => <div key={m} className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-bold ring-1 ring-white/10">{m}</div>)}
          </div>
        </div>
        <OrdersTable />
      </div>
    </section>
  );
}
