
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
echo   Capture trong bo cai chung chay tu source Python, khong dung EXE tu dong goi.
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
powershell -NoProfile -Command "$h=@{'X-KanBan-Agent'='linh-kanban-v1'};try{Invoke-RestMethod -Method Post -Headers $h -ContentType 'application/json' -Body '{}' -Uri 'http://127.0.0.1:47632/shutdown' -TimeoutSec 1|Out-Null}catch{};Start-Sleep -Milliseconds 500;Get-CimInstance Win32_Process -ErrorAction SilentlyContinue|Where-Object{$_.CommandLine -like '*kanmedia-server.py*' -or $_.CommandLine -like '*kanmedia-server.ps1*' -or $_.CommandLine -like '*kanmedia-worker.py*' -or $_.CommandLine -like '*kanmedia-worker.ps1*'}|ForEach-Object{Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue}" >nul 2>nul
timeout /t 1 /nobreak >nul

echo [2/8] Tai runtime KanMedia tu repo KanBan...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/kan-tools/runtime/kanmedia-server.py?ts=%RANDOM%' -OutFile '%RUNTIME%\kanmedia-server.py';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/kan-tools/runtime/kanmedia-worker.py?ts=%RANDOM%' -OutFile '%RUNTIME%\kanmedia-worker.py';" ^
 "if((Get-Item '%RUNTIME%\kanmedia-server.py').Length -lt 8000){throw 'Runtime KanMedia server khong hop le'};" ^
 "if((Get-Item '%RUNTIME%\kanmedia-worker.py').Length -lt 10000){throw 'Runtime KanMedia worker khong hop le'};"
if errorlevel 1 goto :FAIL_RUNTIME

echo [3/8] Chuan bi Python cho KanBan Tools...
set "PY_EXE="

where py.exe >nul 2>nul
if not errorlevel 1 (
  for /f "usebackq delims=" %%P in (`py -3.14 -c "import sys;print(sys.executable)" 2^>nul`) do set "PY_EXE=%%P"
)
if not defined PY_EXE (
  where py.exe >nul 2>nul
  if not errorlevel 1 (
    for /f "usebackq delims=" %%P in (`py -3.13 -c "import sys;print(sys.executable)" 2^>nul`) do set "PY_EXE=%%P"
  )
)
if not defined PY_EXE (
  where py.exe >nul 2>nul
  if not errorlevel 1 (
    for /f "usebackq delims=" %%P in (`py -3.12 -c "import sys;print(sys.executable)" 2^>nul`) do set "PY_EXE=%%P"
  )
)
if not defined PY_EXE (
  where python.exe >nul 2>nul
  if not errorlevel 1 (
    for /f "usebackq delims=" %%P in (`python -c "import sys;print(sys.executable if sys.version_info >= (3,12) else '')" 2^>nul`) do if not "%%P"=="" set "PY_EXE=%%P"
  )
)

if not defined PY_EXE (
  echo     May chua co Python phu hop. Dang tu cai Python theo pham vi nguoi dung...
  where winget.exe >nul 2>nul
  if not errorlevel 1 (
    winget install -e --id Python.Python.3.13 --scope user --accept-package-agreements --accept-source-agreements
  )
  if exist "%LOCALAPPDATA%\Programs\Python\Python313\python.exe" set "PY_EXE=%LOCALAPPDATA%\Programs\Python\Python313\python.exe"
  if not defined PY_EXE (
    where py.exe >nul 2>nul
    if not errorlevel 1 (
      for /f "usebackq delims=" %%P in (`py -3.13 -c "import sys;print(sys.executable)" 2^>nul`) do set "PY_EXE=%%P"
    )
  )
)

