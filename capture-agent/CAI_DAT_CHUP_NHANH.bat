@echo off
setlocal EnableExtensions EnableDelayedExpansion
chcp 65001 >nul
title Kanban Capture Agent - Cai dat / cap nhat

set "APPDIR=%LOCALAPPDATA%\KanbanCapture"
set "EXE=%APPDIR%\KanbanCapture.exe"
set "TOKEN=%RANDOM%%RANDOM%%RANDOM%"
set "PKG=%APPDIR%\KanbanCapture_package_%TOKEN%.zip"
set "SHA=%APPDIR%\KanbanCapture_package_%TOKEN%.sha256"
set "STAGE=%APPDIR%\install_%TOKEN%"
set "BASE=https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/capture-agent/bin"

echo ==========================================
echo   KANBAN CAPTURE AGENT v4 - CAI / CAP NHAT
echo ==========================================
echo.
echo Ban khong can cai Python.
echo Bo cai tai goi ZIP da dong goi san, kiem tra SHA256 roi moi giai nen.
echo.

echo [1/6] Dung Agent cu neu dang chay...
powershell -NoProfile -ExecutionPolicy Bypass -Command "try { Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/quit' -TimeoutSec 1 | Out-Null } catch {}" >nul 2>nul
timeout /t 1 /nobreak >nul
taskkill /IM KanbanCapture.exe /F >nul 2>nul

echo [2/6] Chuan bi thu muc cai dat...
if not exist "%APPDIR%" mkdir "%APPDIR%"
if exist "%STAGE%" rmdir /s /q "%STAGE%" >nul 2>nul
mkdir "%STAGE%" >nul 2>nul
del /q "%PKG%" "%SHA%" >nul 2>nul

echo [3/6] Tai goi Kanban Capture...
where curl.exe >nul 2>nul
if not errorlevel 1 (
  curl.exe -L --fail --silent --show-error --retry 2 -o "%PKG%" "%BASE%/KanbanCapture-package.zip?ts=%TOKEN%"
  if errorlevel 1 goto :try_powershell
  curl.exe -L --fail --silent --show-error --retry 2 -o "%SHA%" "%BASE%/KanbanCapture-package.sha256?ts=%TOKEN%"
  if errorlevel 1 goto :try_powershell
  goto :verify
)

:try_powershell
echo Dang thu cach tai du phong...
del /q "%PKG%" "%SHA%" >nul 2>nul
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop'; $ProgressPreference='SilentlyContinue';" ^
  "Invoke-WebRequest -UseBasicParsing -Uri '%BASE%/KanbanCapture-package.zip?ts=%TOKEN%' -OutFile '%PKG%';" ^
  "Invoke-WebRequest -UseBasicParsing -Uri '%BASE%/KanbanCapture-package.sha256?ts=%TOKEN%' -OutFile '%SHA%';"
if errorlevel 1 goto :download_fail

:verify
echo [4/6] Kiem tra SHA256 va giai nen...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "$expected=(Get-Content -Raw '%SHA%').Trim().ToLowerInvariant();" ^
  "$actual=(Get-FileHash -Algorithm SHA256 '%PKG%').Hash.ToLowerInvariant();" ^
  "if($expected -ne $actual){throw 'SHA256 khong khop';}" ^
  "if((Get-Item '%PKG%').Length -lt 1000000){throw 'Goi cai dat tai ve khong hop le';}" ^
  "Expand-Archive -LiteralPath '%PKG%' -DestinationPath '%STAGE%' -Force;" ^
  "$built=Join-Path '%STAGE%' 'KanbanCapture.exe';" ^
  "if(-not (Test-Path -LiteralPath $built)){throw 'Khong tim thay KanbanCapture.exe trong goi ZIP';}" ^
  "Copy-Item -LiteralPath $built -Destination '%EXE%' -Force;"
if errorlevel 1 goto :extract_fail
if not exist "%EXE%" goto :extract_fail

echo [5/6] Dang ky nut CHUP va khoi dong cung Windows...
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

start "" "%EXE%" --background

echo [6/6] Kiem tra Agent...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ok=$false; for($i=0;$i -lt 35;$i++){ try { $r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/ping' -TimeoutSec 1; if($r.StatusCode -eq 200){$ok=$true;break} } catch {}; Start-Sleep -Milliseconds 200 }; if(-not $ok){exit 1}"
if errorlevel 1 goto :start_fail

rmdir /s /q "%STAGE%" >nul 2>nul
del /q "%PKG%" "%SHA%" >nul 2>nul

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
pause
exit /b 0

:download_fail
echo.
echo KHONG TAI DUOC GOI KANBAN CAPTURE.
echo Bo cai v4 khong tai truc tiep file EXE nua; no tai file ZIP ten ngau nhien de tranh
echo loi Access denied tai thu muc Temp. Neu van loi, thuong la do mang/Windows Security
echo chan ket noi raw.githubusercontent.com.
echo.
goto :cleanup_fail

:extract_fail
echo.
echo TAI GOI THANH CONG NHUNG KHONG GIAI NEN/CHEP DUOC AGENT.
echo Windows Security co the dang cach ly KanbanCapture.exe sau khi giai nen.
echo Ban hay mo Windows Security ^> Protection history de xem co muc bi chan hay khong.
echo.
goto :cleanup_fail

:start_fail
echo.
echo DA CAI FILE NHUNG AGENT CHUA KHOI DONG DUOC.
echo Ban hay kiem tra Windows Security / SmartScreen va chay lai bo cai.
echo File Agent nam tai:
echo   %EXE%
echo.
goto :cleanup_fail

:fail
echo.
echo CAI DAT / CAP NHAT THAT BAI.
echo Ban hay chup lai noi dung loi trong cua so nay de kiem tra.
echo.

:cleanup_fail
rmdir /s /q "%STAGE%" >nul 2>nul
del /q "%PKG%" "%SHA%" >nul 2>nul
pause
exit /b 1
