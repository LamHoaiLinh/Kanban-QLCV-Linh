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
        self.assertEqual(manifest["components"]["recorder"]["version"], "1.2.0")


    def test_selected_region_is_armed_not_recorded(self):
        source = SOURCE.read_text(encoding="utf-8")
        self.assertIn("self.root.after(120, self.arm)", source)
        self.assertIn('self.state = "armed"', source)
        self.assertNotIn("def make_overlay(", source)
        self.assertNotIn("def draw_effects(", source)
        self.assertIn("self.write_effect_subtitles(idx)", source)
        self.assertIn('f"ass={subtitle.name}"', source)

    def test_f9_controls_state_machine(self):
        app = recorder.App.__new__(recorder.App)
        app.choose_region = Mock()
        app.pause_resume = Mock()
        app.state = "idle"
        app.handle_f9()
        app.choose_region.assert_called_once()
        app.pause_resume.assert_not_called()
        for state in ("armed", "recording", "paused"):
            app.state = state
            app.handle_f9()
        self.assertEqual(app.pause_resume.call_count, 3)

    def test_windows_agent_registers_global_recorder_hotkey(self):
        source = (ROOT / "capture-agent" / "capture_agent.py").read_text(encoding="utf-8")
        self.assertIn("HOTKEY_RECORDER_ID", source)
        self.assertIn("RECORDER_PORT=47635", source)
        self.assertIn("RegisterHotKey(None,HOTKEY_RECORDER_ID,mods|0x0002,0x78)", source)
        self.assertIn("recorder_hotkey", source)
        self.assertIn("UnregisterHotKey(None,HOTKEY_RECORDER_ID)", source)

    def test_mux_capped_by_video_duration(self):
        app = recorder.App.__new__(recorder.App)
        with tempfile.TemporaryDirectory() as folder:
            app.session = pathlib.Path(folder)
            app.region = (0, 0, 640, 360)
            app.segment_events = [[]]
            app.audio_warnings = []
            app.probe_duration = Mock(return_value=3.0)
            app.run_ffmpeg = Mock()
            video = app.session / "video_001.mp4"
            video.write_bytes(b"x" * 2048)
            system = app.session / "system_001.wav"
            system.write_bytes(b"x" * 2048)
            mic = app.session / "mic_001.wav"
            mic.write_bytes(b"x" * 2048)
            result = app.session / "mux_001.mp4"
            self.assertFalse(app.mux_segment(1, video, {"system": system, "mic": mic}, result))
            command = app.run_ffmpeg.call_args.args[0]
            self.assertIn("-t", command)
            self.assertEqual(command[command.index("-t") + 1], "3.000")
            self.assertNotIn("-shortest", command)
            self.assertFalse(any("apad" in str(arg) for arg in command))
            self.assertIn("amix=inputs=2:duration=longest", command[command.index("-filter_complex") + 1])

    def test_mux_error_falls_back_to_video_only(self):
        app = recorder.App.__new__(recorder.App)
        with tempfile.TemporaryDirectory() as folder:
            app.session = pathlib.Path(folder)
            app.region = (0, 0, 640, 360)
            app.segment_events = [[]]
            app.audio_warnings = []
            app.probe_duration = Mock(return_value=2.0)
            app.run_ffmpeg = Mock(side_effect=[RuntimeError("audio mux timeout"), None])
            video = app.session / "video_001.mp4"
            video.write_bytes(b"x" * 2048)
            wav = app.session / "mic_001.wav"
            wav.write_bytes(b"x" * 2048)
            result = app.session / "mux_001.mp4"
            self.assertTrue(app.mux_segment(1, video, {"mic": wav}, result))
            self.assertEqual(app.run_ffmpeg.call_count, 2)
            self.assertIn("-an", app.run_ffmpeg.call_args.args[0])
            self.assertTrue(app.audio_warnings)

    def test_recovery_preserves_originals(self):
        app = recorder.App.__new__(recorder.App)
        with tempfile.TemporaryDirectory() as base:
            folder = pathlib.Path(base) / "KanRecorder_test"
            folder.mkdir()
            video = folder / "video_001.mp4"
            video.write_bytes(b"x" * 2048)
            mic = folder / "mic_001.wav"
            mic.write_bytes(b"x" * 2048)
            app.state = "idle"
            app.start_button = Mock()
            app.recover_button = Mock()
            app.status = Mock()
            app.export = Mock()
            with patch.object(recorder.tempfile, "gettempdir", return_value=base), \
                 patch.object(recorder.messagebox, "askyesno", return_value=True), \
                 patch.object(recorder.threading, "Thread") as thread:
                app.recover_last()
            self.assertEqual(app.state, "exporting")
            self.assertTrue(app.recovering_raw)
            self.assertEqual(app.segments[0][0], video)
            self.assertEqual(app.segments[0][1]["mic"], mic)
            thread.return_value.start.assert_called_once()
            self.assertTrue(video.exists())
            self.assertTrue(mic.exists())

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
