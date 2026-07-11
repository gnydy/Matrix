import { crm } from "@/data/crm";

const navItems = ["Overview", "Pipeline", "Accounts", "Activities", "Reports"];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">{children}</span>;
}

function StatsStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {crm.modules.map((module) => (
        <div key={module.name} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">{module.name}</p>
          <div className="mt-3 flex items-end justify-between gap-3">
            <strong className="text-3xl text-slate-950">{module.metric}</strong>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{module.state}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function DealTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <p className="text-sm font-bold text-slate-950">Live commercial records</p>
          <p className="text-xs text-slate-500">Mock CRM data designed for client-facing demos.</p>
        </div>
        <Badge>Role-based view</Badge>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-5 py-3">Account</th>
              <th className="px-5 py-3">Owner</th>
              <th className="px-5 py-3">Stage</th>
              <th className="px-5 py-3">Value</th>
              <th className="px-5 py-3">Probability</th>
              <th className="px-5 py-3">Next action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {crm.deals.map((deal) => (
              <tr key={deal.company} className="hover:bg-slate-50">
                <td className="px-5 py-4 font-semibold text-slate-900">{deal.company}</td>
                <td className="px-5 py-4 text-slate-600">{deal.owner}</td>
                <td className="px-5 py-4"><span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{deal.stage}</span></td>
                <td className="px-5 py-4 font-bold text-slate-950">{deal.value}</td>
                <td className="px-5 py-4 text-slate-600">{deal.probability}</td>
                <td className="px-5 py-4 text-slate-600">{deal.next}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PipelineLanes() {
  const stages = ["New", "Qualified", "Proposal", "Negotiation", "Won"];
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {stages.map((stage) => (
        <div key={stage} className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <strong className="text-sm text-slate-900">{stage}</strong>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">{crm.deals.filter((d) => d.stage === stage).length}</span>
          </div>
          <div className="space-y-3">
            {crm.deals.filter((d) => d.stage === stage).map((deal) => (
              <div key={deal.company} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <p className="font-semibold text-slate-950">{deal.company}</p>
                <p className="mt-1 text-xs text-slate-500">{deal.value} · {deal.probability}</p>
                <p className="mt-3 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600">Next: {deal.next}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ActivityRail() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
      <p className="text-sm font-bold text-slate-950">Activity intelligence</p>
      <div className="mt-5 space-y-4">
        {crm.activity.map((item, index) => (
          <div key={item} className="flex gap-3">
            <span className="mt-1 h-3 w-3 rounded-full bg-slate-950" />
            <div>
              <p className="text-sm font-semibold text-slate-800">{item}</p>
              <p className="text-xs text-slate-500">{index + 1}h ago · automated CRM signal</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SmartAssistant() {
  return (
    <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-glow">
      <div className="flex items-center justify-between">
        <p className="font-bold">AI sales assistant</p>
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Mock</span>
      </div>
      <div className="mt-5 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-200">
        “Prioritize {crm.deals[3].company}. Probability dropped while deal value is high. Recommend executive call and objection-handling note.”
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
        {crm.uiCards.map((card) => (
          <div key={card.label} className="rounded-2xl bg-white/10 p-3">
            <strong className="block text-lg">{card.value}</strong>
            <span className="text-slate-300">{card.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white">CRM</span>
          <div>
            <p className="text-sm font-black text-slate-950">{crm.title}</p>
            <p className="text-xs text-slate-500">{crm.variant}</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {navItems.map((item) => <a key={item} href={item === "Overview" ? "/" : `/${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a href="/dashboard" className="rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white">Open demo</a>
      </div>
    </header>
  );
}

function HeroCommand() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
      <div>
        <Badge>{crm.positioning}</Badge>
        <h1 className="mt-6 text-5xl font-black tracking-tight text-slate-950 md:text-7xl">{crm.title}</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{crm.concept}. Built as a sellable CRM frontend template with mock data, dashboard states, forms, tables, and conversion-focused screens.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/dashboard" className="rounded-full bg-slate-950 px-6 py-3 font-bold text-white">View CRM dashboard</a>
          <a href="/accounts" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800">See accounts</a>
        </div>
      </div>
      <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft">
        <StatsStrip />
        <div className="mt-4">
          <PipelineLanes />
        </div>
      </div>
    </section>
  );
}

function HeroSplit() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid overflow-hidden rounded-[2.5rem] bg-slate-950 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 text-white md:p-12">
          <Badge>{crm.target}</Badge>
          <h1 className="mt-6 text-5xl font-black tracking-tight md:text-7xl">{crm.positioning}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{crm.concept}. Designed to show a complete commercial operations product without backend dependency.</p>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {crm.uiCards.map((card) => <div key={card.label} className="rounded-3xl bg-white/10 p-5"><strong className="text-3xl">{card.value}</strong><p className="mt-2 text-sm text-slate-300">{card.hint}</p></div>)}
          </div>
        </div>
        <div className="bg-white p-6">
          <DealTable />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[260px_1fr_360px] lg:px-8">
      <aside className="rounded-[2rem] bg-slate-950 p-5 text-white">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">CRM Suite</p>
        <h1 className="mt-4 text-3xl font-black">{crm.title}</h1>
        <div className="mt-8 space-y-2">
          {navItems.map((item, i) => <div key={item} className={`rounded-2xl px-4 py-3 text-sm font-bold ${i === 0 ? "bg-white text-slate-950" : "bg-white/5 text-slate-300"}`}>{item}</div>)}
        </div>
      </aside>
      <main className="space-y-5">
        <StatsStrip />
        <DealTable />
      </main>
      <aside className="space-y-5">
        <SmartAssistant />
        <ActivityRail />
      </aside>
    </section>
  );
}

function HeroEditorial() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">{crm.variant}</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">{crm.positioning}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{crm.concept}. The design uses an editorial business presentation with embedded CRM intelligence panels.</p>
          <div className="mt-10">
            <DealTable />
          </div>
        </div>
        <div className="space-y-6">
          <SmartAssistant />
          <ActivityRail />
        </div>
      </div>
    </section>
  );
}

export function HomeExperience() {
  const v = crm.variant;
  if (["sales-pipeline", "property-leads", "candidate-crm", "bid-pursuit", "retention-commerce"].includes(v)) return <HeroCommand />;
  if (["account-360", "patient-journey", "investor-relations", "guest-loyalty", "donor-relationship"].includes(v)) return <HeroSplit />;
  if (["support-inbox", "revenue-ops", "vehicle-dealer", "policy-renewal", "exec-war-room"].includes(v)) return <HeroDashboard />;
  return <HeroEditorial />;
}

export function FeatureGrid() {
  const features = [
    "Lead capture states", "Deal probability", "Customer profile", "Role-based UI", "Follow-up queue", "AI next action"
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={feature} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 font-black text-slate-700">0{index + 1}</span>
            <h3 className="mt-5 text-xl font-black text-slate-950">{feature}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">Included as frontend-ready CRM UI with mock data, scalable component structure, and client-facing delivery notes.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:flex md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black">{crm.title}</p>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">Sellable CRM frontend template for portfolio demos, client proposals, and future backend integration.</p>
        </div>
        <a href="/dashboard" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-bold text-slate-950 md:mt-0">Review demo</a>
      </div>
    </footer>
  );
}

export function CRMPageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export function DashboardView() {
  return (
    <CRMPageFrame>
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="rounded-[2rem] bg-slate-950 p-5 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Workspace</p>
          <h2 className="mt-4 text-2xl font-black">Control Center</h2>
          <div className="mt-8 space-y-2">
            {navItems.map((item, i) => <div key={item} className={`rounded-2xl px-4 py-3 text-sm font-bold ${i === 1 ? "bg-white text-slate-950" : "bg-white/5 text-slate-300"}`}>{item}</div>)}
          </div>
        </aside>
        <section className="space-y-6">
          <StatsStrip />
          <PipelineLanes />
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <DealTable />
            <ActivityRail />
          </div>
        </section>
      </main>
    </CRMPageFrame>
  );
}

export function AccountsView() {
  return (
    <CRMPageFrame>
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Accounts</p>
            <h1 className="mt-3 text-4xl font-black text-slate-950">Customer intelligence records</h1>
          </div>
          <Badge>{crm.target}</Badge>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {crm.deals.map((deal) => (
            <article key={deal.company} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="font-black text-slate-950">{deal.company}</p>
              <p className="mt-2 text-sm text-slate-500">{deal.owner} · {deal.stage}</p>
              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Open value</p>
                <p className="mt-2 text-2xl font-black text-slate-950">{deal.value}</p>
              </div>
              <button className="mt-5 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-bold text-white">Open profile</button>
            </article>
          ))}
        </div>
      </main>
    </CRMPageFrame>
  );
}

export function PipelineView() {
  return (
    <CRMPageFrame>
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Pipeline</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">Deal movement board</h1>
        </div>
        <PipelineLanes />
      </main>
    </CRMPageFrame>
  );
}
