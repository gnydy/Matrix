import { PageShell } from '@/components/PageShell';
import { FeatureGrid, OperationsTable } from '@/components/EducationBlocks';

export default function TeacherDashboardPage() {
  return <PageShell><section className="mx-auto max-w-7xl px-5 py-12"><h1 className="text-5xl font-black">Teacher dashboard</h1><p className="mt-4 max-w-2xl text-slate-400">Instructor view for cohorts, assignment review, student states, notes, and learning operations.</p><div className="mt-8"><FeatureGrid /></div><div className="mt-8"><OperationsTable title="Instructor review queue" /></div></section></PageShell>;
}
