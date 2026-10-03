param(
  [string]$Mode = "/install",
  [Parameter(Mandatory=$true)][string]$ManifestPath
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$Root = Join-Path $env:LOCALAPPDATA "KanBanTools"
$Runtime = Join-Path $Root "runtime"
$Media = Join-Path $Root "media\bin"
$NodeDir = Join-Path $Root "media\node"
$Signing = Join-Path $Root "signing"
$CaptureDir = Join-Path $Root "capture"
$BackupDir = Join-Path $Root "backup"
$Jobs = Join-Path $Root "jobs"
$Uploads = Join-Path $Root "uploads"
$Logs = Join-Path $Root "logs"
$TempDir = Join-Path $Root "temp-install"
$InstalledPath = Join-Path $Root "installed.json"
$Repo = "https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main"
$Mode = [string]$Mode
if($Mode -notin @("/install","/update","/repair")){ $Mode = "/install" }
$Force = ($Mode -ieq "/repair")

$dirs = @($Root,$Runtime,$Media,$NodeDir,$Signing,$CaptureDir,$BackupDir,$Jobs,$Uploads,$Logs,$TempDir)
foreach($d in $dirs){ New-Item -ItemType Directory -Force -Path $d | Out-Null }

$InstallLog = Join-Path $Logs "install-latest.log"
try { Start-Transcript -Path $InstallLog -Force | Out-Null } catch {}
trap {
  Write-Host ""
  Write-Host ("[LOI] " + $_.Exception.Message) -ForegroundColor Red
  Write-Host ("Log: " + $InstallLog) -ForegroundColor Yellow
  try { Stop-Transcript | Out-Null } catch {}
  exit 1
}

$Manifest = Get-Content -LiteralPath $ManifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
$Installed = $null
if(Test-Path $InstalledPath){
  try { $Installed = Get-Content -LiteralPath $InstalledPath -Raw -Encoding UTF8 | ConvertFrom-Json } catch {}
}

function Write-Step([string]$Text){ Write-Host ""; Write-Host "==> $Text" -ForegroundColor Cyan }
function Get-Version([object]$Obj,[string]$Name){
  try{
    if($null -eq $Obj -or $null -eq $Obj.components){ return "" }
    $p = $Obj.components.PSObject.Properties[$Name]
    if($null -eq $p -or $null -eq $p.Value){ return "" }
    return [string]$p.Value.version
  }catch{ return "" }
}
function Need-Component([string]$Name,[string[]]$RequiredFiles=@()){
  if($Force){ return $true }
  $want = Get-Version $Manifest $Name
  $have = Get-Version $Installed $Name
  if($want -ne $have){ return $true }
  foreach($f in $RequiredFiles){ if(-not (Test-Path $f)){ return $true } }
  return $false
}
function Download-Url([string]$Url,[string]$Target,[long]$MinBytes=100,[int]$Attempts=4){
  $last=$null
  for($i=1;$i -le $Attempts;$i++){
    try{
      if(Test-Path $Target){ Remove-Item -LiteralPath $Target -Force -ErrorAction SilentlyContinue }
      Invoke-WebRequest -UseBasicParsing -Uri $Url -OutFile $Target -TimeoutSec 120
      if(-not (Test-Path $Target) -or (Get-Item $Target).Length -lt $MinBytes){ throw "File tai ve khong hop le." }
      return
    }catch{
      $last=$_
      Write-Host ("  Tai that bai lan " + $i + "/" + $Attempts + ". Thu lai...") -ForegroundColor Yellow
      Start-Sleep -Seconds ([Math]::Min(2*$i,8))
    }
  }
  throw $last
}
function Download-File([string]$Relative,[string]$Target){
  $stamp = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
  $u = "{0}/{1}?ts={2}" -f $Repo.TrimEnd("/"), $Relative.TrimStart("/"), $stamp
  Download-Url $u $Target 100 4
}
function Invoke-PipRetry([string[]]$PipArgs,[string]$Label){
  for($i=1;$i -le 4;$i++){
    Write-Host ("  " + $Label + " - lan " + $i + "/4") -ForegroundColor DarkGray
    & $venvPy -m pip @PipArgs
    if($LASTEXITCODE -eq 0){ return }
    if($i -lt 4){ Start-Sleep -Seconds ([Math]::Min(3*$i,9)) }
  }
  throw ("Khong hoan tat duoc: " + $Label)
}
function Stage-LatestBootstrapper(){
  try{
    $stamp=[DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
    $pending=Join-Path $Root "KanTool.pending.bat"
    $dest=Join-Path $Root "KanTool.bat"
    $url=("{0}/kan-tools/KanTool.bat?ts={1}" -f $Repo.TrimEnd("/"),$stamp)
    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $pending
    if(-not(Test-Path $pending) -or (Get-Item $pending).Length -lt 700){
      throw "KanTool.bat moi khong hop le."
    }
    $head=Get-Content -LiteralPath $pending -Raw
    if($head.ToUpperInvariant() -notmatch "KANBAN TOOLS"){
      throw "KanTool.bat moi khong dung dinh dang."
    }
    $parentPid=(Get-CimInstance Win32_Process -Filter "ProcessId=$PID").ParentProcessId
    $pendingEsc=$pending.Replace("'","''")
    $destEsc=$dest.Replace("'","''")
    $cmd="`$p=$parentPid;while(Get-Process -Id `$p -ErrorAction SilentlyContinue){Start-Sleep -Milliseconds 350};Move-Item -LiteralPath '$pendingEsc' -Destination '$destEsc' -Force"
    Start-Process powershell.exe -WindowStyle Hidden -ArgumentList @("-NoProfile","-ExecutionPolicy","Bypass","-Command",$cmd) | Out-Null
  }catch{
    Write-Host "  Khong dong bo duoc KanTool.bat luu tren may: $($_.Exception.Message)" -ForegroundColor Yellow
  }
}
function Stop-Matching([string]$Pattern){
  Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
    Where-Object { $_.ProcessId -ne $PID -and $_.CommandLine -like $Pattern } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
}
function Test-Url([string]$Url,[hashtable]$Headers=$null,[int]$Timeout=2){
  try{
    $args=@{Uri=$Url;UseBasicParsing=$true;TimeoutSec=$Timeout}
    if($Headers){$args.Headers=$Headers}
    $r=Invoke-WebRequest @args
    return ($r.StatusCode -ge 200 -and $r.StatusCode -lt 300)
  }catch{return $false}
}
function Test-PythonExe([string]$Path){
  if(-not $Path -or -not (Test-Path -LiteralPath $Path)){ return "" }
  try{
    $p = & $Path -c "import sys,struct;print(sys.executable if sys.version_info >= (3,12) and struct.calcsize('P')*8 == 64 else '')" 2>$null
    if($LASTEXITCODE -eq 0 -and $p){
      $resolved=[string]($p | Select-Object -First 1)
      if($resolved -and (Test-Path -LiteralPath $resolved)){ return $resolved }
    }
  }catch{}
  return ""
}
function Find-BasePython(){
  $direct=@()
  $direct += (Join-Path $Root "python\python.exe")
  foreach($v in @("314","313","312")){
    if($env:LOCALAPPDATA){ $direct += (Join-Path $env:LOCALAPPDATA "Programs\Python\Python$v\python.exe") }
    if($env:ProgramFiles){ $direct += (Join-Path $env:ProgramFiles "Python$v\python.exe") }
    $direct += "C:\Python$v\python.exe"
  }
  foreach($p in ($direct | Select-Object -Unique)){
    $ok=Test-PythonExe $p
    if($ok){ return $ok }
  }
  foreach($cmd in @(
    @("py.exe","-3.14"),
    @("py.exe","-3.13"),
    @("py.exe","-3.12"),
    @("python.exe","")
  )){
    try{
      $exe=$cmd[0];$arg=$cmd[1]
      if($arg){
        $p=& $exe $arg -c "import sys,struct;print(sys.executable if sys.version_info >= (3,12) and struct.calcsize('P')*8 == 64 else '')" 2>$null
      }else{
        $p=& $exe -c "import sys,struct;print(sys.executable if sys.version_info >= (3,12) and struct.calcsize('P')*8 == 64 else '')" 2>$null
      }
      if($LASTEXITCODE -eq 0 -and $p){
        $candidate=[string]($p | Select-Object -First 1)
        if($candidate -and (Test-Path -LiteralPath $candidate)){ return $candidate }
      }
    }catch{}
  }
  return ""
}
function Ensure-Python(){
  $venvPy = Join-Path $Root ".venv\Scripts\python.exe"
  if(Test-Path $venvPy){
    try{ & $venvPy -c "import sys;raise SystemExit(0 if sys.version_info >= (3,12) else 1)" | Out-Null; if($LASTEXITCODE -eq 0){ return $venvPy } }catch{}
  }

  $base = Find-BasePython
  if($base){ Write-Host "  Da tim thay Python phu hop: $base" -ForegroundColor DarkGray }
  if(-not $base){
    Write-Host "  May chua co Python phu hop. Dang thu cai tu dong..."
    $winget = Get-Command winget.exe -ErrorAction SilentlyContinue
    if($winget){
      try{
        & winget install -e --id Python.Python.3.13 --scope user --accept-package-agreements --accept-source-agreements
      }catch{}
      $base = Find-BasePython
      if($base){ Write-Host "  Da nhan Python moi cai: $base" -ForegroundColor DarkGray }
    }
  }
  if(-not $base){
    $ver=[string]$Manifest.pythonFallback.version
    $url=[string]$Manifest.pythonFallback.url
    $installer=Join-Path $TempDir "python-$ver-amd64.exe"
    Write-Host "  Dang tai Python $ver chinh thuc tu python.org..."
    Download-Url $url $installer 1000000 4
    $sig=Get-AuthenticodeSignature -FilePath $installer
    if($sig.Status -ne "Valid" -or $sig.SignerCertificate.Subject -notmatch "Python Software Foundation"){
      throw "Chu ky so Python installer khong hop le."
    }
    $target=Join-Path $Root "python"
    $proc=Start-Process -FilePath $installer -ArgumentList @(
      "/quiet","InstallAllUsers=0","Include_launcher=0","Include_pip=1","Include_test=0","PrependPath=0","Shortcuts=0","TargetDir=$target"
    ) -Wait -PassThru
    if($proc.ExitCode -ne 0){ throw "Khong cai duoc Python. Ma loi: $($proc.ExitCode)" }
    $base=Join-Path $target "python.exe"
  }
  if(-not (Test-Path $base)){ throw "Khong tim thay Python sau khi cai." }
  if(Test-Path (Join-Path $Root ".venv")){ Remove-Item -Recurse -Force (Join-Path $Root ".venv") -ErrorAction SilentlyContinue }
  & $base -m venv (Join-Path $Root ".venv")
  if($LASTEXITCODE -ne 0){ throw "Khong tao duoc moi truong Python rieng." }
  return $venvPy
}

function Get-LiveMediaJob(){
  if(-not (Test-Path $Jobs)){ return $null }
  foreach($file in Get-ChildItem $Jobs -Filter "*.status.json" -ErrorAction SilentlyContinue){
    try{
      $j=Get-Content $file.FullName -Raw -Encoding UTF8 | ConvertFrom-Json
      if($j.state -ne "queued" -and $j.state -ne "running"){ continue }
      $pidValue=0
      try{$pidValue=[int]$j.workerPid}catch{}
      $age=((Get-Date)-(Get-Item $file.FullName).LastWriteTime).TotalSeconds
      $alive=$false
      if($pidValue -gt 0){
        $alive=[bool](Get-Process -Id $pidValue -ErrorAction SilentlyContinue)
      }
      if($alive){ return $file }
      if($pidValue -le 0 -and $age -le 20){ return $file }

      $j.state="error"
      $j.ok=$false
      $j.message="Tac vu cu da dung."
      $j.error="Installer da tu dong don job KanMedia mo coi truoc khi cap nhat."
      $j.childPid=0
      $j | ConvertTo-Json -Depth 8 -Compress | Set-Content -LiteralPath $file.FullName -Encoding UTF8
      Write-Host "  Da don job KanMedia cu: $($file.BaseName)" -ForegroundColor DarkGray
    }catch{}
  }
  return $null
}

Write-Host "============================================================"
Write-Host "  KANBAN TOOLS - CAI DAT / CAP NHAT THONG MINH"
Write-Host "============================================================"
Write-Host "  Chup man hinh - KanMedia - Bao thuc Windows - Ho tro ky so PDF"
Write-Host "  Mot bo cai duy nhat, cap nhat theo tung thanh phan."
Write-Host "============================================================"

# Chi chan cap nhat neu worker KanMedia thuc su con song.
if(-not $Force){
  $running=Get-LiveMediaJob
  if($running){
    throw "KanMedia dang co tac vu that su dang chay. Hay cho hoan tat hoac bam Huy truoc khi cap nhat."
  }
}else{
  Get-LiveMediaJob | Out-Null
}

Write-Step "Dung KanMedia cu"
$head=@{"X-KanBan-Agent"="linh-kanban-v1"}
try{Invoke-RestMethod -Method Post -Headers $head -ContentType "application/json" -Body "{}" -Uri "http://127.0.0.1:47632/shutdown" -TimeoutSec 1|Out-Null}catch{}
Start-Sleep -Milliseconds 500
Stop-Matching "*kanmedia-server.py*"
Stop-Matching "*kanmedia-worker.py*"

$venvPy = Ensure-Python
$venvPip = @($venvPy,"-m","pip")
$pyw = Join-Path $Root ".venv\Scripts\pythonw.exe"

$needPackages = Need-Component "pythonPackages" @()
try{
  & $venvPy -c "import PIL,cryptography,pyhanko,reportlab,pykeepass,websocket" 2>$null
  if($LASTEXITCODE -ne 0){ $needPackages=$true }
}catch{ $needPackages=$true }
if($needPackages){
  Write-Step "Cap nhat thu vien Python dung chung"
  Invoke-PipRetry @("--disable-pip-version-check","--retries","8","--timeout","60","install","--upgrade","pip","setuptools","wheel") "Cap nhat pip/setuptools/wheel"
  Invoke-PipRetry @("--disable-pip-version-check","--retries","8","--timeout","60","install","-U","pillow","cryptography","pyhanko","reportlab","pykeepass","websocket-client") "Cai thu vien KanBan Tools"
}else{
  Write-Host "  Thu vien Python: da dung phien ban." -ForegroundColor DarkGray
}

$needYt = Need-Component "ytDlp" @()
$ytOk=$false
try{ & $venvPy -m yt_dlp --version | Out-Null; if($LASTEXITCODE -eq 0){$ytOk=$true} }catch{}
if($needYt -or -not $ytOk){
  Write-Step "Cap nhat loi tai yt-dlp"
  Invoke-PipRetry @("--disable-pip-version-check","--retries","8","--timeout","60","install","-U","--pre","yt-dlp[default]") "Cap nhat yt-dlp"
}else{
  Write-Host "  yt-dlp: giu ban dang chay tot." -ForegroundColor DarkGray
}

$runtimeFiles=@(
  (Join-Path $Runtime "kanmedia-server.py"),
  (Join-Path $Runtime "kanmedia-worker.py")
)
if(Need-Component "runtime" $runtimeFiles){
  Write-Step "Cap nhat runtime KanMedia"
  Download-File "kan-tools/runtime/kanmedia-server.py" $runtimeFiles[0]
  Download-File "kan-tools/runtime/kanmedia-worker.py" $runtimeFiles[1]
}else{
  Write-Host "  Runtime KanMedia: khong doi." -ForegroundColor DarkGray
}

$nodeExe=Join-Path $NodeDir "node.exe"
$nodeNeed=Need-Component "node" @($nodeExe)
if(-not $nodeNeed){
  try{
    $major=[int]((& $nodeExe --version).Trim().TrimStart("v").Split(".")[0])
    if($major -lt 22){$nodeNeed=$true}
  }catch{$nodeNeed=$true}
}
if($nodeNeed){
  Write-Step "Cap nhat Node.js portable"
  Remove-Item -Recurse -Force $NodeDir -ErrorAction SilentlyContinue
  New-Item -ItemType Directory -Force -Path $NodeDir|Out-Null
  $channel=[string]$Manifest.components.node.channel
  $base="https://nodejs.org/dist/$channel/"
  $sumPath=Join-Path $TempDir "node-SHASUMS256.txt"
  Download-Url ($base+"SHASUMS256.txt") $sumPath 1000 4
  $sumContent=Get-Content -LiteralPath $sumPath -Raw
  $line=($sumContent -split "\r?\n"|Where-Object{$_ -like "*win-x64.zip"}|Select-Object -First 1)
  if(-not $line){throw "Khong tim thay goi Node Windows x64."}
  $parts=$line -split "\s+";$sha=$parts[0].ToLowerInvariant();$name=$parts[-1]
  $zip=Join-Path $TempDir "node.zip";$out=Join-Path $TempDir "node"
  Download-Url ($base+$name) $zip 1000000 4
  if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $sha){throw "SHA256 Node khong khop."}
  Expand-Archive $zip $out -Force
  $src=Get-ChildItem $out -Recurse -Filter node.exe|Select-Object -First 1
  if(-not $src){throw "Khong tim thay node.exe."}
  Copy-Item (Join-Path $src.Directory.FullName "*") $NodeDir -Recurse -Force
}else{
  Write-Host "  Node.js: khong doi." -ForegroundColor DarkGray
}

$ffmpeg=Join-Path $Media "ffmpeg.exe"
$ffprobe=Join-Path $Media "ffprobe.exe"
if(Need-Component "ffmpeg" @($ffmpeg,$ffprobe)){
  Write-Step "Cap nhat FFmpeg / FFprobe"
  $zip=Join-Path $TempDir "ffmpeg.zip";$out=Join-Path $TempDir "ffmpeg"
  $ffUrl="https://github.com/BtbN/FFmpeg-Builds/releases/download/latest/ffmpeg-master-latest-win64-gpl.zip"
  $expectedSha=""
  try{
    $rel=Invoke-RestMethod -Headers @{"User-Agent"="KanBanTools"} -Uri "https://api.github.com/repos/BtbN/FFmpeg-Builds/releases/latest" -TimeoutSec 30
    $a=$rel.assets|Where-Object{$_.name -eq "ffmpeg-master-latest-win64-gpl.zip"}|Select-Object -First 1
    if($a){
      $ffUrl=$a.browser_download_url
      if($a.digest -and $a.digest -match "^sha256:(.+)$"){ $expectedSha=$Matches[1].ToLowerInvariant() }
    }
  }catch{
    Write-Host "  GitHub API cham/bi gioi han, dung link FFmpeg latest truc tiep." -ForegroundColor Yellow
  }
  Download-Url $ffUrl $zip 50000000 4
  if($expectedSha){
    if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $expectedSha){throw "SHA256 FFmpeg khong khop."}
  }
  Expand-Archive $zip $out -Force
  $ff=Get-ChildItem $out -Recurse -Filter ffmpeg.exe|Select-Object -First 1
  $fp=Get-ChildItem $out -Recurse -Filter ffprobe.exe|Select-Object -First 1
  if(-not $ff -or -not $fp){throw "Khong tim thay ffmpeg/ffprobe."}
  Copy-Item $ff.FullName $ffmpeg -Force
  Copy-Item $fp.FullName $ffprobe -Force
}else{
  Write-Host "  FFmpeg: khong doi." -ForegroundColor DarkGray
}

