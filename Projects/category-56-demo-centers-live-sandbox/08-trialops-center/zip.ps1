$project = Split-Path -Leaf (Get-Location)
$destination = Join-Path (Split-Path -Parent (Get-Location)) "$project.zip"
Compress-Archive -Path .\* -DestinationPath $destination -Force
Write-Host "ZIP created: $destination" -ForegroundColor Green
