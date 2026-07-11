$ErrorActionPreference = "Stop"
Write-Host "Building DeliveryPay COD Control" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
