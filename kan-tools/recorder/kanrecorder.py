# -*- coding: utf-8 -*-
"""KanRecorder: Windows-only, user-initiated region screen recording for KanBan Tools.
No server, background keyboard logger or network uploads. Keyboard events are never stored.
"""
from __future__ import annotations

import ctypes
import datetime as dt
import os
import queue
import socket
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
FFPROBE = ROOT / "media" / "bin" / "ffprobe.exe"
CONTROL_PORT = 47635  # loopback only; do not expose screen/control over HTTP
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
        self.status = tk.StringVar(value="Sẵn sàng. Ctrl+Alt+F9 để chọn vùng quay.")
        self.state = "idle"
        self.region = None
        # No fullscreen overlay during recording: that layer caused black-screen
        # capture on some Windows/DPI/GPU combinations. Effects are burned into MP4.
        self.segment_events = []
        self.segment_start = 0.0
        self.region_armed_at = 0.0
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
        self.control_alive = True
        self.build()
        # Single native UI instance with minimal local, non-HTTP control channel.
        # Ctrl+Alt+F9 is registered by the existing Capture Agent (always resident).
        self.control_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.control_socket.bind(("127.0.0.1", CONTROL_PORT))
        self.control_socket.listen(3)
        self.control_socket.settimeout(1.0)
        threading.Thread(target=self.control_listener, daemon=True,
                         name="KanRecorder-LocalHotkey").start()
        self.root.after(40, self.poll)

    def control_listener(self) -> None:
        while self.control_alive:
            try:
                client, address = self.control_socket.accept()
                with client:
                    client.settimeout(1)
                    data = client.recv(32).strip()
                    if data == b"F9":
                        self.root.after(0, self.handle_f9)
                    elif data == b"SHOW":
                        self.root.after(0, self.show_window)
            except (OSError, socket.timeout):
                continue

    def show_window(self) -> None:
        try:
            self.root.deiconify()
            self.root.attributes("-alpha", 1.0)
            self.root.lift()
            self.root.focus_force()
        except tk.TclError:
            pass

    def handle_f9(self) -> None:
        if self.state == "idle":
            self.choose_region()
        elif self.state in ("armed", "recording", "paused"):
            self.pause_resume()

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
        self.start_button = ttk.Button(box, text="Chọn vùng quay (chưa bắt đầu)", command=self.choose_region)
        self.start_button.pack(fill="x")
        controls = ttk.Frame(box)
        controls.pack(fill="x", pady=7)
        self.pause_button = ttk.Button(controls, text="Bắt đầu (Ctrl+Alt+F9)", command=self.pause_resume, state="disabled")
        self.pause_button.pack(side="left", expand=True, fill="x", padx=(0, 5))
        self.stop_button = ttk.Button(controls, text="Dừng và lưu MP4", command=self.stop, state="disabled")
        self.stop_button.pack(side="left", expand=True, fill="x")
        ttk.Label(box, textvariable=self.status, wraplength=350, foreground="#195c84").pack(anchor="w", pady=(7, 4))
        ttk.Label(box, text="Ctrl+Alt+F9: Chọn vùng → Bắt đầu → Tạm dừng / Tiếp tục\nCtrl+Alt+F10: Kết thúc và xuất MP4\nChỉ hiện phím tắt/phím điều hướng; không hiện chữ đang gõ.",
                  wraplength=350, foreground="#606974").pack(anchor="w")

    def choose_region(self) -> None:
        if self.state != "idle":
            return
        if os.name != "nt" or not FFMPEG.is_file():
            messagebox.showerror(APP, "Chỉ hỗ trợ Windows có FFmpeg từ KanTool. Hãy cập nhật / sửa KanBan Tools.")
            return
        self.state = "selecting"
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
                self.state = "idle"
                self.status.set("Vùng chọn quá nhỏ. Chọn ít nhất 80 × 80 pixel.")
                return
            self.region = (x, y, w - w % 2, h - h % 2)
            self.root.after(120, self.arm)
        def cancel(_e=None):
            self.state = "idle"
            overlay.destroy()
            self.root.attributes("-alpha", 1.0)
            self.root.lift()
            self.status.set("Đã hủy vùng chọn. Ctrl+Alt+F9 để chọn lại.")
        canvas.bind("<ButtonPress-1>", press_event)
        canvas.bind("<B1-Motion>", move_event)
        canvas.bind("<ButtonRelease-1>", finish)
        overlay.bind("<Escape>", cancel)
        overlay.focus_force()

    def arm(self) -> None:
        """Selection alone never starts FFmpeg or accesses the microphone."""
        if self.state != "selecting" or not self.region:
            return
        self.state = "armed"
        self.region_armed_at = time.monotonic()
        self.last_hotkeys = set()
        self.start_button.configure(state="disabled")
        self.pause_button.configure(state="normal", text="Bắt đầu (Ctrl+Alt+F9)")
        self.stop_button.configure(state="normal", text="Hủy vùng chọn (chưa quay)")
        self.status.set("Đã chọn vùng. Ctrl+Alt+F9 để BẮT ĐẦU, chưa quay hay thu âm.")
        self.position_toolbar()

    def begin(self) -> None:
        if self.state != "armed" or not self.region:
            return
        try:
            self.selected_devices = devices_for(self.audio.get())
            self.session = Path(tempfile.mkdtemp(prefix="KanRecorder_"))
            self.segments = []
            self.segment_events = []
            self.audio_warnings = []
            self.start_segment()
        except Exception as exc:
            # Always terminate partially started encoders and audio threads.
            try:
                if self.process is not None or self.writers:
                    self.finish_segment()
                elif self.fflog:
                    self.fflog.close()
                    self.fflog = None
            except Exception:
                pass
            self.state = "armed"
            messagebox.showerror(APP, f"Không bắt đầu được quay: {exc}")
            return
        self.state = "recording"
        self.pause_button.configure(state="normal", text="Tạm dừng (Ctrl+Alt+F9)")
        self.stop_button.configure(state="disabled", text="Xuất bằng Ctrl+Alt+F10")
        self.status.set("Đang quay vùng chọn; Ctrl+Alt+F9 tạm dừng, Ctrl+Alt+F10 xuất MP4.")

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
        self.segment_events.append([])
        self.segment_start = time.monotonic()
        self.last_down.clear()

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
        if self.state == "armed":
            self.begin()
        elif self.state == "recording":
            self.state = "paused"
            self.finish_segment()
            self.pause_button.configure(text="Tiếp tục (Ctrl+Alt+F9)")
            self.status.set("Đã tạm dừng. Ctrl+Alt+F9 để tiếp tục, F10 để xuất.")
        elif self.state == "paused":
            try:
                self.start_segment()
            except Exception as exc:
                try:
                    if self.process is not None or self.writers:
                        self.finish_segment()
                except Exception:
                    pass
                messagebox.showerror(APP, f"Không tiếp tục được: {exc}")
                return
            self.state = "recording"
            self.pause_button.configure(text="Tạm dừng (Ctrl+Alt+F9)")
            self.status.set("Đang quay tiếp. Ctrl+Alt+F10 để kết thúc và xuất MP4.")

    def stop(self) -> None:
        if self.state == "armed":
            self.state = "idle"
            self.region = None
            self.start_button.configure(state="normal")
            self.pause_button.configure(state="disabled", text="Bắt đầu (Ctrl+Alt+F9)")
            self.stop_button.configure(state="disabled", text="Dừng và lưu MP4")
            self.status.set("Đã hủy vùng chọn. Chưa ghi hình hay âm thanh.")
            return
        if self.state not in ("recording", "paused"):
            return
        was_recording = self.state == "recording"
        self.state = "exporting"
        self.pause_button.configure(state="disabled")
        self.stop_button.configure(state="disabled")
        if was_recording:
            self.finish_segment()
        self.status.set("Đang ghép video, vòng click, phím tắt và âm thanh…")
        threading.Thread(target=self.export, daemon=True, name="KanRecorder-Export").start()

    @staticmethod
    def probe_duration(video: Path) -> float:
        """Read the real MP4 duration: never let an audio filter set output length."""
        import math
        if not FFPROBE.is_file():
            raise RuntimeError("Thiếu ffprobe.exe; hãy cập nhật FFmpeg trong KanTool.")
        cmd = [str(FFPROBE), "-v", "error", "-show_entries", "format=duration",
               "-of", "default=noprint_wrappers=1:nokey=1", str(video)]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=20,
                                creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))
        if result.returncode:
            raise RuntimeError("FFprobe không đọc được thời lượng video: " + result.stderr[-500:])
        try:
            seconds = float(result.stdout.strip())
        except ValueError as exc:
            raise RuntimeError("FFprobe trả về thời lượng không hợp lệ.") from exc
        if not math.isfinite(seconds) or seconds <= 0:
            raise RuntimeError("Video không có thời lượng hợp lệ.")
        return seconds

    def mux_segment(self, index: int, video: Path, audio_files: dict, output: Path) -> bool:
        """Return True if an audio/effects failure required safe fallback.

        Explicit -t VIDEO_DURATION bounds the mux even if mic/system WAV lengths
        are mismatched. The old apad + shortest produced a 600s timeout.
        """
        duration = self.probe_duration(video)
        inputs = [(kind, path) for kind, path in audio_files.items()
                  if path.is_file() and path.stat().st_size > 128]
        if len(inputs) < len(audio_files):
            self.audio_warnings.append(f"Đoạn {index}: không đọc được đầy đủ microphone hoặc âm thanh máy tính.")
        subtitle = self.write_effect_subtitles(index)
        if not inputs and subtitle is None:
            shutil.copy2(video, output)
            return False

        def command(with_audio: bool, with_effects: bool) -> list[str]:
            cmd = [str(FFMPEG), "-hide_banner", "-nostdin", "-loglevel", "error",
                   "-y", "-i", str(video)]
            if with_audio:
                for _, path in inputs:
                    cmd.extend(["-i", str(path)])
            if with_effects and subtitle is not None:
                cmd.extend(["-vf", f"ass={subtitle.name}"])
            cmd.extend(["-map", "0:v:0"])
            if with_audio and len(inputs) == 2:
                # Both sources are finite WAV. NO infinite apad, NO -shortest.
                cmd.extend(["-filter_complex",
                            "[1:a][2:a]amix=inputs=2:duration=longest:dropout_transition=0:normalize=0[a]",
                            "-map", "[a]"])
            elif with_audio and len(inputs) == 1:
                cmd.extend(["-map", "1:a:0"])
            else:
                cmd.append("-an")
            if with_effects and subtitle is not None:
                cmd.extend(["-c:v", "libx264", "-preset", "ultrafast",
                            "-crf", "23", "-pix_fmt", "yuv420p"])
            else:
                cmd.extend(["-c:v", "copy"])
            if with_audio:
                cmd.extend(["-c:a", "aac", "-b:a", "160k"])
            # Video is the sole clock for start/stop; avoid audio-induced hangs.
            cmd.extend(["-t", f"{duration:.3f}", "-movflags", "+faststart", str(output)])
            return cmd

        try:
            self.run_ffmpeg(command(True, True), duration)
            return False
        except (subprocess.TimeoutExpired, RuntimeError, OSError) as exc:
            self.audio_warnings.append(f"Đoạn {index}: lỗi ghép âm thanh/hiệu ứng ({exc}); thử xuất video không âm thanh.")
            try:
                # Preserve click/key effects even when WASAPI audio is problematic.
                self.run_ffmpeg(command(False, True), duration)
                return True
            except (subprocess.TimeoutExpired, RuntimeError, OSError) as subexc:
                self.audio_warnings.append(f"Đoạn {index}: không chèn được hiệu ứng ({subexc}); giữ video gốc.")
                shutil.copy2(video, output)
                return True

    def export(self) -> None:
        try:
            output_dir = Path.home() / "Videos" / "KanRecorder"
            output_dir.mkdir(parents=True, exist_ok=True)
            target = output_dir / f"KanRecorder_{dt.datetime.now():%Y%m%d_%H%M%S}.mp4"
            assembled = []
            preserve_raw = False
            for idx, (video, audio_files) in enumerate(self.segments, 1):
                if not video.is_file() or video.stat().st_size < 1024:
                    raise RuntimeError(f"Đoạn {idx} không có video gốc. Dữ liệu tạm tại {self.session}")
                result = self.session / f"mux_{idx:03d}.mp4"
                preserve_raw |= self.mux_segment(idx, video, audio_files, result)
                assembled.append(result)
            if not assembled:
                raise RuntimeError("Chưa có đoạn quay nào.")
            if len(assembled) == 1:
                shutil.copy2(assembled[0], target)
            else:
                listing = self.session / "segments.txt"
                listing.write_text("".join("file '" + str(p).replace("\\", "/").replace("'", "'\\''") + "'\n"
                                           for p in assembled), encoding="utf-8")
                total = sum(self.probe_duration(p) for p in assembled)
                try:
                    self.run_ffmpeg([str(FFMPEG), "-hide_banner", "-nostdin", "-loglevel", "error", "-y",
                                     "-f", "concat", "-safe", "0", "-i", str(listing),
                                     "-c", "copy", "-movflags", "+faststart", str(target)], total)
                except (subprocess.TimeoutExpired, RuntimeError, OSError):
                    # Different audio streams between segments may require a remux.
                    self.run_ffmpeg([str(FFMPEG), "-hide_banner", "-nostdin", "-loglevel", "error", "-y",
                                     "-f", "concat", "-safe", "0", "-i", str(listing),
                                     "-c:v", "libx264", "-preset", "ultrafast", "-crf", "23",
                                     "-c:a", "aac", "-t", f"{total:.3f}", str(target)], total)
            if target.stat().st_size < 1024:
                raise RuntimeError("MP4 xuất ra không hợp lệ.")
            self.probe_duration(target)
            if preserve_raw:
                self.audio_warnings.append("Đã giữ video/WAV gốc để anh phục hồi tại: " + str(self.session))
            else:
                shutil.rmtree(self.session, ignore_errors=True)
            self.jobs.put(("done", str(target), "; ".join(self.audio_warnings)))
        except Exception as exc:
            self.jobs.put(("error", str(exc), str(self.session)))

    def run_ffmpeg(self, cmd: list[str], expected_seconds: float = 10.) -> None:
        # For short clips, fail fast instead of hanging silently for 600 seconds.
        timeout = max(45, min(1800, int(expected_seconds * 3 + 45)))
        try:
            p = subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE,
                               timeout=timeout, cwd=str(self.session),
                               creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0))
        except subprocess.TimeoutExpired as exc:
            raise RuntimeError(f"FFmpeg vượt {timeout} giây khi xuất video dài {expected_seconds:.1f}s.") from exc
        if p.returncode:
            raise RuntimeError(p.stderr.decode("utf-8", "replace")[-1200:])

    def poll(self) -> None:
        try:
            while True:
                job = self.jobs.get_nowait()
                self.state = "idle"
                self.region = None
                self.start_button.configure(state="normal")
                self.pause_button.configure(state="disabled", text="Bắt đầu (Ctrl+Alt+F9)")
                self.stop_button.configure(state="disabled", text="Dừng và lưu MP4")
                if job[0] == "done":
                    self.status.set(f"Đã lưu: {job[1]}")
                    messagebox.showinfo(APP, f"Đã lưu MP4:\n{job[1]}" +
                                        (f"\n\nCảnh báo âm thanh: {job[2]}" if job[2] else ""))
                else:
                    self.status.set(f"Lỗi xuất video: {job[1]}")
                    messagebox.showerror(APP, f"Không thể xuất MP4: {job[1]}\nDữ liệu tạm giữ tại:\n{job[2]}")
        except queue.Empty:
            pass

        if self.state in ("armed", "recording", "paused"):
            # The background Capture Agent owns Ctrl+Alt+F9 via RegisterHotKey.
            # Do not poll F9 here: that caused duplicate start/pause events.
            active = pressed(VK_CONTROL) and pressed(VK_MENU) and pressed(VK_F10)
            if active and VK_F10 not in self.last_hotkeys:
                self.stop()
            self.last_hotkeys = {VK_F10} if active else set()

        if self.state == "recording":
            self.track_events()
        self.root.after(40, self.poll)

    def track_events(self) -> None:
        """Collect only visual events while recording; never log typed text."""
        if not self.segment_events or not self.region:
            return
        x, y, w, h = self.region
        px, py = cursor_position()
        inside = x <= px < x + w and y <= py < y + h
        now = time.monotonic()
        elapsed = max(0.0, now - self.segment_start)
        if self.clicks.get():
            for vk, button in ((VK_LBUTTON, "left"), (VK_RBUTTON, "right")):
                current = pressed(vk)
                if current and not self.last_down.get(vk) and inside:
                    self.segment_events[-1].append({
                        "kind": "click", "t": elapsed, "x": px - x, "y": py - y,
                        "button": button
                    })
                    self.status.set(f"Đang quay — vừa click {button}. F9: tạm dừng; F10: xuất.")
                self.last_down[vk] = current

        if self.keys.get():
            ctrl = pressed(VK_CONTROL)
            alt = pressed(VK_MENU)
            shift = pressed(VK_SHIFT)
            win = pressed(VK_LWIN) or pressed(VK_RWIN)
            modifiers = [name for enabled, name in ((ctrl, "Ctrl"), (alt, "Alt"),
                                                       (shift, "Shift"), (win, "Win")) if enabled]
            for vk, label in KEYS.items():
                current = pressed(vk)
                if current and not self.last_down.get(vk):
                    # Prevent password leaks: Shift+letter/number alone is NOT
                    # a shortcut. Never record arbitrary character key presses.
                    navigation = vk in SPECIAL and vk != 0x20
                    function = 0x70 <= vk <= 0x7B
                    shortcut = (ctrl or alt or win) and (0x30 <= vk <= 0x5A)
                    if (navigation or function or shortcut) and vk not in (VK_F9, VK_F10):
                        value = " + ".join(dict.fromkeys(modifiers + [label]))[:65]
                        self.segment_events[-1].append({
                            "kind": "key", "t": elapsed, "label": value
                        })
                self.last_down[vk] = current

    @staticmethod
    def ass_timestamp(seconds: float) -> str:
        hundredths = max(0, int(round(seconds * 100)))
        h, remainder = divmod(hundredths, 360000)
        m, remainder = divmod(remainder, 6000)
        sec, centisec = divmod(remainder, 100)
        return f"{h}:{m:02d}:{sec:02d}.{centisec:02d}"

    def write_effect_subtitles(self, index: int) -> Path | None:
        """ASS effects are composited in FFmpeg, never a fullscreen GUI overlay.

        This avoids the Windows black-screen bug and guarantees the rings and
        safe key labels are visible in the *saved video* even with DPI scaling.
        """
        events = self.segment_events[index - 1] if index <= len(self.segment_events) else []
        if not events:
            return None
        _, _, w, h = self.region
        header = (
            "[Script Info]\nScriptType: v4.00+\n"
            f"PlayResX: {w}\nPlayResY: {h}\n"
            "WrapStyle: 2\nScaledBorderAndShadow: yes\n"
            "\n[V4+ Styles]\n"
            "Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, "
            "OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, "
            "ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, "
            "Alignment, MarginL, MarginR, MarginV, Encoding\n"
            "Style: Ring,Arial,26,&H00FFFFFF,&H00000000,&H00000000,&H00000000,"
            "0,0,0,0,100,100,0,0,1,0,0,7,10,10,10,1\n"
            "Style: Key,Segoe UI,23,&H00FFFFFF,&H00000000,&H00182332,&HAA182332,"
            "-1,0,0,0,100,100,0,0,3,5,0,1,16,16,16,1\n"
            "\n[Events]\n"
            "Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text\n"
        )
        lines = [header]
        ring = ("m 0 -20 b 11 -20 20 -11 20 0 b 20 11 11 20 0 20 "
                "b -11 20 -20 11 -20 0 b -20 -11 -11 -20 0 -20")
        for event in events:
            start = self.ass_timestamp(event["t"])
            is_click = event["kind"] == "click"
            end = self.ass_timestamp(event["t"] + (0.65 if is_click else 1.6))
            if is_click:
                # ASS colours are AABBGGRR: bright blue/cyan vs warm orange.
                colour = ("&H00FAC828&" if event["button"] == "left" else "&H00429EFA&")
                tags = (
                    rf"{{\an7\pos({event['x']},{event['y']})\p1\1a&HFF&"
                    rf"\3c{colour}\3a&H00&\bord5\blur2"
                    rf"\fad(30,260)\t(0,650,\fscx185\fscy185)}}"
                )
                lines.append(f"Dialogue: 0,{start},{end},Ring,,0,0,0,,{tags}{ring}\n")
            else:
                label = event["label"].replace("{", "").replace("}", "").replace("\\", "")
                tags = rf"{{\an1\pos(16,{h-16})\fad(40,300)}}"
                lines.append(f"Dialogue: 1,{start},{end},Key,,0,0,0,,{tags}{label}\n")
        path = self.session / f"effects_{index:03d}.ass"
        path.write_text("".join(lines), encoding="utf-8-sig")
        return path

    def close(self) -> None:
        if self.state in ("recording", "paused"):
            messagebox.showwarning(APP, "Hãy nhấn Ctrl+Alt+F10 để xuất MP4 trước khi đóng KanRecorder.")
            return
        if self.state == "exporting":
            messagebox.showwarning(APP, "Đang xuất video; không đóng cửa sổ.")
            return
        self.control_alive = False
        try:
            self.control_socket.close()
        except OSError:
            pass
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
        def forward_existing() -> bool:
            try:
                with socket.create_connection(("127.0.0.1", CONTROL_PORT), timeout=.3) as connection:
                    connection.sendall(b"SHOW\n")
                return True
            except OSError:
                return False
        if not forward_existing():
            App(options(sys.argv[1:])).run()
