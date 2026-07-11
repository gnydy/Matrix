$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\routewise-delivery-saas\*" -DestinationPath ".\routewise-delivery-saas.zip" -Force
Write-Host "Created routewise-delivery-saas.zip"
