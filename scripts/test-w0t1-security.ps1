param(
  [string]$Root = "E:\Matrix",
  [string]$ApiPort = "4000",
  [string]$AdminEmail = "admin@matrix.local",
  [string]$AdminPassword = "Admin@2030"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$Passed = 0
$Failed = 0
$Warned = 0

function Pass($msg) {
  $script:Passed++
  Write-Host "[PASS] $msg" -ForegroundColor Green
}

function Fail($msg) {
  $script:Failed++
  Write-Host "[FAIL] $msg" -ForegroundColor Red
}

function Warn($msg) {
  $script:Warned++
  Write-Host "[WARN] $msg" -ForegroundColor Yellow
}

function Test-Contains {
  param([string]$Text, [string]$Pattern)
  return $Text -match $Pattern
}

$Api = Join-Path $Root "apps\api"
$Pkg = Join-Path $Api "package.json"
$Main = Join-Path $Api "src\main.ts"

Write-Host ""
Write-Host "W0-T1 Security Test" -ForegroundColor Cyan
Write-Host "Root: $Root"
Write-Host "API:  $Api"
Write-Host ""

if (!(Test-Path $Root)) {
  Fail "Project root not found: $Root"
  exit 1
}

if (!(Test-Path $Api)) {
  Fail "API folder not found: $Api"
  exit 1
}

if (!(Test-Path $Pkg)) {
  Fail "package.json not found: $Pkg"
  exit 1
}

if (!(Test-Path $Main)) {
  Fail "main.ts not found: $Main"
  exit 1
}

Pass "Required project files exist"

$pkgJson = Get-Content $Pkg -Raw
$pkg = $pkgJson | ConvertFrom-Json

if ($null -eq $pkg.scripts) {
  Fail "package.json has no scripts"
} else {
  Pass "package.json has scripts"
}

$badScriptRefs = @()

foreach ($prop in $pkg.scripts.PSObject.Properties) {
  $name = $prop.Name
  $value = [string]$prop.Value

  if ($value -match "server\.ts|server\.js|dist[\\/]+server\.js|src[\\/]+server\.ts") {
    $badScriptRefs += "$name => $value"
  }
}

if ($badScriptRefs.Count -eq 0) {
  Pass "No package script points to legacy server.ts/server.js"
} else {
  Fail "Some package scripts still point to legacy server:"
  $badScriptRefs | ForEach-Object { Write-Host "       $_" -ForegroundColor Red }
}

if ([string]$pkg.scripts.dev -eq "nest start --watch") {
  Pass "dev script runs NestJS"
} else {
  Fail "dev script is not correct. Current: $($pkg.scripts.dev)"
}

if ([string]$pkg.scripts.start -eq "node dist/main.js") {
  Pass "start script runs dist/main.js"
} else {
  Fail "start script is not correct. Current: $($pkg.scripts.start)"
}

if ([string]$pkg.scripts."start:prod" -eq "node dist/main.js") {
  Pass "start:prod script runs dist/main.js"
} else {
  Fail "start:prod script is not correct. Current: $($pkg.scripts.'start:prod')"
}

$mainText = Get-Content $Main -Raw

if ($mainText -match "NestFactory\.create") {
  Pass "main.ts uses NestFactory.create"
} else {
  Fail "main.ts does not show NestFactory.create"
}

if ($mainText -match "enableCors") {
  Pass "main.ts includes enableCors"
} else {
  Warn "main.ts does not show enableCors. CORS may be missing or configured elsewhere."
}

$guardMatches = Get-ChildItem (Join-Path $Api "src") -Recurse -File -Include *.ts |
  Where-Object { $_.FullName -notmatch "\\node_modules\\" } |
  Select-String -Pattern "JwtAuthGuard|PermissionsGuard|APP_GUARD"

if ($guardMatches.Count -gt 0) {
  Pass "Found security guard references: JwtAuthGuard / PermissionsGuard / APP_GUARD"
} else {
  Warn "No JwtAuthGuard / PermissionsGuard / APP_GUARD references found"
}

$legacyFiles = @(
  Join-Path $Api "server.ts"
  Join-Path $Api "server.js"
  Join-Path $Api "src\server.ts"
  Join-Path $Api "src\server.js"
  Join-Path $Api "dist\server.js"
) | Where-Object { Test-Path $_ }

if ($legacyFiles.Count -eq 0) {
  Pass "No legacy server files found"
} else {
  Warn "Legacy server files still exist. This is acceptable only if package.json does not run them."
  $legacyFiles | ForEach-Object { Write-Host "       $_" -ForegroundColor Yellow }

  foreach ($file in $legacyFiles) {
    if ($file -match "\\dist\\") {
      continue
    }

    $routes = Select-String -Path $file -Pattern "\b(app|router)\.(get|post|put|patch|delete|options|all)\s*\("

    if ($routes.Count -gt 0) {
      Warn "Legacy routes found inside $file. Move them to NestJS Controllers before retiring server.ts."
      $routes | ForEach-Object {
        Write-Host "       $($_.LineNumber): $($_.Line.Trim())" -ForegroundColor Yellow
      }
    }
  }
}

Write-Host ""
Write-Host "Running API build..." -ForegroundColor Cyan

try {
  Push-Location $Api
  pnpm build
  if ($LASTEXITCODE -eq 0) {
    Pass "pnpm build passed"
  } else {
    Fail "pnpm build failed with exit code $LASTEXITCODE"
  }
} catch {
  Fail "pnpm build failed: $($_.Exception.Message)"
} finally {
  Pop-Location
}

$BaseUrl = "http://127.0.0.1:$ApiPort"
$HealthUrl = "$BaseUrl/api/v1/health"
$ProtectedUrl = "$BaseUrl/api/v1/erp/inventory/products"
$LoginUrl = "$BaseUrl/api/v1/auth/login"

Write-Host ""
Write-Host "Smoke tests against running API on $BaseUrl" -ForegroundColor Cyan
Write-Host "لو الـ API مش شغال، اختبارات HTTP ستفشل. شغّله في Terminal آخر." -ForegroundColor Yellow

try {
  $health = Invoke-WebRequest -Uri $HealthUrl -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop

  if ([int]$health.StatusCode -eq 200) {
    Pass "Health endpoint returns 200"
  } else {
    Fail "Health endpoint returned $($health.StatusCode)"
  }
} catch {
  Fail "Health endpoint failed. Is API running? $($_.Exception.Message)"
}

try {
  $res = Invoke-WebRequest -Uri $ProtectedUrl -UseBasicParsing -TimeoutSec 10 -ErrorAction Stop
  Fail "Protected ERP endpoint allowed unauthenticated request. Status: $($res.StatusCode)"
} catch {
  $status = $null

  if ($_.Exception.Response) {
    $status = [int]$_.Exception.Response.StatusCode
  }

  if ($status -eq 401) {
    Pass "Protected ERP endpoint returns 401 without token"
  } else {
    Fail "Protected ERP endpoint returned unexpected status without token: $status"
  }
}

try {
  $cors = Invoke-WebRequest `
    -Uri $HealthUrl `
    -Headers @{ Origin = "https://evil.example.com" } `
    -UseBasicParsing `
    -TimeoutSec 10 `
    -ErrorAction Stop

  $allowOrigin = $cors.Headers["Access-Control-Allow-Origin"]

  if ($allowOrigin -eq "https://evil.example.com") {
    Fail "CORS allows bad origin"
  } else {
    Pass "CORS does not explicitly allow bad origin"
  }
} catch {
  Pass "Bad Origin request was rejected or blocked"
}

try {
  $body = @{
    email = $AdminEmail
    password = $AdminPassword
  } | ConvertTo-Json

  $login = Invoke-RestMethod `
    -Uri $LoginUrl `
    -Method POST `
    -ContentType "application/json" `
    -Body $body `
    -TimeoutSec 10 `
    -ErrorAction Stop

  $token = $null

  if ($login.data -and $login.data.token) {
    $token = $login.data.token
  } elseif ($login.token) {
    $token = $login.token
  }

  if ($token) {
    Pass "Admin login returns token"

    try {
      $authRes = Invoke-WebRequest `
        -Uri $ProtectedUrl `
        -Headers @{ Authorization = "Bearer $token" } `
        -UseBasicParsing `
        -TimeoutSec 10 `
        -ErrorAction Stop

      if ([int]$authRes.StatusCode -eq 200) {
        Pass "Protected ERP endpoint works with valid token"
      } else {
        Warn "Protected ERP endpoint with token returned: $($authRes.StatusCode)"
      }
    } catch {
      Warn "Protected ERP endpoint with token failed: $($_.Exception.Message)"
    }
  } else {
    Fail "Admin login did not return token"
  }
} catch {
  Warn "Admin login test failed. Password may have changed. $($_.Exception.Message)"
}

Write-Host ""
Write-Host "==============================" -ForegroundColor Cyan
Write-Host "RESULT" -ForegroundColor Cyan
Write-Host "Passed: $Passed" -ForegroundColor Green
Write-Host "Warnings: $Warned" -ForegroundColor Yellow
Write-Host "Failed: $Failed" -ForegroundColor Red
Write-Host "==============================" -ForegroundColor Cyan

if ($Failed -gt 0) {
  exit 1
}

exit 0