@echo off
setlocal
cd /d "%~dp0"
title StockSimVN - Reset VENV

echo File nay se XOA thu muc .venv va tao lai sach.
choice /C YN /N /M "Tiep tuc? [Y/N]: "
if errorlevel 2 exit /b 0

if exist .venv (
    echo Dang xoa .venv...
    rmdir /s /q .venv
)

echo Da xoa .venv. Bat dau setup lai...
call setup_venv.bat
