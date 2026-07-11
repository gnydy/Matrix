Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for SeniorCare Home Health...'
npm install
Write-Host 'Starting dev server...'
npm run dev
