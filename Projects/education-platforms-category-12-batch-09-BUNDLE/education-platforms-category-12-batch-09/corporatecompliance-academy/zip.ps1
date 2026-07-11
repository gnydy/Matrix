$ErrorActionPreference = "Stop"
$project = "corporatecompliance-academy"
$parent = Split-Path -Parent (Get-Location)
$destination = Join-Path $parent "$project.zip"
Compress-Archive -Path .\* -DestinationPath $destination -Force
Write-Host "Created ZIP: $destination"
