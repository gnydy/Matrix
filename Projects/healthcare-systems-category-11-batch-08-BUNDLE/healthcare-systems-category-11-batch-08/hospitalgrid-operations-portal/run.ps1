Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for HospitalGrid Operations Portal...'
npm install
Write-Host 'Starting dev server...'
npm run dev
