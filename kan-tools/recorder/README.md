# KanRecorder (KanBan Tools · Windows)

**Status:** Native Windows screen recorder. Recording requires a local Windows desktop and explicit user action. Web menu only opens the local app; it cannot start recording, read the screen, or access microphone data.

## Use
1. In KanBan, open **CÔNG CỤ → KanRecorder**. Default: `region`, cursor ON, click rings ON, safe shortcut overlay ON, `both` audio, 30 FPS.
2. If first use, right-click **CÔNG CỤ → Cập nhật / sửa KanBan Tools** and run the downloaded installer.
3. Click **Mở KanRecorder trên Windows**. Permit the external app link if the browser asks.
4. In the native window, click **Chọn vùng quay (chưa bắt đầu)**, then drag a rectangle of at least 80×80 pixels.
5. After selecting the rectangle, KanRecorder enters **armed / waiting** mode: no video or audio is captured yet.
6. Press **Ctrl+Alt+F9** to start recording. Press **Ctrl+Alt+F9** again to pause; repeat to resume. **Ctrl+Alt+F10 is the only export hotkey**, and exporting occurs only once it is pressed while recording or paused.
7. Find MP4 under **%USERPROFILE%\\Videos\\KanRecorder**. Pauses are removed when exporting.

## Audio
- `both`: WASAPI system-loopback plus default microphone, mixed into one AAC track.
- `mic`, `system`, `none`: supported alternatives.
- If the selected Windows device is absent, the app stops before recording and shows an error. Device failures during recording are reported after export.
- Windows audio capture uses `soundcard` and `numpy` installed in a separate `%LOCALAPPDATA%\\KanBanTools\\recorder\\.venv`. This does not change the shared KanTool Python environment.

## Architecture / privacy
- `kan-tools/recorder/kanrecorder.py` is a standalone Tkinter GUI launched on demand by `kanbanrecorder://open`. **No persistent recorder server, scheduled task, login startup registration, auto-record or remote upload.**
- FFmpeg is the existing `%LOCALAPPDATA%\\KanBanTools\\media\\bin\\ffmpeg.exe`.
- The app polls Windows key state only while the user records, shows **shortcuts and non-text navigation keys**, never stores typed strings or raw key events, and records limited mouse/key **visual events**. It does **not** use a fullscreen recording overlay: FFmpeg's ASS subtitle renderer burns the animated click rings and safe key labels into the final MP4 during export.
- Raw video and WAV segments are temporarily held in the Windows temp directory during capture. Successful export removes them. An export failure keeps temporary segments for recovery and displays their path. Review or delete failed temporary files manually if sensitive.
- The app uses a custom URL protocol with a strict allow-list for settings. A URL cannot directly start or stop recording.

## Compatibility / manual QA
- Windows 10/11, Python 3.13, multi-monitor / DPI scaling (test at 100%, 125%, 150%). Test screen-region coordinates on monitors left of the primary.
- Confirm click rings and keyboard labels are **burned into the final MP4**. They are not displayed as a desktop overlay while recording, to avoid the former black-screen bug.
- Verify `both` audio with an actively playing system sound and microphone speech, then check pause/resume and audio synchronization.
- Verify the desktop is not covered by a black overlay after selecting a region. Confirm typing a password never creates letters in the output key labels.
- Long recordings, 60 FPS and 4K may be CPU-intensive; start with 30 FPS and a smaller region.
- Windows secure/UAC desktop may not appear in the recording. Some exclusive/fullscreen DRM video cannot be captured.

## Troubleshooting
- Existing installations must update to **KanTool 2.9.1 / KanRecorder 1.1.0** (older 1.0.1 can cause black-screen overlay).
- Missing recorder: update/repair KanTool; optional-install errors appear in `%LOCALAPPDATA%\\KanBanTools\\logs\\install-latest.log`.
- FFmpeg errors: inspect `%TEMP%\\KanRecorder_*\\ffmpeg_*.log`.
- Missing both audio: check microphone privacy permissions and that Windows has a default speaker/microphone; try `mic` or `system` individually.
- Do not install another external recorder binary on top of this module. KanMedia and KanCapture remain independent.
