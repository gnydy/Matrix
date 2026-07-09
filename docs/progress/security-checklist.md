# Security Checklist — Matrix

**آخر تحديث:** 2026-06-26

## ما تم تطبيقه

| الحماية | الموقع | API | Control Center |
|---------|--------|-----|----------------|
| Honeypot + توقيت النموذج | ✅ | ✅ | — |
| Rate limiting | ✅ `/api/public/*` | ✅ login + leads | — |
| حظر User-Agent للروبوتات العدوانية | ✅ middleware | — | — |
| robots.txt — منع crawlers AI/SEO | ✅ | — | — |
| Security headers (CSP, X-Frame-Options…) | ✅ middleware | ✅ helmet | ✅ middleware |
| التحقق من JWT في middleware | — | — | ✅ (كان يتحقق من وجود cookie فقط) |
| Zod validation للمدخلات | ✅ | ✅ | جزئي |
| UUID validation للجلسات | ✅ | — | — |
| رفض أسرار ضعيفة في الإنتاج | — | ✅ | — |
| CORS مقيّد | — | ✅ | — |
| httpOnly cookies للجلسة | — | — | ✅ |

## ثغرات أُصلحت

1. **Control Center middleware** — كان يقبل أي cookie باسم الجلسة دون التحقق من JWT.
2. **نماذج عامة بدون حماية** — لا honeypot ولا rate limit.
3. **تتبع الزوار** — قبول `sessionId`/`visitorId` عشوائي وإنشاء أحداث بلا حدود.
4. **JWT secret افتراضي** — يُرفض تلقائياً عند `NODE_ENV=production`.

## ما يزال موصى به للإنتاج

- `JWT_SECRET` و`SESSION_SECRET` — 32+ حرف عشوائي
- PostgreSQL + نسخ احتياطي
- WAF/CDN (Cloudflare) أمام الموقع
- Redis لـ rate limiting موزّع (الحالي in-memory)
- CAPTCHA (Turnstile/hCaptcha) عند زيادة الهجمات
- نقل CRUD الداخلي بالكامل إلى Nest + RBAC على كل endpoint
- تدقيق أمني خارجي قبل الإطلاق العام
