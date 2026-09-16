@echo off
setlocal
cd /d "%~dp0"
title StockSimVN - Fix pygame Python 3.14

echo ==========================================
echo FIX PYGAME CHO PYTHON 3.14
ECHO ==========================================

if not exist .venv\Scripts\python.exe (
    echo Chua co .venv. Dang chay setup day du...
    call setup_venv.bat
    exit /b %errorlevel%
)

.venv\Scripts\python.exe --version
.venv\Scripts\python.exe -m pip install --upgrade pip setuptools wheel
.venv\Scripts\python.exe -m pip uninstall -y pygame >nul 2>&1
.venv\Scripts\python.exe -m pip install --upgrade --only-binary=:all: pygame-ce==2.5.8
if errorlevel 1 goto :fail

.venv\Scripts\python.exe -c "import pygame; print('OK - pygame module:', pygame.version.ver)"
if errorlevel 1 goto :fail

echo.
echo FIX THANH CONG. Bay gio chay setup_venv.bat de cai tiep numpy/pandas/PyInstaller,
echo hoac chay run_game.bat neu cac thu vien con lai da co.
pause
exit /b 0

:fail
echo.
echo FIX THAT BAI. Hay chay RESET_VENV.bat roi setup lai tu dau.
pause
exit /b 1
