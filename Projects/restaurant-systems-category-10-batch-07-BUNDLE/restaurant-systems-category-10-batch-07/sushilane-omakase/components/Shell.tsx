import Link from 'next/link';
import { site } from '@/data/site';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen soft-grid">
      <nav className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl text-sm font-black text-white" style={{ background: 'var(--accent)' }}>R</span>
            <span>
              <span className="block text-sm font-black tracking-tight text-slate-950">{site.name}</span>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Restaurant System</span>
            </span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-950">{item.label}</Link>
            ))}
          </div>
          <Link href="/order" className="rounded-full px-5 py-3 text-sm font-black text-white shadow-soft" style={{ background: 'var(--accent)' }}>{site.cta}</Link>
        </div>
      </nav>
      {children}
    </main>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-xl font-black text-slate-950">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{site.useCase}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Target client</p>
          <p className="mt-3 text-sm font-semibold text-slate-700">{site.audience}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Sales CTA</p>
          <Link href="/reservations" className="mt-3 inline-flex rounded-full px-5 py-3 text-sm font-black text-white" style={{ background: 'var(--dark)' }}>Book / Order Demo</Link>
        </div>
      </div>
    </footer>
  );
}
