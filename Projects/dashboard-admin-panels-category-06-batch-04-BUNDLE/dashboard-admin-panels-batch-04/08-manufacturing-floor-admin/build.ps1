$ErrorActionPreference = "Stop"
Write-Host "Building Manufacturing Floor Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
