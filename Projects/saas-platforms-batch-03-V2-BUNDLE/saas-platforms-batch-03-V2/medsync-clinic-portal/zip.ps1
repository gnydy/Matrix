$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\medsync-clinic-portal\*" -DestinationPath ".\medsync-clinic-portal.zip" -Force
Write-Host "Created medsync-clinic-portal.zip"
