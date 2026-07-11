$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\socialpulse-community-saas\*" -DestinationPath ".\socialpulse-community-saas.zip" -Force
Write-Host "Created socialpulse-community-saas.zip"
