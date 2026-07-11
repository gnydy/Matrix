@echo off
cd /d E:\Matrix

echo Starting Matrix ERP...

start "Matrix API - 4000" cmd /k "cd /d E:\Matrix && set DATABASE_URL=file:E:/Matrix/data/matrix.db&& set JWT_SECRET=dev_secret_change_me&& pnpm --filter @allinall/api dev"

timeout /t 6 /nobreak > nul

start "Matrix Web ERP - 3002" cmd /k "cd /d E:\Matrix && set MATRIX_API_URL=http://127.0.0.1:4000&& set JWT_SECRET=dev_secret_change_me&& pnpm --filter @allinall/web-erp dev"

timeout /t 8 /nobreak > nul

start http://127.0.0.1:3002/erp/login