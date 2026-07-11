# Manufacturing B2B CRM

## Commercial Description
Industrial account CRM with RFQs, technical specs, recurring orders, and distributor status

## Use Case
A sellable CRM frontend template for Manufacturers selling to distributors, factories, and enterprise buyers.

## Target Client
Manufacturers selling to distributors, factories, and enterprise buyers

## Technology
- Next.js App Router
- TypeScript
- Tailwind CSS
- Mock CRM data
- Component-based architecture
- Responsive UI

## Included Pages
- Home CRM presentation
- Dashboard
- Accounts
- Pipeline

## Included CRM UI
- Sidebar / top navigation
- Stats cards
- Pipeline board
- Account cards
- CRM table
- Activity timeline
- AI next-action assistant
- Empty-ready structures through mock states
- Role-based UI concept

## Run

```powershell
cd "manufacturing-b2b-crm"
npm install
npm run dev -- --port 3098
```

Open:

```text
http://localhost:3098
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
Edit:
- `data/crm.ts` for text, deals, accounts, stats
- `components/CRMTemplate.tsx` for UI sections
- `styles/globals.css` for global CSS
- Tailwind utility classes for spacing, layout, and visual identity

## Delivery Notes
This is a frontend CRM template. It is designed for portfolio display, client demos, and future backend integration. It is not a production backend CRM.
