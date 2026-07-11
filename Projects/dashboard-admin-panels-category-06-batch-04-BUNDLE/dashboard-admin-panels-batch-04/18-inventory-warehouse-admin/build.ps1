$ErrorActionPreference = "Stop"
Write-Host "Building Inventory Warehouse Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
