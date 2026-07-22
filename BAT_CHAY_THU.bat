@echo off
chcp 65001 >nul
title Kanban Ca Nhan - Chay Thu
cd /d "%~dp0"
echo.
echo ===============================================
echo   KANBAN CA NHAN - MAY CHU CHAY THU
echo ===============================================
echo.
where python >nul 2>nul
if errorlevel 1 (
  where py >nul 2>nul
  if errorlevel 1 (
    echo Khong tim thay Python tren may.
    echo Anh co the upload thang bo ma len GitHub Pages.
    pause
    exit /b 1
  )
  start "" http://localhost:8080
  py -m http.server 8080
) else (
  start "" http://localhost:8080
  python -m http.server 8080
)
