# -*- coding: utf-8 -*-
"""KanRecorder: Windows-only, user-initiated region screen recording for KanBan Tools.
No server, background keyboard logger or network uploads. Keyboard events are never stored.
"""
from __future__ import annotations

import ctypes
import datetime as dt
import os
import queue
import shutil
import subprocess
import sys
import tempfile
import threading
import time
import wave
from ctypes import wintypes
from pathlib import Path
from urllib.parse import parse_qs, urlsplit
import tkinter as tk
from tkinter import messagebox, ttk

APP = "KanRecorder"
ROOT = Path(os.environ.get("LOCALAPPDATA", str(Path.home()))) / "KanBanTools"
FFMPEG = ROOT / "media" / "bin" / "ffmpeg.exe"
KEY_COLOR = "#010203"
VK_LBUTTON, VK_RBUTTON, VK_CONTROL, VK_MENU = 0x01, 0x02, 0x11, 0x12
VK_LWIN, VK_RWIN, VK_SHIFT, VK_F9, VK_F10 = 0x5B, 0x5C, 0x10, 0x78, 0x79
SPECIAL = {0x08: "Backspace", 0x09: "Tab", 0x0D: "Enter", 0x1B: "Esc",
           0x20: "Space", 0x21: "PgUp", 0x22: "PgDn", 0x23: "End",
           0x24: "Home", 0x25: "Left", 0x26: "Up", 0x27: "Right",
           0x28: "Down", 0x2D: "Insert", 0x2E: "Delete"}
KEYS = {**SPECIAL, **{k: f"F{k-0x6F}" for k in range(0x70, 0x7C)},
        **{k: chr(k) for k in range(0x41, 0x5B)},
        **{k: chr(k) for k in range(0x30, 0x3A)}}


def options(argv: list[str]) -> dict:
    result = {"cursor": True, "clicks": True, "keys": True, "audio": "both", "fps": 30}
    for arg in argv:
        if not arg.lower().startswith("kanbanrecorder://"):
            continue
        uri = urlsplit(arg)
        if uri.scheme.lower() != "kanbanrecorder" or uri.netloc.lower() != "open":
            continue
        q = parse_qs(uri.query, keep_blank_values=False)
        for key in ("cursor", "clicks", "keys"):
            if key in q and q[key][-1] in ("0", "1"):
                result[key] = q[key][-1] == "1"
        if q.get("audio", [""])[-1] in ("none", "mic", "system", "both"):
            result["audio"] = q["audio"][-1]
        if q.get("fps", [""])[-1] in ("15", "30", "60"):
            result["fps"] = int(q["fps"][-1])
    return result


def native_metrics() -> tuple[int, int, int, int]:
    u = ctypes.windll.user32
    return tuple(u.GetSystemMetrics(n) for n in (76, 77, 78, 79))


def enable_dpi() -> None:
    try:
        ctypes.windll.shcore.SetProcessDpiAwareness(2)
    except Exception:
        try:
            ctypes.windll.user32.SetProcessDPIAware()
        except Exception:
            pass


def pressed(vk: int) -> bool:
    return bool(ctypes.windll.user32.GetAsyncKeyState(vk) & 0x8000)


def cursor_position() -> tuple[int, int]:
    point = wintypes.POINT()
    if not ctypes.windll.user32.GetCursorPos(ctypes.byref(point)):
        return -100000, -100000
    return point.x, point.y


def devices_for(mode: str) -> dict:
    if mode == "none":
        return {}
    try:
        import soundcard as sc
        import numpy  # noqa: F401
    except ImportError as exc:
        raise RuntimeError("Thiếu thư viện âm thanh. Chọn CÔNG CỤ → Cập nhật / sửa KanBan Tools.") from exc
    result = {}
    if mode in ("system", "both"):
        speaker = sc.default_speaker()
        if speaker is None:
            raise RuntimeError("Không tìm thấy loa mặc định để ghi âm thanh máy tính.")
        loopback = sc.get_microphone(id=speaker.id, include_loopback=True)
        if loopback is None:
            raise RuntimeError("Không mở được WASAPI loopback của loa mặc định.")
        result["system"] = loopback.id
    if mode in ("mic", "both"):
        microphone = sc.default_microphone()
        if microphone is None:
            raise RuntimeError("Không có microphone mặc định. Hãy cắm mic hoặc đổi chế độ âm thanh.")
        result["mic"] = microphone.id
    return result


