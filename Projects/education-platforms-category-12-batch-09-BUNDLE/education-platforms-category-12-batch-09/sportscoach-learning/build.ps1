$ErrorActionPreference = "Stop"
Write-Host "Installing dependencies and building project..."
npm install
npm run build
