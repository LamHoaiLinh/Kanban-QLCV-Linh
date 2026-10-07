from __future__ import annotations
import copy, ctypes, io, json, math, os, shutil, socket, struct, subprocess, sys, tempfile, threading, time
from ctypes import wintypes
from datetime import datetime, timedelta
from pathlib import Path
from urllib.parse import parse_qs, urlsplit
import tkinter as tk
from tkinter import filedialog, messagebox, simpledialog, ttk, font as tkfont

try:
    from kanpass import KanPassManager
except Exception:
    KanPassManager = None
try:
    from kanpass_webbridge import KanPassWebBridge
except Exception:
    KanPassWebBridge = None

APP='KanbanCapture'; PORT=47631
HOTKEY_ID=0x4B43; HOTKEY_LONG_ID=0x4B58; HOTKEY_FILL_ID=0x4B41; HOTKEY_SAVE_ID=0x4B50
DIR=Path(os.environ.get('LOCALAPPDATA',tempfile.gettempdir()))/APP; CFG=DIR/'settings.json'; CLIP=DIR/'Clipboard'
KANPASS_HEADER='linh-kanpass-v1'
KANPASS_ALLOWED_ORIGINS=('https://lamhoailinh.github.io','http://localhost','http://127.0.0.1')
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
    kanpass_src=src.with_name('kanpass.py'); kanpass_target=DIR/'kanpass.py'
    if kanpass_src.exists() and kanpass_src.resolve()!=kanpass_target.resolve(): shutil.copy2(kanpass_src,kanpass_target)
    webbridge_src=src.with_name('kanpass_webbridge.py'); webbridge_target=DIR/'kanpass_webbridge.py'
    if webbridge_src.exists() and webbridge_src.resolve()!=webbridge_target.resolve(): shutil.copy2(webbridge_src,webbridge_target)
    pyw=Path(sys.executable).with_name('pythonw.exe'); pyw=pyw if pyw.exists() else Path(sys.executable)
    base=r'Software\Classes\kanbancapture'
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,base) as k: winreg.SetValueEx(k,None,0,winreg.REG_SZ,'URL:Kanban Capture'); winreg.SetValueEx(k,'URL Protocol',0,winreg.REG_SZ,'')
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,base+r'\shell\open\command') as k: winreg.SetValueEx(k,None,0,winreg.REG_SZ,f'"{pyw}" "{target}" "%1"')
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER,r'Software\Microsoft\Windows\CurrentVersion\Run') as k: winreg.SetValueEx(k,APP,0,winreg.REG_SZ,f'"{pyw}" "{target}" --background')
    subprocess.Popen([str(pyw),str(target),'--background'],close_fds=True)
    for _ in range(30):
        time.sleep(.12)
        if send('ping',expect_reply=True):
            print('Đã cài và khởi động Kanban Agent. Alt+C chụp nhanh, Alt+X chụp dài, Alt+A điền KanPass, Alt+P lưu/cập nhật KanPass.')
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
    STYLE_PREFIX='rt_'
    def __init__(self,agent,img,x0,y0,long_mode=False):
        from PIL import ImageTk
        self.a=agent; self.img=img; self.x0=x0; self.y0=y0; self.w,self.h=img.size
        self.long_mode=bool(long_mode); self.long_locked=False; self.fixed_sel=None
        self.long_frames=[]; self.long_redo_frames=[]; self.long_revision=0; self.long_committed_revision=-1; self.long_current_dirty=True; self._scroll_after=None
        self.sel=None; self.sel_angle=0.0; self.start=None; self.drag_kind=None; self.drag_handle=None; self.original_sel=None
        self.original_angle=0.0; self.rotation_start_mouse_angle=None; self.original_corner_offsets=None
        self.corner_offsets={'nw':(0.0,0.0),'ne':(0.0,0.0),'se':(0.0,0.0),'sw':(0.0,0.0)}
        self.mode='select'; self.color=self.COLORS[0]; self.color_index=0; self.ops=[]; self.live=[]; self.points=[]
        self.undo_stack=[]; self.redo_stack=[]; self._tooltip_after=None; self._tooltip_win=None
        self.pen_width=max(1,min(20,int(self.a.cfg.get('pen_width',4))))
        self.text_size=max(12,min(72,int(self.a.cfg.get('text_size',26))))
        self.selected_text_index=None; self.hover_text_index=None; self.original_text_pos=None; self.text_boxes={}; self._font_cache={}
        self.text_editor_frame=None; self.text_editor_win=None; self.text_editor_widget=None; self.text_editor_index=None; self.text_editor_pos=None
        self.text_format_bar=None; self.text_format_size_label=None
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
        tooltips={
            'select':'Chọn / di chuyển / đổi kích thước vùng chụp',
            'text':'Chữ (T): nhấp để thêm · rê để di chuyển · nhấp đúp để sửa · Delete để xoá',
            'pen':'Bút vẽ tự do',
            'rect':'Vẽ khung chữ nhật',
            'arrow':'Vẽ mũi tên',
            'mosaic':'Làm mờ / pixel hóa vùng nhạy cảm'
        }
        for key,label in [('select','⌖'),('text','T'),('pen','✎'),('rect','□'),('arrow','↗'),('mosaic','░')]:
            b=self.dark_button(self.tool,label,lambda m=key:self.setmode(m),width=3); b.pack(pady=2); self.tool_buttons[key]=b
            self.add_tooltip(b,tooltips[key])
        self.color_btn=self.dark_button(self.tool,'●',self.cycle_color,width=3,fg=self.color); self.color_btn.pack(pady=2); self.add_tooltip(self.color_btn,'Đổi màu nét / chữ')
        self.size_frame=tk.Frame(self.tool,bg='#1f282d',padx=2,pady=2)
        self.size_title=tk.Label(self.size_frame,text='Nét',bg='#1f282d',fg='#dbe4e8',font=('Segoe UI',8,'bold')); self.size_title.pack()
        size_row=tk.Frame(self.size_frame,bg='#1f282d'); size_row.pack()
        minus_btn=self.small_button(size_row,'−',lambda:self.adjust_size(-1)); minus_btn.pack(side='left'); self.add_tooltip(minus_btn,'Giảm độ dày nét / cỡ chữ')
        self.size_value=tk.Label(size_row,text=str(self.pen_width),width=3,bg='#1f282d',fg='#fff',font=('Segoe UI',9,'bold')); self.size_value.pack(side='left',padx=1)
        plus_btn=self.small_button(size_row,'+',lambda:self.adjust_size(1)); plus_btn.pack(side='left'); self.add_tooltip(plus_btn,'Tăng độ dày nét / cỡ chữ')
        self.undo_btn=self.dark_button(self.tool,'↶',self.undo,width=3); self.undo_btn.pack(pady=2); self.add_tooltip(self.undo_btn,'Hoàn tác (Ctrl+Z)')
        self.redo_btn=self.dark_button(self.tool,'↷',self.redo,width=3); self.redo_btn.pack(pady=2); self.add_tooltip(self.redo_btn,'Làm lại (Ctrl+Y)')
        close_btn=self.dark_button(self.action,'✕',self.close,width=3); close_btn.pack(side='left',padx=2); self.add_tooltip(close_btn,'Hủy chụp (Esc)')
        undo_action=self.dark_button(self.action,'↶',self.undo,width=3); undo_action.pack(side='left',padx=2); self.add_tooltip(undo_action,'Hoàn tác (Ctrl+Z)')
        redo_action=self.dark_button(self.action,'↷',self.redo,width=3); redo_action.pack(side='left',padx=2); self.add_tooltip(redo_action,'Làm lại (Ctrl+Y)')
        save_btn=self.dark_button(self.action,'💾',self.save_as,width=3); save_btn.pack(side='left',padx=2); self.add_tooltip(save_btn,'Lưu ảnh ra file (Ctrl+S)')
        self.long_status=None
        if self.long_mode:
            self.long_status=tk.Label(self.action,text='Dài · 0 ảnh',bg='#1f282d',fg='#a9e6c4',font=('Segoe UI',9,'bold')); self.long_status.pack(side='left',padx=(5,3))
            next_btn=self.dark_button(self.action,'X',self.commit_long_frame,width=3,fg='#6ee7a8'); next_btn.pack(side='left',padx=2); self.add_tooltip(next_btn,'Chốt đoạn hiện tại (X), giữ nguyên khung rồi cuộn để chụp đoạn tiếp')
        copy_btn=self.dark_button(self.action,'⧉',self.finish,width=3); copy_btn.pack(side='left',padx=2); self.add_tooltip(copy_btn,'Ghép toàn bộ và chép vào Clipboard' if self.long_mode else 'Chép ảnh vào Clipboard và đóng')
        done_btn=self.dark_button(self.action,'✓',self.finish,width=3,fg='#39d98a'); done_btn.pack(side='left',padx=2); self.add_tooltip(done_btn,'Hoàn tất chuỗi ảnh dài và chép vào Clipboard' if self.long_mode else 'Hoàn tất và chép ảnh vào Clipboard')
        self.c.bind('<ButtonPress-1>',self.down); self.c.bind('<B1-Motion>',self.move); self.c.bind('<ButtonRelease-1>',self.up)
        self.c.bind('<Double-Button-1>',self.double_click); self.c.bind('<Motion>',self.hover)
        self.top.bind('<Escape>',lambda e:self.close()); self.top.bind('<Control-c>',self.copy_shortcut); self.top.bind('<Control-C>',self.copy_shortcut)
        self.top.bind('<Control-s>',lambda e:(self.save_as(),'break')[1]); self.top.bind('<Return>',self.finish_shortcut)
        self.top.bind('<Delete>',self.delete_selected_text); self.top.bind('<Control-z>',self.undo_shortcut); self.top.bind('<Control-Z>',self.undo_shortcut)
        self.top.bind('<Control-y>',self.redo_shortcut); self.top.bind('<Control-Y>',self.redo_shortcut)
        if self.long_mode:
            self.top.bind('<KeyPress-x>',self.long_capture_shortcut); self.top.bind('<KeyPress-X>',self.long_capture_shortcut)
            self.top.bind('<MouseWheel>',self.long_scroll)
        self.top.focus_force(); self.setmode('select'); self.redraw()

    def dark_button(self,parent,text,cmd,width=3,fg='#f6f8f9'):
        return tk.Button(parent,text=text,command=cmd,width=width,height=1,bg='#1f282d',fg=fg,activebackground='#344148',activeforeground='#fff',relief='flat',bd=0,font=('Segoe UI',14,'bold'),cursor='hand2')

    def small_button(self,parent,text,cmd):
        return tk.Button(parent,text=text,command=cmd,width=2,height=1,bg='#344148',fg='#fff',activebackground='#4b5d66',activeforeground='#fff',relief='flat',bd=0,font=('Segoe UI',9,'bold'),cursor='hand2')

    def hide_tooltip(self):
        if self._tooltip_after:
            try:self.top.after_cancel(self._tooltip_after)
            except:pass
            self._tooltip_after=None
        if self._tooltip_win:
            try:self._tooltip_win.destroy()
            except:pass
            self._tooltip_win=None

    def add_tooltip(self,widget,text):
        def show():
            self._tooltip_after=None
            if self._tooltip_win:return
            try:
                x=self.top.winfo_pointerx()+14; y=self.top.winfo_pointery()+16
                tip=tk.Toplevel(self.top); tip.overrideredirect(True); tip.attributes('-topmost',True)
                tip.geometry(f'+{x}+{y}')
                tk.Label(tip,text=text,bg='#fff7d6',fg='#202124',relief='solid',bd=1,padx=7,pady=4,font=('Segoe UI',9)).pack()
                self._tooltip_win=tip
            except:pass
        def enter(_=None):
            self.hide_tooltip()
            try:self._tooltip_after=self.top.after(420,show)
            except:pass
        widget.bind('<Enter>',enter,add='+'); widget.bind('<Leave>',lambda e:self.hide_tooltip(),add='+')
        widget.bind('<ButtonPress>',lambda e:self.hide_tooltip(),add='+')

    def default_text_style(self):
        return {'size':self.text_size,'bold':False,'italic':False,'underline':False,'color':self.color}

    def normalize_style(self,style=None):
        base=self.default_text_style(); base.update(style or {})
        base['size']=max(10,min(96,int(base.get('size',self.text_size))))
        base['bold']=bool(base.get('bold',False)); base['italic']=bool(base.get('italic',False)); base['underline']=bool(base.get('underline',False))
        color=str(base.get('color',self.color))
        base['color']=color if color.startswith('#') and len(color)==7 else self.color
        return base

    def make_text_op(self,pos,text,styles=None):
        styles=styles or [self.default_text_style() for _ in text]
        normalized=[self.normalize_style(styles[i] if i<len(styles) else None) for i in range(len(text))]
        return {'kind':'text','pos':(float(pos[0]),float(pos[1])),'text':text,'styles':normalized}

    def is_text_op(self,op): return isinstance(op,dict) and op.get('kind')=='text'

    def setmode(self,m):
        if self.text_editor_frame and m!='text': self.commit_text_editor()
        self.mode=m
        for key,b in self.tool_buttons.items(): b.config(bg='#36454d' if key==m else '#1f282d')
        self.c.config(cursor='crosshair' if m!='select' else 'cross')
        self.refresh_size_controls()
        if m!='text': self.selected_text_index=None
        self.redraw()

    def refresh_size_controls(self):
        self.size_frame.pack_forget()
        if self.mode in ('pen','rect','arrow'):
            self.size_title.config(text='Nét'); self.size_value.config(text=str(self.pen_width)); self.size_frame.pack(before=self.undo_btn,pady=2,fill='x')
        elif self.mode=='text':
            self.size_title.config(text='Chữ'); self.size_value.config(text=str(self.text_size)); self.size_frame.pack(before=self.undo_btn,pady=2,fill='x')

    def adjust_size(self,delta):
        if self.mode=='text':
            self.text_size=max(12,min(72,self.text_size+delta*2)); self.a.cfg['text_size']=self.text_size
            if self.selected_text_index is not None and 0<=self.selected_text_index<len(self.ops) and self.is_text_op(self.ops[self.selected_text_index]):
                self.push_history()
                op=self.ops[self.selected_text_index]
                for style in op['styles']: style['size']=self.text_size
        else:
            self.pen_width=max(1,min(20,self.pen_width+delta)); self.a.cfg['pen_width']=self.pen_width
        save_cfg(self.a.cfg); self.refresh_size_controls(); self.redraw()

    def cycle_color(self):
        self.color_index=(self.color_index+1)%len(self.COLORS); self.color=self.COLORS[self.color_index]; self.color_btn.config(fg=self.color)

    def update_long_status(self,note=None):
        if not self.long_status:return
        state='Khóa' if self.long_locked else 'Chọn khung'
        text=note or f'Dài · {len(self.long_frames)} ảnh · {state}'
        try:self.long_status.config(text=text)
        except:pass

    def reset_frame_editor(self):
        try:self.destroy_text_editor()
        except:pass
        self.ops=[]; self.live=[]; self.points=[]; self.undo_stack=[]; self.redo_stack=[]
        self.selected_text_index=None; self.hover_text_index=None; self.start=None; self.drag_kind=None; self.drag_handle=None; self.original_sel=None; self.original_text_pos=None
        self.clear_live()

    def _append_long_current(self,reset=True):
        if self.text_editor_frame:self.commit_text_editor()
        if not self.long_current_dirty and self.long_frames:return False
        out=self.render_output()
        if not self.long_locked:
            x1,y1,x2,y2=map(int,self.sel); self.fixed_sel=(x1,y1,x2,y2); self.sel=self.fixed_sel; self.long_locked=True
        self.long_frames.append(out); self.long_redo_frames.clear(); self.long_committed_revision=self.long_revision; self.long_current_dirty=False
        if reset:self.reset_frame_editor()
        self.update_long_status(); self.redraw(); return True

    def commit_long_frame(self,event=None):
        if not self.long_mode:return self.finish()
        if isinstance(self.top.focus_get(),tk.Text):return None
        try:self._append_long_current(reset=True)
        except ValueError as error:messagebox.showinfo('Kanban Capture',str(error),parent=self.top)
        return 'break'

    def long_capture_shortcut(self,event=None):
        if isinstance(self.top.focus_get(),tk.Text):return None
        return self.commit_long_frame(event)

    def refresh_long_background(self):
        if not self.long_mode or not self.long_locked:return
        self._scroll_after=None
        try:
            from PIL import ImageGrab, ImageTk
            img=ImageGrab.grab(all_screens=True)
            self.img=img; self.w,self.h=img.size; self.photo=ImageTk.PhotoImage(img)
            self.c.itemconfigure('shot',image=self.photo)
            self.long_revision+=1; self.long_current_dirty=True
            self.reset_frame_editor(); self.sel=self.fixed_sel
        except Exception:
            pass
        finally:
            try:
                self.top.deiconify(); self.top.lift(); self.top.focus_force(); self.redraw()
            except:pass

    def long_scroll(self,event=None):
        if not self.long_mode or not self.long_locked:return None
        if self.text_editor_frame:return 'break'
        delta=int(getattr(event,'delta',0) or 0)
        if not delta:return 'break'
        try:
            if self._scroll_after:self.a.root.after_cancel(self._scroll_after)
        except:pass
        try:
            self.top.withdraw(); self.top.update_idletasks()
            u=ctypes.windll.user32
            hwnd=getattr(self.a,'capture_target_hwnd',None)
            if hwnd:
                try:u.SetForegroundWindow(hwnd)
                except:pass
            u.mouse_event(0x0800,0,0,ctypes.c_ulong(delta & 0xffffffff).value,0)
        except:pass
        self._scroll_after=self.a.root.after(360,self.refresh_long_background)
        return 'break'

    def copy_shortcut(self,event=None):
        if isinstance(self.top.focus_get(),tk.Text): return None
        self.finish(); return 'break'

    def finish_shortcut(self,event=None):
        if isinstance(self.top.focus_get(),tk.Text): return None
        self.finish(); return 'break'

    def clamp_point(self,x,y,to_selection=False):
        if to_selection and self.sel:
            x1,y1,x2,y2=self.sel; return max(x1,min(x2,x)),max(y1,min(y2,y))
        return max(0,min(self.w,x)),max(0,min(self.h,y))

    def p(self,e,to_selection=False): return self.clamp_point(e.x,e.y,to_selection)

    def clear_live(self):
        for item in self.live:self.c.delete(item)
        self.live=[]

    def rotate_point(self,p,cx,cy,angle=None):
        angle=self.sel_angle if angle is None else angle
        if abs(angle)<1e-9:return p
        x,y=p; r=math.radians(angle); co=math.cos(r); si=math.sin(r); dx=x-cx; dy=y-cy
        return (cx+dx*co-dy*si,cy+dx*si+dy*co)

    def unrotate_point(self,p,cx,cy,angle=None):
        angle=self.sel_angle if angle is None else angle
        return self.rotate_point(p,cx,cy,-angle)

    def base_selection_corners(self,angle=None):
        if not self.sel:return {}
        x1,y1,x2,y2=self.sel; cx=(x1+x2)/2; cy=(y1+y2)/2
        pts={'nw':(x1,y1),'ne':(x2,y1),'se':(x2,y2),'sw':(x1,y2)}
        if self.long_mode:return pts
        a=self.sel_angle if angle is None else angle
        if abs(a)<1e-9:return pts
        return {name:self.rotate_point(point,cx,cy,a) for name,point in pts.items()}

    def has_perspective(self):
        if self.long_mode:return False
        return any(abs(dx)>.05 or abs(dy)>.05 for dx,dy in self.corner_offsets.values())

    def selection_corner_dict(self):
        base=self.base_selection_corners()
        if self.long_mode:return base
        return {name:(p[0]+self.corner_offsets[name][0],p[1]+self.corner_offsets[name][1]) for name,p in base.items()}

    def selection_corners(self):
        if not self.sel:return []
        h=self.selection_corner_dict()
        return [h['nw'],h['ne'],h['se'],h['sw']]

    def rotation_handle_point(self):
        if not self.sel:return None
        h=self.selection_corner_dict(); nw,ne=h['nw'],h['ne']
        mx=(nw[0]+ne[0])/2; my=(nw[1]+ne[1])/2; dx=ne[0]-nw[0]; dy=ne[1]-nw[1]; length=max(1.0,math.hypot(dx,dy))
        return (mx+dy/length*30.0,my-dx/length*30.0)

    def handle_points(self):
        if not self.sel:return {}
        q=self.selection_corner_dict(); nw,ne,se,sw=q['nw'],q['ne'],q['se'],q['sw']
        pts=dict(q)
        pts.update({
            'n':((nw[0]+ne[0])/2,(nw[1]+ne[1])/2),
            'e':((ne[0]+se[0])/2,(ne[1]+se[1])/2),
            's':((sw[0]+se[0])/2,(sw[1]+se[1])/2),
            'w':((nw[0]+sw[0])/2,(nw[1]+sw[1])/2)
        })
        if not self.long_mode:pts['rot']=self.rotation_handle_point()
        return pts

    def selection_bbox(self):
        corners=self.selection_corners()
        if not corners:return self.sel
        xs=[p[0] for p in corners]; ys=[p[1] for p in corners]
        return (min(xs),min(ys),max(xs),max(ys))

    def hit_handle(self,p):
        px,py=p
        for name,point in self.handle_points().items():
            if not point:continue
            x,y=point
            if abs(px-x)<=12 and abs(py-y)<=12:return name
        return None

    def point_in_quad(self,p,corners=None):
        corners=corners or self.selection_corners()
        if len(corners)!=4:return False
        x,y=p; inside=False
        for i in range(4):
            x1,y1=corners[i]; x2,y2=corners[(i+1)%4]
            if ((y1>y)!=(y2>y)):
                xin=(x2-x1)*(y-y1)/(y2-y1)+x1
                if x<xin:inside=not inside
        return inside

    def inside(self,p):
        if not self.sel:return False
        return self.point_in_quad(p)

    def hit_text(self,p):
        x,y=p
        for index in sorted(self.text_boxes.keys(),reverse=True):
            box=self.text_boxes[index]
            if box[0]-5<=x<=box[2]+5 and box[1]-5<=y<=box[3]+5:return index
        return None

    def text_offset_at_point(self,op,p):
        text=op.get('text',''); styles=op.get('styles',[]); x0,y0=op.get('pos',(0,0)); px,py=p
        x=x0; y=y0; line_height=max(18,self.text_size+6)
        best=len(text); best_dist=float('inf')
        for i,ch in enumerate(text):
            style=self.normalize_style(styles[i] if i<len(styles) else None); font=self.canvas_font(style)
            if ch=='\n':
                if py<y+line_height:return i
                x=x0; y+=line_height; line_height=max(18,self.text_size+6); continue
            h=max(1,font.metrics('linespace')); line_height=max(line_height,h); width=max(1,font.measure(ch))
            if y-4<=py<=y+line_height+4:
                dist=abs(px-(x+width/2))
                if dist<best_dist:best=i+(1 if px>x+width/2 else 0); best_dist=dist
            x+=width
        return max(0,min(len(text),best))

    def hover(self,e):
        if self.text_editor_frame:return
        point=self.p(e); idx=self.hit_text(point) if self.mode=='text' else None; self.hover_text_index=idx
        if idx is not None:self.c.config(cursor='hand2')
        elif self.mode=='select':
            if self.long_mode and self.long_locked:self.c.config(cursor='arrow')
            else:
                handle=self.hit_handle(point)
                if not self.long_mode and handle in ('nw','ne','se','sw','rot'):self.c.config(cursor='hand2')
                elif handle:self.c.config(cursor='sizing')
                elif self.inside(point):self.c.config(cursor='fleur')
                else:self.c.config(cursor='cross')
        else:self.c.config(cursor='crosshair')

    def draw_dim(self):
        if not self.sel:
            self.c.create_rectangle(0,0,self.w,self.h,fill='black',stipple='gray25',outline='',tags='dim'); return
        if not self.long_mode and (abs(self.sel_angle)>.01 or self.has_perspective()):
            nw,ne,se,sw=self.selection_corners()
            polys=[[(0,0),(self.w,0),ne,nw],[(self.w,0),(self.w,self.h),se,ne],[(self.w,self.h),(0,self.h),sw,se],[(0,self.h),(0,0),nw,sw]]
            for poly in polys:self.c.create_polygon(*[v for p in poly for v in p],fill='black',stipple='gray50',outline='',tags='dim')
            return
        x1,y1,x2,y2=self.sel
        for box in [(0,0,self.w,y1),(0,y2,self.w,self.h),(0,y1,x1,y2),(x2,y1,self.w,y2)]:
            self.c.create_rectangle(*box,fill='black',stipple='gray50',outline='',tags='dim')

    def draw_selection(self):
        if not self.sel:return
        x1,y1,x2,y2=self.sel; blue='#168cff'; orange='#ff9f0a'; green='#39d98a'
        points=self.handle_points(); corners=self.selection_corners()
        if not self.long_mode and (abs(self.sel_angle)>.01 or self.has_perspective()):
            flat=[v for p in corners for v in p]; self.c.create_polygon(*flat,outline=blue,fill='',width=2,tags='selection')
        else:self.c.create_rectangle(x1,y1,x2,y2,outline=blue,width=2,tags='selection')
        if not (self.long_mode and self.long_locked):
            for name,point in points.items():
                if not point:continue
                x,y=point
                if name=='rot':
                    n=points.get('n')
                    if n:self.c.create_line(n[0],n[1],x,y,fill=green,width=2,tags='selection')
                    self.c.create_oval(x-7,y-7,x+7,y+7,fill=green,outline='white',width=1,tags='selection'); continue
                is_corner=(not self.long_mode and name in ('nw','ne','se','sw'))
                fill=orange if is_corner else blue; radius=7 if is_corner else 5
                self.c.create_oval(x-radius,y-radius,x+radius,y+radius,fill=fill,outline='white',width=1,tags='selection')
        label=f'{int(x2-x1)} × {int(y2-y1)}'
        if not self.long_mode and abs(self.sel_angle)>.01:label+=f' · {self.sel_angle:+.1f}°'
        if not self.long_mode and self.has_perspective():label+=' · PHỐI CẢNH'
        if self.long_mode and self.long_locked:label+=' · KHÓA'
        bx1,by1,bx2,by2=self.selection_bbox()
        self.c.create_text(bx1+8,max(12,by1-13),text=label,anchor='sw',fill='white',font=('Segoe UI',10,'bold'),tags='selection')

    def canvas_font(self,style):
        style=self.normalize_style(style); key=(style['size'],style['bold'],style['italic'],style['underline'])
        if key not in self._font_cache:
            self._font_cache[key]=tkfont.Font(family='Segoe UI',size=style['size'],weight='bold' if style['bold'] else 'normal',slant='italic' if style['italic'] else 'roman',underline=1 if style['underline'] else 0)
        return self._font_cache[key]

    def draw_rich_text_canvas(self,index,op):
        text=op.get('text',''); styles=op.get('styles',[]); x0,y0=op.get('pos',(0,0)); x=x0; y=y0
        minx=x0; miny=y0; maxx=x0; maxy=y0; line_height=max(18,self.text_size+6)
        for i,ch in enumerate(text):
            style=self.normalize_style(styles[i] if i<len(styles) else None); font=self.canvas_font(style)
            if ch=='\n':
                x=x0; y+=line_height; line_height=max(18,self.text_size+6); maxy=max(maxy,y); continue
            h=max(1,font.metrics('linespace')); line_height=max(line_height,h)
            width=max(1,font.measure(ch))
            if ch!=' ':
                item=self.c.create_text(x,y,text=ch,fill=style['color'],font=font,anchor='nw',tags='ann')
                bbox=self.c.bbox(item)
                if bbox:
                    minx=min(minx,bbox[0]); miny=min(miny,bbox[1]); maxx=max(maxx,bbox[2]); maxy=max(maxy,bbox[3])
            x+=width; maxx=max(maxx,x); maxy=max(maxy,y+h)
        self.text_boxes[index]=(minx,miny,maxx,maxy)
        if index==self.selected_text_index:
            self.c.create_rectangle(minx-4,miny-4,maxx+4,maxy+4,outline='#33a1ff',dash=(4,3),width=1,tags='ann')

    def draw_annotations(self):
        self.text_boxes={}
        for index,op in enumerate(self.ops):
            if self.is_text_op(op): self.draw_rich_text_canvas(index,op); continue
            k=op[0]
            if k=='pen': self.c.create_line(*op[1],fill=op[2],width=op[3],smooth=True,tags='ann')
            elif k=='rect': self.c.create_rectangle(*op[1],outline=op[2],width=op[3],tags='ann')
            elif k=='arrow': self.c.create_line(*op[1],fill=op[2],width=op[3],arrow='last',arrowshape=(16,20,7),tags='ann')
            elif k=='mosaic': self.c.create_rectangle(*op[1],outline='#8f9ba1',fill='#8f9ba1',stipple='gray50',tags='ann')

    def place_toolbars(self):
        if not self.sel:
            self.c.itemconfigure(self.tool_win,state='hidden'); self.c.itemconfigure(self.action_win,state='hidden'); return
        self.top.update_idletasks(); x1,y1,x2,y2=self.selection_bbox()
        tw=max(42,self.tool.winfo_reqwidth()); th=max(180,self.tool.winfo_reqheight())
        aw=max(230,self.action.winfo_reqwidth()); ah=max(44,self.action.winfo_reqheight())
        tx=x2+9 if x2+9+tw<self.w-6 else max(6,x1-tw-9); ty=max(6,min(self.h-th-6,(y1+y2-th)/2))
        ax=max(6,min(self.w-aw-6,x2-aw)); ay=y2+9 if y2+9+ah<self.h-6 else max(6,y1-ah-9)
        self.c.coords(self.tool_win,tx,ty); self.c.coords(self.action_win,ax,ay)
        self.c.itemconfigure(self.tool_win,state='normal'); self.c.itemconfigure(self.action_win,state='normal'); self.c.tag_raise('ui')
        if self.text_editor_win:self.c.tag_raise(self.text_editor_win)

    def redraw(self):
        self.c.delete('dim'); self.c.delete('selection'); self.c.delete('ann')
        self.draw_dim(); self.draw_annotations(); self.draw_selection(); self.place_toolbars()

    def begin_select_drag(self,p):
        if self.long_mode and self.long_locked:
            self.start=None; self.drag_kind=None; self.drag_handle=None; return
        self.push_history()
        handle=self.hit_handle(p); self.original_sel=tuple(self.sel) if self.sel else None; self.original_angle=self.sel_angle; self.original_corner_offsets=copy.deepcopy(self.corner_offsets)
        if handle=='rot' and not self.long_mode and self.sel:
            x1,y1,x2,y2=self.sel; cx=(x1+x2)/2; cy=(y1+y2)/2
            self.drag_kind='rotate'; self.drag_handle=handle; self.rotation_start_mouse_angle=math.atan2(p[1]-cy,p[0]-cx)
        elif handle and not self.long_mode and handle in ('nw','ne','se','sw'):
            self.drag_kind='perspective'; self.drag_handle=handle
        elif handle:self.drag_kind='resize'; self.drag_handle=handle
        elif self.inside(p):self.drag_kind='move'
        else:
            self.drag_kind='new'; self.sel=(p[0],p[1],p[0],p[1]); self.sel_angle=0.0
            self.corner_offsets={'nw':(0.0,0.0),'ne':(0.0,0.0),'se':(0.0,0.0),'sw':(0.0,0.0)}
            self.ops=[]; self.selected_text_index=None

    def style_tag_name(self,style):
        s=self.normalize_style(style); color=s['color'].replace('#','')
        return f"{self.STYLE_PREFIX}{s['size']}_{1 if s['bold'] else 0}_{1 if s['italic'] else 0}_{1 if s['underline'] else 0}_{color}"

    def style_from_tag(self,tag):
        try:
            body=tag[len(self.STYLE_PREFIX):]; parts=body.split('_')
            if len(parts)==5:
                size,bold,italic,underline,color=parts
            else:
                size,bold,underline,color=parts; italic='0'
            return self.normalize_style({'size':int(size),'bold':bold=='1','italic':italic=='1','underline':underline=='1','color':'#'+color})
        except:return self.default_text_style()

    def ensure_style_tag(self,editor,style):
        style=self.normalize_style(style); tag=self.style_tag_name(style)
        editor.tag_configure(tag,font=self.canvas_font(style),foreground=style['color'])
        return tag

    def editor_style_at(self,index):
        editor=self.text_editor_widget
        for tag in reversed(editor.tag_names(index)):
            if tag.startswith(self.STYLE_PREFIX):return self.style_from_tag(tag)
        return self.default_text_style()

    def remove_style_tags(self,start,end):
        editor=self.text_editor_widget
        for tag in editor.tag_names():
            if tag.startswith(self.STYLE_PREFIX):editor.tag_remove(tag,start,end)

    def ensure_editor_styles(self):
        editor=self.text_editor_widget
        if not editor:return
        text=editor.get('1.0','end-1c')
        for offset,ch in enumerate(text):
            if ch=='\n':continue
            idx=editor.index(f'1.0+{offset}c')
            if not any(t.startswith(self.STYLE_PREFIX) for t in editor.tag_names(idx)):
                end=editor.index(f'{idx}+1c'); editor.tag_add(self.ensure_style_tag(editor,self.default_text_style()),idx,end)

    def selection_indices(self):
        editor=self.text_editor_widget
        try:return editor.index('sel.first'),editor.index('sel.last')
        except tk.TclError:return None

    def selected_offsets(self):
        pair=self.selection_indices()
        if not pair:return None
        editor=self.text_editor_widget
        # Tk Text.count() returns None when both indexes are identical.
        # Ctrl+A always starts at 1.0, so counting 1.0 -> 1.0 must be treated as offset 0.
        start_count=editor.count('1.0',pair[0],'chars')
        end_count=editor.count('1.0',pair[1],'chars')
        start=int(start_count[0]) if start_count else 0
        end=int(end_count[0]) if end_count else 0
        return start,end

    def update_format_bar(self,event=None):
        if not self.text_format_bar:return
        self.ensure_editor_styles()
        sel=self.selection_indices()
        if not sel:
            self.text_format_bar.pack_forget(); return
        self.text_format_bar.pack(fill='x',before=self.text_editor_actions,pady=(0,6))
        style=self.editor_style_at(sel[0])
        if self.text_format_size_label:self.text_format_size_label.config(text=str(style['size']))

    def apply_selection_transform(self,transform):
        editor=self.text_editor_widget; offsets=self.selected_offsets()
        if not editor or not offsets:return
        self.ensure_editor_styles(); start_off,end_off=offsets; text=editor.get('1.0','end-1c')
        for offset in range(start_off,min(end_off,len(text))):
            if text[offset]=='\n':continue
            idx=editor.index(f'1.0+{offset}c'); nxt=editor.index(f'{idx}+1c')
            style=transform(dict(self.editor_style_at(idx)))
            self.remove_style_tags(idx,nxt); editor.tag_add(self.ensure_style_tag(editor,style),idx,nxt)
        editor.tag_add('sel',editor.index(f'1.0+{start_off}c'),editor.index(f'1.0+{end_off}c'))
        editor.focus_set(); self.update_format_bar()

    def format_size(self,delta):
        def change(style): style['size']=max(10,min(96,int(style.get('size',self.text_size))+delta*2)); return style
        self.apply_selection_transform(change)

    def format_toggle(self,key):
        offsets=self.selected_offsets()
        if not offsets:return
        start,end=offsets; text=self.text_editor_widget.get('1.0','end-1c'); states=[]
        for offset in range(start,min(end,len(text))):
            if text[offset]=='\n':continue
            idx=self.text_editor_widget.index(f'1.0+{offset}c'); states.append(bool(self.editor_style_at(idx).get(key,False)))
        target=not (states and all(states))
        self.apply_selection_transform(lambda style:{**style,key:target})

    def format_color(self,color): self.apply_selection_transform(lambda style:{**style,'color':color})

    def build_format_bar(self,parent):
        bar=tk.Frame(parent,bg='#28343a',padx=5,pady=4)
        tk.Label(bar,text='Đang chọn:',bg='#28343a',fg='#cfd8dc',font=('Segoe UI',8)).pack(side='left',padx=(0,4))
        tk.Button(bar,text='A−',command=lambda:self.format_size(-1),bg='#344148',fg='#fff',relief='flat',bd=0,padx=6).pack(side='left',padx=1)
        self.text_format_size_label=tk.Label(bar,text=str(self.text_size),width=3,bg='#28343a',fg='#fff',font=('Segoe UI',9,'bold')); self.text_format_size_label.pack(side='left')
        tk.Button(bar,text='A+',command=lambda:self.format_size(1),bg='#344148',fg='#fff',relief='flat',bd=0,padx=6).pack(side='left',padx=1)
        tk.Button(bar,text='B',command=lambda:self.format_toggle('bold'),bg='#344148',fg='#fff',relief='flat',bd=0,padx=8,font=('Segoe UI',9,'bold')).pack(side='left',padx=(5,1))
        tk.Button(bar,text='I',command=lambda:self.format_toggle('italic'),bg='#344148',fg='#fff',relief='flat',bd=0,padx=8,font=('Segoe UI',9,'italic')).pack(side='left',padx=1)
        tk.Button(bar,text='U',command=lambda:self.format_toggle('underline'),bg='#344148',fg='#fff',relief='flat',bd=0,padx=8,font=('Segoe UI',9,'underline')).pack(side='left',padx=1)
        for color in self.COLORS:
            tk.Button(bar,text=' ',command=lambda c=color:self.format_color(c),bg=color,activebackground=color,width=1,relief='flat',bd=1).pack(side='left',padx=1)
        return bar

    def open_text_editor(self,pos,edit_index=None,click_pos=None):
        self.cancel_text_editor(); self.text_editor_index=edit_index; self.text_editor_pos=pos
        op=self.ops[edit_index] if edit_index is not None and 0<=edit_index<len(self.ops) and self.is_text_op(self.ops[edit_index]) else None
        existing=op.get('text','') if op else ''
        styles=op.get('styles',[]) if op else []
        lines=existing.split('\n') if existing else ['']; cols=max(12,min(52,max([len(line) for line in lines]+[12])+2)); rows=max(1,min(8,len(lines)))
        frame=tk.Frame(self.top,bg='#1f282d',padx=3,pady=3,bd=0,highlightthickness=1,highlightbackground='#2f89ff')
        editor=tk.Text(frame,width=cols,height=rows,wrap='none',undo=True,maxundo=100,font=('Segoe UI',self.text_size),bg='#ffffff',fg='#111111',insertbackground='#111111',selectbackground='#2f89ff',selectforeground='#ffffff',exportselection=False,relief='flat',bd=0,padx=2,pady=2)
        editor.pack(fill='both',expand=True); editor.insert('1.0',existing)
        self.text_editor_frame=frame; self.text_editor_widget=editor
        for i,ch in enumerate(existing):
            if ch=='\n':continue
            style=styles[i] if i<len(styles) else self.default_text_style()
            a=editor.index(f'1.0+{i}c'); b=editor.index(f'{a}+1c'); editor.tag_add(self.ensure_style_tag(editor,style),a,b)
        self.text_format_bar=self.build_format_bar(frame)
        self.text_editor_actions=tk.Frame(frame,bg='#1f282d'); self.text_editor_actions.pack(fill='x',pady=(3,0))
        cancel_btn=tk.Button(self.text_editor_actions,text='✕ Hủy',command=self.cancel_text_editor,bg='#344148',fg='#fff',relief='flat',bd=0,padx=8,pady=2,cursor='hand2'); cancel_btn.pack(side='left')
        done_btn=tk.Button(self.text_editor_actions,text='✓ Xong',command=self.commit_text_editor,bg='#2e8b67',fg='#fff',relief='flat',bd=0,padx=8,pady=2,cursor='hand2'); done_btn.pack(side='right')
        self.add_tooltip(cancel_btn,'Hủy thay đổi chữ (Esc)'); self.add_tooltip(done_btn,'Lưu thay đổi chữ (Ctrl+Enter)')
        x,y=pos
        if self.sel:
            sx1,sy1,sx2,sy2=self.sel
            x=max(sx1,min(sx2-120,x)); y=max(sy1,min(sy2-48,y))
        x=max(6,min(self.w-140,x)); y=max(6,min(self.h-60,y))
        self.text_editor_win=self.c.create_window(x,y,window=frame,anchor='nw',tags='ui')
        editor.bind('<Control-Return>',lambda e:(self.commit_text_editor(),'break')[1])
        editor.bind('<Escape>',lambda e:(self.cancel_text_editor(),'break')[1])
        editor.bind('<Control-b>',lambda e:(self.format_toggle('bold'),'break')[1]); editor.bind('<Control-B>',lambda e:(self.format_toggle('bold'),'break')[1])
        editor.bind('<Control-i>',lambda e:(self.format_toggle('italic'),'break')[1]); editor.bind('<Control-I>',lambda e:(self.format_toggle('italic'),'break')[1])
        editor.bind('<Control-u>',lambda e:(self.format_toggle('underline'),'break')[1]); editor.bind('<Control-U>',lambda e:(self.format_toggle('underline'),'break')[1])
        editor.bind('<Control-a>',self.select_all_text_editor); editor.bind('<Control-A>',self.select_all_text_editor)
        editor.bind('<KeyRelease>',self.update_format_bar); editor.bind('<ButtonRelease-1>',self.update_format_bar); editor.bind('<<Selection>>',self.update_format_bar)
        editor.focus_set()
        offset=self.text_offset_at_point(op,click_pos) if op and click_pos else len(existing)
        editor.mark_set('insert',f'1.0+{offset}c'); editor.see('insert')
        self.ensure_editor_styles(); self.update_format_bar(); self.c.tag_raise(self.text_editor_win)

    def select_all_text_editor(self,event=None):
        editor=self.text_editor_widget
        if not editor:return 'break'
        editor.tag_add('sel','1.0','end-1c'); editor.mark_set('insert','end-1c')
        self.update_format_bar()
        return 'break'

    def collect_editor_styles(self,text):
        editor=self.text_editor_widget; result=[]
        for i,ch in enumerate(text):
            if ch=='\n': result.append(self.default_text_style()); continue
            idx=editor.index(f'1.0+{i}c'); result.append(self.normalize_style(self.editor_style_at(idx)))
        return result

    def commit_text_editor(self):
        if not self.text_editor_frame:return
        self.ensure_editor_styles(); text=self.text_editor_widget.get('1.0','end-1c'); styles=self.collect_editor_styles(text)
        index=self.text_editor_index; pos=self.text_editor_pos
        existing_edit=index is not None and 0<=index<len(self.ops) and self.is_text_op(self.ops[index])
        if text.strip():
            self.push_history()
            if existing_edit:
                old=self.ops[index]; self.ops[index]=self.make_text_op(old.get('pos',pos),text,styles); self.selected_text_index=index
            else:
                self.ops.append(self.make_text_op(pos,text,styles)); self.selected_text_index=len(self.ops)-1
        elif existing_edit:
            self.push_history(); self.ops.pop(index); self.selected_text_index=None
        self.destroy_text_editor(); self.redraw()

    def cancel_text_editor(self):
        if self.text_editor_frame:self.destroy_text_editor(); self.redraw()

    def destroy_text_editor(self):
        if self.text_editor_win:
            try:self.c.delete(self.text_editor_win)
            except:pass
        try:
            if self.text_editor_frame:self.text_editor_frame.destroy()
        except:pass
        self.text_editor_frame=None; self.text_editor_win=None; self.text_editor_widget=None; self.text_editor_index=None; self.text_editor_pos=None
        self.text_format_bar=None; self.text_format_size_label=None; self.text_editor_actions=None
        try:self.top.focus_force()
        except:pass

    def double_click(self,e):
        if self.mode!='text' or not self.sel:return
        point=self.p(e); idx=self.hit_text(point)
        if idx is not None and self.is_text_op(self.ops[idx]):
            self.selected_text_index=idx; self.open_text_editor(self.ops[idx]['pos'],idx,point); return 'break'

    def down(self,e):
        if e.widget is not self.c:return
        if self.text_editor_frame:return
        raw=self.p(e)
        if self.mode=='select':
            self.start=raw; self.begin_select_drag(raw); self.redraw(); return
        if not self.sel:return
        if self.mode=='text':
            idx=self.hit_text(raw)
            if idx is not None and self.is_text_op(self.ops[idx]):
                self.push_history(); self.selected_text_index=idx; self.start=raw; self.drag_kind='textmove'; self.original_text_pos=self.ops[idx]['pos']; self.c.config(cursor='hand2'); self.redraw(); return
            self.selected_text_index=None; self.open_text_editor(self.p(e,True)); self.start=None; return
        self.selected_text_index=None; self.start=self.p(e,True); self.drag_kind='draw'; self.clear_live()
        if self.mode=='pen':self.points=[*self.start]

    def resize_selection(self,p):
        if not self.original_sel:return
        if self.long_mode or abs(self.original_angle)<.01:
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
            self.sel=(max(0,x1),max(0,y1),min(self.w,x2),min(self.h,y2)); return
        ox1,oy1,ox2,oy2=self.original_sel; ocx=(ox1+ox2)/2; ocy=(oy1+oy2)/2
        local=self.unrotate_point(p,ocx,ocy,self.original_angle); lx=local[0]-ocx; ly=local[1]-ocy
        left=-(ox2-ox1)/2; right=(ox2-ox1)/2; top=-(oy2-oy1)/2; bottom=(oy2-oy1)/2; h=self.drag_handle
        if h=='w':left=min(lx,right-12)
        elif h=='e':right=max(lx,left+12)
        elif h=='n':top=min(ly,bottom-12)
        elif h=='s':bottom=max(ly,top+12)
        offx=(left+right)/2; offy=(top+bottom)/2; width=right-left; height=bottom-top
        r=math.radians(self.original_angle); co=math.cos(r); si=math.sin(r)
        ncx=ocx+offx*co-offy*si; ncy=ocy+offx*si+offy*co
        self.sel=(ncx-width/2,ncy-height/2,ncx+width/2,ncy+height/2)

    def quad_is_valid(self,corners):
        if len(corners)!=4:return False
        area=0.0; signs=[]
        for i in range(4):
            x1,y1=corners[i]; x2,y2=corners[(i+1)%4]; x3,y3=corners[(i+2)%4]
            area+=x1*y2-x2*y1
            cross=(x2-x1)*(y3-y2)-(y2-y1)*(x3-x2)
            if abs(cross)>1e-6:signs.append(cross>0)
        return abs(area)>.0 and abs(area)/2>300 and signs and all(s==signs[0] for s in signs)

    def move_perspective_corner(self,p):
        name=self.drag_handle
        if name not in ('nw','ne','se','sw') or not self.original_sel:return
        base=self.base_selection_corners()
        old=self.corner_offsets[name]; self.corner_offsets[name]=(p[0]-base[name][0],p[1]-base[name][1])
        if not self.quad_is_valid(self.selection_corners()):self.corner_offsets[name]=old

    def rotate_selection(self,p):
        if not self.original_sel or self.rotation_start_mouse_angle is None:return
        x1,y1,x2,y2=self.original_sel; cx=(x1+x2)/2; cy=(y1+y2)/2
        now=math.atan2(p[1]-cy,p[0]-cx); delta=math.degrees(now-self.rotation_start_mouse_angle)
        while delta>180:delta-=360
        while delta<-180:delta+=360
        angle=self.original_angle+delta
        if abs(angle)<.35:angle=0.0
        self.sel_angle=max(-45.0,min(45.0,angle))
        if self.original_corner_offsets is not None:
            old_base=self.base_selection_corners(self.original_angle); new_base=self.base_selection_corners(self.sel_angle)
            r=math.radians(self.sel_angle-self.original_angle); co=math.cos(r); si=math.sin(r)
            for name in ('nw','ne','se','sw'):
                op=(old_base[name][0]+self.original_corner_offsets[name][0],old_base[name][1]+self.original_corner_offsets[name][1])
                dx=op[0]-cx; dy=op[1]-cy; target=(cx+dx*co-dy*si,cy+dx*si+dy*co)
                self.corner_offsets[name]=(target[0]-new_base[name][0],target[1]-new_base[name][1])

    def move_selection(self,p):
        if not self.original_sel or not self.start:return
        ox1,oy1,ox2,oy2=self.original_sel; dx=p[0]-self.start[0]; dy=p[1]-self.start[1]
        sw=ox2-ox1; sh=oy2-oy1; nx=max(0,min(self.w-sw,ox1+dx)); ny=max(0,min(self.h-sh,oy1+dy)); self.sel=(nx,ny,nx+sw,ny+sh)

    def move_text(self,p):
        idx=self.selected_text_index
        if idx is None or self.original_text_pos is None or not self.start or not self.is_text_op(self.ops[idx]):return
        dx=p[0]-self.start[0]; dy=p[1]-self.start[1]; ox,oy=self.original_text_pos; nx,ny=self.clamp_point(ox+dx,oy+dy,True)
        self.ops[idx]['pos']=(nx,ny)

    def move(self,e):
        if not self.start:return
        if self.mode=='select':
            p=self.p(e)
            if self.drag_kind=='new':self.sel=(min(self.start[0],p[0]),min(self.start[1],p[1]),max(self.start[0],p[0]),max(self.start[1],p[1]))
            elif self.drag_kind=='move':self.move_selection(p)
            elif self.drag_kind=='resize':self.resize_selection(p)
            elif self.drag_kind=='perspective':self.move_perspective_corner(p)
            elif self.drag_kind=='rotate':self.rotate_selection(p)
            self.redraw(); return
        if self.mode=='text' and self.drag_kind=='textmove':
            self.move_text(self.p(e,True)); self.c.config(cursor='hand2'); self.redraw(); return
        q=self.p(e,True); x,y=self.start; self.clear_live()
        if self.mode=='pen':
            self.points.extend(q); self.live=[self.c.create_line(*self.points,fill=self.color,width=self.pen_width,smooth=True,tags='live')]
        elif self.mode=='rect':self.live=[self.c.create_rectangle(x,y,*q,outline=self.color,width=self.pen_width,tags='live')]
        elif self.mode=='arrow':self.live=[self.c.create_line(x,y,*q,fill=self.color,width=self.pen_width,arrow='last',tags='live')]
        elif self.mode=='mosaic':self.live=[self.c.create_rectangle(x,y,*q,outline='#8f9ba1',fill='#8f9ba1',stipple='gray50',tags='live')]

    def up(self,e):
        if not self.start:return
        if self.mode=='select':
            if self.sel and (self.sel[2]-self.sel[0]<8 or self.sel[3]-self.sel[1]<8):self.sel=self.original_sel
            self.start=None; self.drag_kind=None; self.drag_handle=None; self.original_sel=None; self.rotation_start_mouse_angle=None; self.original_corner_offsets=None; self.redraw(); return
        if self.mode=='text' and self.drag_kind=='textmove':
            self.start=None; self.drag_kind=None; self.original_text_pos=None; self.redraw(); return
        q=self.p(e,True); x,y=self.start; self.clear_live()
        if abs(q[0]-x)>=2 or abs(q[1]-y)>=2:
            self.push_history()
            if self.mode=='pen':self.ops.append(('pen',tuple(self.points),self.color,self.pen_width))
            elif self.mode=='rect':self.ops.append(('rect',(x,y,*q),self.color,self.pen_width))
            elif self.mode=='arrow':self.ops.append(('arrow',(x,y,*q),self.color,self.pen_width))
            elif self.mode=='mosaic':self.ops.append(('mosaic',(min(x,q[0]),min(y,q[1]),max(x,q[0]),max(y,q[1]))))
        self.start=None; self.redraw()

    def snapshot_state(self):
        return {'sel':copy.deepcopy(self.sel),'sel_angle':float(self.sel_angle),'corner_offsets':copy.deepcopy(self.corner_offsets),'ops':copy.deepcopy(self.ops)}

    def restore_state(self,state):
        self.sel=copy.deepcopy(state.get('sel')); self.sel_angle=float(state.get('sel_angle',0.0))
        self.corner_offsets=copy.deepcopy(state.get('corner_offsets',{'nw':(0.0,0.0),'ne':(0.0,0.0),'se':(0.0,0.0),'sw':(0.0,0.0)}))
        self.ops=copy.deepcopy(state.get('ops',[])); self.selected_text_index=None
        self.start=None; self.drag_kind=None; self.drag_handle=None; self.original_sel=None; self.original_text_pos=None; self.rotation_start_mouse_angle=None; self.original_corner_offsets=None; self.clear_live(); self.redraw()

    def push_history(self):
        if self.long_mode:self.long_current_dirty=True
        snap=self.snapshot_state()
        if self.undo_stack and self.undo_stack[-1]==snap:return
        self.undo_stack.append(snap)
        if len(self.undo_stack)>80:self.undo_stack.pop(0)
        self.redo_stack.clear()

    def undo(self):
        if self.text_editor_frame:
            try:self.text_editor_widget.edit_undo()
            except tk.TclError:pass
            self.update_format_bar(); return
        if self.undo_stack:
            self.redo_stack.append(self.snapshot_state()); self.restore_state(self.undo_stack.pop()); return
        if self.long_mode and self.long_frames:
            self.long_redo_frames.append(self.long_frames.pop()); self.long_current_dirty=False; self.update_long_status('Dài · hoàn tác 1 đoạn'); self.redraw()

    def redo(self):
        if self.text_editor_frame:
            try:self.text_editor_widget.edit_redo()
            except tk.TclError:pass
            self.update_format_bar(); return
        if self.redo_stack:
            self.undo_stack.append(self.snapshot_state()); self.restore_state(self.redo_stack.pop()); return
        if self.long_mode and self.long_redo_frames:
            self.long_frames.append(self.long_redo_frames.pop()); self.long_current_dirty=False; self.update_long_status('Dài · làm lại 1 đoạn'); self.redraw()

    def undo_shortcut(self,event=None):
        self.undo(); return 'break'

    def redo_shortcut(self,event=None):
        self.redo(); return 'break'

    def delete_selected_text(self,event=None):
        if self.text_editor_frame and isinstance(self.top.focus_get(),tk.Text):return None
        idx=self.selected_text_index if self.selected_text_index is not None else self.hover_text_index
        if idx is not None and 0<=idx<len(self.ops) and self.is_text_op(self.ops[idx]):
            self.push_history(); self.ops.pop(idx); self.selected_text_index=None; self.hover_text_index=None; self.redraw(); return 'break'
        return None

    def pil_font(self,style):
        from PIL import ImageFont
        style=self.normalize_style(style)
        if style['bold'] and style['italic']:names=['arialbi.ttf','segoeuiz.ttf','DejaVuSans-BoldOblique.ttf']
        elif style['bold']:names=['arialbd.ttf','segoeuib.ttf','DejaVuSans-Bold.ttf']
        elif style['italic']:names=['ariali.ttf','segoeuii.ttf','DejaVuSans-Oblique.ttf']
        else:names=['arial.ttf','segoeui.ttf','DejaVuSans.ttf']
        for name in names:
            try:return ImageFont.truetype(name,style['size'])
            except:pass
        return ImageFont.load_default()

    def draw_rich_text_pil(self,d,op,x1,y1):
        text=op.get('text',''); styles=op.get('styles',[]); base_x=op.get('pos',(0,0))[0]-x1; x=base_x; y=op.get('pos',(0,0))[1]-y1; line_height=max(18,self.text_size+6)
        for i,ch in enumerate(text):
            style=self.normalize_style(styles[i] if i<len(styles) else None); font=self.pil_font(style)
            if ch=='\n':
                x=base_x; y+=line_height; line_height=max(18,self.text_size+6); continue
            try:
                bbox=d.textbbox((0,0),ch,font=font,stroke_width=1); width=max(1,bbox[2]-bbox[0]); height=max(1,bbox[3]-bbox[1])
            except:
                width=max(1,int(style['size']*.6)); height=max(1,style['size'])
            line_height=max(line_height,height+5)
            d.text((x,y),ch,fill=style['color'],font=font,stroke_width=1,stroke_fill='#000000')
            if style['underline'] and ch!=' ':
                uy=y+height+2; d.line((x,uy,x+width,uy),fill=style['color'],width=max(1,style['size']//14))
            x+=width

    def render_source_with_annotations(self):
        from PIL import ImageDraw
        out=self.img.copy(); d=ImageDraw.Draw(out)
        for op in self.ops:
            if self.is_text_op(op):self.draw_rich_text_pil(d,op,0,0); continue
            k=op[0]
            if k=='pen':
                pts=[(op[1][i],op[1][i+1]) for i in range(0,len(op[1]),2)]; d.line(pts,fill=op[2],width=op[3],joint='curve')
            elif k=='rect':d.rectangle(op[1],outline=op[2],width=op[3])
            elif k=='arrow':
                ax,ay,bx,by=op[1]; d.line((ax,ay,bx,by),fill=op[2],width=op[3]); ang=math.atan2(by-ay,bx-ax); L=16+op[3]*2
                d.polygon([(bx,by),(bx-L*math.cos(ang-.5),by-L*math.sin(ang-.5)),(bx-L*math.cos(ang+.5),by-L*math.sin(ang+.5))],fill=op[2])
            elif k=='mosaic':
                a,b,c,e=map(int,op[1]); box=(max(0,a),max(0,b),min(out.width,c),min(out.height,e))
                if box[2]>box[0] and box[3]>box[1]:
                    reg=out.crop(box); small=reg.resize((max(1,reg.width//14),max(1,reg.height//14))); out.paste(small.resize(reg.size),box)
        return out

    def solve_linear_system(self,matrix,values):
        n=len(values); a=[list(map(float,matrix[i]))+[float(values[i])] for i in range(n)]
        for col in range(n):
            pivot=max(range(col,n),key=lambda r:abs(a[r][col]))
            if abs(a[pivot][col])<1e-10:raise ValueError('Khung phối cảnh không hợp lệ. Hãy chỉnh lại 4 góc.')
            if pivot!=col:a[col],a[pivot]=a[pivot],a[col]
            div=a[col][col]
            for j in range(col,n+1):a[col][j]/=div
            for row in range(n):
                if row==col:continue
                factor=a[row][col]
                if abs(factor)<1e-15:continue
                for j in range(col,n+1):a[row][j]-=factor*a[col][j]
        return [a[i][n] for i in range(n)]

    def perspective_coefficients(self,dst_points,src_points):
        # Pillow PERSPECTIVE needs the inverse map: each output point -> source point.
        matrix=[]; values=[]
        for (x,y),(u,v) in zip(dst_points,src_points):
            matrix.append([x,y,1,0,0,0,-u*x,-u*y]); values.append(u)
            matrix.append([0,0,0,x,y,1,-v*x,-v*y]); values.append(v)
        return tuple(self.solve_linear_system(matrix,values))

    def render_output(self):
        if not self.sel:raise ValueError('Hãy kéo chọn vùng cần chụp.')
        from PIL import Image, ImageDraw
        x1,y1,x2,y2=self.sel
        if self.long_mode or (abs(self.sel_angle)<.01 and not self.has_perspective()):
            x1i,y1i,x2i,y2i=map(int,(x1,y1,x2,y2)); out=self.img.crop((x1i,y1i,x2i,y2i)); d=ImageDraw.Draw(out)
            for op in self.ops:
                if self.is_text_op(op): self.draw_rich_text_pil(d,op,x1i,y1i); continue
                k=op[0]
                if k=='pen':
                    pts=[(op[1][i]-x1i,op[1][i+1]-y1i) for i in range(0,len(op[1]),2)]; d.line(pts,fill=op[2],width=op[3],joint='curve')
                elif k=='rect':d.rectangle((op[1][0]-x1i,op[1][1]-y1i,op[1][2]-x1i,op[1][3]-y1i),outline=op[2],width=op[3])
                elif k=='arrow':
                    ax,ay,bx,by=op[1]; ax-=x1i; ay-=y1i; bx-=x1i; by-=y1i; d.line((ax,ay,bx,by),fill=op[2],width=op[3]); ang=math.atan2(by-ay,bx-ax); L=16+op[3]*2
                    d.polygon([(bx,by),(bx-L*math.cos(ang-.5),by-L*math.sin(ang-.5)),(bx-L*math.cos(ang+.5),by-L*math.sin(ang+.5))],fill=op[2])
                elif k=='mosaic':
                    a,b,c,e=op[1]; box=(max(0,int(a-x1i)),max(0,int(b-y1i)),min(out.width,int(c-x1i)),min(out.height,int(e-y1i)))
                    if box[2]>box[0] and box[3]>box[1]:
                        reg=out.crop(box); small=reg.resize((max(1,reg.width//14),max(1,reg.height//14))); out.paste(small.resize(reg.size),box)
            return out
        source=self.render_source_with_annotations(); nw,ne,se,sw=self.selection_corners()
        top=math.hypot(ne[0]-nw[0],ne[1]-nw[1]); bottom=math.hypot(se[0]-sw[0],se[1]-sw[1])
        left=math.hypot(sw[0]-nw[0],sw[1]-nw[1]); right=math.hypot(se[0]-ne[0],se[1]-ne[1])
        width=max(2,int(round(max(top,bottom)))); height=max(2,int(round(max(left,right))))
        coeffs=self.perspective_coefficients(
            [(0.0,0.0),(float(width-1),0.0),(float(width-1),float(height-1)),(0.0,float(height-1))],
            [nw,ne,se,sw]
        )
        try:perspective=Image.Transform.PERSPECTIVE
        except AttributeError:perspective=Image.PERSPECTIVE
        try:resample=Image.Resampling.BICUBIC
        except AttributeError:resample=Image.BICUBIC
        return source.transform((width,height),perspective,coeffs,resample=resample)

    def find_vertical_overlap(self,previous,current):
        from PIL import ImageChops, ImageFilter, ImageStat
        if previous.width!=current.width or previous.width<8:return 0
        h=min(previous.height,current.height)
        if h<48:return 0

        # Chỉ so khung cuối của ảnh đã ghép với khung hiện tại.
        # Thu nhỏ theo chiều ngang để giảm nhiễu anti-alias nhưng giữ nguyên trục Y.
        prev=previous.crop((0,previous.height-h,previous.width,previous.height)).convert('L')
        cur=current.crop((0,0,current.width,h)).convert('L')
        margin=max(2,previous.width//40)
        prev=prev.crop((margin,0,prev.width-margin,h))
        cur=cur.crop((margin,0,cur.width-margin,h))
        try:resample=Image.Resampling.BILINEAR
        except AttributeError:
            from PIL import Image
            resample=Image.BILINEAR
        sample_w=max(40,min(112,prev.width//8))
        prev=prev.resize((sample_w,h),resample)
        cur=cur.resize((sample_w,h),resample)

        # Nhận diện vùng header/footer cố định lặp lại giữa hai lần chụp.
        # Các vùng này không được dùng làm mốc ghép vì chúng không cuộn theo nội dung.
        prev_bytes=prev.tobytes(); cur_bytes=cur.tobytes()
        def common_edge_rows(from_bottom=False,max_frac=.20):
            limit=max(4,int(h*max_frac)); same=0; soft_bad=0
            for k in range(limit):
                y=h-1-k if from_bottom else k
                a=prev_bytes[y*sample_w:(y+1)*sample_w]
                b=cur_bytes[y*sample_w:(y+1)*sample_w]
                err=sum(abs(x-yv) for x,yv in zip(a,b))/sample_w
                if err<=3.5:
                    same=k+1; soft_bad=0
                elif err<=7.0 and soft_bad<1:
                    same=k+1; soft_bad+=1
                else:
                    break
            return same

        sticky_top=common_edge_rows(False,.24)
        sticky_bottom=common_edge_rows(True,.16)
        prev_edge=prev.filter(ImageFilter.FIND_EDGES)
        cur_edge=cur.filter(ImageFilter.FIND_EDGES)

        # Cho phép overlap gần như toàn khung. Bản cũ chỉ tìm tới 82% nên
        # cuộn ít một sẽ không bao giờ tìm thấy phần trùng và bị lặp ảnh.
        min_overlap=max(24,int(h*.04)); max_overlap=h

        def measure(overlap):
            base_top=max(4,int(h*.035)); base_bottom=max(2,int(h*.02))
            top_guard=min(max(base_top,sticky_top+2),max(4,overlap-20))
            bottom_guard=min(max(base_bottom,sticky_bottom+2),max(2,overlap-top_guard-16))
            y0=top_guard; y1=overlap-bottom_guard
            if y1-y0<16:
                y0=max(0,min(sticky_top+1,overlap-16)); y1=overlap
            if y1-y0<12:return None

            p0=h-overlap+y0; p1=h-overlap+y1
            a=prev.crop((0,p0,sample_w,p1)); b=cur.crop((0,y0,sample_w,y1))
            ea=prev_edge.crop((0,p0,sample_w,p1)); eb=cur_edge.crop((0,y0,sample_w,y1))

            # Chỉ chấm điểm trên vùng có cạnh/chữ; nền trắng/đen lớn không được
            # phép tạo ra "khớp giả".
            mask=ImageChops.lighter(ea,eb).point(lambda v:255 if v>=14 else 0)
            info=mask.histogram()[255]; area=sample_w*(y1-y0)
            if info<max(30,int(area*.006)):return None
            gray_diff=ImageChops.difference(a,b)
            edge_diff=ImageChops.difference(ea,eb)
            gray_score=ImageStat.Stat(gray_diff,mask).mean[0]
            edge_score=ImageStat.Stat(edge_diff,mask).mean[0]
            return gray_score*.75+edge_score*.25,info

        step=max(1,h//360)
        candidates=[]
        for overlap in range(min_overlap,max_overlap+1,step):
            result=measure(overlap)
            if result:candidates.append((result[0],overlap,result[1]))
        if not candidates:return 0

        # Nếu nhiều vị trí gần như bằng nhau, ưu tiên overlap lớn hơn:
        # đúng với thao tác cuộn ngắn và tránh lặp nguyên từng khung.
        min_score=min(item[0] for item in candidates)
        tolerance=.35 if min_score<2.0 else .15
        near=[item for item in candidates if item[0]<=min_score+tolerance]
        best=max(near,key=lambda item:item[1])

        # Tinh chỉnh từng pixel quanh nghiệm thô.
        refined=[]
        for overlap in range(max(min_overlap,best[1]-step),min(max_overlap,best[1]+step)+1):
            result=measure(overlap)
            if result:refined.append((result[0],overlap,result[1]))
        if refined:
            local_min=min(item[0] for item in refined)
            local_tol=.20 if local_min<2.0 else .08
            best=max([item for item in refined if item[0]<=local_min+local_tol],key=lambda item:item[1])

        # Không đủ giống thì an toàn hơn là không cắt mất nội dung.
        if best[0]>18:return 0
        return best[1]

    def stitch_long_frames(self,frames):
        from PIL import Image
        if not frames:raise ValueError('Chưa có đoạn nào để ghép.')
        out=frames[0].convert('RGB')
        for current in frames[1:]:
            cur=current.convert('RGB')
            if cur.width!=out.width:
                width=min(cur.width,out.width); out=out.crop((0,0,width,out.height)); cur=cur.crop((0,0,width,cur.height))
            overlap=self.find_vertical_overlap(out,cur)
            piece=cur.crop((0,overlap,cur.width,cur.height)) if overlap>0 else cur
            if piece.height<=0:continue
            merged=Image.new('RGB',(out.width,out.height+piece.height),'white'); merged.paste(out,(0,0)); merged.paste(piece,(0,out.height)); out=merged
        return out

    def long_output_preview(self):
        frames=list(self.long_frames)
        if self.long_current_dirty or not frames:frames.append(self.render_output())
        return self.stitch_long_frames(frames)

    def finish(self):
        if self.text_editor_frame:self.commit_text_editor()
        try:
            if self.long_mode:
                if self.long_current_dirty or not self.long_frames:self._append_long_current(reset=False)
                out=self.stitch_long_frames(self.long_frames)
            else:out=self.render_output()
        except ValueError as error:messagebox.showinfo('Kanban Capture',str(error),parent=self.top); return
        self.a.complete(out); self.close()

    def save_as(self):
        if self.text_editor_frame:self.commit_text_editor()
        try:out=self.long_output_preview() if self.long_mode else self.render_output()
        except ValueError as error:messagebox.showinfo('Kanban Capture',str(error),parent=self.top); return
        ext='.png' if self.a.cfg['format']=='png' else '.jpg'; name=datetime.now().strftime('Screenshot_%Y-%m-%d_%H-%M-%S')+ext
        path=filedialog.asksaveasfilename(parent=self.top,title='Lưu ảnh chụp',initialfile=name,defaultextension=ext,filetypes=[('PNG','*.png'),('JPEG','*.jpg;*.jpeg')])
        if not path:return
        if str(path).lower().endswith('.png'):out.save(path,'PNG')
        else:out.convert('RGB').save(path,'JPEG',quality=self.a.cfg['jpeg_quality'],subsampling=0,optimize=True)

    def close(self):
        try:
            if self._scroll_after:self.a.root.after_cancel(self._scroll_after); self._scroll_after=None
        except:pass
        try:self.destroy_text_editor()
        except:pass
        try:self.top.destroy()
        except:pass
        self.a.overlay=None

class Agent:
    def __init__(self,first=None):
        self.cfg=config(); self.root=tk.Tk(); self.root.withdraw(); self.overlay=None; self.alive=True; self.settings=None; self.capture_target_hwnd=None
        self.kanpass=KanPassManager(self.root,DIR) if KanPassManager else None
        self.kanpass_web=KanPassWebBridge(self.root,self.kanpass,DIR) if (self.kanpass and KanPassWebBridge) else None
        if self.kanpass and self.kanpass_web:self.kanpass.attach_web_bridge(self.kanpass_web)
        self.sock=socket.socket(); self.sock.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1); self.sock.bind(('127.0.0.1',PORT)); self.sock.listen(3)
        threading.Thread(target=self.listen,daemon=True).start(); threading.Thread(target=self.hotkey,daemon=True).start(); cleanup()
        if first:self.root.after(150,lambda:self.handle(first))
    def _http_response(self,conn,status,payload=None,origin='*',extra_headers=None):
        reasons={200:'OK',204:'No Content',400:'Bad Request',403:'Forbidden',404:'Not Found',409:'Conflict',500:'Internal Server Error'}
        body=b'' if status==204 else json.dumps(payload if payload is not None else {'ok':True},ensure_ascii=False).encode('utf-8')
        headers=[
            f'HTTP/1.1 {status} {reasons.get(status,"OK")}',
            f'Access-Control-Allow-Origin: {origin or "*"}',
            'Access-Control-Allow-Methods: GET, POST, OPTIONS',
            'Access-Control-Allow-Headers: Content-Type, X-KanBan-Agent',
            'Access-Control-Allow-Private-Network: true',
            'Cache-Control: no-store',
            'Connection: close',
            'Content-Type: application/json; charset=utf-8',
            f'Content-Length: {len(body)}'
        ]
        if extra_headers:
            headers.extend(extra_headers)
        conn.sendall(('\r\n'.join(headers)+'\r\n\r\n').encode('utf-8')+body)

    def _origin_allowed(self,origin):
        if not origin:return True
        low=origin.lower()
        return any(low==base or low.startswith(base+':') for base in KANPASS_ALLOWED_ORIGINS)

    def listen(self):
        while self.alive:
            try:
                conn,_=self.sock.accept(); conn.settimeout(2.5)
                raw=b''
                while b'\r\n\r\n' not in raw and len(raw)<65536:
                    chunk=conn.recv(8192)
                    if not chunk:break
                    raw+=chunk
                if not raw:
                    conn.close();continue
                if not (raw.startswith(b'GET ') or raw.startswith(b'POST ') or raw.startswith(b'OPTIONS ')):
                    data=raw.decode(errors='ignore').strip(); conn.sendall(b'OK\n'); conn.close()
                    if data:self.root.after(0,lambda q=data:self.handle(q))
                    continue
                head,body=(raw.split(b'\r\n\r\n',1)+[b''])[:2]
                text=head.decode('latin1',errors='ignore')
                lines=text.split('\r\n'); first=lines[0].split()
                method=first[0].upper() if first else 'GET'; target=first[1] if len(first)>1 else '/ping'
                headers={}
                for line in lines[1:]:
                    if ':' in line:
                        k,v=line.split(':',1);headers[k.strip().lower()]=v.strip()
                length=max(0,min(50_000_000,int(headers.get('content-length','0') or 0)))
                while len(body)<length:
                    chunk=conn.recv(min(65536,length-len(body)))
                    if not chunk:break
                    body+=chunk
                parsed=urlsplit(target); path=parsed.path or '/ping'
                origin=headers.get('origin','')
                response_origin=origin if origin and self._origin_allowed(origin) else '*'
                if method=='OPTIONS':
                    if path.startswith('/kanpass/') and origin and not self._origin_allowed(origin):
                        self._http_response(conn,403,{'ok':False,'message':'Origin không được phép.'},'*')
                    else:
                        self._http_response(conn,204,None,response_origin)
                    conn.close();continue
                if path.startswith('/kanpass/'):
                    if origin and not self._origin_allowed(origin):
                        self._http_response(conn,403,{'ok':False,'message':'Origin không được phép.'},'*');conn.close();continue
                    if headers.get('x-kanban-agent')!=KANPASS_HEADER:
                        self._http_response(conn,403,{'ok':False,'message':'Thiếu khóa KanPass cục bộ.'},response_origin);conn.close();continue
                    if not self.kanpass:
                        self._http_response(conn,500,{'ok':False,'message':'KanPass chưa được cài trong Agent.'},response_origin);conn.close();continue
                    query={k:(v[-1] if isinstance(v,list) and v else '') for k,v in parse_qs(parsed.query,keep_blank_values=True).items()}
                    obj={}
                    if method=='POST' and body:
                        try:obj=json.loads(body[:length or len(body)].decode('utf-8'))
                        except Exception:
                            self._http_response(conn,400,{'ok':False,'message':'JSON không hợp lệ.'},response_origin);conn.close();continue
                    status,payload=self.kanpass.handle_api(method,path,query,obj)
                    self._http_response(conn,status,payload,response_origin);conn.close();continue
                self._http_response(conn,200,{'ok':True},response_origin);conn.close()
                cmd=path.split('?',1)[0].strip('/').lower() or 'ping'
                self.root.after(0,lambda q=cmd:self.handle(q))
            except (OSError,socket.timeout,ValueError):
                try:conn.close()
                except Exception:pass
                continue
            except Exception:
                try:conn.close()
                except Exception:pass
                continue

    def hotkey(self):
        u=ctypes.windll.user32; mods=0x0001|0x4000
        ok_c=bool(u.RegisterHotKey(None,HOTKEY_ID,mods,0x43))
        ok_x=bool(u.RegisterHotKey(None,HOTKEY_LONG_ID,mods,0x58))
        ok_a=bool(u.RegisterHotKey(None,HOTKEY_FILL_ID,mods,0x41))
        ok_p=bool(u.RegisterHotKey(None,HOTKEY_SAVE_ID,mods,0x50))
        if not ok_c:self.root.after(0,lambda:messagebox.showwarning('Kanban Capture','Không đăng ký được Alt+C. Có thể phím này đang bị ứng dụng khác chiếm. Nút CHỤP trong Kanban vẫn dùng được.'))
        if not ok_x:self.root.after(0,lambda:messagebox.showwarning('Kanban Capture','Không đăng ký được Alt+X cho chụp dài. Có thể phím này đang bị ứng dụng khác chiếm.'))
        m=wintypes.MSG()
        while self.alive and u.GetMessageW(ctypes.byref(m),None,0,0):
            if m.message!=0x0312:continue
            if m.wParam==HOTKEY_ID:self.root.after(0,lambda:self.capture(False))
            elif m.wParam==HOTKEY_LONG_ID:self.root.after(0,lambda:self.capture(True))
            elif m.wParam==HOTKEY_FILL_ID and ok_a and self.kanpass:self.root.after(0,self.kanpass.hotkey_autofill)
            elif m.wParam==HOTKEY_SAVE_ID and ok_p and self.kanpass:self.root.after(0,self.kanpass.hotkey_save_update)
        if ok_c:u.UnregisterHotKey(None,HOTKEY_ID)
        if ok_x:u.UnregisterHotKey(None,HOTKEY_LONG_ID)
        if ok_a:u.UnregisterHotKey(None,HOTKEY_FILL_ID)
        if ok_p:u.UnregisterHotKey(None,HOTKEY_SAVE_ID)

    def handle(self,q):
        q=q.split('?',1)[0].strip('/ ').lower()
        if q=='capture':self.capture(False)
        elif q in ('capture-long','long-capture'):self.capture(True)
        elif q=='settings':self.show_settings()
        elif q=='quit':self.quit()
        elif q=='ping':pass
    def capture(self,long_mode=False):
        if self.overlay:
            try:self.overlay.top.lift(); self.overlay.top.focus_force()
            except:pass
            return
        try:
            from PIL import ImageGrab
            u=ctypes.windll.user32; self.capture_target_hwnd=u.GetForegroundWindow()
            img=ImageGrab.grab(all_screens=True); self.overlay=Overlay(self,img,u.GetSystemMetrics(76),u.GetSystemMetrics(77),long_mode=long_mode)
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
        fmt=tk.StringVar(value=self.cfg['format']); q=tk.IntVar(value=self.cfg['jpeg_quality'])
        ttk.Label(f,text='Định dạng file khi Ctrl+V vào thư mục').grid(row=0,column=0,columnspan=2,sticky='w')
        ttk.Radiobutton(f,text='JPG (mặc định)',variable=fmt,value='jpg').grid(row=1,column=0,sticky='w'); ttk.Radiobutton(f,text='PNG',variable=fmt,value='png').grid(row=1,column=1,sticky='w')
        ttk.Label(f,text='Chất lượng JPG').grid(row=2,column=0,sticky='w',pady=6); ttk.Spinbox(f,from_=70,to=100,textvariable=q,width=8).grid(row=2,column=1,sticky='e')
        ttk.Label(f,text='Độ dày nét và cỡ chữ được chỉnh trực tiếp trong lúc chụp.',foreground='#53645c').grid(row=3,column=0,columnspan=2,sticky='w',pady=(8,4))
        ttk.Label(f,text='Alt+C: chụp nhanh · Alt+X: chụp dài · Alt+A: KanPass tự điền · Alt+P: lưu/cập nhật. Web mở bằng KanPass có thể tự Save/Update qua DOM/CDP.').grid(row=4,column=0,columnspan=2,sticky='w',pady=(6,6))
        def ok():
            self.cfg['format']='png' if fmt.get()=='png' else 'jpg'; self.cfg['jpeg_quality']=max(70,min(100,int(q.get()))); save_cfg(self.cfg); w.destroy()
        ttk.Button(f,text='Hủy',command=w.destroy).grid(row=5,column=0,pady=(8,0)); ttk.Button(f,text='Lưu',command=ok).grid(row=5,column=1,pady=(8,0)); w.focus_force()
    def quit(self):
        self.alive=False
        try:
            if self.kanpass_web:self.kanpass_web.stop_browser()
        except:pass
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
