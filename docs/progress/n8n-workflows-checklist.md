# n8n Workflows Checklist — Matrix / AllInAll

> المرجع: [`N8N-EXECUTION-PLAN.md`](../specs/N8N-EXECUTION-PLAN.md)

**معيار الاكتمال:** Trigger · Idempotency · Error branch · Automation log · JSON في `infra/n8n/workflows/`

---

## البنية التحتية (قبل أي workflow)

| # | المهمة | الحالة |
|---|--------|--------|
| INF-1 | Prisma: `automation_logs` + `domain_events` | ⬜ |
| INF-2 | Automation API module | ⬜ |
| INF-3 | EventEmitterService + HMAC | ⬜ |
| INF-4 | n8n Docker / server | ⬜ |
| INF-5 | Credentials (SMTP, Matrix token) | ⬜ |

---

## n8n-1 — Platform أساسي (7)

| # | Workflow | Trigger | الحالة |
|---|----------|---------|--------|
| 9.1 | New Lead Notification | `platform.lead.created` | ⬜ |
| 9.2 | Lead Not Contacted Reminder | Cron hourly | ⬜ |
| 10.1 | Quote Sent | `platform.quote.sent` | ⬜ |
| 10.2 | Quote Follow-up Reminder | Cron daily | ⬜ |
| 12.2 | Project Milestone Overdue | Cron daily | ⬜ |
| 13.2 | Payment Due Soon | Cron daily | ⬜ |
| 23.1 | API Health Check | Cron 5min | ⬜ |
| 23.2 | Failed Workflow Alert | n8n error | ⬜ |

---

## n8n-2 — Platform + ERP خفيف (12)

| # | Workflow | Trigger | الحالة |
|---|----------|---------|--------|
| 9.3 | Lead Qualified Follow-up | `platform.lead.status_changed` | ⬜ |
| 10.3 | Quote Accepted | `platform.quote.accepted` | ⬜ |
| 11.1 | New Customer Onboarding | `platform.customer.created` | ⬜ |
| 11.2 | Customer Missing Data | Cron daily | ⬜ |
| 12.1 | Project Created | `platform.project.created` | ⬜ |
| 12.3 | Weekly Project Report | Cron weekly | ⬜ |
| 13.1 | Payment Request Created | `platform.payment_request.created` | ⬜ |
| 13.3 | Payment Overdue | Cron daily | ⬜ |
| 14.1 | Low Stock Alert | event / Cron 6h | ⬜ |
| 15.2 | Daily Sales Summary | Cron daily 22:00 | ⬜ |
| 19.1 | New Support Request | `support.ticket.created` | ⬜ |
| 19.2 | Support SLA Breach | Cron hourly | ⬜ |
| 20.1 | Daily Owner Report | Cron daily | ⬜ |
| 20.2 | Weekly Business Report | Cron weekly | ⬜ |

---

## n8n-3 — ERP + HR + ELY + Ops (16)

| # | Workflow | Trigger | الحالة |
|---|----------|---------|--------|
| 14.2 | Stock Movement Anomaly | `erp.inventory.stock_movement_created` | ⬜ |
| 15.1 | Sales Invoice Created | `erp.sales.invoice_created` | ⬜ |
| 15.3 | Customer Over Credit Limit | `erp.sales.order_created` | ⬜ |
| 16.1 | Purchase Request Approval | `erp.purchase.request_created` | ⬜ |
| 16.2 | Supplier Invoice Due | Cron daily | ⬜ |
| 17.1 | Journal Entry Approval | `erp.accounting.journal_entry_created` | ⬜ |
| 17.2 | Daily Accounting Check | Cron daily | ⬜ |
| 18.1 | Leave Request Created | `erp.hr.leave_requested` | ⬜ |
| 18.2 | Attendance Missing | Cron daily | ⬜ |
| 18.3 | Payroll Ready | Cron monthly | ⬜ |
| 21.1 | Knowledge Needs Review | `ely.knowledge.pending_review` | ⬜ |
| 21.2 | ELY Bad Feedback | `ely.feedback.negative` | ⬜ |
| 21.3 | Weekly ELY Quality Report | Cron weekly | ⬜ |
| 22.1 | Database Backup | Cron daily | ⬜ |
| 22.2 | Files Backup | Cron daily | ⬜ |

---

## n8n-4 — تكاملات متقدمة

| # | المهمة | الحالة |
|---|--------|--------|
| 4.1 | WhatsApp integration | ⬜ |
| 4.2 | Email templates | ⬜ |
| 4.3 | Multi-tenant automation settings | ⬜ |
| 4.4 | Google Sheets sync | ⬜ |
