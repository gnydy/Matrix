$ErrorActionPreference = "Stop"
Write-Host "Building RiderFlow Food Delivery" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
