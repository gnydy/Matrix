$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\docsprint-knowledge-base\*" -DestinationPath ".\docsprint-knowledge-base.zip" -Force
Write-Host "Created docsprint-knowledge-base.zip"
