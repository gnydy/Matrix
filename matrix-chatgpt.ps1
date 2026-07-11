$ErrorActionPreference = "Stop"

$apiKey = $env:OPENAI_API_KEY

if ([string]::IsNullOrWhiteSpace($apiKey)) {
    Write-Host "OPENAI_API_KEY is missing. Run:" -ForegroundColor Red
    Write-Host 'setx OPENAI_API_KEY "your_api_key_here"'
    exit 1
}

$uri = "https://api.openai.com/v1/responses"

$rules = @"
You are a careful AI coding assistant for the Matrix project.

Rules:
- You may review, explain, and suggest code.
- You may create new code suggestions.
- You must not delete files.
- You must not remove features.
- You must not suggest destructive commands.
- You must not modify secrets.
- You must not force push.
- You must not push directly to main.
- Any real project change must be done through a new branch and Pull Request.
- Keep 3 backup versions before meaningful changes.
"@

$conversation = ""

function Get-OpenAIText($response) {
    if ($response.output_text) {
        return $response.output_text
    }

    $texts = @()

    foreach ($item in $response.output) {
        if ($item.type -eq "message") {
            foreach ($content in $item.content) {
                if ($content.type -eq "output_text") {
                    $texts += $content.text
                }
            }
        }
    }

    return ($texts -join "`n")
}

Write-Host "Matrix ChatGPT PowerShell started." -ForegroundColor Cyan
Write-Host "Type exit to close." -ForegroundColor Yellow

while ($true) {
    $userInput = Read-Host "`nYou"

    if ($userInput -eq "exit" -or $userInput -eq "quit") {
        break
    }

    $prompt = @"
$rules

Conversation so far:
$conversation

User:
$userInput

Assistant:
"@

    $body = @{
        model = "gpt-5.5"
        input = $prompt
    } | ConvertTo-Json -Depth 20

    try {
        $response = Invoke-RestMethod `
            -Method Post `
            -Uri $uri `
            -Headers @{
                "Authorization" = "Bearer $apiKey"
            } `
            -ContentType "application/json; charset=utf-8" `
            -Body $body

        $answer = Get-OpenAIText $response

        Write-Host "`nAssistant:" -ForegroundColor Green
        Write-Host $answer

        $conversation += "`nUser: $userInput`nAssistant: $answer`n"
    }
    catch {
        Write-Host "Request failed:" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red

        if ($_.ErrorDetails.Message) {
            Write-Host $_.ErrorDetails.Message -ForegroundColor Yellow
        }
    }
}
