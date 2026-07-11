$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$templates = Get-ChildItem -Path $root -Directory | Where-Object {
    (Test-Path (Join-Path $_.FullName "package.json")) -and ($_.Name -ne "zips")
} | Sort-Object Name

foreach ($template in $templates) {
    Write-Host "Installing: $($template.Name)" -ForegroundColor Cyan
    Set-Location $template.FullName
    if (Test-Path "next.config.ts") { Remove-Item "next.config.ts" -Force }
    npm install --include=optional --legacy-peer-deps --no-audit --no-fund
    if ($LASTEXITCODE -ne 0) { Write-Host "FAILED: $($template.Name)" -ForegroundColor Red; break }
}
Set-Location $root
Write-Host "All templates installed one by one." -ForegroundColor Green
