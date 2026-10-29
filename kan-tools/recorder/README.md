# KanRecorder (KanBan Tools · Windows)

**Status:** Native Windows screen recorder. Recording requires a local Windows desktop and explicit user action. Web menu only opens the local app; it cannot start recording, read the screen, or access microphone data.

## Use
1. In KanBan, open **CÔNG CỤ → KanRecorder**. Default: `region`, cursor ON, click rings ON, safe shortcut overlay ON, `both` audio, 30 FPS.
2. Install/update **KanTool 2.9.2** using **KanTool-Setup.exe** (CÔNG CỤ → Cài đặt / Cập nhật KanTool). Restart any old running recorder before the update.
3. Press **Ctrl+Alt+F9 anywhere in Windows** to open KanRecorder. Or click **Mở KanRecorder trên Windows** from KanBan. The global shortcut is registered by the existing Windows Capture Agent, not a second background keyboard logger.
4. Press **Ctrl+Alt+F9 again** (or click **Chọn vùng quay**) and drag a rectangle of at least 80×80 pixels.
5. After selecting the rectangle, KanRecorder enters **armed / waiting** mode: no video or audio is captured yet.
6. Press **Ctrl+Alt+F9 a third time** to start recording. Subsequent **Ctrl+Alt+F9** presses pause/resume. **Ctrl+Alt+F10** stops and exports MP4. Do not close the recorder during export.
7. Find MP4 under **%USERPROFILE%\\Videos\\KanRecorder**. Pauses are removed when exporting.

## Audio
- `both`: WASAPI system-loopback plus default microphone, mixed into one AAC track.
- `mic`, `system`, `none`: supported alternatives.
- If the selected Windows device is absent, the app stops before recording and shows an error. Device failures during recording are reported after export.
- Windows audio capture uses `soundcard` and `numpy` installed in a separate `%LOCALAPPDATA%\\KanBanTools\\recorder\\.venv`. This does not change the shared KanTool Python environment.

## Architecture / privacy
- `kan-tools/recorder/kanrecorder.py` is a standalone Tkinter GUI launched on demand by `kanbanrecorder://open`. The already-running Windows Capture Agent registers Ctrl+Alt+F9 and sends a single command over a loopback-only TCP port to this GUI. **No separate persistent recorder process, scheduled task, recorder auto-start, auto-record or remote upload.**
- FFmpeg is the existing `%LOCALAPPDATA%\\KanBanTools\\media\\bin\\ffmpeg.exe`.
- The app polls Windows key state only while the user records, shows **shortcuts and non-text navigation keys**, never stores typed strings or raw key events, and records limited mouse/key **visual events**. It does **not** use a fullscreen recording overlay: FFmpeg's ASS subtitle renderer burns the animated click rings and safe key labels into the final MP4 during export.
- Raw video and WAV segments are held in Windows Temp during capture. On successful normal export they are deleted; on export failure, a fallback creates a video-only MP4 and **retains raw video/WAV** for repair. The **Khôi phục video đã quay bị lỗi** button opens the most recent old session and exports it without deleting the originals. Sensitive failed recordings should be deleted manually after recovery.
- The app uses a custom URL protocol with a strict allow-list for settings. A URL cannot directly start or stop recording.

## Compatibility / manual QA
- Windows 10/11, Python 3.13, multi-monitor / DPI scaling (test at 100%, 125%, 150%). Test screen-region coordinates on monitors left of the primary.
- Confirm click rings and keyboard labels are **burned into the final MP4**. They are not displayed as a desktop overlay while recording, to avoid the former black-screen bug.
- Verify `both` audio with an actively playing system sound and microphone speech, then check pause/resume and audio synchronization.
- Verify the desktop is not covered by a black overlay after selecting a region. Confirm typing a password never creates letters in the output key labels.
- Long recordings, 60 FPS and 4K may be CPU-intensive; start with 30 FPS and a smaller region.
- Windows secure/UAC desktop may not appear in the recording. Some exclusive/fullscreen DRM video cannot be captured.

## Troubleshooting
- Existing installations must update to **KanTool 2.9.2 / KanRecorder 1.2.0** (older 1.1.0 can hang on audio mux). The **Capture Agent v6.2.5** supplies the global Ctrl+Alt+F9 hotkey. If hotkey registration is blocked by another application, use the native selection button and check for hotkey conflicts.
- Missing recorder: update/repair KanTool; optional-install errors appear in `%LOCALAPPDATA%\\KanBanTools\\logs\\install-latest.log`.
- FFmpeg errors: inspect `%TEMP%\\KanRecorder_*\\ffmpeg_*.log`. If the old export timed out, leave the folder in place and use **Khôi phục video đã quay bị lỗi** after updating. FFprobe sets an explicit `-t` duration so audio processing cannot run forever.
- Missing both audio: check microphone privacy permissions and that Windows has a default speaker/microphone; try `mic` or `system` individually.
- Do not install another external recorder binary on top of this module. KanMedia and KanCapture remain independent.
