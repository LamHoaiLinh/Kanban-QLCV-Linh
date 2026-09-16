@echo off
setlocal
set "SAVE=%APPDATA%\StockSimVN\savegame.dat"
if exist "%SAVE%" (
  del /q "%SAVE%"
  echo Da xoa save: %SAVE%
) else (
  echo Khong tim thay save cu.
)
pause
