$root = "E:\Matrix\Projects\saas-platforms-batch-03-BUNDLE\saas-platforms-batch-03"

$chromePaths = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
)

$chrome = $chromePaths | Where-Object { Test-Path $_ } | Select-Object -First 1

$templates = Get-ChildItem -Path $root -Directory | Where-Object {
    (Test-Path (Join-Path $_.FullName "package.json")) -and ($_.Name -ne "zips")
}

if ($templates.Count -eq 0) {
    Write-Host "No template folders found. Check root path." -ForegroundColor Red
    exit
}

$port = 3005

foreach ($template in $templates) {
    $currentPort = $port
    $path = $template.FullName
    $name = $template.Name

    Write-Host "Starting $name on http://localhost:$currentPort" -ForegroundColor Green

    Start-Process powershell -ArgumentList @(
        "-NoExit",
        "-Command",
        "cd `"$path`"; if (!(Test-Path node_modules)) { npm install }; npm run dev -- -p $currentPort"
    )

    Start-Sleep -Seconds 2

    if ($chrome) {
        Start-Process $chrome "http://localhost:$currentPort"
    } else {
        Start-Process "http://localhost:$currentPort"
    }

    $port++
}

Write-Host ""
Write-Host "Started templates from port 3005 to $($port - 1)." -ForegroundColor Cyan
