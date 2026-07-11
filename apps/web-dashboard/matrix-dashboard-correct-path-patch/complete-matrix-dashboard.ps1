[CmdletBinding()]
param(
    [string]$DashboardPath = 'E:\Matrix\apps\web-dashboard',
    [string]$Email = 'owner@matrix.local',
    [string]$DatabaseUrl,
    [string]$DashboardUrl = 'http://127.0.0.1:3020',
    [switch]$SkipDatabase,
    [switch]$SkipBuild,
    [switch]$StartAfterInstall
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$bundle = Split-Path -Parent $MyInvocation.MyCommand.Path
$applyScript = Join-Path $bundle 'apply-matrix-dashboard-patch.ps1'
$setupScript = Join-Path $bundle 'setup-dashboard-env.ps1'

if (-not (Test-Path -LiteralPath $applyScript -PathType Leaf)) { throw "Missing: $applyScript" }
if (-not (Test-Path -LiteralPath $setupScript -PathType Leaf)) { throw "Missing: $setupScript" }

$dashboard = [System.IO.Path]::GetFullPath($DashboardPath).TrimEnd([char[]]'\/')
$appsPath = Split-Path -Path $dashboard -Parent
$root = Split-Path -Path $appsPath -Parent
$schemaPath = Join-Path $root 'packages\database\prisma\schema.prisma'

if ([string]::IsNullOrWhiteSpace($DatabaseUrl)) {
    $DatabaseUrl = Read-Host 'DATABASE_URL (postgresql://user:password@host:5432/database?schema=public)'
}
if ([string]::IsNullOrWhiteSpace($DatabaseUrl) -or $DatabaseUrl -notmatch '^postgres(ql)?://') {
    throw 'A valid PostgreSQL DATABASE_URL is required.'
}

Write-Host "`nMatrix complete dashboard installer" -ForegroundColor Cyan
Write-Host "Target: $dashboard" -ForegroundColor Green
Write-Host 'The existing dashboard will be backed up before replacement.' -ForegroundColor Yellow

& $applyScript -DashboardPath $dashboard -ReplaceDashboard -RunInstall
if ($LASTEXITCODE -ne 0) { throw 'Dashboard patch step failed.' }

& $setupScript -DashboardPath $dashboard -Email $Email -DatabaseUrl $DatabaseUrl -DashboardUrl $DashboardUrl
if ($LASTEXITCODE -ne 0) { throw 'Environment setup step failed.' }

$env:DATABASE_URL = $DatabaseUrl

if (-not $SkipDatabase) {
    $pgDump = Get-Command pg_dump -ErrorAction SilentlyContinue
    if ($pgDump) {
        $backupDirectory = Join-Path $root 'backups\pre-dashboard-schema'
        New-Item -ItemType Directory -Path $backupDirectory -Force | Out-Null
        $backupFile = Join-Path $backupDirectory ("matrix-pre-dashboard-{0}.dump" -f (Get-Date -Format 'yyyyMMdd-HHmmss'))
        Write-Host "`n==> Attempting PostgreSQL backup before schema update" -ForegroundColor Cyan
        & $pgDump.Source --format=custom --no-owner --no-acl --dbname=$DatabaseUrl --file=$backupFile
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Database backup created: $backupFile" -ForegroundColor Green
        }
        else {
            Write-Warning 'pg_dump could not create a backup. The schema update has not started yet.'
            Remove-Item -LiteralPath $backupFile -Force -ErrorAction SilentlyContinue
        }
    }
    else {
        Write-Warning 'pg_dump is not installed. No automatic database backup was created.'
    }

    Write-Host "`n==> Applying additive Matrix dashboard tables to PostgreSQL" -ForegroundColor Cyan
    Push-Location $root
    try {
        & pnpm exec prisma db push --schema $schemaPath
        if ($LASTEXITCODE -ne 0) { throw 'Prisma db push failed. Existing data was not force-dropped.' }
    }
    finally {
        Pop-Location
    }
}

if (-not $SkipBuild) {
    Write-Host "`n==> Running final typecheck" -ForegroundColor Cyan
    Push-Location $root
    try {
        & pnpm --filter '@allinall/web-dashboard' typecheck
        if ($LASTEXITCODE -ne 0) { throw 'Dashboard typecheck failed.' }
        Write-Host "`n==> Creating the production build" -ForegroundColor Cyan
        & pnpm --filter '@allinall/web-dashboard' build
        if ($LASTEXITCODE -ne 0) { throw 'Dashboard production build failed.' }
    }
    finally {
        Pop-Location
    }
}

Write-Host "`n============================================================" -ForegroundColor Green
Write-Host 'Matrix dashboard installation is complete.' -ForegroundColor Green
Write-Host "Dashboard path: $dashboard" -ForegroundColor Green
Write-Host "Local URL:      $DashboardUrl" -ForegroundColor Green
Write-Host 'Run command:    cd E:\Matrix ; pnpm dashboard:dev' -ForegroundColor Green
Write-Host '============================================================' -ForegroundColor Green

if ($StartAfterInstall) {
    $escapedRoot = $root.Replace("'", "''")
    Start-Process -FilePath 'powershell.exe' -ArgumentList @(
        '-NoExit',
        '-Command',
        "Set-Location -LiteralPath '$escapedRoot'; pnpm dashboard:dev"
    )
    Write-Host 'Dashboard development server started in a new PowerShell window.' -ForegroundColor Green
}
