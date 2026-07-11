$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$destination = Join-Path $PSScriptRoot '..\zips\08-night-shift-convenience.zip'
New-Item -ItemType Directory -Force -Path (Split-Path $destination) | Out-Null
Compress-Archive -Path .\* -DestinationPath $destination -Force
Write-Host 'Created ZIP:' $destination
