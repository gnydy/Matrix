$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\marketpilot-campaign-os\*" -DestinationPath ".\marketpilot-campaign-os.zip" -Force
Write-Host "Created marketpilot-campaign-os.zip"
