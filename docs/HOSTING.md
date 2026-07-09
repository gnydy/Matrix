# Matrix — دليل التشغيل المحلي

> **Docker مُلغى** على هذا الجهاز — التشغيل عبر SQLite فقط (خفيف، بدون حاويات).
> النشر السحابي يُجهَّز لاحقاً بعد اكتمال الرؤية.

## التشغيل

```powershell
cd e:\Matrix
npm run stack:start
```

أو دبل كليك: `start-matrix.bat`

إعداد القاعدة مرة واحدة:

```powershell
npm run db:local
```

| | |
|---|---|
| الموقع | http://127.0.0.1:8080/ |
| Control Center | http://127.0.0.1:8080/control |
| الدخول | `admin@matrix.local` / `matrix_admin_change_me` |
| من الشبكة | http://\<IP-جهازك\>:8080/ |

**ملاحظة:** أغلق السيرفر قبل `npm run db:local` إذا ظهر خطأ EPERM من Prisma.

---

## اللغات

الموقع يدعم **العربية** (افتراضي) و**الإنجليزية** — مبدّل اللغة في الهيدر.

---

## Docker (مؤرشف)

ملفات Docker موجودة في `infra/` للمرجع فقط — **لا تُستخدم** على جهاز التطوير.
النشر السحابي (Netlify + PostgreSQL) يُنفَّذ بعد اكتمال المنصة — راجع `docs/CLOUD-DEPLOY.md`.
