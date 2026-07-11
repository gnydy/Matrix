$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\paynode-fintech-billing\*" -DestinationPath ".\paynode-fintech-billing.zip" -Force
Write-Host "Created paynode-fintech-billing.zip"
