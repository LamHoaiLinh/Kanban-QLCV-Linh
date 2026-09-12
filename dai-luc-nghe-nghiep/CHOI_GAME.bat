@echo off
chcp 65001 >nul
cd /d "%~dp0"
set PORT=8765
where py >nul 2>nul
if %errorlevel%==0 (
  start "" "http://127.0.0.1:%PORT%"
  py -m http.server %PORT% --bind 127.0.0.1
  exit /b
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" "http://127.0.0.1:%PORT%"
  python -m http.server %PORT% --bind 127.0.0.1
  exit /b
)
start "" "%~dp0index.html"
