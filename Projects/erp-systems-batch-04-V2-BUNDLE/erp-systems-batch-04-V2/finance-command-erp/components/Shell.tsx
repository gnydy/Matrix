import Link from 'next/link';
import { navItems, site } from '@/data/site';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-slate-200 bg-white/90 p-5 lg:block">
          <div className="mb-8 rounded-3xl bg-slate-950 p-5 text-white">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">ERP System</div>
            <div className="mt-3 text-2xl font-black leading-tight">{site.name}</div>
            <div className="mt-3 text-sm text-white/60">{site.industry}</div>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
                <span>{item}</span><span className="text-slate-300">›</span>
              </a>
            ))}
          </nav>
          <Link className="mt-8 block rounded-2xl bg-[var(--accent)] px-4 py-3 text-center text-sm font-black text-white shadow-lg" href="/dashboard">Open Dashboard</Link>
        </aside>
        <section>{children}</section>
      </div>
    </main>
  );
}
