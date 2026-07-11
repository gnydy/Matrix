[CmdletBinding()]
param(
    [string]$DashboardPath = 'E:\Matrix\apps\web-dashboard',
    [string]$Email = 'owner@matrix.local',
    [string]$DatabaseUrl,
    [string]$DashboardUrl = 'http://127.0.0.1:3020'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

function Write-Utf8([string]$Path, [string]$Text) {
    $encoding = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, $Text, $encoding)
}

function Resolve-MatrixPaths([string]$RequestedDashboardPath) {
    $dashboard = [System.IO.Path]::GetFullPath($RequestedDashboardPath).TrimEnd([char[]]'\/')
    $appsPath = Split-Path -Path $dashboard -Parent
    $root = Split-Path -Path $appsPath -Parent
    if (-not [string]::Equals((Split-Path $dashboard -Leaf), 'web-dashboard', [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "DashboardPath must end with apps\web-dashboard. Received: $dashboard"
    }
    if (-not [string]::Equals((Split-Path $appsPath -Leaf), 'apps', [System.StringComparison]::OrdinalIgnoreCase)) {
        throw "DashboardPath must be inside the apps folder. Received: $dashboard"
    }
    return [PSCustomObject]@{ Root = $root; Dashboard = $dashboard }
}

function Quote-DotEnv([string]$Value) {
    return '"' + ($Value -replace '"', '\"') + '"'
}

function Set-DotEnvVariable([string]$Path, [string]$Name, [string]$Value) {
    $directory = Split-Path -Parent $Path
    New-Item -ItemType Directory -Path $directory -Force | Out-Null
    $content = if (Test-Path -LiteralPath $Path) { [System.IO.File]::ReadAllText($Path) } else { '' }
    $escapedName = [regex]::Escape($Name)
    $line = "$Name=$(Quote-DotEnv $Value)"
    if ($content -match "(?m)^\s*$escapedName\s*=.*$") {
        $content = [regex]::Replace($content, "(?m)^\s*$escapedName\s*=.*$", $line)
    }
    else {
        if ($content.Length -gt 0 -and -not $content.EndsWith("`n")) { $content += "`r`n" }
        $content += "$line`r`n"
    }
    Write-Utf8 $Path $content
}

$paths = Resolve-MatrixPaths $DashboardPath
$root = $paths.Root
$dashboard = $paths.Dashboard
$hashScript = Join-Path $dashboard 'scripts\hash-password.mjs'
$appEnvPath = Join-Path $dashboard '.env.local'
$databaseEnvPath = Join-Path $root 'packages\database\.env'

if (-not (Test-Path -LiteralPath $hashScript -PathType Leaf)) {
    throw "Dashboard files are not installed at: $dashboard"
}
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw 'Node.js is not available in PATH.'
}

if ([string]::IsNullOrWhiteSpace($DatabaseUrl)) {
    $DatabaseUrl = Read-Host 'DATABASE_URL (postgresql://user:password@host:5432/database?schema=public)'
}
if ([string]::IsNullOrWhiteSpace($DatabaseUrl) -or $DatabaseUrl -notmatch '^postgres(ql)?://') {
    throw 'DATABASE_URL must start with postgresql:// or postgres://. URL-encode special characters in the password.'
}
if ([string]::IsNullOrWhiteSpace($Email) -or $Email -notmatch '^[^\s@]+@[^\s@]+\.[^\s@]+$') {
    throw 'A valid owner email is required.'
}

$securePassword = Read-Host 'Enter the first Owner password (minimum 12 characters)' -AsSecureString
$pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)
try {
    $plainPassword = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
    if ($plainPassword.Length -lt 12) { throw 'Password is shorter than 12 characters.' }
    $env:MATRIX_SETUP_PASSWORD = $plainPassword
    $passwordHash = & node $hashScript
    if ($LASTEXITCODE -ne 0 -or [string]::IsNullOrWhiteSpace($passwordHash)) {
        throw 'Owner password hashing failed.'
    }
    $passwordHash = $passwordHash.Trim()
}
finally {
    $env:MATRIX_SETUP_PASSWORD = $null
    if ($pointer -ne [IntPtr]::Zero) {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
    }
}

$randomBytes = New-Object byte[] 48
$rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
try {
    $rng.GetBytes($randomBytes)
}
finally {
    $rng.Dispose()
}
$sessionSecret = ($randomBytes | ForEach-Object { $_.ToString('x2') }) -join ''

$timestamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$backupRoot = Join-Path $root ".matrix-backups\dashboard-env-$timestamp"
New-Item -ItemType Directory -Path $backupRoot -Force | Out-Null
foreach ($source in @($appEnvPath, $databaseEnvPath)) {
    if (Test-Path -LiteralPath $source -PathType Leaf) {
        $relative = $source.Substring($root.Length).TrimStart([char[]]'\/')
        $destination = Join-Path $backupRoot $relative
        New-Item -ItemType Directory -Path (Split-Path -Parent $destination) -Force | Out-Null
        Copy-Item -LiteralPath $source -Destination $destination -Force
    }
}

$appEnvironment = @"
DATABASE_URL=$(Quote-DotEnv $DatabaseUrl)
MATRIX_DASHBOARD_URL=$(Quote-DotEnv $DashboardUrl)
MATRIX_DASHBOARD_SESSION_SECRET=$(Quote-DotEnv $sessionSecret)
MATRIX_DASHBOARD_SESSION_DAYS="7"
MATRIX_DASHBOARD_BOOTSTRAP_EMAIL=$(Quote-DotEnv $Email.ToLowerInvariant())
MATRIX_DASHBOARD_BOOTSTRAP_PASSWORD_HASH=$(Quote-DotEnv $passwordHash)
MATRIX_RELEASE_ENV="development"
"@
Write-Utf8 $appEnvPath ($appEnvironment.TrimStart() + "`r`n")
Set-DotEnvVariable -Path $databaseEnvPath -Name 'DATABASE_URL' -Value $DatabaseUrl

Write-Host "`nDashboard environment configured successfully." -ForegroundColor Green
Write-Host "Application env: $appEnvPath" -ForegroundColor Green
Write-Host "Prisma env:     $databaseEnvPath" -ForegroundColor Green
Write-Host "Backup:         $backupRoot" -ForegroundColor DarkGray
