$ProjectName = "restaurant-reservation-landing"
$Parent = Split-Path -Parent (Get-Location)
$Destination = Join-Path $Parent "$ProjectName.zip"

Write-Host "Creating ZIP: $Destination" -ForegroundColor Cyan
if (Test-Path $Destination) {
  Remove-Item $Destination -Force
}

Compress-Archive -Path ".\*" -DestinationPath $Destination -Force
Write-Host "Done." -ForegroundColor Green
