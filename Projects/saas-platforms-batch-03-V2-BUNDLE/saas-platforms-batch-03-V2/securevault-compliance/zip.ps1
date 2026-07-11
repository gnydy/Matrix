$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\securevault-compliance\*" -DestinationPath ".\securevault-compliance.zip" -Force
Write-Host "Created securevault-compliance.zip"
