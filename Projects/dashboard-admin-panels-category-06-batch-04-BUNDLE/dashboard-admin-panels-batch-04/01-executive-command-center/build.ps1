$ErrorActionPreference = "Stop"
Write-Host "Building Executive Command Center..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
