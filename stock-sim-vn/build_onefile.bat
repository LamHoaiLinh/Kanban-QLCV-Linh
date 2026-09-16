@echo off
setlocal
cd /d "%~dp0"
title StockSimVN - Build ONEFILE

if not exist .venv\Scripts\python.exe (
    echo Chua co .venv. Hay chay setup_venv.bat truoc.
    pause
    exit /b 1
)

.venv\Scripts\python.exe -c "import pygame, numpy, pandas, PyInstaller" >nul 2>&1
if errorlevel 1 (
    echo Thieu thu vien. Dang chay setup_venv.bat...
    call setup_venv.bat
    if errorlevel 1 exit /b 1
)

echo ==========================================
echo BUILD ONEFILE - STOCKSIM VN
ECHO ==========================================
.venv\Scripts\python.exe -m PyInstaller --noconfirm --clean --onefile --windowed --name StockSimVN --collect-all pygame main.py
if errorlevel 1 (
    echo.
    echo BUILD THAT BAI. Kiem tra log phia tren.
    pause
    exit /b 1
)

echo.
echo BUILD XONG: dist\StockSimVN.exe
pause
