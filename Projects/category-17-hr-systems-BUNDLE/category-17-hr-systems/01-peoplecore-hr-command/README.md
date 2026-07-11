# PeopleCore HR Command

Enterprise HR dashboard for medium companies.

Category: HR Systems  
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
- `/employees` Employees
- `/attendance` Attendance
- `/payroll` Payroll
- `/recruitment` Recruitment
- `/performance` Performance
- `/leave` Leave
- `/documents` Documents
- `/settings` Settings

## API Routes
- `/api/health`
- `/api/employees` GET/POST
- `/api/attendance` GET/POST
- `/api/payroll` GET/POST
- `/api/recruitment` GET/POST
- `/api/performance` GET/POST
- `/api/leave` GET/POST
- `/api/documents` GET/POST
- `/api/settings` GET/POST

## Client delivery notes
This is a sellable frontend + mock-backend template. Production needs database, auth, RBAC, audit logs, and deployment hardening.
