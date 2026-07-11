$ErrorActionPreference = "Stop"
Write-Host "Installing and running Booking Admin Engine..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
