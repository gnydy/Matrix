# تشغيل Matrix على Docker — Windows
$ErrorActionPreference = "Continue"
Set-Location $PSScriptRoot\..

Write-Host ""
Write-Host "Matrix Docker — build and start" -ForegroundColor Cyan
Write-Host ""

docker info 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Docker is not running. Start Docker Desktop and wait for Engine running." -ForegroundColor Yellow
    exit 1
}

docker compose --env-file .env.docker up --build -d
if ($LASTEXITCODE -ne 0) {
    Write-Host "docker compose failed. Try: npm run docker:logs" -ForegroundColor Red
    exit 1
}

Start-Sleep -Seconds 5
docker compose ps

Write-Host ""
Write-Host "Opening browser..." -ForegroundColor Green
Start-Process "http://localhost:8080/"
Start-Sleep -Seconds 1
Start-Process "http://localhost:8080/control/login"

Write-Host ""
Write-Host "Site:           http://localhost:8080/"
Write-Host "Control Center: http://localhost:8080/control"
Write-Host "Login: admin@matrix.local / matrix_admin_change_me"
Write-Host ""
