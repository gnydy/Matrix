import { Shell } from '@/components/Shell';
import { ActionBoard, MetricGrid, RecordsTable } from '@/components/Widgets';
import { site } from '@/data/site';

export default function ModulePage({ title, description }: { title: string; description: string }) {
  return (
    <Shell>
      <section className="card p-7 lg:p-10">
        <div className="text-xs font-black uppercase tracking-[0.3em] text-slate-500">Module workspace</div>
        <h1 className="mt-3 text-4xl font-black text-slate-950">{title}</h1>
        <p className="mt-4 max-w-3xl text-slate-600">{description}</p>
        <div className="mt-6 flex flex-wrap gap-2">{site.states.map((s) => <span className="status-pill" key={s}>{s}</span>)}</div>
      </section>
      <MetricGrid />
      <ActionBoard />
      <RecordsTable />
    </Shell>
  );
}
