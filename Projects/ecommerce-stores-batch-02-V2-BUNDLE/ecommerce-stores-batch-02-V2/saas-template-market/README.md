# SaaS Template Market

Professional Next.js ecommerce template — V2.

## Commercial description
Template marketplace for selling website and system templates with live demos, ZIP downloads, licenses, and creator dashboard.

## Target client
Software companies selling templates, agencies building demo centers.

## UX pattern
`template-market` — this template is not a recolor. It uses a unique store structure, homepage composition, catalog style, and commerce positioning.

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
npm run dev -- --port 3039
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
- ERP Admin Template
- AI Landing Pack
- Fintech Dashboard
- Agency Website Kit
- Ecommerce Bundle
- CRM System UI

## Delivery note
This is a frontend template only. Backend, payments, authentication, CMS, inventory, and order database can be added as a custom project.
