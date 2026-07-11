Write-Host "Building Next.js project..." -ForegroundColor Cyan
if (!(Test-Path "node_modules")) {
  npm install
}
npm run build
