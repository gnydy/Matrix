import Link from 'next/link';
import { site } from '@/data/site';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${site.accent} shadow-lg shadow-cyan-500/10`} />
          <span>
            <span className="block text-sm font-black tracking-tight text-white">{site.name}</span>
            <span className="block text-[11px] uppercase tracking-[0.26em] text-slate-400">{site.industry}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {site.nav.map((item) => <Link key={item.href} href={item.href} className="hover:text-white">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/auth" className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-white/30 md:inline-flex">Sign in</Link>
          <Link href="/pricing" className={`rounded-full bg-gradient-to-r ${site.accent} px-5 py-2 text-sm font-bold text-slate-950 shadow-xl shadow-black/20`}>View pricing</Link>
        </div>
      </div>
    </header>
  );
}
