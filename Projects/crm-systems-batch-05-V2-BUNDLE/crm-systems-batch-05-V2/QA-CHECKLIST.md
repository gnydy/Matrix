# QA Checklist — CRM Systems Batch 05 V2

## Structure
- [x] 20 independent project folders
- [x] Every project has package.json
- [x] Every project has Next.js app structure
- [x] Every project has README.md
- [x] Every project has run.ps1, build.ps1, zip.ps1
- [x] Every project has mock CRM data
- [x] Every project has dashboard/account/pipeline pages

## UX
- [x] Different CRM concepts
- [x] Different CRM business positioning
- [x] CRM-specific UI elements
- [x] Responsive layouts
- [x] Tables, cards, pipeline, activity, assistant

## Local Testing Required
Run on Windows:
```powershell
powershell -ExecutionPolicy Bypass -File ".\INSTALL-ALL.ps1"
powershell -ExecutionPolicy Bypass -File ".\RUN-ALL-20-PORTS.ps1"
```
