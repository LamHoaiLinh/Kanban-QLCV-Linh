from __future__ import annotations

import json
import os
import shutil
import socket
import subprocess
import threading
import time
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path

_WS = None
_WS_OK = None


def _ensure_websocket() -> bool:
    global _WS, _WS_OK
    if _WS_OK is not None:
        return bool(_WS_OK)
    try:
        import websocket as _websocket
        _WS = _websocket
        _WS_OK = True
    except Exception:
        _WS = None
        _WS_OK = False
    return bool(_WS_OK)


def _norm(value: str) -> str:
    text = str(value or "").strip().lower()
    text = unicodedata.normalize("NFD", text)
    return "".join(ch for ch in text if unicodedata.category(ch) != "Mn")


def _host(url: str) -> str:
    try:
        return (urllib.parse.urlsplit(url).hostname or "").lower()
    except Exception:
        return ""


def _origin(url: str) -> str:
    try:
        p = urllib.parse.urlsplit(url)
        if p.scheme not in ("http", "https") or not p.hostname:
            return ""
        port = f":{p.port}" if p.port else ""
        return f"{p.scheme}://{p.hostname}{port}"
    except Exception:
        return ""


def _safe_url(url: str) -> str:
    text = str(url or "").strip()
    if not text:
        return ""
    if "://" not in text:
        text = "https://" + text
    parsed = urllib.parse.urlsplit(text)
    if parsed.scheme not in ("http", "https") or not parsed.hostname:
        raise ValueError("Chỉ mở địa chỉ Web http/https hợp lệ.")
    return text


def _free_port() -> int:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        s.bind(("127.0.0.1", 0))
        return int(s.getsockname()[1])
    finally:
        s.close()


def _find_browser():
    candidates = []
    pf = os.environ.get("PROGRAMFILES", r"C:\Program Files")
    pfx = os.environ.get("PROGRAMFILES(X86)", r"C:\Program Files (x86)")
    local = os.environ.get("LOCALAPPDATA", "")
    for name in ("chrome.exe", "msedge.exe", "brave.exe", "vivaldi.exe"):
        found = shutil.which(name)
        if found:
            candidates.append((found, name))
    candidates += [
        (os.path.join(pf, "Google", "Chrome", "Application", "chrome.exe"), "chrome.exe"),
        (os.path.join(pfx, "Google", "Chrome", "Application", "chrome.exe"), "chrome.exe"),
        (os.path.join(local, "Google", "Chrome", "Application", "chrome.exe"), "chrome.exe"),
        (os.path.join(pf, "Microsoft", "Edge", "Application", "msedge.exe"), "msedge.exe"),
        (os.path.join(pfx, "Microsoft", "Edge", "Application", "msedge.exe"), "msedge.exe"),
        (os.path.join(pf, "BraveSoftware", "Brave-Browser", "Application", "brave.exe"), "brave.exe"),
        (os.path.join(pfx, "BraveSoftware", "Brave-Browser", "Application", "brave.exe"), "brave.exe"),
        (os.path.join(local, "Vivaldi", "Application", "vivaldi.exe"), "vivaldi.exe"),
    ]
    seen = set()
    for path, exe in candidates:
        norm = os.path.normcase(os.path.abspath(path))
        if norm in seen:
            continue
        seen.add(norm)
        if os.path.isfile(path):
            label = {
                "chrome.exe": "Google Chrome",
                "msedge.exe": "Microsoft Edge",
                "brave.exe": "Brave",
                "vivaldi.exe": "Vivaldi",
            }.get(exe, exe)
            return path, label
    return None, ""


