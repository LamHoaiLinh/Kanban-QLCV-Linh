@echo off
cd /d "%~dp0"
if not exist .venv\Scripts\python.exe (
    echo Chua co .venv. Hay chay setup_venv.bat truoc.
    pause
    exit /b 1
)
.venv\Scripts\python.exe main.py
if errorlevel 1 pause
