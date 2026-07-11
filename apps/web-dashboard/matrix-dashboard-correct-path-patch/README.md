# Matrix Dashboard — Correct Path Patch

هذه الحزمة **Patch فقط** تعدّل مشروع Matrix الحالي، ولا تنشئ مشروعًا منفصلًا.

## المسار المعتمد نهائيًا

```text
E:\Matrix\apps\web-dashboard
```

جميع السكربتات تستقبل `DashboardPath` بهذا المسار مباشرة، ثم تستنتج جذر المشروع تلقائيًا على أنه:

```text
E:\Matrix
```

## التنفيذ الكامل بأمر واحد

فك ضغط الحزمة، وافتح PowerShell داخل مجلدها، ثم نفّذ:

```powershell
Set-ExecutionPolicy -Scope Process Bypass -Force

.\complete-matrix-dashboard.ps1 `
  -DashboardPath "E:\Matrix\apps\web-dashboard" `
  -Email "owner@your-domain.com"
```

سيطلب منك السكربت:

1. رابط PostgreSQL بصيغة `postgresql://...`.
2. كلمة مرور أول حساب Owner، بحد أدنى 12 حرفًا.

ثم ينفذ تلقائيًا:

- التحقق من `E:\Matrix` وبنية الـMonorepo.
- أخذ Backup من الداشبورد الحالية.
- استبدال أكواد الداشبورد داخل المسار الصحيح فقط.
- دمج جداول Matrix Dashboard مع Prisma Schema الحالية.
- تحديث أوامر `package.json` في جذر Matrix.
- تثبيت الحزم.
- إنشاء `.env.local` للداشبورد و`packages\database\.env` لـPrisma.
- توليد Prisma Client.
- محاولة Backup لقاعدة PostgreSQL إذا كان `pg_dump` مثبتًا.
- تطبيق الجداول الجديدة دون استخدام `--accept-data-loss`.
- تشغيل TypeScript typecheck.
- إنشاء Production Build.

لتشغيل الداشبورد تلقائيًا بعد اكتمال الخطوات:

```powershell
.\complete-matrix-dashboard.ps1 `
  -DashboardPath "E:\Matrix\apps\web-dashboard" `
  -Email "owner@your-domain.com" `
  -StartAfterInstall
```

## التطبيق اليدوي على مراحل

```powershell
.\apply-matrix-dashboard-patch.ps1 `
  -DashboardPath "E:\Matrix\apps\web-dashboard" `
  -ReplaceDashboard `
  -RunInstall
```

ثم:

```powershell
.\setup-dashboard-env.ps1 `
  -DashboardPath "E:\Matrix\apps\web-dashboard" `
  -Email "owner@your-domain.com"
```

ثم:

```powershell
cd "E:\Matrix"
pnpm db:dashboard:push
pnpm dashboard:typecheck
pnpm dashboard:build
pnpm dashboard:dev
```

الرابط المحلي:

```text
http://127.0.0.1:3020
```

## التراجع

```powershell
.\rollback-matrix-dashboard-patch.ps1 `
  -DashboardPath "E:\Matrix\apps\web-dashboard"
```

آخر Backup يوجد داخل:

```text
E:\Matrix\.matrix-backups
```

## الاستضافة

بعد اختبار النسخة محليًا، استخدم:

```powershell
E:\Matrix\scripts\matrix-dashboard\deploy-dashboard.ps1 `
  -DashboardPath "E:\Matrix\apps\web-dashboard" `
  -UseDbPush
```

`-UseDbPush` مناسب للتهيئة الأولى المراقبة فقط. بعد إنشاء Prisma migration واعتمادها في Git، استخدم `migrate deploy` دون هذا الخيار.

ملفات الاستضافة المضافة:

```text
E:\Matrix\apps\web-dashboard\Dockerfile
E:\Matrix\infra\production\docker-compose.matrix-dashboard.yml
E:\Matrix\infra\production\nginx\matrix-dashboard.conf
E:\Matrix\.github\workflows\matrix-dashboard-ci.yml
E:\Matrix\scripts\matrix-dashboard\backup-postgres.ps1
E:\Matrix\scripts\matrix-dashboard\restore-postgres.ps1
```

## تنبيه قاعدة البيانات

لا تستخدم `--accept-data-loss`. السكربت يتوقف إذا رأى Prisma أن التعديل يحتاج حذف بيانات. أنشئ Backup فعلي واختبر الاستعادة قبل تطبيق أي Migration على قاعدة إنتاج تحتوي بيانات عملاء.
