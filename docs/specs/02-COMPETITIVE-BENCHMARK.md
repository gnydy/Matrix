# 02 — مقارنة تنافسية: Odoo · SAP · SaaS ERP

> مرجع لبناء موقع ومنتج بمستوى استثماري — ليس بدائيًا.

---

## 1. Odoo — ما نتعلمه ونطبقه

| عنصر Odoo | تطبيق Matrix |
|-----------|--------------|
| Modular apps (30+) | ERP modules منفصلة مع entitlements |
| موقع marketing قوي | `web-marketing` — hero · modules · pricing · demo |
| Community + Enterprise | SaaS tiers + dedicated deployment |
| Mobile responsive + PWA | Sprint 8 — PWA بعد web مستقر |
| XML-RPC/JSON API | REST + OpenAPI + webhooks لـ n8n |
| Multi-company داخل tenant | Company + Branch في ERP Core |
| App store / marketplace | مرحلة لاحقة — partner modules |

**ما لا ننسخه حرفيًا:** Odoo monolith Python — نحن TypeScript monorepo أخف وأسهل للفريق العربي.

---

## 2. SAP — ما نتعلمه ونطبقه

| عنصر SAP | تطبيق Matrix |
|----------|--------------|
| BTP multi-tenant logical isolation | `tenantId` + RBAC + audit |
| Fiori UX consistency | Design system في `packages/ui` |
| Enterprise compliance | Audit log · soft delete · permissions |
| Integration hub | n8n + Events API |
| Role-based everything | 10 أدوار من الوثيقة |

**ما لا نهدفه الآن:** تعقيد SAP الكامل — نستهدف SME و mid-market أولًا.

---

## 3. SaaS ERP عام (NetSuite · Zoho · Acumatica)

| معيار SaaS | Matrix |
|------------|--------|
| Subscription billing | Plans + Entitlements (MVP-3) |
| Self-service signup | مرحلة لاحقة — الآن lead → sales |
| 99.9% uptime target | health checks · monitoring (n8n + infra) |
| Data export | CSV/PDF reports |
| API-first | كل feature له API قبل UI |

---

## 4. معايير الموقع الاحترافي (من أفضل المواقع)

### Hero section (Odoo-style)
- عنوان قيمة واضح
- فيديو أو animation خفيف
- CTA مزدوج: «اطلب عرضًا» + «استكشف الموديولات»
- شعارات عملاء (عند التوفر)

### Social proof
- أرقام: عملاء · دول · معاملات
- شهادات
- شارات أمان (SSL · GDPR-ready)

### Product pages
- أيقونة لكل موديول
- «اعرف المزيد» لكل وحدة
- مقارنة مع Excel/ورق (قبل/بعد)

### Performance
- Static generation حيث ممكن
- Image CDN
- Font subsetting للعربية

---

## 5. قرارات Matrix بناءً على المقارنة

1. **Web-first** — أسرع للاستثمار من بناء 4 منصات معًا
2. **API-first** — يمهّد iOS/Android/Desktop
3. **Arabic-first** — ميزة تنافسية على Odoo/SAP في المنطقة
4. **Modular pricing** — مثل Odoo apps
5. **Automation من اليوم 1 في التصميم** — Events لـ n8n

---

*يُحدَّث عند كل sprint مراجعة تنافسية.*
