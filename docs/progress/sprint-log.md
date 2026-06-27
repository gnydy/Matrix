# Sprint Log — Matrix / AllInAll

## 2025-06-25 — Sprint S0 (البنية + خطة استثمارية)

### تم
- خطة منتج استثمارية (مقارنة Odoo/SAP): `docs/specs/01`–`06`
- Monorepo: pnpm + turbo
- **سيرفر محلي Docker:** Postgres · Redis (6380) · Mailhog · Adminer
- **موقع marketing احترافي v0.1:** `apps/web-marketing` — build ناجح
- 17 ملف MD → PDF
- كتالوج المشروع

### خدمات محلية تعمل

| الخدمة | URL |
|--------|-----|
| الموقع | http://localhost:3000 (`pnpm dev` في apps/web-marketing) |
| PostgreSQL | localhost:5432 |
| Redis | localhost:6380 |
| Adminer | http://localhost:8080 |
| Mailhog | http://localhost:8025 |

### القادم — Sprint S1 (≤10 أيام)
- [ ] باقي صفحات الموقع (about, services, contact, legal…)
- [ ] i18n en/ar
- [ ] ربط نموذج الطلب بـ API

### مطلوب من المستخدم
- املأ `docs/specs/04-PAYMENT-APIS-REQUIREMENTS.md`
- أجب على `docs/specs/05-LIMITATIONS-AND-USER-INPUT.md` (دومين، شعار، ألوان)
