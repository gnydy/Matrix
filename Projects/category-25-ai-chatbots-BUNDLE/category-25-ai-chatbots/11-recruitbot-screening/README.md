# RecruitBot Screening

Candidate screening and interview bot.

Category: AI Chatbots  
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
- `/chat` Chat
- `/knowledge` Knowledge
- `/handoff` Handoff
- `/analytics` Analytics
- `/training` Training
- `/channels` Channels
- `/settings` Settings
- `/api` Api

## API Routes
- `/api/health`
- `/api/chat` GET/POST
- `/api/knowledge` GET/POST
- `/api/handoff` GET/POST
- `/api/analytics` GET/POST
- `/api/training` GET/POST
- `/api/channels` GET/POST
- `/api/settings` GET/POST
- `/api/api` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
