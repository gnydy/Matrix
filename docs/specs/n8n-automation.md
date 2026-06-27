# وثيقة n8n Automation لمنصة Matrix / AllInAll ERP

## 1. تعريف دور n8n

n8n هو طبقة أتمتة خارجية تربط أحداث Matrix / AllInAll ERP بقنوات وإجراءات تلقائية. n8n لا يكون هو مصدر الحقيقة، ولا يستبدل الـ Backend. مصدر الحقيقة دائمًا هو API وقاعدة بيانات Matrix.

الدور الصحيح لـ n8n:

```text
Event happens in ERP / Platform
→ API emits webhook/event
→ n8n receives event
→ n8n performs automation
→ n8n calls Matrix API back if needed
→ Matrix logs result
```

n8n لا يكتب في PostgreSQL مباشرة إلا في حالات read-only أو حالات داخلية محددة جدًا. القاعدة: كل تعديل يتم عبر API.

## 2. أهداف n8n داخل ERP

1. إرسال تنبيهات تلقائية.
2. متابعة Leads والعملاء.
3. إرسال رسائل واتساب أو Email.
4. إنشاء مهام تلقائية.
5. متابعة المدفوعات.
6. تنبيه المخزون المنخفض.
7. تقارير يومية وأسبوعية.
8. تذكير بالمشاريع المتأخرة.
9. مزامنة بيانات مع أدوات خارجية.
10. تقليل العمل اليدوي المتكرر.

## 3. المعمارية العامة

```text
Matrix API
  ↓ emits events
Event Queue / Webhook
  ↓
n8n Workflow
  ↓
External Services:
  - Email
  - WhatsApp
  - Google Sheets
  - Slack/Telegram
  - CRM لاحقًا
  - Payment provider لاحقًا
  ↓
Matrix API callback
  ↓
Audit Log + Automation Log
```

## 4. قواعد التصميم

* كل Workflow يجب أن يكون له اسم واضح.
* كل Workflow يجب أن يبدأ Trigger واضح.
* كل Workflow يجب أن يكون Idempotent.
* لا يتم إرسال نفس الرسالة مرتين لنفس الحدث.
* أي فشل يتم تسجيله.
* أي فشل مهم يرسل تنبيه داخلي.
* لا يتم وضع أسرار API داخل nodes مباشرة.
* Credentials تكون محفوظة داخل n8n credentials.
* كل webhook له secret أو signature.
* لا يتم فتح webhook عام بدون حماية.

## 5. Event Naming Standard

كل حدث في النظام يجب أن يكون بهذه الصيغة:

```text
domain.entity.action
```

أمثلة:

```text
platform.lead.created
platform.lead.status_changed
platform.quote.sent
platform.quote.accepted
platform.project.created
platform.payment.overdue
erp.inventory.low_stock
erp.sales.invoice_created
erp.purchase.approval_required
erp.hr.leave_requested
erp.accounting.journal_posted
```

## 6. Automation Logs

يجب أن يحتوي النظام على جدول:

```text
automation_logs
```

الحقول:

* id
* eventName
* eventId
* workflowName
* status
* inputPayload
* outputPayload
* errorMessage
* retryCount
* startedAt
* finishedAt

## 7. n8n Credentials المطلوبة

* Matrix API token.
* SMTP credentials.
* WhatsApp API credentials.
* Telegram bot token اختياري.
* Google Sheets credentials اختياري.
* Payment provider credentials لاحقًا.
* Cloud storage credentials لاحقًا.

## 8. Webhook Security

كل request من Matrix إلى n8n يجب أن يحتوي على:

```text
X-Matrix-Event
X-Matrix-Event-Id
X-Matrix-Signature
X-Matrix-Timestamp
```

n8n يتحقق من:

* وجود secret.
* صلاحية timestamp.
* عدم تكرار eventId.
* صحة signature.

## 9. Workflows خاصة بالموقع العام والـ Leads

### 9.1 Workflow: New Lead Notification

Trigger:

```text
platform.lead.created
```

الخطوات:

