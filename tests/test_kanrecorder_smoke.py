"""KanRecorder smoke tests: safe defaults, parameter allow-list and no automatic capture."""
import importlib.util
import json
import pathlib
import tempfile
import queue
import unittest
from unittest.mock import Mock, patch

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
        self.assertEqual(manifest["components"]["recorder"]["version"], "1.1.0")


    def test_selected_region_is_armed_not_recorded(self):
        source = SOURCE.read_text(encoding="utf-8")
        self.assertIn("self.root.after(120, self.arm)", source)
        self.assertIn('self.state = "armed"', source)
        self.assertNotIn("def make_overlay(", source)
        self.assertNotIn("def draw_effects(", source)
        self.assertIn("self.write_effect_subtitles(idx)", source)
        self.assertIn('f"ass={subtitle.name}"', source)

    def test_f9_edge_detection_in_armed_state(self):
        app = recorder.App.__new__(recorder.App)
        app.state = "armed"
        app.jobs = queue.Queue()
        app.root = Mock()
        app.last_hotkeys = set()
        app.pause_resume = Mock()
        app.stop = Mock()
        keys = {recorder.VK_CONTROL, recorder.VK_MENU, recorder.VK_F9}
        with patch.object(recorder, "pressed", side_effect=lambda vk: vk in keys):
            app.poll()
            app.poll()
            app.pause_resume.assert_called_once()
            keys.clear()
            app.poll()
            keys.update({recorder.VK_CONTROL, recorder.VK_MENU, recorder.VK_F9})
            app.poll()
            self.assertEqual(app.pause_resume.call_count, 2)
        app.stop.assert_not_called()

    def test_f10_is_only_export_hotkey(self):
        app = recorder.App.__new__(recorder.App)
        app.state = "paused"
        app.jobs = queue.Queue()
        app.root = Mock()
        app.last_hotkeys = set()
        app.pause_resume = Mock()
        app.stop = Mock()
        active = {recorder.VK_CONTROL, recorder.VK_MENU, recorder.VK_F10}
        with patch.object(recorder, "pressed", side_effect=lambda vk: vk in active):
            app.poll()
            app.poll()
        app.stop.assert_called_once()
        app.pause_resume.assert_not_called()

    def test_ass_export_has_real_newlines_and_visuals(self):
        app = recorder.App.__new__(recorder.App)
        with tempfile.TemporaryDirectory() as folder:
            app.session = pathlib.Path(folder)
            app.region = (100, 200, 800, 600)
            app.segment_events = [[
                {"kind": "click", "t": 0.25, "x": 160, "y": 120, "button": "left"},
                {"kind": "key", "t": 0.80, "label": "Ctrl + S"},
            ]]
            path = app.write_effect_subtitles(1)
            self.assertTrue(path.exists())
            data = path.read_text(encoding="utf-8-sig")
            self.assertIn("[Script Info]\nScriptType: v4.00+", data)
            self.assertIn("Dialogue: 0,0:00:00.25", data)
            self.assertIn("Dialogue: 1,0:00:00.80", data)
            self.assertIn(r"\an7\pos(160,120)\p1", data)
            self.assertIn("Ctrl + S", data)

    def test_no_keyboard_text_capture(self):
        source = SOURCE.read_text(encoding="utf-8")
        self.assertIn("shortcut = (ctrl or alt or win)", source)
        self.assertNotIn("SetWindowsHookEx", source)
        self.assertNotIn("GetKeyboardState", source)


if __name__ == "__main__":
    unittest.main()
