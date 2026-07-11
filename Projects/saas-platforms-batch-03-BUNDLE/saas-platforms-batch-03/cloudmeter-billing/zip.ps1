$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot
$ProjectName = Split-Path -Leaf $PSScriptRoot
$Parent = Split-Path -Parent $PSScriptRoot
$ZipFolder = Join-Path $Parent "zips"
$Destination = Join-Path $ZipFolder "$ProjectName.zip"
New-Item -ItemType Directory -Force -Path $ZipFolder | Out-Null
Push-Location $Parent
Compress-Archive -Path ".\$ProjectName\*" -DestinationPath $Destination -Force
Pop-Location
Write-Host "ZIP created: $Destination"
