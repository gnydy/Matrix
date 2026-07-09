# خطة تنفيذ n8n — Matrix / AllInAll ERP

> **المرجع الكامل:** [`docs/specs/n8n-automation.md`](./n8n-automation.md)  
> **التوقيت:** بعد اكتمال MVP-1 (Leads + Quotes + Projects + Payments APIs)  
> **المبدأ:** n8n طبقة أتمتة — **مصدر الحقيقة = Matrix API فقط**

---

## 1. متى نبدأ n8n؟

| الشرط | الحالة المطلوبة |
|-------|-----------------|
| Events API جاهزة | `POST /automation/events` + emit من الخدمات |
| `automation_logs` table | Prisma migration |
| Webhook security | HMAC signature + headers |
| Leads API | `GET/PATCH /internal/leads` |
| Automation token | `MATRIX_AUTOMATION_TOKEN` في n8n |

**لا تثبّت n8n قبل:** Auth + Leads CRUD + event emission عند `lead.created`.

---

## 2. البنية التحتية المطلوبة في Matrix (قبل n8n)

### 2.1 جدول `automation_logs`

```prisma
model AutomationLog {
  id            String   @id @default(cuid())
  eventName     String
  eventId       String   @unique
  workflowName  String?
  status        String   // pending | running | success | failed
  inputPayload  Json?
  outputPayload Json?
  errorMessage  String?
  retryCount    Int      @default(0)
  startedAt     DateTime @default(now())
  finishedAt    DateTime?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

### 2.2 جدول `domain_events` (اختياري — للـ idempotency)

```prisma
model DomainEvent {
  id        String   @id @default(cuid())
  eventId   String   @unique
  eventName String
  payload   Json
  emittedAt DateTime @default(now())
  processed Boolean  @default(false)
}
```

### 2.3 Event Emitter Service (في `apps/api`)

كل عملية مهمة تستدعي:

```typescript
await eventEmitter.emit('platform.lead.created', { leadId, leadNumber, ... });
// → يحفظ domain_event
// → يرسل webhook لـ n8n مع signature
// → يسجل automation_log (status: pending)
```

### 2.4 Headers الصادرة لـ n8n

```text
X-Matrix-Event: platform.lead.created
X-Matrix-Event-Id: evt_abc123
X-Matrix-Signature: hmac-sha256(...)
X-Matrix-Timestamp: 1719300000
```

### 2.5 API Endpoints (من الوثيقة)

| Method | Path | الغرض |
|--------|------|-------|
| POST | `/automation/events` | استقبال/تسجيل حدث |
| GET | `/automation/events/:id` | حالة حدث |
| POST | `/automation/events/:id/complete` | n8n أكمل بنجاح |
| POST | `/automation/events/:id/fail` | n8n فشل |
| POST | `/automation/logs` | تسجيل log |
| GET | `/automation/logs` | قراءة logs |

---

## 3. خريطة الأحداث (Event Catalog)

### Platform Events

| Event | يُصدَر من | Workflows المرتبطة |
|-------|-----------|-------------------|
| `platform.lead.created` | LeadService.create | 9.1 New Lead Notification |
| `platform.lead.status_changed` | LeadService.updateStatus | 9.3 Lead Qualified Follow-up |
| `platform.quote.sent` | QuoteService.send | 10.1 Quote Sent |
| `platform.quote.accepted` | QuoteService.accept | 10.3 Quote Accepted |
| `platform.customer.created` | CustomerService.create | 11.1 Customer Onboarding |
| `platform.project.created` | ProjectService.create | 12.1 Project Created |
| `platform.payment_request.created` | PaymentService.create | 13.1 Payment Request Created |
| `platform.payment.overdue` | PaymentService (cron/worker) | 13.3 Payment Overdue |

### ERP Events (مرحلة لاحقة)

| Event | Workflows |
|-------|-----------|
| `erp.inventory.low_stock` | 14.1 Low Stock Alert |
| `erp.inventory.stock_movement_created` | 14.2 Stock Anomaly |
| `erp.sales.invoice_created` | 15.1 Sales Invoice |
| `erp.sales.order_created` | 15.3 Credit Limit |
| `erp.purchase.request_created` | 16.1 Purchase Approval |
| `erp.accounting.journal_entry_created` | 17.1 Journal Approval |
| `erp.hr.leave_requested` | 18.1 Leave Request |

### ELY Events

| Event | Workflows |
|-------|-----------|
| `ely.knowledge.pending_review` | 21.1 Knowledge Review |
| `ely.feedback.negative` | 21.2 Bad Feedback |

### Support Events

| Event | Workflows |
|-------|-----------|
| `support.ticket.created` | 19.1 New Support Request |

---

## 4. جدول Workflows الكامل (35 workflow)

| # | الاسم | Trigger | النوع | المرحلة |
|---|-------|---------|-------|---------|
| 9.1 | New Lead Notification | `platform.lead.created` | Event | n8n-1 |
| 9.2 | Lead Not Contacted Reminder | Cron hourly | Cron | n8n-1 |
| 9.3 | Lead Qualified Follow-up | `platform.lead.status_changed` | Event | n8n-1 |
| 10.1 | Quote Sent | `platform.quote.sent` | Event | n8n-1 |
| 10.2 | Quote Follow-up Reminder | Cron daily | Cron | n8n-1 |
| 10.3 | Quote Accepted | `platform.quote.accepted` | Event | n8n-2 |
| 11.1 | New Customer Onboarding | `platform.customer.created` | Event | n8n-2 |
| 11.2 | Customer Missing Data | Cron daily | Cron | n8n-2 |
| 12.1 | Project Created | `platform.project.created` | Event | n8n-1 |
| 12.2 | Project Milestone Overdue | Cron daily | Cron | n8n-1 |
| 12.3 | Weekly Project Report | Cron weekly | Cron | n8n-2 |
| 13.1 | Payment Request Created | `platform.payment_request.created` | Event | n8n-1 |
| 13.2 | Payment Due Soon | Cron daily | Cron | n8n-1 |
| 13.3 | Payment Overdue | Cron daily | Cron | n8n-1 |
| 14.1 | Low Stock Alert | `erp.inventory.low_stock` / Cron 6h | Event+Cron | n8n-2 |
| 14.2 | Stock Movement Anomaly | `erp.inventory.stock_movement_created` | Event | n8n-3 |
| 15.1 | Sales Invoice Created | `erp.sales.invoice_created` | Event | n8n-2 |
| 15.2 | Daily Sales Summary | Cron daily 22:00 | Cron | n8n-2 |
| 15.3 | Customer Over Credit Limit | `erp.sales.order_created` | Event | n8n-3 |
| 16.1 | Purchase Request Approval | `erp.purchase.request_created` | Event | n8n-3 |
| 16.2 | Supplier Invoice Due | Cron daily | Cron | n8n-3 |
| 17.1 | Journal Entry Approval | `erp.accounting.journal_entry_created` | Event | n8n-3 |
| 17.2 | Daily Accounting Check | Cron daily | Cron | n8n-3 |
| 18.1 | Leave Request Created | `erp.hr.leave_requested` | Event | n8n-3 |
| 18.2 | Attendance Missing | Cron daily | Cron | n8n-3 |
| 18.3 | Payroll Ready | Cron monthly | Cron | n8n-3 |
| 19.1 | New Support Request | `support.ticket.created` | Event | n8n-2 |
| 19.2 | Support SLA Breach | Cron hourly | Cron | n8n-2 |
| 20.1 | Daily Owner Report | Cron daily | Cron | n8n-2 |
| 20.2 | Weekly Business Report | Cron weekly | Cron | n8n-2 |
| 21.1 | Knowledge Needs Review | `ely.knowledge.pending_review` | Event | n8n-3 |
| 21.2 | ELY Bad Feedback | `ely.feedback.negative` | Event | n8n-3 |
| 21.3 | Weekly ELY Quality Report | Cron weekly | Cron | n8n-3 |
| 22.1 | Database Backup | Cron daily | Cron | n8n-3 |
| 22.2 | Files Backup | Cron daily | Cron | n8n-3 |
| 23.1 | API Health Check | Cron 5min | Cron | n8n-1 |
| 23.2 | Failed Workflow Alert | n8n error trigger | Internal | n8n-1 |

---

## 5. مراحل تنفيذ n8n (4 مراحل)

### المرحلة n8n-1 — الأساس + Platform (أسبوع 1 بعد MVP-1)

**البنية:**
- [ ] n8n server (Docker على VPS أو n8n cloud)
- [ ] `MATRIX_AUTOMATION_TOKEN` + `MATRIX_WEBHOOK_SECRET`
- [ ] Automation logs API
- [ ] Event emitter في Lead/Quote/Project/Payment services
- [ ] Webhook signature verification node (n8n Function)

**Workflows (7):**
1. New Lead Notification (9.1)
2. Lead Not Contacted Reminder (9.2)
3. Quote Sent (10.1)
4. Quote Follow-up Reminder (10.2)
5. Payment Due Soon (13.2)
6. Project Milestone Overdue (12.2)
7. API Health Check (23.1) + Failed Workflow Alert (23.2)

**قنوات الإشعار في هذه المرحلة:** Email (SMTP) فقط — WhatsApp لاحقًا.

### المرحلة n8n-2 — توسع Platform + ERP خفيف (أسبوع 2–3)

**Workflows (10):**
- Quote Accepted (10.3) — يستدعي convert customer + create project عبر API
- Customer Onboarding (11.1) + Missing Data (11.2)
- Project Created (12.1) + Weekly Report (12.3)
- Payment Request Created (13.1) + Payment Overdue (13.3)
- Low Stock Alert (14.1)
- Daily Sales Summary (15.2)
- Support workflows (19.1, 19.2)
- Daily Owner Report (20.1) + Weekly Business (20.2)

### المرحلة n8n-3 — ERP كامل + HR + ELY + Backups

**Workflows (15):** باقي ERP + HR + Accounting + ELY + Backups

### المرحلة n8n-4 — تكاملات متقدمة

- WhatsApp API
- Email templates احترافية
- Multi-tenant automation settings
- Google Sheets sync
- Advanced branching

---

## 6. قالب Workflow موحّد (كل workflow يتبعه)

```text
1. Trigger (Webhook / Cron)
2. Idempotency Check
   → GET /automation/events/:eventId OR check automation_logs
   → if already processed → STOP
