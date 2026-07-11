$ErrorActionPreference = "Stop"
Write-Host "Building GreenFleet Carbon Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
