$root = "E:\corporate-websites-batch-01-V2-BUNDLE\corporate-websites-batch-01-V2"

$templates = @(
    @{ Name = "matrixall-software-command"; Port = 3000 },
    @{ Name = "nexora-consulting-boardroom"; Port = 3001 },
    @{ Name = "apex-contracting-grid"; Port = 3002 },
    @{ Name = "sentinel-cyber-trust"; Port = 3003 },
    @{ Name = "orbit-logistics-tower"; Port = 3004 },
    @{ Name = "terraforge-industries"; Port = 3005 },
    @{ Name = "bluegrid-energy-corporate"; Port = 3006 },
    @{ Name = "clarity-finance-advisory"; Port = 3007 },
    @{ Name = "mednova-care-network"; Port = 3008 },
    @{ Name = "skyline-holdings-realty"; Port = 3009 },
    @{ Name = "alchemy-creative-group"; Port = 3010 },
    @{ Name = "quantum-ai-labs-corporate"; Port = 3011 },
    @{ Name = "horizon-education-group"; Port = 3012 },
    @{ Name = "vault-legal-corporate"; Port = 3013 },
    @{ Name = "harbor-hospitality-group"; Port = 3014 },
    @{ Name = "sterling-investment-holding"; Port = 3015 },
    @{ Name = "prime-facility-management"; Port = 3016 },
    @{ Name = "atlas-engineering-office"; Port = 3017 },
    @{ Name = "greenfield-agritech-corporate"; Port = 3018 },
    @{ Name = "vector-cloud-services"; Port = 3019 }
)

foreach ($template in $templates) {
    $projectPath = Join-Path $root $template.Name

    if (Test-Path (Join-Path $projectPath "package.json")) {
        $cmd = "cd /d `"$projectPath`" && npm run dev -- --port $($template.Port)"
        Start-Process cmd.exe -ArgumentList "/k", $cmd
        Start-Sleep -Milliseconds 700

        Write-Host "Started $($template.Name) on http://localhost:$($template.Port)" -ForegroundColor Green
    }
    else {
        Write-Host "Skipped $($template.Name) - package.json not found" -ForegroundColor Yellow
    }
}
