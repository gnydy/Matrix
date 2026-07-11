Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for VetMedi Animal Clinic...'
npm install
Write-Host 'Starting dev server...'
npm run dev
