$ErrorActionPreference = "Stop"
Write-Host "Installing and running Hospital Admin Suite..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
