# AIMarketing Planner

Campaign angle and content calendar generator.

Category: AI Applications  
Layout pattern: Timeline and milestone driven workflow.

## Tech
Next.js, TypeScript, Tailwind CSS, App Router, Backend Mock API Routes.

## Run
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
npm run dev -- -p 3001
```

## Pages
- `/` overview
- `/prompt` Prompt
- `/results` Results
- `/history` History
- `/templates` Templates
- `/usage` Usage
- `/models` Models
- `/settings` Settings
- `/api` Api

## API Routes
- `/api/health`
- `/api/prompt` GET/POST
- `/api/results` GET/POST
- `/api/history` GET/POST
- `/api/templates` GET/POST
- `/api/usage` GET/POST
- `/api/models` GET/POST
- `/api/settings` GET/POST
- `/api/api` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
