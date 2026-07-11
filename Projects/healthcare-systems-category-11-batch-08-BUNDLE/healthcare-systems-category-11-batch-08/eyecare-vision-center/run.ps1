Set-Location -Path $PSScriptRoot
Write-Host 'Installing dependencies for EyeCare Vision Center...'
npm install
Write-Host 'Starting dev server...'
npm run dev
