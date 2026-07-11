import { PageShell } from '@/components/PageShell';
import { CourseGrid, OperationsTable } from '@/components/EducationBlocks';

export default function CoursesPage() {
  return <PageShell><section className="mx-auto max-w-7xl px-5 py-12"><h1 className="text-5xl font-black">Course catalog</h1><p className="mt-4 max-w-2xl text-slate-400">Editable mock catalog with tracks, modules, progress states, and commercial course-card UI.</p><div className="mt-8"><CourseGrid /></div><div className="mt-8"><OperationsTable title="Course operations" /></div></section></PageShell>;
}
