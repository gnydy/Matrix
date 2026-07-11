import { site } from "@/data/site";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
      {children}
    </span>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-soft backdrop-blur ${className}`}>
      {children}
    </div>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${site.accent} shadow-glow`} />
          <span>
            <span className="block text-sm font-black tracking-wide">{site.name}</span>
            <span className="block text-xs text-slate-400">{site.industry}</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          {site.nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <a href="#lead" className={`rounded-2xl bg-gradient-to-r ${site.accent} px-4 py-2 text-sm font-bold text-slate-950 shadow-glow`}>
          {site.cta}
        </a>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${site.bg}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.16),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,.10),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge>{site.industry}</Badge>
            <Badge>{site.use}</Badge>
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            {site.hero}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {site.sub}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#lead" className={`rounded-2xl bg-gradient-to-r ${site.accent} px-6 py-4 text-center text-sm font-black text-slate-950 shadow-glow`}>
              {site.cta}
            </a>
            <a href="#workflow" className="rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center text-sm font-bold text-white">
              {site.secondary}
            </a>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {site.metrics.map((metric) => (
              <Card key={metric.label} className="p-4">
                <div className="text-2xl font-black">{metric.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[.2em] text-slate-400">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
        <LandingVisual />
      </div>
    </section>
  );
}

export function LandingVisual() {
  if (site.layout === "dashboard") return <DashboardVisual />;
  if (site.layout === "timeline") return <TimelineVisual />;
  if (site.layout === "trust") return <TrustVisual />;
  if (site.layout === "command") return <CommandVisual />;
  if (site.layout === "market") return <MarketplaceVisual />;
  if (site.layout === "visual") return <VisualStack />;
  return <ConversionPanel />;
}

function ConversionPanel() {
  return (
    <Card className="self-center p-5">
      <div className={`rounded-3xl bg-gradient-to-br ${site.accent} p-1 shadow-glow`}>
        <div className="rounded-[1.35rem] bg-slate-950 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[.25em] text-slate-400">{site.form}</p>
              <h3 className="mt-2 text-2xl font-black">Conversion Control</h3>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">Live Mock</span>
          </div>
          <div className="mt-6 space-y-3">
            {site.features.map((feature, index) => (
              <div key={feature} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="text-sm font-semibold text-slate-200">{feature}</span>
                <span className="text-xs text-slate-500">0{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-white/[0.06] p-4">
            <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
              <span>Lead quality</span>
              <span>84%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className={`h-full w-[84%] rounded-full bg-gradient-to-r ${site.accent}`} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function DashboardVisual() {
  return (
    <Card className="self-center">
      <div className="grid gap-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/[0.06] p-4">
          <div>
            <p className="text-xs text-slate-400">Dashboard Preview</p>
            <h3 className="text-xl font-black">{site.name}</h3>
          </div>
          <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${site.accent}`} />
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {site.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p className="text-2xl font-black">{metric.value}</p>
              <p className="text-xs text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="grid h-48 grid-cols-8 items-end gap-2 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          {[45, 74, 38, 88, 65, 92, 57, 78].map((h, i) => (
            <span key={i} className={`rounded-t-xl bg-gradient-to-t ${site.accent}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </Card>
  );
}

function TimelineVisual() {
  return (
    <Card className="self-center">
      <h3 className="text-2xl font-black">Launch Roadmap</h3>
      <div className="mt-6 space-y-4">
        {site.steps.map((step, index) => (
          <div key={step} className="grid grid-cols-[auto_1fr] gap-4">
            <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${site.accent} text-sm font-black text-slate-950`}>
              {index + 1}
            </span>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-bold">{step}</p>
              <p className="mt-1 text-sm text-slate-400">Step designed to remove friction and increase decision clarity.</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TrustVisual() {
  return (
    <Card className="self-center">
      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
        <p className="text-sm font-bold text-slate-300">Trust Layer</p>
        <h3 className="mt-2 text-3xl font-black">Risk removed before conversion</h3>
        <div className="mt-6 grid gap-3">
          {site.proof.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
              <p className="font-semibold">{item}</p>
              <p className="mt-1 text-sm text-slate-500">Structured for professional buyer confidence.</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function CommandVisual() {
  return (
    <Card className="self-center">
      <div className="rounded-3xl bg-black/40 p-4 font-mono text-sm">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="mt-6 space-y-3 text-slate-300">
          <p>&gt; analyze_conversion_path --template={site.slug}</p>
          <p className="text-emerald-300">✓ friction points mapped</p>
          <p className="text-cyan-300">✓ lead intent captured</p>
          <p className="text-violet-300">✓ CTA hierarchy validated</p>
          <p className="text-slate-500">Output: production-ready landing experience.</p>
        </div>
      </div>
    </Card>
  );
}

function MarketplaceVisual() {
  return (
    <Card className="self-center">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black">Template Marketplace Preview</h3>
        <Badge>ZIP Delivery</Badge>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {["Live Demo", "Download ZIP", "License", "Request Customization"].map((item) => (
          <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
            <p className="font-bold">{item}</p>
            <p className="mt-1 text-sm text-slate-500">Ready for the final sales platform.</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function VisualStack() {
  return (
    <Card className="self-center">
      <div className="relative h-[430px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className={`absolute left-${item * 4 + 6} top-${item * 8 + 8} w-[78%] rounded-3xl border border-white/10 bg-gradient-to-br ${site.accent} p-1 shadow-glow`}
            style={{ transform: `rotate(${item * 4 - 4}deg) translateY(${item * 34}px)`, opacity: 1 - item * 0.08 }}
          >
            <div className="rounded-[1.35rem] bg-slate-950 p-5">
              <div className="h-24 rounded-2xl bg-white/10" />
              <div className="mt-4 h-3 w-3/4 rounded-full bg-white/20" />
              <div className="mt-2 h-3 w-1/2 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export function FeatureSection() {
  return (
    <section id="workflow" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Badge>Landing UX System</Badge>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">Sections built for decision, not decoration.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">{site.position}</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {site.features.map((feature) => (
            <Card key={feature}>
              <div className={`mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br ${site.accent}`} />
              <h3 className="text-lg font-black">{feature}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Reusable, editable, and structured as a sellable landing component.</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="bg-slate-950 px-5 pb-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Badge>Conversion Flow</Badge>
            <h2 className="mt-5 text-3xl font-black">A clear route from first impression to action.</h2>
            <p className="mt-4 text-slate-400">The layout explains the offer, proves relevance, and drives the user to a single primary action.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {site.steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <span className="text-xs font-bold text-slate-500">STEP {index + 1}</span>
                <h3 className="mt-2 font-black">{step}</h3>
                <p className="mt-2 text-sm text-slate-400">Short, measurable, and easy to edit for client delivery.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProofSection() {
  return (
    <section className="bg-slate-950 px-5 pb-20">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {site.proof.map((proof) => (
          <Card key={proof}>
            <p className="text-xl font-black">{proof}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">Use this block to show credibility, positioning, or delivery strength.</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function LeadSection() {
  return (
    <section id="lead" className={`bg-gradient-to-br ${site.bg} px-5 py-20`}>
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <Badge>{site.price}</Badge>
          <h2 className="mt-5 text-3xl font-black md:text-5xl">Ready to turn this landing page into a client asset.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">This template is built for selling, editing, portfolio display, and later packaging inside the final marketplace.</p>
        </div>
        <Card>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm outline-none placeholder:text-slate-500" placeholder="Client name" />
            <input className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm outline-none placeholder:text-slate-500" placeholder="Business email" />
            <select className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm outline-none sm:col-span-2">
              <option>{site.form}</option>
              <option>Request customization</option>
              <option>Need full system later</option>
            </select>
            <textarea className="min-h-32 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm outline-none placeholder:text-slate-500 sm:col-span-2" placeholder="Project notes" />
          </div>
          <button className={`mt-5 w-full rounded-2xl bg-gradient-to-r ${site.accent} px-6 py-4 text-sm font-black text-slate-950`}>
            {site.cta}
          </button>
        </Card>
      </div>
    </section>
  );
}

export function FAQSection() {
  const pairs = [];
  for (let i = 0; i < site.faqs.length; i += 2) {
    pairs.push({ q: site.faqs[i], a: site.faqs[i + 1] });
  }
  return (
    <section className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-black">FAQ</h2>
        <div className="mt-8 space-y-4">
          {pairs.map((item) => (
            <Card key={item.q}>
              <h3 className="font-black">{item.q}</h3>
              <p className="mt-2 text-slate-400">{item.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {site.name}. Sellable landing page template.</p>
        <p>Next.js · TypeScript · Tailwind CSS · Mock Data · PowerShell ZIP</p>
      </div>
    </footer>
  );
}