3. Validate signature (webhooks only)
4. Main Logic (HTTP Request to Matrix API / External)
5. On Success
   → POST /automation/logs (status: success)
   → POST /automation/events/:id/complete
6. On Error
   → Retry (max 3, exponential backoff)
   → Fallback (Email if WhatsApp fails)
   → POST /automation/events/:id/fail
   → Notify internal (Telegram/Email)
```

---

## 7. ترتيب بناء API لدعم n8n

| الترتيب | API | يخدم Workflows |
|---------|-----|----------------|
| N1 | Automation module (logs, events) | الكل |
| N2 | `GET /internal/leads?status=&olderThan=` | 9.2 |
| N3 | `POST /internal/leads/:id/notes` | 9.3 |
| N4 | `POST /internal/quotes/:id/send` | 10.1 |
| N5 | `GET /internal/quotes?status=sent&noResponseSince=48h` | 10.2 |
| N6 | Quote accept → customer + project APIs | 10.3 |
| N7 | `GET /internal/projects/overdue` | 12.2 |
| N8 | `POST /internal/projects/:id/tasks` | 12.1 |
| N9 | Payment status PATCH | 13.3 |
| N10 | `GET /erp/inventory/low-stock` | 14.1 |
| N11 | `GET /erp/sales/daily-summary` | 15.2 |
| N12 | `GET /erp/accounting/daily-check` | 17.2 |
| N13 | `GET /erp/hr/attendance-missing` | 18.2 |

---

## 8. مهام Matrix API قبل كل workflow (micro-tasks)

### TASK-N8N-001: Automation module skeleton
- Prisma: `AutomationLog`, `DomainEvent`
- `POST/GET /automation/logs`
- Build + test

### TASK-N8N-002: Event emitter service
- `EventEmitterService.emit(name, payload)`
- HMAC signature generation
- Webhook POST to `N8N_WEBHOOK_URL`

### TASK-N8N-003: Wire `platform.lead.created`
- في `LeadService.create()` بعد الحفظ
- اختبار: إنشاء lead → يظهر في automation_logs

### TASK-N8N-004: n8n Docker + workflow 9.1
- docker-compose service: n8n
- workflow JSON export في `infra/n8n/workflows/`
- اختبار end-to-end

### TASK-N8N-005 → N8N-035: workflow واحد لكل مهمة

**قاعدة:** workflow واحد = مهمة واحدة = اختبار واحد.

---

## 9. هيكل الملفات المقترح

```
infra/
├── n8n/
│   ├── docker-compose.n8n.yml
│   ├── .env.example
│   └── workflows/
│       ├── 09-01-new-lead-notification.json
│       ├── 09-02-lead-not-contacted.json
│       └── ...
apps/api/src/
├── automation/
│   ├── automation.module.ts
│   ├── automation.controller.ts
│   ├── automation-log.service.ts
│   ├── event-emitter.service.ts
│   └── webhook-signature.service.ts
```

---

## 10. Environment Variables

### Matrix API (.env)

```text
N8N_WEBHOOK_BASE_URL=https://n8n.example.com/webhook
N8N_WEBHOOK_SECRET=...
MATRIX_AUTOMATION_TOKEN=...   # للـ n8n يستدعي API
```

### n8n (.env)

```text
MATRIX_API_BASE_URL=https://api.matrix.example.com
MATRIX_AUTOMATION_TOKEN=...
MATRIX_WEBHOOK_SECRET=...
SMTP_HOST=...
SMTP_PORT=...
SMTP_USER=...
SMTP_PASS=...
```

---

## 11. Error Handling الموحّد

```text
WhatsApp فشل → retry ×2 → Email → internal task → log failure
API timeout → retry ×3 (5s, 15s, 45s) → fail event → alert
Duplicate eventId → skip silently → log "skipped_duplicate"
```

---

## 12. Idempotency — التنفيذ

1. Matrix يولّد `eventId` فريد (cuid) لكل حدث
2. n8n أول node: HTTP GET `/automation/logs?eventId=X`
3. إذا `status=success` موجود → Stop workflow
4. كل callback يحمل نفس `eventId`

---

## 13. الربط مع خطة المشروع الرئيسية

```text
MVP-1 (أسابيع 1–4)
  → Leads, Quotes, Projects, Payments APIs
  → TASK-N8N-001 إلى N8N-003