1. استقبال Lead جديد من Matrix API.
2. التحقق من eventId.
3. إرسال إشعار داخلي لفريق Sales.
4. إرسال Email أو WhatsApp لصاحب الشركة داخليًا.
5. إنشاء automation log.
6. تحديث Lead activity في Matrix.

الرسالة الداخلية:

```text
Lead جديد:
الرقم: AIA-2026-000001
الاسم:
الشركة:
نوع المشروع:
الهاتف:
```

### 9.2 Workflow: Lead Not Contacted Reminder

Trigger:

```text
Cron كل ساعة
```

الخطوات:

1. n8n يستدعي Matrix API:

```text
GET /internal/leads?status=new&olderThan=2h
```

2. لو يوجد Leads غير متابعين.
3. إرسال تذكير للـ Sales.
4. تحديث automation log.

### 9.3 Workflow: Lead Qualified Follow-up

Trigger:

```text
platform.lead.status_changed
```

الشرط:

```text
newStatus = qualified
```

الإجراءات:

1. إنشاء task للـ Sales:

```text
Create quote draft
```

2. إرسال إشعار للـ Manager.
3. إضافة note تلقائي للـ Lead.

## 10. Workflows خاصة بالعروض Quotes

### 10.1 Workflow: Quote Sent

Trigger:

```text
platform.quote.sent
```

الخطوات:

1. إرسال Email للعميل يحتوي على رابط العرض.
2. إرسال WhatsApp مختصر.
3. تسجيل وقت الإرسال.
4. جدولة تذكير بعد 48 ساعة لو لم يتم الرد.

### 10.2 Workflow: Quote Follow-up Reminder

Trigger:

```text
Cron يومي
```

الخطوات:

1. البحث عن عروض مرسلة ولم يتم الرد عليها بعد 48 ساعة.
2. إرسال تنبيه للـ Sales.
3. اختيارياً إرسال follow-up للعميل.
4. تسجيل automation log.

### 10.3 Workflow: Quote Accepted

Trigger:

```text
platform.quote.accepted
```

الإجراءات:

1. تحويل Lead إلى Customer إن لم يكن موجودًا.
2. إنشاء Project.
3. إنشاء Payment Request مبدئي.
4. إرسال تهنئة/تأكيد للعميل.
5. إرسال تنبيه للـ Project Manager.
6. إنشاء onboarding checklist.

## 11. Workflows خاصة بالعملاء Customers

### 11.1 Workflow: New Customer Onboarding

Trigger:

```text
platform.customer.created
```

الخطوات:

1. إرسال رسالة ترحيب.
2. إنشاء قائمة مهام onboarding.
3. إنشاء قناة متابعة داخلية أو task group.
4. طلب بيانات العميل الأساسية.
5. تذكير بعد 24 ساعة لو البيانات ناقصة.

### 11.2 Workflow: Customer Missing Data

Trigger:

```text
Cron يومي
```

الخطوات:

1. البحث عن عملاء لديهم بيانات ناقصة.
2. إرسال تنبيه داخلي.
3. إرسال رسالة للعميل إن تم تفعيل ذلك.

## 12. Workflows خاصة بالمشاريع Projects

### 12.1 Workflow: Project Created

Trigger:

```text
platform.project.created
```

الإجراءات:

1. إرسال إشعار للـ Project Manager.
2. إنشاء Milestones افتراضية.
3. إنشاء Tasks أولية:

   * تحليل المتطلبات.
   * مراجعة العرض.
   * تحديد خطة التنفيذ.
   * طلب بيانات العميل.
4. إرسال رسالة للعميل ببدء التنفيذ.

### 12.2 Workflow: Project Milestone Overdue

Trigger:

```text
Cron يومي
```

الخطوات:

1. البحث عن Milestones متأخرة.
2. إرسال تنبيه للـ Project Manager.
3. تصعيد للـ Owner لو التأخير أكثر من عدد معين من الأيام.
4. تسجيل automation log.

### 12.3 Workflow: Weekly Project Report

Trigger:

```text
Cron أسبوعي
```

الخطوات:

