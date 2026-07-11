$root = "/mnt/data/categories-26-to-50-batch-16/category-38-interior-design-websites"
$templates = Get-ChildItem -Path $root -Directory | Where-Object { (Test-Path (Join-Path $_.FullName "package.json")) -and ($_.Name -ne "zips") } | Sort-Object Name | Select-Object -First 20
$port = 3001
foreach ($template in $templates) {
  $p = $port
  Start-Process powershell -ArgumentList @("-NoExit","-Command","cd `"$($template.FullName)`"; npm run dev -- -p $p")
  Start-Sleep -Seconds 1
  $port++
}
Write-Host "Started category 38 from 3001 to 3020" -ForegroundColor Green
