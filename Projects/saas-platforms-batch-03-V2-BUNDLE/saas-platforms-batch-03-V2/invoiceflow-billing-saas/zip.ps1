$ErrorActionPreference = "Stop"
Set-Location "$PSScriptRoot\.."
Compress-Archive -Path ".\invoiceflow-billing-saas\*" -DestinationPath ".\invoiceflow-billing-saas.zip" -Force
Write-Host "Created invoiceflow-billing-saas.zip"