1. جمع حالة المشاريع المفتوحة.
2. توليد ملخص.
3. إرسال تقرير داخلي.
4. حفظ التقرير داخل Matrix.

## 13. Workflows خاصة بالمدفوعات Payments

### 13.1 Workflow: Payment Request Created

Trigger:

```text
platform.payment_request.created
```

الإجراءات:

1. إرسال رسالة للعميل بتفاصيل الدفع.
2. إرسال نسخة داخلية للمحاسب.
3. تسجيل activity.

### 13.2 Workflow: Payment Due Soon

Trigger:

```text
Cron يومي
```

الشرط:

```text
dueDate خلال 3 أيام
status = pending
```

الإجراءات:

1. إرسال تذكير للعميل.
2. إرسال تذكير داخلي للمحاسب.
3. تسجيل log.

### 13.3 Workflow: Payment Overdue

Trigger:

```text
Cron يومي
```

الشرط:

```text
dueDate < today
status = pending
```

الإجراءات:

1. تغيير حالة Payment إلى overdue عبر API.
2. إرسال تنبيه داخلي.
3. إرسال تذكير للعميل حسب سياسة الشركة.
4. تصعيد بعد عدد معين من الأيام.

## 14. Workflows خاصة بالمخزون Inventory

### 14.1 Workflow: Low Stock Alert

Trigger:

```text
erp.inventory.low_stock
```

أو:

```text
Cron كل 6 ساعات
```

الخطوات:

1. جلب المنتجات التي stock <= minStock.
2. تجميعها حسب الفرع/المخزن.
3. إرسال تنبيه لمدير المخزن.
4. اقتراح Purchase Request.
5. تسجيل log.

### 14.2 Workflow: Stock Movement Anomaly

Trigger:

```text
erp.inventory.stock_movement_created
```

الشرط:

* حركة مخزون كبيرة بشكل غير معتاد.
* خروج مخزون بدون مستند.
* تعديل يدوي متكرر.

الإجراءات:

1. إرسال تنبيه للمدير.
2. إنشاء audit note.
3. وضع الحركة في قائمة مراجعة إن لزم.

## 15. Workflows خاصة بالمبيعات Sales

### 15.1 Workflow: Sales Invoice Created

Trigger:

```text
erp.sales.invoice_created
```

الإجراءات:

1. إرسال الفاتورة للعميل.
2. إنشاء receivable.
3. تنبيه المحاسب.
4. تحديث تقرير المبيعات.

### 15.2 Workflow: Daily Sales Summary

Trigger:

```text
Cron يومي الساعة 10 مساءً
```

الخطوات:

1. جلب مبيعات اليوم.
2. تجميع حسب الفرع.
3. تجميع حسب البائع.
4. إرسال تقرير للمدير.
5. حفظ ملخص داخل Matrix.

### 15.3 Workflow: Customer Over Credit Limit

Trigger:

```text
erp.sales.order_created
```

الشرط:

```text
customerBalance + orderAmount > creditLimit
```

الإجراءات:

1. إيقاف الطلب أو وضعه pending approval.
2. إرسال تنبيه للمدير.
3. منع إصدار الفاتورة بدون موافقة.

## 16. Workflows خاصة بالمشتريات Purchases

### 16.1 Workflow: Purchase Request Approval

Trigger:

```text
erp.purchase.request_created
```

الخطوات:

1. فحص قيمة الطلب.
2. تحديد مستوى الموافقة.
3. إرسال إشعار للمدير المختص.
4. عند الموافقة يتم تحديث الحالة.
5. عند الرفض يتم إرسال السبب لصاحب الطلب.

### 16.2 Workflow: Supplier Invoice Due

Trigger:

```text
Cron يومي
```

الخطوات:

1. البحث عن فواتير موردين قريبة الاستحقاق.
2. إرسال تنبيه للمحاسب.
3. إرسال تقرير للمدير المالي.

## 17. Workflows خاصة بالحسابات Accounting

### 17.1 Workflow: Journal Entry Approval Required

Trigger:

```text
erp.accounting.journal_entry_created
```

الشرط:

* قيمة كبيرة.
* قيد يدوي.
* حساب حساس.

