import Link from "next/link";
import { dashboard } from "@/data/dashboard";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Users", href: "/users" },
  { label: "Analytics", href: "/analytics" },
  { label: "Reports", href: "/reports" },
  { label: "Audit", href: "/audit" },
  { label: "Settings", href: "/settings" },
];

export function AdminShell({ children, title, eyebrow }: { children: React.ReactNode; title: string; eyebrow?: string }) {
  const dark = dashboard.layout === "dark";
  const topnav = dashboard.layout === "topnav";
  return (
    <main className={`min-h-screen ${dark ? "bg-zinc-950 text-zinc-100" : "bg-slate-100 text-slate-950"}`}>
      <div className={topnav ? "" : "grid min-h-screen lg:grid-cols-[290px_1fr]"}>
        <aside className={`${topnav ? "sticky top-0 z-30 border-b" : "hidden border-r lg:block"} ${dark ? "border-white/10 bg-zinc-950/90" : "border-slate-200 bg-white/90"} backdrop-blur-xl`}>
          <div className={`${topnav ? "mx-auto flex max-w-7xl items-center justify-between px-4 py-4" : "sticky top-0 flex h-screen flex-col p-6"}`}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">{dashboard.industry}</p>
              <h1 className="mt-2 text-xl font-black tracking-tight">{dashboard.name}</h1>
            </div>
            <nav className={`${topnav ? "hidden gap-2 md:flex" : "mt-10 space-y-2"}`}>
              {navItems.map((item) => (
                <Link key={item.href} className={`${topnav ? "px-3 py-2" : "flex px-4 py-3"} rounded-2xl text-sm font-semibold transition hover:bg-[var(--soft)] hover:text-[var(--accent)]`} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            {!topnav && (
              <div className="mt-auto rounded-3xl border border-[var(--accent)]/20 bg-[var(--soft)] p-5">
                <p className="text-sm font-black text-[var(--accent)]">Role-based UI</p>
                <p className="mt-2 text-sm leading-6 opacity-75">Built for {dashboard.roles.join(", ")}.</p>
              </div>
            )}
          </div>
        </aside>
        <section>
          <header className={`${dark ? "border-white/10 bg-zinc-950/70" : "border-slate-200 bg-white/70"} sticky top-0 z-20 border-b backdrop-blur-xl`}>
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow || dashboard.use}</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight md:text-4xl">{title}</h2>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-bold hover:border-[var(--accent)] dark:border-white/20">Export</button>
                <button className="rounded-2xl bg-[var(--accent)] px-4 py-2 text-sm font-black text-white shadow-xl shadow-black/10">New Action</button>
              </div>
            </div>
          </header>
          <div className="mx-auto max-w-7xl px-4 py-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
