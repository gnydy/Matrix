$ErrorActionPreference = "Stop"
Write-Host "Starting CargoGate Freight Portal" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
