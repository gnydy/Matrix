import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ErpShell } from '@/components/erp-shell';
import { AuditDetailClient } from '@/components/audit-detail-client';
import { getSession } from '@/lib/auth';
import { erpFetch } from '@/lib/api';

const statusLabels: Record<string, string> = {
  draft: 'مسودة',
  counting: 'جاري العد',
  posted: 'مرحّل',
  cancelled: 'ملغى',
};

type AuditDetail = {
  id: string;
  ref: string;
  status: string;
  note: string | null;
  warehouse: { name: string };
  lines: Array<{
    id: string;
    productId: string;
    systemQty: number;
    countedQty: number;
    varianceQty: number;
    product: { name: string; sku: string };
  }>;
};

export default async function AuditDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) redirect('/login');

  const { id } = await params;
  let audit: AuditDetail;
  try {
    audit = await erpFetch<AuditDetail>(`/erp/inventory/audits/${id}`);
  } catch {
    notFound();
  }

  return (
    <ErpShell userName={session.name}>
      <Link href="/inventory/audits" className="text-sm text-primary hover:underline">
        ← سجل الجرد
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <h1 className="text-2xl font-bold">{audit.ref}</h1>
        <span className="badge bg-card">{statusLabels[audit.status] ?? audit.status}</span>
      </div>
      <p className="mt-1 text-muted">المخزن: {audit.warehouse.name}</p>
      {audit.note ? <p className="mt-2 text-sm">{audit.note}</p> : null}

      <div className="mt-6">
        <AuditDetailClient auditId={audit.id} status={audit.status} lines={audit.lines} />
      </div>
    </ErpShell>
  );
}
