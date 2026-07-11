$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\bookgrid-appointment-saas\*" -DestinationPath ".\bookgrid-appointment-saas.zip" -Force
Write-Host "Created bookgrid-appointment-saas.zip"
