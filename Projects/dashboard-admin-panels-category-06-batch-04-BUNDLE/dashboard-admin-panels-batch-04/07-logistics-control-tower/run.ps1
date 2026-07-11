$ErrorActionPreference = "Stop"
Write-Host "Installing and running Logistics Control Tower..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
