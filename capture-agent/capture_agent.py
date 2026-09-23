from __future__ import annotations
import ctypes, io, json, math, os, shutil, socket, struct, subprocess, sys, tempfile, threading
from ctypes import wintypes
from datetime import datetime, timedelta
from pathlib import Path
import tkinter as tk
from tkinter import messagebox, simpledialog, ttk

APP='KanbanCapture'; PORT=47631; HOTKEY_ID=0x4B43
DIR=Path(os.environ.get('LOCALAPPDATA',tempfile.gettempdir()))/APP; CFG=DIR/'settings.json'; CLIP=DIR/'Clipboard'
DEFAULT={'format':'jpg','jpeg_quality':100,'pen_width':4,'text_size':26}

def config():
    c=dict(DEFAULT)
    try:c.update(json.loads(CFG.read_text(encoding='utf-8')))
    except:pass
    c['format']='png' if str(c.get('format')).lower()=='png' else 'jpg'
    c['jpeg_quality']=max(70,min(100,int(c.get('jpeg_quality',100)))); c['pen_width']=max(1,min(20,int(c.get('pen_width',4)))); c['text_size']=max(12,min(72,int(c.get('text_size',26))))
    return c

def save_cfg(c): DIR.mkdir(parents=True,exist_ok=True); CFG.write_text(json.dumps(c,ensure_ascii=False,indent=2),encoding='utf-8')

def install():
    import winreg
    DIR.mkdir(parents=True,exist_ok=True); target=DIR/'capture_agent.py'; src=Path(__file__).resolve()
    if src!=target: shutil.copy2(src,target)
    pyw=Path(sys.executable).with_name('pythonw.exe'); pyw=pyw if pyw.exists() else Path(sys.executable)
    base=r'Software\Classes\kanbancapture'
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,base) as k: winreg.SetValueEx(k,None,0,winreg.REG_SZ,'URL:Kanban Capture'); winreg.SetValueEx(k,'URL Protocol',0,winreg.REG_SZ,'')
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,base+r'\shell\open\command') as k: winreg.SetValueEx(k,None,0,winreg.REG_SZ,f'"{pyw}" "{target}" "%1"')
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,r'Software\Microsoft\Windows\CurrentVersion\Run') as k: winreg.SetValueEx(k,APP,0,winreg.REG_SZ,f'"{pyw}" "{target}" --background')
    subprocess.Popen([str(pyw),str(target),'--background'],close_fds=True)
    print('Đã cài Kanban Capture Agent. Alt+C để chụp toàn Windows.'); return 0

def command(args):
    for a in args:
        s=a.lower().strip()
        if s.startswith('kanbancapture://'): return s.split('://',1)[1].split('?',1)[0].strip('/') or 'capture'
        if s in ('capture','--capture'):return 'capture'
        if s in ('settings','--settings'):return 'settings'
        if s in ('quit','--quit'):return 'quit'
    return None

def send(cmd):
    try:
        with socket.create_connection(('127.0.0.1',PORT),.25) as s:s.sendall((cmd+'\n').encode())
        return True
    except OSError:return False

def hglobal(fmt,data):
    k=ctypes.windll.kernel32; u=ctypes.windll.user32
    k.GlobalAlloc.argtypes=[wintypes.UINT,ctypes.c_size_t]; k.GlobalAlloc.restype=wintypes.HGLOBAL
    k.GlobalLock.argtypes=[wintypes.HGLOBAL]; k.GlobalLock.restype=ctypes.c_void_p; u.SetClipboardData.argtypes=[wintypes.UINT,wintypes.HANDLE]
    h=k.GlobalAlloc(0x42,len(data)); p=k.GlobalLock(h); ctypes.memmove(p,data,len(data)); k.GlobalUnlock(h)
    if not u.SetClipboardData(fmt,h): k.GlobalFree(h); raise OSError('Không ghi được Clipboard')

def clipboard(image,path):
    u=ctypes.windll.user32
    if not u.OpenClipboard(None): raise OSError('Không mở được Clipboard')
    try:
        u.EmptyClipboard(); b=io.BytesIO(); image.convert('RGB').save(b,'BMP'); hglobal(8,b.getvalue()[14:])
        p=io.BytesIO(); image.save(p,'PNG'); hglobal(u.RegisterClipboardFormatW('PNG'),p.getvalue())
        hglobal(15,struct.pack('<IiiII',20,0,0,0,1)+(str(path)+'\0\0').encode('utf-16le'))
    finally:u.CloseClipboard()

