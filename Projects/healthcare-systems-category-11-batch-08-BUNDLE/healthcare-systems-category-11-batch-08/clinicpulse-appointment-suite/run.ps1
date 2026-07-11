Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for ClinicPulse Appointment Suite...'
npm install
Write-Host 'Starting dev server...'
npm run dev
