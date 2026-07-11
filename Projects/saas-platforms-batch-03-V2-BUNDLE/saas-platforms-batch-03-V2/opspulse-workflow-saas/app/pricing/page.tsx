import { plans, template } from "@/data/mock";
import { MiniNav, PrimaryLink, SectionTitle } from "@/components/Ui";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-8">
      <MiniNav links={["Home", "Pricing", "Dashboard", "Auth"]} />
      <section className="mx-auto max-w-6xl py-20">
        <SectionTitle kicker="Pricing" title={`${template.name} commercial plans`} text="A clean pricing page prepared for SaaS demos, template sales, and client proposal customization." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={plan.name} className={`rounded-[2rem] border p-8 shadow-sm ${index === 1 ? "border-slate-950 bg-slate-950 text-white" : "border-slate-200 bg-white text-slate-950"}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] opacity-60">{plan.name}</p>
              <div className="mt-6 text-5xl font-semibold">{plan.price}</div>
              <p className="mt-4 leading-7 opacity-70">{plan.detail}</p>
              <ul className="mt-8 space-y-3 text-sm">
                {plan.features.map((feature) => <li key={feature}>✓ {feature}</li>)}
              </ul>
              <div className="mt-8"><PrimaryLink href="/auth">Start with {plan.name}</PrimaryLink></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
