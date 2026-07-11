$ErrorActionPreference = "Stop"
Write-Host "Building CourierDesk Express" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