class AudioWriter:
    """Audio capture to local PCM WAV; never uploaded or kept after successful export."""
    def __init__(self, label: str, device, target: Path):
        self.label, self.device, self.target = label, device, target
        self.stop_event = threading.Event()
        self.error = None
        self.thread = threading.Thread(target=self.run, daemon=True, name=f"KanRecorder-{label}")

    def start(self) -> None:
        self.thread.start()

    def run(self) -> None:
        # WASAPI uses COM: initialize in worker, do not share COM device objects.
        initialized = False
        try:
            hr = ctypes.windll.ole32.CoInitializeEx(None, 0)
            initialized = hr in (0, 1)
            import numpy as np
            import soundcard as sc
            device = sc.get_microphone(id=self.device, include_loopback=self.label == "system")
            if device is None:
                raise RuntimeError("Thiết bị ghi âm không còn khả dụng.")
            with device.recorder(samplerate=48000) as recorder:
                with wave.open(str(self.target), "wb") as out:
                    out.setnchannels(2)
                    out.setsampwidth(2)
                    out.setframerate(48000)
                    while not self.stop_event.is_set():
                        frames = np.asarray(recorder.record(numframes=2048), dtype=np.float32)
                        if frames.ndim == 1:
                            frames = frames[:, None]
                        if frames.shape[1] == 1:
                            frames = np.repeat(frames, 2, axis=1)
                        elif frames.shape[1] > 2:
                            frames = frames[:, :2]
                        samples = (np.clip(frames, -1.0, 1.0) * 32767).astype("<i2")
                        out.writeframesraw(samples.tobytes())
        except Exception as exc:
            self.error = f"{self.label}: {exc}"
        finally:
            if initialized:
                ctypes.windll.ole32.CoUninitialize()

    def stop(self) -> None:
        self.stop_event.set()
        self.thread.join(timeout=5)


