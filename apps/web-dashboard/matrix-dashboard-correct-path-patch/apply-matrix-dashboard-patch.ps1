[CmdletBinding()]
param(
    [string]$DashboardPath = 'E:\Matrix\apps\web-dashboard',
    [switch]$ReplaceDashboard,
    [switch]$RunInstall,
    [switch]$RunChecks,
    [switch]$ApplyDatabase
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-Utf8([string]$Path, [string]$Text) {
    $encoding = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $Text, $encoding)
}

function Write-Step([string]$Text) {
    Write-Host "`n==> $Text" -ForegroundColor Cyan
}

function Resolve-MatrixPaths([string]$RequestedDashboardPath) {
    $dashboard = [System.IO.Path]::GetFullPath($RequestedDashboardPath).TrimEnd([char[]]'\/')
    $dashboardName = Split-Path -Path $dashboard -Leaf
    $appsPath = Split-Path -Path $dashboard -Parent
    $appsName = Split-Path -Path $appsPath -Leaf
    $root = Split-Path -Path $appsPath -Parent

    if (-not [string]::Equals($dashboardName, 'web-dashboard', [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "DashboardPath must end with apps\web-dashboard. Received: $dashboard"
    }
    if (-not [string]::Equals($appsName, 'apps', [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "DashboardPath must be inside the Matrix apps folder. Received: $dashboard"
    }
    if (-not (Test-Path -LiteralPath $root -PathType Container)) {
        throw "Matrix root does not exist: $root"
    }

    return [PSCustomObject]@{
        Root = $root
        Dashboard = $dashboard
        Apps = $appsPath
    }
}

function Get-DotEnvValue([string[]]$Paths, [string]$Name) {
    foreach ($path in $Paths) {
        if (-not (Test-Path -LiteralPath $path -PathType Leaf)) { continue }
        $line = Get-Content -LiteralPath $path | Where-Object { $_ -match "^\s*$([regex]::Escape($Name))\s*=" } | Select-Object -Last 1
        if ($line) {
            $value = ($line -replace "^\s*$([regex]::Escape($Name))\s*=\s*", '').Trim()
            if (($value.StartsWith('"') -and $value.EndsWith('"')) -or ($value.StartsWith("'") -and $value.EndsWith("'"))) {
                $value = $value.Substring(1, $value.Length - 2)
            }
            return $value
        }
    }
    return $null
}

$paths = Resolve-MatrixPaths $DashboardPath
$root = $paths.Root
$dashboard = $paths.Dashboard
$bundle = Split-Path -Parent $MyInvocation.MyCommand.Path
$payload = Join-Path $bundle 'payload'
$schemaSnippet = Join-Path $bundle 'schema\matrix-dashboard.prisma'
$packagePath = Join-Path $root 'package.json'
$schemaPath = Join-Path $root 'packages\database\prisma\schema.prisma'

Write-Step 'Validating the Matrix monorepo and exact dashboard path'
Write-Host "Matrix root:    $root" -ForegroundColor DarkGray
Write-Host "Dashboard path: $dashboard" -ForegroundColor Green

if (-not (Test-Path -LiteralPath $packagePath -PathType Leaf)) {
    throw "package.json was not found at: $packagePath"
}
if (-not (Test-Path -LiteralPath $schemaPath -PathType Leaf)) {
    throw "Prisma schema was not found at: $schemaPath"
}
if (-not (Test-Path -LiteralPath $payload -PathType Container)) {
    throw "Patch payload is missing: $payload"
}
if (-not (Test-Path -LiteralPath $schemaSnippet -PathType Leaf)) {
    throw "Dashboard schema snippet is missing: $schemaSnippet"
}

$rootPackage = Get-Content -LiteralPath $packagePath -Raw | ConvertFrom-Json
if ($rootPackage.name -ne 'matrix-monorepo') {
    throw "The resolved root is not the Matrix monorepo. package.json name: $($rootPackage.name)"
}

$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupRoot = Join-Path $root ".matrix-backups\dashboard-patch-$timestamp"
New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
$newFiles = New-Object System.Collections.Generic.List[string]

Write-Step 'Backing up every affected file'
if ($ReplaceDashboard -and (Test-Path -LiteralPath $dashboard -PathType Container)) {
    $dashboardBackup = Join-Path $backupRoot 'apps\web-dashboard'
    New-Item -ItemType Directory -Path (Split-Path -Parent $dashboardBackup) -Force | Out-Null
    Copy-Item -LiteralPath $dashboard -Destination $dashboardBackup -Recurse -Force
    Remove-Item -LiteralPath $dashboard -Recurse -Force
    Write-Host "Existing dashboard backed up and removed: $dashboard" -ForegroundColor Yellow
}

$payloadFiles = Get-ChildItem -LiteralPath $payload -Recurse -File
foreach ($file in $payloadFiles) {
    $relativePath = $file.FullName.Substring($payload.Length).TrimStart([char[]]'\/')
    $destination = Join-Path $root $relativePath
    if (Test-Path -LiteralPath $destination -PathType Leaf) {
        $backupFile = Join-Path $backupRoot $relativePath
        New-Item -ItemType Directory -Path (Split-Path -Parent $backupFile) -Force | Out-Null
        Copy-Item -LiteralPath $destination -Destination $backupFile -Force
    }
    else {
        $newFiles.Add($relativePath)
    }
}

foreach ($relativePath in @('package.json', 'packages\database\prisma\schema.prisma', '.gitignore')) {
    $destination = Join-Path $root $relativePath
    if (Test-Path -LiteralPath $destination -PathType Leaf) {
        $backupFile = Join-Path $backupRoot $relativePath
        New-Item -ItemType Directory -Path (Split-Path -Parent $backupFile) -Force | Out-Null
        Copy-Item -LiteralPath $destination -Destination $backupFile -Force
    }
}

$newFiles | Set-Content -LiteralPath (Join-Path $backupRoot 'manifest-new-files.txt') -Encoding UTF8
Set-Content -LiteralPath (Join-Path $backupRoot 'project-root.txt') -Value $root -Encoding UTF8
Set-Content -LiteralPath (Join-Path $backupRoot 'dashboard-path.txt') -Value $dashboard -Encoding UTF8

Write-Step 'Applying dashboard files and hosting additions'
foreach ($file in $payloadFiles) {
    $relativePath = $file.FullName.Substring($payload.Length).TrimStart([char[]]'\/')
    $destination = Join-Path $root $relativePath
    New-Item -ItemType Directory -Path (Split-Path -Parent $destination) -Force | Out-Null
    Copy-Item -LiteralPath $file.FullName -Destination $destination -Force
    Write-Host " + $relativePath" -ForegroundColor DarkGray
}

if (-not (Test-Path -LiteralPath $dashboard -PathType Container)) {
    throw "The patch did not create the expected dashboard path: $dashboard"
}

Write-Step 'Merging the Matrix dashboard database models into the existing Prisma schema'
$schemaText = [System.IO.File]::ReadAllText($schemaPath)
$schemaAddition = [System.IO.File]::ReadAllText($schemaSnippet)
$schemaPattern = '(?s)// MATRIX_DASHBOARD_CORE_START.*?// MATRIX_DASHBOARD_CORE_END'
if ($schemaText -match $schemaPattern) {
    $schemaText = [regex]::Replace(
        $schemaText,
        $schemaPattern,
        [System.Text.RegularExpressions.MatchEvaluator]{ param($match) $schemaAddition.Trim() }
    )
}
else {
    $schemaText = $schemaText.TrimEnd() + "`r`n`r`n" + $schemaAddition.Trim() + "`r`n"
}
Write-Utf8 $schemaPath $schemaText

Write-Step 'Adding Matrix dashboard commands to the root package.json'
$rootPackage = Get-Content -LiteralPath $packagePath -Raw | ConvertFrom-Json
if (-not $rootPackage.scripts) {
    $rootPackage | Add-Member -MemberType NoteProperty -Name scripts -Value ([PSCustomObject]@{})
}
$dashboardScripts = [ordered]@{
    'dashboard:dev'          = 'pnpm --filter @allinall/web-dashboard dev'
    'dashboard:build'        = 'pnpm --filter @allinall/web-dashboard build'
    'dashboard:start'        = 'pnpm --filter @allinall/web-dashboard start'
    'dashboard:lint'         = 'pnpm --filter @allinall/web-dashboard lint'
    'dashboard:typecheck'    = 'pnpm --filter @allinall/web-dashboard typecheck'
    'db:dashboard:format'    = 'pnpm exec prisma format --schema packages/database/prisma/schema.prisma'
    'db:dashboard:generate'  = 'pnpm exec prisma generate --schema packages/database/prisma/schema.prisma'
    'db:dashboard:push'      = 'pnpm exec prisma db push --schema packages/database/prisma/schema.prisma'
    'db:dashboard:migrate'   = 'pnpm exec prisma migrate dev --schema packages/database/prisma/schema.prisma'
    'db:dashboard:deploy'    = 'pnpm exec prisma migrate deploy --schema packages/database/prisma/schema.prisma'
}
foreach ($name in $dashboardScripts.Keys) {
    $rootPackage.scripts | Add-Member -MemberType NoteProperty -Name $name -Value $dashboardScripts[$name] -Force
}
Write-Utf8 $packagePath (($rootPackage | ConvertTo-Json -Depth 100) + "`r`n")

Write-Step 'Protecting secrets and backups from Git'
$gitignorePath = Join-Path $root '.gitignore'
if (-not (Test-Path -LiteralPath $gitignorePath)) {
    New-Item -ItemType File -Path $gitignorePath -Force | Out-Null
}
$gitignoreText = [System.IO.File]::ReadAllText($gitignorePath)
$ignoreLines = @(
    'apps/web-dashboard/.env.local',
    'apps/web-dashboard/.env.production',
    'packages/database/.env',
    '.matrix-backups/',
    'backups/'
)
foreach ($line in $ignoreLines) {
    if (($gitignoreText -split "`r?`n") -notcontains $line) {
        $gitignoreText = $gitignoreText.TrimEnd() + "`r`n$line`r`n"
    }
}
Write-Utf8 $gitignorePath $gitignoreText

if ($RunInstall) {
    Write-Step 'Installing workspace dependencies'
    Push-Location $root
    try {
        & pnpm install
        if ($LASTEXITCODE -ne 0) { throw 'pnpm install failed.' }
    }
    finally {
        Pop-Location
    }
}

Write-Step 'Formatting the merged schema and generating Prisma Client'
Push-Location $root
try {
    & pnpm exec prisma format --schema $schemaPath
    if ($LASTEXITCODE -ne 0) { throw 'Prisma format failed.' }
    & pnpm exec prisma generate --schema $schemaPath
    if ($LASTEXITCODE -ne 0) { throw 'Prisma generate failed.' }
}
finally {
    Pop-Location
}

if ($ApplyDatabase) {
    if ([string]::IsNullOrWhiteSpace($env:DATABASE_URL)) {
        $env:DATABASE_URL = Get-DotEnvValue @(
            (Join-Path $root 'packages\database\.env'),
            (Join-Path $dashboard '.env.local'),
            (Join-Path $root '.env')
        ) 'DATABASE_URL'
    }
    if ([string]::IsNullOrWhiteSpace($env:DATABASE_URL)) {
        throw 'DATABASE_URL is not configured. Run setup-dashboard-env.ps1 first.'
    }
    Write-Step 'Applying the additive dashboard schema to PostgreSQL'
    Push-Location $root
    try {
        & pnpm exec prisma db push --schema $schemaPath
        if ($LASTEXITCODE -ne 0) { throw 'Prisma db push failed.' }
    }
    finally {
        Pop-Location
    }
}

if ($RunChecks) {
    Write-Step 'Running dashboard typecheck and production build'
    Push-Location $root
    try {
        & pnpm --filter '@allinall/web-dashboard' typecheck
        if ($LASTEXITCODE -ne 0) { throw 'Dashboard typecheck failed.' }
        & pnpm --filter '@allinall/web-dashboard' build
        if ($LASTEXITCODE -ne 0) { throw 'Dashboard production build failed.' }
    }
    finally {
        Pop-Location
    }
}

Write-Host "`nPatch completed successfully." -ForegroundColor Green
Write-Host "Dashboard: $dashboard" -ForegroundColor Green
Write-Host "Backup:    $backupRoot" -ForegroundColor Green
Write-Host 'Next step: run setup-dashboard-env.ps1 using the same -DashboardPath.' -ForegroundColor Green
