$ErrorActionPreference = "Stop"

Write-Host "Running local project maintenance..." -ForegroundColor Cyan

if (Test-Path "package.json") {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install

    Write-Host "Running lint..." -ForegroundColor Yellow
    npm run lint --if-present

    Write-Host "Running typecheck..." -ForegroundColor Yellow
    npm run typecheck --if-present

    Write-Host "Running tests..." -ForegroundColor Yellow
    npm run test --if-present

    Write-Host "Running build..." -ForegroundColor Yellow
    npm run build --if-present
}
else {
    Write-Host "No package.json found. Skipping Node.js checks." -ForegroundColor Yellow
}

Write-Host "Running security guards..." -ForegroundColor Yellow
powershell -ExecutionPolicy Bypass -File "scripts/no-delete-guard.ps1"
powershell -ExecutionPolicy Bypass -File "scripts/dangerous-command-guard.ps1"

Write-Host "Maintenance checks completed." -ForegroundColor Green
