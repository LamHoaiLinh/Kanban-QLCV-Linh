from __future__ import annotations
import ctypes, io, json, math, os, shutil, socket, struct, subprocess, sys, tempfile, threading, time
from ctypes import wintypes
from datetime import datetime, timedelta
from pathlib import Path
import tkinter as tk
from tkinter import filedialog, messagebox, simpledialog, ttk

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

def enable_dpi_awareness():
    try: ctypes.windll.shcore.SetProcessDpiAwareness(2)
    except Exception:
        try: ctypes.windll.user32.SetProcessDPIAware()
        except Exception: pass

def install():
    import winreg
    DIR.mkdir(parents=True,exist_ok=True); target=DIR/'capture_agent.py'; src=Path(__file__).resolve()
    send('quit')
    time.sleep(.45)
    if src!=target: shutil.copy2(src,target)
    pyw=Path(sys.executable).with_name('pythonw.exe'); pyw=pyw if pyw.exists() else Path(sys.executable)
    base=r'Software\Classes\kanbancapture'
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,base) as k: winreg.SetValueEx(k,None,0,winreg.REG_SZ,'URL:Kanban Capture'); winreg.SetValueEx(k,'URL Protocol',0,winreg.REG_SZ,'')
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,base+r'\shell\open\command') as k: winreg.SetValueEx(k,None,0,winreg.REG_SZ,f'"{pyw}" "{target}" "%1"')
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,r'Software\Microsoft\Windows\CurrentVersion\Run') as k: winreg.SetValueEx(k,APP,0,winreg.REG_SZ,f'"{pyw}" "{target}" --background')
    subprocess.Popen([str(pyw),str(target),'--background'],close_fds=True)
    for _ in range(30):
        time.sleep(.12)
        if send('ping',expect_reply=True):
            print('Đã cài và khởi động Kanban Capture Agent v2. Alt+C để chụp toàn Windows.')
            return 0
    raise RuntimeError('Đã chép Agent nhưng chưa khởi động được. Hãy thử chạy lại file cài đặt hoặc khởi động Windows.')

def command(args):
    for a in args:
        s=a.lower().strip()
        if s.startswith('kanbancapture://'): return s.split('://',1)[1].split('?',1)[0].strip('/') or 'capture'
        if s in ('capture','--capture'):return 'capture'
        if s in ('settings','--settings'):return 'settings'
        if s in ('quit','--quit'):return 'quit'
    return None

def send(cmd,expect_reply=False):
    try:
        with socket.create_connection(('127.0.0.1',PORT),.35) as sock:
            sock.settimeout(.5); sock.sendall((cmd+'\n').encode())
            if expect_reply:return sock.recv(64).strip().startswith(b'OK')
        return True
    except OSError:return False

def hglobal(fmt,data):
    k=ctypes.windll.kernel32; u=ctypes.windll.user32
    k.GlobalAlloc.argtypes=[wintypes.UINT,ctypes.c_size_t]; k.GlobalAlloc.restype=wintypes.HGLOBAL
    k.GlobalLock.argtypes=[wintypes.HGLOBAL]; k.GlobalLock.restype=ctypes.c_void_p
    k.GlobalUnlock.argtypes=[wintypes.HGLOBAL]; k.GlobalFree.argtypes=[wintypes.HGLOBAL]
    u.SetClipboardData.argtypes=[wintypes.UINT,wintypes.HANDLE]; u.SetClipboardData.restype=wintypes.HANDLE
    h=k.GlobalAlloc(0x42,len(data))
    if not h: raise OSError('Không cấp phát được Clipboard')
    p=k.GlobalLock(h)
    if not p: k.GlobalFree(h); raise OSError('Không khóa được Clipboard')
    ctypes.memmove(p,data,len(data)); k.GlobalUnlock(h)
    if not u.SetClipboardData(fmt,h): k.GlobalFree(h); raise OSError('Không ghi được Clipboard')

