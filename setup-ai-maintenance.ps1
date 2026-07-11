# setup-ai-maintenance.ps1

$ErrorActionPreference = "Stop"

Write-Host "Setting up AI Maintenance Automation..." -ForegroundColor Cyan

# تأكد أنك داخل مشروع Git
if (!(Test-Path ".git")) {
    Write-Host "This folder is not a Git repository. Run: git init" -ForegroundColor Red
    exit 1
}

# إنشاء الفولدرات
New-Item -ItemType Directory -Force -Path ".github/workflows" | Out-Null
New-Item -ItemType Directory -Force -Path "scripts" | Out-Null
New-Item -ItemType Directory -Force -Path "docs" | Out-Null

# ملف تعليمات الذكاء الاصطناعي
@'
# AI Maintenance Rules

You are allowed to maintain this project, but you must follow these rules strictly:

## Absolute Restrictions

- Never delete files.
- Never remove folders.
- Never run destructive commands.
- Never push directly to main.
- Never force push.
- Never delete branches.
- Never delete database records.
- Never drop tables.
- Never remove existing features.
- Never expose secrets, API keys, tokens, passwords, or private credentials.

## Allowed Actions

- Read project files.
- Create new files.
- Edit existing files carefully.
- Create a new branch.
- Open a Pull Request.
- Run tests.
- Run lint.
- Run typecheck.
- Run build.
- Create reports.
- Suggest UX improvements.
- Create safer replacements for weak code.

## UX Rules

- Do not randomly redesign the project.
- Any UX change must improve clarity, accessibility, responsiveness, performance, or conversion.
- Keep the design system consistent.
- Preserve existing user flows unless there is a clear bug.

## Code Rules

- Preserve business logic.
- Do not break existing APIs.
- Do not modify authentication, payments, database schema, or permissions without explicit approval.
- All changes must pass lint, typecheck, tests, and build.
- Every change must be submitted as a Pull Request.
'@ | Set-Content ".github/copilot-instructions.md" -Encoding UTF8

# PowerShell Guard: يمنع الملفات المحذوفة
@'
$ErrorActionPreference = "Stop"

Write-Host "Running No Delete Guard..." -ForegroundColor Cyan

$deletedFiles = git diff --name-status origin/main...HEAD | Where-Object { $_ -match "^D\s+" }

if ($deletedFiles.Count -gt 0) {
    Write-Host "ERROR: Deleted files detected. Deletion is not allowed." -ForegroundColor Red
    $deletedFiles | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    exit 1
}

Write-Host "No deleted files detected." -ForegroundColor Green
exit 0
'@ | Set-Content "scripts/no-delete-guard.ps1" -Encoding UTF8

# PowerShell Guard: يمنع أوامر خطيرة داخل الكود
@'
$ErrorActionPreference = "Stop"

Write-Host "Running Dangerous Command Guard..." -ForegroundColor Cyan

$dangerousPatterns = @(
    "Remove-Item",
    "\brm\b",
    "\bdel\b",
    "rimraf",
    "fs\.unlink",
    "fs\.rm",
    "DROP TABLE",
    "TRUNCATE TABLE",
    "DELETE FROM",
    "git push --force",
    "git reset --hard"
)

$files = Get-ChildItem -Recurse -File |
    Where-Object {
        $_.FullName -notmatch "\\.git\\" -and
        $_.FullName -notmatch "\\node_modules\\" -and
        $_.FullName -notmatch "\\dist\\" -and
        $_.FullName -notmatch "\\build\\"
    }

$violations = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue

    foreach ($pattern in $dangerousPatterns) {
        if ($content -match $pattern) {
            $violations += "$($file.FullName) contains dangerous pattern: $pattern"
        }
    }
}

if ($violations.Count -gt 0) {
    Write-Host "ERROR: Dangerous commands detected." -ForegroundColor Red
    $violations | ForEach-Object { Write-Host $_ -ForegroundColor Red }
    exit 1
}

Write-Host "No dangerous commands detected." -ForegroundColor Green
exit 0
'@ | Set-Content "scripts/dangerous-command-guard.ps1" -Encoding UTF8

# Local maintenance script
@'
$ErrorActionPreference = "Stop"

Write-Host "Running local project maintenance..." -ForegroundColor Cyan

if (Test-Path "package.json") {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install

    Write-Host "Running lint..." -ForegroundColor Yellow
    npm run lint --if-present

    Write-Host "Running typecheck..." -ForegroundColor Yellow
    npm run typecheck --if-present

    Write-Host "Running tests..." -ForegroundColor Yellow
    npm run test --if-present

    Write-Host "Running build..." -ForegroundColor Yellow
    npm run build --if-present
}
else {
    Write-Host "No package.json found. Skipping Node.js checks." -ForegroundColor Yellow
}

