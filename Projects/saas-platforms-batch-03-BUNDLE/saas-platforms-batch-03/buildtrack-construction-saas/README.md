# BuildTrack Construction SaaS

## وصف القالب
Project milestones, site reports, issue tracking, material status, and budget snapshots.

## التقنيات المستخدمة
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-Based Architecture
- Mock Data داخل `data/site.ts`
- SEO Metadata أساسي
- Responsive UI للموبايل والتابلت والديسكتوب

## Use Case
Project milestones, site reports, issue tracking, material status, and budget snapshots.

## Target Client
Contractors, project managers, engineering offices

## Visual Identity
- Layout: Project timeline hero with site health cards
- Tone: engineering project control UI
- Complexity: Advanced
- Suggested price range: $139-$429

## الصفحات الموجودة
- Home `/`
- Pricing `/pricing`
- Dashboard Preview `/dashboard`
- Integrations `/integrations`
- Security `/security`
- Auth UI Mock `/auth`
- Docs `/docs`

## طريقة التثبيت
```powershell
cd "buildtrack-construction-saas"
npm install
```

## طريقة التشغيل
```powershell
.\run.ps1
```

أو يدويًا:

```powershell
npm run dev
```

## طريقة البناء
```powershell
.\build.ps1
```

## طريقة ضغط ZIP
```powershell
.\zip.ps1
```

## تعديل النصوص
عدّل الملف:
`data/site.ts`

## تعديل الألوان
عدّل قيمة `accent` داخل `data/site.ts` أو عدّل classes داخل المكونات.

## تعديل الصور
هذا القالب يستخدم UI blocks وplaceholders بدون صور خارجية لتسهيل البيع والتخصيص.

## ملاحظات التسليم للعميل
هذا Frontend template قابل للتطوير إلى SaaS حقيقي. لا يحتوي Backend أو Auth حقيقي أو قاعدة بيانات. عند البيع كمنتج نهائي يجب إضافة Backend، Auth، Payments، Database، Logging، Rate Limiting، وSecurity Headers.
