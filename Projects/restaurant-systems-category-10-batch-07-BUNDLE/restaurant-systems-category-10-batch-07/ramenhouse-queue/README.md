# RamenHouse Queue

## Commercial description
Queue-based restaurant website with waitlist and kitchen ticketing.

## Use case
Manage waitlist, counter seats, menu specials, kitchen bowls queue, and customer SMS mock state.

## Target client
Ramen shops, noodle bars, high-turnover casual restaurants.

## Technologies
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based architecture
- Mock Data in `data/site.ts`
- SEO Metadata in `app/layout.tsx`

## Pages
- `/` — Restaurant marketing homepage + operations preview
- `/menu` — Menu showcase
- `/order` — Online ordering mock
- `/reservations` — Table reservation board
- `/kitchen` — Kitchen dashboard
- `/delivery` — Delivery tracking mock
- `/dashboard` — Restaurant control room

## Install
```powershell
npm install
```

## Run
```powershell
npm run dev
```

Or on Windows:
```powershell
.\run.ps1
```

## Build
```powershell
.\build.ps1
```

## Create ZIP
```powershell
.\zip.ps1
```

## Edit content
Change text, menu items, metrics, reservations, and order mock data in:

`data/site.ts`

## Edit colors
Change CSS variables in:

`app/globals.css`

## Client delivery notes
This is a frontend restaurant system template. It provides realistic UI for menu, ordering, reservations, kitchen dashboard, delivery tracking, and restaurant operations. Backend, payments, SMS, kitchen printer integration, and live database should be added only when converting it into a production system.
