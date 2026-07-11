# LegalCase Ticket Desk

Category: 50 - Ticket Systems

## Description
Ticket lists, priorities, agents, SLA, replies, statuses, and escalation UI. This template uses a distinct UI pattern: dense admin console with left rail and KPI ribbon.

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
