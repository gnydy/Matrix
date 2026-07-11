Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for DentalFlow Practice System...'
npm install
Write-Host 'Starting dev server...'
npm run dev