def clipboard(image,path):
    u=ctypes.windll.user32
    if not u.OpenClipboard(None): raise OSError('Không mở được Clipboard')
    try:
        u.EmptyClipboard(); b=io.BytesIO(); image.convert('RGB').save(b,'BMP'); hglobal(8,b.getvalue()[14:])
        p=io.BytesIO(); image.save(p,'PNG'); u.RegisterClipboardFormatW.argtypes=[wintypes.LPCWSTR]; u.RegisterClipboardFormatW.restype=wintypes.UINT; hglobal(u.RegisterClipboardFormatW('PNG'),p.getvalue())
        hglobal(15,struct.pack('<IiiII',20,0,0,0,1)+(str(path)+'\0\0').encode('utf-16le'))
        hglobal(u.RegisterClipboardFormatW('Preferred DropEffect'),struct.pack('<I',1))
    finally:u.CloseClipboard()

def cleanup():
    CLIP.mkdir(parents=True,exist_ok=True); cut=datetime.now()-timedelta(days=7)
    fs=sorted(CLIP.glob('Screenshot_*'),key=lambda p:p.stat().st_mtime,reverse=True)
    for i,p in enumerate(fs):
        try:
            if i>=120 or datetime.fromtimestamp(p.stat().st_mtime)<cut:p.unlink()
        except:pass

