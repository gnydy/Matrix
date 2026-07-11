import { site } from '@/data/site';

const links = [
  ['Listings', '/listings'],
  ['Agents', '/agents'],
  ['Calculator', '/calculator'],
  ['Booking', '/booking'],
  ['Dashboard', '/dashboard'],
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3 font-black tracking-tight text-slate-950">
          <span className="grid h-10 w-10 place-items-center rounded-2xl text-white shadow-soft" style={{ background: site.accent }}>RE</span>
          <span>{site.name}</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="hover:text-slate-950">{label}</a>)}
        </div>
        <a href="/booking" className="rounded-full px-5 py-3 text-sm font-bold text-white shadow-soft" style={{ background: site.accent }}>{site.cta}</a>
      </nav>
    </header>
  );
}
