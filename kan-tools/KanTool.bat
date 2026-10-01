
@echo off
setlocal EnableExtensions
chcp 65001 >nul
title KanBan Tools - Cai dat / Cap nhat

set "MODE=%~1"
if not defined MODE set "MODE=/install"
set "ROOT=%LOCALAPPDATA%\KanBanTools"
set "RUNTIME=%ROOT%\runtime"
set "MEDIA=%ROOT%\media\bin"
set "NODEDIR=%ROOT%\media\node"
set "SIGNING=%ROOT%\signing"
set "JOBS=%ROOT%\jobs"
set "UPLOADS=%ROOT%\uploads"
set "TMP=%ROOT%\temp-install"
set "REPO=https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main"
set "SELF_UPDATE_GUARD=%~2"
set "LATEST_BAT=%TEMP%\KanTool_update_%RANDOM%%RANDOM%.bat"
if /I "%MODE%"=="/update" if /I not "%SELF_UPDATE_GUARD%"=="/self" (
  powershell -NoProfile -Command "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/kan-tools/KanTool.bat?ts=%RANDOM%' -OutFile '%LATEST_BAT%'" >nul 2>nul
  if exist "%LATEST_BAT%" (
    start "" "%LATEST_BAT%" /update /self
    exit /b 0
  )
)

echo ============================================================
echo   KANBAN TOOLS - MOT BO CAI CHO TOAN BO CONG CU WINDOWS
echo ============================================================
echo   Chup man hinh  - KanMedia  - Ho tro ky so PDF
echo.
echo   Bo cai KHONG tat Windows Security, KHONG tao Defender
echo   exclusion va KHONG chen EXE dang Base64 vao file BAT.
echo ============================================================
echo.

if not exist "%ROOT%" mkdir "%ROOT%"
if not exist "%RUNTIME%" mkdir "%RUNTIME%"
if not exist "%MEDIA%" mkdir "%MEDIA%"
if not exist "%NODEDIR%" mkdir "%NODEDIR%"
if not exist "%SIGNING%" mkdir "%SIGNING%"
if not exist "%JOBS%" mkdir "%JOBS%"
if not exist "%UPLOADS%" mkdir "%UPLOADS%"
if exist "%TMP%" rmdir /s /q "%TMP%" >nul 2>nul
mkdir "%TMP%" >nul 2>nul

copy /y "%~f0" "%ROOT%\KanTool.bat" >nul 2>nul

echo [1/8] Dung KanMedia cu neu dang chay...
powershell -NoProfile -Command "$h=@{'X-KanBan-Agent'='linh-kanban-v1'};try{Invoke-RestMethod -Method Post -Headers $h -ContentType 'application/json' -Body '{}' -Uri 'http://127.0.0.1:47632/shutdown' -TimeoutSec 1|Out-Null}catch{}" >nul 2>nul
timeout /t 1 /nobreak >nul

echo [2/8] Tai runtime KanMedia tu repo KanBan...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/kan-tools/runtime/kanmedia-server.ps1?ts=%RANDOM%' -OutFile '%RUNTIME%\kanmedia-server.ps1';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/kan-tools/runtime/kanmedia-worker.ps1?ts=%RANDOM%' -OutFile '%RUNTIME%\kanmedia-worker.ps1';"
if errorlevel 1 goto :FAIL_RUNTIME

