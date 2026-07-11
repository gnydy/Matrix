# PayrollAccounting Link

Payroll journal and salary liabilities.

Category: Accounting Systems  
Layout pattern: Executive card grid with insights and feature tiles.

## Tech
Next.js, TypeScript, Tailwind CSS, App Router, Backend Mock API Routes.

## Run
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
npm run dev -- -p 3001
```

## Pages
- `/` overview
- `/invoices` Invoices
- `/expenses` Expenses
- `/revenue` Revenue
- `/tax` Tax
- `/ledger` Ledger
- `/reports` Reports
- `/vendors` Vendors
- `/settings` Settings

## API Routes
- `/api/health`
- `/api/invoices` GET/POST
- `/api/expenses` GET/POST
- `/api/revenue` GET/POST
- `/api/tax` GET/POST
- `/api/ledger` GET/POST
- `/api/reports` GET/POST
- `/api/vendors` GET/POST
- `/api/settings` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
