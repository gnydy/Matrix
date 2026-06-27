# فهرس الوثائق — Matrix / AllInAll

> كل ملف `.md` له نسخة `.pdf` بجانبه — `node docs/build-all-pdfs.js`

## خطط المنتج (مرقمة — لا تخلط)

| # | الملف | المحتوى |
|---|-------|---------|
| 00 | [00-INDEX.md](./00-INDEX.md) | هذا الفهرس |
| 01 | [01-MASTER-PRODUCT-PLAN.md](./01-MASTER-PRODUCT-PLAN.md) | الخطة الاستثمارية الرئيسية |
| 02 | [02-COMPETITIVE-BENCHMARK.md](./02-COMPETITIVE-BENCHMARK.md) | Odoo · SAP · SaaS |
| 03 | [03-MULTI-PLATFORM-ROADMAP.md](./03-MULTI-PLATFORM-ROADMAP.md) | Web · PWA · iOS · Android · Windows |
| 04 | [04-PAYMENT-APIS-REQUIREMENTS.md](./04-PAYMENT-APIS-REQUIREMENTS.md) | **املأه أنت** — بوابات الدفع |
| 05 | [05-LIMITATIONS-AND-USER-INPUT.md](./05-LIMITATIONS-AND-USER-INPUT.md) | ما أحتاجه · ما لا أستطيع |
| 06 | [06-LOCAL-DEV-SETUP.md](./06-LOCAL-DEV-SETUP.md) | سيرفر محلي Docker |

## وثائق أخرى

| الملف | المحتوى |
|-------|---------|
| [IMPLEMENTATION-PLAN.md](../IMPLEMENTATION-PLAN.md) | خطة التنفيذ التفصيلية |
| [n8n-automation.md](./n8n-automation.md) | وثيقة n8n كاملة |
| [N8N-EXECUTION-PLAN.md](./N8N-EXECUTION-PLAN.md) | تنفيذ n8n |
| [catalog/PROJECT-CATALOG.md](../catalog/PROJECT-CATALOG.md) | كتالوج المشروع |

## البنية التقنية

```text
E:\Matrix\
├── apps/web-marketing/     ← الموقع الاحترافي (localhost:3000)
├── infra/local/            ← Docker: Postgres · Redis · Mailhog
└── docs/                   ← كل الوثائق + PDFs
```
