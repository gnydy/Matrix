$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$templates = Get-ChildItem -Path $root -Directory | Where-Object { (Test-Path (Join-Path $_.FullName 'package.json')) -and ($_.Name -ne 'zips') } | Sort-Object Name
foreach ($template in $templates) {
  Write-Host ''
  Write-Host ('Installing: ' + $template.Name) -ForegroundColor Cyan
  Set-Location $template.FullName
  npm install --prefer-offline --include=optional --legacy-peer-deps --no-audit --no-fund
  if ($LASTEXITCODE -ne 0) { throw ('Install failed: ' + $template.Name) }
}
Set-Location $root
Write-Host 'All templates installed one by one.' -ForegroundColor Green
