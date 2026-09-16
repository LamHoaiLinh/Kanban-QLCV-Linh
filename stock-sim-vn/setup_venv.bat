@echo off
setlocal
cd /d "%~dp0"
title StockSimVN - Setup VENV

echo ==========================================
echo STOCKSIM VN - TAO VENV VA CAI THU VIEN
echo ==========================================

rem Uu tien Python 3.14 vi pygame-ce co wheel Windows san cho CPython 3.14.
set "PY_CMD="
py -3.14 -c "import sys; print(sys.version)" >nul 2>&1
if not errorlevel 1 set "PY_CMD=py -3.14"

if not defined PY_CMD (
    python -c "import sys; print(sys.version)" >nul 2>&1
    if not errorlevel 1 set "PY_CMD=python"
)

if not defined PY_CMD (
    echo [LOI] Khong tim thay Python.
    echo Hay cai Python 3.14 x64 roi chay lai file nay.
    pause
    exit /b 1
)

echo Python dung de tao venv:
%PY_CMD% --version

if not exist .venv\Scripts\python.exe (
    echo.
    echo [1/4] Dang tao .venv...
    %PY_CMD% -m venv .venv
    if errorlevel 1 goto :fail
) else (
    echo.
    echo [1/4] Da co .venv - tiep tuc sua/cap nhat thu vien.
)

echo.
echo [2/4] Nang cap pip/setuptools/wheel...
.venv\Scripts\python.exe -m pip install --upgrade pip setuptools wheel
if errorlevel 1 goto :fail

echo.
echo [3/4] Go pygame cu neu tung cai do truoc day...
.venv\Scripts\python.exe -m pip uninstall -y pygame >nul 2>&1

echo.
echo [4/4] Cai cac goi bang wheel co san...
.venv\Scripts\python.exe -m pip install --prefer-binary -r requirements.txt
if errorlevel 1 goto :fail

echo.
echo Kiem tra import...
.venv\Scripts\python.exe -c "import sys, pygame, numpy, pandas; print('Python:',sys.version.split()[0]); print('pygame module:',pygame.version.ver); print('numpy:',numpy.__version__); print('pandas:',pandas.__version__)"
if errorlevel 1 goto :fail

echo.
echo ==========================================
echo CAI DAT THANH CONG
echo Chay run_game.bat de mo game.
echo ==========================================
pause
exit /b 0

:fail
echo.
echo ==========================================
echo CAI DAT THAT BAI
echo Neu .venv duoc tao tu ban cu, hay chay RESET_VENV.bat roi setup lai.
echo ==========================================
pause
exit /b 1
