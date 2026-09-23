@echo off
setlocal EnableExtensions
chcp 65001 >nul
title Kanban Capture Agent - Cai dat / cap nhat

set "APPDIR=%LOCALAPPDATA%\KanbanCapture"
set "EXE=%APPDIR%\KanbanCapture.exe"
set "TMP=%TEMP%\KanbanCapture_download.exe"
set "SHA=%TEMP%\KanbanCapture_download.sha256"
set "BASE=https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/capture-agent/bin"

echo ==========================================
echo   KANBAN CAPTURE AGENT v3 - CAI / CAP NHAT
echo ==========================================
echo.
echo Ban khong can cai Python.
echo Bo cai se tai ban KanbanCapture.exe da dong goi san ve may.
echo.

echo [1/5] Dung Agent cu neu dang chay...
powershell -NoProfile -ExecutionPolicy Bypass -Command "try { Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/quit' -TimeoutSec 1 | Out-Null } catch {}" >nul 2>nul
timeout /t 1 /nobreak >nul
taskkill /IM KanbanCapture.exe /F >nul 2>nul

echo [2/5] Tai Kanban Capture Agent...
if not exist "%APPDIR%" mkdir "%APPDIR%"
del /q "%TMP%" "%SHA%" >nul 2>nul
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop'; $ProgressPreference='SilentlyContinue';" ^
  "Invoke-WebRequest -UseBasicParsing -Uri '%BASE%/KanbanCapture.exe?ts=%RANDOM%%RANDOM%' -OutFile '%TMP%';" ^
  "Invoke-WebRequest -UseBasicParsing -Uri '%BASE%/KanbanCapture.sha256?ts=%RANDOM%%RANDOM%' -OutFile '%SHA%';" ^
  "$expected=(Get-Content -Raw '%SHA%').Trim().ToLowerInvariant();" ^
  "$actual=(Get-FileHash -Algorithm SHA256 '%TMP%').Hash.ToLowerInvariant();" ^
  "if($expected -ne $actual){throw 'SHA256 khong khop';}" ^
  "if((Get-Item '%TMP%').Length -lt 1000000){throw 'File Agent tai ve khong hop le';}"
if errorlevel 1 goto :download_fail

move /y "%TMP%" "%EXE%" >nul
if errorlevel 1 goto :fail

echo [3/5] Dang ky nut CHUP va khoi dong cung Windows...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "$exe='%EXE%';" ^
  "$base='HKCU:\Software\Classes\kanbancapture';" ^
  "New-Item -Path $base -Force | Out-Null;" ^
  "Set-Item -Path $base -Value 'URL:Kanban Capture';" ^
  "New-ItemProperty -Path $base -Name 'URL Protocol' -Value '' -PropertyType String -Force | Out-Null;" ^
  "$cmdKey=$base+'\shell\open\command'; New-Item -Path $cmdKey -Force | Out-Null;" ^
  "$pct=[char]37; $cmd='"'+$exe+'" "'+$pct+'1"'; Set-Item -Path $cmdKey -Value $cmd;" ^
  "$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';" ^
  "New-ItemProperty -Path $run -Name 'KanbanCapture' -Value ('"'+$exe+'" --background') -PropertyType String -Force | Out-Null;"
if errorlevel 1 goto :fail

echo [4/5] Khoi dong Agent...
start "" "%EXE%" --background

echo [5/5] Kiem tra Agent...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ok=$false; for($i=0;$i -lt 30;$i++){ try { $r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/ping' -TimeoutSec 1; if($r.StatusCode -eq 200){$ok=$true;break} } catch {}; Start-Sleep -Milliseconds 200 }; if(-not $ok){exit 1}"
if errorlevel 1 goto :start_fail

echo.
echo ==========================================
echo   CAI DAT / CAP NHAT THANH CONG
echo ==========================================
echo Ban co the dung:
echo   - Alt + C: chup nhanh o bat ky man hinh nao tren Windows.
echo   - Nut CHUP trong Kanban: mo cong cu chup.
echo   - Chuot phai nut CHUP: mo cai dat JPG/PNG.
echo   - Ctrl + C trong khung chup: Copy/Xong.
echo   - Ctrl + V: dan vao Zalo/Messenger/Word hoac dan thanh file trong Explorer/Desktop.
echo.
echo Luu y: neu Windows SmartScreen hien canh bao lan dau, ban co the chon
echo "More info" ^> "Run anyway" neu file duoc tai tu repo Kanban cua ban.
echo.
pause
exit /b 0

:download_fail
echo.
echo KHONG TAI DUOC KANBAN CAPTURE AGENT.
echo Ban khong can cai Python. Loi nay thuong do file EXE tren GitHub chua san sang,
echo mang dang chan raw.githubusercontent.com, hoac Windows Security chan tai file.
echo Hay doi vai phut, tai lai bo cai moi nhat va chay lai.
echo.
pause
exit /b 1

:start_fail
echo.
echo DA CAI FILE NHUNG AGENT CHUA KHOI DONG DUOC.
echo Ban hay kiem tra Windows Security / SmartScreen, sau do chay lai bo cai.
echo File Agent nam tai:
echo   %EXE%
echo.
pause
exit /b 1

:fail
echo.
echo CAI DAT / CAP NHAT THAT BAI.
echo Ban hay chup lai noi dung loi trong cua so nay de kiem tra.
echo.
pause
exit /b 1
