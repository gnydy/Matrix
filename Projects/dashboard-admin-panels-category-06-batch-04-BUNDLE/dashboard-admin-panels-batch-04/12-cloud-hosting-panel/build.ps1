$ErrorActionPreference = "Stop"
Write-Host "Building Cloud Hosting Panel..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
