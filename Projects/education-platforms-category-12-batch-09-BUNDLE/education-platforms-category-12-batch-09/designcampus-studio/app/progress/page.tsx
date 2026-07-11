import { PageShell } from '@/components/PageShell';
import { LearningTimeline, StatCards } from '@/components/EducationBlocks';

export default function ProgressPage() {
  return <PageShell><section className="mx-auto max-w-7xl px-5 py-12"><h1 className="text-5xl font-black">Progress tracking</h1><p className="mt-4 max-w-2xl text-slate-400">Progress UX for completion, assessment readiness, attendance, certificates, and learning-path milestones.</p><div className="mt-8"><StatCards /></div><div className="mt-8"><LearningTimeline /></div></section></PageShell>;
}
