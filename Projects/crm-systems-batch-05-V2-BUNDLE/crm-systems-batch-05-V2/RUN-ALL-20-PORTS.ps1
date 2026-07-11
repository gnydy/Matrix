$ErrorActionPreference = "Continue"
$root = "E:/crm-systems-batch-05-V2"  # Replace this with your extracted local path if needed
$templates = @(
    @{ Name = "pipeline-command-crm"; Port = 3080 },
    @{ Name = "account-360-crm"; Port = 3081 },
    @{ Name = "field-sales-crm"; Port = 3082 },
    @{ Name = "real-estate-leads-crm"; Port = 3083 },
    @{ Name = "medical-patient-crm"; Port = 3084 },
    @{ Name = "agency-client-crm"; Port = 3085 },
    @{ Name = "saas-revenue-crm"; Port = 3086 },
    @{ Name = "support-sales-crm"; Port = 3087 },
    @{ Name = "automotive-dealer-crm"; Port = 3088 },
    @{ Name = "education-admissions-crm"; Port = 3089 },
    @{ Name = "legal-client-crm"; Port = 3090 },
    @{ Name = "fintech-investor-crm"; Port = 3091 },
    @{ Name = "hospitality-guest-crm"; Port = 3092 },
    @{ Name = "construction-bid-crm"; Port = 3093 },
    @{ Name = "ecommerce-retention-crm"; Port = 3094 },
    @{ Name = "hr-recruitment-crm"; Port = 3095 },
    @{ Name = "nonprofit-donor-crm"; Port = 3096 },
    @{ Name = "insurance-broker-crm"; Port = 3097 },
    @{ Name = "manufacturing-b2b-crm"; Port = 3098 },
    @{ Name = "executive-sales-war-room"; Port = 3099 },
)
foreach ($template in $templates) {
    $projectPath = Join-Path $PSScriptRoot $template.Name
    if (Test-Path (Join-Path $projectPath "package.json")) {
        $cmd = "cd /d `"$projectPath`" && npm run dev -- --port $($template.Port)"
        Start-Process cmd.exe -ArgumentList "/k", $cmd
        Start-Sleep -Milliseconds 700
        Write-Host "Started $($template.Name) on http://localhost:$($template.Port)" -ForegroundColor Green
    } else {
        Write-Host "Skipped $($template.Name) - package.json not found" -ForegroundColor Yellow
    }
}
