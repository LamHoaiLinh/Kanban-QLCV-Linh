from __future__ import annotations

import base64
import ctypes
import json
import os
import tempfile
import threading
import time
from ctypes import wintypes
from datetime import datetime
from pathlib import Path
import tkinter as tk
from tkinter import messagebox, simpledialog, ttk

try:
    from pykeepass import PyKeePass, create_database
    from pykeepass.exceptions import CredentialsError
    PYKEEPASS_OK = True
except Exception:
    PyKeePass = None
    create_database = None
    CredentialsError = Exception
    PYKEEPASS_OK = False


META_PREFIX = "KANPASS_META_V1\n"
MAX_HISTORY = 5


class _DATA_BLOB(ctypes.Structure):
    _fields_ = [("cbData", wintypes.DWORD), ("pbData", ctypes.POINTER(ctypes.c_byte))]


def _make_blob(data: bytes):
    if not data:
        return _DATA_BLOB(0, None), None
    buffer = (ctypes.c_byte * len(data)).from_buffer_copy(data)
    return _DATA_BLOB(len(data), ctypes.cast(buffer, ctypes.POINTER(ctypes.c_byte))), buffer


def _configure_dpapi():
    crypt32 = ctypes.windll.crypt32
    kernel32 = ctypes.windll.kernel32
    blob_ptr = ctypes.POINTER(_DATA_BLOB)
    crypt32.CryptProtectData.argtypes = [blob_ptr, ctypes.c_wchar_p, blob_ptr, ctypes.c_void_p, ctypes.c_void_p, wintypes.DWORD, blob_ptr]
    crypt32.CryptProtectData.restype = wintypes.BOOL
    crypt32.CryptUnprotectData.argtypes = [blob_ptr, ctypes.c_void_p, blob_ptr, ctypes.c_void_p, ctypes.c_void_p, wintypes.DWORD, blob_ptr]
    crypt32.CryptUnprotectData.restype = wintypes.BOOL
    kernel32.LocalFree.argtypes = [ctypes.c_void_p]
    kernel32.LocalFree.restype = ctypes.c_void_p
    return crypt32, kernel32


def dpapi_protect(data: bytes) -> bytes:
    in_blob, keepalive = _make_blob(data)
    out_blob = _DATA_BLOB()
    crypt32, kernel32 = _configure_dpapi()
    if not crypt32.CryptProtectData(
        ctypes.byref(in_blob), "KanPass", None, None, None, 0, ctypes.byref(out_blob)
    ):
        raise ctypes.WinError()
    try:
        return ctypes.string_at(out_blob.pbData, out_blob.cbData)
    finally:
        kernel32.LocalFree(ctypes.cast(out_blob.pbData, ctypes.c_void_p))
        _ = keepalive


def dpapi_unprotect(data: bytes) -> bytes:
    in_blob, keepalive = _make_blob(data)
    out_blob = _DATA_BLOB()
    crypt32, kernel32 = _configure_dpapi()
    if not crypt32.CryptUnprotectData(
        ctypes.byref(in_blob), None, None, None, None, 0, ctypes.byref(out_blob)
    ):
        raise ctypes.WinError()
    try:
        return ctypes.string_at(out_blob.pbData, out_blob.cbData)
    finally:
        kernel32.LocalFree(ctypes.cast(out_blob.pbData, ctypes.c_void_p))
        _ = keepalive


def now_iso() -> str:
    return datetime.now().astimezone().isoformat(timespec="seconds")


def _clean(value, limit=500):
    return str(value or "").strip()[:limit]


def _parse_meta(notes: str | None) -> dict:
    text = str(notes or "")
    if not text.startswith(META_PREFIX):
        return {}
    try:
        obj = json.loads(text[len(META_PREFIX):])
        return obj if isinstance(obj, dict) else {}
    except Exception:
        return {}


def _meta_notes(meta: dict) -> str:
    return META_PREFIX + json.dumps(meta, ensure_ascii=False, separators=(",", ":"))


def _normalize_order(value, item: dict) -> list[str]:
    allowed = ["company_id", "tax_id", "username", "password", "company"]
    if isinstance(value, str):
        raw = [x.strip().lower() for x in value.replace(";", ",").split(",")]
    elif isinstance(value, list):
        raw = [str(x).strip().lower() for x in value]
    else:
        raw = []
    order = []
    for key in raw:
        if key in allowed and key not in order:
            order.append(key)
    if not order:
        if item.get("company_id"):
            order.append("company_id")
        elif item.get("tax_id"):
            order.append("tax_id")
        if item.get("username"):
            order.append("username")
        order.append("password")
    if "password" not in order:
        order.append("password")
    return order


def _display_name(item: dict) -> str:
    title = _clean(item.get("title"), 120)
    if title:
        return title
    service = _clean(item.get("service"), 80) or "Tài khoản"
    suffix = (
        _clean(item.get("company"), 100)
        or _clean(item.get("tax_id"), 40)
        or _clean(item.get("company_id"), 80)
        or _clean(item.get("username"), 120)
    )
    return f"{service} - {suffix}" if suffix else service


