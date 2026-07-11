import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ErpShell } from '@/components/erp-shell';
import { getSession } from '@/lib/auth';

export default async function InventoryAuditsPage() {
  const session = await getSession();
  if (!session) redirect('/login');

  const audits = [
    ['AUD-001', 'المخزن الرئيسي', 'مسودة', '12 منتج', 'غير معتمد'],
    ['AUD-002', 'مخزن الجيزة', 'قيد المراجعة', '8 منتجات', 'يحتاج اعتماد'],
    ['AUD-003', 'مخزن المرتجعات', 'معتمد', '5 منتجات', 'مغلق'],
  ];

  return (
    <ErpShell userName={session.name}>
      <section className="rounded-3xl border border-border bg-card p-6">
        <span className="badge bg-primary/15 text-primary">Inventory Audit</span>
        <h1 className="mt-4 text-2xl font-bold">جرد المخزون</h1>
        <p className="mt-2 max-w-2xl text-muted">
          واجهة إدارة جرد المخازن ومراجعة الفروق بين الكمية النظامية والكمية الفعلية.
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="stat-card">
          <p className="text-sm text-muted">جلسات الجرد</p>
          <p className="mt-2 text-2xl font-bold">3</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">قيد المراجعة</p>
          <p className="mt-2 text-2xl font-bold">1</p>
        </div>
        <div className="stat-card">
          <p className="text-sm text-muted">فروق مفتوحة</p>
          <p className="mt-2 text-2xl font-bold">7</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold">إنشاء جرد جديد</h2>
        <p className="mt-1 text-sm text-muted">واجهة مبدئية لإنشاء جرد مخزن قبل ربط الحفظ الفعلي.</p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <label>
            <span className="mb-1 block text-sm text-muted">المخزن</span>
            <input className="field-input" placeholder="المخزن الرئيسي" />
          </label>
          <label>
            <span className="mb-1 block text-sm text-muted">تاريخ الجرد</span>
            <input className="field-input" placeholder="2026-06-27" />
          </label>
          <label>
            <span className="mb-1 block text-sm text-muted">المسؤول</span>
            <input className="field-input" placeholder="أمين المخزن" />
          </label>
        </div>

        <button type="button" className="btn-primary mt-5 opacity-60" disabled>
          إنشاء الجرد — سيتم ربطه بالـ API لاحقًا
        </button>
      </section>

      <section className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">جلسات الجرد</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="data-table">
            <thead>
              <tr>
                <th>المرجع</th>
                <th>المخزن</th>
                <th>الحالة</th>
                <th>عدد البنود</th>
                <th>الاعتماد</th>
              </tr>
            </thead>
            <tbody>
              {audits.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-8">
        <Link href="/inventory" className="btn-secondary">
          الرجوع إلى المخزون
        </Link>
      </div>
    </ErpShell>
  );
}
