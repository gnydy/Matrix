# DesignCampus Studio

Design bootcamp and creative learning platform

## Commercial Description
A polished education platform frontend for design schools, ui/ux trainers, and creative academies. It includes LMS-style pages, student dashboard, teacher dashboard, progress tracking, admin operations, mock data, and commercial UI sections.

## Use Case
Show design tracks, critique sessions, project galleries, and student progress.

## Target Client
Design schools, UI/UX trainers, and creative academies

## Technology Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- Component-based frontend architecture
- Mock data in `data/site.ts`
- Basic SEO Metadata API

## Pages
- `/` Overview landing page
- `/courses` Course catalog
- `/student-dashboard` Learner dashboard
- `/teacher-dashboard` Instructor dashboard
- `/progress` Progress tracking
- `/admin` Admin operations mock

## Installation
```powershell
npm install
```

## Run
```powershell
npm run dev
```

or:

```powershell
.un.ps1
```

## Build
```powershell
.uild.ps1
```

## Create ZIP
```powershell
.\zip.ps1
```

## How to edit content
Edit `data/site.ts` to change text, course names, metrics, features, personas, pricing, and positioning.

## How to edit colors
Change the `theme` object in `data/site.ts` and Tailwind utility classes.

## How to replace images
This version uses CSS/placeholder interface blocks. Add images inside `public/` and reference them from components when needed.

## Client Delivery Notes
This is a frontend template suitable for portfolio display and sale as a UI template. It is not a backend LMS yet. A production LMS needs authentication, database, payments, content storage, file upload, permissions, certificates, and audit logs.
