import Link from 'next/link';

type Props = {
  quoteId: string;
  hasProject: boolean;
  projectId?: string;
};

export function QuoteProjectActions({ quoteId, hasProject, projectId }: Props) {
  if (hasProject && projectId) {
    return (
      <div className="stat-card">
        <h3 className="font-semibold">المشروع</h3>
        <Link href={`/projects/${projectId}`} className="mt-2 text-sm text-primary hover:underline">
          عرض المشروع المرتبط
        </Link>
      </div>
    );
  }

  return (
    <div className="stat-card space-y-2">
      <h3 className="font-semibold">بعد القبول</h3>
      <p className="text-sm text-muted">أنشئ مشروع تنفيذ من هذا العرض</p>
      <Link
        href={`/projects/new?quoteId=${quoteId}`}
        className="btn-primary inline-flex w-full items-center justify-center"
      >
        إنشاء مشروع
      </Link>
    </div>
  );
}
