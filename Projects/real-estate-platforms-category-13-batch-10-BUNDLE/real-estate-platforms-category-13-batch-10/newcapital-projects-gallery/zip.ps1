$ErrorActionPreference = 'Stop'
$ProjectName = 'newcapital-projects-gallery'
$Destination = Join-Path (Resolve-Path '..') 'zips'
if (!(Test-Path $Destination)) { New-Item -ItemType Directory -Path $Destination | Out-Null }
Compress-Archive -Path .\* -DestinationPath (Join-Path $Destination "$ProjectName.zip") -Force
Write-Host "Created ZIP: $Destination\$ProjectName.zip"
