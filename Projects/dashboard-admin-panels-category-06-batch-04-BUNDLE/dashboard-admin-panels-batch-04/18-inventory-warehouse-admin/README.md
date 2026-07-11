# Inventory Warehouse Admin

A warehouse control panel for stock status, product movement, purchase orders, supplier updates and inventory risks.

## Commercial Use Case
Track products, warehouses, stock movement, suppliers, purchase orders and low stock

## Target Client
Warehouses, wholesalers and inventory-heavy businesses

## Category
Dashboard & Admin Panels / Inventory

## Pages
- `/` Admin Overview
- `/users` Users and role-based access mock
- `/analytics` Analytics and chart placeholders
- `/reports` Reports workspace
- `/audit` Audit trail and state handling
- `/settings` Settings and admin preferences mock

## Included UI
- Sidebar or top navigation depending on template concept
- KPI cards
- Command search bar
- Data table
- Chart placeholder
- Status badges
- Empty/loading/error state concept in copy
- Role-based UI concept
- Responsive layout for mobile, tablet and desktop

## Tech Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based architecture
- Mock data in `data/dashboard.ts`
- Basic SEO metadata

## Install
```powershell
npm install
```

## Run
```powershell
npm run dev
```

or:

```powershell
.\run.ps1
```

## Build
```powershell
npm run build
```

or:

```powershell
.\build.ps1
```

## Create ZIP
```powershell
.\zip.ps1
```

## Customize Text
Edit `data/dashboard.ts`.

## Customize Colors
Edit CSS variables in `app/globals.css`.

## Customize Sections
Edit components inside `components/` and pages inside `app/`.

## Client Delivery Notes
This is a frontend template. It is built to visually simulate a real admin system using mock data. Backend, authentication, database, permissions, and production security should be added when converting it to a real system.
