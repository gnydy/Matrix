$ErrorActionPreference = "Stop"

Write-Host "Running Dangerous Command Guard..." -ForegroundColor Cyan

$dangerousPatterns = @(
    "Remove-Item",
    "\brm\b",
    "\bdel\b",
    "rimraf",
    "fs\.unlink",
    "fs\.rm",
    "DROP TABLE",
    "TRUNCATE TABLE",
    "DELETE FROM",
    "git push --force",
    "git reset --hard"
)

$files = Get-ChildItem -Recurse -File |
    Where-Object {
        $_.FullName -notmatch "\\.git\\" -and
        $_.FullName -notmatch "\\node_modules\\" -and
        $_.FullName -notmatch "\\dist\\" -and
        $_.FullName -notmatch "\\build\\"
    }

$violations = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue

    foreach ($pattern in $dangerousPatterns) {
        if ($content -match $pattern) {
            $violations += "$($file.FullName) contains dangerous pattern: $pattern"
        }
    }
}

if ($violations.Count -gt 0) {
    Write-Host "ERROR: Dangerous commands detected." -ForegroundColor Red
    $violations | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    exit 1
}

Write-Host "No dangerous commands detected." -ForegroundColor Green
exit 0
