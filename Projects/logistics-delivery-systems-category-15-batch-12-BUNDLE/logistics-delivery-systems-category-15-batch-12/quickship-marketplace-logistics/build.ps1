$ErrorActionPreference = "Stop"
Write-Host "Building QuickShip Marketplace Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