class App:
    def __init__(self, config: dict):
        enable_dpi()
        self.root = tk.Tk()
        self.root.title("KanRecorder · KanBan Tools")
        self.root.resizable(False, False)
        self.root.geometry("390x365")
        self.root.attributes("-topmost", True)
        self.root.protocol("WM_DELETE_WINDOW", self.close)
        self.cursor = tk.BooleanVar(value=config["cursor"])
        self.clicks = tk.BooleanVar(value=config["clicks"])
        self.keys = tk.BooleanVar(value=config["keys"])
        self.audio = tk.StringVar(value=config["audio"])
        self.fps = tk.StringVar(value=str(config["fps"]))
        self.status = tk.StringVar(value="Sẵn sàng. Nhấn Chọn vùng để bắt đầu.")
        self.state = "idle"
        self.region = None
        self.overlay = None
        self.canvas = None
        self.session = None
        self.segments = []
        self.process = None
        self.fflog = None
        self.writers = []
        self.events = []
        self.badge = ("", 0.0)
        self.last_down = {}
        self.last_hotkeys = set()
        self.jobs = queue.Queue()
        self.build()
        self.root.after(40, self.poll)

    def build(self) -> None:
        box = ttk.Frame(self.root, padding=16)
        box.pack(fill="both", expand=True)
        ttk.Label(box, text="KanRecorder", font=("Segoe UI", 18, "bold")).pack(anchor="w")
        ttk.Label(box, text="Quay vùng chọn Windows · xuất MP4 tại Videos/KanRecorder").pack(anchor="w", pady=(0, 10))
        toggles = ttk.Frame(box)
        toggles.pack(fill="x")
        ttk.Checkbutton(toggles, text="Hiện con trỏ", variable=self.cursor).grid(row=0, column=0, sticky="w")
        ttk.Checkbutton(toggles, text="Vòng sáng khi click", variable=self.clicks).grid(row=0, column=1, sticky="w")
        ttk.Checkbutton(toggles, text="Hiện phím tắt", variable=self.keys).grid(row=1, column=0, sticky="w")
        settings = ttk.Frame(box)
        settings.pack(fill="x", pady=12)
        ttk.Label(settings, text="Âm thanh:").grid(row=0, column=0, sticky="w")
        self.audio_box = ttk.Combobox(settings, width=12, state="readonly", textvariable=self.audio,
                                      values=("both", "mic", "system", "none"))
        self.audio_box.grid(row=0, column=1, sticky="w", padx=6)
        ttk.Label(settings, text="FPS:").grid(row=0, column=2, padx=(10, 2))
        self.fps_box = ttk.Combobox(settings, width=4, state="readonly", textvariable=self.fps,
                                    values=("15", "30", "60"))
        self.fps_box.grid(row=0, column=3, sticky="w")
        self.start_button = ttk.Button(box, text="Chọn vùng và bắt đầu quay", command=self.choose_region)
        self.start_button.pack(fill="x")
        controls = ttk.Frame(box)
        controls.pack(fill="x", pady=7)
        self.pause_button = ttk.Button(controls, text="Tạm dừng", command=self.pause_resume, state="disabled")
        self.pause_button.pack(side="left", expand=True, fill="x", padx=(0, 5))
        self.stop_button = ttk.Button(controls, text="Dừng và lưu MP4", command=self.stop, state="disabled")
        self.stop_button.pack(side="left", expand=True, fill="x")
        ttk.Label(box, textvariable=self.status, wraplength=350, foreground="#195c84").pack(anchor="w", pady=(7, 4))
        ttk.Label(box, text="Ctrl+Alt+F9: Tạm dừng / Tiếp tục\nCtrl+Alt+F10: Dừng và lưu\nChỉ hiện phím tắt/phím điều hướng; không hiện chữ đang gõ.",
                  wraplength=350, foreground="#606974").pack(anchor="w")

    def choose_region(self) -> None:
        if self.state != "idle":
            return
        if os.name != "nt" or not FFMPEG.is_file():
            messagebox.showerror(APP, "Chỉ hỗ trợ Windows có FFmpeg từ KanTool. Hãy cập nhật / sửa KanBan Tools.")
            return
        try:
            self.selected_devices = devices_for(self.audio.get())
        except Exception as exc:
            messagebox.showerror(APP, str(exc))
            return
        vx, vy, vw, vh = native_metrics()
        # Keep the Tk owner alive so the selection Toplevel remains visible on Windows.
        self.root.attributes("-alpha", 0.0)
        overlay = tk.Toplevel(self.root)
        overlay.overrideredirect(True)
        overlay.geometry(f"{vw}x{vh}{vx:+d}{vy:+d}")
        overlay.attributes("-topmost", True)
        overlay.attributes("-alpha", 0.32)
        overlay.configure(bg="#101820")
        canvas = tk.Canvas(overlay, bg="#101820", cursor="cross", highlightthickness=0)
        canvas.pack(fill="both", expand=True)
        start = []
        selection = [None]

        def press_event(e):
            start[:] = [e.x, e.y]
            if selection[0] is not None:
                canvas.delete(selection[0])
            selection[0] = canvas.create_rectangle(e.x, e.y, e.x, e.y,
                                                    outline="#42e8b4", width=3, fill="#135e48")
        def move_event(e):
            if start:
                canvas.coords(selection[0], start[0], start[1], e.x, e.y)
        def finish(e):
            if not start:
                return
            x, y = vx + min(start[0], e.x), vy + min(start[1], e.y)
            w, h = abs(e.x - start[0]), abs(e.y - start[1])
            overlay.destroy()
            self.root.attributes("-alpha", 1.0)
            self.root.lift()
            if w < 80 or h < 80:
                self.status.set("Vùng chọn quá nhỏ. Chọn ít nhất 80 × 80 pixel.")
                return
            self.region = (x, y, w - w % 2, h - h % 2)
            self.root.after(350, self.begin)
        def cancel(_e=None):
            overlay.destroy()
            self.root.attributes("-alpha", 1.0)
            self.root.lift()
        canvas.bind("<ButtonPress-1>", press_event)
        canvas.bind("<B1-Motion>", move_event)
        canvas.bind("<ButtonRelease-1>", finish)
        overlay.bind("<Escape>", cancel)
        overlay.focus_force()

    def make_overlay(self) -> None:
        vx, vy, vw, vh = native_metrics()
        self.virtual_origin = (vx, vy)
        overlay = tk.Toplevel(self.root)
        overlay.overrideredirect(True)
        overlay.geometry(f"{vw}x{vh}{vx:+d}{vy:+d}")
        overlay.attributes("-topmost", True)
        overlay.configure(bg=KEY_COLOR)
        overlay.wm_attributes("-transparentcolor", KEY_COLOR)
        canvas = tk.Canvas(overlay, bg=KEY_COLOR, highlightthickness=0)
        canvas.pack(fill="both", expand=True)
        overlay.update_idletasks()
        # Extended transparent style makes the drawing window mouse-click-through.
        u = ctypes.windll.user32
        hwnd = overlay.winfo_id()
        GWL_EXSTYLE, WS_EX_TRANSPARENT, WS_EX_LAYERED, WS_EX_TOOLWINDOW = -20, 0x20, 0x80000, 0x80
        u.GetWindowLongW.argtypes = (wintypes.HWND, ctypes.c_int)
        u.SetWindowLongW.argtypes = (wintypes.HWND, ctypes.c_int, ctypes.c_long)
        styles = u.GetWindowLongW(hwnd, GWL_EXSTYLE)
        u.SetWindowLongW(hwnd, GWL_EXSTYLE, styles | WS_EX_TRANSPARENT | WS_EX_LAYERED | WS_EX_TOOLWINDOW)
        self.overlay, self.canvas = overlay, canvas

    def begin(self) -> None:
        if self.state != "idle" or not self.region:
            return
        try:
            self.make_overlay()
            self.session = Path(tempfile.mkdtemp(prefix="KanRecorder_"))
            self.segments = []
            self.state = "recording"
            self.start_segment()
        except Exception as exc:
            # On partial startup failure, stop FFmpeg before returning to idle.
            try:
                if self.process is not None or self.writers:
                    self.finish_segment()
                elif self.fflog:
                    self.fflog.close()
                    self.fflog = None
            except Exception:
                pass
            self.state = "idle"
            self.destroy_overlay()
            messagebox.showerror(APP, f"Không bắt đầu được quay: {exc}")
            return
        self.start_button.configure(state="disabled")
        self.pause_button.configure(state="normal", text="Tạm dừng")
        self.stop_button.configure(state="normal")
        self.status.set("Đang quay vùng chọn. Ctrl+Alt+F10 để dừng.")
        self.position_toolbar()

    def position_toolbar(self) -> None:
        x, y, w, h = self.region
        vx, vy, vw, vh = native_metrics()
        toolbar_w, toolbar_h = 400, 400
        px = min(max(x, vx), vx + vw - toolbar_w)
        if y + h + toolbar_h < vy + vh:
            py = y + h + 8
        else:
            py = max(vy, y - toolbar_h - 8)
        self.root.geometry(f"+{px}+{py}")
        self.root.lift()

    def start_segment(self) -> None:
        index = len(self.segments) + 1
        video = self.session / f"video_{index:03d}.mp4"
        log = self.session / f"ffmpeg_{index:03d}.log"
        x, y, w, h = self.region
        cmd = [str(FFMPEG), "-hide_banner", "-loglevel", "warning", "-y",
               "-f", "gdigrab", "-framerate", self.fps.get(),
               "-offset_x", str(x), "-offset_y", str(y),
               "-video_size", f"{w}x{h}",
               "-draw_mouse", "1" if self.cursor.get() else "0", "-i", "desktop",
               "-c:v", "libx264", "-preset", "ultrafast", "-crf", "23",
               "-pix_fmt", "yuv420p", "-an", str(video)]
        self.fflog = log.open("wb")
        flags = getattr(subprocess, "CREATE_NO_WINDOW", 0)
        self.process = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.DEVNULL,
                                        stderr=self.fflog, creationflags=flags)
        time.sleep(0.18)
        if self.process.poll() is not None:
            self.fflog.close()
            raise RuntimeError(f"FFmpeg không khởi động. Xem {log}")
        self.writers = []
        audio_files = {}
        for name, device in self.selected_devices.items():
            dest = self.session / f"{name}_{index:03d}.wav"
            writer = AudioWriter(name, device, dest)
            writer.start()
            self.writers.append(writer)
            audio_files[name] = dest
        self.segments.append((video, audio_files))
        self.last_down.clear()
        self.last_hotkeys.clear()

    def finish_segment(self) -> None:
        for writer in self.writers:
            writer.stop()
        self.audio_warnings.extend(writer.error for writer in self.writers if writer.error)
        self.writers = []
        p = self.process
        if p:
            try:
                if p.poll() is None and p.stdin:
                    p.stdin.write(b"q\n")
                    p.stdin.flush()
                p.wait(timeout=10)
            except Exception:
                p.kill()
                p.wait(timeout=5)
            finally:
                if p.stdin:
                    p.stdin.close()
                self.process = None
        if self.fflog:
            self.fflog.close()
            self.fflog = None

    def pause_resume(self) -> None:
        if self.state == "recording":
            self.state = "paused"
            self.finish_segment()
            self.destroy_overlay()
            self.pause_button.configure(text="Tiếp tục")
            self.status.set("Đã tạm dừng. Ctrl+Alt+F9 để tiếp tục.")
        elif self.state == "paused":
            try:
                self.make_overlay()
                self.start_segment()
            except Exception as exc:
                self.destroy_overlay()
                messagebox.showerror(APP, f"Không tiếp tục được: {exc}")
                return
            self.state = "recording"
            self.pause_button.configure(text="Tạm dừng")
            self.status.set("Đang quay tiếp.")

    def stop(self) -> None:
        if self.state not in ("recording", "paused"):
            return
        was_recording = self.state == "recording"
        self.state = "exporting"
        self.pause_button.configure(state="disabled")
        self.stop_button.configure(state="disabled")
        self.destroy_overlay()
        if was_recording:
            self.finish_segment()
        self.status.set("Đang ghép hình và âm thanh. Không đóng cửa sổ…")
        threading.Thread(target=self.export, daemon=True, name="KanRecorder-Export").start()

    def export(self) -> None:
        try:
            output_dir = Path.home() / "Videos" / "KanRecorder"
            output_dir.mkdir(parents=True, exist_ok=True)
            target = output_dir / f"KanRecorder_{dt.datetime.now():%Y%m%d_%H%M%S}.mp4"
            assembled = []
            for idx, (video, audio_files) in enumerate(self.segments, 1):
                if not video.is_file() or video.stat().st_size < 1024:
                    raise RuntimeError(f"Video đoạn {idx} rỗng. Kiểm tra log FFmpeg trong {self.session}")
                inputs = [(key, path) for key, path in audio_files.items() if path.is_file() and path.stat().st_size > 128]
                if len(inputs) < len(audio_files):
                    self.audio_warnings.append(f"Đoạn {idx}: thiếu âm thanh từ một thiết bị.")
                result = self.session / f"mux_{idx:03d}.mp4"
                if not inputs:
                    shutil.copy2(video, result)
                else:
                    cmd = [str(FFMPEG), "-hide_banner", "-loglevel", "error", "-y", "-i", str(video)]
                    for _, path in inputs:
                        cmd += ["-i", str(path)]
                    if len(inputs) == 2:
                        cmd += ["-filter_complex", "[1:a][2:a]amix=inputs=2:duration=longest:normalize=0,apad[a]",
                                "-map", "0:v:0", "-map", "[a]"]
                    else:
                        cmd += ["-map", "0:v:0", "-map", "1:a:0", "-af", "apad"]
                    cmd += ["-c:v", "copy", "-c:a", "aac", "-b:a", "160k", "-shortest", str(result)]
                    self.run_ffmpeg(cmd)
                assembled.append(result)
            if not assembled:
                raise RuntimeError("Không có đoạn video nào.")
            if len(assembled) == 1:
                shutil.copy2(assembled[0], target)
            else:
                # Concat re-encodes video to tolerate differing audio/missing microphone segments.
                listing = self.session / "segments.txt"
                listing.write_text("".join("file '" + str(p).replace("\\", "/").replace("'", "'\\''") + "'\n"
                                           for p in assembled), encoding="utf-8")
                self.run_ffmpeg([str(FFMPEG), "-hide_banner", "-loglevel", "error", "-y",
                                 "-f", "concat", "-safe", "0", "-i", str(listing),
                                 "-c:v", "libx264", "-preset", "veryfast", "-crf", "23",
                                 "-c:a", "aac", str(target)])
            if target.stat().st_size < 1024:
                raise RuntimeError("Tệp xuất MP4 không hợp lệ.")
            warnings = "; ".join(self.audio_warnings)
            shutil.rmtree(self.session, ignore_errors=True)
            self.jobs.put(("done", str(target), warnings))
        except Exception as exc:
            self.jobs.put(("error", str(exc), str(self.session)))

    @staticmethod
    def run_ffmpeg(cmd: list[str]) -> None:
        p = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE,
                           timeout=600, creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))
        if p.returncode:
            raise RuntimeError(p.stderr.decode("utf-8", "replace")[-1000:])

    def destroy_overlay(self) -> None:
        if self.overlay is not None:
            try:
                self.overlay.destroy()
            except tk.TclError:
                pass
        self.overlay = self.canvas = None
        self.events.clear()

    def poll(self) -> None:
        try:
            while True:
                job = self.jobs.get_nowait()
                self.state = "idle"
                self.start_button.configure(state="normal")
                if job[0] == "done":
                    self.status.set(f"Đã lưu: {job[1]}")
                    messagebox.showinfo(APP, f"Đã lưu MP4:\n{job[1]}" +
                                        (f"\n\nCảnh báo âm thanh: {job[2]}" if job[2] else ""))
                else:
                    self.status.set(f"Lỗi xuất video: {job[1]}")
                    messagebox.showerror(APP, f"Không thể xuất MP4: {job[1]}\nDữ liệu tạm giữ tại:\n{job[2]}")
        except queue.Empty:
            pass
        if self.state in ("recording", "paused"):
            combo = pressed(VK_CONTROL) and pressed(VK_MENU)
            hot = {vk for vk in (VK_F9, VK_F10) if combo and pressed(vk)}
            if VK_F10 in hot - self.last_hotkeys:
                self.stop()
            elif VK_F9 in hot - self.last_hotkeys:
                self.pause_resume()
            self.last_hotkeys = hot
        if self.state == "recording" and self.canvas is not None:
            self.draw_effects()
        self.root.after(40, self.poll)

    def draw_effects(self) -> None:
        x, y, w, h = self.region
        vx, vy = self.virtual_origin
        px, py = cursor_position()
        inside = x <= px < x + w and y <= py < y + h
        now = time.monotonic()
        if self.clicks.get():
            for vk, color in ((VK_LBUTTON, "#28c8fa"), (VK_RBUTTON, "#fa9e42")):
                current = pressed(vk)
                if current and not self.last_down.get(vk) and inside:
                    self.events.append((px - vx, py - vy, color, now))
                self.last_down[vk] = current
        if self.keys.get():
            modifiers = [name for vk, name in ((VK_CONTROL, "Ctrl"), (VK_MENU, "Alt"),
                                                 (VK_SHIFT, "Shift"), (VK_LWIN, "Win"), (VK_RWIN, "Win"))
                         if pressed(vk)]
            for vk, label in KEYS.items():
                current = pressed(vk)
                if current and not self.last_down.get(vk):
                    safe_key = vk in SPECIAL and vk != 0x20 or 0x70 <= vk <= 0x7B or bool(modifiers)
                    if safe_key and vk not in (VK_F9, VK_F10):
                        self.badge = (" + ".join(dict.fromkeys(modifiers + [label])), now + 1.7)
                self.last_down[vk] = current
        self.canvas.delete("effect")
        self.events = [e for e in self.events if now - e[3] < 0.55]
        for ex, ey, color, created in self.events:
            age = (now - created) / 0.55
            radius = 10 + 25 * age
            self.canvas.create_oval(ex - radius, ey - radius, ex + radius, ey + radius,
                                    outline=color, width=max(1, int(4 * (1 - age))), tags="effect")
        if self.keys.get() and self.badge[0] and self.badge[1] > now:
            xx, yy = x - vx + 14, y - vy + h - 44
            label = self.badge[0][:65]
            text_id = self.canvas.create_text(xx + 9, yy + 16, anchor="w", text=label,
                                               fill="#ffffff", font=("Segoe UI", 12, "bold"), tags="effect")
            rect = self.canvas.bbox(text_id)
            self.canvas.create_rectangle(xx, yy, rect[2] + 12, yy + 33, fill="#192334",
                                         outline="#4b91c2", tags="effect")
            self.canvas.tag_raise(text_id)

    def close(self) -> None:
        if self.state in ("recording", "paused"):
            messagebox.showwarning(APP, "Hãy bấm Dừng và lưu MP4 trước khi đóng KanRecorder.")
            return
        if self.state == "exporting":
            messagebox.showwarning(APP, "Đang xuất video; không đóng cửa sổ.")
            return
        self.root.destroy()

    def run(self) -> None:
        self.audio_warnings = []
        self.root.mainloop()


if __name__ == "__main__":
    if "--self-test" in sys.argv:
        print("KanRecorder source OK; native capture requires Windows.")
    elif os.name != "nt":
        print("KanRecorder requires Windows", file=sys.stderr)
        raise SystemExit(1)
    else:
        App(options(sys.argv[1:])).run()
