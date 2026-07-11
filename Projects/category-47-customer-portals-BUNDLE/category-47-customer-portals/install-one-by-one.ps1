$root = "/mnt/data/categories-26-to-50-batch-16/category-47-customer-portals"
$templates = Get-ChildItem -Path $root -Directory | Where-Object { (Test-Path (Join-Path $_.FullName "package.json")) -and ($_.Name -ne "zips") } | Sort-Object Name
foreach ($template in $templates) {
  Write-Host "Installing $($template.Name)" -ForegroundColor Cyan
  Set-Location $template.FullName
  npm install --include=optional --legacy-peer-deps --no-audit --no-fund
  if ($LASTEXITCODE -ne 0) { Write-Host "FAILED $($template.Name)" -ForegroundColor Red; break }
}
Set-Location $root
