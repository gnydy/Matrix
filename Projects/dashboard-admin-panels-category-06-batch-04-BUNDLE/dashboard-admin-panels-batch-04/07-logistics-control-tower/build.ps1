$ErrorActionPreference = "Stop"
Write-Host "Building Logistics Control Tower..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
