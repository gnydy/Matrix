$ErrorActionPreference = "Continue"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$templates = @(
    @{ Name = "chrono-luxe-watches"; Port = 3020 },
    @{ Name = "moda-atelier-fashion"; Port = 3021 },
    @{ Name = "bytecart-electronics"; Port = 3022 },
    @{ Name = "oud-house-perfumes"; Port = 3023 },
    @{ Name = "nestline-furniture"; Port = 3024 },
    @{ Name = "gourmet-market-groceries"; Port = 3025 },
    @{ Name = "skinlab-cosmetics"; Port = 3026 },
    @{ Name = "sportx-performance-store"; Port = 3027 },
    @{ Name = "tinyplanet-kids"; Port = 3028 },
    @{ Name = "petora-pet-supplies"; Port = 3029 },
    @{ Name = "digitalforge-products"; Port = 3030 },
    @{ Name = "artgrid-gallery-shop"; Port = 3031 },
    @{ Name = "autohub-parts"; Port = 3032 },
    @{ Name = "craftsouk-handmade"; Port = 3033 },
    @{ Name = "booknest-library-store"; Port = 3034 },
    @{ Name = "giftlane-curated-gifts"; Port = 3035 },
    @{ Name = "medishop-pharmacy-front"; Port = 3036 },
    @{ Name = "plantora-garden-store"; Port = 3037 },
    @{ Name = "jewelvault-fine-jewelry"; Port = 3038 },
    @{ Name = "saas-template-market"; Port = 3039 },

)
foreach ($template in $templates) {
    $projectPath = Join-Path $root $template.Name
    if (Test-Path (Join-Path $projectPath "package.json")) {
        $cmd = "cd /d `"$projectPath`" && npm run dev -- --port $($template.Port)"
        Start-Process cmd.exe -ArgumentList "/k", $cmd
        Start-Sleep -Milliseconds 900
        Write-Host "Started $($template.Name) on http://localhost:$($template.Port)" -ForegroundColor Green
    } else {
        Write-Host "Skipped $($template.Name)" -ForegroundColor Yellow
    }
}
