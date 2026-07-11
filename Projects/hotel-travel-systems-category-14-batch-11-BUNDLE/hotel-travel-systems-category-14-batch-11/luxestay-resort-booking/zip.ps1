Set-Location $PSScriptRoot
$ProjectName = "luxestay-resort-booking"
$Destination = Join-Path (Split-Path $PSScriptRoot -Parent) "zips\$ProjectName.zip"
if (!(Test-Path (Split-Path $Destination -Parent))) { New-Item -ItemType Directory -Path (Split-Path $Destination -Parent) | Out-Null }
Compress-Archive -Path (Join-Path $PSScriptRoot "*") -DestinationPath $Destination -Force
Write-Host "Created $Destination"
