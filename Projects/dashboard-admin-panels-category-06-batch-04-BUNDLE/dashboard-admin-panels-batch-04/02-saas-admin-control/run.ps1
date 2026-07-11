$ErrorActionPreference = "Stop"
Write-Host "Installing and running SaaS Admin Control..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
