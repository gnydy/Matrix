Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for WomenCare Maternity Clinic...'
npm install
Write-Host 'Starting dev server...'
npm run dev
