import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { DashboardPreview, IntegrationsCloud, PricingBlocks, SecurityPanel, Workflow } from '@/components/Sections';
import { site } from '@/data/site';

export default function Page() {
  const map = {
    pricing: <PricingBlocks />,
    dashboard: <DashboardPreview />,
    integrations: <IntegrationsCloud />,
    security: <SecurityPanel />,
    auth: <AuthMock />,
    docs: <DocsMock />
  } as const;
  return <main><Navigation /><section className="bg-slate-950 px-5 py-16"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">Integration ecosystem</p><h1 className="mt-4 max-w-4xl text-5xl font-black text-white">Connect the product story to tools clients already use.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">Integration blocks help position the template as a serious product instead of a static website.</p></div></section>{map['integrations']}<Workflow /><Footer /></main>;
}

function AuthMock() {
  return <section className="bg-slate-900 px-5 py-20"><div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2"><div><h2 className="text-4xl font-black text-white">Authentication mock designed for SaaS onboarding.</h2><p className="mt-4 text-slate-400 leading-7">Includes sign in, workspace selection, role hinting, and account security messaging. This is frontend-only and ready to connect to a real auth provider.</p></div><div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6"><label className="text-sm text-slate-400">Email</label><div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-300">admin@{site.slug}.demo</div><label className="mt-5 block text-sm text-slate-400">Workspace</label><div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-slate-300">Executive Demo Workspace</div><button className={`mt-6 w-full rounded-2xl bg-gradient-to-r ${site.accent} px-5 py-3 font-black text-slate-950`}>Continue securely</button></div></div></section>
}

function DocsMock() {
  return <section className="bg-slate-900 px-5 py-20"><div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">{['Install and run','Customize content','Prepare for client delivery'].map((item, index) => <article key={item} className="rounded-[2rem] border border-white/10 bg-slate-950 p-6"><span className="text-3xl font-black text-white">0{index+1}</span><h2 className="mt-6 text-xl font-black text-white">{item}</h2><p className="mt-3 text-sm leading-7 text-slate-400">Clear documentation block for developers and clients. Replace mock data from data/site.ts and adjust colors from Tailwind classes.</p></article>)}</div></section>
}
