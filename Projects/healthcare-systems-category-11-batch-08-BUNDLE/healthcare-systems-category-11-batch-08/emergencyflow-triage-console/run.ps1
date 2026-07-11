Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for EmergencyFlow Triage Console...'
npm install
Write-Host 'Starting dev server...'
npm run dev
