$ErrorActionPreference = "Stop"
Write-Host "Building SaaS Admin Control..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
