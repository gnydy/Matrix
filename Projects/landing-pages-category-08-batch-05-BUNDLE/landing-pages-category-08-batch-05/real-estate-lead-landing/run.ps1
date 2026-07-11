Write-Host "Installing dependencies and starting dev server..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) {
  npm install
}
npm run dev
