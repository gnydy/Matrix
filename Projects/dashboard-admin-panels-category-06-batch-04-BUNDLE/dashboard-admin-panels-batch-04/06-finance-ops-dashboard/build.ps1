$ErrorActionPreference = "Stop"
Write-Host "Building Finance Ops Dashboard..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