Write-Host "Running security guards..." -ForegroundColor Yellow
powershell -ExecutionPolicy Bypass -File "scripts/no-delete-guard.ps1"
powershell -ExecutionPolicy Bypass -File "scripts/dangerous-command-guard.ps1"

Write-Host "Maintenance checks completed." -ForegroundColor Green
'@ | Set-Content "scripts/run-maintenance.ps1" -Encoding UTF8

# GitHub Action: CI
@'
name: CI

on:
  push:
    branches:
      - main
      - develop
  pull_request:
    branches:
      - main
      - develop

permissions:
  contents: read
  pull-requests: read

jobs:
  quality-check:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint --if-present

      - name: Typecheck
        run: npm run typecheck --if-present

      - name: Test
        run: npm run test --if-present

      - name: Build
        run: npm run build --if-present
'@ | Set-Content ".github/workflows/ci.yml" -Encoding UTF8

# GitHub Action: No Delete Guard
@'
name: No Delete Guard

on:
  pull_request:
    branches:
      - main
      - develop

permissions:
  contents: read
  pull-requests: read

jobs:
  prevent-deletions:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout PR
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Check deleted files
        run: |
          git fetch origin ${{ github.base_ref }}
          DELETED_FILES=$(git diff --name-status origin/${{ github.base_ref }}...HEAD | grep '^D' || true)

          if [ -n "$DELETED_FILES" ]; then
            echo "Deleted files detected. Deletion is not allowed."
            echo "$DELETED_FILES"
            exit 1
          fi

          echo "No deleted files detected."
'@ | Set-Content ".github/workflows/no-delete-guard.yml" -Encoding UTF8

# GitHub Action: Dangerous Command Guard
@'
name: Dangerous Command Guard

on:
  pull_request:
    branches:
      - main
      - develop

permissions:
  contents: read

jobs:
  dangerous-command-guard:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout PR
        uses: actions/checkout@v4

      - name: Scan for dangerous commands
        run: |
          PATTERNS="Remove-Item|rm -rf|rimraf|fs.unlink|fs.rm|DROP TABLE|TRUNCATE TABLE|DELETE FROM|git push --force|git reset --hard"

          if grep -R -E "$PATTERNS" . \
            --exclude-dir=.git \
            --exclude-dir=node_modules \
            --exclude-dir=dist \
            --exclude-dir=build; then
            echo "Dangerous command detected."
            exit 1
          fi

          echo "No dangerous commands detected."
'@ | Set-Content ".github/workflows/dangerous-command-guard.yml" -Encoding UTF8

# GitHub Action: Monthly Maintenance Issue
@'
name: Monthly Maintenance

on:
  schedule:
    - cron: "0 6 1 * *"
  workflow_dispatch:

permissions:
  issues: write
  contents: read

jobs:
  create-maintenance-issue:
    runs-on: ubuntu-latest

    steps:
      - name: Create monthly maintenance issue
        uses: actions/github-script@v7
        with:
          script: |
            const date = new Date().toISOString().slice(0, 10);

            await github.rest.issues.create({
              owner: context.repo.owner,
              repo: context.repo.repo,
              title: `Monthly Project Maintenance - ${date}`,
              body: `
## Monthly Maintenance Checklist

### Code Quality
- Review bugs
- Review warnings
- Review duplicated code
- Review dead code without deleting it

### UX / UI
- Review layout
- Review responsiveness
- Review accessibility
- Suggest UX refresh if needed

### Security
- Review dependencies
- Review exposed secrets
- Review authentication flow
- Review permissions

### Performance
- Review loading speed
- Review bundle size
- Review database queries
- Review images and assets

### Important Rule
Do not delete files or remove features. Create improvements in a separate branch and open a Pull Request.
              `
            });
'@ | Set-Content ".github/workflows/monthly-maintenance.yml" -Encoding UTF8

# ملف قواعد UX
@'
# UX Guidelines

The project should follow these UX rules:

- Clear navigation.
- Responsive design.
- Consistent spacing.
- Consistent typography.
- Accessible colors.
- Clear buttons and calls to action.
- No random redesigns.
- UX refresh must be based on user value, not decoration.
- Preserve existing flows unless broken.
'@ | Set-Content "docs/UX_GUIDELINES.md" -Encoding UTF8

# ملف قواعد الصيانة
@'
# Maintenance Policy

This project uses guarded AI maintenance.

The AI agent can:
- Read
- Edit
- Create
- Suggest
- Test
- Build
- Open Pull Requests

The AI agent cannot:
- Delete
- Force push
- Drop database
- Remove features
- Push directly to main

Every major change must be reviewed before merge.
'@ | Set-Content "docs/AI_MAINTENANCE_POLICY.md" -Encoding UTF8

Write-Host "AI Maintenance Automation has been created successfully." -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Review generated files."
Write-Host "2. Run: powershell -ExecutionPolicy Bypass -File scripts/run-maintenance.ps1"
Write-Host "3. Commit changes."
Write-Host "4. Push to GitHub."