$ErrorActionPreference = "Stop"
Write-Host "Building RoutePulse Delivery OS" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
