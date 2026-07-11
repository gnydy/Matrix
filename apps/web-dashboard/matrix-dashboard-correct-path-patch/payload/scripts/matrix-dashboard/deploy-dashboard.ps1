[CmdletBinding()]
param(
    [string]$DashboardPath = 'E:\Matrix\apps\web-dashboard',
    [switch]$UseDbPush,
    [switch]$SkipBuild
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$dashboard = [System.IO.Path]::GetFullPath($DashboardPath).TrimEnd([char[]]'\/')
$appsPath = Split-Path -Path $dashboard -Parent
$root = Split-Path -Path $appsPath -Parent
$schemaPath = Join-Path $root 'packages\database\prisma\schema.prisma'

if (-not (Test-Path -LiteralPath $dashboard -PathType Container)) { throw "Dashboard not found: $dashboard" }
if (-not (Test-Path -LiteralPath $schemaPath -PathType Leaf)) { throw "Prisma schema not found: $schemaPath" }

Push-Location $root
try {
    & pnpm install --frozen-lockfile
    if ($LASTEXITCODE -ne 0) { throw 'pnpm install failed.' }

    & pnpm exec prisma generate --schema $schemaPath
    if ($LASTEXITCODE -ne 0) { throw 'Prisma generate failed.' }

    if ($UseDbPush) {
        & pnpm exec prisma db push --schema $schemaPath
        if ($LASTEXITCODE -ne 0) { throw 'Prisma db push failed.' }
    }
    else {
        & pnpm exec prisma migrate deploy --schema $schemaPath
        if ($LASTEXITCODE -ne 0) {
            throw 'Prisma migrate deploy failed. Create and commit a migration first, or use -UseDbPush only for the initial controlled deployment.'
        }
    }

    if (-not $SkipBuild) {
        & pnpm --filter '@allinall/web-dashboard' typecheck
        if ($LASTEXITCODE -ne 0) { throw 'Dashboard typecheck failed.' }
        & pnpm --filter '@allinall/web-dashboard' build
        if ($LASTEXITCODE -ne 0) { throw 'Dashboard build failed.' }
    }
}
finally {
    Pop-Location
}

Write-Host "Matrix dashboard is deployment-ready at: $dashboard" -ForegroundColor Green
