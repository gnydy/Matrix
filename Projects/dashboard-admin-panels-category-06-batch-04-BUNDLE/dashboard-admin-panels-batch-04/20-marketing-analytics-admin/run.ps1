$ErrorActionPreference = "Stop"
Write-Host "Installing and running Marketing Analytics Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
