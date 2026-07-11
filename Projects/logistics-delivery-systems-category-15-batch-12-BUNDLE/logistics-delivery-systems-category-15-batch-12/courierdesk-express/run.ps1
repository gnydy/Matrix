$ErrorActionPreference = "Stop"
Write-Host "Starting CourierDesk Express" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
