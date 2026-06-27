# Module Checklist — Matrix / AllInAll

**آخر تحديث:** 2025-06-26

---

## المرحلة A — الأساس ✅

| الموديول | الحالة | ملاحظات |
|----------|--------|---------|
| Monorepo scaffold | ✅ | pnpm + turbo |
| packages/config, contracts, validation | ✅ | |
| packages/database + Prisma | ✅ | User, Role, Tenant, Lead → … |
| SQLite محلي + seed | ✅ | `npm run db:local` |
| Docker | 🚫 | مُلغى |
| apps/api (NestJS) | ✅ | `:4000` — health, auth, users, roles, tenants, public/leads |
| Auth JWT + RBAC | ✅ | User/Role/permissions — دخول عبر API |
| Tenant | ✅ | `matrix-internal` + seed owner |
| Audit Log | ✅ | API + Control Center |
| Public Lead API | ✅ | Nest `POST /api/v1/public/leads` + proxy من الموقع |
| stack:start | ✅ | موقع + API + CC + بوابة |

## المرحلة B — الموقع ✅

| الموديول | الحالة | ملاحظات |
|----------|--------|---------|
| 13 صفحة + نماذج | ✅ | |
| تتبع الزوار | ✅ | |
| packages/i18n ar/en | ✅ | كل الصفحات + محتوى |
| sitemap + robots | ✅ | |

## المرحلة C — Control Center ✅ مكتملة

| # | الصفحة / الموديول | الحالة |
|---|-------------------|--------|
| C1 | Login + Shell | ✅ |
| C2 | Dashboard | ✅ |
| C3 | Leads | ✅ |
| C4 | Customers | ✅ |
| C5 | Quotes (بدون واتساب) | ✅ |
| C6 | Projects + مراحل/مهام | ✅ |
| C7 | Payments | ✅ |
| C8 | Users + Roles | ✅ |
| C9 | Settings + Catalog | ✅ |
| C10 | Login Audit + System Logs | ✅ |

**سير العمل:** زائر → طلب → عميل → عرض → مشروع → دفعة

## المرحلة D — ERP (واجهة العميل) 🚧

| الموديول | الحالة | ملاحظات |
|----------|--------|---------|
| apps/web-erp | 🚧 | shell + 7 موديولات UI — `/erp` |
| ERP Core (DB + API) | ⬜ | Company, Branch, FiscalYear |
| Inventory … Subscriptions | ⬜ | ربط API + بيانات |

## النشر

| البند | الحالة |
|-------|--------|
| سحابة | ⏸️ لاحقاً |
| إنتاج | ⏸️ بعد الرؤية الكاملة |

## المرحلة D–G

تقارير · ELY · n8n — لم تبدأ (بعد استقرار ERP Core)

---

```powershell
npm run stack:start
```
