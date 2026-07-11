$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\opspulse-workflow-saas\*" -DestinationPath ".\opspulse-workflow-saas.zip" -Force
Write-Host "Created opspulse-workflow-saas.zip"
