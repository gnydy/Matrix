import { PageShell } from '@/components/PageShell';
import { OperationsTable, StatCards } from '@/components/EducationBlocks';
import { site } from '@/data/site';

export default function AdminPage() {
  return <PageShell><section className="mx-auto max-w-7xl px-5 py-12"><h1 className="text-5xl font-black">Admin operations</h1><p className="mt-4 max-w-2xl text-slate-400">Administrative mock interface for roles, learning paths, enrollment, reporting, and platform settings.</p><div className="mt-8"><StatCards /></div><div className="mt-8 grid gap-5 md:grid-cols-4">{site.personas.map((role) => <div key={role} className="glass rounded-3xl p-5"><p className="text-sm text-slate-400">Role</p><h2 className="mt-3 text-xl font-black">{role}</h2><p className="mt-3 text-sm text-slate-400">Role-based UI concept with controlled access and education-specific actions.</p></div>)}</div><div className="mt-8"><OperationsTable title="Admin activity log" /></div></section></PageShell>;
}
