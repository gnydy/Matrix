# 06 — الاستضافة والسيرفر المحلي

> تشغيل Matrix على **هذا الجهاز** للتطوير — منفصل عن production.

---

## 1. المتطلبات

| الأداة | الإصدار | حالتك |
|--------|---------|-------|
| Docker Desktop | 29+ | ✓ متوفر |
| Node.js | 20+ | ✓ v24 |
| pnpm | 9+ | ✓ v11 |
| Git | أي | — |

---

## 2. التشغيل السريع

```powershell
cd E:\Matrix

# 1) نسخ متغيرات البيئة
copy infra\local\.env.example infra\local\.env

# 2) تشغيل السيرفرات (PostgreSQL + Redis + Mailhog + Adminer)
pnpm infra:up

# 3) تثبيت الحزم (بعد إنشاء apps)
pnpm install

# 4) تشغيل التطبيقات (عند الجاهزية)
pnpm dev
```

---

## 3. الخدمات المحلية

| الخدمة | URL | الاستخدام |
|--------|-----|-----------|
| **PostgreSQL** | `localhost:5432` | قاعدة البيانات |
| **Redis** | `localhost:6379` | Cache · Queues |
| **Mailhog UI** | http://localhost:8025 | اختبار البريد |
| **Adminer** | http://localhost:8080 | إدارة DB (GUI) |
| **web-marketing** | http://localhost:3000 | الموقع (لاحقًا) |
| **API** | http://localhost:4000 | Backend (لاحقًا) |

### بيانات الدخول الافتراضية (تطوير فقط)

```text
POSTGRES_USER=matrix
POSTGRES_PASSWORD=matrix_dev_change_me
POSTGRES_DB=matrix_dev
DATABASE_URL=postgresql://matrix:matrix_dev_change_me@localhost:5432/matrix_dev
REDIS_URL=redis://localhost:6379
```

---

## 4. أوامر مفيدة

```powershell
pnpm infra:ps      # حالة الحاويات
pnpm infra:logs    # سجلات
pnpm infra:down    # إيقاف
pnpm docs:pdf      # توليد PDFs للوثائق
```

---

## 5. هيكل infra/

```text
infra/
├── local/
│   ├── docker-compose.yml    # تطوير محلي
│   ├── .env.example
│   ├── .env                  # (لا يُرفع لـ Git)
│   └── README.md
└── production/               # (Sprint 9)
    ├── docker-compose.prod.yml
    └── nginx/
```

---

## 6. الانتقال للاستضافة الحقيقية

1. VPS (Ubuntu 22.04+) — 4GB RAM minimum
2. نسخ `infra/production/` + `.env` production
3. Nginx + Certbot
4. `docker compose -f docker-compose.prod.yml up -d`

**لا ننشر production قبل Sprint S9.**

---

## 7. استكشاف الأخطاء

| المشكلة | الحل |
|---------|------|
| Port 5432 مشغول | غيّر `POSTGRES_PORT` في `.env` |
| Docker لا يعمل | شغّل Docker Desktop |
| DB connection refused | انتظر 10ث بعد `infra:up` |

---

*مرتبط بـ: `01-MASTER-PRODUCT-PLAN.md` Sprint S0*
