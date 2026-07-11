$ErrorActionPreference = "Stop"
Write-Host "Building MultiBranch Dispatch HQ" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
