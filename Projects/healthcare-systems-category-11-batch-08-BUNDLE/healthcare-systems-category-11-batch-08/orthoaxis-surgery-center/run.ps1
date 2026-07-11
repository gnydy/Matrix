Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for OrthoAxis Surgery Center...'
npm install
Write-Host 'Starting dev server...'
npm run dev
