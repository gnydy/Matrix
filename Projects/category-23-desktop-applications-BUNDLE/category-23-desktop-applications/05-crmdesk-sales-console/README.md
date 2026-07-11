# CRMDesk Sales Console

Sales desktop with pipeline and accounts.

Category: Desktop Applications  
Layout pattern: Desktop shell with window chrome and module launcher.

## Tech
Next.js, TypeScript, Tailwind CSS, App Router, Backend Mock API Routes.

## Run
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
npm run dev -- -p 3001
```

## Pages
- `/` overview
- `/workspace` Workspace
- `/records` Records
- `/tools` Tools
- `/reports` Reports
- `/terminal` Terminal
- `/preferences` Preferences
- `/users` Users
- `/settings` Settings

## API Routes
- `/api/health`
- `/api/workspace` GET/POST
- `/api/records` GET/POST
- `/api/tools` GET/POST
- `/api/reports` GET/POST
- `/api/terminal` GET/POST
- `/api/preferences` GET/POST
- `/api/users` GET/POST
- `/api/settings` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
