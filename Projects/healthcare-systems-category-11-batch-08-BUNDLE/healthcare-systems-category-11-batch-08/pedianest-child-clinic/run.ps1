Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for PediaNest Child Clinic...'
npm install
Write-Host 'Starting dev server...'
npm run dev
