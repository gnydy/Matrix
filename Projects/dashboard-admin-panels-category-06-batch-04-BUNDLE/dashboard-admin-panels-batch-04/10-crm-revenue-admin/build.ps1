$ErrorActionPreference = "Stop"
Write-Host "Building CRM Revenue Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
