$ErrorActionPreference = "Stop"
$project = Split-Path -Leaf $PSScriptRoot
$destination = Join-Path (Split-Path $PSScriptRoot -Parent) "$project.zip"
Compress-Archive -Path "$PSScriptRoot\*" -DestinationPath $destination -Force
Write-Host "Created $destination"
