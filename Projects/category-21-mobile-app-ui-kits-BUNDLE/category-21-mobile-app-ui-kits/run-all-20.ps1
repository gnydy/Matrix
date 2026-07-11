$root = "/mnt/data/categories-17-to-25-batch-15/category-21-mobile-app-ui-kits"
$templates = Get-ChildItem -Path $root -Directory | Where-Object { Test-Path (Join-Path $_.FullName "package.json") } | Sort-Object Name | Select-Object -First 20
$port = 3001
foreach ($template in $templates) {
  $p = $port
  Start-Process powershell -ArgumentList @("-NoExit", "-Command", "cd `\"$($template.FullName)`\"; npm run dev -- -p $p")
  Write-Host "Running $($template.Name) on http://localhost:$p" -ForegroundColor Green
  Start-Sleep -Seconds 1
  $port++
}