INJECT_SCRIPT = r"""
(() => {
  if (window.__kanpassBridgeInstalled) return;
  window.__kanpassBridgeInstalled = true;

  const norm = s => String(s || '').trim().replace(/\s+/g, ' ').slice(0, 220);
  const visible = el => {
    try {
      const r = el.getBoundingClientRect();
      const st = getComputedStyle(el);
      return !el.disabled && st.display !== 'none' && st.visibility !== 'hidden' && r.width > 0 && r.height > 0;
    } catch { return false; }
  };
  const labelFor = el => {
    try {
      if (el.labels && el.labels.length) return norm([...el.labels].map(x => x.innerText || x.textContent).join(' '));
      const aria = el.getAttribute('aria-label');
      if (aria) return norm(aria);
      const labelled = el.getAttribute('aria-labelledby');
      if (labelled) {
        const parts = labelled.split(/\s+/).map(id => document.getElementById(id)).filter(Boolean);
        if (parts.length) return norm(parts.map(x => x.innerText || x.textContent).join(' '));
      }
      const parent = el.closest('label');
      if (parent) return norm(parent.innerText || parent.textContent);
      return norm(el.placeholder || el.name || el.id || '');
    } catch { return ''; }
  };
  const field = el => ({
    type: norm((el.type || 'text').toLowerCase()),
    name: norm(el.name),
    id: norm(el.id),
    autocomplete: norm(el.autocomplete),
    placeholder: norm(el.placeholder),
    label: labelFor(el),
    value: String(el.value || '').slice(0, 1000)
  });
  const snapshot = root => {
    try {
      const scope = root && root.querySelectorAll ? root : document;
      const inputs = [...scope.querySelectorAll('input')]
        .filter(visible)
        .filter(el => !['hidden','button','submit','reset','checkbox','radio','file'].includes((el.type || '').toLowerCase()))
        .map(field)
        .filter(x => x.value);
      const password = inputs.find(x => x.type === 'password' && x.value);
      if (!password) return null;
      return {
        href: location.href,
        origin: location.origin,
        host: location.hostname,
        title: document.title,
        at: Date.now(),
        fields: inputs
      };
    } catch { return null; }
  };
  const send = root => {
    try {
      const snap = snapshot(root);
      if (!snap || typeof window.__kanpass_submit !== 'function') return;
      window.__kanpass_submit(JSON.stringify(snap));
    } catch {}
  };
  document.addEventListener('submit', e => send(e.target), true);
  document.addEventListener('click', e => {
    try {
      const el = e.target && e.target.closest ? e.target.closest('button,input[type="submit"],[role="button"]') : null;
      if (!el) return;
      const text = norm(el.innerText || el.value || el.getAttribute('aria-label')).toLowerCase();
      const looksLogin = /login|log in|sign in|dang nhap|đăng nhập|tiep tuc|tiếp tục|continue|submit|xac nhan|xác nhận/.test(text);
      if (!looksLogin) return;
      const form = el.closest('form');
      setTimeout(() => send(form || document), 0);
    } catch {}
  }, true);
})();
"""


