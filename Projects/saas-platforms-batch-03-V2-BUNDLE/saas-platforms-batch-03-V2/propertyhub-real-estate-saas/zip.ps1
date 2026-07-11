$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\propertyhub-real-estate-saas\*" -DestinationPath ".\propertyhub-real-estate-saas.zip" -Force
Write-Host "Created propertyhub-real-estate-saas.zip"