n8n-1 (أسبوع 5)
  → n8n server + 7 workflows أساسية

MVP-2 ERP (أسابيع 6–10)
  → ERP events emission
  → n8n-2 + n8n-3

MVP-3 + ELY
  → n8n-3 ELY workflows
  → n8n-4 integrations
```

---

## 14. Definition of Done — لكل Workflow

- [ ] Trigger واضح ومُوثّق
- [ ] Idempotency check
- [ ] Signature validation (إن webhook)
- [ ] Retry + error branch
- [ ] `POST /automation/logs` عند النجاح/الفشل
- [ ] لا secrets في workflow JSON (credentials فقط)
- [ ] اختبار يدوي + تسجيل في sprint-log
- [ ] JSON محفوظ في `infra/n8n/workflows/`

---

## 15. قواعد للمطور / Agent

1. **لا تبني 35 workflow دفعة واحدة** — واحد لكل TASK
2. **لا تعدّل DB من n8n** — Matrix API فقط
3. **كل تعديل في Matrix يرسل event** قبل بناء workflow يعتمد عليه
4. **اختبر بدون WhatsApp أولًا** — Email fallback
5. **صدّر workflow JSON** إلى Git للمراجعة

---

*آخر تحديث: 2025-06-25 — مدمج من وثيقة n8n الكاملة*
