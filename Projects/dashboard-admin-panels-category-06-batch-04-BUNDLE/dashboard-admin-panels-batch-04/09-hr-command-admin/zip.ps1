$ErrorActionPreference = "Stop"
$ProjectName = "09-hr-command-admin"
$Destination = Join-Path (Split-Path -Parent (Get-Location)) "zips\$ProjectName.zip"
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Destination) | Out-Null
Compress-Archive -Path .\* -DestinationPath $Destination -Force
Write-Host "ZIP created: $Destination" -ForegroundColor Green
