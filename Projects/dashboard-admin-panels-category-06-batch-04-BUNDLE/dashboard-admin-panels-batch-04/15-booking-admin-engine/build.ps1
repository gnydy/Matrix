$ErrorActionPreference = "Stop"
Write-Host "Building Booking Admin Engine..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
