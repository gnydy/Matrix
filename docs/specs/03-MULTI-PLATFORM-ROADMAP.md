# 03 — خارطة المنصات المتعددة

> **التوقيت:** Web كامل أولًا — ثم PWA — ثم Native — ثم Desktop.  
> **لا نبدأ iOS/Android قبل اكتمال Sprint S9 (Production web).**

---

## المرحلة 1 — Web (الآن → Sprint 9)

| التطبيق | التقنية | المنفذ المحلي |
|---------|---------|---------------|
| Marketing | Next.js 15 App Router | `localhost:3000` |
| Control Center | Next.js 15 | `localhost:3001` |
| ERP UI | Next.js 15 | `localhost:3002` |
| API | NestJS 11 | `localhost:4000` |

**Responsive:** Mobile-first CSS · كل الصفحات تُختبر على 375px · 768px · 1440px.

---

## المرحلة 2 — PWA (Sprint 8)

- Service Worker · offline shell
- Add to Home Screen
- Push notifications (web)
- نفس codebase — لا fork

---

## المرحلة 3 — iOS (Swift)

```
SwiftUI App
  → Auth (OAuth2 / JWT refresh)
  → API Client (generated from OpenAPI)
  → Screens: Dashboard · Leads · Approvals (حسب role)
```

**المطلوب قبل البدء:**
- OpenAPI spec مستقر من `apps/api`
- Apple Developer Account ($99/year)
- Bundle ID · App Store listing

**التقدير:** 2–3 sprints × 10 أيام بعد Web.

---

## المرحلة 4 — Android (Kotlin)

```
Jetpack Compose
  → نفس API contracts
  → Material 3 + RTL
```

**المطلوب:**
- Google Play Developer ($25 one-time)
- Keystore للتوقيع

---

## المرحلة 5 — Windows Desktop

**الخيار الموصى به: Tauri 2**
- أخف من Electron
- WebView2 على Windows
- يستهلك نفس React components من `packages/ui`

**بديل:** Electron إن احتجت توافقًا أوسع.

---

## API Contract Strategy

```text
packages/contracts  ← TypeScript types
       ↓
OpenAPI 3.1 (apps/api)  ← مصدر الحقيقة للـ REST
       ↓
Codegen: Swift · Kotlin · (optional) C# for Windows
```

---

## ما لا نفعله

- لا React Native و Flutter **في الوقت الحالي** — تجنب 3 codebases UI
- لا منطق أعمال في التطبيقات الأصلية
- لا بناء mobile قبل تثبيت API versioning (`/v1/`)

---

*المرجع: `01-MASTER-PRODUCT-PLAN.md`*
