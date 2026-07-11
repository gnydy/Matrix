import Link from "next/link";

export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80">{children}</span>;
}

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="text-3xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-300">{label}</div>
    </div>
  );
}

export function SectionTitle({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">{kicker}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>
    </div>
  );
}

export function PrimaryLink({ href = "/pricing", children }: { href?: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800">{children}</Link>;
}

export function SecondaryLink({ href = "/dashboard", children }: { href?: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-950">{children}</Link>;
}

export function MiniNav({ links }: { links: string[] }) {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 p-2 shadow-sm backdrop-blur">
      {links.map((link) => (
        <Link key={link} href={link === "Home" ? "/" : `/${link.toLowerCase().replaceAll(" ", "-")}`} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-950 hover:text-white">
          {link}
        </Link>
      ))}
    </nav>
  );
}
