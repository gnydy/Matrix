$ErrorActionPreference = "Stop"
Write-Host "Building ColdChain Monitor" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
