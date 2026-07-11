$ErrorActionPreference = "Stop"
Write-Host "Building CMS Editorial Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
