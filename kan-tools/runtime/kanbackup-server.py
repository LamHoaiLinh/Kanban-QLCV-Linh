from __future__ import annotations
import argparse, ctypes, json, os, shutil, subprocess, sys, threading
from ctypes import wintypes
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

HOST='127.0.0.1'; PORT=47634; HEADER='linh-kanbackup-v1'; TASK='KanBanTools KanBackup'
ROOT=Path(os.environ.get('LOCALAPPDATA',Path.home()))/'KanBanTools'; DIR=ROOT/'backup'; LOGDIR=ROOT/'logs'
CFGFILE=DIR/'config.json'; STATEFILE=DIR/'state.json'; SECRET=DIR/'repo-secret.dpapi'; KOPIA=DIR/'kopia.exe'; KCONFIG=DIR/'repository.config'; KCACHE=DIR/'cache'; LOG=LOGDIR/'kanbackup-server.log'
ALLOWED={'https://lamhoailinh.github.io','http://localhost','http://127.0.0.1'}
DEFAULT_CFG={'sources':[],'repository':'','scheduleHours':2,'retention':{'hourly':24,'daily':30,'weekly':8,'monthly':12,'annual':3}}
DEFAULT_STATE={'running':False,'lastRun':None,'lastOk':None,'lastMessage':'Chưa có kết quả'}
for p in (DIR,LOGDIR,KCACHE): p.mkdir(parents=True,exist_ok=True)
LOCK=threading.RLock()

def log(s):
    try: LOG.open('a',encoding='utf-8').write(f"[{datetime.now().isoformat(timespec='seconds')}] {s}\n")
    except Exception: pass

def read_json(p,default):
    try: return json.loads(p.read_text(encoding='utf-8'))
    except Exception: return json.loads(json.dumps(default))

def write_json(p,obj):
    t=p.with_suffix(p.suffix+'.tmp'); t.write_text(json.dumps(obj,ensure_ascii=False,indent=2),encoding='utf-8'); t.replace(p)

CFG=read_json(CFGFILE,DEFAULT_CFG); STATE=read_json(STATEFILE,DEFAULT_STATE); STATE['running']=False; write_json(STATEFILE,STATE)

class BLOB(ctypes.Structure): _fields_=[('cbData',wintypes.DWORD),('pbData',ctypes.POINTER(ctypes.c_byte))]
def _blob(data):
    b=ctypes.create_string_buffer(data); return BLOB(len(data),ctypes.cast(b,ctypes.POINTER(ctypes.c_byte))),b

def protect(data):
    src,keep=_blob(data); dst=BLOB(); c=ctypes.windll.crypt32; k=ctypes.windll.kernel32
    if not c.CryptProtectData(ctypes.byref(src),'KanBackup',None,None,None,1,ctypes.byref(dst)): raise ctypes.WinError()
    try:return ctypes.string_at(dst.pbData,dst.cbData)
    finally:k.LocalFree(dst.pbData); _=keep

def unprotect(data):
    src,keep=_blob(data); dst=BLOB(); c=ctypes.windll.crypt32; k=ctypes.windll.kernel32
    if not c.CryptUnprotectData(ctypes.byref(src),None,None,None,None,1,ctypes.byref(dst)): raise ctypes.WinError()
    try:return ctypes.string_at(dst.pbData,dst.cbData)
    finally:k.LocalFree(dst.pbData); _=keep

def save_secret(s): SECRET.write_bytes(protect(s.encode('utf-8')))
def load_secret():
    try:return unprotect(SECRET.read_bytes()).decode('utf-8')
    except Exception:return ''

def kenv(password=None):
    e=os.environ.copy(); e['KOPIA_CACHE_DIRECTORY']=str(KCACHE)
    p=password if password is not None else load_secret()
    if p:e['KOPIA_PASSWORD']=p
    return e

def kopia(args,password=None,timeout=600,check=True):
    if not KOPIA.exists(): raise RuntimeError('Chưa có kopia.exe. Hãy chạy Cập nhật / sửa KanBan Tools.')
    cmd=[str(KOPIA),'--config-file',str(KCONFIG),'--no-progress',*args]
    log('KOPIA '+' '.join(args))
    cp=subprocess.run(cmd,env=kenv(password),text=True,encoding='utf-8',errors='replace',capture_output=True,timeout=timeout,creationflags=getattr(subprocess,'CREATE_NO_WINDOW',0))
    if check and cp.returncode:
        raise RuntimeError((cp.stderr or cp.stdout or f'Kopia lỗi {cp.returncode}').strip()[-1800:])
    return cp

