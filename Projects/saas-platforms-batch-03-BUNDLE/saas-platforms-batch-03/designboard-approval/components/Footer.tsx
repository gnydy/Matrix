import Link from 'next/link';
import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="mb-3 text-xl font-black text-white">{site.name}</div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">{site.description}</p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-300">Product</h3>
          <div className="grid gap-2 text-sm text-slate-400"><Link href="/dashboard">Dashboard</Link><Link href="/integrations">Integrations</Link><Link href="/security">Security</Link></div>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-300">Delivery</h3>
          <p className="text-sm leading-7 text-slate-400">Next.js + TypeScript + Tailwind. Built as a sellable frontend template with mock data and clean structure.</p>
        </div>
      </div>
    </footer>
  );
}
