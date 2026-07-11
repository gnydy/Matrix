# Delivery Grocery POS

كاشير طلبات توصيل

## Use Case
طلبات هاتف/واتساب، تجهيز، توصيل، ومتابعة كابتن

## Target Client
Delivery Grocery

## Tech Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Frontend POS UI
- Backend Mock API Routes

## Pages
- `/` POS cashier screen
- `/products` product catalog
- `/sales` sales and invoices
- `/inventory` inventory control
- `/shifts` cashier shifts
- `/reports` reports
- `/settings` settings and roles

## Backend Mock Routes
- `GET /api/health`
- `GET /api/products`
- `GET /api/sales`
- `POST /api/sales`
- `GET /api/inventory`
- `POST /api/receipt`

## Run
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
npm run dev -- -p 3012
```

## Build
```powershell
npm run build
```

## Delivery Notes
This is a sellable fullstack mock template. For production POS, add real database, auth, audit logs, invoice numbering, taxes, backups, and hardware integration.
