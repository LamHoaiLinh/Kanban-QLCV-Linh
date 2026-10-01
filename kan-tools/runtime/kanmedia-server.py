# -*- coding: utf-8 -*-
"""
KanMedia local server for KanBan.
- Binds only to 127.0.0.1.
- Accepts requests only from KanBan/localhost plus a shared local header.
- Uses the Python environment installed by KanTool.bat.
- Media files stay on the local machine.
"""
from __future__ import annotations

import json
import base64
import os
import re
import shutil
import subprocess
import sys
import threading
import time
import traceback
import uuid
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse

HOST = "127.0.0.1"
PORT = 47632
TOKEN = "linh-kanban-v1"
ROOT = Path(os.environ.get("LOCALAPPDATA", Path.home())) / "KanBanTools"
RUNTIME = ROOT / "runtime"
JOBS = ROOT / "jobs"
UPLOADS = ROOT / "uploads"
BIN = ROOT / "media" / "bin"
NODE_DIR = ROOT / "media" / "node"
NODE = NODE_DIR / "node.exe"
FFMPEG = BIN / "ffmpeg.exe"
FFPROBE = BIN / "ffprobe.exe"
WORKER = RUNTIME / "kanmedia-worker.py"
INSTALLER = ROOT / "KanTool.bat"
def windows_desktop() -> Path:
    fallback = Path(os.environ.get("USERPROFILE", str(Path.home()))) / "Desktop"
    if os.name != "nt":
        return fallback
    try:
        import winreg
        key_path = r"Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders"
        with winreg.OpenKey(winreg.HKEY_CURRENT_USER, key_path) as key:
            raw, _ = winreg.QueryValueEx(key, "Desktop")
        expanded = os.path.expandvars(str(raw))
        if expanded:
            return Path(expanded)
    except Exception:
        pass
    return fallback

DEFAULT_DOWNLOADS = windows_desktop() / "KanDownload"
CONFIG = ROOT / "config.json"
LOGS = ROOT / "logs"
LOG = LOGS / "kanmedia-server.log"

for p in (ROOT, RUNTIME, JOBS, UPLOADS, BIN, DEFAULT_DOWNLOADS, LOGS):
    p.mkdir(parents=True, exist_ok=True)

ALLOWED_ORIGINS = {
    "https://lamhoailinh.github.io",
    "http://localhost",
    "http://127.0.0.1",
}
LOCAL_ORIGIN_RE = re.compile(r"^http://(?:localhost|127\.0\.0\.1)(?::\d+)?$", re.I)
CREATE_NO_WINDOW = getattr(subprocess, "CREATE_NO_WINDOW", 0x08000000 if os.name == "nt" else 0)
CREATE_NEW_CONSOLE = getattr(subprocess, "CREATE_NEW_CONSOLE", 0x00000010 if os.name == "nt" else 0)

def log(message: str) -> None:
    try:
        with LOG.open("a", encoding="utf-8") as f:
            f.write(f"{time.strftime('%Y-%m-%d %H:%M:%S')} {message}\n")
    except Exception:
        pass

def allowed_origin(origin: str | None) -> bool:
    if not origin:
        return True
    return origin in ALLOWED_ORIGINS or bool(LOCAL_ORIGIN_RE.match(origin))

