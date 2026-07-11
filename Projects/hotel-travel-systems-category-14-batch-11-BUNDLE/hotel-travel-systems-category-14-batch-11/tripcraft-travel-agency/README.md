# TripCraft Travel Agency

## Commercial Description
Modern travel agency system for selling curated trips, tours, and itineraries.

## Use Case
Tour packages, itinerary builder, inquiry booking, consultant dashboard

## Target Client
Travel agencies and tour operators

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
cd "tripcraft-travel-agency"
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
