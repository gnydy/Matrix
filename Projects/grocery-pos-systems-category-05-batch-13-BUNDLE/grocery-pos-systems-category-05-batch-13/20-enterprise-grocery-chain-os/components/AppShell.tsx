import Link from 'next/link';
import { site } from '@/data/site';

const nav = [
  ['POS', '/'],
  ['Products', '/products'],
  ['Sales', '/sales'],
  ['Inventory', '/inventory'],
  ['Shifts', '/shifts'],
  ['Reports', '/reports'],
  ['Settings', '/settings'],
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-slate-200 bg-white p-5 lg:block">
        <div className="rounded-3xl bg-slate-950 p-5 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Grocery POS</p>
          <h1 className="mt-3 text-2xl font-black leading-tight">{site.name}</h1>
          <p className="mt-3 text-sm text-slate-300">{site.scale}</p>
        </div>
        <nav className="mt-6 space-y-2">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
              {label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Target client</p>
          <p className="mt-2 text-sm font-semibold">{site.audience}</p>
        </div>
      </aside>
      <main className="lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Live cashier mock</p>
              <h2 className="text-xl font-black">{site.positioning}</h2>
            </div>
            <div className="hidden rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold md:block">Risk: {site.risk}</div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl p-5">{children}</div>
      </main>
    </div>
  );
}