def _service_from_window(title: str) -> str:
    text = _clean(title, 160)
    for suffix in (" - Google Chrome", " - Microsoft Edge", " - Brave", " - Vivaldi", " — Mozilla Firefox"):
        if text.endswith(suffix):
            text = text[:-len(suffix)].strip()
            break
    for sep in (" | ", " - ", " — "):
        if sep in text:
            first = text.split(sep, 1)[0].strip()
            if first:
                return first[:80]
    return text[:80] or "Ứng dụng"


ULONG_PTR = wintypes.WPARAM


class _MOUSEINPUT(ctypes.Structure):
    _fields_ = [
        ("dx", wintypes.LONG), ("dy", wintypes.LONG), ("mouseData", wintypes.DWORD),
        ("dwFlags", wintypes.DWORD), ("time", wintypes.DWORD), ("dwExtraInfo", ULONG_PTR)
    ]


class _KEYBDINPUT(ctypes.Structure):
    _fields_ = [
        ("wVk", wintypes.WORD), ("wScan", wintypes.WORD), ("dwFlags", wintypes.DWORD),
        ("time", wintypes.DWORD), ("dwExtraInfo", ULONG_PTR)
    ]


class _HARDWAREINPUT(ctypes.Structure):
    _fields_ = [("uMsg", wintypes.DWORD), ("wParamL", wintypes.WORD), ("wParamH", wintypes.WORD)]


class _INPUTUNION(ctypes.Union):
    _fields_ = [("mi", _MOUSEINPUT), ("ki", _KEYBDINPUT), ("hi", _HARDWAREINPUT)]


class _INPUT(ctypes.Structure):
    _anonymous_ = ("u",)
    _fields_ = [("type", wintypes.DWORD), ("u", _INPUTUNION)]


def _send_key(vk: int):
    user32 = ctypes.windll.user32
    arr = (_INPUT * 2)()
    arr[0].type = 1
    arr[0].ki = _KEYBDINPUT(vk, 0, 0, 0, 0)
    arr[1].type = 1
    arr[1].ki = _KEYBDINPUT(vk, 0, 0x0002, 0, 0)
    user32.SendInput(2, ctypes.byref(arr), ctypes.sizeof(_INPUT))


def _send_text(text: str):
    user32 = ctypes.windll.user32
    for ch in str(text):
        code = ord(ch)
        arr = (_INPUT * 2)()
        arr[0].type = 1
        arr[0].ki = _KEYBDINPUT(0, code, 0x0004, 0, 0)
        arr[1].type = 1
        arr[1].ki = _KEYBDINPUT(0, code, 0x0004 | 0x0002, 0, 0)
        user32.SendInput(2, ctypes.byref(arr), ctypes.sizeof(_INPUT))


def foreground_context() -> dict:
    user32 = ctypes.windll.user32
    kernel32 = ctypes.windll.kernel32
    user32.GetForegroundWindow.restype = wintypes.HWND
    user32.GetWindowTextLengthW.argtypes = [wintypes.HWND]
    user32.GetWindowTextLengthW.restype = ctypes.c_int
    user32.GetWindowTextW.argtypes = [wintypes.HWND, wintypes.LPWSTR, ctypes.c_int]
    user32.GetWindowTextW.restype = ctypes.c_int
    user32.GetWindowThreadProcessId.argtypes = [wintypes.HWND, ctypes.POINTER(wintypes.DWORD)]
    user32.GetWindowThreadProcessId.restype = wintypes.DWORD
    kernel32.OpenProcess.argtypes = [wintypes.DWORD, wintypes.BOOL, wintypes.DWORD]
    kernel32.OpenProcess.restype = wintypes.HANDLE
    kernel32.QueryFullProcessImageNameW.argtypes = [wintypes.HANDLE, wintypes.DWORD, wintypes.LPWSTR, ctypes.POINTER(wintypes.DWORD)]
    kernel32.QueryFullProcessImageNameW.restype = wintypes.BOOL
    kernel32.CloseHandle.argtypes = [wintypes.HANDLE]
    kernel32.CloseHandle.restype = wintypes.BOOL
    hwnd = user32.GetForegroundWindow()
    length = user32.GetWindowTextLengthW(hwnd)
    buffer = ctypes.create_unicode_buffer(max(2, length + 1))
    user32.GetWindowTextW(hwnd, buffer, len(buffer))
    pid = wintypes.DWORD()
    user32.GetWindowThreadProcessId(hwnd, ctypes.byref(pid))
    exe = ""
    PROCESS_QUERY_LIMITED_INFORMATION = 0x1000
    handle = kernel32.OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, False, pid.value)
    if handle:
        try:
            size = wintypes.DWORD(32768)
            path = ctypes.create_unicode_buffer(size.value)
            if kernel32.QueryFullProcessImageNameW(handle, 0, path, ctypes.byref(size)):
                exe = os.path.basename(path.value)
        finally:
            kernel32.CloseHandle(handle)
    return {"hwnd": int(hwnd or 0), "title": buffer.value, "exe": exe, "pid": int(pid.value)}


