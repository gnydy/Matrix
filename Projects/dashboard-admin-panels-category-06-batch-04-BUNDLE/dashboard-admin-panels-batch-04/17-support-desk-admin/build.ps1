$ErrorActionPreference = "Stop"
Write-Host "Building Support Desk Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
