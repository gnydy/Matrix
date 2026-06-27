# Adds matrixall to hosts — run PowerShell as Administrator
$ErrorActionPreference = 'Stop'
$hostsPath = "$env:SystemRoot\System32\drivers\etc\hosts"
$entry = "127.0.0.1 matrixall"

if (Select-String -Path $hostsPath -Pattern '\bmatrixall\b' -Quiet) {
    Write-Host "matrixall already in hosts"
    exit 0
}

try {
    Add-Content -Path $hostsPath -Value "`n$entry"
    Write-Host "Added matrixall to hosts"
} catch {
    Write-Host ""
    Write-Host "Could not edit hosts automatically (Administrator required)."
    Write-Host "Run in elevated PowerShell:"
    Write-Host "  Add-Content -Path '$hostsPath' -Value '`n$entry'"
    Write-Host ""
    Write-Host "Or add this line manually:"
    Write-Host "  $entry"
    exit 1
}
