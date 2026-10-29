"""KanRecorder smoke tests: safe defaults, parameter allow-list and no automatic capture."""
import importlib.util
import json
import pathlib
import unittest

ROOT = pathlib.Path(__file__).resolve().parents[1]
SOURCE = ROOT / "kan-tools" / "recorder" / "kanrecorder.py"
SPEC = importlib.util.spec_from_file_location("kanrecorder_test_target", SOURCE)
recorder = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(recorder)


class KanRecorderSmoke(unittest.TestCase):
    def test_defaults(self):
        self.assertEqual(recorder.options([]), {
            "cursor": True, "clicks": True, "keys": True, "audio": "both", "fps": 30
        })

    def test_url_options(self):
        cfg = recorder.options([
            "kanbanrecorder://open?mode=region&cursor=0&clicks=0&keys=0&audio=mic&fps=15"
        ])
        self.assertEqual(cfg, {
            "cursor": False, "clicks": False, "keys": False, "audio": "mic", "fps": 15
        })

    def test_reject_invalid_options(self):
        cfg = recorder.options([
            "kanbanrecorder://stop?audio=both&fps=60",
            "kanbanrecorder://open?audio=evil&fps=500&cursor=hello&mode=fullscreen"
        ])
        self.assertEqual(cfg["audio"], "both")
        self.assertEqual(cfg["fps"], 30)
        self.assertTrue(cfg["cursor"])

    def test_protocol_is_user_triggered(self):
        source = SOURCE.read_text(encoding="utf-8")
        self.assertIn('command=self.choose_region', source)
        self.assertIn('if self.state != "idle":', source)
        self.assertNotIn("SetWindowsHookExW", source)
        self.assertNotIn("keylogger", source.lower())
        self.assertNotIn("requests.post", source)

    def test_installation_is_isolated(self):
        installer = (ROOT / "kan-tools" / "install.ps1").read_text(encoding="utf-8")
        manifest = json.loads((ROOT / "kan-tools" / "manifest.json").read_text(encoding="utf-8"))
        self.assertIn("Join-Path $recDir '.venv'", installer)
        self.assertIn("kanbanrecorder", installer)
        self.assertNotIn('New-ItemProperty $run -Name "KanRecorder"', installer)
        self.assertEqual(manifest["components"]["recorder"]["version"], "1.0.1")


if __name__ == "__main__":
    unittest.main()