def connected():
    if not KOPIA.exists() or not KCONFIG.exists():return False
    try:return kopia(['repository','status'],timeout=20,check=False).returncode==0
    except Exception:return False

def connect_repo(repo,password,create=False):
    kopia(['repository','disconnect'],timeout=20,check=False)
    cp=kopia(['repository','connect','filesystem','--path',repo],password=password,timeout=60,check=False)
    if cp.returncode==0:return
    if not create:raise RuntimeError((cp.stderr or cp.stdout or 'Không kết nối được repository.').strip())
    Path(repo).mkdir(parents=True,exist_ok=True)
    kopia(['repository','create','filesystem','--path',repo],password=password,timeout=120)

def ensure_repo():
    repo=str(CFG.get('repository') or '').strip()
    if not repo:raise RuntimeError('Chưa chọn nơi lưu backup.')
    if connected():return
    pw=load_secret()
    if not pw:raise RuntimeError('Thiếu mật khẩu repository. Hãy Lưu thiết lập lại.')
    connect_repo(repo,pw,False)

def ask_password():
    import tkinter as tk
    from tkinter import simpledialog
    r=tk.Tk();r.withdraw();r.attributes('-topmost',True)
    try:return simpledialog.askstring('KanBackup · Kopia','Nhập mật khẩu repository Kopia.\n\nNếu là repository mới, mật khẩu này sẽ dùng để tạo mới.\nHãy lưu mật khẩu ở nơi an toàn.',show='*',parent=r)
    finally:r.destroy()

def pick(title,initial=''):
    import tkinter as tk
    from tkinter import filedialog
    r=tk.Tk();r.withdraw();r.attributes('-topmost',True)
    try:
        kw={'title':title,'mustexist':True}
        if initial and Path(initial).exists():kw['initialdir']=initial
        return filedialog.askdirectory(parent=r,**kw) or ''
    finally:r.destroy()

def set_state(**kw):
    with LOCK: STATE.update(kw);write_json(STATEFILE,STATE)

def now():return datetime.now(timezone.utc).astimezone().isoformat(timespec='seconds')

def apply_policy(ret):
    args=['policy','set','--global']
    for k,f in [('hourly','--keep-hourly'),('daily','--keep-daily'),('weekly','--keep-weekly'),('monthly','--keep-monthly'),('annual','--keep-annual')]:args += [f,str(max(0,int(ret.get(k,0) or 0)))]
    return kopia(args,timeout=60,check=False)

def schedule(hours):
    flags=getattr(subprocess,'CREATE_NO_WINDOW',0); subprocess.run(['schtasks','/Delete','/TN',TASK,'/F'],capture_output=True,creationflags=flags)
    if hours<=0:return
    py=Path(sys.executable); pyw=py.with_name('pythonw.exe'); py=pyw if pyw.exists() else py
    action=f'"{py}" "{Path(__file__).resolve()}" --scheduled-backup'
    cp=subprocess.run(['schtasks','/Create','/SC','HOURLY','/MO',str(max(1,hours)),'/TN',TASK,'/TR',action,'/F'],text=True,encoding='utf-8',errors='replace',capture_output=True,creationflags=flags)
    if cp.returncode:raise RuntimeError((cp.stderr or cp.stdout or 'Không tạo được lịch Windows.').strip())

def setup(body):
    global CFG
    src=[]
    for x in body.get('sources') or []:
        s=str(x).strip()
        if s and s not in src:
            if not Path(s).exists():raise RuntimeError('Không tìm thấy thư mục nguồn: '+s)
            src.append(s)
    if not src:raise RuntimeError('Hãy chọn ít nhất một thư mục nguồn.')
    repo=str(body.get('repository') or '').strip()
    if not repo:raise RuntimeError('Hãy chọn nơi lưu backup.')
    Path(repo).mkdir(parents=True,exist_ok=True)
    hours=max(0,min(24,int(body.get('scheduleHours',2) or 0))); ret=DEFAULT_CFG['retention'].copy()
    for k in ret:
        try:ret[k]=max(0,int((body.get('retention') or {}).get(k,ret[k])))
        except Exception:pass
    pw=ask_password()
    if pw is None:raise RuntimeError('Đã hủy nhập mật khẩu repository.')
    if len(pw)<8:raise RuntimeError('Mật khẩu repository nên có ít nhất 8 ký tự.')
    connect_repo(repo,pw,True);save_secret(pw);warn=apply_policy(ret)
    CFG={'sources':src,'repository':repo,'scheduleHours':hours,'retention':ret};write_json(CFGFILE,CFG);schedule(hours)
    msg='Đã lưu thiết lập KanBackup.'
    if warn.returncode:msg+=' Kopia đã kết nối nhưng chưa áp được retention; backup vẫn hoạt động.'
    return msg

