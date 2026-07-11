Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for CardioWatch Heart Clinic...'
npm install
Write-Host 'Starting dev server...'
npm run dev