class _TabWatcher(threading.Thread):
    def __init__(self, bridge, target: dict):
        super().__init__(daemon=True, name=f"KanPassCDP-{str(target.get('id',''))[:8]}")
        self.bridge = bridge
        self.target = target
        self.target_id = str(target.get("id") or "")
        self.ws_url = str(target.get("webSocketDebuggerUrl") or "")
        self.ws = None
        self.alive = True
        self.seq = 0
        self.pending = None
        self._last_submit_key = ""

    def stop(self):
        self.alive = False
        try:
            if self.ws:
                self.ws.close()
        except Exception:
            pass

    def _send(self, method: str, params=None):
        self.seq += 1
        req_id = self.seq
        self.ws.send(json.dumps({"id": req_id, "method": method, "params": params or {}}, separators=(",", ":")))
        return req_id

    def _call(self, method: str, params=None, timeout=2.0):
        req_id = self._send(method, params)
        deadline = time.time() + timeout
        while self.alive and time.time() < deadline:
            try:
                raw = self.ws.recv()
            except Exception as exc:
                if exc.__class__.__name__.lower().find("timeout") >= 0:
                    continue
                raise
            if not raw:
                continue
            msg = json.loads(raw)
            if msg.get("id") == req_id:
                if "error" in msg:
                    raise RuntimeError(str(msg.get("error")))
                return msg.get("result") or {}
            self._handle_event(msg)
        raise TimeoutError(f"CDP timeout: {method}")

    def _handle_event(self, msg: dict):
        if msg.get("method") != "Runtime.bindingCalled":
            return
        params = msg.get("params") or {}
        if params.get("name") != "__kanpass_submit":
            return
        payload = params.get("payload") or ""
        try:
            data = json.loads(payload)
        except Exception:
            return
        candidate = self.bridge.parse_dom_candidate(data)
        if not candidate or not candidate.get("password"):
            return
        submit_key = "|".join([
            candidate.get("host") or "",
            candidate.get("company_id") or candidate.get("tax_id") or "",
            candidate.get("username") or "",
            candidate.get("password") or "",
        ])
        if submit_key == self._last_submit_key and self.pending:
            return
        self._last_submit_key = submit_key
        self.pending = {
            "candidate": candidate,
            "submitted_at": time.time(),
            "href": candidate.get("url") or "",
        }

    def _install(self):
        self._call("Runtime.enable")
        self._call("Page.enable")
        self._call("Runtime.addBinding", {"name": "__kanpass_submit"})
        self._call("Page.addScriptToEvaluateOnNewDocument", {"source": INJECT_SCRIPT})
        self._call("Runtime.evaluate", {"expression": INJECT_SCRIPT, "returnByValue": False})

    def _probe_page(self):
        expression = """(() => ({href:location.href,hasPassword:!![...document.querySelectorAll('input[type="password"]')].find(x=>!x.disabled && getComputedStyle(x).display!=='none' && getComputedStyle(x).visibility!=='hidden'),ready:document.readyState}))()"""
        result = self._call("Runtime.evaluate", {"expression": expression, "returnByValue": True}, timeout=1.5)
        return (((result or {}).get("result") or {}).get("value") or {})

    def _check_pending(self):
        if not self.pending:
            return
        age = time.time() - self.pending["submitted_at"]
        if age < 1.1:
            return
        if age > 9:
            self.pending["candidate"]["password"] = ""
            self.pending = None
            return
        try:
            probe = self._probe_page()
        except Exception:
            # Điều hướng có thể làm socket ngắt. Bridge sẽ kiểm tra target mới;
            # không ghi secret xuống disk và không tự lưu khi chưa đủ bằng chứng.
            return
        old_href = self.pending.get("href") or ""
        new_href = str(probe.get("href") or "")
        has_password = bool(probe.get("hasPassword"))
        success = bool(new_href and old_href and new_href != old_href) or not has_password
        if not success:
            return
        candidate = dict(self.pending["candidate"])
        self.pending["candidate"]["password"] = ""
        self.pending = None
        self.bridge.deliver_candidate(candidate)

    def run(self):
        if not self.ws_url or not _ensure_websocket():
            return
        try:
            self.ws = _WS.create_connection(self.ws_url, timeout=0.35, suppress_origin=True)
            self.ws.settimeout(0.35)
            self._install()
            while self.alive and not self.bridge.stop_event.is_set():
                try:
                    raw = self.ws.recv()
                    if raw:
                        self._handle_event(json.loads(raw))
                except Exception as exc:
                    if exc.__class__.__name__.lower().find("timeout") < 0:
                        break
                try:
                    self._check_pending()
                except Exception:
                    pass
        finally:
            try:
                if self.pending:
                    self.pending["candidate"]["password"] = ""
            except Exception:
                pass
            self.pending = None
            try:
                if self.ws:
                    self.ws.close()
            except Exception:
                pass
            self.bridge.watcher_finished(self.target_id)


