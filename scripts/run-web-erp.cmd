@echo off
cd /d E:\Matrix
set MATRIX_API_URL=http://127.0.0.1:4000
set JWT_SECRET=dev_secret_change_me
pnpm --filter @allinall/web-erp dev
