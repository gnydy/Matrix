# SafariBase Expedition Travel

## Commercial Description
Safari and expedition travel platform for camps, guides, and luxury trips.

## Use Case
Camp packages, guide profiles, availability, itinerary, booking request

## Target Client
Safari operators and destination management companies

## Complexity
medium

## Technologies
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based architecture
- Mock Data
- Responsive layout
- SEO metadata

## Pages
- `/` Overview / commercial home
- `/packages` packages and inventory
- `/availability` availability board
- `/booking` reservation flow mock
- `/guest` guest portal
- `/dashboard` operations dashboard

## Run
```powershell
cd "safaribase-expedition-travel"
.\run.ps1
```

Or manually:
```powershell
npm install
npm run dev
```

## Build
```powershell
.\build.ps1
```

## ZIP
```powershell
.\zip.ps1
```

## Editing Content
Main copy, packages, metrics, booking steps, guest data, and dashboard rows are inside `data/site.ts`.

## Editing Colors
Change `accent` and `soft` values in `data/site.ts`.

## Delivery Notes
This is a frontend mock template. Production requires backend booking APIs, payment integration, authentication, rate rules, audit logs, and secure admin permissions.
