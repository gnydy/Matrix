import { prisma } from '@allinall/database';
import { formatDate } from '@/lib/labels';

export default async function LoginAuditPage() {
  const entries = await prisma.loginAudit.findMany({
    orderBy: { createdAt: 'desc' },
    take: 200,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">سجل الدخول</h2>
        <p className="mt-1 text-sm text-muted">محاولات تسجيل الدخول إلى Control Center</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>البريد</th>
              <th>النتيجة</th>
              <th>IP</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e) => (
              <tr key={e.id}>
                <td dir="ltr">{e.email}</td>
                <td>
                  <span
                    className={`badge ${e.success ? 'bg-success/15 text-success' : 'bg-warning/15 text-warning'}`}
                  >
                    {e.success ? 'نجاح' : 'فشل'}
                  </span>
                </td>
                <td dir="ltr" className="text-muted text-sm">
                  {e.ip ?? '—'}
                </td>
                <td className="text-muted">{formatDate(e.createdAt)}</td>
              </tr>
            ))}
            {entries.length === 0 && (
              <tr>
                <td colSpan={4} className="py-10 text-center text-muted">
                  لا سجلات بعد
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
