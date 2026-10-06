
from __future__ import annotations
import sys
from pathlib import Path
if len(sys.argv) != 2:
    raise SystemExit("Usage: balatro_meta_core.py <root>")
root = Path(sys.argv[1]).resolve()
print("placeholder")
