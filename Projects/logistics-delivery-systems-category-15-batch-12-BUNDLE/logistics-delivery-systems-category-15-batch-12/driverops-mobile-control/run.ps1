$ErrorActionPreference = "Stop"
Write-Host "Starting DriverOps Mobile Control" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