الإجراءات:

1. وضع القيد pending approval.
2. إرسال تنبيه للمراجع.
3. تسجيل audit log.

### 17.2 Workflow: Daily Accounting Check

Trigger:

```text
Cron يومي
```

الخطوات:

1. فحص القيود غير المتوازنة.
2. فحص فواتير بلا قيود.
3. فحص مدفوعات بلا ربط.
4. إرسال تقرير للمحاسب.

## 18. Workflows خاصة بالموارد البشرية HR

### 18.1 Workflow: Leave Request Created

Trigger:

```text
erp.hr.leave_requested
```

الإجراءات:

1. إرسال طلب الموافقة للمدير.
2. عند الموافقة يتم تحديث رصيد الإجازات.
3. إرسال إشعار للموظف.

### 18.2 Workflow: Attendance Missing

Trigger:

```text
Cron يومي
```

الخطوات:

1. البحث عن موظفين بدون تسجيل حضور.
2. إرسال تنبيه HR.
3. إرسال تذكير للموظف إن لزم.

### 18.3 Workflow: Payroll Ready

Trigger:

```text
Cron شهري
```

الخطوات:

1. جمع الحضور.
2. جمع الإجازات.
3. جمع الخصومات.
4. إنشاء مسودة Payroll.
5. إرسالها للمراجعة.

## 19. Workflows خاصة بالدعم Support

### 19.1 Workflow: New Support Request

Trigger:

```text
support.ticket.created
```

الإجراءات:

1. تصنيف التذكرة.
2. تعيينها للشخص المناسب.
3. إرسال رسالة استلام للعميل.
4. تصعيد لو High Priority.

### 19.2 Workflow: Support SLA Breach

Trigger:

```text
Cron كل ساعة
```

الخطوات:

1. البحث عن تذاكر تجاوزت SLA.
2. تصعيد للمدير.
3. تسجيل log.

## 20. Workflows خاصة بالتقارير Reports

### 20.1 Daily Owner Report

Trigger:

```text
Cron يومي
```

المحتوى:

* Leads جديدة.
* عروض مرسلة.
* عروض مقبولة.
* مدفوعات مستحقة.
* مشاريع متأخرة.
* مبيعات اليوم.
* مخزون منخفض.
* أخطاء النظام.

### 20.2 Weekly Business Report

Trigger:

```text
Cron أسبوعي
```

المحتوى:

* أداء المبيعات.
* معدل تحويل Leads.
* حالة المشاريع.
* المدفوعات.
* العملاء المتأخرين.
* أهم المشاكل.
* توصيات ELY.

## 21. Workflows خاصة بـ ELY

### 21.1 Workflow: New Knowledge Needs Review

Trigger:

```text
ely.knowledge.pending_review
```

الإجراءات:

1. إرسال إشعار للـ Admin.
2. إضافة item في review queue.
3. تذكير لو لم تتم المراجعة خلال 48 ساعة.

### 21.2 Workflow: ELY Bad Feedback

Trigger:

```text
ely.feedback.negative
```

الإجراءات:

1. إرسال feedback للمسؤول.
2. إنشاء training review task.
3. تصنيف سبب الخطأ.
4. تحديث Knowledge إن لزم.

### 21.3 Workflow: Weekly ELY Quality Report

Trigger:

```text
Cron أسبوعي
```

المحتوى:

* عدد الأسئلة.
* نسبة الرضا.
* أكثر الأسئلة تكرارًا.
* الإجابات الفاشلة.
* مصادر معرفة ناقصة.
* اقتراحات تحسين.

## 22. Workflows خاصة بالنسخ الاحتياطي Backups

### 22.1 Database Backup

Trigger:

```text
Cron يومي
```

الخطوات:

1. تشغيل backup من PostgreSQL.
2. رفع النسخة إلى storage.
3. التحقق من نجاح الرفع.
4. إرسال إشعار عند النجاح أو الفشل.
5. حذف النسخ القديمة حسب retention policy.

### 22.2 Files Backup

Trigger:

```text
Cron يومي
```

