$ErrorActionPreference = "Stop"
Write-Host "Installing dependencies if needed..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) {
  npm install
}
Write-Host "Starting Next.js development server..." -ForegroundColor Green
npm run dev
