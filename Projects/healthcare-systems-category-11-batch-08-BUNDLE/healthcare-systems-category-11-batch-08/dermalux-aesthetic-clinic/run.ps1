Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for DermaLux Aesthetic Clinic...'
npm install
Write-Host 'Starting dev server...'
npm run dev
