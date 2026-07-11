Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for CareNova Telehealth Hub...'
npm install
Write-Host 'Starting dev server...'
npm run dev
