from __future__ import annotations

import hashlib
import os
import shutil
import socket
import subprocess
import tempfile
import time
import urllib.request
import winreg
import zipfile
from pathlib import Path
import tkinter as tk
from tkinter import messagebox, ttk

APP = "KanbanCapture"
PORT = 47631
BASE = "https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/capture-agent/bin"
APPDIR = Path(os.environ.get("LOCALAPPDATA", tempfile.gettempdir())) / APP
TARGET = APPDIR / "KanbanCapture.exe"


def download(url: str, path: Path) -> None:
    req = urllib.request.Request(url, headers={"User-Agent": "KanbanCaptureInstaller/5"})
    with urllib.request.urlopen(req, timeout=30) as resp, path.open("wb") as f:
        shutil.copyfileobj(resp, f)


def stop_old_agent() -> None:
    try:
        urllib.request.urlopen(f"http://127.0.0.1:{PORT}/quit?t={time.time_ns()}", timeout=1).read()
    except Exception:
        pass
    time.sleep(0.5)
    subprocess.run(
        ["taskkill", "/IM", "KanbanCapture.exe", "/F"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0),
        check=False,
    )
    time.sleep(0.6)


def register_windows(target: Path) -> None:
    base = r"Software\Classes\kanbancapture"
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER, base) as key:
        winreg.SetValueEx(key, None, 0, winreg.REG_SZ, "URL:Kanban Capture")
        winreg.SetValueEx(key, "URL Protocol", 0, winreg.REG_SZ, "")
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER, base + r"\shell\open\command") as key:
        winreg.SetValueEx(key, None, 0, winreg.REG_SZ, f'"{target}" "%1"')
    run_key = r"Software\Microsoft\Windows\CurrentVersion\Run"
    with winreg.CreateKey(winreg.HKEY_CURRENT_USER, run_key) as key:
        winreg.SetValueEx(key, APP, 0, winreg.REG_SZ, f'"{target}" --background')


def wait_agent(timeout: float = 8.0) -> bool:
    end = time.time() + timeout
    while time.time() < end:
        try:
            with socket.create_connection(("127.0.0.1", PORT), 0.35) as sock:
                sock.settimeout(0.5)
                sock.sendall(b"ping\n")
                if sock.recv(64).strip().startswith(b"OK"):
                    return True
        except OSError:
            pass
        time.sleep(0.25)
    return False


def install(progress) -> None:
    APPDIR.mkdir(parents=True, exist_ok=True)
    token = str(time.time_ns())
    progress(8, "Đang dừng Capture Agent cũ...")
    stop_old_agent()

    with tempfile.TemporaryDirectory(prefix="KanbanCaptureInstall_") as td:
        temp = Path(td)
        package = temp / "KanbanCapture-package.zip"
        checksum_file = temp / "KanbanCapture-package.sha256"
        stage = temp / "stage"
        stage.mkdir()

        progress(22, "Đang tải bản Capture Agent mới nhất...")
        download(f"{BASE}/KanbanCapture-package.zip?ts={token}", package)
        download(f"{BASE}/KanbanCapture-package.sha256?ts={token}", checksum_file)

        progress(48, "Đang kiểm tra tính toàn vẹn gói cài đặt...")
        expected = checksum_file.read_text(encoding="utf-8").strip().lower()
        actual = hashlib.sha256(package.read_bytes()).hexdigest().lower()
        if expected != actual:
            raise RuntimeError("SHA256 không khớp. Gói tải về có thể chưa hoàn chỉnh.")

        progress(62, "Đang giải nén phiên bản mới...")
        with zipfile.ZipFile(package, "r") as zf:
            zf.extractall(stage)
        built = stage / "KanbanCapture.exe"
        if not built.exists() or built.stat().st_size < 1_000_000:
            raise RuntimeError("Không tìm thấy KanbanCapture.exe hợp lệ trong gói cài.")

        progress(76, "Đang ghi đè bản cũ...")
        shutil.copy2(built, TARGET)

    progress(86, "Đang đăng ký Alt+C và khởi động cùng Windows...")
    register_windows(TARGET)
    subprocess.Popen(
        [str(TARGET), "--background"],
        close_fds=True,
        creationflags=getattr(subprocess, "CREATE_NO_WINDOW", 0),
    )

    progress(94, "Đang kiểm tra Capture Agent...")
    if not wait_agent():
        raise RuntimeError(
            "Đã chép bản mới nhưng Agent chưa phản hồi. Hãy kiểm tra Windows Security / SmartScreen."
        )
    progress(100, "Cập nhật thành công. Alt+C đã sẵn sàng.")


