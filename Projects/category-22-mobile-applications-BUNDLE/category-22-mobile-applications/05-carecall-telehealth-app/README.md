# CareCall Telehealth App

Doctor booking and video visit mock.

Category: Mobile Applications  
Layout pattern: Mobile-device preview and app-screen gallery.

## Tech
Next.js, TypeScript, Tailwind CSS, App Router, Backend Mock API Routes.

## Run
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
npm run dev -- -p 3001
```

## Pages
- `/` overview
- `/overview` Overview
- `/app-flow` App Flow
- `/screens` Screens
- `/notifications` Notifications
- `/analytics` Analytics
- `/account` Account
- `/admin` Admin
- `/settings` Settings

## API Routes
- `/api/health`
- `/api/overview` GET/POST
- `/api/app-flow` GET/POST
- `/api/screens` GET/POST
- `/api/notifications` GET/POST
- `/api/analytics` GET/POST
- `/api/account` GET/POST
- `/api/admin` GET/POST
- `/api/settings` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
