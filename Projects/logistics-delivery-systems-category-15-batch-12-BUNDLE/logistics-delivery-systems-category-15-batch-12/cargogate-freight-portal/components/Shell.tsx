import Link from 'next/link';
import { site } from '@/data/site';

const nav = [
  { label: 'Overview', href: '/' },
  { label: 'Tracking', href: '/tracking' },
  { label: 'Orders', href: '/orders' },
  { label: 'Routes', href: '/routes' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Dashboard', href: '/dashboard' },
];

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${site.dark}, #0f172a 55%, ${site.accent})` }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 0, transparent 18%), radial-gradient(circle at 80% 10%, white 0, transparent 12%)' }} />
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 text-white">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">LG</span>
            <span>
              <strong className="block text-lg">{site.name}</strong>
              <small className="text-white/65">{site.industry}</small>
            </span>
          </Link>
          <div className="hidden items-center gap-1 rounded-full bg-white/10 p-1 ring-1 ring-white/15 lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/tracking" className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-black/10">
            Track shipment
          </Link>
        </nav>
        <section className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="text-white">
            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20">{site.category} • {site.complexity}</p>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">{site.hero}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{site.positioning}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950">{site.cta}</Link>
              <Link href="/routes" className="rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10">Review routes</Link>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-5 shadow-2xl">
            <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-white/60">Live operations preview</span>
                <span className="rounded-full px-3 py-1 text-xs" style={{ background: site.accent }}>LIVE</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {site.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                    <p className="text-sm text-white/50">{metric.label}</p>
                    <strong className="mt-2 block text-2xl">{metric.value}</strong>
                    <span className="text-xs text-white/45">{metric.note}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <p className="mb-3 text-sm text-white/55">Priority route timeline</p>
                <div className="space-y-3">
                  {site.timeline.map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <span className="mt-1 h-3 w-3 rounded-full" style={{ background: site.accent }} />
                      <div>
                        <strong className="block text-sm">{item.step}</strong>
                        <span className="text-xs text-white/45">{item.detail}</span>
                      </div>
                      <span className="ml-auto rounded-full bg-white/10 px-2 py-1 text-[10px] text-white/55">{item.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10">{children}</div>
    </main>
  );
}
