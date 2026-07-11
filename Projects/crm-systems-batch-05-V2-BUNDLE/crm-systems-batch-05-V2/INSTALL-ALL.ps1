$ErrorActionPreference = "Continue"
$root = $PSScriptRoot
Get-ChildItem -Path $root -Directory | Where-Object { Test-Path (Join-Path $_.FullName "package.json") } | ForEach-Object {
    Write-Host "Installing $($_.Name)" -ForegroundColor Cyan
    Push-Location $_.FullName
    npm install
    Pop-Location
}
Write-Host "Install loop finished." -ForegroundColor Green