def json_dump(path: Path, obj: object) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(obj, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    tmp.replace(path)

def json_load(path: Path):
    return json.loads(path.read_text(encoding="utf-8-sig"))

def safe_name(name: str) -> str:
    name = (name or "media.bin").strip()
    name = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", name).rstrip(" .")
    if not name:
        name = "media.bin"
    if len(name) > 180:
        stem, ext = os.path.splitext(name)
        name = stem[:150] + ext[:20]
    return name

def get_downloads() -> Path:
    folder = DEFAULT_DOWNLOADS
    try:
        if CONFIG.exists():
            data = json.loads(CONFIG.read_text(encoding="utf-8-sig"))
            raw = str(data.get("downloadDir") or "").strip()
            if raw:
                folder = Path(raw)
    except Exception as exc:
        log("CONFIG READ " + repr(exc))
    folder.mkdir(parents=True, exist_ok=True)
    return folder

def set_downloads(folder: str) -> Path:
    target = Path(str(folder or "").strip())
    if not str(target):
        raise ValueError("Chưa chọn thư mục.")
    target.mkdir(parents=True, exist_ok=True)
    data = {"downloadDir": str(target)}
    CONFIG.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    return target

def choose_downloads() -> Path | None:
    current = str(get_downloads()).replace("'", "''")
    ps = shutil.which("powershell.exe") or r"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe"
    script = (
        "Add-Type -AssemblyName System.Windows.Forms;"
        "$d=New-Object System.Windows.Forms.FolderBrowserDialog;"
        "$d.Description='Chọn thư mục lưu cho KanMedia';"
        "$d.ShowNewFolderButton=$true;"
        f"$d.SelectedPath='{current}';"
        "if($d.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK){"
        "[Console]::OutputEncoding=[System.Text.Encoding]::UTF8;"
        "Write-Output $d.SelectedPath}"
    )
    cp = subprocess.run(
        [ps, "-NoProfile", "-STA", "-Command", script],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=300,
        creationflags=CREATE_NO_WINDOW if os.name == "nt" else 0,
    )
    picked = cp.stdout.strip()
    if cp.returncode != 0:
        raise RuntimeError(cp.stderr.strip() or "Không mở được hộp chọn thư mục.")
    if not picked:
        return None
    return set_downloads(picked)

def node_path() -> str:
    if NODE.exists():
        return str(NODE)
    return shutil.which("node.exe") or shutil.which("node") or ""

def tool_env() -> dict[str, str]:
    env = os.environ.copy()
    env["PYTHONIOENCODING"] = "utf-8"
    env["PYTHONUTF8"] = "1"
    n = node_path()
    if n:
        env["PATH"] = str(Path(n).parent) + os.pathsep + env.get("PATH", "")
    return env

def run_text(args: list[str], timeout: int = 15) -> tuple[int, str, str]:
    cp = subprocess.run(
        args,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=timeout,
        env=tool_env(),
        creationflags=CREATE_NO_WINDOW if os.name == "nt" else 0,
    )
    return cp.returncode, cp.stdout.strip(), cp.stderr.strip()

def cleanup_stale_files() -> None:
    now = time.time()
    # Uploads còn dang dở được giữ 24 giờ để có thể chẩn đoán lỗi.
    for path in UPLOADS.glob("*"):
        try:
            if path.is_file() and now - path.stat().st_mtime > 24 * 3600:
                path.unlink(missing_ok=True)
        except Exception:
            pass
    # Log/job cũ chỉ giữ 7 ngày.
    for path in JOBS.glob("*"):
        try:
            if path.is_file() and now - path.stat().st_mtime > 7 * 24 * 3600:
                path.unlink(missing_ok=True)
        except Exception:
            pass

def read_upload_meta(upload_id: str) -> dict:
    if not re.fullmatch(r"[a-f0-9]{32}", str(upload_id or "")):
        raise ValueError("Mã file tạm không hợp lệ.")
    meta_path = UPLOADS / f"{upload_id}.json"
    if not meta_path.exists():
        raise FileNotFoundError("File tạm không còn tồn tại.")
    meta = json_load(meta_path)
    src = Path(str(meta.get("path") or ""))
    if not src.exists():
        raise FileNotFoundError("Không tìm thấy file media tạm.")
    return meta

def waveform_preview(payload: dict) -> dict:
    upload_id = str(payload.get("uploadId") or "")
    meta = read_upload_meta(upload_id)
    src = Path(str(meta["path"]))
    code, out, err = run_text([
        str(FFPROBE), "-v", "error", "-show_entries", "format=duration",
        "-of", "default=nw=1:nk=1", str(src)
    ], 30)
    if code != 0:
        raise RuntimeError(err or "Không đọc được thời lượng media.")
    try:
        dur = max(0.0, float((out.strip().splitlines() or ["0"])[-1]))
    except Exception:
        dur = 0.0
    if dur <= 0:
        raise RuntimeError("Không xác định được thời lượng media.")

    png = UPLOADS / f"{upload_id}.wave.png"
    args = [
        str(FFMPEG), "-hide_banner", "-loglevel", "error", "-y",
        "-i", str(src),
        "-filter_complex", "aformat=channel_layouts=mono,showwavespic=s=1600x180:colors=0x78b89c",
        "-frames:v", "1", str(png)
    ]
    cp = subprocess.run(
        args,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=240,
        env=tool_env(),
        creationflags=CREATE_NO_WINDOW if os.name == "nt" else 0,
    )
    if cp.returncode != 0 or not png.exists() or png.stat().st_size < 100:
        raise RuntimeError(cp.stderr.strip() or "Không tạo được waveform. File có thể không có luồng âm thanh.")
    raw = base64.b64encode(png.read_bytes()).decode("ascii")
    return {
        "ok": True,
        "uploadId": upload_id,
        "duration": dur,
        "width": 1600,
        "height": 180,
        "image": "data:image/png;base64," + raw,
        "name": str(meta.get("name") or src.name),
    }

def active_job() -> dict | None:
    candidates = []
    for p in JOBS.glob("*.status.json"):
        try:
            data = json_load(p)
            if str(data.get("state", "")) in {"queued", "running"}:
                candidates.append((p.stat().st_mtime, p, data))
        except Exception:
            pass
    if not candidates:
        return None
    _, p, data = max(candidates, key=lambda x: x[0])
    job_id = p.name.replace(".status.json", "")
    req = {}
    try:
        req = json_load(JOBS / f"{job_id}.request.json")
    except Exception:
        pass
    out = dict(data)
    out["jobId"] = job_id
    out["mode"] = out.get("mode") or req.get("mode") or ""
    return out

def _probe_http(url: str, headers: dict | None = None, timeout: float = 1.2) -> bool:
    try:
        req = urllib.request.Request(url, headers=headers or {})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return 200 <= int(getattr(r, "status", 200)) < 300
    except Exception:
        return False

def diagnostics() -> dict:
    checks = []
    def add(key: str, label: str, ok: bool, detail: str = ""):
        checks.append({"key": key, "label": label, "ok": bool(ok), "detail": detail})
    add("python", "Python KanBan Tools", bool(sys.executable and Path(sys.executable).exists()), sys.version.split()[0])
    try:
        code, out, _ = run_text([sys.executable, "-m", "yt_dlp", "--version"], 8)
        add("ytdlp", "Lõi tải yt-dlp", code == 0, out.strip())
    except Exception as exc:
        add("ytdlp", "Lõi tải yt-dlp", False, str(exc))
    n = node_path()
    try:
        code, out, _ = run_text([n, "--version"], 6) if n else (1, "", "")
        add("node", "Node.js", code == 0, out.strip())
    except Exception as exc:
        add("node", "Node.js", False, str(exc))
    add("ffmpeg", "FFmpeg", FFMPEG.exists() and FFPROBE.exists(), str(FFMPEG))
    add("capture", "Chụp màn hình", _probe_http("http://127.0.0.1:47631/ping"), "127.0.0.1:47631")
    add("media", "KanMedia", True, f"127.0.0.1:{PORT}")
    add("signing", "Ký số PDF", _probe_http("http://127.0.0.1:8765/health", {"X-KanBan-Agent": TOKEN}), "127.0.0.1:8765")
    try:
        folder = get_downloads()
        test = folder / ".kanmedia_write_test"
        test.write_text("ok", encoding="utf-8")
        test.unlink(missing_ok=True)
        add("folder", "Thư mục tải", True, str(folder))
    except Exception as exc:
        add("folder", "Thư mục tải", False, str(exc))
    startup = {}
    if os.name == "nt":
        try:
            import winreg
            with winreg.OpenKey(winreg.HKEY_CURRENT_USER, r"Software\Microsoft\Windows\CurrentVersion\Run") as key:
                for name in ("KanbanCapture", "KanBanMedia", "KanBanSigning"):
                    try:
                        startup[name] = winreg.QueryValueEx(key, name)[0]
                    except Exception:
                        startup[name] = ""
        except Exception:
            pass
    add("startup", "Tự chạy cùng Windows", all(startup.get(x) for x in ("KanbanCapture","KanBanMedia","KanBanSigning")), " / ".join(k for k,v in startup.items() if v))
    try:
        installed = json_load(ROOT / "installed.json") if (ROOT / "installed.json").exists() else {}
    except Exception:
        installed = {}
    return {
        "ok": True,
        "allOk": all(x["ok"] for x in checks),
        "checks": checks,
        "installed": installed,
        "activeJob": active_job(),
    }

def health() -> dict:
    yt = ""
    ff = ""
    nv = ""
    errors: list[str] = []
    try:
        code, out, err = run_text([sys.executable, "-m", "yt_dlp", "--version"], 12)
        if code == 0:
            yt = out.splitlines()[0].strip() if out else ""
        else:
            errors.append("yt-dlp chưa sẵn sàng")
    except Exception as exc:
        errors.append(f"yt-dlp: {exc}")
    try:
        n = node_path()
        if n:
            code, out, _ = run_text([n, "--version"], 8)
            if code == 0:
                nv = out.strip()
        if not nv:
            errors.append("Node.js chưa sẵn sàng")
    except Exception as exc:
        errors.append(f"Node.js: {exc}")
    try:
        if FFMPEG.exists():
            code, out, _ = run_text([str(FFMPEG), "-version"], 8)
            if code == 0 and out:
                ff = out.splitlines()[0].strip()
        if not ff or not FFPROBE.exists():
            errors.append("FFmpeg/FFprobe chưa sẵn sàng")
    except Exception as exc:
        errors.append(f"FFmpeg: {exc}")
    ready = bool(yt and nv and ff and FFPROBE.exists() and WORKER.exists())
    return {
        "ok": True,
        "version": "KanMedia Agent 1.4",
        "mediaReady": ready,
        "ytDlp": yt,
        "ffmpeg": ff,
        "node": nv,
        "worker": WORKER.exists(),
        "downloads": str(get_downloads()),
        "port": PORT,
        "errors": errors,
    }

def job_path(job_id: str) -> Path:
    return JOBS / f"{job_id}.status.json"

def running_jobs() -> bool:
    for path in JOBS.glob("*.status.json"):
        try:
            state = str(json_load(path).get("state", ""))
            if state in {"queued", "running"}:
                return True
        except Exception:
            pass
    return False

def start_job(mode: str, payload: dict) -> dict:
    if mode not in {"download", "convert", "edit"}:
        raise ValueError("Loại tác vụ không hợp lệ.")
    if not WORKER.exists():
        raise RuntimeError("Thiếu worker KanMedia. Hãy chạy lại KanTool.bat.")
    job_id = uuid.uuid4().hex
    payload = dict(payload or {})
    payload["downloadDir"] = str(get_downloads())
    req = {"jobId": job_id, "mode": mode, "created": time.strftime("%Y-%m-%dT%H:%M:%S"), "payload": payload}
    json_dump(JOBS / f"{job_id}.request.json", req)
    json_dump(job_path(job_id), {
        "ok": True, "state": "queued", "percent": 0, "message": "Đang chuẩn bị…",
        "workerPid": 0, "childPid": 0, "mode": mode,
    })
    creation = CREATE_NO_WINDOW if os.name == "nt" else 0
    worker_log = JOBS / f"{job_id}.launcher.log"
    log_handle = worker_log.open("a", encoding="utf-8")
    proc = subprocess.Popen(
        [sys.executable, str(WORKER), job_id],
        cwd=str(ROOT),
        env=tool_env(),
        creationflags=creation,
        stdout=log_handle,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
    )
    def watch():
        code = proc.wait()
        try:
            log_handle.close()
        except Exception:
            pass
        try:
            current = json_load(job_path(job_id))
        except Exception:
            current = {}
        if code != 0 and str(current.get("state", "")) not in {"done", "error", "cancelled"}:
            detail = ""
            for candidate in (JOBS / f"{job_id}.worker.log", worker_log):
                try:
                    lines = candidate.read_text(encoding="utf-8", errors="replace").splitlines()
                    if lines:
                        detail = " | ".join(lines[-5:])
                        break
                except Exception:
                    pass
            json_dump(job_path(job_id), {
                "ok": False,
                "state": "error",
                "percent": float(current.get("percent") or 0),
                "message": "Worker KanMedia đã dừng.",
                "current": str(current.get("current") or ""),
                "index": int(current.get("index") or 0),
                "total": int(current.get("total") or 0),
                "output": "",
                "error": detail or f"Worker kết thúc với mã {code}.",
                "workerPid": proc.pid,
                "childPid": 0,
            })
    threading.Thread(target=watch, daemon=True).start()
    return {"ok": True, "jobId": job_id, "workerPid": proc.pid}

def cancel_job(job_id: str) -> bool:
    status = job_path(job_id)
    if not status.exists():
        return False
    (JOBS / f"{job_id}.cancel").touch()
    try:
        data = json_load(status)
        for key in ("childPid", "workerPid"):
            pid = int(data.get(key) or 0)
            if pid > 0 and os.name == "nt":
                subprocess.run(
                    ["taskkill.exe", "/PID", str(pid), "/T", "/F"],
                    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                    creationflags=CREATE_NO_WINDOW,
                )
    except Exception:
        pass
    return True

def probe(payload: dict) -> dict:
    urls = []
    for u in payload.get("urls") or []:
        if isinstance(u, str) and re.match(r"^https?://", u, re.I):
            urls.append(u)
        if len(urls) >= 20:
            break
    if not urls:
        raise ValueError("Không có link hợp lệ.")
    all_playlist = bool(payload.get("allPlaylist"))
    items = []
    heights: set[int] = set()
    max_height = 0
    playlist_total = 0
    playlist_titles = []
    for url in urls:
        args = [sys.executable, "-m", "yt_dlp", "--skip-download", "--js-runtimes", "node"]
        if all_playlist:
            args += ["--yes-playlist", "--flat-playlist", "-J", url]
        else:
            args += ["--no-playlist", "-J", url]
        code, out, err = run_text(args, 90)
        if code != 0 or not out:
            raise RuntimeError(err or "Không đọc được thông tin nguồn.")
        info = json.loads(out)
        if all_playlist and (info.get("_type") == "playlist" or info.get("entries")):
            entries = [x for x in (info.get("entries") or []) if x]
            count = len(entries)
            title = info.get("title") or info.get("playlist_title") or "Playlist"
            playlist_total += count
            playlist_titles.append(title)
            items.append({"url": url, "title": title, "playlist": True, "playlistCount": count, "heights": []})
            continue
        hs = sorted({
            int(f.get("height")) for f in (info.get("formats") or [])
            if f.get("height") not in (None, "")
        })
        heights.update(hs)
        if hs:
            max_height = max(max_height, max(hs))
        items.append({
            "url": url,
            "title": info.get("title") or "",
            "duration": info.get("duration"),
            "heights": hs,
            "thumbnail": info.get("thumbnail") or "",
            "playlist": False,
            "playlistCount": 0,
        })
    return {
        "ok": True,
        "items": items,
        "heights": sorted(heights),
        "maxHeight": max_height,
        "playlistCount": playlist_total,
        "playlistTitles": playlist_titles,
    }

class KanMediaHTTPServer(ThreadingHTTPServer):
    daemon_threads = True
    allow_reuse_address = True

class Handler(BaseHTTPRequestHandler):
    server_version = "KanMedia/1.1"
    protocol_version = "HTTP/1.1"

    def log_message(self, fmt, *args):
        log(f"{self.client_address[0]} {fmt % args}")

    def _origin(self) -> str:
        origin = self.headers.get("Origin", "")
        return origin if origin and allowed_origin(origin) else "https://lamhoailinh.github.io"

    def _cors(self):
        self.send_header("Access-Control-Allow-Origin", self._origin())
        self.send_header("Vary", "Origin")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header(
            "Access-Control-Allow-Headers",
            "Content-Type, X-KanBan-Agent, X-KanBan-File-Name, X-KanBan-File-Type, X-KanBan-File-Size",
        )
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header("Private-Network-Access-Name", "kanban-media-agent")
        self.send_header("Private-Network-Access-ID", "4b:4d:41:00:01")
        self.send_header("Cache-Control", "no-store")

    def _json(self, obj, status=200):
        raw = json.dumps(obj, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
        self.send_response(status)
        self._cors()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def _error(self, msg, status=400):
        self._json({"ok": False, "error": str(msg)}, status)

    def _authorized(self) -> bool:
        origin = self.headers.get("Origin", "")
        if not allowed_origin(origin):
            self._error("Origin không được phép.", 403)
            return False
        if self.headers.get("X-KanBan-Agent", "") != TOKEN:
            self._error("Thiếu mã nhận diện KanBan.", 403)
            return False
        return True

    def _content_length(self) -> int:
        try:
            return int(self.headers.get("Content-Length", "0") or 0)
        except Exception:
            return 0

    def _read_json(self, max_bytes=8 * 1024 * 1024) -> dict:
        n = self._content_length()
        if n <= 0:
            return {}
        if n > max_bytes:
            raise ValueError("Dữ liệu gửi lên quá lớn.")
        raw = self.rfile.read(n)
        if len(raw) != n:
            raise ValueError("Dữ liệu gửi lên bị thiếu.")
        return json.loads(raw.decode("utf-8"))

    def do_OPTIONS(self):
        origin = self.headers.get("Origin", "")
        if not allowed_origin(origin):
            self.send_response(403)
            self.end_headers()
            return
        self.send_response(204)
        self._cors()
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self):
        if not self._authorized():
            return
        path = urlparse(self.path).path
        try:
            if path == "/health":
                self._json(health())
                return
            if path == "/jobs/active":
                self._json({"ok": True, "job": active_job()})
                return
            if path == "/system/diagnostics":
                self._json(diagnostics())
                return
            m = re.fullmatch(r"/jobs/([a-f0-9]{32})", path)
            if m:
                p = job_path(m.group(1))
                if not p.exists():
                    self._error("Không tìm thấy tác vụ.", 404)
                    return
                self._json(json_load(p))
                return
            self._error("Endpoint không tồn tại.", 404)
        except Exception as exc:
            log("GET ERROR " + traceback.format_exc())
            self._error(exc, 500)

    def do_POST(self):
        if not self._authorized():
            return
        path = urlparse(self.path).path
        try:
            if path == "/media/upload":
                self._handle_upload()
                return
            if path == "/media/probe":
                self._json(probe(self._read_json()))
                return
            if path == "/media/waveform":
                self._json(waveform_preview(self._read_json()))
                return
            if path in {"/media/download", "/media/convert", "/media/edit"}:
                mode = path.rsplit("/", 1)[-1]
                self._json(start_job(mode, self._read_json()), 201)
                return
            m = re.fullmatch(r"/jobs/([a-f0-9]{32})/cancel", path)
            if m:
                self._read_json()
                if cancel_job(m.group(1)):
                    self._json({"ok": True})
                else:
                    self._error("Không tìm thấy tác vụ.", 404)
                return
            if path == "/system/open-folder":
                self._read_json()
                folder = get_downloads()
                if os.name == "nt":
                    os.startfile(str(folder))
                else:
                    subprocess.Popen(["xdg-open", str(folder)])
                self._json({"ok": True, "path": str(folder)})
                return
            if path == "/system/select-folder":
                self._read_json()
                folder = choose_downloads()
                if folder is None:
                    self._json({"ok": True, "cancelled": True, "path": str(get_downloads())})
                else:
                    self._json({"ok": True, "cancelled": False, "path": str(folder)})
                return
            if path == "/system/diagnostics":
                self._read_json()
                self._json(diagnostics())
                return
            if path == "/system/repair":
                self._read_json()
                if running_jobs():
                    self._error("Hãy chờ tác vụ Media hiện tại hoàn tất rồi sửa công cụ.", 409)
                    return
                if not INSTALLER.exists():
                    self._error("Không tìm thấy KanTool.bat.", 404)
                    return
                if os.name == "nt":
                    subprocess.Popen(
                        [os.environ.get("COMSPEC", "cmd.exe"), "/c", str(INSTALLER), "/repair"],
                        cwd=str(ROOT),
                        creationflags=CREATE_NEW_CONSOLE,
                    )
                self._json({"ok": True})
                return
            if path == "/system/update":
                self._read_json()
                if running_jobs():
                    self._error("Hãy chờ tác vụ Media hiện tại hoàn tất rồi cập nhật.", 409)
                    return
                if not INSTALLER.exists():
                    self._error("Không tìm thấy KanTool.bat.", 404)
                    return
                if os.name == "nt":
                    subprocess.Popen(
                        [os.environ.get("COMSPEC", "cmd.exe"), "/c", str(INSTALLER), "/update"],
                        cwd=str(ROOT),
                        creationflags=CREATE_NEW_CONSOLE,
                    )
                self._json({"ok": True})
                return
            if path == "/shutdown":
                self._read_json()
                self._json({"ok": True})
                threading.Thread(target=self.server.shutdown, daemon=True).start()
                return
            self._error("Endpoint không tồn tại.", 404)
        except Exception as exc:
            log("POST ERROR " + traceback.format_exc())
            self._error(exc, 500)

    def _handle_upload(self):
        n = self._content_length()
        if n <= 0:
            raise ValueError("Không đọc được dung lượng file.")
        if n > 8 * 1024 * 1024 * 1024:
            raise ValueError("File lớn hơn giới hạn 8 GB.")
        raw_name = self.headers.get("X-KanBan-File-Name", "media.bin")
        name = safe_name(unquote(raw_name))
        ext = Path(name).suffix
        upload_id = uuid.uuid4().hex
        path = UPLOADS / f"{upload_id}{ext}"
        remaining = n
        with path.open("wb") as f:
            while remaining > 0:
                chunk = self.rfile.read(min(1024 * 1024, remaining))
                if not chunk:
                    raise IOError("Kết nối bị ngắt khi gửi file.")
                f.write(chunk)
                remaining -= len(chunk)
        meta = {
            "uploadId": upload_id,
            "name": name,
            "path": str(path),
            "size": n,
            "type": self.headers.get("X-KanBan-File-Type", ""),
            "created": time.strftime("%Y-%m-%dT%H:%M:%S"),
        }
        json_dump(UPLOADS / f"{upload_id}.json", meta)
        self._json(meta, 201)

def main():
    cleanup_stale_files()
    log(f"START Python={sys.executable} port={PORT}")
    try:
        server = KanMediaHTTPServer((HOST, PORT), Handler)
    except Exception:
        log("BIND ERROR " + traceback.format_exc())
        raise
    log("READY")
    try:
        server.serve_forever(poll_interval=0.3)
    finally:
        server.server_close()
        log("STOP")

if __name__ == "__main__":
    try:
        main()
    except Exception:
        log("FATAL " + traceback.format_exc())
        raise
