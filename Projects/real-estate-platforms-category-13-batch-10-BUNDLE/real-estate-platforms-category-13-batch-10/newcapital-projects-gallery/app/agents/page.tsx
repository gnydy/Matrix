import { Nav } from '@/components/Nav';
import { SectionHeader } from '@/components/SectionHeader';
import { site } from '@/data/site';

export default function AgentsPage() {
  return <main><Nav /><section className="px-4 py-14" style={{ background: site.soft }}><SectionHeader eyebrow="Agents" title="Specialized sales and viewing team" description="Agent profiles make the template feel operational and suitable for brokerage teams." /></section><section className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-3">{site.agents.map(agent => <article key={agent.name} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-soft"><div className="grid h-16 w-16 place-items-center rounded-3xl text-xl font-black text-white" style={{ background: site.accent }}>{agent.name.split(' ').map(n=>n[0]).join('')}</div><h2 className="mt-5 text-2xl font-black">{agent.name}</h2><p className="mt-1 font-bold text-slate-500">{agent.role}</p><p className="mt-5 rounded-2xl bg-slate-50 p-4 font-black">{agent.metric}</p><p className="mt-3 text-sm text-slate-600">Focus area: {agent.focus}</p></article>)}</section></main>;
}