echo [3/8] Chuan bi Python rieng cho yt-dlp va ky so...
set "PY_CMD="
where py.exe >nul 2>nul
if not errorlevel 1 (
  py -3.13 -c "import sys" >nul 2>nul
  if not errorlevel 1 set "PY_CMD=py -3.13"
)
if not defined PY_CMD (
  where py.exe >nul 2>nul
  if not errorlevel 1 (
    py -3.12 -c "import sys" >nul 2>nul
    if not errorlevel 1 set "PY_CMD=py -3.12"
  )
)
if not defined PY_CMD (
  echo Dang cai Python 3.13 theo pham vi nguoi dung...
  where winget.exe >nul 2>nul
  if errorlevel 1 goto :FAIL_PYTHON
  winget install -e --id Python.Python.3.13 --scope user --accept-package-agreements --accept-source-agreements
  if errorlevel 1 goto :FAIL_PYTHON
  if exist "%LOCALAPPDATA%\Programs\Python\Python313\python.exe" (
    set "PY_CMD=%LOCALAPPDATA%\Programs\Python\Python313\python.exe"
  ) else (
    set "PY_CMD=py -3.13"
  )
)
%PY_CMD% -c "import sys;print(sys.version)" >nul 2>nul
if errorlevel 1 goto :FAIL_PYTHON

if not exist "%ROOT%\.venv\Scripts\python.exe" (
  %PY_CMD% -m venv "%ROOT%\.venv"
  if errorlevel 1 goto :FAIL_PYTHON
)
"%ROOT%\.venv\Scripts\python.exe" -m pip install --disable-pip-version-check --upgrade pip setuptools wheel
if errorlevel 1 goto :FAIL_PYTHON
echo     Cap nhat yt-dlp nightly...
"%ROOT%\.venv\Scripts\python.exe" -m pip install --disable-pip-version-check -U --pre "yt-dlp[default]"
if errorlevel 1 goto :FAIL_PYTHON
echo     Cap nhat thu vien ky so...
"%ROOT%\.venv\Scripts\python.exe" -m pip install --disable-pip-version-check -U cryptography pyhanko reportlab
if errorlevel 1 echo [CANH BAO] Thu vien ky so chua cap nhat duoc. KanMedia van tiep tuc cai.

echo [4/8] Chuan bi Node.js portable tu nodejs.org...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';$node='%NODEDIR%\node.exe';" ^
 "if(Test-Path $node){try{$v=(& $node --version).Trim().TrimStart('v').Split('.')[0];if([int]$v -ge 22){exit 0}}catch{}};" ^
 "$base='https://nodejs.org/dist/latest-v24.x/';$sum=Invoke-WebRequest -UseBasicParsing -Uri ($base+'SHASUMS256.txt');" ^
 "$line=($sum.Content -split '\r?\n'|Where-Object{$_ -like '*win-x64.zip'}|Select-Object -First 1);if(-not $line){throw 'Khong tim thay Node Windows x64'};" ^
 "$parts=$line -split '\s+';$sha=$parts[0].ToLowerInvariant();$name=$parts[-1];$zip='%TMP%\node.zip';$out='%TMP%\node';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($base+$name) -OutFile $zip;if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $sha){throw 'SHA256 Node khong khop'};" ^
 "Expand-Archive $zip $out -Force;$src=Get-ChildItem $out -Recurse -Filter node.exe|Select-Object -First 1;if(-not $src){throw 'Khong tim thay node.exe'};" ^
 "$dir=$src.Directory.FullName;Get-ChildItem $dir|Copy-Item -Destination '%NODEDIR%' -Recurse -Force;"
if errorlevel 1 goto :FAIL_NODE

echo [5/8] Chuan bi FFmpeg / FFprobe...
if exist "%MEDIA%\ffmpeg.exe" if exist "%MEDIA%\ffprobe.exe" goto :FFMPEG_OK
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "$rel=Invoke-RestMethod -Headers @{'User-Agent'='KanBanTools'} -Uri 'https://api.github.com/repos/BtbN/FFmpeg-Builds/releases/latest';" ^
 "$a=$rel.assets|Where-Object{$_.name -eq 'ffmpeg-master-latest-win64-gpl.zip'}|Select-Object -First 1;if(-not $a){throw 'Khong tim thay FFmpeg Windows'};" ^
 "$zip='%TMP%\ffmpeg.zip';$out='%TMP%\ffmpeg';Invoke-WebRequest -UseBasicParsing -Uri $a.browser_download_url -OutFile $zip;" ^
 "if((Get-Item $zip).Length -lt 50000000){throw 'Goi FFmpeg khong hop le'};" ^
 "if($a.digest -and $a.digest -match '^sha256:(.+)$'){if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $Matches[1].ToLowerInvariant()){throw 'SHA256 FFmpeg khong khop'}};" ^
 "Expand-Archive $zip $out -Force;$ff=Get-ChildItem $out -Recurse -Filter ffmpeg.exe|Select-Object -First 1;$fp=Get-ChildItem $out -Recurse -Filter ffprobe.exe|Select-Object -First 1;" ^
 "if(-not $ff -or -not $fp){throw 'Khong tim thay ffmpeg/ffprobe'};Copy-Item $ff.FullName '%MEDIA%\ffmpeg.exe' -Force;Copy-Item $fp.FullName '%MEDIA%\ffprobe.exe' -Force;"
