$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot"
$destination = Join-Path (Split-Path "$PSScriptRoot" -Parent) "zips\saas-revenue-crm.zip"
New-Item -ItemType Directory -Path (Split-Path $destination -Parent) -Force | Out-Null
Compress-Archive -Path "$PSScriptRoot\*" -DestinationPath $destination -Force
Write-Host "Created $destination"
