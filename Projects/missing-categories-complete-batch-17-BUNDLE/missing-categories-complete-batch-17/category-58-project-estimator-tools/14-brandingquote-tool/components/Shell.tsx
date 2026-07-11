import Link from 'next/link';
import { site } from '@/data/site';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen gradient-surface">
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-72 border-r border-slate-200 bg-white/90 p-6 backdrop-blur lg:block">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-500">Category {site.categoryNumber}</div>
          <div className="mt-2 text-2xl font-black text-slate-950">{site.templateName}</div>
          <div className="mt-2 text-sm text-slate-500">{site.visualPattern}</div>
        </div>
        <nav className="space-y-2">
          <Link className="block rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white" href="/">Overview</Link>
          {site.modules.map((m) => <Link key={m.href} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100" href={m.href}>{m.label}</Link>)}
        </nav>
        <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-slate-100 p-4 text-sm text-slate-600">
          Backend mock active: <span className="font-bold text-slate-950">/api/health</span>
        </div>
      </aside>
      <main className="lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 px-5 py-4 backdrop-blur lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.28em] text-slate-500">{site.categoryName}</div>
              <div className="text-lg font-black text-slate-950">{site.positioning}</div>
            </div>
            <div className="flex gap-2">
              {site.roles.slice(0,3).map((role) => <span className="status-pill" key={role}>{role}</span>)}
            </div>
          </div>
        </header>
        <div className="p-5 lg:p-10">{children}</div>
      </main>
    </div>
  );
}