class Overlay:
    COLORS=['#ff3b30','#ff9500','#34c759','#007aff','#af52de','#ffffff','#111111']
    HANDLES=('nw','n','ne','e','se','s','sw','w')
    def __init__(self,agent,img,x0,y0):
        from PIL import ImageTk
        self.a=agent; self.img=img; self.x0=x0; self.y0=y0; self.w,self.h=img.size
        self.sel=None; self.start=None; self.drag_kind=None; self.drag_handle=None; self.original_sel=None
        self.mode='select'; self.color=self.COLORS[0]; self.color_index=0; self.ops=[]; self.live=[]; self.points=[]
        self.top=tk.Toplevel(agent.root); self.top.overrideredirect(True); self.top.attributes('-topmost',True); self.top.configure(bg='black')
        self.top.geometry(f'{self.w}x{self.h}+0+0'); self.top.update_idletasks()
        u=ctypes.windll.user32
        u.SetWindowPos.argtypes=[wintypes.HWND,wintypes.HWND,ctypes.c_int,ctypes.c_int,ctypes.c_int,ctypes.c_int,wintypes.UINT]; u.SetWindowPos.restype=wintypes.BOOL
        u.SetWindowPos(self.top.winfo_id(),wintypes.HWND(-1),x0,y0,self.w,self.h,0x40)
        self.photo=ImageTk.PhotoImage(img)
        self.c=tk.Canvas(self.top,width=self.w,height=self.h,highlightthickness=0,cursor='crosshair',bg='black')
        self.c.pack(fill='both',expand=True); self.c.create_image(0,0,image=self.photo,anchor='nw',tags='shot')
        self.tool=tk.Frame(self.top,bg='#1f282d',padx=4,pady=4)
        self.action=tk.Frame(self.top,bg='#1f282d',padx=6,pady=5)
        self.tool_win=self.c.create_window(0,0,window=self.tool,anchor='nw',state='hidden',tags='ui')
        self.action_win=self.c.create_window(0,0,window=self.action,anchor='nw',state='hidden',tags='ui')
        self.tool_buttons={}
        for key,label in [('select','⌖'),('text','T'),('pen','✎'),('rect','□'),('arrow','↗'),('mosaic','░')]:
            b=self.dark_button(self.tool,label,lambda m=key:self.setmode(m),width=3); b.pack(pady=2); self.tool_buttons[key]=b
        self.color_btn=self.dark_button(self.tool,'●',self.cycle_color,width=3,fg=self.color); self.color_btn.pack(pady=2)
        self.dark_button(self.tool,'↶',self.undo,width=3).pack(pady=2)
        self.dark_button(self.action,'✕',self.close,width=3).pack(side='left',padx=2)
        self.dark_button(self.action,'↶',self.undo,width=3).pack(side='left',padx=2)
        self.dark_button(self.action,'💾',self.save_as,width=3).pack(side='left',padx=2)
        self.dark_button(self.action,'⧉',self.finish,width=3).pack(side='left',padx=2)
        self.dark_button(self.action,'✓',self.finish,width=3,fg='#39d98a').pack(side='left',padx=2)
        self.c.bind('<ButtonPress-1>',self.down); self.c.bind('<B1-Motion>',self.move); self.c.bind('<ButtonRelease-1>',self.up)
        self.top.bind('<Escape>',lambda e:self.close()); self.top.bind('<Control-c>',self.copy_shortcut); self.top.bind('<Control-C>',self.copy_shortcut)
        self.top.bind('<Control-s>',lambda e:(self.save_as(),'break')[1]); self.top.bind('<Return>',lambda e:(self.finish(),'break')[1])
        self.top.focus_force(); self.redraw()

    def dark_button(self,parent,text,cmd,width=3,fg='#f6f8f9'):
        return tk.Button(parent,text=text,command=cmd,width=width,height=1,bg='#1f282d',fg=fg,activebackground='#344148',activeforeground='#fff',relief='flat',bd=0,font=('Segoe UI',14,'bold'),cursor='hand2')

    def setmode(self,m):
        self.mode=m
        for key,b in self.tool_buttons.items(): b.config(bg='#36454d' if key==m else '#1f282d')
        self.c.config(cursor='crosshair' if m!='select' else 'cross')

    def cycle_color(self):
        self.color_index=(self.color_index+1)%len(self.COLORS); self.color=self.COLORS[self.color_index]; self.color_btn.config(fg=self.color)

    def copy_shortcut(self,event=None):
        self.finish()
        return 'break'

    def clamp_point(self,x,y,to_selection=False):
        if to_selection and self.sel:
            x1,y1,x2,y2=self.sel; return max(x1,min(x2,x)),max(y1,min(y2,y))
        return max(0,min(self.w,x)),max(0,min(self.h,y))

    def p(self,e,to_selection=False): return self.clamp_point(e.x,e.y,to_selection)

    def clear_live(self):
        for item in self.live:self.c.delete(item)
        self.live=[]

    def handle_points(self):
        if not self.sel:return {}
        x1,y1,x2,y2=self.sel; mx=(x1+x2)/2; my=(y1+y2)/2
        return {'nw':(x1,y1),'n':(mx,y1),'ne':(x2,y1),'e':(x2,my),'se':(x2,y2),'s':(mx,y2),'sw':(x1,y2),'w':(x1,my)}

    def hit_handle(self,p):
        px,py=p
        for name,(x,y) in self.handle_points().items():
            if abs(px-x)<=10 and abs(py-y)<=10:return name
        return None

    def inside(self,p):
        if not self.sel:return False
        x,y=p; x1,y1,x2,y2=self.sel; return x1<=x<=x2 and y1<=y<=y2

    def draw_dim(self):
        if not self.sel:
            self.c.create_rectangle(0,0,self.w,self.h,fill='black',stipple='gray25',outline='',tags='dim'); return
        x1,y1,x2,y2=self.sel
        for box in [(0,0,self.w,y1),(0,y2,self.w,self.h),(0,y1,x1,y2),(x2,y1,self.w,y2)]:
            self.c.create_rectangle(*box,fill='black',stipple='gray50',outline='',tags='dim')

    def draw_selection(self):
        if not self.sel:return
        x1,y1,x2,y2=self.sel; blue='#168cff'
        self.c.create_rectangle(x1,y1,x2,y2,outline=blue,width=2,tags='selection')
        for x,y in self.handle_points().values():
            self.c.create_oval(x-5,y-5,x+5,y+5,fill=blue,outline='white',width=1,tags='selection')
        self.c.create_text(x1+8,max(12,y1-13),text=f'{int(x2-x1)} × {int(y2-y1)}',anchor='sw',fill='white',font=('Segoe UI',10,'bold'),tags='selection')

    def draw_annotations(self):
        for op in self.ops:
            k=op[0]
            if k=='pen': self.c.create_line(*op[1],fill=op[2],width=op[3],smooth=True,tags='ann')
            elif k=='rect': self.c.create_rectangle(*op[1],outline=op[2],width=op[3],tags='ann')
            elif k=='arrow': self.c.create_line(*op[1],fill=op[2],width=op[3],arrow='last',arrowshape=(16,20,7),tags='ann')
            elif k=='text': self.c.create_text(op[1][0],op[1][1],text=op[2],fill=op[3],font=('Segoe UI',op[4],'bold'),anchor='nw',tags='ann')
            elif k=='mosaic': self.c.create_rectangle(*op[1],outline='#8f9ba1',fill='#8f9ba1',stipple='gray50',tags='ann')

    def place_toolbars(self):
        if not self.sel:
            self.c.itemconfigure(self.tool_win,state='hidden'); self.c.itemconfigure(self.action_win,state='hidden'); return
        self.top.update_idletasks(); x1,y1,x2,y2=self.sel
        tw=max(42,self.tool.winfo_reqwidth()); th=max(180,self.tool.winfo_reqheight())
        aw=max(230,self.action.winfo_reqwidth()); ah=max(44,self.action.winfo_reqheight())
        tx=x2+9 if x2+9+tw<self.w-6 else max(6,x1-tw-9); ty=max(6,min(self.h-th-6,(y1+y2-th)/2))
        ax=max(6,min(self.w-aw-6,x2-aw)); ay=y2+9 if y2+9+ah<self.h-6 else max(6,y1-ah-9)
        self.c.coords(self.tool_win,tx,ty); self.c.coords(self.action_win,ax,ay)
        self.c.itemconfigure(self.tool_win,state='normal'); self.c.itemconfigure(self.action_win,state='normal')
        self.c.tag_raise('ui')

    def redraw(self):
        self.c.delete('dim'); self.c.delete('selection'); self.c.delete('ann')
        self.draw_dim(); self.draw_annotations(); self.draw_selection(); self.place_toolbars()

    def begin_select_drag(self,p):
        handle=self.hit_handle(p)
        self.original_sel=tuple(self.sel) if self.sel else None
        if handle:self.drag_kind='resize'; self.drag_handle=handle
        elif self.inside(p):self.drag_kind='move'
        else:self.drag_kind='new'; self.sel=(p[0],p[1],p[0],p[1]); self.ops=[]

    def down(self,e):
        if e.widget is not self.c:return
        raw=self.p(e)
        if self.mode=='select':
            self.start=raw; self.begin_select_drag(raw); self.redraw(); return
        if not self.sel:return
        self.start=self.p(e,True); self.drag_kind='draw'; self.clear_live()
        if self.mode=='pen':self.points=[*self.start]
        if self.mode=='text':
            t=simpledialog.askstring('Chữ','Nhập nội dung:',parent=self.top)
            if t:self.ops.append(('text',self.start,t,self.color,self.a.cfg['text_size']))
            self.start=None; self.redraw()

    def resize_selection(self,p):
        if not self.original_sel:return
        x1,y1,x2,y2=self.original_sel; x,y=p; h=self.drag_handle
        if 'w' in h:x1=x
        if 'e' in h:x2=x
        if 'n' in h:y1=y
        if 's' in h:y2=y
        if x2<x1:x1,x2=x2,x1
        if y2<y1:y1,y2=y2,y1
        if x2-x1<12:
            if 'w' in h:x1=x2-12
            else:x2=x1+12
        if y2-y1<12:
            if 'n' in h:y1=y2-12
            else:y2=y1+12
        self.sel=(max(0,x1),max(0,y1),min(self.w,x2),min(self.h,y2))

    def move_selection(self,p):
        if not self.original_sel or not self.start:return
        ox1,oy1,ox2,oy2=self.original_sel; dx=p[0]-self.start[0]; dy=p[1]-self.start[1]
        sw=ox2-ox1; sh=oy2-oy1; nx=max(0,min(self.w-sw,ox1+dx)); ny=max(0,min(self.h-sh,oy1+dy)); self.sel=(nx,ny,nx+sw,ny+sh)

    def move(self,e):
        if not self.start:return
        if self.mode=='select':
            p=self.p(e)
            if self.drag_kind=='new':self.sel=(min(self.start[0],p[0]),min(self.start[1],p[1]),max(self.start[0],p[0]),max(self.start[1],p[1]))
            elif self.drag_kind=='move':self.move_selection(p)
            elif self.drag_kind=='resize':self.resize_selection(p)
            self.redraw(); return
        q=self.p(e,True); x,y=self.start; self.clear_live()
        if self.mode=='pen':
            self.points.extend(q); self.live=[self.c.create_line(*self.points,fill=self.color,width=self.a.cfg['pen_width'],smooth=True,tags='live')]
        elif self.mode=='rect':self.live=[self.c.create_rectangle(x,y,*q,outline=self.color,width=self.a.cfg['pen_width'],tags='live')]
        elif self.mode=='arrow':self.live=[self.c.create_line(x,y,*q,fill=self.color,width=self.a.cfg['pen_width'],arrow='last',tags='live')]
        elif self.mode=='mosaic':self.live=[self.c.create_rectangle(x,y,*q,outline='#8f9ba1',fill='#8f9ba1',stipple='gray50',tags='live')]

    def up(self,e):
        if not self.start:return
        if self.mode=='select':
            if self.sel and (self.sel[2]-self.sel[0]<8 or self.sel[3]-self.sel[1]<8):self.sel=self.original_sel
            self.start=None; self.drag_kind=None; self.drag_handle=None; self.original_sel=None; self.redraw(); return
        q=self.p(e,True); x,y=self.start; self.clear_live()
        if abs(q[0]-x)>=2 or abs(q[1]-y)>=2:
            if self.mode=='pen':self.ops.append(('pen',tuple(self.points),self.color,self.a.cfg['pen_width']))
            elif self.mode=='rect':self.ops.append(('rect',(x,y,*q),self.color,self.a.cfg['pen_width']))
            elif self.mode=='arrow':self.ops.append(('arrow',(x,y,*q),self.color,self.a.cfg['pen_width']))
            elif self.mode=='mosaic':self.ops.append(('mosaic',(min(x,q[0]),min(y,q[1]),max(x,q[0]),max(y,q[1]))))
        self.start=None; self.redraw()

    def undo(self):
        if self.ops:self.ops.pop()
        elif self.sel:self.sel=None
        self.redraw()

    def render_output(self):
        if not self.sel:raise ValueError('Hãy kéo chọn vùng cần chụp.')
        from PIL import ImageDraw, ImageFont
        x1,y1,x2,y2=map(int,self.sel); out=self.img.crop((x1,y1,x2,y2)); d=ImageDraw.Draw(out)
        try:font=ImageFont.truetype('arial.ttf',self.a.cfg['text_size'])
        except:font=ImageFont.load_default()
        for op in self.ops:
            k=op[0]
            if k=='pen':
                pts=[(op[1][i]-x1,op[1][i+1]-y1) for i in range(0,len(op[1]),2)]; d.line(pts,fill=op[2],width=op[3],joint='curve')
            elif k=='rect':d.rectangle((op[1][0]-x1,op[1][1]-y1,op[1][2]-x1,op[1][3]-y1),outline=op[2],width=op[3])
            elif k=='arrow':
                ax,ay,bx,by=op[1]; ax-=x1; ay-=y1; bx-=x1; by-=y1; d.line((ax,ay,bx,by),fill=op[2],width=op[3]); ang=math.atan2(by-ay,bx-ax); L=16+op[3]*2
                d.polygon([(bx,by),(bx-L*math.cos(ang-.5),by-L*math.sin(ang-.5)),(bx-L*math.cos(ang+.5),by-L*math.sin(ang+.5))],fill=op[2])
            elif k=='text':d.text((op[1][0]-x1,op[1][1]-y1),op[2],fill=op[3],font=font,stroke_width=1,stroke_fill='#000000')
            elif k=='mosaic':
                a,b,c,e=op[1]; box=(max(0,int(a-x1)),max(0,int(b-y1)),min(out.width,int(c-x1)),min(out.height,int(e-y1)))
                if box[2]>box[0] and box[3]>box[1]:
                    reg=out.crop(box); small=reg.resize((max(1,reg.width//14),max(1,reg.height//14))); out.paste(small.resize(reg.size),box)
        return out

    def finish(self):
        try:out=self.render_output()
        except ValueError as error:messagebox.showinfo('Kanban Capture',str(error),parent=self.top); return
        self.a.complete(out); self.close()

    def save_as(self):
        try:out=self.render_output()
        except ValueError as error:messagebox.showinfo('Kanban Capture',str(error),parent=self.top); return
        ext='.png' if self.a.cfg['format']=='png' else '.jpg'
        name=datetime.now().strftime('Screenshot_%Y-%m-%d_%H-%M-%S')+ext
        path=filedialog.asksaveasfilename(parent=self.top,title='Lưu ảnh chụp',initialfile=name,defaultextension=ext,filetypes=[('PNG','*.png'),('JPEG','*.jpg;*.jpeg')])
        if not path:return
        if str(path).lower().endswith('.png'):out.save(path,'PNG')
        else:out.convert('RGB').save(path,'JPEG',quality=self.a.cfg['jpeg_quality'],subsampling=0,optimize=True)

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
                conn,_=self.sock.accept(); conn.settimeout(.8); raw=conn.recv(4096)
                if raw.startswith(b'GET ') or raw.startswith(b'OPTIONS '):
                    text=raw.decode('latin1',errors='ignore'); first=text.split('\r\n',1)[0].split()
                    method=first[0] if first else 'GET'; path=first[1] if len(first)>1 else '/ping'
                    headers=('HTTP/1.1 204 No Content' if method=='OPTIONS' else 'HTTP/1.1 200 OK')+'\r\nAccess-Control-Allow-Origin: *\r\nAccess-Control-Allow-Methods: GET, OPTIONS\r\nAccess-Control-Allow-Headers: Content-Type\r\nAccess-Control-Allow-Private-Network: true\r\nCache-Control: no-store\r\nConnection: close\r\nContent-Type: application/json\r\n\r\n'
                    body='' if method=='OPTIONS' else '{"ok":true}'
                    conn.sendall((headers+body).encode('utf-8')); conn.close()
                    if method!='OPTIONS':
                        cmd=path.split('?',1)[0].strip('/').lower() or 'ping'
                        self.root.after(0,lambda q=cmd:self.handle(q))
                    continue
                data=raw.decode(errors='ignore').strip(); conn.sendall(b'OK\n'); conn.close()
                if data:self.root.after(0,lambda q=data:self.handle(q))
            except (OSError,socket.timeout):continue
    def hotkey(self):
        u=ctypes.windll.user32
        if not u.RegisterHotKey(None,HOTKEY_ID,0x0001|0x4000,0x43):
            self.root.after(0,lambda:messagebox.showwarning('Kanban Capture','Không đăng ký được Alt+C. Có thể phím này đang bị ứng dụng khác chiếm. Nút CHỤP trong Kanban vẫn dùng được.'))
            return
        m=wintypes.MSG()
        while self.alive and u.GetMessageW(ctypes.byref(m),None,0,0):
            if m.message==0x0312 and m.wParam==HOTKEY_ID:self.root.after(0,self.capture)
        u.UnregisterHotKey(None,HOTKEY_ID)
    def handle(self,q):
        q=q.split('?',1)[0].strip('/ ').lower()
        if q=='capture':self.capture()
        elif q=='settings':self.show_settings()
        elif q=='quit':self.quit()
        elif q=='ping':pass
    def capture(self):
        if self.overlay:
            try:self.overlay.top.lift(); self.overlay.top.focus_force()
            except:pass
            return
        try:
            from PIL import ImageGrab
            img=ImageGrab.grab(all_screens=True); u=ctypes.windll.user32; self.overlay=Overlay(self,img,u.GetSystemMetrics(76),u.GetSystemMetrics(77))
        except Exception as error:
            self.overlay=None; messagebox.showerror('Kanban Capture',f'Không chụp được màn hình: {error}')
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
    enable_dpi_awareness()
    cmd=command(sys.argv[1:])
    if cmd and send(cmd,expect_reply=True):return 0
    if not cmd and send('ping',expect_reply=True):return 0
    a=Agent(cmd); a.run(); return 0

if __name__=='__main__':
    try:raise SystemExit(main())
    except Exception as e:
        try:r=tk.Tk();r.withdraw();messagebox.showerror('Kanban Capture',str(e));r.destroy()
        except:pass
        raise