def read_visible_edit_controls(hwnd: int) -> list[str]:
    """Best effort only. Never read controls marked ES_PASSWORD."""
    user32 = ctypes.windll.user32
    values = []
    WM_GETTEXT = 0x000D
    WM_GETTEXTLENGTH = 0x000E
    GWL_STYLE = -16
    ES_PASSWORD = 0x0020

    @ctypes.WINFUNCTYPE(wintypes.BOOL, wintypes.HWND, wintypes.LPARAM)
    def enum_proc(child, _):
        try:
            cls = ctypes.create_unicode_buffer(128)
            user32.GetClassNameW(child, cls, len(cls))
            name = cls.value.lower()
            if "edit" not in name:
                return True
            style = user32.GetWindowLongW(child, GWL_STYLE)
            if style & ES_PASSWORD:
                return True
            n = user32.SendMessageW(child, WM_GETTEXTLENGTH, 0, 0)
            if 0 < n < 1000:
                buf = ctypes.create_unicode_buffer(n + 1)
                user32.SendMessageW(child, WM_GETTEXT, n + 1, ctypes.byref(buf))
                value = buf.value.strip()
                if value:
                    values.append(value)
        except Exception:
            pass
        return True

    try:
        user32.EnumChildWindows(hwnd, enum_proc, 0)
    except Exception:
        pass
    return values[:8]