if errorlevel 1 goto :FAIL_FFMPEG
:FFMPEG_OK

echo [6/8] Cai / cap nhat cong cu Chup...
set "CAPDIR=%LOCALAPPDATA%\KanbanCapture"
set "CAPPKG=%TMP%\KanbanCapture-package.zip"
set "CAPSHA=%TMP%\KanbanCapture-package.sha256"
set "CAPSTAGE=%TMP%\capture"
if not exist "%CAPDIR%" mkdir "%CAPDIR%"
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';$base='%REPO%/capture-agent/bin';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($base+'/KanbanCapture-package.zip?ts=%RANDOM%') -OutFile '%CAPPKG%';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($base+'/KanbanCapture-package.sha256?ts=%RANDOM%') -OutFile '%CAPSHA%';" ^
 "$expected=(Get-Content -Raw '%CAPSHA%').Trim().ToLowerInvariant();$actual=(Get-FileHash '%CAPPKG%' -Algorithm SHA256).Hash.ToLowerInvariant();if($expected -ne $actual){throw 'SHA256 Capture khong khop'};" ^
 "try{Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/quit' -TimeoutSec 1|Out-Null}catch{};Start-Sleep -Milliseconds 500;" ^
 "Expand-Archive '%CAPPKG%' '%CAPSTAGE%' -Force;$exe=Join-Path '%CAPSTAGE%' 'KanbanCapture.exe';if(-not(Test-Path $exe)){throw 'Khong tim thay KanbanCapture.exe'};Copy-Item $exe '%CAPDIR%\KanbanCapture.exe' -Force;" ^
 "$baseKey='HKCU:\Software\Classes\kanbancapture';New-Item $baseKey -Force|Out-Null;Set-Item $baseKey -Value 'URL:Kanban Capture';New-ItemProperty $baseKey -Name 'URL Protocol' -Value '' -PropertyType String -Force|Out-Null;" ^
 "$cmdKey=$baseKey+'\shell\open\command';New-Item $cmdKey -Force|Out-Null;$pct=[char]37;Set-Item $cmdKey -Value ('\"%CAPDIR%\KanbanCapture.exe\" \"'+$pct+'1\"');" ^
 "$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';New-ItemProperty $run -Name 'KanbanCapture' -Value ('\"%CAPDIR%\KanbanCapture.exe\" --background') -PropertyType String -Force|Out-Null;"
if errorlevel 1 (
 echo [CANH BAO] Capture chua cap nhat duoc. KanMedia van duoc cai.
) else (
 start "" "%CAPDIR%\KanbanCapture.exe" --background
)

echo [7/8] Cai Signing Agent dung chung...
powershell -NoProfile -Command "Get-CimInstance Win32_Process -ErrorAction SilentlyContinue|Where-Object{$_.CommandLine -like '*kanban_signing_agent.py*'}|ForEach-Object{Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue}" >nul 2>nul
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/office-tools/signing-agent/package/kanban_signing_agent.py?ts=%RANDOM%' -OutFile '%SIGNING%\kanban_signing_agent.py';" ^
 "$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';$pyw='%ROOT%\.venv\Scripts\pythonw.exe';$agent='%SIGNING%\kanban_signing_agent.py';" ^
 "New-ItemProperty $run -Name 'KanBanSigning' -Value ('\"'+$pyw+'\" \"'+$agent+'\"') -PropertyType String -Force|Out-Null;"
