$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot"
$parent = Split-Path -Parent $PSScriptRoot
$destination = Join-Path $parent "zips\sentinel-cyber-trust.zip"
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $destination) | Out-Null
Compress-Archive -Path "$PSScriptRoot\*" -DestinationPath $destination -Force
Write-Host "Created $destination"
