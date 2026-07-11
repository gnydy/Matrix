$ErrorActionPreference = "Stop"
Write-Host "Building CargoGate Freight Portal" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
