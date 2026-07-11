# Matrix ERP Professional Web Client

هذه نسخة محسنة من `web-erp` بواجهة Desktop احترافية RTL للموديولات الأساسية:

- الموارد البشرية والرواتب HR & Payroll
- الحسابات والمالية Financial Accounting
- سلسلة الإمداد والمخزون Supply Chain
- المبيعات وخدمة العملاء Sales & CRM
- المشتريات والموردين Procurement
- التصنيع والإنتاج Manufacturing
- إدارة المشاريع Project Management
- التقارير والتحليلات Reports
- الكاشير POS Cashier

## التشغيل على PowerShell

شغل الـ API من المشروع الأساسي:

```powershell
Set-Location E:\Matrix
$env:DATABASE_URL="file:E:/Matrix/data/matrix.db"
$env:JWT_SECRET="dev_secret_change_me"
pnpm --filter @allinall/api dev
```

شغل الواجهة:

```powershell
Set-Location E:\Matrix\apps\web-erp
$env:MATRIX_API_URL="http://127.0.0.1:4000"
$env:JWT_SECRET="dev_secret_change_me"
pnpm dev
```

الرابط:

```txt
http://127.0.0.1:3002/erp/login
```

## بيانات دخول التطوير

```txt
admin@matrix.local
Admin@2030
```

إذا كان الـ API غير جاهز في بيئة التطوير، الواجهة تسمح بالدخول التجريبي بنفس البيانات حتى تختبر التصميم. في الإنتاج يجب تعطيل ذلك أو الاعتماد على API حقيقي.

## ملاحظات مهمة

- هذا الملف هو مشروع `web-erp` فقط. الباك إند الحقيقي يجب أن يكون في مشروع `api` أو monorepo الأساسي.
- الواجهة تحتفظ بـ proxy جاهز إلى `http://127.0.0.1:4000/api/v1/erp/...`.
- تم حذف اعتماد الواجهة على حزم workspace غير مرفقة داخل zip حتى لا تفشل عند التشغيل منفردًا.
