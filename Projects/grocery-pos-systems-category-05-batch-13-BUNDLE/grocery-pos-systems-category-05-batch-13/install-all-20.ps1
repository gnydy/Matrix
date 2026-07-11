$root = $PSScriptRoot
$templates = Get-ChildItem -Path $root -Directory | Where-Object {
    (Test-Path (Join-Path $_.FullName "package.json")) -and ($_.Name -ne "zips")
} | Sort-Object Name

foreach ($template in $templates) {
    Write-Host "Installing: $($template.Name)" -ForegroundColor Cyan
    Set-Location $template.FullName
    npm install --legacy-peer-deps --no-audit --no-fund
    if ($LASTEXITCODE -ne 0) { Write-Host "FAILED: $($template.Name)" -ForegroundColor Red; exit }
}
Write-Host "All templates installed." -ForegroundColor Green
