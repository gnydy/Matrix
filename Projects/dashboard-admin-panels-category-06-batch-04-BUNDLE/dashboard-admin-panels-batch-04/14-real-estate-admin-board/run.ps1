$ErrorActionPreference = "Stop"
Write-Host "Installing and running Real Estate Admin Board..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
