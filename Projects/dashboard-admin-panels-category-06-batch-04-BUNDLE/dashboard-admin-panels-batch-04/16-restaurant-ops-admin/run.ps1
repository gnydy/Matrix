$ErrorActionPreference = "Stop"
Write-Host "Installing and running Restaurant Ops Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
