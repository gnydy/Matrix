$ErrorActionPreference = "Stop"
Write-Host "Building WarehouseDispatch Hub" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
