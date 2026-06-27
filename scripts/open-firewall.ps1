param([int]$Port = 8080)

$ruleName = "Matrix Gateway $Port"
$existing = Get-NetFirewallRule -DisplayName $ruleName -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "Firewall rule exists: $ruleName"
    exit 0
}

try {
    New-NetFirewallRule -DisplayName $ruleName -Direction Inbound -Action Allow -Protocol TCP -LocalPort $Port -ErrorAction Stop | Out-Null
    Write-Host "Opened TCP port $Port in Windows Firewall"
} catch {
    Write-Host "Could not open firewall (run PowerShell as Administrator):"
    Write-Host "  New-NetFirewallRule -DisplayName '$ruleName' -Direction Inbound -Action Allow -Protocol TCP -LocalPort $Port"
    exit 1
}
