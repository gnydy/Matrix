Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for MediLab Diagnostics Portal...'
npm install
Write-Host 'Starting dev server...'
npm run dev
