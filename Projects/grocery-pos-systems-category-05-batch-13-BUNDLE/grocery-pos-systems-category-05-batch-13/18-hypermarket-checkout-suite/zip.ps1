$project = Split-Path $PSScriptRoot -Leaf
$destination = Join-Path (Split-Path $PSScriptRoot -Parent) ($project + '.zip')
Compress-Archive -Path (Join-Path $PSScriptRoot '*') -DestinationPath $destination -Force
Write-Host "Created $destination" -ForegroundColor Green
