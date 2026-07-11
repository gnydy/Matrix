import { PageShell } from '@/components/PageShell';
import { LearningTimeline, OperationsTable, StatCards } from '@/components/EducationBlocks';

export default function StudentDashboardPage() {
  return <PageShell><section className="mx-auto max-w-7xl px-5 py-12"><h1 className="text-5xl font-black">Student dashboard</h1><p className="mt-4 max-w-2xl text-slate-400">A learner-facing mock dashboard for active courses, progress, lessons, certificates, and next actions.</p><div className="mt-8"><StatCards /></div><div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]"><LearningTimeline /><OperationsTable title="My learning activity" /></div></section></PageShell>;
}
