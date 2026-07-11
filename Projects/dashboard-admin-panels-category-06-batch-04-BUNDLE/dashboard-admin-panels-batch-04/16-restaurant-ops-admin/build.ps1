$ErrorActionPreference = "Stop"
Write-Host "Building Restaurant Ops Admin..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
