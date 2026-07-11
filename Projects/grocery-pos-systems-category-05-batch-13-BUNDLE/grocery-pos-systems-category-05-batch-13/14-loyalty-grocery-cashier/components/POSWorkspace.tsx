import { site } from '@/data/site';
import { StatCard } from './StatCard';

export function POSWorkspace() {
  const subtotal = site.cart.reduce((sum, item) => sum + Number(item.total.replace(/[^0-9.]/g, '')), 0);
  const tax = Math.round(subtotal * 0.14);
  const total = subtotal + tax;

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {site.metrics.map((m) => <StatCard key={m.label} {...m} />)}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Cashier terminal</p>
              <h3 className="mt-2 text-3xl font-black">Barcode, search, quick-sale grid</h3>
            </div>
            <button className={`rounded-2xl bg-${site.primary} px-5 py-3 text-sm font-black text-white shadow-sm`}>New sale</button>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
            <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none ring-slate-300 focus:ring-4" placeholder="Scan barcode or search product..." />
            <button className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-black">Hold basket</button>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.products.slice(0, 9).map((product) => (
              <button key={product.sku} className="group rounded-3xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-slate-500">{product.sku} · {product.category}</p>
                    <p className="mt-2 text-base font-black">{product.name}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-700">{product.price}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>Stock {product.stock}</span>
                  <span>{product.velocity}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Receipt</p>
              <h3 className="mt-2 text-2xl font-black">Current basket</h3>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black">#{site.orders[0].id}</span>
          </div>
          <div className="receipt-paper mt-5 rounded-3xl border border-dashed border-slate-300 p-4">
            {site.cart.map((item) => (
              <div key={item.name} className="flex items-center justify-between border-b border-slate-200 py-3 text-sm">
                <div>
                  <p className="font-black">{item.name}</p>
                  <p className="text-slate-500">Qty {item.qty}</p>
                </div>
                <p className="font-black">{item.total}</p>
              </div>
            ))}
            <div className="space-y-2 py-4 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><b>EGP {subtotal}</b></div>
              <div className="flex justify-between"><span>Tax mock</span><b>EGP {tax}</b></div>
              <div className="flex justify-between text-xl font-black"><span>Total</span><span>EGP {total}</span></div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {['Cash','Card','Wallet','COD'].map((method) => (
              <button key={method} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-black transition hover:bg-slate-950 hover:text-white">{method}</button>
            ))}
          </div>
          <button className={`mt-3 w-full rounded-2xl bg-${site.primary} px-5 py-4 text-sm font-black text-white`}>Complete payment</button>
        </div>
      </section>
    </div>
  );
}