if errorlevel 1 (
 echo [CANH BAO] Signing Agent chua cai duoc. KanMedia va Capture van dung duoc.
) else (
 start "" /min "%ROOT%\.venv\Scripts\pythonw.exe" "%SIGNING%\kanban_signing_agent.py"
)

echo [8/8] Dang ky KanMedia chay cung Windows...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';$ps='%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe';$server='%RUNTIME%\kanmedia-server.ps1';" ^
 "$cmd='\"'+$ps+'\" -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File \"'+$server+'\"';New-ItemProperty $run -Name 'KanBanMedia' -Value $cmd -PropertyType String -Force|Out-Null;"
if errorlevel 1 goto :FAIL_RUNTIME
start "" /min powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%RUNTIME%\kanmedia-server.ps1"
timeout /t 2 /nobreak >nul
powershell -NoProfile -Command "$h=@{'X-KanBan-Agent'='linh-kanban-v1'};try{$r=Invoke-RestMethod -Headers $h -Uri 'http://127.0.0.1:47632/health' -TimeoutSec 4;if(-not $r.mediaReady){exit 1};Write-Host ('KanMedia san sang - yt-dlp '+$r.ytDlp)}catch{exit 1}"
if errorlevel 1 goto :FAIL_START

rmdir /s /q "%TMP%" >nul 2>nul
echo.
echo ============================================================
echo   KANBAN TOOLS DA SAN SANG
echo ============================================================
echo   - Alt+C / Alt+X va nut CHUP
echo   - KanMedia: Tai / Chuyen doi / Edit Media
echo   - Ho tro ky PDF bang USB Token
echo.
echo Bo cai duoc luu tai: %ROOT%\KanTool.bat
echo Khong co buoc nao tu dong tat antivirus hoac them Defender exclusion.
echo.
if /I "%MODE%"=="/update" (
 timeout /t 3 >nul
 exit /b 0
)
pause
exit /b 0

:FAIL_RUNTIME
echo [LOI] Khong tai/cai duoc runtime KanMedia.
goto :FAIL
:FAIL_PYTHON
echo [LOI] Khong cai/khong tim thay Python 3.12/3.13.
goto :FAIL
:FAIL_NODE
echo [LOI] Khong tai/xac minh duoc Node.js portable.
goto :FAIL
:FAIL_FFMPEG
echo [LOI] Khong tai/giai nen duoc FFmpeg.
goto :FAIL
:FAIL_START
echo [LOI] KanMedia da cai file nhung dich vu local chua san sang.
goto :FAIL
:FAIL
echo.
echo Windows Security van duoc giu nguyen. Neu Capture.exe bi canh bao, hay chi cho
echo phep sau khi ban xac minh file duoc tai tu repo KanBan cua chinh minh.
echo Cach giam canh bao ben vung nhat cho EXE tuy bien la ky ma bang certificate
echo code-signing; bo cai nay khong tu dong bo qua SmartScreen/Defender.
echo.
rmdir /s /q "%TMP%" >nul 2>nul
pause
exit /b 1
}|Select-Object -First 1);if(-not $line){throw 'Khong tim thay Node Windows x64'};" ^
 "$parts=$line -split '\s+';$sha=$parts[0].ToLowerInvariant();$name=$parts[-1];$zip='%TMP%\node.zip';$out='%TMP%\node';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($base+$name) -OutFile $zip;if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $sha){throw 'SHA256 Node khong khop'};" ^
 "Expand-Archive $zip $out -Force;$src=Get-ChildItem $out -Recurse -Filter node.exe|Select-Object -First 1;if(-not $src){throw 'Khong tim thay node.exe'};" ^
 "$dir=$src.Directory.FullName;Get-ChildItem $dir|Copy-Item -Destination '%NODEDIR%' -Recurse -Force;"
