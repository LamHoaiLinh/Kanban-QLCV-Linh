@echo off
setlocal EnableExtensions
chcp 65001 >nul
title KanBan Tools - Cai dat / Cap nhat

set "MODE=%~1"
if not defined MODE set "MODE=/install"
set "ROOT=%LOCALAPPDATA%\KanBanTools"
set "BOOT=%TEMP%\KanBanToolsBootstrap"
set "REPO=https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main"

if not exist "%ROOT%" mkdir "%ROOT%" >nul 2>nul
if exist "%BOOT%" rmdir /s /q "%BOOT%" >nul 2>nul
mkdir "%BOOT%" >nul 2>nul
copy /y "%~f0" "%ROOT%\KanTool.bat" >nul 2>nul

echo ============================================================
echo   KANBAN TOOLS - BO CAI DUY NHAT
echo ============================================================
echo   Dang lay manifest va bo cai moi nhat tu repo KanBan...
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "$r='%REPO%';$t=[DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds();" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($r+'/kan-tools/manifest.json?ts='+$t) -OutFile '%BOOT%\manifest.json';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($r+'/kan-tools/install.ps1?ts='+$t) -OutFile '%BOOT%\install.ps1';" ^
 "if((Get-Item '%BOOT%\manifest.json').Length -lt 300){throw 'Manifest khong hop le'};" ^
 "if((Get-Item '%BOOT%\install.ps1').Length -lt 5000){throw 'Installer khong hop le'};"
if errorlevel 1 goto :FAIL

powershell -NoProfile -ExecutionPolicy Bypass -File "%BOOT%\install.ps1" -Mode "%MODE%" -ManifestPath "%BOOT%\manifest.json"
set "RC=%ERRORLEVEL%"
rmdir /s /q "%BOOT%" >nul 2>nul

if not "%RC%"=="0" goto :FAIL_RUN
if /I "%MODE%"=="/update" exit /b 0
echo.
pause
exit /b 0

:FAIL
echo [LOI] Khong tai duoc bo cai KanBan Tools moi nhat.
echo Kiem tra Internet hoac raw.githubusercontent.com.
goto :END_FAIL

:FAIL_RUN
echo [LOI] KanBan Tools chua cap nhat xong. Ma loi: %RC%
goto :END_FAIL

:END_FAIL
echo.
echo Windows Security van duoc giu nguyen; bo cai khong tat Defender.
if /I "%MODE%"=="/update" (
  timeout /t 5 >nul
  exit /b 1
)
pause
exit /b 1
