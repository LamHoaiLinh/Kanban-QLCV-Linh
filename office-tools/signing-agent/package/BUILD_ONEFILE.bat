@echo off
chcp 65001 >nul
setlocal
cd /d "%~dp0"
title BUILD KanBan Signing Agent ONEFILE
if not exist ".venv\Scripts\python.exe" (
  echo Hay chay CAI_DAT_VA_CHAY.bat truoc.
  pause
  exit /b 1
)
".venv\Scripts\python.exe" -m pip install --upgrade pyinstaller
if exist build rmdir /s /q build
if exist dist rmdir /s /q dist
".venv\Scripts\python.exe" -m PyInstaller --noconfirm --clean --onefile --console --name KanBan_Signing_Agent --collect-all pyhanko --collect-all pyhanko_certvalidator --collect-all cryptography --collect-all reportlab kanban_signing_agent.py
if errorlevel 1 goto :FAIL
echo.
echo Da tao: dist\KanBan_Signing_Agent.exe
start "" explorer "%CD%\dist"
pause
exit /b 0
:FAIL
echo Build that bai.
pause
exit /b 1