def backup_job():
    with LOCK:
        if STATE.get('running'):return
        STATE.update(running=True,lastMessage='Kopia đang backup…');write_json(STATEFILE,STATE)
    try:
        ensure_repo();sources=[str(Path(x)) for x in CFG.get('sources',[]) if str(x).strip()]
        if not sources:raise RuntimeError('Chưa có thư mục nguồn.')
        for s in sources:
            if not Path(s).exists():raise RuntimeError('Không tìm thấy nguồn: '+s)
            kopia(['snapshot','create',s],timeout=86400)
        set_state(running=False,lastRun=now(),lastOk=True,lastMessage=f'Backup hoàn tất · {len(sources)} nguồn')
    except Exception as e:log('BACKUP ERROR '+repr(e));set_state(running=False,lastRun=now(),lastOk=False,lastMessage=str(e)[:1200])

def start_backup():
    with LOCK:
        if STATE.get('running'):return False
        STATE.update(running=True,lastMessage='Đang chuẩn bị backup…');write_json(STATEFILE,STATE)
    def work():
        with LOCK:STATE['running']=False;write_json(STATEFILE,STATE)
        backup_job()
    threading.Thread(target=work,daemon=True,name='KanBackup').start();return True

def free(path):
    try:return int(shutil.disk_usage(path).free)
    except Exception:return 0

def version():
    if not KOPIA.exists():return 'Kopia chưa cài'
    cp=kopia(['--version'],timeout=15,check=False);return (cp.stdout or cp.stderr or 'Kopia').strip().splitlines()[0][:160]

def first(d,*keys,default=None):
    for k in keys:
        if isinstance(d,dict) and d.get(k) is not None:return d[k]
    return default

def snapshots():
    ensure_repo();cp=kopia(['snapshot','list','--json','--all'],timeout=120);data=json.loads(cp.stdout or '[]')
    if isinstance(data,dict):data=data.get('snapshots') or data.get('items') or []
    out=[]
    for x in data if isinstance(data,list) else []:
        if not isinstance(x,dict):continue
        so=x.get('source') if isinstance(x.get('source'),dict) else {}; root=x.get('rootEntry') if isinstance(x.get('rootEntry'),dict) else {}; st=x.get('stats') if isinstance(x.get('stats'),dict) else {}
        source=first(so,'path',default='') or first(x,'sourcePath',default='')
        out.append({'id':str(first(x,'id','snapshotID','snapshotId','manifestID',default='') or ''),'startTime':first(x,'startTime','time',default=None),'source':str(source or ''),'rootObjectId':str(first(x,'rootObjectID','rootObjectId',default=first(root,'obj','objectID','objectId',default='')) or ''),'files':int(first(st,'fileCount','files',default=first(x,'fileCount',default=0)) or 0),'bytes':int(first(st,'totalFileSize','bytes',default=first(x,'totalFileSize',default=0)) or 0),'newPackedBytes':int(first(st,'newPackedBytes',default=first(x,'newPackedBytes',default=0)) or 0)})
    out.sort(key=lambda r:str(r.get('startTime') or ''),reverse=True);return out

def restore(body):
    ensure_repo(); obj=str(body.get('rootObjectId') or body.get('snapshotId') or '').strip(); parent=Path(str(body.get('targetParent') or ''))
    if not obj:raise RuntimeError('Thiếu rootObjectId/snapshotId.')
    if not parent.exists():raise RuntimeError('Thư mục đích không tồn tại.')
    target=parent/('KanRestore_'+datetime.now().strftime('%Y%m%d_%H%M%S'));target.mkdir(parents=False,exist_ok=False)
    try:kopia(['snapshot','restore',obj,str(target)],timeout=86400)
    except Exception:
        try:
            if not any(target.iterdir()):target.rmdir()
        except Exception:pass
        raise
    return target

