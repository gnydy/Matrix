$ErrorActionPreference = "Stop"
Write-Host "Installing and running Executive Command Center..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
