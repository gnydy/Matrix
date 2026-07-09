# نشر Matrix على Netlify

> **الموقع المربوط:** [cerulean-tartufo-5a529e](https://app.netlify.com/projects/cerulean-tartufo-5a529e)  
> **الرابط العام:** https://cerulean-tartufo-5a529e.netlify.app

## ما يُنشر على Netlify الآن

| التطبيق | Netlify | ملاحظة |
|---------|---------|--------|
| **الموقع التسويقي** | ✅ هذا المشروع | Next.js + API routes + Prisma |
| Control Center | موقع Netlify ثانٍ لاحقاً | `apps/web-platform` |
| Nest API | خادم خارجي لاحقاً | اختياري — الموقع يحفظ Leads مباشرة في DB |

## 1 — مرة واحدة: تسجيل الدخول وربط المشروع

```powershell
cd e:\Matrix
pnpm install
npx netlify login
npm run netlify:link
# أو سكربت واحد (بعد تعيين DATABASE_URL محلياً إن أردت):
npm run netlify:setup
```

`netlify:link` يربط المجلد بموقع **cerulean-tartufo-5a529e**.

## 2 — قاعدة بيانات PostgreSQL

اختر أحد الخيارين:

- [Neon](https://neon.tech) (مجاني) → انسخ `DATABASE_URL`
- أو بعد الربط: `npx netlify database init --yes`

تهيئة الجداول (مرة واحدة من جهازك):

```powershell
cd e:\Matrix\packages\database
$env:DATABASE_URL="postgresql://..."
npx prisma db push
```

## 3 — متغيرات البيئة على Netlify

من [إعدادات الموقع](https://app.netlify.com/projects/cerulean-tartufo-5a529e/configuration/env) أو:

```powershell
npx netlify env:set DATABASE_URL "postgresql://..."
npx netlify env:set NEXT_PUBLIC_SITE_URL "https://cerulean-tartufo-5a529e.netlify.app"
```

راجع `netlify.env.example` للقائمة الكاملة.

## 4 — النشر

```powershell
# معاينة (رابط مؤقت)
npm run deploy:marketing

# إنتاج — يظهر على cerulean-tartufo-5a529e.netlify.app
npm run deploy:marketing:prod
```

أو اربط GitHub وفعّل **Deploy on push** من لوحة Netlify.

## 5 — التحقق بعد النشر

- الصفحة الرئيسية تفتح بدون أخطاء
- نموذج `/request` يحفظ طلباً (يحتاج `DATABASE_URL`)
- `/robots.txt` و `/sitemap.xml` يعملان

## البناء على Netlify

`netlify.toml` في الجذر يشغّل:

1. `pnpm install`
2. بناء `@allinall/security`
3. `prisma generate` (PostgreSQL)
4. `next build` للموقع التسويقي

## Control Center (لاحقاً)

```powershell
cd e:\Matrix\apps\web-platform
npx netlify init   # موقع Netlify جديد
# ثم env: DATABASE_URL, JWT_SECRET, SESSION_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npx netlify deploy --prod
```

## التشغيل المحلي

```powershell
npm run stack:start
```
