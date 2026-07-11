# ContentCraft AI Studio

An AI writing studio where prompts, outputs, templates, and approvals live together.

## Commercial positioning
- **Template type:** SaaS Platform Template
- **Concept:** AI content generation workspace
- **Target client:** Creators, marketing teams, agencies, and solopreneurs
- **Use case:** Generate, organize, edit, and reuse AI content workflows
- **Port:** http://localhost:3052

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
npm run dev -- --port 3052
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
