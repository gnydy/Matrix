# Inventory Control ERP

## Commercial Description
Inventory movement cockpit with bins, stock alerts, suppliers and transfer requests.

## Use Case
Frontend ERP template for Warehouses and distributors needing a credible system UI demo without building a backend yet.

## Target Client
Warehouses and distributors.

## Included Pages
- `/` main ERP experience
- `/dashboard` executive dashboard mock
- `/modules` module catalog
- `/settings` configuration mock

## Technologies
Next.js, TypeScript, Tailwind CSS, App Router, mock data, responsive component-based UI.

## Install
```powershell
npm install
```

## Run
```powershell
npm run dev -- --port 3062
```

## Build
```powershell
npm run build
```

## ZIP
```powershell
.\zip.ps1
```

## Customization
- Edit texts and records in `data/site.ts`.
- Edit global styles in `app/globals.css`.
- Edit layout sections in `app/page.tsx`.
- Connect backend later through API routes or external services.

## Delivery Notes
This is a frontend-only ERP system template. It is intentionally built with realistic screens, states, tables, workflows and mock data to sell the system concept before backend implementation.
