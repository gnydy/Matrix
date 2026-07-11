$ErrorActionPreference = "Stop"
Write-Host "Starting ShipMatrix 3PL Portal" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
