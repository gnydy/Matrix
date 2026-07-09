---
title: "Matrix / AllInAll ERP"
subtitle: "كتالوج المشروع — توثيق التخطيط والإنجازات"
version: "1.0.0"
date: "25 يونيو 2025"
author: "فريق Matrix — جلسة التخطيط الأولى"
status: "مرحلة التخطيط — لم يبدأ التنفيذ البرمجي بعد"
---

# Matrix / AllInAll ERP
## كتالوج المشروع — Project Catalog

| | |
|---|---|
| **الإصدار** | 1.0.0 |
| **التاريخ** | 25 يونيو 2025 |
| **الحالة** | مرحلة التخطيط والتوثيق |
| **المنصة** | Matrix — منتج AllInAll ERP |
| **نوع المستند** | كتالوج توثيقي احترافي |

---

## فهرس المحتويات

1. [ملخص تنفيذي](#1-ملخص-تنفيذي)
2. [نطاق المشروع](#2-نطاق-المشروع)
3. [الوثائق المصدرية](#3-الوثائق-المصدرية)
4. [ما تم إنجازه في هذه المرحلة](#4-ما-تم-إنجازه-في-هذه-المرحلة)
5. [هيكل الملفات المُنشأة](#5-هيكل-الملفات-المُنشأة)
6. [الخطة الرئيسية للتنفيذ](#6-الخطة-الرئيسية-للتنفيذ)
7. [تقسيم المراحل (A → G)](#7-تقسيم-المراحل)
8. [موديولات النظام — الفهرس الكامل](#8-موديولات-النظام)
9. [خطة MVP الرسمية](#9-خطة-mvp-الرسمية)
10. [خطة ELY — الذكاء الاصطناعي](#10-خطة-ely)
11. [خطة n8n — الأتمتة](#11-خطة-n8n)
12. [قواعد التنفيذ الآمن (AGENTS)](#12-قواعد-التنفيذ-الآمن)
13. [جدول التنفيذ الزمني](#13-جدول-التنفيذ-الزمني)
14. [المهام القادمة](#14-المهام-القادمة)
15. [معايير الجودة والإنجاز](#15-معايير-الجودة-والإنجاز)

---

## 1. ملخص تنفيذي

تم في هذه المرحلة **تحليل وتوثيق مشروع Matrix / AllInAll ERP بالكامل** دون البدء في كتابة كود التطبيق بعد. الهدف كان بناء **أساس تخطيطي احترافي** يمنع التنفيذ العشوائي، ويحمي السيرفر والبيئة التطويرية من الضغط، ويقسّم مشروعًا ضخمًا إلى مهام صغيرة قابلة للتنفيذ والمراجعة.

**Matrix** ليست موقعًا تعريفيًا فقط، بل منصة متكاملة تشمل:

- موقع عام لاستقبال الطلبات
- لوحة تحكم داخلية (Matrix Control Center)
- نظام ERP متعدد الشركات والفروع
- طبقة ذكاء اصطناعي (ELY)
- طبقة أتمتة (n8n)

**القرار المعماري الرئيسي:** Monorepo بـ Next.js + NestJS + Prisma + PostgreSQL، مع دعم عربي/إنجليزي وRTL/LTR من البداية.

---

## 2. نطاق المشروع

### 2.1 الطبقات الأربع

| # | الطبقة | التطبيق | الوظيفة |
|---|--------|---------|---------|
| 1 | الموقع العام | `web-marketing` | عرض الخدمات واستقبال الطلبات |
| 2 | لوحة التحكم | `web-platform` | إدارة Leads, Customers, Quotes, Projects |
| 3 | ERP | `web-erp` | محاسبة، مخزون، مبيعات، مشتريات، HR |
| 4 | Backend | `api` + `worker` | APIs، Auth، Events، Queues |

### 2.2 التقنيات المقررة

| الطبقة | التقنية |
|--------|---------|
| Frontend | Next.js App Router · React · TypeScript · Tailwind |
| Backend | NestJS · Prisma ORM · PostgreSQL · Redis |
| Auth | JWT · bcrypt/argon2 · RBAC · Tenant isolation |
| البنية | Docker Compose · Nginx · PM2 |
| الأتمتة | n8n (خارجي — عبر API فقط) |
| الذكاء | ELY — RAG + Knowledge Base + Tools |

### 2.3 سير العمل التجاري

```
زائر الموقع
    ↓
نموذج طلب (Lead: AIA-2026-XXXXXX)
    ↓
Matrix Control Center — مراجعة Sales
    ↓
عرض سعر (Quote) → إرسال → قبول
    ↓
عميل (Customer) + مشروع تنفيذ (Project)
    ↓
Tenant ERP + تدريب + تسليم
    ↓
اشتراك ودعم مستمر
```

---

## 3. الوثائق المصدرية

تمت قراءة وتحليل **أربع وثائق PDF** موجودة في مجلد المشروع:

| # | الوثيقة | الصفحات | المحتوى |
|---|---------|---------|---------|
| 1 | وثيقة المتطلبات البرمجية التفصيلية | 23 | النظام الكامل — موديولات، APIs، MVP |
| 2 | AGENTS.md — قواعد تنفيذ Cursor | 12 | قواعد التنفيذ الآمن للمطور/Agent |
| 3 | ELY البرمجية | 15 | طبقة الذكاء الاصطناعي — RAG، Tools، مراحل |
| 4 | n8n Automation | 29 قسمًا | الأتمتة — 35 workflow، Events، Security |

**إجراء إضافي:** استخراج نصوص PDF إلى `docs/extracted/` لسهولة المراجعة والبحث.

---

## 4. ما تم إنجازه في هذه المرحلة

### 4.1 التحليل والتخطيط

| الإنجاز | التفاصيل |
|---------|----------|
| قراءة 4 وثائق مصدرية | تحليل كامل للمتطلبات |
| استخراج نصوص PDF | 4 ملفات `.txt` في `docs/extracted/` |
| خطة تنفيذ رئيسية | 20 قسمًا — 611+ سطر |
| خطة n8n تفصيلية | 35 workflow — 4 مراحل |
| حفظ وثيقة n8n كاملة | بعد تزويد النص من المستخدم |
| قوائم تتبع | module-checklist · n8n-workflows-checklist |
| سجل Sprint | sprint-log · error-analysis |

### 4.2 القرارات المعمارية المتخذة

1. **Monorepo** بـ pnpm workspaces
2. **MVP على 3 مراحل** — لا ERP قبل المنصة الداخلية
3. **ELY و n8n مؤجلان** حتى استقرار API
4. **مهمة واحدة = 1–5 ملفات** كحد أقصى لكل جلسة Agent
5. **مصدر الحقيقة = Matrix API** — n8n لا يكتب في DB مباشرة

### 4.3 ما لم يُنفَّذ بعد (عمدًا)

- لا كود تطبيق (`apps/` غير موجود)
- لا قاعدة بيانات مهيأة
- لا Docker compose للمشروع
- لا commits git

**السبب:** الالتزام بمبدأ «خطط أولًا، نفّذ على مراحل صغيرة».

---

## 5. هيكل الملفات المُنشأة

```
E:\Matrix\
├── AGENTS.md — Cursor Execution Rules...pdf      (مصدر)
├── ELY البرمجية.pdf                               (مصدر)
├── وثيقة n8n Automation...pdf                     (مصدر)
├── وثيقة المتطلبات البرمجية...pdf                 (مصدر)
└── docs/
    ├── IMPLEMENTATION-PLAN.md          ← الخطة الرئيسية الشاملة
    ├── catalog/
    │   ├── PROJECT-CATALOG.md          ← هذا الكتالوج
    │   └── Matrix-Project-Catalog.pdf  ← نسخة PDF
    ├── extracted/                      ← نصوص PDF المستخرجة
    │   ├── AGENTS.md....txt
    │   ├── ELY البرمجية.txt
    │   ├── وثيقة n8n....txt
    │   └── وثيقة المتطلبات....txt
    ├── progress/
    │   ├── sprint-log.md               ← سجل التقدم
    │   ├── error-analysis.md           ← سجل الأخطاء
    │   ├── module-checklist.md         ← تتبع الموديولات
    │   └── n8n-workflows-checklist.md  ← تتبع workflows
    └── specs/
        ├── n8n-automation.md           ← وثيقة n8n الكاملة
        └── N8N-EXECUTION-PLAN.md       ← خطة تنفيذ n8n
```

---

## 6. الخطة الرئيسية للتنفيذ

المرجع الكامل: `docs/IMPLEMENTATION-PLAN.md`

### مبدأ التنفيذ

```
Analyze → Plan → Change small part → Run checks → Fix errors → Document
```

### ترتيب بناء أي موديول

```
1. Types / contracts
2. Validation (Zod)
3. Database schema (Prisma)
4. Service layer
5. API endpoints
6. UI pages
7. Permissions (RBAC)
8. Audit log
9. Tests + build
10. Documentation
```

---

## 7. تقسيم المراحل

| المرحلة | الاسم | المحتوى | التوقيت |
|---------|-------|---------|---------|
| **A** | الأساس + APIs | Auth, Tenant, Lead API, Automation infra | أسبوع 1–2 |
| **B** | الموقع العام | 13 صفحة · نماذج طلبات · i18n | أسبوع 2–3 |
| **C** | Control Center | Leads → Customers → Quotes → Projects | أسبوع 3–5 |
| **D** | ERP | Core → Inventory → Sales → Purchases → Accounting → HR | أسبوع 6–10 |
| **E** | التقارير | Dashboard · Matrix reports · ERP reports | أسبوع 10–11 |
| **F** | ELY | Knowledge · RAG Chat · Tools · Evaluation | بعد C |
| **G** | n8n | 35 workflow · Events · Webhooks | أسبوع 5+ |

---

## 8. موديولات النظام

### 8.1 Platform (Matrix)

| # | الموديول | الوصف |
|---|----------|-------|
| 1 | Web Marketing | 13 صفحة — بدون أسعار علنية |
| 2 | Public Request Intake | 7 أنواع طلبات · حماية anti-bot |
| 3 | Matrix Control Center | 17 شاشة إدارية |
| 4 | Leads | 8 حالات · 6 أفعال |
| 5 | Customers | SaaS / Dedicated / On-premise |
| 6 | Quotes | Builder · PDF لاحقًا · Audit |
| 7 | Projects | Milestones · Tasks · 8 حالات |
| 8 | Subscriptions | Plans · Entitlements |
| 9 | Payments | يدوي في البداية — بدون checkout |
| 10 | Auth | JWT · RBAC · Tenant · Login audit |
| 11 | Audit Log | كل العمليات الحساسة |
| 12 | Notifications | Email · In-app · WhatsApp لاحقًا |
| 13 | Reports | Matrix + ERP |

### 8.2 ERP (AllInAll)

| # | الموديول | الوظائف الرئيسية |
|---|----------|------------------|
| 14 | ERP Core | Tenant · Company · Branch · Fiscal year |
| 15 | Accounting | COA · Journal · P&L · Balance sheet |
| 16 | Inventory | Products · Warehouses · Movements |
| 17 | Sales | Quote → Order → Invoice → Payment |
| 18 | Purchases | Request → PO → Supplier invoice |
| 19 | HR | Employees · Attendance · Leaves |
| 20 | Debts | Receivables · Payables |

### 8.3 ELY (11 موديول فرعي)

Knowledge Catalog · Document Ingestion · Semantic Search · RAG Answering · Chat · Tool Calling · Sales assistant · Projects assistant · ERP assistant · Evaluation · Feedback

### 8.4 n8n (35 workflow)

Leads (3) · Quotes (3) · Customers (2) · Projects (3) · Payments (3) · Inventory (2) · Sales (3) · Purchases (2) · Accounting (2) · HR (3) · Support (2) · Reports (2) · ELY (3) · Backups (2) · Monitoring (2)

---

## 9. خطة MVP الرسمية

### MVP-1 — الأولوية القصوى (أسابيع 1–4)

- [ ] موقع عربي/إنجليزي + نماذج طلبات
- [ ] API حفظ Lead (`AIA-YYYY-XXXXXX`)
- [ ] Matrix Control Center
- [ ] Leads · Customers · Quotes · Projects · Payments (أساسي)
- [ ] Auth · Audit log

### MVP-2 — ERP (أسابيع 6–10)

- [ ] ERP Core (multi company/branch)
- [ ] Inventory · Sales · Purchases · Accounting · HR

### MVP-3 — التوسع (أسابيع 11+)

- [ ] Subscriptions · Notifications · Reports · PDF
- [ ] Tenant provisioning · Advanced permissions

---

## 10. خطة ELY

**النهج:** RAG + Knowledge Base + Tools — ليس تدريب نموذج من الصفر.

| Phase | المحتوى |
|-------|---------|
| ELY-1 | Knowledge Catalog · Upload · Approval · Basic Chat |
| ELY-2 | مساعد Leads/Quotes/Projects + Tools محدودة |
| ELY-3 | ERP assistant |
| ELY-4 | Evaluation · Training · n8n |
| ELY-5 | Predictive analytics |

**قواعد:** نفس صلاحيات النظام · لا كتابة DB مباشرة · Actions حساسة تحتاج Approval

---

## 11. خطة n8n

**المبدأ:** n8n طبقة أتمتة — Matrix API = مصدر الحقيقة.

### Event Naming

```
domain.entity.action
مثال: platform.lead.created · erp.inventory.low_stock
```

### مراحل n8n

| المرحلة | Workflows | أمثلة |
|---------|-----------|-------|
| n8n-1 | 7 | Lead notification · Quote sent · Health check |
| n8n-2 | 14 | Quote accepted · Onboarding · Owner report |
| n8n-3 | 15 | HR · Accounting · ELY · Backups |
| n8n-4 | 4 | WhatsApp · Multi-tenant settings |

### Webhook Security

```
X-Matrix-Event · X-Matrix-Event-Id · X-Matrix-Signature · X-Matrix-Timestamp
```

---

## 12. قواعد التنفيذ الآمن

من وثيقة AGENTS.md — **إلزامية لكل جلسة تطوير:**

| القاعدة | التفاصيل |
|---------|----------|
| لا مهمة كبيرة دفعة واحدة | قسّم إلى micro-tasks |
| 1–5 ملفات لكل مهمة | قابل للمراجعة |
| build بعد كل تعديل | `pnpm --filter <app> build` |
| لا `any` بدون تعليق | TypeScript strict |
| لا PII في logs | mask الهاتف والبريد |
| soft delete فقط | لا حذف نهائي إلا Owner |
| Tenant isolation | كل query مفلتر |
| سجل الأخطاء | `docs/progress/error-analysis.md` |

---

## 13. جدول التنفيذ الزمني

| الأسبوع | المحتوى | المخرجات |
|---------|---------|----------|
| 1 | Monorepo · Auth · Lead API | `/health` · POST login · POST /public/leads |
| 2 | web-marketing · i18n | Home · Request form · Success page |
| 3–4 | web-platform · Leads · Customers | Control Center يعمل |
| 5 | Quotes · Projects · n8n-1 | أول 7 workflows |
| 6–8 | ERP Core · Inventory · Sales | ERP MVP |
| 9–10 | Purchases · Accounting · HR | ERP كامل أساسي |
| 11+ | Reports · ELY · n8n-2/3 | منصة متكاملة |

---

## 14. المهام القادمة

عند البدء في التنفيذ البرمجي:

| المهمة | الوصف |
|--------|-------|
| **TASK-001** | Initialize monorepo (pnpm + packages/config + docker-compose) |
| **TASK-002** | NestJS API skeleton + Prisma + `/health` |
| **TASK-003** | User/Role schema + first migration |
| **TASK-004** | Auth login endpoint |
| **TASK-005** | Lead schema + `POST /public/leads` |

**للبدء:** قل «ابدأ TASK-001»

---

## 15. معايير الجودة والإنجاز

### Definition of Done — كل مهمة

- [ ] الكود يعمل
- [ ] Build ناجح
- [ ] لا TypeScript errors
- [ ] الصلاحيات محترمة
- [ ] لا secrets مكشوفة
- [ ] تحديث sprint-log
- [ ] تحديث هذا الكتالوج (PDF جديد) عند كل مرحلة

### سياسة الكتالوج PDF

**كل ملف `.md` داخل `docs/` له نسخة PDF بجانبه** (نفس الاسم).

إعادة توليد الكل:

```bash
cd docs && node build-all-pdfs.js
```

ملف واحد:

```bash
node docs/build-all-pdfs.js catalog/PROJECT-CATALOG.md
```

الفهرس: `docs/pdf-manifest.json`

---

## ملحق أ — الأدوار والصلاحيات

| الدور | الوصول |
|-------|--------|
| Owner | كل شيء |
| Admin | مستخدمين · طلبات · عملاء |
| Sales | Leads · Quotes |
| Project Manager | Projects · Tasks |
| Accountant | مدفوعات · فواتير |
| HR Manager | HR فقط |
| Client Owner | شركته فقط |
| Client Employee | موديولات مصرح بها |

---

## ملحق ب — API Endpoints (مرجع)

### Public
`POST /public/leads` · `/public/contact` · `/public/quote-request`

### Internal (أهمها)
Leads · Customers · Quotes · Projects · Payments · Users

### Automation (لـ n8n)
`POST /automation/events` · `POST /automation/logs`

### ERP
`/erp/companies` · `/erp/products` · `/erp/sales/orders` · `/erp/accounting/journal-entries`

### ELY (لاحقًا)
`/ely/knowledge` · `/ely/chat` · `/ely/documents`

---

## ملحق ج — سجل التحديثات

| الإصدار | التاريخ | التغيير |
|---------|---------|---------|
| 1.0.0 | 25 يونيو 2025 | إنشاء الكتالوج — مرحلة التخطيط الكاملة |

---

**Matrix / AllInAll ERP — Project Catalog v1.0.0**

*هذا المستند يُحدَّث مع كل مرحلة تنفيذ. الإصدار التالي سيُضاف عند اكتمال TASK-001.*

---

© 2025 Matrix Platform — وثيقة داخلية للتخطيط والتنفيذ
