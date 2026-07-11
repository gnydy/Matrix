import { Shell } from '@/components/Shell';
import { Topbar, StatCards, RecordsTable, ApprovalFlow, EmptyAndErrorStates } from '@/components/ErpBlocks';
import { site } from '@/data/site';

export default function DashboardPage() {
  return (
    <Shell>
      <Topbar />
      <section className="space-y-6 px-5 py-8 lg:px-8">
        <div className="card rounded-[2rem] p-8">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-slate-400">Dashboard Preview</p>
          <h2 className="mt-3 text-4xl font-black">{site.name} executive dashboard</h2>
          <p className="mt-3 max-w-3xl text-slate-600">A frontend-only ERP dashboard mock with realistic states, cards, records, approvals and enterprise visual structure.</p>
        </div>
        <StatCards />
        <ApprovalFlow />
        <RecordsTable />
        <EmptyAndErrorStates />
      </section>
    </Shell>
  );
}
