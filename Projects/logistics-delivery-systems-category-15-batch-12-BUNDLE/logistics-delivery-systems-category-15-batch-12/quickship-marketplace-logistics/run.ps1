$ErrorActionPreference = "Stop"
Write-Host "Starting QuickShip Marketplace Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
