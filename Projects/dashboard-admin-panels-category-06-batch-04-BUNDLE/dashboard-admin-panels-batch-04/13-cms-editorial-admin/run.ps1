$ErrorActionPreference = "Stop"
Write-Host "Installing and running CMS Editorial Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
