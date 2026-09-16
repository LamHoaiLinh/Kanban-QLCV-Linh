#!/usr/bin/env python3
"""Máy chủ tĩnh cục bộ cho KanBan.

Không có API riêng. Toàn bộ Game Hub, gồm StockSim VN Web, chạy trực tiếp
trong trình duyệt giống khi triển khai lên GitHub Pages.
"""
from __future__ import annotations

import argparse
import os
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = Path(__file__).resolve().parent


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8080)
    args = parser.parse_args()
    os.chdir(ROOT)
    server = ThreadingHTTPServer(("127.0.0.1", args.port), SimpleHTTPRequestHandler)
    print(f"KanBan local web: http://localhost:{args.port}")
    print("Game Hub (gồm StockSim VN Web) chạy trực tiếp trong trình duyệt.")
    print("Nhấn Ctrl+C để dừng.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
