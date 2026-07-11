Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for PhysioTrack Rehab Center...'
npm install
Write-Host 'Starting dev server...'
npm run dev
