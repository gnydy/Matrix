# EventStay Group Blocks

## Commercial Description
Hotel room block and event stay management frontend.

## Use Case
Group room blocks, attendee booking, allocation dashboard, deadlines

## Target Client
Conference hotels, event planners, and venues

## Complexity
high

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
cd "eventstay-group-blocks"
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
