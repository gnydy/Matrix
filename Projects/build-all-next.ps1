param(
  [string]$Root = "E:\Matrix\Projects",
  [int]$Limit = 0,
  [switch]$Force
)

$ErrorActionPreference = "Continue"

$logDir = Join-Path $Root "_build-logs"
New-Item -ItemType Directory -Force -Path $logDir | Out-Null

$successLog = Join-Path $logDir "success.txt"
$failedLog  = Join-Path $logDir "failed.txt"
$skipLog    = Join-Path $logDir "skipped.txt"

"BUILD START: $(Get-Date)" | Add-Content $successLog
"BUILD START: $(Get-Date)" | Add-Content $failedLog
"BUILD START: $(Get-Date)" | Add-Content $skipLog

$projects = Get-ChildItem -Path $Root -Recurse -Filter "package.json" -File -ErrorAction SilentlyContinue | Where-Object {
  $_.FullName -notlike "*\node_modules\*" -and
  $_.FullName -notlike "*\.next\*" -and
  $_.FullName -notlike "*\.git\*" -and
  $_.DirectoryName -notlike "*matrixall-template-marketplace*"
}

if ($Limit -gt 0) {
  $projects = $projects | Select-Object -First $Limit
}

$total = @($projects).Count
$i = 0

Write-Host "Found $total Next/Node projects." -ForegroundColor Cyan

foreach ($pkg in $projects) {
  $i++
  $dir = $pkg.DirectoryName
  $nextDir = Join-Path $dir ".next"

  Write-Host ""
  Write-Host "[$i / $total] $dir" -ForegroundColor Yellow

  if ((Test-Path $nextDir) -and -not $Force) {
    Write-Host "Skipped: .next already exists" -ForegroundColor DarkYellow
    $dir | Add-Content $skipLog
    continue
  }

  Push-Location $dir

  try {
    $json = Get-Content "package.json" -Raw | ConvertFrom-Json

    if (-not $json.dependencies.next -and -not $json.devDependencies.next) {
      Write-Host "Skipped: not a Next.js project" -ForegroundColor DarkYellow
      $dir | Add-Content $skipLog
      Pop-Location
      continue
    }

    if (-not (Test-Path "node_modules")) {
      Write-Host "Installing dependencies..." -ForegroundColor Cyan
      npm install --include=optional --legacy-peer-deps --no-audit --no-fund

      if ($LASTEXITCODE -ne 0) {
        throw "npm install failed"
      }
    } else {
      Write-Host "node_modules exists, skipping install." -ForegroundColor Green
    }

    Write-Host "Building .next..." -ForegroundColor Cyan
    npm run build

    if ($LASTEXITCODE -ne 0) {
      throw "npm run build failed"
    }

    if (Test-Path ".next") {
      Write-Host "SUCCESS: .next created" -ForegroundColor Green
      $dir | Add-Content $successLog
    } else {
      throw ".next was not created"
    }
  }
  catch {
    Write-Host "FAILED: $($_.Exception.Message)" -ForegroundColor Red
    "$dir :: $($_.Exception.Message)" | Add-Content $failedLog
  }
  finally {
    Pop-Location
  }
}

Write-Host ""
Write-Host "DONE." -ForegroundColor Green
Write-Host "Success log: $successLog"
Write-Host "Failed log:  $failedLog"
Write-Host "Skipped log: $skipLog"