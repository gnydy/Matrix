$ErrorActionPreference = "Stop"
Write-Host "Installing and running SOC Security Console..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
