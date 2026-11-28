"""Regression tests for Windows status file contention; no media or network required."""
import ast
import json
import os
import tempfile
import time
import unittest
import uuid
from pathlib import Path
from unittest.mock import patch

ROOT = Path(__file__).resolve().parents[1]

def functions(file, names):
    source = ast.parse((ROOT / file).read_text(encoding="utf-8-sig"))
    selected = [node for node in source.body if isinstance(node, ast.FunctionDef) and node.name in names]
    env = dict(Path=Path, os=os, json=json, uuid=uuid, time=time)
    exec(compile(ast.Module(body=selected, type_ignores=[]), file, "exec"), env)
    return env

def sharing_error():
    e = PermissionError("simulated Windows sharing lock")
    e.winerror = 5
    return e

class StatusWriteTests(unittest.TestCase):
    def test_retry_and_cleanup(self):
        for file in ("kanmedia-worker.py", "kanmedia-server.py"):
            with self.subTest(file=file), tempfile.TemporaryDirectory() as d:
                env = functions(file, {"is_file_lock", "atomic_write_json"})
                dst = Path(d) / "job.status.json"
                dst.write_text('{"percent":1}')
                original = Path.replace
                seen = []
                def flaky(self, target):
                    seen.append(self.name)
                    if len(seen) < 3:
                        raise sharing_error()
                    return original(self, target)
                with patch.object(Path, "replace", flaky), patch.object(time, "sleep"):
                    env["atomic_write_json"](dst, {"percent": 100})
                    env["atomic_write_json"](dst, {"percent": 90})
                self.assertEqual(json.loads(dst.read_text()), {"percent": 90})
                self.assertEqual(len(seen), 4)
                self.assertNotEqual(seen[0], seen[-1])
                self.assertEqual(list(Path(d).iterdir()), [dst])

    def test_persistent_lock_keeps_previous_status(self):
        for file in ("kanmedia-worker.py", "kanmedia-server.py"):
            with self.subTest(file=file), tempfile.TemporaryDirectory() as d:
                env = functions(file, {"is_file_lock", "atomic_write_json"})
                dst = Path(d) / "job.status.json"
                dst.write_text('{"percent":1}')
                with patch.object(Path, "replace", side_effect=sharing_error()), patch.object(time, "sleep"):
                    with self.assertRaises(PermissionError):
                        env["atomic_write_json"](dst, {"percent": 100}, attempts=3)
                self.assertEqual(json.loads(dst.read_text()), {"percent": 1})
                self.assertEqual(list(Path(d).iterdir()), [dst])

    def test_worker_only_drops_transient_progress(self):
        env = functions("kanmedia-worker.py", {"status", "is_file_lock"})
        env.update(STATUS=Path("unused"), save_json=lambda *a: (_ for _ in ()).throw(sharing_error()), log=lambda *a: None)
        env["status"]("running", 10, "working")
        with self.assertRaises(PermissionError):
            env["status"]("done", 100, "done")

if __name__ == "__main__":
    unittest.main()
