$ErrorActionPreference = "Continue"
$root = "/mnt/data/erp-systems-batch-04-V2"
$templates = @(
  @{ Name = "finance-command-erp"; Port = 3060 },
  @{ Name = "factory-floor-erp"; Port = 3061 },
  @{ Name = "inventory-control-erp"; Port = 3062 },
  @{ Name = "procurement-hub-erp"; Port = 3063 },
  @{ Name = "people-payroll-erp"; Port = 3064 },
  @{ Name = "sales-order-erp"; Port = 3065 },
  @{ Name = "construct-cost-erp"; Port = 3066 },
  @{ Name = "fleet-route-erp"; Port = 3067 },
  @{ Name = "hospital-ops-erp"; Port = 3068 },
  @{ Name = "campus-admin-erp"; Port = 3069 },
  @{ Name = "property-asset-erp"; Port = 3070 },
  @{ Name = "hotel-chain-erp"; Port = 3071 },
  @{ Name = "retail-branch-erp"; Port = 3072 },
  @{ Name = "restaurant-ops-erp"; Port = 3073 },
  @{ Name = "service-maintenance-erp"; Port = 3074 },
  @{ Name = "agriflow-erp"; Port = 3075 },
  @{ Name = "project-cost-erp"; Port = 3076 },
  @{ Name = "legal-office-erp"; Port = 3077 },
  @{ Name = "energy-asset-erp"; Port = 3078 },
  @{ Name = "holding-executive-erp"; Port = 3079 },
)
foreach ($template in $templates) {
  $projectPath = Join-Path $root $template.Name
  if (Test-Path (Join-Path $projectPath "package.json")) {
    $cmd = "cd /d `"$projectPath`" && npm run dev -- --port $($template.Port)"
    Start-Process cmd.exe -ArgumentList "/k", $cmd
    Start-Sleep -Milliseconds 650
    Write-Host "Started $($template.Name) on http://localhost:$($template.Port)" -ForegroundColor Green
  } else { Write-Host "Skipped $($template.Name)" -ForegroundColor Yellow }
}