$ErrorActionPreference = "Stop"
Write-Host "Building PharmaRoute Medical Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
