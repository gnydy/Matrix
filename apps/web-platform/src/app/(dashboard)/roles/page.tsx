import { roleDefinitions } from '@/lib/services-catalog';

export default function RolesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">الأدوار والصلاحيات</h2>
        <p className="mt-1 text-sm text-muted">مصفوفة الأدوار — التطبيق الكامل مع RBAC في المرحلة A</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>الدور</th>
              <th>الاسم</th>
              <th>الوصول</th>
            </tr>
          </thead>
          <tbody>
            {roleDefinitions.map((r) => (
              <tr key={r.id}>
                <td className="font-mono text-sm" dir="ltr">
                  {r.id}
                </td>
                <td>{r.labelAr}</td>
                <td className="text-muted">{r.access}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
