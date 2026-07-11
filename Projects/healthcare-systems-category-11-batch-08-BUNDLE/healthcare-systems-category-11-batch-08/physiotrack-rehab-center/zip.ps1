$ProjectRoot = $PSScriptRoot
$TemplateName = Split-Path $ProjectRoot -Leaf
$Destination = Join-Path (Split-Path $ProjectRoot -Parent) ($TemplateName + '.zip')
if (Test-Path $Destination) { Remove-Item $Destination -Force }
Compress-Archive -Path (Join-Path $ProjectRoot '*') -DestinationPath $Destination -Force
Write-Host "Created ZIP: $Destination"
