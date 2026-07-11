# CryptoPortfolio Kit

Portfolio, watchlist and trade mock UI.

Category: Mobile App UI Kits  
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
- `/onboarding` Onboarding
- `/auth` Auth
- `/home` Home
- `/profile` Profile
- `/cards` Cards
- `/lists` Lists
- `/settings` Settings
- `/components` Components

## API Routes
- `/api/health`
- `/api/onboarding` GET/POST
- `/api/auth` GET/POST
- `/api/home` GET/POST
- `/api/profile` GET/POST
- `/api/cards` GET/POST
- `/api/lists` GET/POST
- `/api/settings` GET/POST
- `/api/components` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