if errorlevel 1 goto :FAIL_NODE

echo [5/8] Chuan bi FFmpeg / FFprobe...
if exist "%MEDIA%\ffmpeg.exe" if exist "%MEDIA%\ffprobe.exe" goto :FFMPEG_OK
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "$rel=Invoke-RestMethod -Headers @{'User-Agent'='KanBanTools'} -Uri 'https://api.github.com/repos/BtbN/FFmpeg-Builds/releases/latest';" ^
 "$a=$rel.assets|Where-Object{$_.name -eq 'ffmpeg-master-latest-win64-gpl.zip'}|Select-Object -First 1;if(-not $a){throw 'Khong tim thay FFmpeg Windows'};" ^
 "$zip='%TMP%\ffmpeg.zip';$out='%TMP%\ffmpeg';Invoke-WebRequest -UseBasicParsing -Uri $a.browser_download_url -OutFile $zip;" ^
 "if((Get-Item $zip).Length -lt 50000000){throw 'Goi FFmpeg khong hop le'};" ^
 "if($a.digest -and $a.digest -match '^sha256:(.+)$'){if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $Matches[1].ToLowerInvariant()){throw 'SHA256 FFmpeg khong khop'}};" ^
 "Expand-Archive $zip $out -Force;$ff=Get-ChildItem $out -Recurse -Filter ffmpeg.exe|Select-Object -First 1;$fp=Get-ChildItem $out -Recurse -Filter ffprobe.exe|Select-Object -First 1;" ^
 "if(-not $ff -or -not $fp){throw 'Khong tim thay ffmpeg/ffprobe'};Copy-Item $ff.FullName '%MEDIA%\ffmpeg.exe' -Force;Copy-Item $fp.FullName '%MEDIA%\ffprobe.exe' -Force;"
if errorlevel 1 goto :FAIL_FFMPEG
:FFMPEG_OK

echo [6/8] Cai / cap nhat cong cu Chup...
set "CAPDIR=%LOCALAPPDATA%\KanbanCapture"
set "CAPPKG=%TMP%\KanbanCapture-package.zip"
set "CAPSHA=%TMP%\KanbanCapture-package.sha256"
set "CAPSTAGE=%TMP%\capture"
if not exist "%CAPDIR%" mkdir "%CAPDIR%"
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';$base='%REPO%/capture-agent/bin';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($base+'/KanbanCapture-package.zip?ts=%RANDOM%') -OutFile '%CAPPKG%';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri ($base+'/KanbanCapture-package.sha256?ts=%RANDOM%') -OutFile '%CAPSHA%';" ^
 "$expected=(Get-Content -Raw '%CAPSHA%').Trim().ToLowerInvariant();$actual=(Get-FileHash '%CAPPKG%' -Algorithm SHA256).Hash.ToLowerInvariant();if($expected -ne $actual){throw 'SHA256 Capture khong khop'};" ^
 "try{Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/quit' -TimeoutSec 1|Out-Null}catch{};Start-Sleep -Milliseconds 500;" ^
 "Expand-Archive '%CAPPKG%' '%CAPSTAGE%' -Force;$exe=Join-Path '%CAPSTAGE%' 'KanbanCapture.exe';if(-not(Test-Path $exe)){throw 'Khong tim thay KanbanCapture.exe'};Copy-Item $exe '%CAPDIR%\KanbanCapture.exe' -Force;" ^
 "$baseKey='HKCU:\Software\Classes\kanbancapture';New-Item $baseKey -Force|Out-Null;Set-Item $baseKey -Value 'URL:Kanban Capture';New-ItemProperty $baseKey -Name 'URL Protocol' -Value '' -PropertyType String -Force|Out-Null;" ^
 "$cmdKey=$baseKey+'\shell\open\command';New-Item $cmdKey -Force|Out-Null;$pct=[char]37;Set-Item $cmdKey -Value ('\"%CAPDIR%\KanbanCapture.exe\" \"'+$pct+'1\"');" ^
 "$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';New-ItemProperty $run -Name 'KanbanCapture' -Value ('\"%CAPDIR%\KanbanCapture.exe\" --background') -PropertyType String -Force|Out-Null;"
