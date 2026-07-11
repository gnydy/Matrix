$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\teamdock-project-ops\*" -DestinationPath ".\teamdock-project-ops.zip" -Force
Write-Host "Created teamdock-project-ops.zip"
