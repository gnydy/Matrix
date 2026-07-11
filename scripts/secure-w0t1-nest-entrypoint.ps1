param(
  [string]$Root = "E:\Matrix",
  [switch]$Apply,
  [switch]$RetireLegacyServer,
  [switch]$ForceRetireLegacyServer,
  [switch]$RunBuild,
  [switch]$RunSmoke,
  [string]$HealthUrl = "http://127.0.0.1:4000/api/v1/health",
  [string]$ProtectedErpUrl = "http://127.0.0.1:4000/api/v1/erp/inventory/products",
  [string]$BadOrigin = "https://evil.example.com"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

function Write-Info($Message) {
  Write-Host "[INFO] $Message" -ForegroundColor Cyan
}

function Write-Ok($Message) {
  Write-Host "[OK] $Message" -ForegroundColor Green
}

function Write-Warn($Message) {
  Write-Host "[WARN] $Message" -ForegroundColor Yellow
}

function Write-Fail($Message) {
  Write-Host "[FAIL] $Message" -ForegroundColor Red
}

function Assert-PathInsideRoot {
  param(
    [string]$RootPath,
    [string]$TargetPath
  )

  $rootFull = [System.IO.Path]::GetFullPath($RootPath).TrimEnd('\') + '\'
  $targetFull = [System.IO.Path]::GetFullPath($TargetPath)

  if (-not $targetFull.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "مسار غير آمن خارج المشروع: $targetFull"
  }
}

function Add-OrSetProperty {
  param(
    [object]$Object,
    [string]$Name,
    [object]$Value
  )

  $prop = $Object.PSObject.Properties[$Name]

  if ($null -eq $prop) {
    $Object | Add-Member -MemberType NoteProperty -Name $Name -Value $Value
  } else {
    $prop.Value = $Value
  }
}

function Backup-File {
  param(
    [string]$FilePath,
    [string]$BackupRoot,
    [string]$ProjectRoot
  )

  if (!(Test-Path $FilePath)) {
    return $null
  }

  Assert-PathInsideRoot -RootPath $ProjectRoot -TargetPath $FilePath

  $relative = Resolve-Path -Path $FilePath | ForEach-Object {
    $_.Path.Substring(([System.IO.Path]::GetFullPath($ProjectRoot).TrimEnd('\') + '\').Length)
  }

  $safeRelative = $relative -replace "[:\\/]", "_"
  $target = Join-Path $BackupRoot $safeRelative

  Copy-Item -Path $FilePath -Destination $target -Force

  return $target
}

function Get-FileMatches {
  param(
    [string]$BasePath,
    [string]$Pattern
  )

  if (!(Test-Path $BasePath)) {
    return @()
  }

  return Get-ChildItem $BasePath -Recurse -File -Include *.ts,*.js,*.json |
    Where-Object {
      $_.FullName -notmatch "\\node_modules\\" -and
      $_.FullName -notmatch "\\.next\\" -and
      $_.FullName -notmatch "\\dist\\" -and
      $_.FullName -notmatch "\\_retired_server_files\\" -and
      $_.FullName -notmatch "\\_remediation_backups\\"
    } |
    Select-String -Pattern $Pattern
}

function Invoke-CommandChecked {
  param(
    [string]$WorkingDirectory,
    [string]$Command,
    [string[]]$Arguments
  )

  Write-Info "Running: $Command $($Arguments -join ' ')"

  $process = Start-Process `
    -FilePath $Command `
    -ArgumentList $Arguments `
    -WorkingDirectory $WorkingDirectory `
    -NoNewWindow `
    -Wait `
    -PassThru

  if ($process.ExitCode -ne 0) {
    throw "الأمر فشل: $Command $($Arguments -join ' ')"
  }
}

$Root = [System.IO.Path]::GetFullPath($Root)
$Api = Join-Path $Root "apps\api"
$Src = Join-Path $Api "src"
$PkgPath = Join-Path $Api "package.json"
$MainTs = Join-Path $Src "main.ts"

Write-Info "Root: $Root"
Write-Info "API:  $Api"

if (!(Test-Path $Root)) {
  throw "لم أجد المشروع: $Root"
}

if (!(Test-Path $Api)) {
  throw "لم أجد مجلد API: $Api"
}

if (!(Test-Path $PkgPath)) {
  throw "لم أجد package.json داخل API: $PkgPath"
}

if (!(Test-Path $MainTs)) {
  throw "لم أجد NestJS entrypoint: $MainTs"
}

$stamp = Get-Date -Format "yyyyMMdd-HHmmss"
$backupRoot = Join-Path $Api "_remediation_backups\$stamp"
New-Item -ItemType Directory -Force $backupRoot | Out-Null

$report = [ordered]@{
  root = $Root
  api = $Api
  timestamp = $stamp
  apply = [bool]$Apply
  retireLegacyServer = [bool]$RetireLegacyServer
  forceRetireLegacyServer = [bool]$ForceRetireLegacyServer
  backups = @()
  warnings = @()
  changedFiles = @()
  legacyFilesFound = @()
  legacyRoutesFound = @()
  remainingReferences = @()
  smoke = [ordered]@{}
}

Write-Info "قراءة package.json..."

$pkg = Get-Content $PkgPath -Raw | ConvertFrom-Json

if ($null -eq $pkg.scripts) {
  Add-OrSetProperty -Object $pkg -Name "scripts" -Value ([pscustomobject]@{})
}

$desiredScripts = [ordered]@{
  "dev" = "nest start --watch"
  "start:dev" = "nest start --watch"
  "start:debug" = "nest start --debug --watch"
  "build" = "nest build"
  "start" = "node dist/main.js"
  "start:prod" = "node dist/main.js"
}

Write-Info "فحص scripts الحالية..."

foreach ($scriptName in $pkg.scripts.PSObject.Properties.Name) {
  $scriptValue = [string]$pkg.scripts.PSObject.Properties[$scriptName].Value

  if ($scriptValue -match "server\.ts|src[\\/]+server\.ts|dist[\\/]+server\.js|server\.js") {
    $warning = "Script '$scriptName' يشير إلى server قديم: $scriptValue"
    $report.warnings += $warning
    Write-Warn $warning
  }
}

$legacyCandidates = @(
  Join-Path $Api "server.ts"
  Join-Path $Api "server.js"
  Join-Path $Api "src\server.ts"
  Join-Path $Api "src\server.js"
  Join-Path $Api "dist\server.js"
)

$legacyFiles = @()

foreach ($candidate in $legacyCandidates) {
  if (Test-Path $candidate) {
    Assert-PathInsideRoot -RootPath $Root -TargetPath $candidate
    $legacyFiles += $candidate
    $report.legacyFilesFound += $candidate
  }
}

if ($legacyFiles.Count -gt 0) {
  Write-Warn "وجدت ملفات server قديمة:"
  $legacyFiles | ForEach-Object { Write-Host " - $_" -ForegroundColor Yellow }
} else {
  Write-Ok "لا توجد ملفات server قديمة في المسارات المتوقعة."
}

$routePattern = "\b(app|router)\.(get|post|put|patch|delete|options|all)\s*\("

foreach ($legacyFile in $legacyFiles) {
  if ($legacyFile -match "\\dist\\") {
    continue
  }

  $routes = Select-String -Path $legacyFile -Pattern $routePattern

  foreach ($route in $routes) {
    $entry = "$($route.Path):$($route.LineNumber): $($route.Line.Trim())"
    $report.legacyRoutesFound += $entry
  }
}

if ($report.legacyRoutesFound.Count -gt 0) {
  Write-Warn "وجدت Routes قديمة داخل server.ts/server.js."
  Write-Warn "لن يتم أرشفة server القديم إلا إذا استخدمت -ForceRetireLegacyServer."
  $report.legacyRoutesFound | ForEach-Object { Write-Host " - $_" -ForegroundColor Yellow }
}

Write-Info "فحص main.ts..."

$mainContent = Get-Content $MainTs -Raw

if ($mainContent -notmatch "NestFactory\.create") {
  $report.warnings += "main.ts لا يحتوي NestFactory.create"
  Write-Warn "main.ts لا يحتوي NestFactory.create"
}

if ($mainContent -notmatch "enableCors") {
  $report.warnings += "main.ts لا يظهر فيه enableCors. تأكد من CORS allowlist."
  Write-Warn "main.ts لا يظهر فيه enableCors. تأكد من CORS allowlist."
}

Write-Info "فحص Guards..."

$guardMatches = Get-FileMatches -BasePath $Src -Pattern "JwtAuthGuard|PermissionsGuard|APP_GUARD"

if ($guardMatches.Count -eq 0) {
  $report.warnings += "لم أجد JwtAuthGuard / PermissionsGuard / APP_GUARD في src."
  Write-Warn "لم أجد JwtAuthGuard / PermissionsGuard / APP_GUARD في src."
} else {
  Write-Ok "وجدت مراجع للحراس الأمنية."
}

if (-not $Apply) {
  Write-Warn "وضع Audit فقط. لم يتم تعديل أي ملف."
  Write-Host ""
  Write-Host "للتطبيق استخدم:" -ForegroundColor Cyan
  Write-Host ".\scripts\secure-w0t1-nest-entrypoint.ps1 -Apply -RunBuild"
  Write-Host ""
  Write-Host "بعد نقل كل routes من server.ts إلى Controllers استخدم:" -ForegroundColor Cyan
  Write-Host ".\scripts\secure-w0t1-nest-entrypoint.ps1 -Apply -RetireLegacyServer -RunBuild"
  Write-Host ""

  $reportPath = Join-Path $backupRoot "audit-report.json"
  $report | ConvertTo-Json -Depth 20 | Set-Content -Path $reportPath -Encoding UTF8
  Write-Info "Report: $reportPath"
  exit 0
}

Write-Info "تطبيق تعديلات package.json..."

$backup = Backup-File -FilePath $PkgPath -BackupRoot $backupRoot -ProjectRoot $Root
if ($backup) {
  $report.backups += $backup
}

foreach ($pair in $desiredScripts.GetEnumerator()) {
  Add-OrSetProperty -Object $pkg.scripts -Name $pair.Key -Value $pair.Value
}

$pkg | ConvertTo-Json -Depth 50 | Set-Content -Path $PkgPath -Encoding UTF8
$report.changedFiles += $PkgPath

Write-Ok "تم تعديل package.json ليشغل NestJS فقط."

if ($RetireLegacyServer) {
  if ($report.legacyRoutesFound.Count -gt 0 -and -not $ForceRetireLegacyServer) {
    Write-Fail "تم إيقاف الأرشفة لأن server القديم يحتوي Routes."
    Write-Fail "انقل هذه Routes إلى NestJS Controllers أولًا، أو استخدم -ForceRetireLegacyServer لو أنت متأكد."
    throw "RetireLegacyServer blocked by legacy routes."
  }

  $retiredRoot = Join-Path $Api "_retired_server_files\$stamp"
  New-Item -ItemType Directory -Force $retiredRoot | Out-Null

  foreach ($legacyFile in $legacyFiles) {
    if (!(Test-Path $legacyFile)) {
      continue
    }

    $backup = Backup-File -FilePath $legacyFile -BackupRoot $backupRoot -ProjectRoot $Root
    if ($backup) {
      $report.backups += $backup
    }

    $relative = [System.IO.Path]::GetFullPath($legacyFile).Substring(([System.IO.Path]::GetFullPath($Api).TrimEnd('\') + '\').Length)
    $safeName = $relative -replace "[:\\/]", "_"
    $target = Join-Path $retiredRoot $safeName

    Move-Item -Path $legacyFile -Destination $target -Force
    $report.changedFiles += $legacyFile

    Write-Warn "تمت أرشفة الملف القديم: $legacyFile => $target"
  }
} else {
  Write-Warn "لم يتم نقل server.ts. هذا آمن الآن طالما package.json لا يشغله."
  Write-Warn "بعد التأكد أن كل endpoints انتقلت إلى NestJS شغل السكريبت مع -RetireLegacyServer."
}

Write-Info "فحص المراجع المتبقية إلى server القديم..."

$remaining = Get-FileMatches -BasePath $Api -Pattern "server\.ts|src[\\/]+server\.ts|dist[\\/]+server\.js|server\.js"

foreach ($match in $remaining) {
  $line = "$($match.Path):$($match.LineNumber): $($match.Line.Trim())"

  if ($line -match "_remediation_backups|_retired_server_files") {
    continue
  }

  if ($line -match "secure-w0t1-nest-entrypoint\.ps1") {
    continue
  }

  $report.remainingReferences += $line
}

if ($report.remainingReferences.Count -gt 0) {
  Write-Warn "توجد مراجع متبقية. راجعها:"
  $report.remainingReferences | ForEach-Object { Write-Host " - $_" -ForegroundColor Yellow }
} else {
  Write-Ok "لا توجد مراجع تشغيل متبقية للـ server القديم."
}

if ($RunBuild) {
  Write-Info "تشغيل pnpm build داخل apps\api..."
  Invoke-CommandChecked -WorkingDirectory $Api -Command "pnpm" -Arguments @("build")
  Write-Ok "API build نجح."
}

if ($RunSmoke) {
  Write-Info "تشغيل Smoke Tests. يجب أن يكون الـ API شغالًا على 4000."

  try {
    $health = Invoke-WebRequest -Uri $HealthUrl -Method GET -UseBasicParsing -ErrorAction Stop
    $report.smoke.healthStatus = [int]$health.StatusCode

    if ([int]$health.StatusCode -eq 200) {
      Write-Ok "Health check رجع 200."
    } else {
      Write-Warn "Health check رجع: $($health.StatusCode)"
    }
  } catch {
    $report.smoke.healthError = $_.Exception.Message
    Write-Warn "Health check فشل: $($_.Exception.Message)"
  }

  try {
    $protected = Invoke-WebRequest -Uri $ProtectedErpUrl -Method GET -UseBasicParsing -ErrorAction Stop
    $report.smoke.protectedErpStatus = [int]$protected.StatusCode
    Write-Fail "الـ ERP المحمي لم يرجع 401. رجع: $($protected.StatusCode)"
  } catch {
    $status = $null

    if ($_.Exception.Response) {
      $status = [int]$_.Exception.Response.StatusCode
    }

    $report.smoke.protectedErpStatus = $status

    if ($status -eq 401) {
      Write-Ok "ERP بدون Token رجع 401."
    } else {
      Write-Warn "ERP بدون Token رجع status غير متوقع: $status"
    }
  }

  try {
    $cors = Invoke-WebRequest `
      -Uri $HealthUrl `
      -Method GET `
      -Headers @{ Origin = $BadOrigin } `
      -UseBasicParsing `
      -ErrorAction Stop

    $allowOrigin = $cors.Headers["Access-Control-Allow-Origin"]
    $report.smoke.badOriginAllowHeader = $allowOrigin

    if ($allowOrigin -eq $BadOrigin) {
      Write-Fail "CORS يسمح بـ Origin غريب: $BadOrigin"
    } else {
      Write-Ok "CORS لا يسمح صراحة بالـ Origin الغريب."
    }
  } catch {
    $report.smoke.badOriginError = $_.Exception.Message
    Write-Ok "طلب Origin الغريب تم رفضه أو لم يمر."
  }
}

$reportPath = Join-Path $backupRoot "remediation-report.json"
$report | ConvertTo-Json -Depth 30 | Set-Content -Path $reportPath -Encoding UTF8

Write-Host ""
Write-Ok "انتهى السكريبت."
Write-Info "Backup/Report folder: $backupRoot"
Write-Info "Report: $reportPath"
Write-Host ""
Write-Host "الأوامر الحالية الصحيحة:" -ForegroundColor Cyan
Write-Host "cd E:\Matrix\apps\api"
Write-Host '$env:DATABASE_URL = "file:E:/Matrix/data/matrix.db"'
Write-Host '$env:JWT_SECRET = "dev_secret_change_me"'
Write-Host "pnpm dev"