# 01 — الخطة الرئيسية للمنتج الاستثماري
## Matrix / AllInAll ERP

| | |
|---|---|
| **الإصدار** | 2.0.0 |
| **التاريخ** | 25 يونيو 2025 |
| **المرجع** | Odoo · SAP BTP · NetSuite · Zoho · مقارنة SaaS ERP |
| **الهدف** | منصة استثمارية — ليست موقعًا بدائيًا |

---

## 1. الرؤية

بناء **منصة ERP عربية/عالمية** قابلة للمنافسة مع Odoo وSAP في تجربة المستخدم والمرونة، مع تسعير ونشر يناسب السوق العربي والـ SME.

**ليس هدفنا:** قالب HTML بسيط أو MVP بدائي.  
**هدفنا:** منتج SaaS قابل للاستثمار — responsive · multi-tenant · API-first · جاهز للاستضافة.

---

## 2. ماذا يفعل Odoo / SAP / SaaS ERP (معيار المنافسة)

| المعيار | Odoo | SAP (BTP/S4) | Matrix (المستهدف) |
|---------|------|--------------|-------------------|
| **التصميم** | واجهة حديثة، modular apps | Fiori responsive | Design system موحد + RTL/LTR |
| **الأجهزة** | Web + PWA + mobile apps | Web + mobile SDK | Web أولًا → PWA → Native لاحقًا |
| **Multi-tenant** | DB per tenant / shared | Logical isolation BTP | Schema-per-tenant (PostgreSQL) |
| **التوسع** | 30+ module | Enterprise modules | Platform + ERP modules تدريجيًا |
| **API** | XML-RPC / JSON-RPC | OData / REST | REST + OpenAPI + webhooks |
| **الدفع** | Subscription billing | Enterprise contracts | Stripe + Paymob + Fawry + manual |
| **الأتمتة** | Studio / automated actions | SAP Integration | n8n + Events API |
| **الذكاء** | Odoo AI (جديد) | Joule / BTP AI | ELY (RAG + Tools) |

---

## 3. معمارية Matrix (مستوى استثماري)

```text
┌─────────────────────────────────────────────────────────────┐
│  Clients (Phase 1→4)                                        │
│  Web (Next.js) → PWA → iOS (Swift) → Android → Win Desktop  │
└───────────────────────────┬─────────────────────────────────┘
                            │ HTTPS / REST / WebSocket
┌───────────────────────────▼─────────────────────────────────┐
│  Edge: Nginx / CDN — SSL — Rate limit — WAF (production)    │
└───────────────────────────┬─────────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────┐
│  apps/api (NestJS) — Auth · RBAC · Tenant · Business logic   │
└───────┬─────────────────────────────┬───────────────────────┘
        │                             │
┌───────▼────────┐           ┌────────▼────────┐
│ PostgreSQL 16  │           │ Redis 7         │
│ Multi-tenant   │           │ Cache · Queues  │
└────────────────┘           └─────────────────┘
        │
┌───────▼────────────────────────────────────────────────────┐
│  worker — emails · reports · provisioning · n8n callbacks     │
└──────────────────────────────────────────────────────────────┘
```

**قرار Multi-tenant:** قاعدة بيانات واحدة + `tenantId` على كل جدول + Row Level Security (مرحلة 2) — مثل نموذج SAP BTP logical isolation، مع مسار ترقية لـ DB-per-tenant للعملاء Enterprise.

---

## 4. تجربة الموقع الاحترافية (مثل Odoo marketing)

### 4.1 صفحات الموقع العام (`web-marketing`)

| الصفحة | محتوى احترافي |
|--------|---------------|
| Home | Hero · شعارات ثقة · أرقام · CTA · فيديو/رسوم |
| Products | ERP modules grid (مثل Odoo apps) |
| Solutions | حسب القطاع (تجزئة، تصنيع، خدمات) |
| Pricing | باقات SaaS (بدون أسعار نهائية علنية للمخصص) |
| Request demo | نموذج Lead متقدم |
| Resources | مدونة · وثائق · FAQ |
| About · Contact · Legal | احترافي كامل |

### 4.2 Design System (إلزامي من اليوم 1)

- **Typography:** IBM Plex Sans Arabic + Inter
- **Breakpoints:** 320 · 640 · 768 · 1024 · 1280 · 1536 px
- **Touch targets:** ≥ 44px على الموبايل
- **Dark/Light:** system + manual
- **RTL/LTR:** CSS logical properties
- **Performance:** LCP < 2.5s · Lighthouse ≥ 90
- **Accessibility:** WCAG 2.1 AA

### 4.3 Responsive — كل الأجهزة

