$ErrorActionPreference = "Stop"
$projectName = Split-Path -Leaf (Get-Location)
$destination = Join-Path (Split-Path -Parent (Get-Location)) "$projectName.zip"
if (Test-Path $destination) { Remove-Item $destination -Force }
Compress-Archive -Path .\* -DestinationPath $destination -Force
Write-Host "Created $destination" -ForegroundColor Green
