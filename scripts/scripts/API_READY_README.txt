API READY KIT — Matrix / AllInAll

1) ضع ملف install-api-ready-all.mjs داخل:
   E:\Matrix\scripts

2) افتح CMD وشغل:
   cd /d E:\Matrix
   node scripts\install-api-ready-all.mjs

3) بعد انتهاء التثبيت شغل قاعدة البيانات والـ seed:
   set DATABASE_URL=file:E:/Matrix/data/matrix.db
   pnpm db:local
   node scripts\api-ready-seed.mjs

4) Build:
   pnpm --filter @allinall/erp build
   pnpm --filter @allinall/api build

5) تشغيل API:
   set DATABASE_URL=file:E:/Matrix/data/matrix.db
   set JWT_SECRET=dev_secret_change_me
   pnpm --filter @allinall/api dev

6) افتح CMD ثاني واختبر:
   cd /d E:\Matrix
   node scripts\api-ready-smoke-test.mjs

Login:
admin@matrix.local
Admin@2030

Endpoints بعد التشغيل:
GET    /api/v1/health
POST   /api/v1/auth/login
GET    /api/v1/erp/reports/dashboard
GET    /api/v1/erp/inventory/products
POST   /api/v1/erp/inventory/products
GET    /api/v1/erp/inventory/warehouses
POST   /api/v1/erp/sales/parties
POST   /api/v1/erp/sales/documents
PATCH  /api/v1/erp/sales/documents/:id/post
POST   /api/v1/erp/purchases/parties
POST   /api/v1/erp/purchases/documents
PATCH  /api/v1/erp/purchases/documents/:id/post
GET    /api/v1/erp/debts/receivables
PATCH  /api/v1/erp/debts/receivables/:id/pay
GET    /api/v1/erp/debts/payables
PATCH  /api/v1/erp/debts/payables/:id/pay
GET    /api/v1/erp/accounting/trial-balance
