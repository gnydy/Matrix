'use client';
import { useMemo, useState } from 'react';

export function MortgageCalculator() {
  const [price, setPrice] = useState(8500000);
  const [down, setDown] = useState(20);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(14);
  const monthly = useMemo(() => {
    const principal = price * (1 - down / 100);
    const r = rate / 100 / 12;
    const n = years * 12;
    return Math.round((principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  }, [price, down, years, rate]);
  return <div className="mx-auto max-w-5xl rounded-4xl border border-slate-200 bg-white p-6 shadow-soft">
    <div className="grid gap-5 md:grid-cols-4">
      {[['Property price', price, setPrice, 3000000, 25000000, 250000], ['Down payment %', down, setDown, 5, 50, 1], ['Years', years, setYears, 5, 30, 1], ['Interest %', rate, setRate, 6, 24, 0.5]].map(([label, value, setter, min, max, step]: any) => (
        <label key={label} className="text-sm font-bold text-slate-700">{label}<input className="mt-3 w-full" type="range" value={value} min={min} max={max} step={step} onChange={e=>setter(Number(e.target.value))}/><span className="mt-2 block rounded-2xl bg-slate-50 p-2 text-center">{Number(value).toLocaleString()}</span></label>
      ))}
    </div>
    <div className="mt-8 rounded-4xl bg-slate-950 p-8 text-white"><p className="text-sm font-bold text-slate-300">Estimated monthly payment</p><p className="mt-2 text-5xl font-black">EGP {monthly.toLocaleString()}</p><p className="mt-3 text-sm text-slate-400">Frontend mock calculation for portfolio presentation only.</p></div>
  </div>;
}
