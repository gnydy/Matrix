# Error Audit — Matrix

**آخر فحص:** 2026-06-26

## نتيجة الفحص الكامل

| المكوّن | Build | Lint | ملاحظات |
|---------|-------|------|---------|
| `@allinall/security` | ✅ | — | أُصلح `@types/node` + `setInterval` |
| `@allinall/config` | ✅ | — | أُصلح `@types/node` |
| `@allinall/contracts` | ✅ | — | |
| `@allinall/validation` | ✅ | — | |
| `@allinall/i18n` | ✅ | — | |
| `@allinall/api` | ✅ | — | |
| `web-marketing` | ✅ | ✅ | middleware + transpilePackages |
| `web-platform` | ✅ | ✅ | أُضيف `eslint.config.mjs` |
| SQLite + seed | ✅ | — | `setup-sqlite-db.mjs` |

## أخطاء أُصلحت

1. **`@allinall/security` لا يُحل في middleware** — `transpilePackages` + `exports` فرعية
2. **TypeScript في security/config** — `@types/node` + `types: ["node"]`
3. **`setInterval().unref` في rate-limit** — أُزيل (غير متوافق Edge/TS)
4. **ESLint مفقود في web-platform** — نسخ `eslint.config.mjs`
5. **تحذيرات ESLint** — imports غير مستخدمة في dashboard و auth
6. **pageview API بدون rate limit** — أُضيف تحقق + UUID/CUID
7. **sessionId Prisma CUID** — كان يُرفض لأن التحقق UUID فقط

## تشغيل الفحص محلياً

```powershell
pnpm install
pnpm --filter @allinall/security build
pnpm --filter @allinall/config build
pnpm --filter @allinall/api build
pnpm --filter @allinall/web-marketing build
pnpm --filter @allinall/web-platform build
pnpm --filter @allinall/web-marketing lint
pnpm --filter @allinall/web-platform lint
node scripts/setup-sqlite-db.mjs
```
