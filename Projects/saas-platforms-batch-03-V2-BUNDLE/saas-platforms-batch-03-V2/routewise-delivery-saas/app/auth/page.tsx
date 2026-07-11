import { template } from "@/data/mock";
import { MiniNav } from "@/components/Ui";

export default function AuthPage() {
  return (
    <main className="grid min-h-screen bg-slate-100 p-6 md:grid-cols-2">
      <section className="hidden rounded-[2rem] bg-slate-950 p-10 text-white md:block">
        <MiniNav links={["Home", "Pricing", "Dashboard", "Auth"]} />
        <div className="mt-24 max-w-lg">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Onboarding</p>
          <h1 className="mt-6 text-5xl font-semibold">Start a controlled SaaS workspace.</h1>
          <p className="mt-6 text-slate-300">This authentication screen is a frontend mock for demo and portfolio use. Connect real auth before production.</p>
        </div>
      </section>
      <section className="flex items-center justify-center">
        <form className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-slate-950">Create {template.name} account</h2>
          <label className="mt-8 block text-sm font-medium text-slate-700">Work email</label>
          <input className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-950" placeholder="team@company.com" />
          <label className="mt-5 block text-sm font-medium text-slate-700">Password</label>
          <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-950" placeholder="••••••••" />
          <button className="mt-8 w-full rounded-2xl bg-slate-950 px-5 py-4 font-semibold text-white">Create workspace</button>
          <p className="mt-5 text-center text-sm text-slate-500">Frontend mock only. Add real auth, rate limits, sessions, and validation for production.</p>
        </form>
      </section>
    </main>
  );
}
