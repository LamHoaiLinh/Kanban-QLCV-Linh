#!/usr/bin/env python3
"""Local static server for KanBan plus a localhost-only launcher for StockSim VN.

All KanBan web files are still served like ``python -m http.server``. The only
extra endpoint is POST /api/launch-stocksim, used by Game Hub on Windows.
"""
from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
import subprocess
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = Path(__file__).resolve().parent
STOCKSIM_DIR = ROOT / "stock-sim-vn"
LAUNCHER = STOCKSIM_DIR / "LAUNCH_FROM_KANBAN.bat"


def json_bytes(payload: dict) -> bytes:
    return json.dumps(payload, ensure_ascii=False).encode("utf-8")


class KanBanHandler(SimpleHTTPRequestHandler):
    def _send_json(self, status: int, payload: dict) -> None:
        body = json_bytes(payload)
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self) -> None:  # noqa: N802 - API inherited from BaseHTTPRequestHandler
        path = self.path.split("?", 1)[0]
        if path != "/api/launch-stocksim":
            self._send_json(404, {"ok": False, "message": "Endpoint không tồn tại."})
            return
        if os.name != "nt":
            self._send_json(
                501,
                {
                    "ok": False,
                    "message": "StockSim VN trong KanBan được cấu hình để khởi chạy trên Windows.",
                },
            )
            return
        if not LAUNCHER.exists():
            self._send_json(500, {"ok": False, "message": "Thiếu stock-sim-vn/LAUNCH_FROM_KANBAN.bat."})
            return
        try:
            creationflags = getattr(subprocess, "CREATE_NEW_CONSOLE", 0)
            subprocess.Popen(
                ["cmd.exe", "/c", str(LAUNCHER)],
                cwd=str(STOCKSIM_DIR),
                creationflags=creationflags,
                close_fds=False,
            )
        except Exception as exc:  # surface a concise local error to Game Hub
            self._send_json(500, {"ok": False, "message": f"Không thể mở StockSim VN: {exc}"})
            return
        self._send_json(
            200,
            {
                "ok": True,
                "status": "launch_started",
                "message": "Đang mở StockSim VN. Lần đầu có thể cần cài thư viện trước khi game xuất hiện.",
            },
        )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8080)
    args = parser.parse_args()
    os.chdir(ROOT)
    server = ThreadingHTTPServer(("127.0.0.1", args.port), KanBanHandler)
    print(f"KanBan local server: http://localhost:{args.port}")
    print("Nhấn Ctrl+C để dừng.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
