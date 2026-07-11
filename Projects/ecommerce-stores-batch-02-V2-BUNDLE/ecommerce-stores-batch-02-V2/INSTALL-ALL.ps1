$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Get-ChildItem -Path $root -Directory | Where-Object { Test-Path (Join-Path $_.FullName 'package.json') } | ForEach-Object {
    Write-Host "Installing $($_.Name)" -ForegroundColor Cyan
    Push-Location $_.FullName
    npm install
    Pop-Location
}
