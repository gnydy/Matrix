$ErrorActionPreference = "Stop"
Write-Host "Installing and running Academy Admin Hub..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
