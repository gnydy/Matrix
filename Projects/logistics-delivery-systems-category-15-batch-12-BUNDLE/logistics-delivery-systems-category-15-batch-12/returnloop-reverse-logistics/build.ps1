$ErrorActionPreference = "Stop"
Write-Host "Building ReturnLoop Reverse Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
