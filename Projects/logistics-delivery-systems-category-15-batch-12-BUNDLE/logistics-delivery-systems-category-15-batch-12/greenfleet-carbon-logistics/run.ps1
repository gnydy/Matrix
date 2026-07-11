$ErrorActionPreference = "Stop"
Write-Host "Starting GreenFleet Carbon Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
