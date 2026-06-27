# توثيق Matrix / AllInAll ERP

## سياسة PDF

**كل ملف `.md` في هذا المجلد له نسخة PDF بجانبه** (نفس الاسم، امتداد `.pdf`).

| المصدر | PDF |
|--------|-----|
| `IMPLEMENTATION-PLAN.md` | `IMPLEMENTATION-PLAN.pdf` |
| `specs/n8n-automation.md` | `specs/n8n-automation.pdf` |
| `progress/sprint-log.md` | `progress/sprint-log.pdf` |
| … | … |

## إعادة توليد كل الـ PDFs

```bash
cd E:\Matrix\docs
node build-all-pdfs.js
```

ملف واحد فقط:

```bash
node build-all-pdfs.js specs/n8n-automation.md
```

## الهيكل

```
docs/
├── build-all-pdfs.js      # سكربت التوليد الموحد
├── pdf-styles.css         # تنسيق احترافي مشترك
├── pdf-manifest.json      # فهرس آخر توليد (يُنشأ تلقائيًا)
├── IMPLEMENTATION-PLAN.md + .pdf
├── catalog/
├── progress/
├── specs/
└── extracted/             # نصوص PDF مصدرية (بدون .md)
```

## متى تُحدَّث الـ PDFs؟

بعد **كل مرحلة تنفيذ** أو تعديل على أي `.md` — شغّل `build-all-pdfs.js`.
