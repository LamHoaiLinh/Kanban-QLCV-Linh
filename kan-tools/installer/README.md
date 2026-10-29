# KanTool Setup (Windows 10/11, x64)
A native, single-file Windows GUI installer built in C#/.NET 8 WinForms.

## Download
Official release asset (after GitHub Actions publishes it):
https://github.com/LamHoaiLinh/Kanban-QLCV-Linh/releases/download/kantool-installer-latest/KanTool-Setup.exe

This is an **online bootstrapper**, not an offline bundle of Python/Node/FFmpeg/Kopia. Internet is needed for installation and updates. The EXE is self-contained and does not require .NET to be separately installed.

## How it works
1. Double-click `KanTool-Setup.exe`. There is no cmd.exe window. No Administrator request is necessary (per-user install).
2. The UI checks `kan-tools/manifest.json` on GitHub and compares with `%LOCALAPPDATA%\KanBanTools\installed.json`.
3. Click **Cài đặt / Cập nhật**. It selects `/install` when missing and `/update` when present; **Sửa lỗi / Cài lại** forces `/repair`.
4. Setup downloads the currently published `install.ps1` and manifest over HTTPS, then executes Windows PowerShell with hidden console and captures both output streams.
5. Progress bar advances only after verified phase checkpoints; additional log lines show the current sub-task. Longer downloads can leave a percentage unchanged.
6. The existing KanTool installer sets up Python, Capture/KanPass, media/FFmpeg, Node, PDF signing, backup/Kopia and KanRecorder. On update it checks component versions and required files.
7. Detailed logs are saved in `%LOCALAPPDATA%\KanBanTools\logs\setup-ui.log` (GUI output) and `install-latest.log` (PowerShell transcript).

## Scope and limits
- **KanScan** is an optional separate addon. Due to its current archive contract, a matching `KanScan_v1.4_Chinh_Rieng_Tung_Anh*.zip` must already be available in Downloads/Desktop/Documents. The GUI installer will not fabricate or fetch this ZIP automatically.
- **KanPaint** is web-based and remains accessible from KanBan; it is not bundled as an offline Windows executable.
- This installer is not code-signed. Windows SmartScreen may show a publisher warning. Do not bypass security protections blindly; verify that the file came from the repository's GitHub Releases page.
- No automatic screen/mic recording. KanRecorder only runs after user action.
- The UI installer does not disable Windows Security or add antivirus exclusions.
- Failed core installation is reported as an error. Optional component failures appear as warnings in the log, and can be retried via **Sửa lỗi / Cài lại**.
- No full rollback for a failed Python/Node/FFmpeg replacement: preserve backups for important data and use the repair option.

## Development
- Project: `kan-tools/installer/KanTool.Setup.csproj`
- Source: `kan-tools/installer/Program.cs`
- Workflow: `.github/workflows/build-kantool-setup.yml`
- GitHub Actions publishes a Windows x64 self-contained single EXE and replaces the `kantool-installer-latest` release asset after a successful build.
- Installer self-test: `KanTool-Setup.exe --self-test`.
