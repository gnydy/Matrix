$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$templates = Get-ChildItem -Path $root -Directory | Where-Object {
    (Test-Path (Join-Path $_.FullName "package.json")) -and ($_.Name -ne "zips")
} | Sort-Object Name | Select-Object -First 20
$port = 3001
foreach ($template in $templates) {
    $currentPort = $port
    $path = $template.FullName
    $name = $template.Name
    Write-Host "Running $name on http://localhost:$currentPort" -ForegroundColor Green
    Start-Process powershell -ArgumentList @("-NoExit", "-Command", "cd `"$path`"; npm run dev -- -p $currentPort")
    Start-Sleep -Seconds 1
    $port++
}
Write-Host "Started templates from 3001 to $($port - 1)." -ForegroundColor Cyan
