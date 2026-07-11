$ErrorActionPreference = "Stop"
Write-Host "Building Hospital Admin Suite..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
