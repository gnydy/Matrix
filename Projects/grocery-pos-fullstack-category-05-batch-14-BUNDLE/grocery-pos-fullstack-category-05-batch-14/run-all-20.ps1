$root = $PSScriptRoot
$templates = Get-ChildItem -Path $root -Directory | Where-Object { (Test-Path (Join-Path $_.FullName 'package.json')) -and ($_.Name -ne 'zips') } | Sort-Object Name | Select-Object -First 20
$port = 3001
foreach ($template in $templates) {
  $currentPort = $port
  Start-Process powershell -ArgumentList @('-NoExit','-Command',"cd `"$($template.FullName)`"; npm run dev -- -p $currentPort")
  Write-Host ($template.Name + ' -> http://localhost:' + $currentPort) -ForegroundColor Green
  Start-Sleep -Milliseconds 700
  $port++
}
