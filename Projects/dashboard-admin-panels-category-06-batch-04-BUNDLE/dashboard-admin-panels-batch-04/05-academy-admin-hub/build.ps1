$ErrorActionPreference = "Stop"
Write-Host "Building Academy Admin Hub..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