class KanPassWebBridge:
    """Dedicated Chromium/CDP bridge. Never writes password/request bodies to disk."""

    def __init__(self, root, kanpass, base_dir: Path):
        self.root = root
        self.kanpass = kanpass
        self.base_dir = Path(base_dir)
        self.profile_dir = self.base_dir / "KanPassBrowserProfile"
        self.profile_dir.mkdir(parents=True, exist_ok=True)
        self.browser_path, self.browser_name = _find_browser()
        self.port = 0
        self.proc = None
        self.watchers = {}
        self.lock = threading.RLock()
        self.stop_event = threading.Event()
        self.monitor_thread = threading.Thread(target=self._monitor, daemon=True, name="KanPassWebBridge")
        self.monitor_thread.start()

    def status(self):
        running = bool(self.port and self._devtools_ready())
        return {
            "ok": True,
            "available": bool(_ensure_websocket() and self.browser_path),
            "websocket": bool(_ensure_websocket()),
            "browserFound": bool(self.browser_path),
            "browser": self.browser_name or "",
            "running": running,
            "managedProfile": True,
            "profileName": "KanPass Browser",
            "security": "DOM/CDP only; request bodies/passwords are not logged to disk",
        }

    def _json_get(self, path: str, timeout=1.2):
        if not self.port:
            raise RuntimeError("KanPass Browser chưa chạy.")
        req = urllib.request.Request(f"http://127.0.0.1:{self.port}{path}", headers={"Cache-Control": "no-store"})
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return json.loads(resp.read().decode("utf-8"))

    def _devtools_ready(self):
        try:
            data = self._json_get("/json/version", timeout=0.35)
            return bool(data.get("webSocketDebuggerUrl"))
        except Exception:
            return False

    def _wait_ready(self, seconds=8):
        deadline = time.time() + seconds
        while time.time() < deadline:
            if self._devtools_ready():
                return True
            time.sleep(0.12)
        return False

    def _launch(self, first_url: str):
        if not self.browser_path:
            self.browser_path, self.browser_name = _find_browser()
        if not self.browser_path:
            raise RuntimeError("Không tìm thấy Chrome, Edge, Brave hoặc Vivaldi trên máy.")
        if not _ensure_websocket():
            raise RuntimeError("Thiếu websocket-client. Hãy Cập nhật / sửa KanBan Tools.")
        self.port = _free_port()
        args = [
            self.browser_path,
            f"--remote-debugging-port={self.port}",
            "--remote-debugging-address=127.0.0.1",
            f"--user-data-dir={str(self.profile_dir)}",
            "--no-first-run",
            "--no-default-browser-check",
            "--disable-background-mode",
            first_url,
        ]
        flags = 0
        if os.name == "nt":
            flags = 0x08000000  # CREATE_NO_WINDOW for launcher process; browser GUI still appears.
        self.proc = subprocess.Popen(args, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, creationflags=flags)
        if not self._wait_ready():
            raise RuntimeError("Đã mở trình duyệt nhưng không kết nối được CDP cục bộ.")

    def _create_target(self, url: str):
        version = self._json_get("/json/version")
        ws_url = str(version.get("webSocketDebuggerUrl") or "")
        if not ws_url:
            raise RuntimeError("Không lấy được Browser CDP endpoint.")
        ws = _WS.create_connection(ws_url, timeout=2.0, suppress_origin=True)
        try:
            ws.send(json.dumps({"id": 1, "method": "Target.createTarget", "params": {"url": url}}))
            deadline = time.time() + 2
            while time.time() < deadline:
                raw = ws.recv()
                if not raw:
                    continue
                msg = json.loads(raw)
                if msg.get("id") == 1:
                    if msg.get("error"):
                        raise RuntimeError(str(msg["error"]))
                    return
        finally:
            try:
                ws.close()
            except Exception:
                pass

    def open_url(self, url: str):
        url = _safe_url(url)
        if not url:
            raise ValueError("Hãy nhập địa chỉ Web.")
        if not self._devtools_ready():
            self._launch(url)
        else:
            self._create_target(url)
        return {"ok": True, "opened": True, "url": url, "browser": self.browser_name, "running": True}

    def stop_browser(self):
        self.stop_event.set()
        with self.lock:
            watchers = list(self.watchers.values())
        for watcher in watchers:
            watcher.stop()
        try:
            if self.proc and self.proc.poll() is None:
                self.proc.terminate()
        except Exception:
            pass
        return {"ok": True}

    def _monitor(self):
        while not self.stop_event.is_set():
            if self.port and self._devtools_ready():
                try:
                    targets = self._json_get("/json/list", timeout=0.8)
                    active_ids = set()
                    for target in targets if isinstance(targets, list) else []:
                        if target.get("type") != "page":
                            continue
                        url = str(target.get("url") or "")
                        if not url.startswith(("http://", "https://")):
                            continue
                        tid = str(target.get("id") or "")
                        ws_url = str(target.get("webSocketDebuggerUrl") or "")
                        if not tid or not ws_url:
                            continue
                        active_ids.add(tid)
                        with self.lock:
                            watcher = self.watchers.get(tid)
                            if watcher is None or not watcher.is_alive():
                                watcher = _TabWatcher(self, target)
                                self.watchers[tid] = watcher
                                watcher.start()
                    with self.lock:
                        stale = [tid for tid, w in self.watchers.items() if tid not in active_ids and not w.is_alive()]
                        for tid in stale:
                            self.watchers.pop(tid, None)
                except Exception:
                    pass
            time.sleep(0.75)

    def watcher_finished(self, target_id: str):
        with self.lock:
            current = self.watchers.get(target_id)
            if current and current is threading.current_thread():
                self.watchers.pop(target_id, None)

    def _classify_field(self, field: dict):
        blob = " ".join(str(field.get(k) or "") for k in ("name", "id", "autocomplete", "placeholder", "label"))
        n = _norm(blob)
        typ = _norm(field.get("type"))
        if typ == "password" or "password" in n or "mat khau" in n:
            return "password"
        if any(x in n for x in ("ma so thue", "mst", "tax id", "tax code", "taxid")):
            return "tax_id"
        if any(x in n for x in (
            "company id", "corporate id", "corp id", "organization id", "organisation id",
            "tenant id", "ma cong ty", "ma doanh nghiep", "ma don vi", "enterprise id",
        )):
            return "company_id"
        if (
            typ == "email"
            or any(x in n for x in ("username", "user name", "ten dang nhap", "login id", "user id", "email", "account"))
            or "username" in _norm(field.get("autocomplete"))
        ):
            return "username"
        return ""

    def _service_for(self, host: str, title: str):
        h = _norm(host)
        t = _norm(title)
        if "mbbank" in h or "mbbank" in t or "mb bank" in t:
            return "MB Bank"
        if any(x in h for x in ("thuedientu", "gdt.gov.vn")) or any(x in t for x in ("thue dien tu", "etax")):
            return "Thuế điện tử"
        if "baohiemxahoi" in h or "vss" in h or "bao hiem xa hoi" in t:
            return "BHXH"
        if "misa" in h or "misa" in t:
            return "MISA"
        first = str(title or "").split(" - ", 1)[0].strip()
        return first[:80] if first else host

    def parse_dom_candidate(self, data: dict):
        if not isinstance(data, dict):
            return None
        url = str(data.get("href") or "")
        host = _host(url)
        if not host:
            return None
        fields = data.get("fields") if isinstance(data.get("fields"), list) else []
        password = ""
        username = ""
        company_id = ""
        tax_id = ""
        text_values = []
        for f in fields[:24]:
            if not isinstance(f, dict):
                continue
            value = str(f.get("value") or "")[:1000]
            if not value:
                continue
            kind = self._classify_field(f)
            if kind == "password" and not password:
                password = value
            elif kind == "username" and not username:
                username = value
            elif kind == "company_id" and not company_id:
                company_id = value
            elif kind == "tax_id" and not tax_id:
                tax_id = value
            elif str(f.get("type") or "").lower() not in ("password", "hidden"):
                text_values.append(value)
        service = self._service_for(host, str(data.get("title") or ""))

        # Fallback cho các form 3 ô kiểu ngân hàng doanh nghiệp: Company ID, User, Password.
        unused = [v for v in text_values if v not in {username, company_id, tax_id}]
        first = unused[0] if unused else ""
        second = unused[1] if len(unused) > 1 else ""
        first_digits = "".join(ch for ch in first if ch.isdigit())
        tax_service = "thuế" in service.lower()
        if first and len(first_digits) in (10, 13) and first_digits == first.replace(" ", ""):
            if tax_service and not tax_id:
                tax_id = first
            elif not company_id:
                company_id = first
            if second and not username:
                username = second
        elif first and not username:
            username = first

        if not password:
            return None
        identifier = company_id or tax_id
        company = ""
        try:
            company = self.kanpass._company_from_identifier(identifier) if identifier else ""
        except Exception:
            company = ""

        item = {
            "service": service,
            "company": company,
            "company_id": company_id,
            "tax_id": tax_id,
            "username": username,
            "password": password,
            "url": _origin(url),
            "host": host,
            "page_title": str(data.get("title") or "")[:180],
            "window_match": service,
            "app_exe": "",
        }
        item["field_order"] = [
            key for key in ("company_id", "tax_id", "username", "password")
            if key == "password" or item.get(key)
        ]
        suffix = company or company_id or tax_id or username
        item["title"] = f"{service} - {suffix}" if suffix else service
        return item

    def deliver_candidate(self, candidate: dict):
        if not candidate or not candidate.get("password"):
            return
        def show():
            try:
                self.kanpass.web_login_candidate(candidate)
            finally:
                candidate["password"] = ""
        try:
            self.root.after(0, show)
        except Exception:
            candidate["password"] = ""
