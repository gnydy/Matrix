$ErrorActionPreference = "Stop"

Write-Host "Running No Delete Guard..." -ForegroundColor Cyan

$deletedFiles = git diff --name-status origin/main...HEAD | Where-Object { $_ -match "^D\s+" }

if ($deletedFiles.Count -gt 0) {
    Write-Host "ERROR: Deleted files detected. Deletion is not allowed." -ForegroundColor Red
    $deletedFiles | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    exit 1
}

Write-Host "No deleted files detected." -ForegroundColor Green
exit 0
