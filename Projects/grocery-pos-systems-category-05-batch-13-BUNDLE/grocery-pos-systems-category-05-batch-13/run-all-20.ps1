$root = $PSScriptRoot
$templates = Get-ChildItem -Path $root -Directory | Where-Object {
    (Test-Path (Join-Path $_.FullName "package.json")) -and ($_.Name -ne "zips")
} | Sort-Object Name

$port = 3001
foreach ($template in $templates) {
    $path = $template.FullName
    $currentPort = $port
    Start-Process powershell -ArgumentList @("-NoExit", "-Command", "cd `"$path`"; npm run dev -- -p $currentPort")
    Start-Sleep -Seconds 1
    Start-Process "chrome.exe" "http://localhost:$currentPort"
    $port++
}
