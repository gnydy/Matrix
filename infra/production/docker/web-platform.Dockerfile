FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app

FROM base AS builder
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/database ./packages/database
COPY apps/web-platform ./apps/web-platform
RUN mkdir -p apps/web-platform/public
RUN pnpm install --filter @allinall/web-platform --filter @allinall/database
RUN pnpm --filter @allinall/database run db:generate
WORKDIR /app/apps/web-platform
ENV DOCKER_BUILD=1
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3001
ENV HOSTNAME=0.0.0.0
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
COPY --from=builder /app/apps/web-platform/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/apps/web-platform/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web-platform/.next/static ./.next/static
USER nextjs
EXPOSE 3001
CMD ["node", "server.js"]
