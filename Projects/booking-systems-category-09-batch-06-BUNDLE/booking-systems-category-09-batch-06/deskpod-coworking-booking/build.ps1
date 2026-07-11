$ErrorActionPreference = "Stop"
Write-Host "Installing dependencies if needed..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) {
  npm install
}
Write-Host "Building production bundle..." -ForegroundColor Green
npm run build
