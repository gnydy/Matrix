$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\formgrid-no-code-builder\*" -DestinationPath ".\formgrid-no-code-builder.zip" -Force
Write-Host "Created formgrid-no-code-builder.zip"
