@echo off
chcp 65001 >nul
setlocal EnableExtensions
cd /d "%~dp0"
title KanBan Signing Agent - Cai dat

echo ============================================================
echo   KANBAN SIGNING AGENT - CAI DAT VA CHAY
echo ============================================================
echo   Khong can tim PKCS#11 DLL.
echo   Dung Windows Certificate Store / CSP / KSP.
echo ============================================================
echo.

set "PY_CMD="
where py >nul 2>nul
if not errorlevel 1 (
  py -3.13 -c "import sys" >nul 2>nul
  if not errorlevel 1 set "PY_CMD=py -3.13"
)
if not defined PY_CMD (
  where py >nul 2>nul
  if not errorlevel 1 (
    py -3.12 -c "import sys" >nul 2>nul
    if not errorlevel 1 set "PY_CMD=py -3.12"
  )
)
if not defined PY_CMD (
  where python >nul 2>nul
  if not errorlevel 1 set "PY_CMD=python"
)

if not defined PY_CMD (
  echo Chua co Python. Thu cai Python 3.13 bang winget...
  where winget >nul 2>nul
  if errorlevel 1 goto :NO_PYTHON
  winget install -e --id Python.Python.3.13 --scope user --accept-package-agreements --accept-source-agreements
  if errorlevel 1 goto :NO_PYTHON
  echo.
  echo Python vua duoc cai. Dang thu lai...
  where py >nul 2>nul
  if not errorlevel 1 set "PY_CMD=py -3.13"
)
if not defined PY_CMD goto :NO_PYTHON

%PY_CMD% --version
if not exist ".venv\Scripts\python.exe" (
  echo [1/4] Tao moi truong rieng .venv...
  %PY_CMD% -m venv .venv
  if errorlevel 1 goto :FAIL
) else (
  echo [1/4] Da co .venv.
)

echo [2/4] Cai/cap nhat thu vien...
".venv\Scripts\python.exe" -m pip install --upgrade pip setuptools wheel
if errorlevel 1 goto :FAIL
".venv\Scripts\python.exe" -m pip install --upgrade -r requirements.txt
if errorlevel 1 goto :FAIL

echo [3/4] Kiem tra thu vien...
".venv\Scripts\python.exe" -c "import cryptography,pyhanko,reportlab; print('OK')"
if errorlevel 1 goto :FAIL

echo [4/4] Tao shortcut tren Desktop...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$s=(New-Object -COM WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Desktop')+'\KanBan Signing Agent.lnk');$s.TargetPath='%~dp0CHAY_AGENT.bat';$s.WorkingDirectory='%~dp0';$s.IconLocation='%SystemRoot%\System32\shell32.dll,44';$s.Save()" >nul 2>nul

echo.
echo ============================================================
echo   CAI DAT HOAN TAT
echo ============================================================
echo Signing Agent se duoc mo ngay bay gio.
echo Sau nay co the double-click shortcut "KanBan Signing Agent" tren Desktop.
echo.
start "KanBan Signing Agent" /min "%~dp0CHAY_AGENT.bat"
timeout /t 2 >nul
exit /b 0

:NO_PYTHON
echo.
echo [LOI] Khong tim thay Python va khong the tu cai bang winget.
echo Hay cai Python 3.12/3.13 tu python.org, sau do chay lai file nay.
pause
exit /b 1

:FAIL
echo.
echo [LOI] Cai dat that bai. Xem dong loi phia tren.
pause
exit /b 1
