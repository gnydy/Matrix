$ErrorActionPreference = "Stop"
Write-Host "Building AirCargo Ops Board" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
