import Link from "next/link";
import { site } from "@/data/site";

const navItems = [
  { href: "/", label: "Overview" },
  { href: "/booking", label: "Booking" },
  { href: "/calendar", label: "Calendar" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/customers", label: "Customers" },
  { href: "/settings", label: "Settings" }
];

export function Shell({ children, eyebrow }: { children: React.ReactNode; eyebrow?: string }) {
  return (
    <main className={`min-h-screen ${site.surface}`}>
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${site.accent} text-sm font-black text-white shadow-soft`}>
              {site.name.slice(0, 2).toUpperCase()}
            </span>
            <span>
              <span className="block text-sm font-black tracking-tight text-slate-950">{site.name}</span>
              <span className="block text-xs font-semibold text-slate-500">{site.domain}</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-950 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/booking" className={`rounded-full bg-gradient-to-r ${site.accent} px-5 py-3 text-sm font-black text-white shadow-soft`}>
            Book now
          </Link>
        </div>
      </header>
      {eyebrow && (
        <div className="mx-auto max-w-7xl px-5 pt-8">
          <p className="inline-flex rounded-full border border-white bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-slate-500 shadow-sm">{eyebrow}</p>
        </div>
      )}
      {children}
    </main>
  );
}
