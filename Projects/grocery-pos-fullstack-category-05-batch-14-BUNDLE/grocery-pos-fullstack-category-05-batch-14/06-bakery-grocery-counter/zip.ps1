$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot
$destination = Join-Path $PSScriptRoot '..\zips\06-bakery-grocery-counter.zip'
New-Item -ItemType Directory -Force -Path (Split-Path $destination) | Out-Null
Compress-Archive -Path .\* -DestinationPath $destination -Force
Write-Host 'Created ZIP:' $destination
