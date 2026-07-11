$ErrorActionPreference = "Stop"
Write-Host "Building Project Admin Kanban..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
