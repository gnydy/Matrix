$ErrorActionPreference = "Stop"
Write-Host "Installing and running Commerce Backoffice Pro..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
