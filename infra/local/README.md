# Matrix — Local Development Infrastructure

## Services

| Service | Image | Port |
|---------|-------|------|
| postgres | postgres:16-alpine | 5432 |
| redis | redis:7-alpine | 6379 |
| mailhog | mailhog/mailhog | 1025 (SMTP), 8025 (UI) |
| adminer | adminer | 8080 |

## Quick start

```bash
cp .env.example .env
docker compose up -d
```

## Data persistence

Volumes stored in `./data/` (gitignored).

## Stop

```bash
docker compose down
```

## Reset database

```bash
docker compose down -v
rm -rf data/postgres
docker compose up -d
```
