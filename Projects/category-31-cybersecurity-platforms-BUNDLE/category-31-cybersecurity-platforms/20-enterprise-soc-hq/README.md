# Enterprise SOC HQ

Category: 31 - Cybersecurity Platforms

## Description
SOC dashboards, threat monitoring, compliance, and security services. This template uses a distinct UI pattern: card-based workspace with filter bar and live status rail.

## Tech
Next.js, TypeScript, Tailwind CSS, API Routes, Mock Data.

## Install
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
```

## Run
```powershell
npm run dev -- -p 3001
```

## API Mock
- `/api/health`
- `/api/records`

## Client Notes
Frontend and backend mock only. Production requires database, authentication, permissions, validation, audit logs, deployment hardening, and real integrations.
