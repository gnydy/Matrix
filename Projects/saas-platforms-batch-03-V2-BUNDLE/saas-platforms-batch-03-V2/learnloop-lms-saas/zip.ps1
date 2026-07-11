$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\learnloop-lms-saas\*" -DestinationPath ".\learnloop-lms-saas.zip" -Force
Write-Host "Created learnloop-lms-saas.zip"
