# Matrix ERP API Backend

ضع مجلد `apps/api` داخل مشروعك `E:\Matrix` ثم نفذ:

```powershell
Set-Location E:\Matrix
pnpm install
$env:DATABASE_URL="file:E:/Matrix/data/matrix.db"
$env:JWT_SECRET="dev_secret_change_me"
pnpm --filter @allinall/api setup
pnpm --filter @allinall/api dev
```

بيانات الدخول الافتراضية:

```txt
admin@matrix.local
Admin@2030
```

المسارات الأساسية:

```txt
GET  /api/v1/health
POST /api/v1/auth/login
GET  /api/v1/erp/inventory/products
POST /api/v1/erp/sales/cashier-sale
GET  /api/v1/erp/accounting/entries
GET  /api/v1/erp/hr/employees
```
