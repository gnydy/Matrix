export default function SettingsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://127.0.0.1:8080';
  const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@matrix.local';
  const dbHint = process.env.DATABASE_URL?.startsWith('file:')
    ? 'SQLite محلي (data/matrix.db)'
    : 'PostgreSQL';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">الإعدادات</h2>
        <p className="mt-1 text-sm text-muted">إعدادات النظام — المرحلة C مكتملة محلياً</p>
      </div>

      <div className="stat-card grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-muted">رابط الموقع العام</p>
          <p className="font-semibold" dir="ltr">
            {siteUrl}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted">مسؤول الدخول</p>
          <p className="font-semibold" dir="ltr">
            {adminEmail}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted">قاعدة البيانات</p>
          <p className="font-semibold">{dbHint}</p>
        </div>
        <div>
          <p className="text-sm text-muted">Docker</p>
          <p className="font-semibold text-muted">مُلغى</p>
        </div>
        <div>
          <p className="text-sm text-muted">النشر السحابي</p>
          <p className="text-sm">بعد اكتمال الرؤية الكاملة</p>
        </div>
        <div>
          <p className="text-sm text-muted">Control Center</p>
          <p className="text-sm text-success">المرحلة C — مكتملة ✅</p>
        </div>
      </div>
    </div>
  );
}
