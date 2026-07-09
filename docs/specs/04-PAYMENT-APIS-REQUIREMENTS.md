# 04 — متطلبات بوابات الدفع الإلكتروني

> **املأ الأقسام ذات الصلة وأرسلها.** بدون هذه المعلومات لا يمكن تفعيل الدفع الحقيقي.

---

## 1. معلومات الشركة (إلزامية لكل البوابات)

| الحقل | قيمتك |
|-------|-------|
| الاسم القانوني للشركة | |
| السجل التجاري | |
| الرقم الضريبي | |
| الدولة / الدول المستهدفة | |
| العملة الأساسية | EGP / USD / SAR / … |
| موقع الشركة (URL) | |
| بريد الدعم الرسمي | |
| هاتف الدعم | |

---

## 2. Stripe (دولي — بطاقات · Apple Pay · Google Pay)

| الحقل | قيمتك |
|-------|-------|
| هل لديك حساب Stripe؟ | نعم / لا |
| Stripe Account ID (إن وجد) | |
| الدول المفعّلة للتحصيل | |
| Webhook signing secret (test) | |
| Webhook signing secret (live) | |

**أحتاج منك لاحقًا:** تفعيل Dashboard وإعطائي **Test keys** فقط في البداية:
- `STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

---

## 3. Paymob (مصر / MENA)

| الحقل | قيمتك |
|-------|-------|
| حساب Paymob | نعم / لا |
| API Key (test) | |
| Integration ID (card) | |
| Integration ID (wallet) | |
| HMAC secret | |
| iFrame ID (إن استخدمت) | |

---

## 4. Fawry (مصر — كود دفع / outlets)

| الحقل | قيمتك |
|-------|-------|
| Merchant Code | |
| Security Key | |
| بيئة (staging/production) | |

---

## 5. Tap Payments (GCC)

| الحقل | قيمتك |
|-------|-------|
| Secret Key (test) | |
| Public Key | |
| Merchant ID | |

---

## 6. تحويل بنكي يدوي (MVP — متاح الآن)

| الحقل | قيمتك |
|-------|-------|
| اسم البنك | |
| IBAN / رقم الحساب | |
| تعليمات التحويل للعميل (نص) | |

---

## 7. سياسة الدفع في المنتج

اختر:

- [ ] اشتراك شهري/سنوي (SaaS)
- [ ] دفعة لمرة واحدة (مشروع)
- [ ] دفعات على مراحل (milestones)
- [ ] فواتير ERP + رابط دفع
- [ ] استرداد جزئي / كامل
- [ ] فترة trial

**سياسة الاسترداد (نص):**  
_

**الضريبة (VAT):** نسبة ___% — دولة ___

---

## 8. ما سأبنيه في الكود (بعد استلام المفاتيح)

```text
apps/api/src/payments/
  ├── providers/
  │   ├── stripe.provider.ts
  │   ├── paymob.provider.ts
  │   ├── fawry.provider.ts
  │   └── manual.provider.ts
  ├── webhooks/          # توقيع + idempotency
  └── payments.service.ts
```

**Endpoints مخططة:**
- `POST /payments/checkout` — إنشاء جلسة دفع
- `POST /webhooks/stripe`
- `POST /webhooks/paymob`
- `GET /payments/:id/status`

---

## 9. أمان (لن أتنازل عنه)

- المفاتيح في `.env` فقط — **لا في Git**
- Webhook signature verification إلزامي
- لا تخزين أرقام بطاقات — PCI عبر البوابة
- Audit log لكل معاملة

---

## 10. MVP بدون بوابات

حتى تزود المفاتيح:
- Payment Request **يدوي** (من الوثيقة الأصلية)
- محاسب يسجّل «مدفوع» داخل النظام
- البوابات تُفعَّل في Sprint S5

---

*أرسل هذا الملف معبأً أو اكتب الإجابات في المحادثة.*
