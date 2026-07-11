$ErrorActionPreference = "Stop"
Write-Host "Building HeavyHaul Project Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