class InstallerUI:
    def __init__(self) -> None:
        self.root = tk.Tk()
        self.root.title("Cài đặt / Cập nhật Kanban Capture")
        self.root.resizable(False, False)
        self.root.geometry("520x245")
        self.root.configure(bg="#f4f7f5")

        frame = tk.Frame(self.root, bg="#ffffff", padx=24, pady=22)
        frame.pack(fill="both", expand=True, padx=16, pady=16)

        tk.Label(
            frame, text="KANBAN CAPTURE", bg="#ffffff", fg="#173b2d",
            font=("Segoe UI", 17, "bold")
        ).pack(anchor="w")
        tk.Label(
            frame,
            text="Bộ cài sẽ tự dừng bản cũ, tải bản mới nhất, ghi đè và khởi động lại.",
            bg="#ffffff", fg="#5d6d65", font=("Segoe UI", 9)
        ).pack(anchor="w", pady=(3, 16))

        self.status = tk.StringVar(value="Đang chuẩn bị cập nhật...")
        tk.Label(
            frame, textvariable=self.status, bg="#ffffff", fg="#263b32",
            font=("Segoe UI", 10, "bold")
        ).pack(anchor="w")

        self.progress = ttk.Progressbar(frame, orient="horizontal", mode="determinate", maximum=100)
        self.progress.pack(fill="x", pady=(9, 17))

        self.close_btn = tk.Button(
            frame, text="Đóng", command=self.root.destroy, state="disabled",
            bg="#e9efec", fg="#21372d", relief="flat", padx=22, pady=7,
            cursor="hand2", font=("Segoe UI", 9, "bold")
        )
        self.close_btn.pack(anchor="e")

        self.root.after(180, self.start)

    def report(self, value: int, text: str) -> None:
        self.root.after(0, lambda: self._apply_progress(value, text))

    def _apply_progress(self, value: int, text: str) -> None:
        self.progress["value"] = value
        self.status.set(text)

    def start(self) -> None:
        import threading

        def worker():
            try:
                install(self.report)
                self.root.after(0, self.success)
            except Exception as exc:
                self.root.after(0, lambda e=exc: self.failure(e))

        threading.Thread(target=worker, daemon=True).start()

    def success(self) -> None:
        self.close_btn.config(state="normal", bg="#2e8b67", fg="#ffffff")
        messagebox.showinfo(
            "Kanban Capture",
            "Cài đặt / cập nhật thành công.\n\n"
            "Bản cũ đã được ghi đè. Anh có thể dùng Alt+C hoặc nút CHỤP trong Kanban ngay.",
            parent=self.root,
        )

    def failure(self, exc: Exception) -> None:
        self.close_btn.config(state="normal")
        self.status.set("Cập nhật chưa thành công.")
        messagebox.showerror(
            "Kanban Capture",
            f"Không thể cập nhật Capture Agent.\n\n{exc}\n\n"
            "Nếu Windows chặn file, hãy kiểm tra Windows Security > Protection history.",
            parent=self.root,
        )

    def run(self) -> None:
        self.root.mainloop()


def main() -> int:
    if os.name != "nt":
        raise RuntimeError("Bộ cài Kanban Capture chỉ hỗ trợ Windows.")
    InstallerUI().run()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
