# ByteCart Electronics

Professional Next.js ecommerce template — V2.

## Commercial description
Specification-first electronics store with comparison panels, tech filters, warranty cards.

## Target client
Electronics retailers, laptop/mobile stores, gadget marketplaces.

## UX pattern
`comparison-hub` — this template is not a recolor. It uses a unique store structure, homepage composition, catalog style, and commerce positioning.

## Pages
- `/` Home
- `/products` Product listing
- `/products/[slug]` Product detail
- `/cart` Cart UI
- `/checkout` Checkout mock
- `/account` Customer account mock
- `/control-room` Commerce control room / dashboard

## Tech
- Next.js App Router
- TypeScript
- Tailwind CSS
- Mock Data
- Component-based structure
- Responsive design
- SEO metadata

## Run
```powershell
npm install
npm run dev -- --port 3022
```

## Build
```powershell
npm run build
```

## ZIP
```powershell
.\zip.ps1
```

## Editable data
Edit products and store data in:

`data/products.ts`

## Products
- NovaBook Pro
- PixelDock 4K
- VoltBuds Max
- CoreStation X
- ArcMonitor 27
- ChargeHub GaN

## Delivery note
This is a frontend template only. Backend, payments, authentication, CMS, inventory, and order database can be added as a custom project.
