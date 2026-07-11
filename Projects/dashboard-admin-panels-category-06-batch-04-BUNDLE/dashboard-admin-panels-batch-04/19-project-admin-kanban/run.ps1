$ErrorActionPreference = "Stop"
Write-Host "Installing and running Project Admin Kanban..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
