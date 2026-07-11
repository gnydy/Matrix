$ErrorActionPreference = "Stop"
Write-Host "Installing and running Cloud Hosting Panel..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
