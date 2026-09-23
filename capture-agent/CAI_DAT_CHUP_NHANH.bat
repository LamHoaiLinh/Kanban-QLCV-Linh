@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
echo ==========================================
echo   KANBAN CAPTURE AGENT - CAI DAT 1 LAN
echo ==========================================
echo.
where py >nul 2>nul
if errorlevel 1 (
  echo Khong tim thay Python Launcher ^(py.exe^).
  echo Hay cai Python 3 truoc, sau do chay lai file nay.
  pause
  exit /b 1
)
echo [1/3] Cai/kiem tra Pillow...
py -m pip install --user --disable-pip-version-check Pillow
if errorlevel 1 goto :fail
echo [2/3] Dang ky Alt+C, giao thuc nut CHUP va khoi dong cung Windows...
py "%~dp0capture_agent.py" --install
if errorlevel 1 goto :fail
echo [3/3] Hoan tat.
echo.
echo Tu bay gio:
echo   - Alt + C: chup nhanh o bat ky man hinh nao tren Windows.
echo   - Nut CHUP trong Kanban: mo khung chup.
echo   - Chuot phai nut CHUP: mo cai dat JPG/PNG.
echo   - Sau khi bam Xong: Ctrl + V trong Desktop/thu muc se tao file anh.
echo.
pause
exit /b 0
:fail
echo.
echo Cai dat that bai. Vui long chup man hinh loi va kiem tra Python/PIP.
pause
exit /b 1
