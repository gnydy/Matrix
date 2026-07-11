Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for HealthHQ MultiClinic OS...'
npm install
Write-Host 'Starting dev server...'
npm run dev
