$ErrorActionPreference = "Stop"
$ProjectName = "rentdesk-equipment-booking"
$Parent = Split-Path -Parent (Get-Location)
$Destination = Join-Path $Parent "$ProjectName.zip"

if (Test-Path $Destination) {
  Remove-Item $Destination -Force
}

Compress-Archive -Path ".\*" -DestinationPath $Destination -Force
Write-Host "Created ZIP: $Destination" -ForegroundColor Green
