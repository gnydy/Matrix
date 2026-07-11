$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\supportnest-helpdesk\*" -DestinationPath ".\supportnest-helpdesk.zip" -Force
Write-Host "Created supportnest-helpdesk.zip"
