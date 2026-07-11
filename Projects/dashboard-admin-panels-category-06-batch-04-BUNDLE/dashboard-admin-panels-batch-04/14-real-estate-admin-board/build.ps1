$ErrorActionPreference = "Stop"
Write-Host "Building Real Estate Admin Board..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
