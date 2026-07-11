[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$DashboardPath = 'E:\Matrix\apps\web-dashboard',
    [string]$BackupPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$dashboard = [System.IO.Path]::GetFullPath($DashboardPath).TrimEnd([char[]]'\/')
$appsPath = Split-Path -Path $dashboard -Parent
$root = Split-Path -Path $appsPath -Parent
if (-not [string]::Equals((Split-Path $dashboard -Leaf), 'web-dashboard', [System.StringComparison]::OrdinalIgnoreCase) -or
    -not [string]::Equals((Split-Path $appsPath -Leaf), 'apps', [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "DashboardPath must be E:\Matrix\apps\web-dashboard or an equivalent Matrix root path. Received: $dashboard"
}

if (-not $BackupPath) {
    $backupDirectory = Join-Path $root '.matrix-backups'
    if (Test-Path -LiteralPath $backupDirectory) {
        $BackupPath = Get-ChildItem -LiteralPath $backupDirectory -Directory -Filter 'dashboard-patch-*' |
            Sort-Object Name -Descending |
            Select-Object -First 1 -ExpandProperty FullName
    }
}
if (-not $BackupPath -or -not (Test-Path -LiteralPath $BackupPath -PathType Container)) {
    throw 'A dashboard patch backup was not found.'
}

if ($PSCmdlet.ShouldProcess($root, "Rollback Matrix dashboard from $BackupPath")) {
    $manifestPath = Join-Path $BackupPath 'manifest-new-files.txt'
    if (Test-Path -LiteralPath $manifestPath -PathType Leaf) {
        Get-Content -LiteralPath $manifestPath |
            Where-Object { -not [string]::IsNullOrWhiteSpace($_) } |
            ForEach-Object {
                $createdPath = Join-Path $root $_
                if (Test-Path -LiteralPath $createdPath) {
                    Remove-Item -LiteralPath $createdPath -Force -Recurse
                }
            }
    }

    Get-ChildItem -LiteralPath $BackupPath -Recurse -File |
        Where-Object { $_.Name -notin @('manifest-new-files.txt', 'project-root.txt', 'dashboard-path.txt') } |
        ForEach-Object {
            $relativePath = $_.FullName.Substring($BackupPath.Length).TrimStart([char[]]'\/')
            $destination = Join-Path $root $relativePath
            New-Item -ItemType Directory -Path (Split-Path -Parent $destination) -Force | Out-Null
            Copy-Item -LiteralPath $_.FullName -Destination $destination -Force
        }

    Write-Host "Rollback completed. Dashboard target: $dashboard" -ForegroundColor Green
}
