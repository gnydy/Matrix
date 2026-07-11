$ErrorActionPreference = "Stop"
Write-Host "Starting MultiBranch Dispatch HQ" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run dev
