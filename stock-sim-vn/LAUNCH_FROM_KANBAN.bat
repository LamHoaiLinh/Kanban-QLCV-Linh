@echo off
setlocal
cd /d "%~dp0"
title StockSim VN v1.9

rem Uu tien EXE one-file neu nguoi dung da build san.
if exist "dist\StockSimVN.exe" (
    start "" "dist\StockSimVN.exe"
    exit /b 0
)

rem Neu venv da san sang thi mo game ngay, khong hien console Python.
if exist ".venv\Scripts\pythonw.exe" (
    start "" ".venv\Scripts\pythonw.exe" "main.py"
    exit /b 0
)

echo ==========================================
echo STOCKSIM VN v1.9 - CAI DAT LAN DAU
ECHO ==========================================
echo Lan dau can tao .venv va cai thu vien.
echo Sau khi cai xong game se tu mo.
echo.

set "PY_CMD="
py -3.14 -c "import sys" >nul 2>&1
if not errorlevel 1 set "PY_CMD=py -3.14"
if not defined PY_CMD (
    python -c "import sys" >nul 2>&1
    if not errorlevel 1 set "PY_CMD=python"
)
if not defined PY_CMD (
    echo [LOI] Khong tim thay Python. Hay cai Python 3.14 x64.
    pause
    exit /b 1
)

%PY_CMD% -m venv .venv
if errorlevel 1 goto :fail
.venv\Scripts\python.exe -m pip install --upgrade pip setuptools wheel
if errorlevel 1 goto :fail
.venv\Scripts\python.exe -m pip uninstall -y pygame >nul 2>&1
.venv\Scripts\python.exe -m pip install --prefer-binary -r requirements.txt
if errorlevel 1 goto :fail
.venv\Scripts\python.exe -c "import pygame, numpy, pandas"
if errorlevel 1 goto :fail

start "" ".venv\Scripts\pythonw.exe" "main.py"
exit /b 0

:fail
echo.
echo [LOI] Cai dat StockSim VN that bai.
echo Co the chay setup_venv.bat de xem chi tiet.
pause
exit /b 1
