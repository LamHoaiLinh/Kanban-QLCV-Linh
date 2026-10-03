@echo off
setlocal EnableExtensions
chcp 65001 >nul
title KanBan Tools - Cai dat / Cap nhat tu dong

set "MODE=%~1"
if not defined MODE set "MODE=/install"
if /I not "%MODE%"=="/install" if /I not "%MODE%"=="/update" if /I not "%MODE%"=="/repair" set "MODE=/install"

set "ROOT=%LOCALAPPDATA%\KanBanTools"
set "BOOT=%TEMP%\KanBanToolsBootstrap_%RANDOM%_%RANDOM%"
set "REPO=https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main"

if not exist "%ROOT%" mkdir "%ROOT%" >nul 2>nul
if exist "%BOOT%" rmdir /s /q "%BOOT%" >nul 2>nul
mkdir "%BOOT%" >nul 2>nul
copy /y "%~f0" "%ROOT%\KanTool.bat" >nul 2>nul

echo ============================================================
echo   KANBAN TOOLS - CAI DAT / CAP NHAT 1 LAN BAM
echo ============================================================
echo   Che do: %MODE%
echo   Tu dong tim Python 3.12+ ke ca khi PATH chua cap nhat.
echo   Neu thieu moi tu tai Python rieng cho KanBan Tools.
echo   Khong tat Windows Security.
echo ============================================================
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "$r='%REPO%';$t=[DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds();" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($r+'/kan-tools/manifest.json?ts='+$t) -OutFile '%BOOT%\manifest.json' -TimeoutSec 45;" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($r+'/kan-tools/install.ps1?ts='+$t) -OutFile '%BOOT%\install.ps1' -TimeoutSec 45;" ^
 "if((Get-Item '%BOOT%\manifest.json').Length -lt 300){throw 'Manifest khong hop le'};" ^
 "if((Get-Item '%BOOT%\install.ps1').Length -lt 5000){throw 'Installer khong hop le'};"
if errorlevel 1 goto :FAIL_DOWNLOAD

powershell -NoProfile -ExecutionPolicy Bypass -File "%BOOT%\install.ps1" -Mode "%MODE%" -ManifestPath "%BOOT%\manifest.json"
set "RC=%ERRORLEVEL%"

if not "%RC%"=="0" if /I not "%MODE%"=="/repair" (
  echo.
  echo Lan dau chua hoan tat. Dang tu dong sua va thu lai mot lan...
  timeout /t 2 >nul
  powershell -NoProfile -ExecutionPolicy Bypass -File "%BOOT%\install.ps1" -Mode "/repair" -ManifestPath "%BOOT%\manifest.json"
  set "RC=%ERRORLEVEL%"
)

rmdir /s /q "%BOOT%" >nul 2>nul

if not "%RC%"=="0" goto :FAIL_RUN

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
 "Add-Type -AssemblyName System.Windows.Forms;[void][System.Windows.Forms.MessageBox]::Show('Cai dat / cap nhat KanBan Tools da hoan tat.'+[Environment]::NewLine+[Environment]::NewLine+'Ban co the dong cua so nay va dung KanBan binh thuong.','KanBan Tools','OK','Information')" >nul 2>nul
exit /b 0

:FAIL_DOWNLOAD
set "RC=1"
echo.
echo [LOI] Khong tai duoc bo cai KanBan Tools moi nhat.
echo Kiem tra Internet hoac raw.githubusercontent.com.
goto :FAIL_BOX

:FAIL_RUN
echo.
echo [LOI] KanBan Tools chua cai dat / cap nhat xong. Ma loi: %RC%
echo Log: %LOCALAPPDATA%\KanBanTools\logs\install-latest.log

:FAIL_BOX
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
 "Add-Type -AssemblyName System.Windows.Forms;[void][System.Windows.Forms.MessageBox]::Show('KanBan Tools chua hoan tat.'+[Environment]::NewLine+'Hay chup lai cua so den de kiem tra loi.','KanBan Tools','OK','Error')" >nul 2>nul
echo.
echo Windows Security van duoc giu nguyen; bo cai khong tat Defender.
echo Nhan phim bat ky de dong...
pause >nul
exit /b %RC%
