$ErrorActionPreference = "Stop"
Write-Host "Installing and running Manufacturing Floor Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
