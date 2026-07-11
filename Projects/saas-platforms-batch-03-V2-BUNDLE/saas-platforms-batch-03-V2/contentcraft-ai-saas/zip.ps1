$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\contentcraft-ai-saas\*" -DestinationPath ".\contentcraft-ai-saas.zip" -Force
Write-Host "Created contentcraft-ai-saas.zip"
