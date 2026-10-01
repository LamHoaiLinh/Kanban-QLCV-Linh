
param([int]$Port=47632)
$ErrorActionPreference='Stop'
$Root=Join-Path $env:LOCALAPPDATA 'KanBanTools';$Runtime=Join-Path $Root 'runtime';$Jobs=Join-Path $Root 'jobs';$Uploads=Join-Path $Root 'uploads';$Bin=Join-Path $Root 'media\bin'
$Python=Join-Path $Root '.venv\Scripts\python.exe';$Ffmpeg=Join-Path $Bin 'ffmpeg.exe';$Ffprobe=Join-Path $Bin 'ffprobe.exe';$Worker=Join-Path $Runtime 'kanmedia-worker.ps1';$Installer=Join-Path $Root 'KanTool.bat'
$Downloads=Join-Path ([Environment]::GetFolderPath('UserProfile')) 'Downloads\KanMedia'
New-Item -ItemType Directory -Force -Path $Root,$Runtime,$Jobs,$Uploads,$Bin,$Downloads|Out-Null
$script:StopServer=$false;$script:ResponseOrigin='https://lamhoailinh.github.io'
function Origin-Allowed([string]$o){if([string]::IsNullOrWhiteSpace($o)){return $true};return $o -eq 'https://lamhoailinh.github.io' -or $o -match '^http://(localhost|127\.0\.0\.1)(:\d+)?$'}
function JsonBytes($o){return [Text.Encoding]::UTF8.GetBytes(($o|ConvertTo-Json -Depth 15 -Compress))}
function Cors(){return @{'Access-Control-Allow-Origin'=$script:ResponseOrigin;'Access-Control-Allow-Methods'='GET, POST, OPTIONS';'Access-Control-Allow-Headers'='Content-Type, X-KanBan-Agent, X-KanBan-File-Name, X-KanBan-File-Type';'Access-Control-Allow-Private-Network'='true';'Private-Network-Access-Name'='kanban-media-agent';'Private-Network-Access-ID'='4b:4d:41:00:01';'Cache-Control'='no-store'}}
function WriteResponse($stream,[int]$status,[string]$type,[byte[]]$body){
 $nl=[char]13+[char]10;$reason='OK';if($status -eq 201){$reason='Created'}elseif($status -eq 204){$reason='No Content'}elseif($status -eq 400){$reason='Bad Request'}elseif($status -eq 403){$reason='Forbidden'}elseif($status -eq 404){$reason='Not Found'}elseif($status -eq 409){$reason='Conflict'}elseif($status -eq 500){$reason='Internal Server Error'}
 $sb=New-Object Text.StringBuilder;[void]$sb.Append('HTTP/1.1 '+$status+' '+$reason+$nl);[void]$sb.Append('Content-Type: '+$type+$nl);[void]$sb.Append('Content-Length: '+$body.Length+$nl);[void]$sb.Append('Connection: close'+$nl)
 $h=Cors;foreach($k in $h.Keys){[void]$sb.Append($k+': '+$h[$k]+$nl)};[void]$sb.Append($nl);$head=[Text.Encoding]::ASCII.GetBytes($sb.ToString());$stream.Write($head,0,$head.Length);if($body.Length){$stream.Write($body,0,$body.Length)};$stream.Flush()
}
function WriteJson($stream,$obj,[int]$status=200){WriteResponse $stream $status 'application/json; charset=utf-8' (JsonBytes $obj)}
function ReadHeaders($stream){
 $b=New-Object 'System.Collections.Generic.List[byte]'
 while($b.Count -lt 65536){$v=$stream.ReadByte();if($v -lt 0){break};$b.Add([byte]$v);$n=$b.Count;if($n -ge 4 -and $b[$n-4]-eq 13 -and $b[$n-3]-eq 10 -and $b[$n-2]-eq 13 -and $b[$n-1]-eq 10){break}}
 if(-not $b.Count){return $null};$nl=[char]13+[char]10;$txt=[Text.Encoding]::ASCII.GetString($b.ToArray());$lines=$txt -split $nl;$first=$lines[0] -split ' ',3;if($first.Count -lt 2){throw 'Yêu cầu HTTP không hợp lệ.'}
 $h=@{};for($i=1;$i -lt $lines.Count;$i++){if(-not $lines[$i]){continue};$p=$lines[$i].IndexOf(':');if($p -gt 0){$h[$lines[$i].Substring(0,$p).Trim().ToLowerInvariant()]=$lines[$i].Substring($p+1).Trim()}}
 return [pscustomobject]@{Method=$first[0].ToUpperInvariant();Target=$first[1];Headers=$h}
}
function ReadBody($stream,$headers,[int64]$max=8388608){
 $len=0;if($headers['content-length']){$len=[int64]$headers['content-length']};if($len -le 0){return [byte[]]@()};if($len -gt $max){throw 'Dữ liệu gửi lên quá lớn.'}
 $buf=New-Object byte[] $len;$off=0;while($off -lt $len){$r=$stream.Read($buf,$off,[int][Math]::Min(1048576,$len-$off));if($r -le 0){break};$off+=$r};if($off -ne $len){throw 'Dữ liệu gửi lên bị thiếu.'};return $buf
}
function ReadJson($stream,$headers){$raw=ReadBody $stream $headers;if(-not $raw.Length){return @{}};return [Text.Encoding]::UTF8.GetString($raw)|ConvertFrom-Json}
function SafeName([string]$n){if([string]::IsNullOrWhiteSpace($n)){return 'media.bin'};foreach($c in [IO.Path]::GetInvalidFileNameChars()){$n=$n.Replace([string]$c,'_')};$n=$n.Trim().TrimEnd('.');if($n.Length -gt 180){$e=[IO.Path]::GetExtension($n);$b=[IO.Path]::GetFileNameWithoutExtension($n);$n=$b.Substring(0,[Math]::Min(150,$b.Length))+$e};return $n}
function NodePath(){try{return (Get-Command node.exe -ErrorAction Stop).Source}catch{return ''}}
function Health(){
 $node=NodePath;$yt='';$fv='';try{if(Test-Path $Python){$yt=(& $Python -m yt_dlp --version 2>$null|Out-String).Trim()}}catch{};try{if(Test-Path $Ffmpeg){$fv=((& $Ffmpeg -version 2>$null|Select-Object -First 1)|Out-String).Trim()}}catch{}
 $nv='';try{if($node){$nv=(& $node --version 2>$null|Out-String).Trim()}}catch{}
 return [ordered]@{ok=$true;version='KanMedia Agent 1.0';mediaReady=((Test-Path $Python) -and (Test-Path $Ffmpeg) -and (Test-Path $Ffprobe) -and [bool]$node -and [bool]$yt);ytDlp=$yt;ffmpeg=$fv;node=$nv;downloads=$Downloads;port=$Port}
}
function JobPath([string]$id){return Join-Path $Jobs ($id+'.status.json')}
function RunningJobs(){foreach($f in Get-ChildItem $Jobs -Filter '*.status.json' -ErrorAction SilentlyContinue){try{$j=Get-Content -Raw $f.FullName|ConvertFrom-Json;if($j.state -in @('queued','running')){return $true}}catch{}};return $false}
function StartJob([string]$mode,$payload){
 $id=[guid]::NewGuid().ToString('N');$req=[ordered]@{jobId=$id;mode=$mode;created=(Get-Date).ToString('o');payload=$payload};$req|ConvertTo-Json -Depth 18|Set-Content -Encoding UTF8 (Join-Path $Jobs ($id+'.request.json'))
 @{state='queued';percent=0;message='Đang chuẩn bị…';workerPid=0;childPid=0;mode=$mode}|ConvertTo-Json -Compress|Set-Content -Encoding UTF8 (JobPath $id)
 $args='-NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "'+$Worker+'" -JobId "'+$id+'"';$p=Start-Process powershell.exe -ArgumentList $args -WindowStyle Hidden -PassThru
 return @{ok=$true;jobId=$id;workerPid=$p.Id}
}
function SaveUpload($stream,$headers){
 $len=0;if($headers['content-length']){$len=[int64]$headers['content-length']};if($len -le 0){throw 'Không đọc được dung lượng file.'};if($len -gt 8589934592){throw 'File lớn hơn giới hạn 8 GB.'}
 $name='media.bin';if($headers['x-kanban-file-name']){$name=[uri]::UnescapeDataString($headers['x-kanban-file-name'])};$name=SafeName $name;$ext=[IO.Path]::GetExtension($name);$id=[guid]::NewGuid().ToString('N');$path=Join-Path $Uploads ($id+$ext)
 $fs=[IO.File]::Open($path,[IO.FileMode]::Create,[IO.FileAccess]::Write,[IO.FileShare]::None)
 try{$buf=New-Object byte[] 1048576;$left=$len;while($left -gt 0){$want=[int][Math]::Min($buf.Length,$left);$n=$stream.Read($buf,0,$want);if($n -le 0){throw 'Kết nối bị ngắt khi gửi file.'};$fs.Write($buf,0,$n);$left-=$n}}finally{$fs.Dispose()}
 $m=[ordered]@{uploadId=$id;name=$name;path=$path;size=$len;type=$headers['x-kanban-file-type'];created=(Get-Date).ToString('o')};$m|ConvertTo-Json -Compress|Set-Content -Encoding UTF8 (Join-Path $Uploads ($id+'.json'));return $m
}
function Probe($p){
 $urls=@($p.urls)|Where-Object{$_ -is [string] -and $_ -match '^https?://'}|Select-Object -First 20;if(-not $urls.Count){throw 'Không có link hợp lệ.'};$node=NodePath;if(-not(Test-Path $Python)){throw 'Thiếu lõi yt-dlp.'};if(-not $node){throw 'Thiếu Node.js 22+.'}
 $old=$env:PATH;$env:PATH=(Split-Path $node -Parent)+';'+$old;$rows=@();$all=New-Object 'System.Collections.Generic.HashSet[int]';$max=0
 try{foreach($u in $urls){$j=& $Python -m yt_dlp --no-playlist --skip-download --js-runtimes node -J $u 2>$null|Out-String|ConvertFrom-Json;$hs=@($j.formats|ForEach-Object{if($_.height){[int]$_.height}}|Sort-Object -Unique);foreach($x in $hs){[void]$all.Add($x);if($x -gt $max){$max=$x}};$rows+=@{url=$u;title=$j.title;duration=$j.duration;heights=$hs;thumbnail=$j.thumbnail}}}finally{$env:PATH=$old}
 return @{ok=$true;items=$rows;heights=@($all|Sort-Object);maxHeight=$max}
}
function CancelJob([string]$id){
 $sp=JobPath $id;if(-not(Test-Path $sp)){return $false};New-Item -ItemType File -Force (Join-Path $Jobs ($id+'.cancel'))|Out-Null
 try{$j=Get-Content -Raw $sp|ConvertFrom-Json;foreach($procId in @($j.childPid,$j.workerPid)){if([int]$procId -gt 0){Start-Process taskkill.exe -ArgumentList ('/PID '+[int]$procId+' /T /F') -WindowStyle Hidden -Wait -ErrorAction SilentlyContinue|Out-Null}}}catch{};return $true
}
$listener=New-Object Net.Sockets.TcpListener([Net.IPAddress]::Loopback,$Port)
try{$listener.Start()}catch{exit 0}
while(-not $script:StopServer){
 try{$client=$listener.AcceptTcpClient()}catch{if($script:StopServer){break}else{continue}};$stream=$client.GetStream()
 try{
  $req=ReadHeaders $stream;if(-not $req){continue};$origin=$req.Headers['origin'];if(Origin-Allowed $origin -and -not [string]::IsNullOrWhiteSpace($origin)){$script:ResponseOrigin=$origin}else{$script:ResponseOrigin='https://lamhoailinh.github.io'}
  if($req.Method -eq 'OPTIONS'){if(Origin-Allowed $origin){WriteResponse $stream 204 'text/plain' ([byte[]]@())}else{WriteJson $stream @{ok=$false;error='Origin không được phép.'} 403};continue}
  if(-not(Origin-Allowed $origin)){WriteJson $stream @{ok=$false;error='Origin không được phép.'} 403;continue}
  if($req.Headers['x-kanban-agent'] -ne 'linh-kanban-v1'){WriteJson $stream @{ok=$false;error='Thiếu mã nhận diện KanBan.'} 403;continue}
  $uri=[uri]('http://127.0.0.1'+$req.Target);$path=$uri.AbsolutePath
  if($req.Method -eq 'GET' -and $path -eq '/health'){WriteJson $stream (Health);continue}
  if($req.Method -eq 'GET' -and $path -match '^/jobs/([a-f0-9]{32})$'){$sp=JobPath $Matches[1];if(Test-Path $sp){WriteJson $stream (Get-Content -Raw $sp|ConvertFrom-Json)}else{WriteJson $stream @{ok=$false;error='Không tìm thấy tác vụ.'} 404};continue}
  if($req.Method -eq 'POST' -and $path -eq '/media/upload'){try{WriteJson $stream (SaveUpload $stream $req.Headers) 201}catch{WriteJson $stream @{ok=$false;error=$_.Exception.Message} 400};continue}
  if($req.Method -eq 'POST' -and $path -eq '/media/probe'){try{WriteJson $stream (Probe (ReadJson $stream $req.Headers))}catch{WriteJson $stream @{ok=$false;error=$_.Exception.Message} 400};continue}
  if($req.Method -eq 'POST' -and $path -in @('/media/download','/media/convert','/media/edit')){try{$payload=ReadJson $stream $req.Headers;$mode=$path.Split('/')[-1];WriteJson $stream (StartJob $mode $payload) 201}catch{WriteJson $stream @{ok=$false;error=$_.Exception.Message} 400};continue}
  if($req.Method -eq 'POST' -and $path -match '^/jobs/([a-f0-9]{32})/cancel$'){$null=ReadJson $stream $req.Headers;if(CancelJob $Matches[1]){WriteJson $stream @{ok=$true}}else{WriteJson $stream @{ok=$false;error='Không tìm thấy tác vụ.'} 404};continue}
  if($req.Method -eq 'POST' -and $path -eq '/system/open-folder'){$null=ReadJson $stream $req.Headers;Start-Process explorer.exe -ArgumentList ('"'+$Downloads+'"');WriteJson $stream @{ok=$true;path=$Downloads};continue}
  if($req.Method -eq 'POST' -and $path -eq '/system/update'){$null=ReadJson $stream $req.Headers;if(RunningJobs){WriteJson $stream @{ok=$false;error='Hãy chờ tác vụ Media hiện tại hoàn tất rồi cập nhật.'} 409}elseif(Test-Path $Installer){$cmd='"'+$Installer+'" /update';Start-Process $env:ComSpec -ArgumentList '/c',$cmd -WindowStyle Normal;WriteJson $stream @{ok=$true}}else{WriteJson $stream @{ok=$false;error='Không tìm thấy KanTool.bat.'} 404};continue}
  if($req.Method -eq 'POST' -and $path -eq '/shutdown'){$null=ReadJson $stream $req.Headers;WriteJson $stream @{ok=$true};$script:StopServer=$true;$listener.Stop();continue}
  WriteJson $stream @{ok=$false;error='Endpoint không tồn tại.'} 404
 }catch{try{WriteJson $stream @{ok=$false;error=$_.Exception.Message} 500}catch{}}
 finally{try{$stream.Dispose()}catch{};try{$client.Close()}catch{}}
}
try{$listener.Stop()}catch{}
