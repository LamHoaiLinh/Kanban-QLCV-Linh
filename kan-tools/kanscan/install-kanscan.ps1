# KanScan v1.4 - optional isolated Windows addon for KanBan Tools.
param(
  [Parameter(Mandatory=$true)][string]$Root,
  [Parameter(Mandatory=$true)][string]$MainPython,
  [Parameter(Mandatory=$true)][string]$ArchiveSha256
)
$ErrorActionPreference = 'Stop'
$addon = Join-Path $Root 'kanscan'
$appDir = Join-Path $addon 'app'
$venvDir = Join-Path $addon '.venv'
$python = Join-Path $venvDir 'Scripts\python.exe'
$pythonw = Join-Path $venvDir 'Scripts\pythonw.exe'
$marker = Join-Path $addon 'installed.json'
$launch = Join-Path $addon 'launch.vbs'
$registry = 'HKCU:\Software\Classes\kanbanscan'
New-Item -ItemType Directory -Path $addon -Force | Out-Null

function Upgrade-KanScan {
  # Apply existing v1.5 rotation update, then v1.5.1 Windows JPEG lock fix.
  $patch=Join-Path $addon 'upgrade_rotate_v15.py'
  $url='https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/kan-tools/kanscan/upgrade_rotate_v15.py?ts='+([DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds())
  Invoke-WebRequest -UseBasicParsing -Uri $url -OutFile $patch -TimeoutSec 45
  if((Get-Item -LiteralPath $patch).Length -lt 5000){throw 'KanScan rotate update incomplete.'}
  & $python -m py_compile $patch
  if($LASTEXITCODE -ne 0){throw 'KanScan rotate patch has invalid Python syntax.'}
  # Download and validate the isolated WinError 32 corrective patch.
  $winfix=Join-Path $addon 'fix_windows_preview_v151.py'
  $winfixUrl='https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/kan-tools/kanscan/fix_windows_preview_v151.py?ts='+([DateTimeOffset]::UtcNow.ToUnixTimeMilliseconds())
  Invoke-WebRequest -UseBasicParsing -Uri $winfixUrl -OutFile $winfix -TimeoutSec 45
  if((Get-Item -LiteralPath $winfix).Length -lt 3000){throw 'KanScan WinError32 patch incomplete.'}
  & $python -m py_compile $winfix
  if($LASTEXITCODE -ne 0){throw 'KanScan WinError32 patch invalid Python syntax.'}
  $paths=@(
    (Join-Path $appDir 'app.py'),
    (Join-Path $appDir 'templates\index.html'),
    (Join-Path $appDir 'KanScan.py')
  )
  foreach($path in $paths){if(-not (Test-Path -LiteralPath $path)){throw ('Missing KanScan file: ' + $path)}}
  $backup=Join-Path $addon ('rotate-backup-'+[guid]::NewGuid().ToString('N'))
  New-Item -ItemType Directory -Path $backup -Force|Out-Null
  try {
    for($i=0;$i -lt $paths.Count;$i++){
      Copy-Item -LiteralPath $paths[$i] -Destination (Join-Path $backup ($i.ToString()+'.backup')) -Force
    }
    & $python $patch $appDir
    if($LASTEXITCODE -ne 0){throw 'KanScan v1.5 source patch failed.'}
    & $python $winfix $appDir
    if($LASTEXITCODE -ne 0){throw 'KanScan v1.5.1 WinError32 patch failed.'}
    & $python -m py_compile (Join-Path $appDir 'app.py') (Join-Path $appDir 'KanScan.py')
    if($LASTEXITCODE -ne 0){throw 'KanScan v1.5 source invalid.'}
    $body=Get-Content -LiteralPath (Join-Path $appDir 'app.py') -Raw -Encoding UTF8
    $mobile=Get-Content -LiteralPath (Join-Path $appDir 'templates\index.html') -Raw -Encoding UTF8
    if($body -notmatch 'def rotate_page' -or $mobile -notmatch 'rotateLeft'){throw 'KanScan rotate actions not found.'}
    if($body -notmatch 'data = target.read_bytes\(\)' -or $body -notmatch 'send_file\(io.BytesIO\(data\)'){throw 'KanScan safe JPEG preview not found.'}
  } catch {
    for($i=0;$i -lt $paths.Count;$i++){
      $from=Join-Path $backup ($i.ToString()+'.backup')
      if(Test-Path -LiteralPath $from){Copy-Item -LiteralPath $from -Destination $paths[$i] -Force}
    }
    throw
  } finally {
    Remove-Item -LiteralPath $backup -Recurse -Force -ErrorAction SilentlyContinue
  }
  Write-Host '  KanScan v1.5.1: xoay trang va fix WinError32 san sang.' -ForegroundColor Green
}

function Register-KanScan {
  if(-not (Test-Path -LiteralPath $pythonw) -or -not (Test-Path -LiteralPath (Join-Path $appDir 'KanScan.py'))) {
    throw 'KanScan Pythonw/source is missing.'
  }
  $script = Join-Path $appDir 'KanScan.py'
  # pythonw does not open a console. Browser protocol arguments are ignored.
  $vb = @(
    'On Error Resume Next',
    'Set wmi = GetObject("winmgmts:\\.\root\cimv2")',
    'For Each p In wmi.ExecQuery("SELECT Name, CommandLine FROM Win32_Process WHERE Name = ''pythonw.exe''")',
    '  If InStr(1, p.CommandLine, "\kanscan\app\KanScan.py", 1) > 0 Then WScript.Quit 0',
    'Next',
    'Set sh = CreateObject("WScript.Shell")',
    ('sh.Run Chr(34) & "' + $pythonw.Replace('"','""') + '" & Chr(34) & " " & Chr(34) & "' + $script.Replace('"','""') + '" & Chr(34), 0, False')
  ) -join [Environment]::NewLine
  [IO.File]::WriteAllText($launch, $vb, (New-Object System.Text.UTF8Encoding($false)))
  New-Item -Path $registry -Force | Out-Null
  Set-Item -Path $registry -Value 'URL:KanScan'
  New-ItemProperty -Path $registry -Name 'URL Protocol' -PropertyType String -Value '' -Force | Out-Null
  $cmdKey=Join-Path $registry 'shell\open\command'
  New-Item -Path $cmdKey -Force | Out-Null
  Set-Item -Path $cmdKey -Value ('"' + (Join-Path $env:WINDIR 'System32\wscript.exe') + '" "' + $launch + '" "%1"')
}

# Idempotent: existing v1.4 remains untouched on /install, /update and /repair.
if((Test-Path -LiteralPath $marker) -and (Test-Path -LiteralPath $pythonw) -and (Test-Path -LiteralPath (Join-Path $appDir 'templates\index.html'))) {
  try {
    $stored=Get-Content -LiteralPath $marker -Raw -Encoding UTF8 | ConvertFrom-Json
    if($stored.archiveSha256 -eq $ArchiveSha256.ToLowerInvariant()) {
      if($stored.version -in @('1.4','1.5')) {
        Upgrade-KanScan
        $stored.version='1.5.1'
        [IO.File]::WriteAllText($marker,($stored | ConvertTo-Json -Depth 4),[Text.UTF8Encoding]::new($false))
      }
      if($stored.version -eq '1.5.1') {
        Register-KanScan
        Write-Host '  KanScan v1.5.1: da cai, giu nguyen; lam moi lenh mo.' -ForegroundColor DarkGray
        return
      }
    }
  } catch {
    # Upgrade errors must not re-install from ZIP over a working v1.4 copy.
    Write-Host ('  KanScan upgrade failed; keeping current installation: ' + $_.Exception.Message) -ForegroundColor Yellow
    return
  }
}

$locations = @(
  (Join-Path $env:USERPROFILE 'Downloads'),
  (Join-Path $env:USERPROFILE 'Desktop'),
  (Join-Path $env:USERPROFILE 'Documents')
)
try {
  $shell=New-Object -ComObject Shell.Application
  $downloads=$shell.NameSpace('shell:Downloads')
  if($downloads -and $downloads.Self -and $downloads.Self.Path) {
    $locations=@($downloads.Self.Path)+$locations
  }
} catch {}
$zip = $null
foreach($folder in ($locations | Select-Object -Unique)) {
  if(-not (Test-Path -LiteralPath $folder)){continue}
  foreach($item in (Get-ChildItem -LiteralPath $folder -File -Filter 'KanScan_v1.4_Chinh_Rieng_Tung_Anh*.zip' -ErrorAction SilentlyContinue)) {
    try {
      $digest=(Get-FileHash -LiteralPath $item.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
      if($digest -eq $ArchiveSha256.ToLowerInvariant()) { $zip=$item.FullName; break }
    } catch {}
  }
  if($zip){break}
}
if(-not $zip){
  Write-Host '  KanScan v1.4: khong thay ZIP chinh xac trong Downloads/Desktop/Documents - bo qua.' -ForegroundColor Yellow
  Write-Host '  Luu KanScan_v1.4_Chinh_Rieng_Tung_Anh.zip vao Downloads, sau do chay Cap nhat/Sua KanBan Tools.' -ForegroundColor Yellow
  return
}

$staging=Join-Path $addon ('stage-' + [guid]::NewGuid().ToString('N'))
$old=Join-Path $addon ('app-backup-' + [guid]::NewGuid().ToString('N'))
$swapped=$false
try {
  New-Item -ItemType Directory -Path $staging -Force | Out-Null
  Expand-Archive -LiteralPath $zip -DestinationPath $staging -Force
  $source=Join-Path $staging 'KanScan_v1.4'
  foreach($rel in @('KanScan.py','app.py','requirements.txt','templates\index.html')) {
    if(-not (Test-Path -LiteralPath (Join-Path $source $rel))) { throw ('ZIP thieu: ' + $rel) }
  }
  if(-not (Test-Path -LiteralPath $python)) {
    & $MainPython -m venv $venvDir
    if($LASTEXITCODE -ne 0) { throw 'Khong tao duoc venv rieng cho KanScan.' }
  }
  # Dependencies only inside KanScan .venv; never the KanBan shared .venv.
  & $python -m pip --disable-pip-version-check --retries 3 --timeout 40 install -r (Join-Path $source 'requirements.txt')
  if($LASTEXITCODE -ne 0) { throw 'Khong cai duoc thu vien KanScan.' }
  & $python -c 'import flask, cv2, PIL, waitress, qrcode, psutil; import tkinter'
  if($LASTEXITCODE -ne 0) { throw 'Thieu thu vien hoac tkinter cho KanScan.' }
  & $python -m py_compile (Join-Path $source 'KanScan.py') (Join-Path $source 'app.py')
  if($LASTEXITCODE -ne 0) { throw 'Source KanScan khong qua kiem tra cu phap.' }

  if(Test-Path -LiteralPath $appDir){Move-Item -LiteralPath $appDir -Destination $old}
  try { Move-Item -LiteralPath $source -Destination $appDir; $swapped=$true }
  catch {
    if(Test-Path -LiteralPath $old){Move-Item -LiteralPath $old -Destination $appDir}
    throw
  }
  Upgrade-KanScan
  Register-KanScan
  $saved=@{
    version='1.5.1'
    archiveSha256=$ArchiveSha256.ToLowerInvariant()
    installedAt=(Get-Date).ToString('o')
    mode='on-demand'
  }
  [IO.File]::WriteAllText($marker,($saved | ConvertTo-Json -Depth 4),[Text.UTF8Encoding]::new($false))
  Write-Host '  KanScan v1.5.1 da cai rieng. Mo KanBan > CONG CU > KanScan.' -ForegroundColor Green
  if(Test-Path -LiteralPath $old){Remove-Item -LiteralPath $old -Recurse -Force -ErrorAction SilentlyContinue}
} catch {
  if($swapped -and (Test-Path -LiteralPath $old)){
    Remove-Item -LiteralPath $appDir -Force -Recurse -ErrorAction SilentlyContinue
    Move-Item -LiteralPath $old -Destination $appDir -ErrorAction SilentlyContinue
  }
  throw
} finally {
  Remove-Item -LiteralPath $staging -Recurse -Force -ErrorAction SilentlyContinue
}
