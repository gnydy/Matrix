$ErrorActionPreference = "Stop"
$ProjectName = "13-cms-editorial-admin"
$Destination = Join-Path (Split-Path -Parent (Get-Location)) "zips\$ProjectName.zip"
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Destination) | Out-Null
Compress-Archive -Path .\* -DestinationPath $Destination -Force
Write-Host "ZIP created: $Destination" -ForegroundColor Green
