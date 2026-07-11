Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for MentalCare Therapy Portal...'
npm install
Write-Host 'Starting dev server...'
npm run dev
