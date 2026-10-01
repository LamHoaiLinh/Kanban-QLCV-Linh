
param([Parameter(Mandatory=$true)][string]$JobId)
$ErrorActionPreference='Stop'
$Root=Join-Path $env:LOCALAPPDATA 'KanBanTools'
$Jobs=Join-Path $Root 'jobs';$Uploads=Join-Path $Root 'uploads';$Bin=Join-Path $Root 'media\bin'
$Python=Join-Path $Root '.venv\Scripts\python.exe';$Ffmpeg=Join-Path $Bin 'ffmpeg.exe';$Ffprobe=Join-Path $Bin 'ffprobe.exe'
$Downloads=Join-Path ([Environment]::GetFolderPath('UserProfile')) 'Downloads\KanMedia'
$LocalNode=Join-Path $Root 'media\node\node.exe';if(Test-Path $LocalNode){$env:PATH=(Split-Path $LocalNode -Parent)+';'+$env:PATH}
$RequestPath=Join-Path $Jobs ($JobId+'.request.json');$StatusPath=Join-Path $Jobs ($JobId+'.status.json');$CancelPath=Join-Path $Jobs ($JobId+'.cancel')
New-Item -ItemType Directory -Force -Path $Downloads | Out-Null
$script:WorkerPid=$PID;$script:ChildPid=0
function Set-Status([string]$state,[double]$percent,[string]$message,[string]$current='',[int]$index=0,[int]$total=0,[string]$output='',[string]$error=''){
 $o=[ordered]@{ok=($state -ne 'error');state=$state;percent=[Math]::Max(0,[Math]::Min(100,[Math]::Round($percent,1)));message=$message;current=$current;index=$index;total=$total;output=$output;error=$error;workerPid=$script:WorkerPid;childPid=$script:ChildPid;updated=(Get-Date).ToString('o')}
 $tmp=$StatusPath+'.tmp';$o|ConvertTo-Json -Compress|Set-Content -Encoding UTF8 $tmp;Move-Item $tmp $StatusPath -Force
}
function Check-Cancel(){if(Test-Path $CancelPath){throw [OperationCanceledException]::new('Đã hủy tác vụ.')}}
function Q([string]$s){$q=[char]34;return $q+($s -replace '"','\"')+$q}
function Run-Lines([string]$exe,[string[]]$args,[scriptblock]$onLine,[switch]$AllowFail){
 Check-Cancel;$parts=New-Object System.Collections.Generic.List[string];$parts.Add((Q $exe));foreach($a in $args){$parts.Add((Q ([string]$a)))}
 $cmd=($parts -join ' ')+' 2>&1';$q=[char]34
 $psi=New-Object Diagnostics.ProcessStartInfo;$psi.FileName=$env:ComSpec;$psi.Arguments='/d /s /c '+$q+$cmd+$q;$psi.UseShellExecute=$false;$psi.CreateNoWindow=$true;$psi.RedirectStandardOutput=$true
 $p=New-Object Diagnostics.Process;$p.StartInfo=$psi;[void]$p.Start();$script:ChildPid=$p.Id
 while(-not $p.StandardOutput.EndOfStream){$line=$p.StandardOutput.ReadLine();if($line){& $onLine $line};Check-Cancel}
 $p.WaitForExit();$code=$p.ExitCode;$script:ChildPid=0;Check-Cancel
 if($code -ne 0 -and -not $AllowFail){throw 'Tiến trình xử lý kết thúc với mã '+$code+'.'};return $code
}
function Read-Upload([string]$id){$p=Join-Path $Uploads ($id+'.json');if(-not(Test-Path $p)){throw 'Không tìm thấy file đã nhận.'};return Get-Content -Raw $p|ConvertFrom-Json}
function Safe([string]$s){if([string]::IsNullOrWhiteSpace($s)){return ''};foreach($c in [IO.Path]::GetInvalidFileNameChars()){$s=$s.Replace([string]$c,'_')};$s=$s.Trim().TrimEnd('.');if($s.Length -gt 150){$s=$s.Substring(0,150)};return $s}
function Unique-Path([string]$dir,[string]$name,[string]$ext){$p=Join-Path $dir ($name+$ext);$i=2;while(Test-Path $p){$p=Join-Path $dir ($name+' ('+$i+')'+$ext);$i++};return $p}
function Duration([string]$path){try{$x=& $Ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 $path 2>$null;return [double]$x}catch{return 0}}
function Rename-FromMetadata([string]$path){
 if(-not(Test-Path $path)){return $path}
 try{
  $j=& $Ffprobe -v quiet -print_format json -show_format $path 2>$null|Out-String|ConvertFrom-Json;$tags=$j.format.tags
  $title=Safe ([string]$tags.title);$artist=Safe ([string]$tags.artist);if(-not $artist){$artist=Safe ([string]$tags.album_artist)}
  if(-not $title){return $path};$base=if($artist){$artist+' - '+$title}else{$title};$ext=[IO.Path]::GetExtension($path);$dst=Unique-Path ([IO.Path]::GetDirectoryName($path)) $base $ext
  if($dst -ne $path){Move-Item -LiteralPath $path -Destination $dst -Force;return $dst}
 }catch{};return $path
}
function Resolve-Height($formats,[string]$quality){
 $hs=@($formats|ForEach-Object{if($_.height){[int]$_.height}}|Where-Object{$_ -gt 0}|Sort-Object -Unique);if(-not $hs.Count){return 0}
 if($quality -eq 'ultra'){return ($hs|Measure-Object -Maximum).Maximum}
 $want=1080;$cap=1440;if($quality -eq 'medium'){$want=720;$cap=1080};if($quality -eq 'low'){$want=480;$cap=720}
 $higher=@($hs|Where-Object{$_ -ge $want -and $_ -le $cap}|Sort-Object);if($higher.Count){return $higher[0]}
 $lower=@($hs|Where-Object{$_ -lt $want}|Sort-Object -Descending);if($lower.Count){return $lower[0]}
 return ($hs|Measure-Object -Maximum).Maximum
}
function Yt-Info([string]$url){$old=$env:PATH;$node=if(Test-Path $LocalNode){$LocalNode}else{(Get-Command node.exe -ErrorAction SilentlyContinue).Source};if($node){$env:PATH=(Split-Path $node -Parent)+';'+$old};try{return (& $Python -m yt_dlp --no-playlist --skip-download --js-runtimes node -J $url 2>$null|Out-String|ConvertFrom-Json)}finally{$env:PATH=$old}}
function Download-One([string]$url,[string]$kind,[string]$format,[string]$quality,[int]$index,[int]$total,[double]$base,[double]$slice){
 $info=Yt-Info $url;$title=[string]$info.title;if(-not $title){$title='Media '+$index};Set-Status 'running' $base ('Đang tải “'+$title+'” — 0%') $title $index $total
 $tmpl=Join-Path $Downloads '%(title).180B [%(id)s].%(ext)s'
 $args=@('-m','yt_dlp','--js-runtimes','node','--no-playlist','--newline','--no-overwrites','--embed-metadata','--ffmpeg-location',$Bin,'-o',$tmpl,'--progress-template','download:KM_PROGRESS:%(progress._percent_str)s','--print','after_move:KM_FILE:%(filepath)s')
 if($kind -eq 'audio'){
  $codec=$format;if($codec -eq 'm4a'){$codec='m4a'}elseif($codec -eq 'opus'){$codec='opus'}elseif($codec -eq 'flac'){$codec='flac'}elseif($codec -eq 'wav'){$codec='wav'}else{$codec='mp3'}
  $args+=@('-f','bestaudio/best','-x','--audio-format',$codec)
  if($codec -eq 'mp3'){$aq='0';if($quality -eq 'medium'){$aq='4'};if($quality -eq 'low'){$aq='7'};$args+=@('--audio-quality',$aq)}
 }else{
  $h=Resolve-Height $info.formats $quality
  if($h -gt 0){$selector='bestvideo[height='+$h+']+bestaudio/best[height='+$h+']/bestvideo[height<='+$h+']+bestaudio/best[height<='+$h+']';$args+=@('-f',$selector)}
  if($format -eq 'mkv'){$args+=@('--merge-output-format','mkv')}elseif($format -eq 'webm'){$args+=@('--merge-output-format','webm')}else{$args+=@('--merge-output-format','mp4','--remux-video','mp4')}
 }
 $args+=$url;$script:file=''
 Run-Lines $Python $args {param($line)
  if($line -match 'KM_PROGRESS:\s*([0-9.]+)%'){$p=[double]$Matches[1];Set-Status 'running' ($base+$slice*$p/100) ('Đang tải “'+$title+'” — '+[Math]::Round($p)+'%') $title $index $total}
  elseif($line -match '^KM_FILE:(.+)$'){$script:file=$Matches[1].Trim()}
 }
 if(-not $script:file){$guess=Get-ChildItem $Downloads -File|Sort-Object LastWriteTime -Descending|Select-Object -First 1;if($guess){$script:file=$guess.FullName}}
 if($script:file){$script:file=Rename-FromMetadata $script:file};return $script:file
}
function Ffmpeg-Run([string]$input,[string[]]$args,[double]$duration,[double]$base,[double]$slice,[string]$label,[string]$current='',[int]$index=0,[int]$total=0,[switch]$AllowFail){
 $out=[string]$args[$args.Count-1];$opts=@();if($args.Count -gt 1){$opts=@($args[0..($args.Count-2)])};$all=@('-hide_banner','-y','-i',$input)+$opts+@('-progress','pipe:1','-nostats',$out)
 $code=Run-Lines $Ffmpeg $all {param($line)if($line -match '^out_time_(ms|us)=([0-9]+)$' -and $duration -gt 0){$p=[Math]::Min(99,([double]$Matches[2]/($duration*1000000))*100);Set-Status 'running' ($base+$slice*$p/100) ($label+' — '+[Math]::Round($p)+'%') $current $index $total}elseif($line -eq 'progress=end'){Set-Status 'running' ($base+$slice) ($label+' — 100%') $current $index $total}} -AllowFail:$AllowFail
 return $code
}
function Convert-One($meta,[string]$format,[string]$quality,[double]$base,[double]$slice,[int]$index,[int]$total){
 $src=[string]$meta.path;$name=Safe ([IO.Path]::GetFileNameWithoutExtension([string]$meta.name));$ext='.'+$format;$dst=Unique-Path $Downloads $name $ext;$dur=Duration $src;$label='Đang chuyển “'+[string]$meta.name+'”';Set-Status 'running' $base $label ([string]$meta.name) $index $total
 if($format -in @('mp4','mkv','webm')){
  $copyArgs=@('-map','0?','-c','copy',$dst);$code=Ffmpeg-Run $src $copyArgs $dur $base $slice $label ([string]$meta.name) $index $total -AllowFail
  if($code -eq 0 -and (Test-Path $dst)){return $dst};Remove-Item $dst -Force -ErrorAction SilentlyContinue
  $crf='23';if($quality -eq 'high'){$crf='18'};if($quality -eq 'light'){$crf='29'}
  if($format -eq 'webm'){$a=@('-c:v','libvpx-vp9','-crf',$crf,'-b:v','0','-c:a','libopus','-b:a','128k',$dst)}
  else{$a=@('-c:v','libx264','-preset','medium','-crf',$crf,'-c:a','aac','-b:a','160k',$dst)}
  Ffmpeg-Run $src $a $dur $base $slice $label ([string]$meta.name) $index $total|Out-Null
 }else{
  if($format -eq 'wav'){$a=@('-vn','-c:a','pcm_s16le',$dst)}
  elseif($format -eq 'flac'){$a=@('-vn','-c:a','flac',$dst)}
  elseif($format -eq 'm4a'){$a=@('-vn','-c:a','aac','-b:a',$(if($quality -eq 'high'){'256k'}elseif($quality -eq 'light'){'128k'}else{'192k'}),$dst)}
  elseif($format -eq 'ogg'){$a=@('-vn','-c:a','libvorbis','-q:a',$(if($quality -eq 'high'){'7'}elseif($quality -eq 'light'){'3'}else{'5'}),$dst)}
  else{$a=@('-vn','-c:a','libmp3lame','-q:a',$(if($quality -eq 'high'){'0'}elseif($quality -eq 'light'){'6'}else{'3'}),$dst)}
  Ffmpeg-Run $src $a $dur $base $slice $label|Out-Null
 }
 return (Rename-FromMetadata $dst)
}
function Edit-One($meta,$p){
 $src=[string]$meta.path;$dur=Duration $src;$start=[double]$p.start;$end=[double]$p.end;if($end -le 0 -or $end -gt $dur){$end=$dur};if($start -lt 0){$start=0}
 $extract=[bool]$p.extractMp3;$mute=[bool]$p.mute;$speed=[double]$p.speed;if($speed -le 0){$speed=1};$vol=[double]$p.volume;if($vol -lt 0){$vol=1}
 $baseName=Safe ([IO.Path]::GetFileNameWithoutExtension([string]$meta.name));$isAudio=([string]$meta.type).StartsWith('audio/');$ext=if($extract -or $isAudio){'.mp3'}else{'.mp4'};$dst=Unique-Path $Downloads ($baseName+' - edited') $ext
 $outDur=$dur
 $args=New-Object System.Collections.Generic.List[string]
 if([string]$p.cut -eq 'keep' -and $end -gt $start){$args.Add('-ss');$args.Add([string]$start);$args.Add('-to');$args.Add([string]$end);$outDur=$end-$start}
 $vf=New-Object System.Collections.Generic.List[string];$af=New-Object System.Collections.Generic.List[string]
 if($speed -ne 1){if(-not $isAudio -and -not $extract){$vf.Add('setpts=PTS/'+$speed)};$af.Add('atempo='+$speed);$outDur=$outDur/$speed}
 if([bool]$p.normalize){$af.Add('loudnorm=I=-16:TP=-1.5:LRA=11')}elseif($vol -ne 1){$af.Add('volume='+$vol)}
 if([double]$p.fadeIn -gt 0){$af.Add('afade=t=in:st=0:d='+[double]$p.fadeIn)}
 if([double]$p.fadeOut -gt 0){$fo=[Math]::Max(0,$outDur-[double]$p.fadeOut);$af.Add('afade=t=out:st='+$fo+':d='+[double]$p.fadeOut)}
 if([string]$p.cut -eq 'remove' -and $end -gt $start){
  if($isAudio -or $extract){$filter='[0:a]aselect=not(between(t\,'+$start+'\,'+$end+')),asetpts=N/SR/TB[a]';if($af.Count){$filter=$filter+';[a]'+($af -join ',')+'[ao]';$args.Add('-filter_complex');$args.Add($filter);$args.Add('-map');$args.Add('[ao]')}else{$args.Add('-filter_complex');$args.Add($filter);$args.Add('-map');$args.Add('[a]')}}
  else{
   $filter='[0:v]select=not(between(t\,'+$start+'\,'+$end+')),setpts=N/FRAME_RATE/TB';if($vf.Count){$filter=$filter+','+($vf -join ',')};$filter=$filter+'[v];[0:a]aselect=not(between(t\,'+$start+'\,'+$end+')),asetpts=N/SR/TB';if($af.Count){$filter=$filter+','+($af -join ',')};$filter=$filter+'[a]'
   $args.Add('-filter_complex');$args.Add($filter);$args.Add('-map');$args.Add('[v]');$args.Add('-map');$args.Add('[a]')
  };$outDur=($dur-($end-$start))/$speed
 }else{
  if($vf.Count){$args.Add('-vf');$args.Add(($vf -join ','))};if($af.Count -and -not $mute){$args.Add('-af');$args.Add(($af -join ','))}
 }
 if($extract){$args.Add('-vn');$args.Add('-c:a');$args.Add('libmp3lame');$args.Add('-q:a');$args.Add('0')}
 elseif($isAudio){$args.Add('-c:a');$args.Add('libmp3lame');$args.Add('-q:a');$args.Add('2')}
 else{$args.Add('-c:v');$args.Add('libx264');$args.Add('-preset');$args.Add('medium');$args.Add('-crf');$args.Add('20');if($mute){$args.Add('-an')}else{$args.Add('-c:a');$args.Add('aac');$args.Add('-b:a');$args.Add('160k')}}
 $args.Add($dst);Ffmpeg-Run $src $args $outDur 5 94 ('Đang chỉnh “'+[string]$meta.name+'”') ([string]$meta.name) 1 1|Out-Null;return (Rename-FromMetadata $dst)
}
try{
 if(-not(Test-Path $RequestPath)){throw 'Không tìm thấy yêu cầu tác vụ.'};$req=Get-Content -Raw $RequestPath|ConvertFrom-Json;$mode=[string]$req.mode;$p=$req.payload
 Set-Status 'running' 1 'Đang chuẩn bị…'
 if($mode -eq 'download'){
  $urls=@($p.urls);if(-not $urls.Count){throw 'Không có link để tải.'};$last='';$slice=98/$urls.Count
  for($i=0;$i -lt $urls.Count;$i++){Check-Cancel;$last=Download-One ([string]$urls[$i]) ([string]$p.kind) ([string]$p.format) ([string]$p.quality) ($i+1) $urls.Count (1+$slice*$i) $slice}
  Set-Status 'done' 100 'Hoàn tất.' '' 0 $urls.Count $last
 }elseif($mode -eq 'convert'){
  $ids=@($p.uploadIds);if(-not $ids.Count){throw 'Không có file để chuyển.'};$last='';$slice=98/$ids.Count
  for($i=0;$i -lt $ids.Count;$i++){Check-Cancel;$m=Read-Upload ([string]$ids[$i]);$last=Convert-One $m ([string]$p.format) ([string]$p.quality) (1+$slice*$i) $slice ($i+1) $ids.Count}
  Set-Status 'done' 100 'Hoàn tất.' '' 0 $ids.Count $last
 }elseif($mode -eq 'edit'){
  $m=Read-Upload ([string]$p.uploadId);$last=Edit-One $m $p;Set-Status 'done' 100 'Hoàn tất.' '' 0 1 $last
 }else{throw 'Loại tác vụ không hợp lệ.'}
}catch [OperationCanceledException]{Set-Status 'cancelled' 0 'Đã hủy tác vụ.'}
catch{Set-Status 'error' 0 'Tác vụ không hoàn tất.' '' 0 0 '' $_.Exception.Message}
finally{$script:ChildPid=0}
