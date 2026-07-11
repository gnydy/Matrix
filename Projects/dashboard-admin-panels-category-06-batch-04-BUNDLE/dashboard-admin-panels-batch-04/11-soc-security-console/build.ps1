$ErrorActionPreference = "Stop"
Write-Host "Building SOC Security Console..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
