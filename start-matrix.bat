@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Matrix — الموقع + Control Center

echo.
echo  Matrix — تشغيل الموقع و Control Center
echo  ======================================
echo.
echo  قاعدة البيانات: SQLite محلية (بدون Docker)
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [خطأ] Node.js غير مثبت. ثبّت Node 20+ من https://nodejs.org
  pause
  exit /b 1
)

set MATRIX_GATEWAY_PORT=8080
call npm run stack:start

pause
