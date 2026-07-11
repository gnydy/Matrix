$ErrorActionPreference = "Stop"
Write-Host "Building Commerce Backoffice Pro..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
