$root = $PSScriptRoot
$templates = Get-ChildItem -Path $root -Directory | Where-Object { Test-Path (Join-Path $_.FullName 'package.json') }
foreach ($template in $templates) {
  $ts = Join-Path $template.FullName 'next.config.ts'
  $js = Join-Path $template.FullName 'next.config.js'
  if (Test-Path $ts) {
@'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;
'@ | Set-Content -Path $js -Encoding UTF8
    Remove-Item $ts -Force
  }
}
Write-Host 'All configs checked.' -ForegroundColor Green
