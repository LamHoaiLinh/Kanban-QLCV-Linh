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
$Jobs = Join-Path $Root "jobs"
$Uploads = Join-Path $Root "uploads"
$Logs = Join-Path $Root "logs"
$TempDir = Join-Path $Root "temp-install"
$InstalledPath = Join-Path $Root "installed.json"
$Repo = "https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main"
$Force = ($Mode -ieq "/repair")

$dirs = @($Root,$Runtime,$Media,$NodeDir,$Signing,$CaptureDir,$Jobs,$Uploads,$Logs,$TempDir)
foreach($d in $dirs){ New-Item -ItemType Directory -Force -Path $d | Out-Null }

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
function Download-File([string]$Relative,[string]$Target){
  $stamp = [DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds()
  $u = "{0}/{1}?ts={2}" -f $Repo.TrimEnd("/"), $Relative.TrimStart("/"), $stamp
  Invoke-WebRequest -UseBasicParsing -Uri $u -OutFile $Target
  if(-not (Test-Path $Target) -or (Get-Item $Target).Length -lt 100){ throw "File tai về khong hop lệ: $Relative" }
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
function Find-BasePython(){
  $candidates=@()
  if(Test-Path (Join-Path $Root "python\python.exe")){ $candidates += (Join-Path $Root "python\python.exe") }
  foreach($cmd in @(
    @("py.exe","-3.14"),
    @("py.exe","-3.13"),
    @("py.exe","-3.12"),
    @("python.exe","")
  )){
    try{
      $exe=$cmd[0];$arg=$cmd[1]
      if($arg){
        $p=& $exe $arg -c "import sys;print(sys.executable if sys.version_info >= (3,12) else '')" 2>$null
      }else{
        $p=& $exe -c "import sys;print(sys.executable if sys.version_info >= (3,12) else '')" 2>$null
      }
      if($p){ $candidates += [string]$p }
    }catch{}
  }
  foreach($p in $candidates){ if($p -and (Test-Path $p)){ return $p } }
  return ""
}
function Ensure-Python(){
  $venvPy = Join-Path $Root ".venv\Scripts\python.exe"
  if(Test-Path $venvPy){
    try{ & $venvPy -c "import sys;raise SystemExit(0 if sys.version_info >= (3,12) else 1)" | Out-Null; if($LASTEXITCODE -eq 0){ return $venvPy } }catch{}
  }

  $base = Find-BasePython
  if(-not $base){
    Write-Host "  May chua có Python phu hop. Dang thu cai tu dong..."
    $winget = Get-Command winget.exe -ErrorAction SilentlyContinue
    if($winget){
      try{
        & winget install -e --id Python.Python.3.13 --scope user --accept-package-agreements --accept-source-agreements
      }catch{}
      $base = Find-BasePython
    }
  }
  if(-not $base){
    $ver=[string]$Manifest.pythonFallback.version
    $url=[string]$Manifest.pythonFallback.url
    $installer=Join-Path $TempDir "python-$ver-amd64.exe"
    Write-Host "  Dang tai Python $ver chinh thuc tu python.org..."
    Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $installer
    $sig=Get-AuthenticodeSignature -FilePath $installer
    if($sig.Status -ne "Valid" -or $sig.SignerCertificate.Subject -notmatch "Python Software Foundation"){
      throw "Chữ ky so Python installer khong hop lệ."
    }
    $target=Join-Path $Root "python"
    $proc=Start-Process -FilePath $installer -ArgumentList @(
      "/quiet","InstallAllUsers=0","Include_launcher=0","Include_pip=1","Include_test=0","PrependPath=0","Shortcuts=0","TargetDir=$target"
    ) -Wait -PassThru
    if($proc.ExitCode -ne 0){ throw "Khong cai duoc Python. Mã loi: $($proc.ExitCode)" }
    $base=Join-Path $target "python.exe"
  }
  if(-not (Test-Path $base)){ throw "Khong tìm thấy Python sau khi cai." }
  if(Test-Path (Join-Path $Root ".venv")){ Remove-Item -Recurse -Force (Join-Path $Root ".venv") -ErrorAction SilentlyContinue }
  & $base -m venv (Join-Path $Root ".venv")
  if($LASTEXITCODE -ne 0){ throw "Khong tạo duoc moi truong Python rieng." }
  return $venvPy
}

Write-Host "============================================================"
Write-Host "  KANBAN TOOLS - CAI DAT / CAP NHAT THONG MINH"
Write-Host "============================================================"
Write-Host "  Chup man hinh - KanMedia - Ho tro ky so PDF"
Write-Host "  Mot bo cai duy nhat, cap nhat theo tung thanh phan."
Write-Host "============================================================"

# Khong update giua lúc dang có job Media.
if(-not $Force -and (Test-Path $Jobs)){
  $running = Get-ChildItem $Jobs -Filter "*.status.json" -ErrorAction SilentlyContinue | ForEach-Object {
    try{
      $j=Get-Content $_.FullName -Raw -Encoding UTF8 | ConvertFrom-Json
      if($j.state -eq "queued" -or $j.state -eq "running"){ $_ }
    }catch{}
  } | Select-Object -First 1
  if($running){
    throw "KanMedia dang có tac vu chay. Hay cho hoàn tat hoac dung chế độ sua chua."
  }
}

Write-Step "Dung KanMedia cũ"
$head=@{"X-KanBan-Agent"="linh-kanban-v1"}
try{Invoke-RestMethod -Method Post -Headers $head -ContentType "application/json" -Body "{}" -Uri "http://127.0.0.1:47632/shutdown" -TimeoutSec 1|Out-Null}catch{}
Start-Sleep -Milliseconds 500
Stop-Matching "*kanmedia-server.py*"
Stop-Matching "*kanmedia-worker.py*"

$venvPy = Ensure-Python
$venvPip = @($venvPy,"-m","pip")
$pyw = Join-Path $Root ".venv\Scripts\pythonw.exe"

$needPackages = Need-Component "pythonPackages" @()
if($needPackages){
  Write-Step "Cap nhat thu vien Python dung chung"
  & $venvPy -m pip install --disable-pip-version-check --upgrade pip setuptools wheel
  if($LASTEXITCODE -ne 0){ throw "Khong cap nhat duoc pip." }
  & $venvPy -m pip install --disable-pip-version-check -U pillow cryptography pyhanko reportlab
  if($LASTEXITCODE -ne 0){ throw "Khong cai du thu vien KanBan Tools." }
}else{
  Write-Host "  Thư vien Python: đã dung phien ban." -ForegroundColor DarkGray
}

$needYt = Need-Component "ytDlp" @()
$ytOk=$false
try{ & $venvPy -m yt_dlp --version | Out-Null; if($LASTEXITCODE -eq 0){$ytOk=$true} }catch{}
if($needYt -or -not $ytOk){
  Write-Step "Cap nhat loi tai yt-dlp"
  & $venvPy -m pip install --disable-pip-version-check -U --pre "yt-dlp[default]"
  if($LASTEXITCODE -ne 0){ throw "Khong cap nhat duoc yt-dlp." }
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
  $sum=Invoke-WebRequest -UseBasicParsing -Uri ($base+"SHASUMS256.txt")
  $line=($sum.Content -split "\r?\n"|Where-Object{$_ -like "*win-x64.zip"}|Select-Object -First 1)
  if(-not $line){throw "Khong tìm thấy goi Node Windows x64."}
  $parts=$line -split "\s+";$sha=$parts[0].ToLowerInvariant();$name=$parts[-1]
  $zip=Join-Path $TempDir "node.zip";$out=Join-Path $TempDir "node"
  Invoke-WebRequest -UseBasicParsing -Uri ($base+$name) -OutFile $zip
  if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $sha){throw "SHA256 Node khong khop."}
  Expand-Archive $zip $out -Force
  $src=Get-ChildItem $out -Recurse -Filter node.exe|Select-Object -First 1
  if(-not $src){throw "Khong tìm thấy node.exe."}
  Copy-Item (Join-Path $src.Directory.FullName "*") $NodeDir -Recurse -Force
}else{
  Write-Host "  Node.js: khong doi." -ForegroundColor DarkGray
}

$ffmpeg=Join-Path $Media "ffmpeg.exe"
$ffprobe=Join-Path $Media "ffprobe.exe"
if(Need-Component "ffmpeg" @($ffmpeg,$ffprobe)){
  Write-Step "Cap nhat FFmpeg / FFprobe"
  $rel=Invoke-RestMethod -Headers @{"User-Agent"="KanBanTools"} -Uri "https://api.github.com/repos/BtbN/FFmpeg-Builds/releases/latest"
  $a=$rel.assets|Where-Object{$_.name -eq "ffmpeg-master-latest-win64-gpl.zip"}|Select-Object -First 1
  if(-not $a){throw "Khong tìm thấy FFmpeg Windows."}
  $zip=Join-Path $TempDir "ffmpeg.zip";$out=Join-Path $TempDir "ffmpeg"
  Invoke-WebRequest -UseBasicParsing -Uri $a.browser_download_url -OutFile $zip
  if((Get-Item $zip).Length -lt 50000000){throw "Gói FFmpeg khong hop lệ."}
  if($a.digest -and $a.digest -match "^sha256:(.+)$"){
    if((Get-FileHash $zip -Algorithm SHA256).Hash.ToLowerInvariant() -ne $Matches[1].ToLowerInvariant()){throw "SHA256 FFmpeg khong khop."}
  }
  Expand-Archive $zip $out -Force
  $ff=Get-ChildItem $out -Recurse -Filter ffmpeg.exe|Select-Object -First 1
  $fp=Get-ChildItem $out -Recurse -Filter ffprobe.exe|Select-Object -First 1
  if(-not $ff -or -not $fp){throw "Khong tìm thấy ffmpeg/ffprobe."}
  Copy-Item $ff.FullName $ffmpeg -Force
  Copy-Item $fp.FullName $ffprobe -Force
}else{
  Write-Host "  FFmpeg: khong doi." -ForegroundColor DarkGray
}

$capture=Join-Path $CaptureDir "capture_agent.py"
$needCapture=Need-Component "capture" @($capture)
if($needCapture){
  Write-Step "Cap nhat cong cu Chup"
  Download-File ([string]$Manifest.components.capture.source) $capture
  if((Get-Item $capture).Length -lt 20000){throw "Source Capture khong hop lệ."}
  try{Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:47631/quit" -TimeoutSec 1|Out-Null}catch{}
  Stop-Matching "*capture_agent.py*"
}else{
  Write-Host "  Capture: khong doi." -ForegroundColor DarkGray
}

$signAgent=Join-Path $Signing "kanban_signing_agent.py"
$needSigning=Need-Component "signing" @($signAgent)
if($needSigning){
  Write-Step "Cap nhat bộ ho tro ky so"
  Download-File ([string]$Manifest.components.signing.source) $signAgent
  Stop-Matching "*kanban_signing_agent.py*"
}else{
  Write-Host "  Ký so: khong doi." -ForegroundColor DarkGray
}

Write-Step "Dang ky chay cùng Windows"
$run="HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
New-Item -Path $run -Force|Out-Null
New-ItemProperty $run -Name "KanbanCapture" -Value ('"'+$pyw+'" "'+$capture+'" --background') -PropertyType String -Force|Out-Null
New-ItemProperty $run -Name "KanBanSigning" -Value ('"'+$pyw+'" "'+$signAgent+'"') -PropertyType String -Force|Out-Null
New-ItemProperty $run -Name "KanBanMedia" -Value ('"'+$pyw+'" "'+(Join-Path $Runtime "kanmedia-server.py")+'"') -PropertyType String -Force|Out-Null

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

Write-Step "Kiem tra sau cai dat"
$mediaOk=$false
for($i=0;$i -lt 30;$i++){
  try{
    $h=Invoke-RestMethod -Headers @{"X-KanBan-Agent"="linh-kanban-v1"} -Uri "http://127.0.0.1:47632/health" -TimeoutSec 2
    if($h.ok -and $h.mediaReady){$mediaOk=$true;break}
  }catch{}
  Start-Sleep -Milliseconds 300
}
if(-not $mediaOk){
  $log=Join-Path $Logs "kanmedia-server.log"
  if(Test-Path $log){ Get-Content $log -Tail 25 }
  throw "KanMedia chua khởi dong duoc."
}

# Ghi dung manifest đã cai để lần sau chỉ cap nhat thanh phan thay doi.
Copy-Item -LiteralPath $ManifestPath -Destination $InstalledPath -Force
try{ Copy-Item -LiteralPath $MyInvocation.MyCommand.Path -Destination (Join-Path $Root "install.ps1") -Force }catch{}
Remove-Item -Recurse -Force $TempDir -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  KANBAN TOOLS DA SAN SANG" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host "  - Alt+C / Alt+X va nut CHUP"
Write-Host "  - KanMedia: Tai / Chuyen doi / Edit Media"
Write-Host "  - Ho tro ky PDF bang USB Token"
Write-Host "  - Cap nhat theo tung thanh phan, khong tai lai neu khong can"
Write-Host ""
