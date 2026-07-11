$ErrorActionPreference = "Stop"
Write-Host "Building DriverOps Mobile Control" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