class Handler(BaseHTTPRequestHandler):
    server_version='KanBackup/1.1'
    def log_message(self,fmt,*a):log('HTTP '+fmt%a)
    def cors(self):
        o=self.headers.get('Origin','')
        if o in ALLOWED:self.send_header('Access-Control-Allow-Origin',o)
        elif not o:self.send_header('Access-Control-Allow-Origin','*')
        self.send_header('Vary','Origin');self.send_header('Access-Control-Allow-Headers','Content-Type, X-KanBan-Agent');self.send_header('Access-Control-Allow-Methods','GET, POST, OPTIONS');self.send_header('Access-Control-Allow-Private-Network','true')
    def sendj(self,code,obj):
        b=json.dumps(obj,ensure_ascii=False).encode();self.send_response(code);self.cors();self.send_header('Content-Type','application/json; charset=utf-8');self.send_header('Cache-Control','no-store');self.send_header('Content-Length',str(len(b)));self.end_headers();self.wfile.write(b)
    def auth(self):return self.headers.get('X-KanBan-Agent','')==HEADER
    def body(self):
        n=int(self.headers.get('Content-Length','0') or 0)
        if n>2_000_000:raise RuntimeError('Payload quá lớn.')
        return json.loads((self.rfile.read(n) if n else b'{}').decode() or '{}')
    def do_OPTIONS(self):self.send_response(204);self.cors();self.send_header('Content-Length','0');self.end_headers()
    def do_GET(self):
        path=urlparse(self.path).path
        if path=='/ping':return self.sendj(200,{'ok':True,'available':KOPIA.exists()})
        if not self.auth():return self.sendj(403,{'ok':False,'message':'Unauthorized'})
        try:
            if path=='/status':
                cfg=read_json(CFGFILE,DEFAULT_CFG);st=read_json(STATEFILE,DEFAULT_STATE);configured=bool(cfg.get('sources') and cfg.get('repository') and KOPIA.exists())
                return self.sendj(200,{'ok':True,'available':KOPIA.exists(),'configured':configured,'config':cfg,'state':st,'kopiaVersion':version(),'repositoryFreeBytes':free(str(cfg.get('repository') or DIR))})
            if path=='/snapshots':return self.sendj(200,{'ok':True,'snapshots':snapshots()})
            return self.sendj(404,{'ok':False,'message':'Không tìm thấy API.'})
        except Exception as e:log('GET ERROR '+repr(e));return self.sendj(500,{'ok':False,'message':str(e)})
    def do_POST(self):
        path=urlparse(self.path).path
        if not self.auth():return self.sendj(403,{'ok':False,'message':'Unauthorized'})
        try:
            b=self.body()
            if path=='/pick-folder':
                kind=str(b.get('kind') or 'source');titles={'source':'Chọn thư mục cần backup','repository':'Chọn nơi lưu repository Kopia','restore':'Chọn thư mục cha để khôi phục'}
                return self.sendj(200,{'ok':True,'path':pick(titles.get(kind,'Chọn thư mục'),str(b.get('current') or ''))})
            if path=='/setup':return self.sendj(200,{'ok':True,'message':setup(b)})
            if path=='/backup-now':
                if not (CFG.get('sources') and CFG.get('repository')):return self.sendj(409,{'ok':False,'message':'Hãy Lưu thiết lập trước.'})
                started=start_backup();return self.sendj(200,{'ok':True,'message':'Đã bắt đầu backup.' if started else 'KanBackup đang chạy.'})
            if path=='/verify':
                ensure_repo();sid=str(b.get('snapshotId') or '')
                if not sid:raise RuntimeError('Thiếu snapshotId.')
                kopia(['snapshot','verify',sid],timeout=86400);return self.sendj(200,{'ok':True,'message':'Snapshot đã kiểm tra xong.'})
            if path=='/restore':
                target=restore(b);return self.sendj(200,{'ok':True,'message':'Khôi phục hoàn tất.','target':str(target)})
            if path=='/shutdown':
                self.sendj(200,{'ok':True});threading.Thread(target=self.server.shutdown,daemon=True).start();return
            return self.sendj(404,{'ok':False,'message':'Không tìm thấy API.'})
        except Exception as e:log('POST ERROR '+repr(e));return self.sendj(500,{'ok':False,'message':str(e)})

def scheduled():
    global CFG,STATE
    CFG=read_json(CFGFILE,DEFAULT_CFG);STATE=read_json(STATEFILE,DEFAULT_STATE);STATE['running']=False;write_json(STATEFILE,STATE);backup_job();return 0 if STATE.get('lastOk') else 1

def main():
    ap=argparse.ArgumentParser(add_help=False);ap.add_argument('--scheduled-backup',action='store_true');a,_=ap.parse_known_args()
    if a.scheduled_backup:return scheduled()
    try:s=ThreadingHTTPServer((HOST,PORT),Handler)
    except OSError as e:log('BIND ERROR '+repr(e));return 0
    log(f'KanBackup server listening on {HOST}:{PORT}')
    try:s.serve_forever(.5)
    finally:s.server_close()
    return 0
if __name__=='__main__':raise SystemExit(main())
