$ErrorActionPreference = "Stop"
Write-Host "Starting FleetNova Logistics Control" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