if not defined PY_EXE (
  echo     Winget khong co/khong cai duoc. Dang tai Python 3.13.16 chinh thuc tu python.org...
  set "PYINST=%TMP%\python-3.13.16-amd64.exe"
  powershell -NoProfile -Command ^
   "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';$u='https://www.python.org/ftp/python/3.13.16/python-3.13.16-amd64.exe';" ^
   "Invoke-WebRequest -UseBasicParsing -Uri $u -OutFile '%PYINST%';" ^
   "$sig=Get-AuthenticodeSignature -FilePath '%PYINST%';if($sig.Status -ne 'Valid'){throw 'Chu ky so Python installer khong hop le'};" ^
   "if($sig.SignerCertificate.Subject -notmatch 'Python Software Foundation'){throw 'Python installer khong dung nha phat hanh'};"
  if errorlevel 1 goto :FAIL_PYTHON
  start /wait "" "%PYINST%" /quiet InstallAllUsers=0 Include_launcher=0 Include_pip=1 Include_test=0 PrependPath=0 Shortcuts=0 TargetDir="%ROOT%\python"
  if errorlevel 1 goto :FAIL_PYTHON
  if exist "%ROOT%\python\python.exe" set "PY_EXE=%ROOT%\python\python.exe"
)

if not defined PY_EXE goto :FAIL_PYTHON
"%PY_EXE%" -c "import sys;print(sys.version)" >nul 2>nul
if errorlevel 1 goto :FAIL_PYTHON
if not exist "%ROOT%\.venv\Scripts\python.exe" (
  "%PY_EXE%" -m venv "%ROOT%\.venv"
  if errorlevel 1 goto :FAIL_PYTHON
)
"%ROOT%\.venv\Scripts\python.exe" -m pip install --disable-pip-version-check --upgrade pip setuptools wheel
if errorlevel 1 goto :FAIL_PYTHON
echo     Cap nhat yt-dlp nightly...
"%ROOT%\.venv\Scripts\python.exe" -m pip install --disable-pip-version-check -U --pre "yt-dlp[default]" pillow
if errorlevel 1 goto :FAIL_PYTHON
echo     Cap nhat thu vien ky so...
"%ROOT%\.venv\Scripts\python.exe" -m pip install --disable-pip-version-check -U cryptography pyhanko reportlab pillow
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

echo [6/8] Cai / cap nhat cong cu Chup tu ma nguon...
set "CAPSRC=%ROOT%\capture\capture_agent.py"
if not exist "%ROOT%\capture" mkdir "%ROOT%\capture"

echo     Dung ban Capture cu neu dang chay...
powershell -NoProfile -Command "try{Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/quit' -TimeoutSec 1|Out-Null}catch{}" >nul 2>nul
timeout /t 1 /nobreak >nul
taskkill /IM KanbanCapture.exe /F >nul 2>nul
powershell -NoProfile -Command "Get-CimInstance Win32_Process -ErrorAction SilentlyContinue|Where-Object{$_.CommandLine -like '*capture_agent.py*'}|ForEach-Object{Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue}" >nul 2>nul

echo     Tai source Capture tu repo KanBan...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$ProgressPreference='SilentlyContinue';" ^
 "Invoke-WebRequest -UseBasicParsing -Uri '%REPO%/capture-agent/capture_agent.py?ts=%RANDOM%' -OutFile '%CAPSRC%';" ^
 "if((Get-Item '%CAPSRC%').Length -lt 20000){throw 'Source Capture tai ve khong hop le'};"
if errorlevel 1 (
 echo [CANH BAO] Chua tai duoc source Capture. KanMedia van tiep tuc cai.
 goto :CAPTURE_DONE
)

echo     Dang ky Alt+C / Alt+X va khoi dong cung Windows...
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$pyw='%ROOT%\.venv\Scripts\pythonw.exe';$src='%CAPSRC%';" ^
 "if(-not(Test-Path $pyw)){throw 'Khong tim thay pythonw.exe'};" ^
 "$baseKey='HKCU:\Software\Classes\kanbancapture';New-Item $baseKey -Force|Out-Null;Set-Item $baseKey -Value 'URL:Kanban Capture';New-ItemProperty $baseKey -Name 'URL Protocol' -Value '' -PropertyType String -Force|Out-Null;" ^
 "$cmdKey=$baseKey+'\shell\open\command';New-Item $cmdKey -Force|Out-Null;$pct=[char]37;Set-Item $cmdKey -Value ('\"'+$pyw+'\" \"'+$src+'\" \"'+$pct+'1\"');" ^
 "$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';New-ItemProperty $run -Name 'KanbanCapture' -Value ('\"'+$pyw+'\" \"'+$src+'\" --background') -PropertyType String -Force|Out-Null;"
