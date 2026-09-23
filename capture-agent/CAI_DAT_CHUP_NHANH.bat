@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
echo ==========================================
echo   KANBAN CAPTURE AGENT v2 - CAI / CAP NHAT
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
echo [2/3] Dung ban Agent cu, cap nhat ban moi va khoi dong lai...
py "%~dp0capture_agent.py" --install
if errorlevel 1 goto :fail
echo [3/3] Hoan tat va da kiem tra Agent phan hoi.
echo.
echo Cach dung:
echo   - Alt + C: chup nhanh o bat ky man hinh nao tren Windows.
echo   - Nut CHUP trong Kanban: goi Agent truc tiep.
echo   - Chuot phai nut CHUP: mo cai dat JPG/PNG.
echo   - Keo chon vung, cong cu se nam ben phai va phia duoi khung nhu Zalo.
echo   - Ctrl + C: tuong duong bam Xong, dua anh vao Clipboard.
echo   - Ctrl + V: dan vao Zalo/Word/ung dung hoac dan thanh file trong Explorer/Desktop.
echo.
pause
exit /b 0
:fail
echo.
echo Cai dat/cap nhat that bai.
echo Hay chup man hinh loi trong cua so nay de kiem tra Python/PIP/port 47631.
pause
exit /b 1
