$ErrorActionPreference = "Stop"
Write-Host "Starting MetroRoute Public Delivery" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
