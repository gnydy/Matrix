# Automation foundation

This repository now contains a safe automation foundation for maintenance operations.

## Included capabilities

- Repository inspection and safe planning
- GitHub Actions workflows for manual and comment-driven automation
- Monthly maintenance workflow foundation
- Guardrails that block destructive commands and delete-style operations

## Safety rules

- No files or folders are deleted by the automation.
- Destructive shell commands are blocked.
- Main remains unchanged; work happens on a dedicated branch.
