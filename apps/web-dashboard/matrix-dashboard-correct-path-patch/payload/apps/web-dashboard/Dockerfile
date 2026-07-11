FROM node:22-alpine AS builder
WORKDIR /app
RUN corepack enable
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm exec prisma generate --schema packages/database/prisma/schema.prisma
RUN pnpm --filter @allinall/web-dashboard build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN corepack enable && addgroup -S matrix && adduser -S matrix -G matrix
COPY --from=builder --chown=matrix:matrix /app /app
USER matrix
EXPOSE 3020
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 CMD wget -qO- http://127.0.0.1:3020/api/health || exit 1
CMD ["pnpm", "--filter", "@allinall/web-dashboard", "start"]
