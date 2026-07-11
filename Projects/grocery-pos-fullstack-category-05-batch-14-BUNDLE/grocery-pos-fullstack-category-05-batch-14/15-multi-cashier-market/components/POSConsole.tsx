'use client';

import { useMemo, useState } from 'react';
import { store } from '@/data/store';
import { money } from '@/lib/pos';

export function POSConsole() {
  const [query, setQuery] = useState('');
  const [cart, setCart] = useState<Record<string, number>>({});
  const products = useMemo(() => store.products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.barcode.includes(query)), [query]);
  const lines = store.products.filter((p) => cart[p.id]).map((p) => ({ ...p, qty: cart[p.id], total: p.price * cart[p.id] }));
  const subtotal = lines.reduce((sum, line) => sum + line.total, 0);
  const tax = Math.round(subtotal * 0.14);

  return (
    <section className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
      <div className="card">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div><span className="badge">Live Cashier</span><h2 className="mt-3 text-2xl font-black">Fast product lookup</h2></div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name or barcode..." className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-500" />
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <button key={product.id} onClick={() => setCart((c) => ({ ...c, [product.id]: (c[product.id] ?? 0) + 1 }))} className="rounded-3xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-1 hover:shadow-lg">
              <span className="text-xs font-bold text-slate-400">{product.category}</span>
              <strong className="mt-2 block text-lg">{product.name}</strong>
              <span className="mt-3 flex items-center justify-between text-sm"><b>{money(product.price)}</b><em className="not-italic text-slate-400">Stock {product.stock}</em></span>
            </button>
          ))}
        </div>
      </div>
      <aside className="card">
        <span className="badge">Receipt Mock</span>
        <h2 className="mt-3 text-2xl font-black">Current sale</h2>
        <div className="mt-6 space-y-3">
          {lines.length === 0 && <p className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-500">Add products to start a receipt.</p>}
          {lines.map((line) => (
            <div key={line.id} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 text-sm">
              <span><b>{line.name}</b><small className="block text-slate-400">Qty {line.qty}</small></span>
              <button onClick={() => setCart((c) => ({ ...c, [line.id]: Math.max((c[line.id] ?? 1) - 1, 0) }))} className="font-bold">{money(line.total)}</button>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-slate-200 pt-5 text-sm">
          <p className="flex justify-between"><span>Subtotal</span><b>{money(subtotal)}</b></p>
          <p className="mt-2 flex justify-between"><span>VAT Mock</span><b>{money(tax)}</b></p>
          <p className="mt-4 flex justify-between text-xl font-black"><span>Total</span><span>{money(subtotal + tax)}</span></p>
          <button className="btn-primary mt-5 w-full">Complete sale</button>
        </div>
      </aside>
    </section>
  );
}
