$ProjectName = "ramenhouse-queue"
$Parent = Split-Path -Parent (Get-Location)
$Destination = Join-Path $Parent "$ProjectName.zip"
Compress-Archive -Path .\* -DestinationPath $Destination -Force
Write-Host "ZIP created at $Destination" -ForegroundColor Green
