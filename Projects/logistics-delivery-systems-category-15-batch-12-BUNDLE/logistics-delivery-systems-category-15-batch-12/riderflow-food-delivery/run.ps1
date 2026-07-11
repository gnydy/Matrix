$ErrorActionPreference = "Stop"
Write-Host "Starting RiderFlow Food Delivery" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
