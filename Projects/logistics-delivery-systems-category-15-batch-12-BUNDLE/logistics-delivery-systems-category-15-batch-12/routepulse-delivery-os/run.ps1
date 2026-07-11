$ErrorActionPreference = "Stop"
Write-Host "Starting RoutePulse Delivery OS" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
