# إعداد Netlify لموقع cerulean-tartufo-5a529e (مرة واحدة)
# شغّل من PowerShell: .\scripts\netlify-setup.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot\..

Write-Host "`n=== Matrix — Netlify setup ===" -ForegroundColor Cyan
Write-Host "Site: cerulean-tartufo-5a529e"
Write-Host "URL:  https://cerulean-tartufo-5a529e.netlify.app`n"

# 1) تسجيل الدخول
npx netlify status 2>$null | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Log in to Netlify (browser will open)..." -ForegroundColor Yellow
  npx netlify login
}

# 2) ربط المجلد بالموقع
Write-Host "`nLinking project..." -ForegroundColor Yellow
npx netlify link --name cerulean-tartufo-5a529e

# 3) متغيرات البيئة (عدّل DATABASE_URL قبل التشغيل)
$dbUrl = $env:DATABASE_URL
if (-not $dbUrl) {
  Write-Host "`nDATABASE_URL not set locally — set env vars in Netlify UI:" -ForegroundColor Yellow
  Write-Host "  https://app.netlify.com/projects/cerulean-tartufo-5a529e/configuration/env"
  Write-Host "  Required: DATABASE_URL, NEXT_PUBLIC_SITE_URL"
} else {
  Write-Host "`nSetting Netlify env vars..." -ForegroundColor Yellow
  npx netlify env:set DATABASE_URL $dbUrl
  npx netlify env:set NEXT_PUBLIC_SITE_URL "https://cerulean-tartufo-5a529e.netlify.app"
}

Write-Host "`n=== Ready to deploy ===" -ForegroundColor Green
Write-Host "  npm run deploy:marketing:prod"
Write-Host "  or trigger deploy from Netlify dashboard`n"