def cleanup():
    CLIP.mkdir(parents=True,exist_ok=True); cut=datetime.now()-timedelta(days=7)
    fs=sorted(CLIP.glob('Screenshot_*'),key=lambda p:p.stat().st_mtime,reverse=True)
    for i,p in enumerate(fs):
        try:
            if i>=120 or datetime.fromtimestamp(p.stat().st_mtime)<cut:p.unlink()
        except:pass

class Overlay:
    COLORS=['#ff3b30','#ff9500','#34c759','#007aff','#ffffff','#111111']
    def __init__(self,agent,img,x0,y0):
        from PIL import ImageTk
        self.a=agent; self.img=img; self.x0=x0; self.y0=y0; self.w,self.h=img.size; self.sel=None; self.start=None; self.mode='select'; self.color=self.COLORS[0]; self.ops=[]; self.live=[]
        self.top=tk.Toplevel(agent.root); self.top.overrideredirect(True); self.top.attributes('-topmost',True); self.top.configure(bg='black'); self.top.geometry(f'{self.w}x{self.h}+0+0'); self.top.update_idletasks()
        u=ctypes.windll.user32; u.SetWindowPos(self.top.winfo_id(),-1,x0,y0,self.w,self.h,0x40)
        self.photo=ImageTk.PhotoImage(img); self.c=tk.Canvas(self.top,width=self.w,height=self.h,highlightthickness=0,cursor='crosshair'); self.c.pack(fill='both',expand=True); self.c.create_image(0,0,image=self.photo,anchor='nw')
        self.c.bind('<ButtonPress-1>',self.down); self.c.bind('<B1-Motion>',self.move); self.c.bind('<ButtonRelease-1>',self.up); self.top.bind('<Escape>',lambda e:self.close()); self.top.focus_force()
        self.bar=tk.Frame(self.top,bg='#18251f',padx=6,pady=5); self.win=self.c.create_window(18,18,window=self.bar,anchor='nw'); self.buttons={}
        for key,label in [('select','Chọn'),('pen','Bút'),('rect','Khung'),('arrow','Mũi tên'),('text','Chữ'),('mosaic','Mosaic')]:
            b=tk.Button(self.bar,text=label,command=lambda m=key:self.setmode(m),relief='raised',bd=1); b.pack(side='left',padx=2); self.buttons[key]=b
        tk.Button(self.bar,text='↶',command=self.undo).pack(side='left',padx=3)
        for col in self.COLORS: tk.Button(self.bar,bg=col,width=2,command=lambda q=col:self.setcolor(q)).pack(side='left',padx=1)
        tk.Button(self.bar,text='Hủy',command=self.close).pack(side='left',padx=(8,2)); tk.Button(self.bar,text='Xong',command=self.finish,bg='#70c59f').pack(side='left',padx=2); self.setmode('select')
    def setmode(self,m): self.mode=m; [b.config(relief='sunken' if k==m else 'raised') for k,b in self.buttons.items()]
    def setcolor(self,c):self.color=c
    def p(self,e):return max(0,min(self.w,e.x)),max(0,min(self.h,e.y))
    def clear_live(self):
        for i in self.live:self.c.delete(i)
        self.live=[]
    def redraw(self):
        self.c.delete('ann');
        if self.sel:
            x1,y1,x2,y2=self.sel; self.c.create_rectangle(x1,y1,x2,y2,outline='white',width=2,tags='ann'); self.c.create_rectangle(x1,y1,x2,y2,outline='#111',dash=(5,4),tags='ann')
        for op in self.ops:
            k=op[0]
            if k=='pen': self.c.create_line(*op[1],fill=op[2],width=op[3],smooth=True,tags='ann')
            elif k=='rect': self.c.create_rectangle(*op[1],outline=op[2],width=op[3],tags='ann')
            elif k=='arrow': self.c.create_line(*op[1],fill=op[2],width=op[3],arrow='last',arrowshape=(16,20,7),tags='ann')
            elif k=='text': self.c.create_text(op[1][0],op[1][1],text=op[2],fill=op[3],font=('Segoe UI',op[4],'bold'),anchor='nw',tags='ann')
            elif k=='mosaic': self.c.create_rectangle(*op[1],outline='#888',fill='#888',stipple='gray50',tags='ann')
        self.c.tag_raise(self.win)
    def down(self,e):
        if e.widget is not self.c:return
        self.start=self.p(e); self.clear_live()
        if self.mode=='pen':self.points=[*self.start]
    def move(self,e):
        if not self.start:return
        q=self.p(e); self.clear_live(); x,y=self.start
        if self.mode=='select':self.live=[self.c.create_rectangle(x,y,*q,outline='white',width=2)]
        elif self.mode=='pen': self.points.extend(q); self.live=[self.c.create_line(*self.points,fill=self.color,width=self.a.cfg['pen_width'],smooth=True)]
        elif self.mode in ('rect','mosaic'):self.live=[self.c.create_rectangle(x,y,*q,outline=self.color,width=self.a.cfg['pen_width'])]
        elif self.mode=='arrow':self.live=[self.c.create_line(x,y,*q,fill=self.color,width=self.a.cfg['pen_width'],arrow='last')]
    def up(self,e):
        if not self.start:return
        q=self.p(e); x,y=self.start; self.clear_live()
        if abs(q[0]-x)<3 or abs(q[1]-y)<3:self.start=None;return
        if self.mode=='select': self.sel=(min(x,q[0]),min(y,q[1]),max(x,q[0]),max(y,q[1])); self.ops=[]
        elif self.mode=='pen': self.ops.append(('pen',tuple(self.points),self.color,self.a.cfg['pen_width']))
        elif self.mode=='rect':self.ops.append(('rect',(x,y,*q),self.color,self.a.cfg['pen_width']))
        elif self.mode=='arrow':self.ops.append(('arrow',(x,y,*q),self.color,self.a.cfg['pen_width']))
        elif self.mode=='mosaic':self.ops.append(('mosaic',(min(x,q[0]),min(y,q[1]),max(x,q[0]),max(y,q[1]))))
        elif self.mode=='text':
            t=simpledialog.askstring('Chữ','Nhập nội dung:',parent=self.top)
            if t:self.ops.append(('text',(x,y),t,self.color,self.a.cfg['text_size']))
        self.start=None; self.redraw()
    def undo(self):
        if self.ops:self.ops.pop()
        elif self.sel:self.sel=None
        self.redraw()
    def finish(self):
        if not self.sel: messagebox.showinfo('Kanban Capture','Hãy dùng Chọn và kéo vùng cần chụp.',parent=self.top); return
        from PIL import ImageDraw, ImageFont
        x1,y1,x2,y2=map(int,self.sel); out=self.img.crop((x1,y1,x2,y2)); d=ImageDraw.Draw(out)
        try: font=ImageFont.truetype('arial.ttf',self.a.cfg['text_size'])
        except: font=ImageFont.load_default()
        for op in self.ops:
            k=op[0]
            if k=='pen':
                pts=[(op[1][i]-x1,op[1][i+1]-y1) for i in range(0,len(op[1]),2)]; d.line(pts,fill=op[2],width=op[3],joint='curve')
            elif k=='rect': d.rectangle((op[1][0]-x1,op[1][1]-y1,op[1][2]-x1,op[1][3]-y1),outline=op[2],width=op[3])
            elif k=='arrow':
                ax,ay,bx,by=op[1]; ax-=x1; ay-=y1; bx-=x1; by-=y1; d.line((ax,ay,bx,by),fill=op[2],width=op[3]); ang=math.atan2(by-ay,bx-ax); L=16+op[3]*2
                d.polygon([(bx,by),(bx-L*math.cos(ang-.5),by-L*math.sin(ang-.5)),(bx-L*math.cos(ang+.5),by-L*math.sin(ang+.5))],fill=op[2])
            elif k=='text': d.text((op[1][0]-x1,op[1][1]-y1),op[2],fill=op[3],font=font,stroke_width=1,stroke_fill='#000000')
            elif k=='mosaic':
                a,b,c,e=op[1]; box=(max(0,int(a-x1)),max(0,int(b-y1)),min(out.width,int(c-x1)),min(out.height,int(e-y1)))
                if box[2]>box[0] and box[3]>box[1]:
                    reg=out.crop(box); small=reg.resize((max(1,reg.width//14),max(1,reg.height//14))); out.paste(small.resize(reg.size),box)
        self.a.complete(out); self.close()
    def close(self):
        try:self.top.destroy()
        except:pass
        self.a.overlay=None

class Agent:
    def __init__(self,first=None):
        self.cfg=config(); self.root=tk.Tk(); self.root.withdraw(); self.overlay=None; self.alive=True; self.settings=None
        self.sock=socket.socket(); self.sock.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1); self.sock.bind(('127.0.0.1',PORT)); self.sock.listen(3)
        threading.Thread(target=self.listen,daemon=True).start(); threading.Thread(target=self.hotkey,daemon=True).start(); cleanup()
        if first:self.root.after(150,lambda:self.handle(first))
    def listen(self):
        while self.alive:
            try:
                c,_=self.sock.accept(); data=c.recv(100).decode(errors='ignore').strip(); c.close()
                if data:self.root.after(0,lambda q=data:self.handle(q))
            except OSError:break
    def hotkey(self):
        u=ctypes.windll.user32
        if not u.RegisterHotKey(None,HOTKEY_ID,0x0001|0x4000,0x43):return
        m=wintypes.MSG()
        while self.alive and u.GetMessageW(ctypes.byref(m),None,0,0):
            if m.message==0x0312 and m.wParam==HOTKEY_ID:self.root.after(0,self.capture)
        u.UnregisterHotKey(None,HOTKEY_ID)
    def handle(self,q):
        q=q.split('?',1)[0].strip('/ ').lower()
        if q=='capture':self.capture()
        elif q=='settings':self.show_settings()
        elif q=='quit':self.quit()
    def capture(self):
        if self.overlay:return
        from PIL import ImageGrab
        img=ImageGrab.grab(all_screens=True); u=ctypes.windll.user32; self.overlay=Overlay(self,img,u.GetSystemMetrics(76),u.GetSystemMetrics(77))
    def complete(self,img):
        CLIP.mkdir(parents=True,exist_ok=True); ext='.png' if self.cfg['format']=='png' else '.jpg'; p=CLIP/(datetime.now().strftime('Screenshot_%Y-%m-%d_%H-%M-%S_%f')[:-3]+ext)
        if ext=='.png':img.save(p,'PNG')
        else:img.convert('RGB').save(p,'JPEG',quality=self.cfg['jpeg_quality'],subsampling=0,optimize=True)
        clipboard(img,p); cleanup()
    def show_settings(self):
        if self.settings and self.settings.winfo_exists():self.settings.lift();return
        w=tk.Toplevel(self.root); self.settings=w; w.title('Kanban Capture - Cài đặt'); w.attributes('-topmost',True); f=ttk.Frame(w,padding=16); f.pack()
        fmt=tk.StringVar(value=self.cfg['format']); q=tk.IntVar(value=self.cfg['jpeg_quality']); pen=tk.IntVar(value=self.cfg['pen_width']); ts=tk.IntVar(value=self.cfg['text_size'])
        ttk.Label(f,text='Định dạng file khi Ctrl+V vào thư mục').grid(row=0,column=0,columnspan=2,sticky='w'); ttk.Radiobutton(f,text='JPG (mặc định)',variable=fmt,value='jpg').grid(row=1,column=0,sticky='w'); ttk.Radiobutton(f,text='PNG',variable=fmt,value='png').grid(row=1,column=1,sticky='w')
        for r,(lab,var,a,b) in enumerate([('Chất lượng JPG',q,70,100),('Độ dày nét',pen,1,20),('Cỡ chữ',ts,12,72)],2): ttk.Label(f,text=lab).grid(row=r,column=0,sticky='w',pady=4); ttk.Spinbox(f,from_=a,to=b,textvariable=var,width=8).grid(row=r,column=1,sticky='e')
        ttk.Label(f,text='Alt + C: chụp ở bất kỳ màn hình Windows nào.').grid(row=5,column=0,columnspan=2,sticky='w',pady=(10,6))
        def ok(): self.cfg={'format':'png' if fmt.get()=='png' else 'jpg','jpeg_quality':int(q.get()),'pen_width':int(pen.get()),'text_size':int(ts.get())}; save_cfg(self.cfg); w.destroy()
        ttk.Button(f,text='Hủy',command=w.destroy).grid(row=6,column=0,pady=(8,0)); ttk.Button(f,text='Lưu',command=ok).grid(row=6,column=1,pady=(8,0)); w.focus_force()
    def quit(self):
        self.alive=False
        try:self.sock.close()
        except:pass
        self.root.quit()
    def run(self):self.root.mainloop()

def main():
    if os.name!='nt':raise RuntimeError('Kanban Capture Agent chỉ hỗ trợ Windows.')
    if '--install' in sys.argv:return install()
    cmd=command(sys.argv[1:])
    if cmd and send(cmd):return 0
    if not cmd and send('ping'):return 0
    a=Agent(cmd); a.run(); return 0

if __name__=='__main__':
    try:raise SystemExit(main())
    except Exception as e:
        try:r=tk.Tk();r.withdraw();messagebox.showerror('Kanban Capture',str(e));r.destroy()
        except:pass
        raise
