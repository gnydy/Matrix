$ErrorActionPreference = "Stop"
Write-Host "Starting PharmaRoute Medical Logistics" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
