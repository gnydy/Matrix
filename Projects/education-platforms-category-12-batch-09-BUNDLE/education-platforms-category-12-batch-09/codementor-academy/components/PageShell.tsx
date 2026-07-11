import Link from 'next/link';
import { site } from '@/data/site';

const nav = [
  ['Courses', '/courses'],
  ['Student', '/student-dashboard'],
  ['Teacher', '/teacher-dashboard'],
  ['Progress', '/progress'],
  ['Admin', '/admin']
];

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className={`min-h-screen bg-gradient-to-br ${site.theme.gradient} text-slate-100`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className={`grid h-11 w-11 place-items-center rounded-2xl ${site.theme.button} text-sm font-black text-white shadow-soft`}>{site.initials}</span>
          <span>
            <span className="block text-lg font-black tracking-tight">{site.name}</span>
            <span className="block text-xs text-slate-400">{site.tagline}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-300 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-4 py-2 hover:bg-white/10 hover:text-white">{label}</Link>
          ))}
        </nav>
        <Link href="/courses" className={`rounded-full ${site.theme.button} px-5 py-3 text-sm font-bold text-white shadow-soft`}>View courses</Link>
      </div>
      {children}
      <footer className="mx-auto mt-20 max-w-7xl border-t border-white/10 px-5 py-8 text-sm text-slate-400">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <p>{site.name} — frontend education platform template.</p>
          <p>{site.client} • {site.price}</p>
        </div>
      </footer>
    </main>
  );
}
