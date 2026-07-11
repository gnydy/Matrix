$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot
if (!(Test-Path "node_modules")) {
  npm install
}
npm run build
