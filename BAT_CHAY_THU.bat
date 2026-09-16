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
    echo Ban co the upload bo web len GitHub Pages, nhung StockSim VN chi mo truc tiep khi chay local tren Windows.
    pause
    exit /b 1
  )
  start "" http://localhost:8080
  py kanban_local_server.py --port 8080
) else (
  start "" http://localhost:8080
  python kanban_local_server.py --port 8080
)
