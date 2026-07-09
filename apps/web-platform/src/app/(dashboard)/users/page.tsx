import { prisma } from '@allinall/database';
import { ensureSeedAdmin } from '@/lib/audit';
import { UsersAdminPanel } from '@/components/users-admin-panel';
import { adminRoleLabels, formatDate } from '@/lib/labels';

export default async function UsersPage() {
  await ensureSeedAdmin();
  const users = await prisma.adminUser.findMany({ orderBy: { createdAt: 'asc' } });
  const loginEmail = process.env.ADMIN_EMAIL ?? 'admin@matrix.local';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">المستخدمون</h2>
        <p className="mt-1 text-sm text-muted">
          الدخول الفعلي حالياً للمسؤول في .env — السجل هنا للتخطيط والأدوار
        </p>
      </div>

      <div className="stat-card">
        <p className="text-sm text-muted">حساب الدخول النشط</p>
        <p className="font-semibold" dir="ltr">
          {loginEmail}
        </p>
      </div>

      <UsersAdminPanel initialUsers={users} />

      <div className="overflow-x-auto rounded-2xl border border-border">
        <table className="data-table">
          <thead>
            <tr>
              <th>الاسم</th>
              <th>البريد</th>
              <th>الدور</th>
              <th>الحالة</th>
              <th>منذ</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td dir="ltr">{u.email}</td>
                <td>{adminRoleLabels[u.role] ?? u.role}</td>
                <td>{u.active ? 'نشط' : 'معطّل'}</td>
                <td className="text-muted">{formatDate(u.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
