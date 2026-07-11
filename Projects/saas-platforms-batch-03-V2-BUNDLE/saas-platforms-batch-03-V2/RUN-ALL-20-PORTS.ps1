$ErrorActionPreference = "Continue"
$root = $PSScriptRoot
$templates = @(
    @{ Name = "opspulse-workflow-saas"; Port = 3040 },
    @{ Name = "metricforge-analytics-cloud"; Port = 3041 },
    @{ Name = "invoiceflow-billing-saas"; Port = 3042 },
    @{ Name = "hirelane-recruitment-suite"; Port = 3043 },
    @{ Name = "supportnest-helpdesk"; Port = 3044 },
    @{ Name = "learnloop-lms-saas"; Port = 3045 },
    @{ Name = "securevault-compliance"; Port = 3046 },
    @{ Name = "marketpilot-campaign-os"; Port = 3047 },
    @{ Name = "bookgrid-appointment-saas"; Port = 3048 },
    @{ Name = "docsprint-knowledge-base"; Port = 3049 },
    @{ Name = "salesbridge-crm-saas"; Port = 3050 },
    @{ Name = "routewise-delivery-saas"; Port = 3051 },
    @{ Name = "contentcraft-ai-saas"; Port = 3052 },
    @{ Name = "medsync-clinic-portal"; Port = 3053 },
    @{ Name = "propertyhub-real-estate-saas"; Port = 3054 },
    @{ Name = "teamdock-project-ops"; Port = 3055 },
    @{ Name = "paynode-fintech-billing"; Port = 3056 },
    @{ Name = "cloudkeeper-hosting-panel"; Port = 3057 },
    @{ Name = "formgrid-no-code-builder"; Port = 3058 },
    @{ Name = "socialpulse-community-saas"; Port = 3059 },
)
foreach ($template in $templates) {
    $projectPath = Join-Path $root $template.Name
    if (Test-Path (Join-Path $projectPath "package.json")) {
        $cmd = "cd /d `"$projectPath`" && npm run dev -- --port $($template.Port)"
        Start-Process cmd.exe -ArgumentList "/k", $cmd
        Start-Sleep -Milliseconds 500
        Write-Host "Started $($template.Name) on http://localhost:$($template.Port)" -ForegroundColor Green
    }
    else {
        Write-Host "Skipped $($template.Name) - package.json not found" -ForegroundColor Yellow
    }
}