الخطوات:

1. Backup للمرفقات.
2. Backup للمستندات.
3. Backup لملفات ELY.
4. إرسال تقرير.

## 23. Workflows خاصة بالمراقبة Monitoring

### 23.1 API Health Check

Trigger:

```text
Cron كل 5 دقائق
```

الخطوات:

1. فحص API health endpoint.
2. فحص web-marketing.
3. فحص web-platform.
4. فحص database.
5. إرسال تنبيه عند الفشل.

### 23.2 Failed Workflow Alert

Trigger:

```text
n8n workflow error trigger
```

الإجراءات:

1. إرسال تنبيه داخلي.
2. تسجيل الخطأ داخل Matrix.
3. إعادة المحاولة لو مسموح.
4. تصعيد بعد عدد معين من الفشل.

## 24. API Endpoints مطلوبة لـ n8n

### Events

```text
POST /automation/events
GET  /automation/events/:id
POST /automation/events/:id/complete
POST /automation/events/:id/fail
```

### Logs

```text
POST /automation/logs
GET  /automation/logs
GET  /automation/logs/:id
```

### Leads

```text
GET /internal/leads
GET /internal/leads/:id
POST /internal/leads/:id/notes
PATCH /internal/leads/:id/status
```

### Quotes

```text
GET /internal/quotes
GET /internal/quotes/:id
POST /internal/quotes/:id/send
```

### Projects

```text
GET /internal/projects
GET /internal/projects/overdue
POST /internal/projects/:id/tasks
```

### ERP

```text
GET /erp/inventory/low-stock
GET /erp/sales/daily-summary
GET /erp/accounting/daily-check
GET /erp/hr/attendance-missing
```

## 25. n8n Environment Variables

```text
MATRIX_API_BASE_URL=
MATRIX_AUTOMATION_TOKEN=
MATRIX_WEBHOOK_SECRET=

SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

WHATSAPP_API_URL=
WHATSAPP_API_TOKEN=

TELEGRAM_BOT_TOKEN=
OWNER_CHAT_ID=

GOOGLE_SHEETS_CLIENT_ID=
GOOGLE_SHEETS_CLIENT_SECRET=
```

## 26. Error Handling

كل Workflow يجب أن يحتوي على:

* Try/catch أو Error branch.
* Retry policy.
* Failure log.
* Notification on failure.
* Idempotency check.
* Timeout handling.
* Fallback behavior.

مثال:

```text
لو إرسال WhatsApp فشل:
→ جرب مرة ثانية
→ لو فشل، أرسل Email
→ لو فشل، أنشئ task داخلي
→ سجل failure
```

## 27. Idempotency

أي event يجب ألا ينفذ مرتين.

الحل:

* eventId من Matrix.
* n8n يفحص هل eventId تم تنفيذه.
* لو تم تنفيذه، ينهي workflow بدون تكرار.
* كل callback إلى Matrix يحتوي على eventId.

## 28. خطة تنفيذ n8n

### المرحلة الأولى

* n8n server.
* Webhook security.
* Automation logs.
* Lead created notification.
* Quote sent follow-up.
* Payment reminder.
* Project overdue alert.

### المرحلة الثانية

* Inventory low stock.
* Daily sales summary.
* Customer onboarding.
* Support SLA.
* Weekly owner report.

### المرحلة الثالثة

* HR workflows.
* Purchase approvals.
* Accounting checks.
* ELY feedback workflows.
* Backup workflows.

### المرحلة الرابعة

* WhatsApp integration.
* Email templates.
* Advanced branching.
* Multi-tenant automation settings.

## 29. قواعد مهمة للمبرمج

* n8n لا يكون بديلًا عن Backend.
* n8n لا يعدل قاعدة البيانات مباشرة.
* كل تعديل يتم عبر Matrix API.
* كل Workflow له log.
* كل Workflow له retry.
* كل Workflow له idempotency.
* لا توجد secrets في الكود.
* لا يتم إرسال بيانات حساسة لطرف خارجي بلا ضرورة.
* كل tenant له إعدادات automation مستقلة مستقبلًا.
