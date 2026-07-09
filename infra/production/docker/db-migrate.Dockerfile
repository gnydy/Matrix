FROM node:20-alpine
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate
WORKDIR /app
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/database ./packages/database
RUN pnpm install --filter @allinall/database
WORKDIR /app/packages/database
CMD ["pnpm", "exec", "prisma", "db", "push", "--skip-generate"]
