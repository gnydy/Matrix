$ErrorActionPreference = "Stop"
Write-Host "Building ParcelTrack Customer Portal" -ForegroundColor Cyan
if (!(Test-Path "node_modules")) { npm install }
npm run build
