$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\hirelane-recruitment-suite\*" -DestinationPath ".\hirelane-recruitment-suite.zip" -Force
Write-Host "Created hirelane-recruitment-suite.zip"