$capture=Join-Path $CaptureDir "capture_agent.py"
$kanpass=Join-Path $CaptureDir "kanpass.py"
$kanpassWeb=Join-Path $CaptureDir "kanpass_webbridge.py"
$needCapture=Need-Component "capture" @($capture,$kanpass,$kanpassWeb)
if($needCapture){
  Write-Step "Cap nhat Windows Agent + KanPass Web Bridge"
  Download-File ([string]$Manifest.components.capture.source) $capture
  Download-File ([string]$Manifest.components.capture.kanpassSource) $kanpass
  Download-File ([string]$Manifest.components.capture.webBridgeSource) $kanpassWeb
  if((Get-Item $capture).Length -lt 20000){throw "Source Capture khong hop le."}
  if((Get-Item $kanpass).Length -lt 10000){throw "Source KanPass khong hop le."}
  if((Get-Item $kanpassWeb).Length -lt 10000){throw "Source KanPass Web Bridge khong hop le."}
  try{Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:47631/quit" -TimeoutSec 1|Out-Null}catch{}
  Stop-Matching "*capture_agent.py*"
}else{
  Write-Host "  Windows Agent / KanPass Web Bridge: khong doi." -ForegroundColor DarkGray
}

$signAgent=Join-Path $Signing "kanban_signing_agent.py"
$needSigning=Need-Component "signing" @($signAgent)
if($needSigning){
  Write-Step "Cap nhat bo ho tro ky so"
  Download-File ([string]$Manifest.components.signing.source) $signAgent
  Stop-Matching "*kanban_signing_agent.py*"
}else{
  Write-Host "  Ky so: khong doi." -ForegroundColor DarkGray
}

$backupAgent=Join-Path $BackupDir "kanbackup-server.py"
$kopiaExe=Join-Path $BackupDir "kopia.exe"
$needBackup=Need-Component "backup" @($backupAgent)
if($needBackup){
  Write-Step "Cap nhat KanBackup"
  $backupPayload=Join-Path $TempDir "kanbackup-server.py.gz.b64"
  Download-File ([string]$Manifest.components.backup.source) $backupPayload
  $encoded=(Get-Content -LiteralPath $backupPayload -Raw -Encoding UTF8).Trim()
  $compressed=[Convert]::FromBase64String($encoded)
  $memory=New-Object System.IO.MemoryStream(,$compressed)
  $gzip=New-Object System.IO.Compression.GZipStream($memory,[System.IO.Compression.CompressionMode]::Decompress)
  $output=[System.IO.File]::Create($backupAgent)
  try{$gzip.CopyTo($output)}finally{$output.Dispose();$gzip.Dispose();$memory.Dispose()}
  if((Get-Item $backupAgent).Length -lt 12000){throw "Source KanBackup khong hop le."}
  & $venvPy -m py_compile $backupAgent
  if($LASTEXITCODE -ne 0){throw "KanBackup source bi loi cu phap."}
  Stop-Matching "*kanbackup-server.py*"
}else{
  Write-Host "  KanBackup: khong doi." -ForegroundColor DarkGray
}

$needKopia=Need-Component "kopia" @($kopiaExe)
if($needKopia){
  Write-Step "Cai / cap nhat Kopia backup engine"
  Stop-Matching "*kanbackup-server.py*"
  $kopiaZip=Join-Path $TempDir "kopia.zip"
  $kopiaOut=Join-Path $TempDir "kopia"
  Remove-Item -Recurse -Force $kopiaOut -ErrorAction SilentlyContinue
  Download-Url ([string]$Manifest.components.kopia.url) $kopiaZip 5000000 4
  $wantHash=([string]$Manifest.components.kopia.sha256).ToLowerInvariant()
  $gotHash=(Get-FileHash $kopiaZip -Algorithm SHA256).Hash.ToLowerInvariant()
  if($wantHash -and $gotHash -ne $wantHash){throw "SHA256 Kopia khong khop."}
  Expand-Archive $kopiaZip $kopiaOut -Force
  $foundKopia=Get-ChildItem $kopiaOut -Recurse -Filter "kopia.exe"|Select-Object -First 1
  if(-not $foundKopia){throw "Khong tim thay kopia.exe trong goi chinh thuc."}
  Copy-Item $foundKopia.FullName $kopiaExe -Force
  & $kopiaExe --version
  if($LASTEXITCODE -ne 0){throw "Kopia khong chay duoc sau khi cai."}
}else{
  Write-Host "  Kopia: khong doi." -ForegroundColor DarkGray
}

Write-Step "Dang ky chay cung Windows"
$run="HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
New-Item -Path $run -Force|Out-Null
New-ItemProperty $run -Name "KanbanCapture" -Value ('"'+$pyw+'" "'+$capture+'" --background') -PropertyType String -Force|Out-Null
New-ItemProperty $run -Name "KanBanSigning" -Value ('"'+$pyw+'" "'+$signAgent+'"') -PropertyType String -Force|Out-Null
New-ItemProperty $run -Name "KanBanMedia" -Value ('"'+$pyw+'" "'+(Join-Path $Runtime "kanmedia-server.py")+'"') -PropertyType String -Force|Out-Null
New-ItemProperty $run -Name "KanBanBackup" -Value ('"'+$pyw+'" "'+$backupAgent+'"') -PropertyType String -Force|Out-Null

$baseKey="HKCU:\Software\Classes\kanbancapture"
New-Item $baseKey -Force|Out-Null
Set-Item $baseKey -Value "URL:Kanban Capture"
New-ItemProperty $baseKey -Name "URL Protocol" -Value "" -PropertyType String -Force|Out-Null
$cmdKey=$baseKey+"\shell\open\command"
New-Item $cmdKey -Force|Out-Null
Set-Item $cmdKey -Value ('"'+$pyw+'" "'+$capture+'" "%1"')

if($needCapture -or -not (Test-Url "http://127.0.0.1:47631/ping")){
  Start-Process -FilePath $pyw -ArgumentList ('"'+$capture+'" --background') -WindowStyle Hidden
}
if($needSigning -or -not (Test-Url "http://127.0.0.1:8765/health" @{"X-KanBan-Agent"="linh-kanban-v1"})){
  Start-Process -FilePath $pyw -ArgumentList ('"'+$signAgent+'"') -WindowStyle Hidden
}
$mediaServer=Join-Path $Runtime "kanmedia-server.py"
Start-Process -FilePath $pyw -ArgumentList ('"'+$mediaServer+'"') -WindowStyle Hidden
if($needBackup -or $needKopia -or -not (Test-Url "http://127.0.0.1:47634/ping" @{"X-KanBan-Agent"="linh-kanbackup-v1"})){
  Start-Process -FilePath $pyw -ArgumentList ('"'+$backupAgent+'"') -WindowStyle Hidden
}

Write-Step "Kiem tra sau cai dat"
$serverOk=$false
for($i=0;$i -lt 100;$i++){
  try{
    $p=Invoke-RestMethod -Headers @{"X-KanBan-Agent"="linh-kanban-v1"} -Uri "http://127.0.0.1:47632/ping" -TimeoutSec 3
    if($p.ok){$serverOk=$true;break}
  }catch{}
  Start-Sleep -Milliseconds 300
}
if(-not $serverOk){
  $log=Join-Path $Logs "kanmedia-server.log"
  if(Test-Path $log){ Get-Content $log -Tail 40 }
  throw "KanMedia server chua khoi dong duoc sau 30 giay."
}
$mediaOk=$false
try{
  $h=Invoke-RestMethod -Headers @{"X-KanBan-Agent"="linh-kanban-v1"} -Uri "http://127.0.0.1:47632/health" -TimeoutSec 8
  $mediaOk=($h.ok -and $h.mediaReady)
  if(-not $mediaOk -and $h.errors){ Write-Host ("  Thanh phan chua san sang: " + ($h.errors -join "; ")) -ForegroundColor Yellow }
}catch{}
if(-not $mediaOk){
  throw "KanMedia da chay nhung con thieu thanh phan. Bo cai se thu lai o lan repair."
}
$backupOk=$false
for($i=0;$i -lt 50;$i++){
  try{
    $b=Invoke-RestMethod -Headers @{"X-KanBan-Agent"="linh-kanbackup-v1"} -Uri "http://127.0.0.1:47634/ping" -TimeoutSec 2
    if($b.ok -and $b.available){$backupOk=$true;break}
  }catch{}
  Start-Sleep -Milliseconds 250
}
if(-not $backupOk){
  $log=Join-Path $Logs "kanbackup-server.log"
  if(Test-Path $log){ Get-Content $log -Tail 40 }
  throw "KanBackup / Kopia chua khoi dong duoc."
}

# Ghi dung manifest da cai de lan sau chi cap nhat thanh phan thay doi.
Copy-Item -LiteralPath $ManifestPath -Destination $InstalledPath -Force
Stage-LatestBootstrapper
try{ Copy-Item -LiteralPath $MyInvocation.MyCommand.Path -Destination (Join-Path $Root "install.ps1") -Force }catch{}
Remove-Item -Recurse -Force $TempDir -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  KANBAN TOOLS DA SAN SANG" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  - Alt+C / Alt+X: chup man hinh; Alt+A / Alt+P: KanPass; Web Bridge: tu Save/Update tren Web duoc KanPass mo"
Write-Host "  - KanMedia: Tai / Chuyen doi / Edit Media"
Write-Host "  - Ho tro ky PDF bang USB Token"
Write-Host "  - KanBackup + Kopia: backup tang dan / dedup, lich Windows, restore rieng"
Write-Host "  - Cap nhat theo tung thanh phan, khong tai lai neu khong can"
Write-Host ""
try { Stop-Transcript | Out-Null } catch {}
