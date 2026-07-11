$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\salesbridge-crm-saas\*" -DestinationPath ".\salesbridge-crm-saas.zip" -Force
Write-Host "Created salesbridge-crm-saas.zip"
