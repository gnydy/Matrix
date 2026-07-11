$root = "E:\Matrix\Projects\ecommerce-stores-batch-02-V2-BUNDLE\ecommerce-stores-batch-02-V2"

$templates = Get-ChildItem -Path $root -Directory | Where-Object {
    Test-Path (Join-Path $_.FullName "package.json")
}

if ($templates.Count -eq 0) {
    Write-Host "No templates found. Make sure each template folder contains package.json." -ForegroundColor Red
    exit
}

$port = 3001

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

    $port++
}

Write-Host ""
Write-Host "All templates started." -ForegroundColor Cyan
Write-Host "Open them from:"
$port = 3001
foreach ($template in $templates) {
    Write-Host "$($template.Name): http://localhost:$port"
    $port++
}
