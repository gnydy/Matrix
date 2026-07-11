$ErrorActionPreference = "Stop"
Write-Host "Building FleetNova Logistics Control" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
