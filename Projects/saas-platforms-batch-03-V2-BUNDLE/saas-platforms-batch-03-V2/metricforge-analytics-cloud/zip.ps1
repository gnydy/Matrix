$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\metricforge-analytics-cloud\*" -DestinationPath ".\metricforge-analytics-cloud.zip" -Force
Write-Host "Created metricforge-analytics-cloud.zip"
