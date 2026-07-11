# TaskForge Project Desk

Task management with project health cards.

Category: Project Management Systems  
Layout pattern: Left command sidebar, KPI rail, dense admin workspace.

## Tech
Next.js, TypeScript, Tailwind CSS, App Router, Backend Mock API Routes.

## Run
```powershell
npm install --include=optional --legacy-peer-deps --no-audit --no-fund
npm run dev -- -p 3001
```

## Pages
- `/` overview
- `/tasks` Tasks
- `/kanban` Kanban
- `/timeline` Timeline
- `/milestones` Milestones
- `/teams` Teams
- `/reports` Reports
- `/files` Files
- `/settings` Settings

## API Routes
- `/api/health`
- `/api/tasks` GET/POST
- `/api/kanban` GET/POST
- `/api/timeline` GET/POST
- `/api/milestones` GET/POST
- `/api/teams` GET/POST
- `/api/reports` GET/POST
- `/api/files` GET/POST
- `/api/settings` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