if errorlevel 1 (
 echo [CANH BAO] Capture chua cap nhat duoc. KanMedia van duoc cai.
) else (
 start "" "%CAPDIR%\KanbanCapture.exe" --background
)

echo [7/8] Cai Signing Agent dung chung...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/office-tools/signing-agent/package/kanban_signing_agent.py?ts=%RANDOM%' -OutFile '%SIGNING%\kanban_signing_agent.py';" ^
 "$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';$pyw='%ROOT%\.venv\Scripts\pythonw.exe';$agent='%SIGNING%\kanban_signing_agent.py';" ^
 "New-ItemProperty $run -Name 'KanBanSigning' -Value ('\"'+$pyw+'\" \"'+$agent+'\"') -PropertyType String -Force|Out-Null;"
if errorlevel 1 (
 echo [CANH BAO] Signing Agent chua cai duoc. KanMedia va Capture van dung duoc.
) else (
 start "" /min "%ROOT%\.venv\Scripts\pythonw.exe" "%SIGNING%\kanban_signing_agent.py"
)

echo [8/8] Dang ky KanMedia chay cung Windows...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';$ps='%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe';$server='%RUNTIME%\kanmedia-server.ps1';" ^
 "$cmd='\"'+$ps+'\" -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File \"'+$server+'\"';New-ItemProperty $run -Name 'KanBanMedia' -Value $cmd -PropertyType String -Force|Out-Null;"
if errorlevel 1 goto :FAIL_RUNTIME
start "" /min powershell.exe -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%RUNTIME%\kanmedia-server.ps1"
timeout /t 2 /nobreak >nul
powershell -NoProfile -Command "$h=@{'X-KanBan-Agent'='linh-kanban-v1'};try{$r=Invoke-RestMethod -Headers $h -Uri 'http://127.0.0.1:47632/health' -TimeoutSec 4;if(-not $r.mediaReady){exit 1};Write-Host ('KanMedia san sang - yt-dlp '+$r.ytDlp)}catch{exit 1}"
if errorlevel 1 goto :FAIL_START

rmdir /s /q "%TMP%" >nul 2>nul
echo.
echo ============================================================
echo   KANBAN TOOLS DA SAN SANG
echo ============================================================
echo   - Alt+C / Alt+X va nut CHUP
echo   - KanMedia: Tai / Chuyen doi / Edit Media
echo   - Ho tro ky PDF bang USB Token
echo.
echo Bo cai duoc luu tai: %ROOT%\KanTool.bat
echo Khong co buoc nao tu dong tat antivirus hoac them Defender exclusion.
echo.
if /I "%MODE%"=="/update" (
 timeout /t 3 >nul
 exit /b 0
)
pause
exit /b 0

:FAIL_RUNTIME
echo [LOI] Khong tai/cai duoc runtime KanMedia.
goto :FAIL
:FAIL_PYTHON
echo [LOI] Khong cai/khong tim thay Python 3.12/3.13.
goto :FAIL
:FAIL_NODE
echo [LOI] Khong tai/xac minh duoc Node.js portable.
goto :FAIL
:FAIL_FFMPEG
echo [LOI] Khong tai/giai nen duoc FFmpeg.
goto :FAIL
:FAIL_START
echo [LOI] KanMedia da cai file nhung dich vu local chua san sang.
goto :FAIL
:FAIL
echo.
echo Windows Security van duoc giu nguyen. Neu Capture.exe bi canh bao, hay chi cho
echo phep sau khi ban xac minh file duoc tai tu repo KanBan cua chinh minh.
echo Cach giam canh bao ben vung nhat cho EXE tuy bien la ky ma bang certificate
echo code-signing; bo cai nay khong tu dong bo qua SmartScreen/Defender.
echo.
rmdir /s /q "%TMP%" >nul 2>nul
pause
exit /b 1