class KanPassManager:
    def __init__(self, root: tk.Tk, base_dir: Path):
        self.root = root
        self.dir = Path(base_dir)
        self.dir.mkdir(parents=True, exist_ok=True)
        self.db_path = self.dir / "kanpass.kdbx"
        self.unlock_path = self.dir / "kanpass_unlock.bin"
        self._kp = None
        self._master = None
        self._lock = threading.RLock()

    def status(self) -> dict:
        return {
            "ok": True,
            "available": PYKEEPASS_OK,
            "setupRequired": not self.db_path.exists(),
            "ready": bool(PYKEEPASS_OK and self.db_path.exists() and self.unlock_path.exists()),
            "count": self.count_entries() if PYKEEPASS_OK and self.db_path.exists() and self.unlock_path.exists() else 0,
            "format": "kdbx4"
        }

    def _save_master(self, master: str):
        protected = dpapi_protect(master.encode("utf-8"))
        self.unlock_path.write_bytes(protected)
        self._master = master

    def _load_master(self) -> str:
        if self._master:
            return self._master
        if not self.unlock_path.exists():
            raise RuntimeError("KanPass chưa được mở trên máy này.")
        master = dpapi_unprotect(self.unlock_path.read_bytes()).decode("utf-8")
        self._master = master
        return master

    def _open(self):
        if not PYKEEPASS_OK:
            raise RuntimeError("Thiếu thư viện PyKeePass. Hãy cập nhật KanBan Tools.")
        if self._kp is not None:
            return self._kp
        if not self.db_path.exists():
            raise RuntimeError("KanPass chưa thiết lập.")
        master = self._load_master()
        self._kp = PyKeePass(str(self.db_path), password=master)
        return self._kp

    def setup(self, master: str) -> dict:
        master = str(master or "")
        if len(master) < 10:
            raise ValueError("Mật khẩu chính KanPass cần ít nhất 10 ký tự.")
        if not PYKEEPASS_OK:
            raise RuntimeError("Thiếu thư viện PyKeePass. Hãy cập nhật KanBan Tools.")
        with self._lock:
            if self.db_path.exists():
                raise RuntimeError("KanPass đã được thiết lập.")
            kp = create_database(str(self.db_path), password=master)
            kp.save()
            self._save_master(master)
            self._kp = PyKeePass(str(self.db_path), password=master)
        return self.status()

    def _entry_by_id(self, entry_id: str):
        kp = self._open()
        target = str(entry_id or "").lower()
        for entry in kp.entries:
            if str(entry.uuid).lower() == target:
                return entry
        return None

    def _item_from_entry(self, entry, reveal=False) -> dict:
        meta = _parse_meta(entry.notes)
        history = meta.get("history") if isinstance(meta.get("history"), list) else []
        item = {
            "id": str(entry.uuid),
            "title": entry.title or "",
            "service": _clean(meta.get("service"), 80),
            "company": _clean(meta.get("company"), 120),
            "tax_id": _clean(meta.get("tax_id"), 40),
            "company_id": _clean(meta.get("company_id"), 100),
            "username": entry.username or "",
            "url": entry.url or "",
            "window_match": _clean(meta.get("window_match"), 180),
            "app_exe": _clean(meta.get("app_exe"), 100),
            "field_order": _normalize_order(meta.get("field_order"), {
                "company_id": meta.get("company_id"), "tax_id": meta.get("tax_id"),
                "username": entry.username, "password": entry.password, "company": meta.get("company")
            }),
            "updated_at": _clean(meta.get("updated_at"), 50),
            "created_at": _clean(meta.get("created_at"), 50),
            "history_count": len(history),
            "password": entry.password if reveal else "",
            "history": history if reveal else []
        }
        return item

    def list_items(self, query="") -> list[dict]:
        with self._lock:
            kp = self._open()
            q = str(query or "").strip().lower()
            out = []
            for entry in kp.entries:
                item = self._item_from_entry(entry, reveal=False)
                hay = " ".join([
                    item["title"], item["service"], item["company"], item["tax_id"],
                    item["company_id"], item["username"], item["url"], item["window_match"], item["app_exe"]
                ]).lower()
                if q and q not in hay:
                    continue
                out.append(item)
            out.sort(key=lambda x: (x["service"].lower(), x["title"].lower()))
            return out

    def count_entries(self) -> int:
        try:
            with self._lock:
                return len(self._open().entries)
        except Exception:
            return 0

    def get_item(self, entry_id: str, reveal=False) -> dict:
        with self._lock:
            entry = self._entry_by_id(entry_id)
            if entry is None:
                raise KeyError("Không tìm thấy tài khoản.")
            return self._item_from_entry(entry, reveal=reveal)

    def _history_for_change(self, old_password: str, old_meta: dict, new_password: str) -> list[dict]:
        history = old_meta.get("history") if isinstance(old_meta.get("history"), list) else []
        history = [x for x in history if isinstance(x, dict) and x.get("password")]
        if old_password and new_password and old_password != new_password:
            history.insert(0, {"password": old_password, "changed_at": now_iso()})
        return history[:MAX_HISTORY]

    def password_reuse_info(self, entry_id: str, new_password: str) -> dict | None:
        if not entry_id or not new_password:
            return None
        entry = self._entry_by_id(entry_id)
        if entry is None:
            return None
        meta = _parse_meta(entry.notes)
        if new_password == (entry.password or ""):
            return {"kind": "current", "changed_at": meta.get("updated_at") or ""}
        for item in meta.get("history", []) if isinstance(meta.get("history"), list) else []:
            if isinstance(item, dict) and item.get("password") == new_password:
                return {"kind": "history", "changed_at": item.get("changed_at") or ""}
        return None

    def save_item(self, data: dict) -> dict:
        if not isinstance(data, dict):
            raise ValueError("Dữ liệu tài khoản không hợp lệ.")
        with self._lock:
            kp = self._open()
            entry_id = _clean(data.get("id"), 80)
            entry = self._entry_by_id(entry_id) if entry_id else None
            creating = entry is None
            old_meta = _parse_meta(entry.notes) if entry is not None else {}
            old_password = (entry.password or "") if entry is not None else ""
            requested_password = str(data.get("password") or "")
            new_password = requested_password if requested_password else old_password
            item_seed = {
                "title": data.get("title"), "service": data.get("service"), "company": data.get("company"),
                "tax_id": data.get("tax_id"), "company_id": data.get("company_id"),
                "username": data.get("username"), "password": new_password
            }
            title = _display_name(item_seed)
            username = _clean(data.get("username"), 250)
            service = _clean(data.get("service"), 80) or _service_from_window(_clean(data.get("window_match"), 180))
            meta = {
                "service": service,
                "company": _clean(data.get("company"), 120),
                "tax_id": _clean(data.get("tax_id"), 40),
                "company_id": _clean(data.get("company_id"), 100),
                "window_match": _clean(data.get("window_match"), 180),
                "app_exe": _clean(data.get("app_exe"), 100).lower(),
                "field_order": _normalize_order(data.get("field_order"), item_seed),
                "history": self._history_for_change(old_password, old_meta, new_password),
                "created_at": old_meta.get("created_at") or now_iso(),
                "updated_at": now_iso()
            }
            url = _clean(data.get("url"), 500)
            if creating:
                entry = kp.add_entry(kp.root_group, title, username, new_password, url=url, notes=_meta_notes(meta))
            else:
                entry.title = title
                entry.username = username
                entry.password = new_password
                entry.url = url
                entry.notes = _meta_notes(meta)
            kp.save()
            return self._item_from_entry(entry, reveal=False)

    def delete_item(self, entry_id: str) -> dict:
        with self._lock:
            kp = self._open()
            entry = self._entry_by_id(entry_id)
            if entry is None:
                raise KeyError("Không tìm thấy tài khoản.")
            kp.delete_entry(entry)
            kp.save()
            return {"ok": True}

    def export_backup(self) -> dict:
        if not self.db_path.exists():
            return {"available": False, "kdbxBase64": "", "count": 0}
        data = self.db_path.read_bytes()
        return {
            "available": True,
            "format": "kdbx",
            "encrypted": True,
            "count": self.count_entries(),
            "kdbxBase64": base64.b64encode(data).decode("ascii")
        }

    def import_backup(self, payload: dict) -> dict:
        raw_b64 = str((payload or {}).get("kdbxBase64") or "")
        if not raw_b64:
            raise ValueError("Backup KanPass không có dữ liệu KDBX.")
        try:
            raw = base64.b64decode(raw_b64, validate=True)
        except Exception as exc:
            raise ValueError("Dữ liệu KDBX trong backup bị lỗi.") from exc
        if len(raw) < 100:
            raise ValueError("Dữ liệu KDBX quá ngắn.")
        candidates = []
        try:
            cached = self._load_master()
            if cached:
                candidates.append(cached)
        except Exception:
            pass
        tmp = Path(tempfile.mkstemp(prefix="kanpass_import_", suffix=".kdbx")[1])
        try:
            tmp.write_bytes(raw)
            verified = None
            for master in candidates:
                try:
                    probe = PyKeePass(str(tmp), password=master)
                    _ = len(probe.entries)
                    verified = master
                    break
                except Exception:
                    pass
            if verified is None:
                master = self._ask_master_sync()
                if master is None:
                    return {"ok": False, "cancelled": True, "message": "Đã hủy nhập KanPass."}
                try:
                    probe = PyKeePass(str(tmp), password=master)
                    _ = len(probe.entries)
                    verified = master
                except Exception:
                    return {"ok": False, "needPassword": True, "message": "Mật khẩu chính KanPass không đúng."}
            backup = self.db_path.with_suffix(".before-import.kdbx")
            if self.db_path.exists():
                try:
                    backup.write_bytes(self.db_path.read_bytes())
                except Exception:
                    pass
            self.db_path.write_bytes(raw)
            self._save_master(verified)
            self._kp = PyKeePass(str(self.db_path), password=verified)
            return {"ok": True, "count": len(self._kp.entries)}
        finally:
            try:
                tmp.unlink(missing_ok=True)
            except Exception:
                pass

    def _ask_master_sync(self):
        result = {"value": None}
        done = threading.Event()

        def ask():
            try:
                result["value"] = simpledialog.askstring(
                    "KanPass - Khôi phục",
                    "Nhập mật khẩu chính của file KanPass backup:",
                    show="*",
                    parent=self.root
                )
            finally:
                done.set()

        self.root.after(0, ask)
        if not done.wait(300):
            return None
        return result.get("value")

    def _copy_secret(self, value: str):
        try:
            self.root.clipboard_clear()
            self.root.clipboard_append(value)
            self.root.update_idletasks()
            def clear():
                try:
                    if self.root.clipboard_get() == value:
                        self.root.clipboard_clear()
                except Exception:
                    pass
            self.root.after(20000, clear)
        except Exception:
            pass

    def show_secret_window(self, entry_id: str):
        try:
            item = self.get_item(entry_id, reveal=True)
        except Exception as exc:
            messagebox.showerror("KanPass", str(exc), parent=self.root)
            return
        win = tk.Toplevel(self.root)
        win.title("KanPass - Xem mật khẩu")
        win.attributes("-topmost", True)
        win.geometry("620x500")
        frame = ttk.Frame(win, padding=14)
        frame.pack(fill="both", expand=True)
        ttk.Label(frame, text=item.get("title") or "Tài khoản", font=("Segoe UI", 12, "bold")).pack(anchor="w")
        info = " · ".join(x for x in [item.get("company"), item.get("tax_id"), item.get("username")] if x)
        if info:
            ttk.Label(frame, text=info, foreground="#61706a").pack(anchor="w", pady=(2, 10))
        ttk.Label(frame, text="Mật khẩu hiện tại").pack(anchor="w")
        current = ttk.Entry(frame, show="●")
        current.insert(0, item.get("password") or "")
        current.configure(state="readonly")
        current.pack(fill="x", pady=(4, 6))
        buttons = ttk.Frame(frame)
        buttons.pack(fill="x")
        revealed = {"value": False}
        def toggle():
            revealed["value"] = not revealed["value"]
            current.configure(show="" if revealed["value"] else "●")
            for ent in history_entries:
                ent.configure(show="" if revealed["value"] else "●")
        ttk.Button(buttons, text="Hiện / Ẩn", command=toggle).pack(side="left")
        ttk.Button(buttons, text="Sao chép mật khẩu hiện tại (tự xóa 20 giây)", command=lambda:self._copy_secret(item.get("password") or "")).pack(side="right")
        ttk.Separator(frame).pack(fill="x", pady=12)
        ttk.Label(frame, text=f"Lịch sử mật khẩu gần nhất ({len(item.get('history') or [])}/{MAX_HISTORY})", font=("Segoe UI", 10, "bold")).pack(anchor="w")
        history_box = ttk.Frame(frame)
        history_box.pack(fill="both", expand=True, pady=(6, 0))
        history_entries = []
        history = item.get("history") or []
        if not history:
            ttk.Label(history_box, text="Chưa có lịch sử đổi mật khẩu.", foreground="#61706a").pack(anchor="w")
        for index, old in enumerate(history):
            row = ttk.Frame(history_box)
            row.pack(fill="x", pady=3)
            ttk.Label(row, text=f"{index+1}. {old.get('changed_at') or ''}", width=28).pack(side="left")
            ent = ttk.Entry(row, show="●")
            ent.insert(0, str(old.get("password") or ""))
            ent.configure(state="readonly")
            ent.pack(side="left", fill="x", expand=True, padx=(6, 0))
            history_entries.append(ent)
        ttk.Button(frame, text="Đóng", command=win.destroy).pack(anchor="e", pady=(12, 0))
        win.focus_force()

    def password_dialog(self, entry_id: str):
        try:
            item = self.get_item(entry_id, reveal=False)
        except Exception as exc:
            messagebox.showerror("KanPass", str(exc), parent=self.root)
            return
        win = tk.Toplevel(self.root)
        win.title("KanPass - Đặt / đổi mật khẩu")
        win.attributes("-topmost", True)
        win.resizable(False, False)
        frame = ttk.Frame(win, padding=14)
        frame.pack(fill="both", expand=True)
        ttk.Label(frame, text=item.get("title") or "Tài khoản", font=("Segoe UI", 11, "bold")).grid(row=0, column=0, columnspan=2, sticky="w")
        ttk.Label(frame, text="Mật khẩu mới").grid(row=1, column=0, sticky="w", pady=(12, 4))
        password = tk.StringVar()
        confirm = tk.StringVar()
        p1 = ttk.Entry(frame, textvariable=password, show="●", width=42)
        p1.grid(row=1, column=1, sticky="ew", pady=(12, 4))
        ttk.Label(frame, text="Nhập lại").grid(row=2, column=0, sticky="w", pady=4)
        ttk.Entry(frame, textvariable=confirm, show="●", width=42).grid(row=2, column=1, sticky="ew", pady=4)
        frame.columnconfigure(1, weight=1)
        actions = ttk.Frame(frame)
        actions.grid(row=3, column=0, columnspan=2, sticky="ew", pady=(12, 0))
        ttk.Button(actions, text="Hủy", command=win.destroy).pack(side="left")
        def save():
            new = password.get()
            if not new:
                messagebox.showinfo("KanPass", "Hãy nhập mật khẩu mới.", parent=win)
                return
            if new != confirm.get():
                messagebox.showwarning("KanPass", "Mật khẩu nhập lại chưa khớp.", parent=win)
                return
            reuse = self.password_reuse_info(entry_id, new)
            if reuse and reuse.get("kind") == "history":
                when = reuse.get("changed_at") or "trước đây"
                if not messagebox.askyesno("KanPass", f"Mật khẩu này đã từng được sử dụng ({when}).\nMột số ngân hàng không cho dùng lại mật khẩu cũ.\n\nVẫn lưu?", parent=win):
                    return
            payload = dict(item)
            payload["password"] = new
            try:
                self.save_item(payload)
                messagebox.showinfo("KanPass", "Đã cập nhật mật khẩu.", parent=win)
                win.destroy()
            except Exception as exc:
                messagebox.showerror("KanPass", str(exc), parent=win)
        ttk.Button(actions, text="Lưu mật khẩu", command=save).pack(side="right")
        p1.focus_set()
        win.focus_force()

    def _context_matches(self, item: dict, ctx: dict) -> int:
        title = str(ctx.get("title") or "").lower()
        exe = str(ctx.get("exe") or "").lower()
        score = 0
        wm = str(item.get("window_match") or "").lower()
        app = str(item.get("app_exe") or "").lower()
        service = str(item.get("service") or "").lower()
        if wm and wm in title:
            score += 8
        if app and app == exe:
            score += 1 if exe in {'chrome.exe','msedge.exe','brave.exe','vivaldi.exe','firefox.exe'} else 4
        if service and service in title:
            score += 4
        return score

    def matches_for_context(self, ctx: dict) -> list[dict]:
        matches = []
        for item in self.list_items():
            score = self._context_matches(item, ctx)
            if score:
                item["_score"] = score
                matches.append(item)
        matches.sort(key=lambda x: (-x["_score"], x["title"].lower()))
        if not matches:
            return []
        top = matches[0]["_score"]
        return [x for x in matches if x["_score"] >= max(2, top - 2)]

    def _fill_entry(self, entry_id: str, target_hwnd: int):
        item = self.get_item(entry_id, reveal=True)
        values = {
            "company_id": item.get("company_id") or "",
            "tax_id": item.get("tax_id") or "",
            "username": item.get("username") or "",
            "password": item.get("password") or "",
            "company": item.get("company") or ""
        }
        sequence = [key for key in item.get("field_order", []) if values.get(key) != ""]
        if not sequence:
            raise RuntimeError("Tài khoản chưa có dữ liệu để điền.")
        user32 = ctypes.windll.user32
        user32.SetForegroundWindow(target_hwnd)
        time.sleep(0.12)
        for index, key in enumerate(sequence):
            _send_text(values[key])
            if index < len(sequence) - 1:
                _send_key(0x09)
                time.sleep(0.04)

    def hotkey_autofill(self):
        if not self.db_path.exists():
            messagebox.showinfo("KanPass", "KanPass chưa thiết lập. Mở KanBan > CÔNG CỤ > KanPass để thiết lập lần đầu.", parent=self.root)
            return
        try:
            ctx = foreground_context()
            matches = self.matches_for_context(ctx)
            if not matches:
                messagebox.showinfo("KanPass", "Chưa tìm thấy tài khoản phù hợp với cửa sổ này.\nHãy nhập thông tin rồi bấm Alt+P để lưu.", parent=self.root)
                return
            if len(matches) == 1:
                self._fill_entry(matches[0]["id"], ctx["hwnd"])
                return
            self._choose_for_fill(ctx, matches)
        except Exception as exc:
            messagebox.showerror("KanPass", f"Không thể tự điền: {exc}", parent=self.root)

    def _choose_for_fill(self, ctx: dict, matches: list[dict]):
        win = tk.Toplevel(self.root)
        win.title("KanPass - Chọn tài khoản")
        win.attributes("-topmost", True)
        win.resizable(False, False)
        frame = ttk.Frame(win, padding=14)
        frame.pack(fill="both", expand=True)
        ttk.Label(frame, text="Có nhiều tài khoản phù hợp", font=("Segoe UI", 11, "bold")).pack(anchor="w")
        ttk.Label(frame, text=_clean(ctx.get("title"), 110), foreground="#61706a").pack(anchor="w", pady=(2, 10))
        selected = tk.StringVar(value=matches[0]["id"])
        for item in matches:
            label = item["title"] or item["username"] or item["service"]
            ttk.Radiobutton(frame, text=label, variable=selected, value=item["id"]).pack(anchor="w", pady=2)
        buttons = ttk.Frame(frame)
        buttons.pack(fill="x", pady=(12, 0))
        ttk.Button(buttons, text="Hủy", command=win.destroy).pack(side="left")
        def fill():
            entry_id = selected.get()
            win.destroy()
            self.root.after(120, lambda: self._fill_entry(entry_id, ctx["hwnd"]))
        ttk.Button(buttons, text="Điền", command=fill).pack(side="right")
        win.focus_force()

    def hotkey_save_update(self):
        if not self.db_path.exists():
            messagebox.showinfo("KanPass", "KanPass chưa thiết lập. Mở KanBan > CÔNG CỤ > KanPass để thiết lập lần đầu.", parent=self.root)
            return
        try:
            ctx = foreground_context()
            visible = read_visible_edit_controls(ctx["hwnd"])
            matches = self.matches_for_context(ctx)
            self._save_update_dialog(ctx, matches, visible)
        except Exception as exc:
            messagebox.showerror("KanPass", f"Không thể mở lưu/cập nhật: {exc}", parent=self.root)

    def _save_update_dialog(self, ctx: dict, matches: list[dict], visible: list[str]):
        win = tk.Toplevel(self.root)
        win.title("KanPass - Lưu / cập nhật (Alt+P)")
        win.attributes("-topmost", True)
        win.geometry("560x610")
        outer = ttk.Frame(win, padding=14)
        outer.pack(fill="both", expand=True)

        ttk.Label(outer, text="Lưu / cập nhật thông tin đăng nhập", font=("Segoe UI", 12, "bold")).grid(row=0, column=0, columnspan=2, sticky="w")
        ttk.Label(outer, text=f"Cửa sổ: {_clean(ctx.get('title'), 120)}", foreground="#61706a", wraplength=515).grid(row=1, column=0, columnspan=2, sticky="w", pady=(2, 10))

        choices = [("Tạo tài khoản mới", "")] + [(x["title"], x["id"]) for x in matches]
        labels = [x[0] for x in choices]
        id_by_label = {label: entry_id for label, entry_id in choices}
        pick = tk.StringVar(value=labels[1] if len(labels) > 1 else labels[0])
        ttk.Label(outer, text="Tài khoản").grid(row=2, column=0, sticky="w", pady=4)
        combo = ttk.Combobox(outer, textvariable=pick, values=labels, state="readonly")
        combo.grid(row=2, column=1, sticky="ew", pady=4)

        fields = {}
        row = 3
        specs = [
            ("title", "Tên tài khoản", False),
            ("service", "Dịch vụ / App", False),
            ("company", "Công ty / Đơn vị", False),
            ("company_id", "Mã công ty / Company ID", False),
            ("tax_id", "Mã số thuế", False),
            ("username", "Tên đăng nhập", False),
            ("password", "Mật khẩu mới", True),
            ("field_order", "Thứ tự điền", False)
        ]
        for key, label, secret in specs:
            ttk.Label(outer, text=label).grid(row=row, column=0, sticky="w", pady=4)
            var = tk.StringVar()
            ent = ttk.Entry(outer, textvariable=var, show="●" if secret else "")
            ent.grid(row=row, column=1, sticky="ew", pady=4)
            fields[key] = var
            row += 1
        ttk.Label(outer, text="Ví dụ MB: company_id,username,password · Thuế: tax_id,password", foreground="#61706a").grid(row=row, column=0, columnspan=2, sticky="w", pady=(0, 7))
        row += 1
        status = ttk.Label(outer, text="KanPass chỉ đọc các ô văn bản thường. Ô password được bảo vệ sẽ không bị đọc ngược.", foreground="#61706a", wraplength=515)
        status.grid(row=row, column=0, columnspan=2, sticky="w", pady=(2, 8))
        row += 1
        outer.columnconfigure(1, weight=1)

        def load_selected(*_):
            entry_id = id_by_label.get(pick.get(), "")
            current = self.get_item(entry_id, reveal=False) if entry_id else {}
            fields["title"].set(current.get("title") or "")
            fields["service"].set(current.get("service") or _service_from_window(ctx.get("title") or ""))
            fields["company"].set(current.get("company") or "")
            first_visible = visible[0] if visible else ""
            tax_digits = "".join(ch for ch in first_visible if ch.isdigit())
            guessed_tax = first_visible if len(tax_digits) in (10, 13) and len(tax_digits) == len(first_visible.replace(" ", "")) else ""
            fields["company_id"].set(current.get("company_id") or (visible[0] if len(visible) >= 2 else ""))
            fields["tax_id"].set(current.get("tax_id") or guessed_tax)
            fields["username"].set(current.get("username") or (visible[1] if len(visible) >= 2 else first_visible if first_visible and not guessed_tax else ""))
            fields["password"].set("")
            order = current.get("field_order") or []
            fields["field_order"].set(",".join(order))
        combo.bind("<<ComboboxSelected>>", load_selected)
        load_selected()

        buttons = ttk.Frame(outer)
        buttons.grid(row=row, column=0, columnspan=2, sticky="ew", pady=(10, 0))
        ttk.Button(buttons, text="Hủy", command=win.destroy).pack(side="left")

        def save():
            try:
                entry_id = id_by_label.get(pick.get(), "")
                new_password = fields["password"].get()
                reused = self.password_reuse_info(entry_id, new_password) if entry_id and new_password else None
                if reused and reused.get("kind") == "history":
                    when = reused.get("changed_at") or "trước đây"
                    if not messagebox.askyesno("KanPass", f"Mật khẩu này đã từng được sử dụng ({when}).\nMột số ngân hàng không cho dùng lại mật khẩu cũ.\n\nVẫn lưu?", parent=win):
                        return
                payload = {key: var.get() for key, var in fields.items()}
                payload.update({
                    "id": entry_id,
                    "window_match": ctx.get("title") or "",
                    "app_exe": ctx.get("exe") or ""
                })
                saved = self.save_item(payload)
                messagebox.showinfo("KanPass", f"Đã lưu: {saved['title']}", parent=win)
                win.destroy()
            except Exception as exc:
                messagebox.showerror("KanPass", str(exc), parent=win)
        ttk.Button(buttons, text="Lưu / cập nhật", command=save).pack(side="right")
        win.focus_force()

    def handle_api(self, method: str, path: str, query: dict, body: dict) -> tuple[int, dict]:
        try:
            if path == "/kanpass/status" and method == "GET":
                return 200, self.status()
            if path == "/kanpass/setup" and method == "POST":
                return 200, self.setup(str((body or {}).get("masterPassword") or ""))
            if path == "/kanpass/list" and method == "GET":
                return 200, {"ok": True, "items": self.list_items((query or {}).get("q", ""))}
            if path == "/kanpass/item" and method == "GET":
                return 200, {"ok": True, "item": self.get_item((query or {}).get("id", ""), reveal=False)}
            if path == "/kanpass/show" and method == "POST":
                entry_id = str((body or {}).get("id") or "")
                self.get_item(entry_id, reveal=False)
                self.root.after(0, lambda eid=entry_id: self.show_secret_window(eid))
                return 200, {"ok": True, "shown": True}
            if path == "/kanpass/password-dialog" and method == "POST":
                entry_id = str((body or {}).get("id") or "")
                self.get_item(entry_id, reveal=False)
                self.root.after(0, lambda eid=entry_id: self.password_dialog(eid))
                return 200, {"ok": True, "shown": True}
            if path == "/kanpass/save" and method == "POST":
                payload = dict(body or {})
                payload["password"] = ""
                return 200, {"ok": True, "item": self.save_item(payload)}
            if path == "/kanpass/delete" and method == "POST":
                return 200, self.delete_item(str((body or {}).get("id") or ""))
            if path == "/kanpass/export" and method == "GET":
                return 200, {"ok": True, "kanpass": self.export_backup()}
            if path == "/kanpass/import" and method == "POST":
                result = self.import_backup(body or {})
                return (200 if result.get("ok") else 409), result
            return 404, {"ok": False, "message": "KanPass endpoint không tồn tại."}
        except KeyError as exc:
            return 404, {"ok": False, "message": str(exc)}
        except Exception as exc:
            return 400, {"ok": False, "message": str(exc)}
