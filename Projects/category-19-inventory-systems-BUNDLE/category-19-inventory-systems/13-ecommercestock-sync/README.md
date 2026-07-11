# EcommerceStock Sync

Online store inventory and channel counts.

Category: Inventory Systems  
Layout pattern: Split-screen hero with form panel and operations cards.

## Tech
Next.js, TypeScript, Tailwind CSS, App Router, Backend Mock API Routes.

## Run
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
npm run dev -- -p 3001
```

## Pages
- `/` overview
- `/products` Products
- `/warehouses` Warehouses
- `/movements` Movements
- `/suppliers` Suppliers
- `/purchase-orders` Purchase Orders
- `/alerts` Alerts
- `/counts` Counts
- `/settings` Settings

## API Routes
- `/api/health`
- `/api/products` GET/POST
- `/api/warehouses` GET/POST
- `/api/movements` GET/POST
- `/api/suppliers` GET/POST
- `/api/purchase-orders` GET/POST
- `/api/alerts` GET/POST
- `/api/counts` GET/POST
- `/api/settings` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