if errorlevel 1 (
 echo [CANH BAO] Khong dang ky duoc cong cu Chup. KanMedia van tiep tuc cai.
 goto :CAPTURE_DONE
)

start "" /min "%ROOT%\.venv\Scripts\pythonw.exe" "%CAPSRC%" --background
timeout /t 1 /nobreak >nul
powershell -NoProfile -Command "try{$r=Invoke-WebRequest -UseBasicParsing -Uri 'http://127.0.0.1:47631/ping' -TimeoutSec 2;if($r.StatusCode -ne 200){exit 1}}catch{exit 1}" >nul 2>nul
if errorlevel 1 echo [CANH BAO] Capture chua phan hoi. Hay chay lai KanTool.bat neu Alt+C chua hoat dong.
:CAPTURE_DONE


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
if not exist "%ROOT%\logs" mkdir "%ROOT%\logs"
del /q "%ROOT%\logs\kanmedia-server.log" >nul 2>nul
powershell -NoProfile -Command ^
 "$ErrorActionPreference='Stop';$run='HKCU:\Software\Microsoft\Windows\CurrentVersion\Run';$pyw='%ROOT%\.venv\Scripts\pythonw.exe';$server='%RUNTIME%\kanmedia-server.py';" ^
 "if(-not(Test-Path $pyw)){throw 'Khong tim thay pythonw.exe cua KanBan Tools'};if(-not(Test-Path $server)){throw 'Khong tim thay kanmedia-server.py'};" ^
 "New-ItemProperty $run -Name 'KanBanMedia' -Value ('\"'+$pyw+'\" \"'+$server+'\"') -PropertyType String -Force|Out-Null;"
if errorlevel 1 goto :FAIL_RUNTIME

start "" /min "%ROOT%\.venv\Scripts\pythonw.exe" "%RUNTIME%\kanmedia-server.py"
powershell -NoProfile -Command ^
 "$h=@{'X-KanBan-Agent'='linh-kanban-v1'};$ok=$false;" ^
 "for($i=0;$i -lt 30;$i++){try{$r=Invoke-RestMethod -Headers $h -Uri 'http://127.0.0.1:47632/health' -TimeoutSec 2;if($r.ok){if($r.mediaReady){Write-Host ('KanMedia san sang - yt-dlp '+$r.ytDlp+' - Node '+$r.node);$ok=$true;break}else{Write-Host ('KanMedia dang chay nhung thieu: '+(($r.errors|ForEach-Object{$_}) -join '; '))}}}catch{};Start-Sleep -Milliseconds 300};" ^
 "if(-not $ok){exit 1}"
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
echo.
echo ---- Chan doan KanMedia ----
if exist "%ROOT%\logs\kanmedia-server.log" (
  powershell -NoProfile -Command "Get-Content -LiteralPath '%ROOT%\logs\kanmedia-server.log' -Tail 25"
) else (
  echo Chua tao duoc log KanMedia. Runtime co the chua khoi dong.
)
echo ----------------------------
goto :FAIL
:FAIL
echo.
echo Windows Security van duoc giu nguyen; bo cai khong tao Defender exclusion.
echo Capture trong KanTool chay bang Python chinh thuc + source cong khai cua repo KanBan.
echo Node va FFmpeg duoc tai tu nguon cong khai; KanTool khong giai ma EXE an trong BAT.
echo.
rmdir /s /q "%TMP%" >nul 2>nul
pause
exit /b 1
