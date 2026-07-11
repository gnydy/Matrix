import { Header, Footer } from '@/components/storefront';

export default function CheckoutPage() {
  const steps = ['Customer data','Delivery method','Payment mock','Review order'];
  return <main className="min-h-screen bg-[#07080f] text-white"><Header />
    <section className="mx-auto max-w-6xl px-5 py-12"><p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Checkout flow</p><h1 className="mt-3 text-5xl font-black">Conversion-focused checkout</h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">{steps.map((step, i) => <div key={step} className="flex gap-4 border-b border-white/10 py-5 last:border-0"><span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 font-black text-white">{i+1}</span><div><h2 className="font-black">{step}</h2><p className="mt-1 text-sm text-slate-300">Prepared as UI state for future backend integration.</p></div></div>)}</div>
        <form className="rounded-[2rem] border border-white/10 bg-white/5 p-6"><div className="grid gap-4 md:grid-cols-2"><input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3" placeholder="Full name"/><input className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3" placeholder="Phone"/><input className="md:col-span-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3" placeholder="Address"/><button className="md:col-span-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-4 font-black text-white">Place mock order</button></div></form>
      </div>
    </section><Footer /></main>;
}
