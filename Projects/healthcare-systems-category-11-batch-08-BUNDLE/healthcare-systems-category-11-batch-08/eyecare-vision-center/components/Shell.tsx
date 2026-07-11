import Link from 'next/link';
import { site } from '@/data/site';

const nav = [
  ['Overview', '/'],
  ['Appointments', '/appointments'],
  ['Patients', '/patients'],
  ['Reports', '/reports'],
  ['Departments', '/departments'],
  ['Admin', '/admin']
];

export function Shell({ children, title, eyebrow }: { children: React.ReactNode; title: string; eyebrow?: string }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <aside className="fixed left-0 top-0 hidden h-full w-72 border-r border-slate-200 bg-white/95 p-6 lg:block">
        <div className={`rounded-3xl bg-gradient-to-br ${site.gradient} p-5 text-white shadow-soft`}>
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">Healthcare UI</p>
          <h1 className="mt-3 text-2xl font-black leading-tight">{site.templateName}</h1>
          <p className="mt-3 text-sm text-white/75">{site.sector}</p>
        </div>
        <nav className="mt-8 space-y-2">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-2xl px-4 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950">
              {label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">Compliance note</p>
          <p className="mt-2 text-xs leading-5 text-slate-500">Mock frontend only. No real patient data, clinical decisions, or medical backend.</p>
        </div>
      </aside>
      <section className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 px-5 py-4 backdrop-blur md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-400">{eyebrow ?? site.vibe}</p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 md:text-3xl">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className={`rounded-full px-4 py-2 text-xs font-black ring-1 ${site.chip}`}>Role: Admin</span>
              <span className="rounded-full bg-white px-4 py-2 text-xs font-black text-slate-600 ring-1 ring-slate-200">Live mock data</span>
              <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white">Request customization</span>
            </div>
          </div>
        </header>
        <div className="p-5 md:p-8">{children}</div>
      </section>
    </main>
  );
}
