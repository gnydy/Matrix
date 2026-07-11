$ErrorActionPreference = "Stop"
Write-Host "Starting ReturnLoop Reverse Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
