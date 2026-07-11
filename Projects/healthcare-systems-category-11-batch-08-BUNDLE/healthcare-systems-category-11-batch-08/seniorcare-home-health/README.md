# SeniorCare Home Health

## وصف القالب
SeniorCare Home Health هو قالب Healthcare System UI مبني بـ Next.js وTypeScript وTailwind CSS. القالب يعطي شكل نظام طبي حقيقي لقطاع: Home healthcare.

## Use Case
visits, caregivers, medication schedules.

## Target Client
Home care companies and elder-care providers.

## التقنيات
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-Based Architecture
- Mock Data
- SEO Metadata
- Responsive Design

## الصفحات
- `/` Overview
- `/appointments` Booking Flow
- `/patients` Patient Records Mock
- `/reports` Reports & Analytics
- `/departments` Departments & Doctors
- `/admin` Admin & Settings

## التشغيل
```powershell
npm install
npm run dev
```

## البناء
```powershell
npm run build
```

## ضغط ZIP
```powershell
.\zip.ps1
```

## تعديل النصوص
عدّل ملف:
`data/site.ts`

## تعديل الألوان
عدّل `accent` وclasses داخل `data/site.ts` أو مكونات الواجهة.

## تعديل الصور
ضع الصور داخل `public/` واستبدل placeholders داخل المكونات.

## ملاحظات التسليم للعميل
هذا قالب Frontend Mock فقط. لا يستخدم بيانات مرضى حقيقية ولا يعتبر EHR أو نظامًا طبيًا معتمدًا. قبل استخدامه فعليًا يجب إضافة Backend آمن، صلاحيات، تشفير، Audit Logs، موافقات قانونية، وسياسات خصوصية متوافقة مع بلد العميل.
