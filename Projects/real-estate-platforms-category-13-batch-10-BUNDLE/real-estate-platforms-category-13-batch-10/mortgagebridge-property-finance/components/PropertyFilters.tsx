'use client';
import { useMemo, useState } from 'react';
import { site } from '@/data/site';
import { PropertyCard } from './PropertyCard';

export function PropertyFilters() {
  const [area, setArea] = useState('All');
  const [budget, setBudget] = useState(20000000);
  const filtered = useMemo(() => site.properties.filter(p => (area === 'All' || p.area === area) && p.price <= budget), [area, budget]);
  return <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div className="rounded-4xl border border-slate-200 bg-white p-5 shadow-soft">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-bold text-slate-700">Area
          <select value={area} onChange={e=>setArea(e.target.value)} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <option>All</option>{site.areas.map(a => <option key={a}>{a}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-slate-700 md:col-span-2">Max budget: EGP {budget.toLocaleString()}
          <input type="range" min="3000000" max="22000000" step="500000" value={budget} onChange={e=>setBudget(Number(e.target.value))} className="mt-4 w-full" />
        </label>
      </div>
    </div>
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {filtered.map(p => <PropertyCard key={p.slug} property={p} />)}
    </div>
  </section>;
}
