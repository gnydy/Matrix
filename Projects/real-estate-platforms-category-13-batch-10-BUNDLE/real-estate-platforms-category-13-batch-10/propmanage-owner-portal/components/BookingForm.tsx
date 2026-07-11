'use client';
import { useState } from 'react';
import { site } from '@/data/site';

export function BookingForm() {
  const [slot, setSlot] = useState('Tomorrow 12:00');
  return <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_420px]">
    <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-soft">
      <h2 className="text-3xl font-black text-slate-950">Book a viewing</h2>
      <p className="mt-2 text-slate-600">Choose a unit, select a slot, and send a qualified request to the sales team.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input className="rounded-2xl border border-slate-200 p-4" placeholder="Client name" />
        <input className="rounded-2xl border border-slate-200 p-4" placeholder="Phone / WhatsApp" />
        <select className="rounded-2xl border border-slate-200 p-4">{site.properties.map(p => <option key={p.slug}>{p.title}</option>)}</select>
        <select value={slot} onChange={e=>setSlot(e.target.value)} className="rounded-2xl border border-slate-200 p-4"><option>Tomorrow 12:00</option><option>Thursday 18:00</option><option>Saturday 10:30</option></select>
        <textarea className="rounded-2xl border border-slate-200 p-4 md:col-span-2" placeholder="Buyer requirements" rows={5} />
      </div>
      <button className="mt-5 rounded-2xl px-6 py-4 font-black text-white" style={{ background: site.accent }}>Send viewing request</button>
    </div>
    <aside className="rounded-4xl p-6 text-white shadow-soft" style={{ background: site.accent }}><p className="text-sm font-bold opacity-80">Selected slot</p><p className="mt-2 text-3xl font-black">{slot}</p><div className="mt-8 space-y-3">{site.steps.map(s => <p key={s} className="rounded-2xl bg-white/15 p-4 text-sm font-bold">{s}</p>)}</div></aside>
  </div>;
}
