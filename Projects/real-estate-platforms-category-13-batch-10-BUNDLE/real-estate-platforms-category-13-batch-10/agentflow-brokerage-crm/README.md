# AgentFlow Brokerage CRM

Brokerage CRM interface for agents, leads, listings, and follow-ups.

## Use Case
Show agent pipelines, client requests, listings, tasks, and lead status.

## Target Client
Brokerage teams needing operational UI templates

## Technology
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based structure
- Mock Data driven real estate UI

## Pages
- `/` Overview landing
- `/listings` Property listings + filters
- `/property/[slug]` Property details
- `/agents` Agent profiles
- `/calculator` Mortgage calculator mock
- `/booking` Viewing booking mock
- `/dashboard` Real estate admin dashboard mock

## Install
```powershell
npm install
```

## Run
```powershell
.\run.ps1
```

## Build
```powershell
.\build.ps1
```

## Zip
```powershell
.\zip.ps1
```

## Edit Content
Change all template text, listings, agents, stats, colors, and positioning from `data/site.ts`.

## Delivery Notes
This is a frontend template with mock data. It is not a production MLS, CRM, payment, or legal contract system until connected to a secure backend.
