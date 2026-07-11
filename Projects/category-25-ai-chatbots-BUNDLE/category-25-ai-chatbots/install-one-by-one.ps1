$root = "/mnt/data/categories-17-to-25-batch-15/category-25-ai-chatbots"
$templates = Get-ChildItem -Path $root -Directory | Where-Object { Test-Path (Join-Path $_.FullName "package.json") } | Sort-Object Name
foreach ($template in $templates) {
  Write-Host "Installing $($template.Name)" -ForegroundColor Cyan
  Set-Location $template.FullName
  npm install --include=optional --legacy-peer-deps --no-audit --no-fund
  if ($LASTEXITCODE -ne 0) { Write-Host "Failed $($template.Name)" -ForegroundColor Red; break }
}
Set-Location $root
