# SalesBridge CRM SaaS

A sales command room that makes every deal, note, and next step visible.

## Commercial positioning
- **Template type:** SaaS Platform Template
- **Concept:** CRM and revenue pipeline workspace
- **Target client:** Sales teams, agencies, B2B companies, and consultants
- **Use case:** Manage leads, deals, activities, clients, and sales forecasts
- **Port:** http://localhost:3050

## Technologies
Next.js App Router, TypeScript, Tailwind CSS, component-based structure, mock data, responsive UI, basic SEO metadata.

## Main pages
- `/` SaaS landing and product experience
- `/pricing` pricing and plan comparison
- `/dashboard` product dashboard mock
- `/auth` authentication/onboarding mock

## How to install
```powershell
npm install
```

## How to run
```powershell
npm run dev -- --port 3050
```

Or:

```powershell
.\run.ps1
```

## How to build
```powershell
npm run build
```

Or:

```powershell
.\build.ps1
```

## How to zip
```powershell
.\zip.ps1
```

## Editing guide
- Text and mock data: `data/mock.ts`
- UI components: `components/Ui.tsx`
- Main page: `app/page.tsx`
- Pricing: `app/pricing/page.tsx`
- Dashboard: `app/dashboard/page.tsx`
- Colors and utility classes: Tailwind classes inside pages/components.

## Delivery notes
This is a frontend SaaS template, not a production backend. It is suitable for portfolio display, client proposal demos, and template marketplace packaging. Add real auth, database, payment, API, and role-based access before production deployment.
