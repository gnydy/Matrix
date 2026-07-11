$ErrorActionPreference = "Stop"
Write-Host "Installing and running Finance Ops Dashboard..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
