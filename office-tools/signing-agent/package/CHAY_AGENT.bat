@echo off
chcp 65001 >nul
cd /d "%~dp0"
title KanBan Signing Agent
if not exist ".venv\Scripts\python.exe" (
  echo Chua cai Agent. Dang mo bo cai dat...
  call "CAI_DAT_VA_CHAY.bat"
  exit /b
)
".venv\Scripts\python.exe" "kanban_signing_agent.py"
if errorlevel 1 pause