```text
Mobile (320–767)   → قائمة hamburger · أزرار full-width · جداول scroll
Tablet (768–1023) → شبكة 2 أعمدة · sidebar قابل للطي
Laptop (1024+)     → layout كامل · multi-column dashboard
Ultra-wide         → max-width container · لا تمدد عشوائي
```

---

## 5. خطة التنفيذ — Sprint × 10 أيام (حد أقصى لكل sprint)

| Sprint | الأيام | المحتوى | المخرج |
|--------|--------|---------|--------|
| **S0** | 1–2 | Infra محلي + Monorepo + Design tokens | Docker يعمل · `pnpm dev` |
| **S1** | 3–10 | Marketing site احترافي (13 صفحة) + i18n | موقع جاهز للاستضافة |
| **S2** | 1–10 | API: Auth + Tenant + Leads + Public forms | Backend production-ready |
| **S3** | 1–10 | Control Center (Leads → Quotes → Projects) | لوحة داخلية |
| **S4** | 1–10 | ERP Core + Inventory + Sales | أول ERP modules |
| **S5** | 1–10 | Purchases + Accounting + Payments APIs | دورة مالية |
| **S6** | 1–10 | HR + Reports + Notifications | MVP-2 |
| **S7** | 1–10 | ELY Phase 1 + n8n Phase 1 | أتمتة وذكاء |
| **S8** | 1–10 | PWA + Offline shell | تطبيق ويب قابل للتثبيت |
| **S9** | 1–10 | Production VPS + CI/CD + monitoring | go-live |
| **S10+** | لاحق | iOS Swift · Android Kotlin · Windows | بعد اكتمال Web |

**قاعدة:** لا sprint يتجاوز 10 أيام — إن احتاج أكثر، نقسمه.

---

## 6. جاهزية الاستضافة (Production-ready checklist)

- [ ] `docker-compose.prod.yml` منفصل عن `local`
- [ ] Environment variables via `.env` — لا secrets في Git
- [ ] Nginx reverse proxy + Certbot SSL
- [ ] PostgreSQL backups يومية
- [ ] Health endpoints: `/health` · `/ready`
- [ ] Structured logging (JSON)
- [ ] GitHub Actions: lint · build · test · deploy
- [ ] Staging + Production environments

**الاستضافة المحلية الآن:** `infra/local/` — انظر `06-LOCAL-DEV-SETUP.md`

---

## 7. المنصات المتعددة (بعد اكتمال Web)

| المنصة | التقنية | التوقيت | الربط |
|--------|---------|---------|-------|
| Web | Next.js 15 | الآن | — |
| PWA | next-pwa / Serwist | Sprint 8 | نفس codebase |
| iOS | Swift + SwiftUI | بعد S9 | REST API + Keychain auth |
| Android | Kotlin + Jetpack Compose | بعد S9 | REST API |
| Windows Desktop | Tauri 2 أو Electron | بعد Mobile | WebView + native shell |

**مبدأ:** API واحد — كل المنصات تستهلك `apps/api` — لا منطق أعمال في التطبيقات الأصلية.

التفاصيل: `03-MULTI-PLATFORM-ROADMAP.md`

---

## 8. الدفع الإلكتروني

التفاصيل والمعلومات المطلوبة منك: `04-PAYMENT-APIS-REQUIREMENTS.md`

**بوابات مخططة:**
- Stripe (دولي)
- Paymob (مصر / MENA)
- Fawry (مصر)
- Tap Payments (GCC)
- Manual bank transfer (MVP)
- Apple Pay / Google Pay (عبر البوابة)

---

## 9. ما لا يمكنني تنفيذه بدونك

انظر `05-LIMITATIONS-AND-USER-INPUT.md` — قائمة صريحة.

---

## 10. هيكل الملفات (منظم — لا خلط عشوائي)

```text
E:\Matrix\
├── apps/                    # تطبيقات قابلة للتشغيل
│   ├── web-marketing/       # الموقع العام الاحترافي
│   ├── web-platform/        # Control Center
│   ├── web-erp/             # ERP UI
│   └── api/                 # NestJS backend
├── packages/                # مشترك فقط
│   ├── ui/                  # Design system
│   ├── i18n/
│   ├── contracts/
│   └── validation/
├── infra/
│   ├── local/               # سيرفر محلي (Docker)
│   └── production/          # قوالب VPS (لاحقًا)
└── docs/
    └── specs/               # خطط مرقمة 01–06
```

---

## 11. الخطوة التالية

1. **أنت:** املأ `04-PAYMENT-APIS-REQUIREMENTS.md`
2. **أنا:** Sprint S0 — تشغيل `pnpm infra:up` + بداية `web-marketing` الاحترافي
3. **بعد S1:** مراجعة الموقع قبل Control Center

---

*مرتبط بـ: `IMPLEMENTATION-PLAN.md` · `AGENTS.md` · وثائق n8n · ELY*
