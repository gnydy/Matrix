import { site } from "@/data/site";

export function Shell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-slate-950 text-slate-50">{children}</main>;
}

export function TopNav() {
  const links = ["Packages", "Availability", "Booking", "Guest Portal", "Dashboard"];
  const paths = ["/packages", "/availability", "/booking", "/guest", "/dashboard"];
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-sm font-black text-slate-950">{site.logo}</span>
          <span>
            <span className="block text-sm font-bold tracking-wide">{site.name}</span>
            <span className="block text-xs text-slate-400">{site.tagline}</span>
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
          {links.map((link, index) => <a key={link} className="transition hover:text-white" href={paths[index]}>{link}</a>)}
        </div>
        <a href="/booking" className="rounded-full px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg" style={{ background: site.accent }}>Book demo</a>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(circle at 20% 10%, ${site.accent}55, transparent 28%), radial-gradient(circle at 80% 30%, ${site.soft}, transparent 30%)` }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">{site.category}</p>
          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-[-0.05em] md:text-7xl">{site.hero}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{site.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="rounded-2xl px-6 py-3 font-bold text-slate-950" style={{ background: site.accent }} href="/booking">Start booking flow</a>
            <a className="rounded-2xl border border-white/15 px-6 py-3 font-bold text-white" href="/dashboard">View operations dashboard</a>
          </div>
          <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {site.metrics.map((metric) => <Stat key={metric.label} label={metric.label} value={metric.value} />)}
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-black/40 backdrop-blur">
          <div className="rounded-[1.5rem] bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Live availability</p>
                <h2 className="text-2xl font-black">{site.featuredPanel}</h2>
              </div>
              <span className="rounded-full px-3 py-1 text-xs font-bold text-slate-950" style={{ background: site.accent }}>LIVE</span>
            </div>
            <div className="grid gap-3">
              {site.packages.slice(0, 3).map((item) => <PackageCard key={item.name} item={item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stat({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4"><p className="text-2xl font-black">{value}</p><p className="mt-1 text-xs uppercase tracking-widest text-slate-400">{label}</p></div>;
}

export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <div className="mb-9 max-w-3xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: site.accent }}>{eyebrow}</p><h2 className="text-4xl font-black tracking-[-0.04em] text-white">{title}</h2><p className="mt-4 text-slate-300 leading-7">{text}</p></div>;
}

export function PackageCard({ item }: { item: { name: string; meta: string; price: string; status: string } }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:bg-white/[0.08]"><div className="flex items-start justify-between gap-4"><div><h3 className="font-bold text-white">{item.name}</h3><p className="mt-1 text-sm text-slate-400">{item.meta}</p></div><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">{item.status}</span></div><p className="mt-4 text-2xl font-black" style={{ color: site.accent }}>{item.price}</p></div>;
}

export function PackagesGrid() {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{site.packages.map((item) => <PackageCard key={item.name} item={item} />)}</div>;
}

export function BookingFlow() {
  return <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]"><div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><h3 className="text-2xl font-black">Smart booking request</h3><div className="mt-6 grid gap-4"><Input label="Destination / property" value={site.defaultDestination} /><Input label="Check-in" value="2026-08-18" /><Input label="Check-out" value="2026-08-24" /><Input label="Guests" value="2 adults, 1 child" /><button className="mt-2 rounded-2xl px-5 py-3 font-bold text-slate-950" style={{ background: site.accent }}>Calculate availability</button></div></div><div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><h3 className="text-2xl font-black">Reservation summary</h3><div className="mt-6 space-y-3">{site.bookingSteps.map((step, index) => <div key={step} className="flex items-center gap-4 rounded-2xl bg-slate-900/70 p-4"><span className="grid h-9 w-9 place-items-center rounded-full text-sm font-black text-slate-950" style={{ background: site.accent }}>{index+1}</span><span className="font-semibold text-slate-200">{step}</span></div>)}</div></div></div>;
}

function Input({ label, value }: { label: string; value: string }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-300">{label}</span><input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0 focus:border-white/30" defaultValue={value} /></label>;
}

export function AvailabilityBoard() {
  return <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"><div className="grid gap-3 md:grid-cols-4">{site.availability.map((day) => <div key={day.date} className="rounded-2xl bg-slate-900 p-4"><p className="text-sm font-bold text-white">{day.date}</p><p className="mt-2 text-3xl font-black" style={{ color: site.accent }}>{day.open}</p><p className="text-xs uppercase tracking-widest text-slate-500">open units</p><div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full" style={{ width: day.fill, background: site.accent }} /></div></div>)}</div></div>;
}

export function GuestPortal() {
  return <div className="grid gap-5 lg:grid-cols-3"><div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 lg:col-span-1"><p className="text-sm text-slate-400">Guest</p><h3 className="mt-2 text-2xl font-black">{site.guest.name}</h3><p className="mt-2 text-slate-300">{site.guest.tier}</p><div className="mt-6 rounded-2xl bg-slate-900 p-4"><p className="text-xs uppercase tracking-widest text-slate-500">Upcoming trip</p><p className="mt-2 font-bold">{site.guest.trip}</p></div></div><div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 lg:col-span-2"><h3 className="text-2xl font-black">Itinerary timeline</h3><div className="mt-6 space-y-4">{site.itinerary.map((item) => <div key={item.time} className="grid gap-3 rounded-2xl bg-slate-900 p-4 md:grid-cols-[110px_1fr]"><span className="font-black" style={{ color: site.accent }}>{item.time}</span><span className="text-slate-300">{item.action}</span></div>)}</div></div></div>;
}

export function OperationsDashboard() {
  return <div className="grid gap-5 lg:grid-cols-[.7fr_1.3fr]"><div className="space-y-4">{site.ops.map((item) => <Stat key={item.label} label={item.label} value={item.value} />)}</div><div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"><h3 className="text-2xl font-black">Operations queue</h3><div className="mt-5 overflow-hidden rounded-2xl border border-white/10"><table className="w-full text-left text-sm"><thead className="bg-white/10 text-slate-300"><tr><th className="p-4">Code</th><th className="p-4">Guest</th><th className="p-4">Status</th><th className="p-4">Owner</th></tr></thead><tbody>{site.queue.map((row) => <tr key={row.code} className="border-t border-white/10"><td className="p-4 font-bold">{row.code}</td><td className="p-4 text-slate-300">{row.guest}</td><td className="p-4"><span className="rounded-full px-3 py-1 text-xs font-bold text-slate-950" style={{ background: site.accent }}>{row.status}</span></td><td className="p-4 text-slate-400">{row.owner}</td></tr>)}</tbody></table></div></div></div>;
}

export function Footer() {
  return <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-slate-500">{site.name} — Hotel & Travel frontend template. Replace mock data before client delivery.</footer>;
}
