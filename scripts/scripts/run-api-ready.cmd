@echo off
cd /d E:\Matrix
set DATABASE_URL=file:E:/Matrix/data/matrix.db
set JWT_SECRET=dev_secret_change_me
pnpm --filter @allinall/api dev
