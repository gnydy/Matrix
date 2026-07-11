$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\cloudkeeper-hosting-panel\*" -DestinationPath ".\cloudkeeper-hosting-panel.zip" -Force
Write-Host "Created cloudkeeper-hosting-panel.zip"
