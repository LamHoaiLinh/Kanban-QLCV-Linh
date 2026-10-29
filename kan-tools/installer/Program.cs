using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.Win32;

namespace KanTool.Setup;

internal static class Program
{
    [STAThread]
    private static void Main(string[] args)
    {
        if (args.Contains("--self-test", StringComparer.OrdinalIgnoreCase))
        {
            Environment.ExitCode = InstallerManifest.IsValidVersion("2.8.9") &&
                                   !InstallerManifest.IsValidVersion("../../bad") ? 0 : 2;
            return;
        }

        ApplicationConfiguration.Initialize();
        Application.Run(new InstallerForm());
    }
}

internal sealed class InstallerManifest
{
    public string LatestVersion { get; }
    public string? InstalledVersion { get; }

    private InstallerManifest(string latest, string? installed)
    {
        LatestVersion = latest;
        InstalledVersion = installed;
    }

    internal static bool IsValidVersion(string? version) =>
        version != null && System.Text.RegularExpressions.Regex.IsMatch(
            version, @"^\d{1,4}\.\d{1,4}(\.\d{1,4}){0,2}$");

    internal static string? VersionFromJson(string json)
    {
        using JsonDocument doc = JsonDocument.Parse(json);
        if (!doc.RootElement.TryGetProperty("kanToolVersion", out JsonElement v))
            return null;
        string? version = v.GetString();
        return IsValidVersion(version) ? version : null;
    }

    public static InstallerManifest Create(string manifestJson, string? installedJson)
    {
        string latest = VersionFromJson(manifestJson) ??
                        throw new InvalidDataException("Manifest GitHub thiếu phiên bản hợp lệ.");
        using var doc = JsonDocument.Parse(manifestJson);
        if (!doc.RootElement.TryGetProperty("components", out var components) ||
            components.ValueKind != JsonValueKind.Object ||
            !components.TryGetProperty("runtime", out _) ||
            !components.TryGetProperty("capture", out _) ||
            !components.TryGetProperty("backup", out _))
            throw new InvalidDataException("Manifest thiếu thành phần KanTool bắt buộc.");

        string? installed = null;
        if (!string.IsNullOrWhiteSpace(installedJson))
        {
            try { installed = VersionFromJson(installedJson); } catch (JsonException) { }
        }
        return new InstallerManifest(latest, installed);
    }
}

internal sealed class InstallerForm : Form
{
    private static readonly Uri ManifestUri = new(
        "https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/kan-tools/manifest.json");
    private static readonly Uri ScriptUri = new(
        "https://raw.githubusercontent.com/LamHoaiLinh/Kanban-QLCV-Linh/main/kan-tools/install.ps1");

    private static readonly Color Background = Color.FromArgb(17, 26, 42);
    private static readonly Color Card = Color.FromArgb(29, 42, 62);
    private static readonly Color Accent = Color.FromArgb(40, 197, 160);
    private static readonly Color TextMain = Color.FromArgb(238, 246, 249);
    private static readonly Color Muted = Color.FromArgb(168, 184, 201);

    private readonly string root = Path.Combine(
        Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "KanBanTools");
    private readonly HttpClient http = new(new HttpClientHandler { AutomaticDecompression = DecompressionMethods.All })
    {
        Timeout = TimeSpan.FromSeconds(80)
    };

    private readonly Label status = new();
    private readonly Label versions = new();
    private readonly Label detail = new();
    private readonly Label percent = new();
    private readonly ProgressBar progress = new();
    private readonly TextBox log = new();
    private readonly Button primary = new();
    private readonly Button repair = new();
    private readonly Button logs = new();
    private readonly Button close = new();
    private readonly Label optionalNotice = new();

    private string? manifestJson;
    private InstallerManifest? manifest;
    private bool installing;
    private string currentMode = "/install";
    private int currentPercent;
    private int logLines;
    private const int LogLineLimit = 400;

    public InstallerForm()
    {
        Text = "KanBan Tools · Cài đặt & Cập nhật";
        StartPosition = FormStartPosition.CenterScreen;
        MinimumSize = new Size(720, 600);
        Size = new Size(800, 635);
        BackColor = Background;
        ForeColor = TextMain;
        Font = new Font("Segoe UI", 10F);
        MaximizeBox = false;
        AutoScaleMode = AutoScaleMode.Dpi;
        FormClosing += OnFormClosing;
        BuildInterface();
        Shown += async (_, _) => await CheckVersionAsync();
    }

    private static Label Label(string text, float size, bool bold = false, Color? color = null)
    {
        return new Label
        {
            Text = text,
            ForeColor = color ?? TextMain,
            Font = new Font("Segoe UI", size, bold ? FontStyle.Bold : FontStyle.Regular),
            AutoSize = false
        };
    }

    private static Button Button(string text, Color background, Color color)
    {
        return new Button
        {
            Text = text,
            Font = new Font("Segoe UI", 10F, FontStyle.Bold),
            FlatStyle = FlatStyle.Flat,
            BackColor = background,
            ForeColor = color,
            Cursor = Cursors.Hand,
            Height = 43,
            UseVisualStyleBackColor = false
        };
    }

    private void BuildInterface()
    {
        var header = new Panel { Height = 120, Dock = DockStyle.Top, BackColor = Background };
        Controls.Add(header);
        var logo = Label("K", 24, true, Background);
        logo.BackColor = Accent;
        logo.TextAlign = ContentAlignment.MiddleCenter;
        logo.SetBounds(28, 28, 58, 58);
        header.Controls.Add(logo);
        var title = Label("KanBan Tools", 23, true);
        title.SetBounds(105, 24, 580, 45);
        header.Controls.Add(title);
        var subtitle = Label("Một bộ cài duy nhất · Cài mới · Cập nhật · Sửa lỗi", 10, false, Muted);
        subtitle.SetBounds(107, 70, 625, 25);
        header.Controls.Add(subtitle);

        var body = new Panel
        {
            Dock = DockStyle.Fill,
            Padding = new Padding(28, 0, 28, 22),
            BackColor = Background
        };
        Controls.Add(body);
        body.BringToFront();

        var card = new Panel { Dock = DockStyle.Fill, BackColor = Card, Padding = new Padding(22) };
        body.Controls.Add(card);

        var top = Label("TRẠNG THÁI CÀI ĐẶT", 10, true, Accent);
        top.SetBounds(22, 14, 440, 23);
        card.Controls.Add(top);

        versions.SetBounds(22, 41, 695, 25);
        versions.ForeColor = Muted;
        versions.Text = "Đang kiểm tra phiên bản trên GitHub…";
        card.Controls.Add(versions);

        status.SetBounds(22, 78, 690, 40);
        status.ForeColor = TextMain;
        status.Font = new Font("Segoe UI", 15F, FontStyle.Bold);
        status.Text = "Kiểm tra hệ thống";
        card.Controls.Add(status);

        detail.SetBounds(22, 119, 690, 31);
        detail.ForeColor = Muted;
        detail.Text = "Trình cài đặt sẽ tự tải thành phần còn thiếu từ nguồn chính thức.";
        card.Controls.Add(detail);

        progress.SetBounds(22, 165, 648, 18);
        progress.Minimum = 0;
        progress.Maximum = 100;
        progress.Value = 0;
        progress.Style = ProgressBarStyle.Continuous;
        card.Controls.Add(progress);
        percent.SetBounds(675, 161, 48, 26);
        percent.Text = "0%";
        percent.TextAlign = ContentAlignment.MiddleRight;
        percent.ForeColor = Accent;
        card.Controls.Add(percent);

        var logHeader = Label("Chi tiết tiến trình", 10, true);
        logHeader.SetBounds(22, 206, 480, 24);
        card.Controls.Add(logHeader);

        log.SetBounds(22, 235, 690, 160);
        log.Multiline = true;
        log.ReadOnly = true;
        log.ScrollBars = ScrollBars.Vertical;
        log.BackColor = Color.FromArgb(18, 28, 42);
        log.ForeColor = Color.FromArgb(200, 221, 231);
        log.BorderStyle = BorderStyle.FixedSingle;
        log.Font = new Font("Consolas", 9.2F);
        log.TabStop = false;
        card.Controls.Add(log);

        optionalNotice.SetBounds(22, 401, 690, 35);
        optionalNotice.ForeColor = Muted;
        optionalNotice.Text = "Không yêu cầu quyền Administrator. KanScan chỉ được cài khi đã có gói ZIP hợp lệ.";
        card.Controls.Add(optionalNotice);

        primary.Text = "Cài đặt / Cập nhật";
        Configure(primary, Accent, Background);
        primary.SetBounds(22, 447, 225, 43);
        primary.Click += async (_, _) => await ExecuteAsync(false);
        card.Controls.Add(primary);

        Configure(repair, Color.FromArgb(59, 77, 99), TextMain);
        repair.Text = "Sửa lỗi / Cài lại";
        repair.SetBounds(260, 447, 157, 43);
        repair.Click += async (_, _) => await ExecuteAsync(true);
        card.Controls.Add(repair);

        Configure(logs, Color.FromArgb(59, 77, 99), TextMain);
        logs.Text = "Mở nhật ký";
        logs.SetBounds(430, 447, 133, 43);
        logs.Click += (_, _) => OpenLogFolder();
        card.Controls.Add(logs);

        Configure(close, Color.FromArgb(59, 77, 99), TextMain);
        close.Text = "Đóng";
        close.SetBounds(576, 447, 136, 43);
        close.Click += (_, _) => Close();
        card.Controls.Add(close);

        Resize += (_, _) => ResizeControls(card);
        ResizeControls(card);
        UpdateButtons(false);
    }

    private void ResizeControls(Panel card)
    {
        int width = Math.Max(610, card.ClientSize.Width - 44);
        versions.Width = width;
        status.Width = width;
        detail.Width = width;
        log.Width = width;
        optionalNotice.Width = width;
        progress.Width = width - 50;
        percent.Left = progress.Right + 5;
        log.Height = Math.Max(130, card.ClientSize.Height - 336);
        int footer = card.ClientSize.Height - 65;
        primary.Top = repair.Top = logs.Top = close.Top = footer;
        optionalNotice.Top = footer - 44;
        logs.Left = width - 260;
        close.Left = width - 114;
    }

    private static void Configure(Button button, Color bg, Color fg)
    {
        button.BackColor = bg;
        button.ForeColor = fg;
        button.FlatAppearance.BorderSize = 0;
        button.FlatStyle = FlatStyle.Flat;
        button.Cursor = Cursors.Hand;
        button.Font = new Font("Segoe UI", 10, FontStyle.Bold);
    }

    private void UpdateButtons(bool busy)
    {
        primary.Enabled = !busy;
        repair.Enabled = !busy;
        close.Enabled = !busy;
        logs.Enabled = true;
    }

    private void SetProgress(int value, string stage, string? message = null)
    {
        if (IsDisposed) return;
        currentPercent = Math.Max(currentPercent, Math.Min(100, value));
        progress.Value = currentPercent;
        percent.Text = currentPercent + "%";
        status.Text = stage;
        if (message != null) detail.Text = message;
    }

    private void AppendLog(string line)
    {
        if (IsDisposed || string.IsNullOrWhiteSpace(line)) return;
        string cleaned = line.Replace("\r", "").TrimEnd();
        if (cleaned.StartsWith("@@KANTOOL_PROGRESS@@|", StringComparison.Ordinal))
        {
            string[] fields = cleaned.Split('|', 3);
            if (fields.Length == 3 && int.TryParse(fields[1], out int value))
                SetProgress(value, fields[2]);
            return;
        }
        if (cleaned.StartsWith("==>", StringComparison.Ordinal))
            status.Text = cleaned.Substring(3).Trim();
        if (++logLines > LogLineLimit)
        {
            int cut = log.Text.IndexOf('\n');
            if (cut > 0) log.Text = log.Text[(cut + 1)..];
            logLines = LogLineLimit;
        }
        log.AppendText(cleaned + Environment.NewLine);
    }

    private void ThreadLog(string line)
    {
        if (IsHandleCreated && !IsDisposed)
        {
            try { BeginInvoke((Action)(() => AppendLog(line))); }
            catch (InvalidOperationException) { }
        }
    }

    private async Task CheckVersionAsync()
    {
        try
        {
            manifestJson = await FetchTextAsync(ManifestUri, 400, 100_000);
            var installedFile = Path.Combine(root, "installed.json");
            string? installedJson = File.Exists(installedFile)
                ? await File.ReadAllTextAsync(installedFile, Encoding.UTF8) : null;
            manifest = InstallerManifest.Create(manifestJson, installedJson);
            versions.Text = $"Máy hiện tại: {manifest.InstalledVersion ?? "Chưa cài"}   ·   GitHub: {manifest.LatestVersion}";
            currentMode = manifest.InstalledVersion == null ? "/install" : "/update";
            status.Text = manifest.InstalledVersion == null
                ? "Sẵn sàng cài đặt lần đầu"
                : CompareVersion(manifest.InstalledVersion, manifest.LatestVersion) < 0
                    ? "Đã phát hiện phiên bản mới"
                    : "Đã có KanTool. Có thể kiểm tra hoặc sửa lỗi.";
            detail.Text = "Chọn Cài đặt / Cập nhật để tự kiểm tra, chỉ tải phần cần thiết.";
            AppendLog($"Kiểm tra: phiên bản máy {manifest.InstalledVersion ?? "chưa có"}, mới nhất {manifest.LatestVersion}.");
            SetProgress(8, status.Text);
        }
        catch (Exception exc)
        {
            status.Text = "Không kiểm tra được phiên bản";
            detail.Text = "Kiểm tra Internet và kết nối githubusercontent.com.";
            AppendLog("Lỗi kiểm tra: " + exc.Message);
        }
    }

    private static int CompareVersion(string? left, string right)
    {
        if (!Version.TryParse(left, out Version? a) ||
            !Version.TryParse(right, out Version? b)) return -1;
        return a.CompareTo(b);
    }

    private async Task<string> FetchTextAsync(Uri uri, int minBytes, int maxBytes)
    {
        using HttpResponseMessage response = await http.GetAsync(uri, HttpCompletionOption.ResponseHeadersRead);
        response.EnsureSuccessStatusCode();
        if (response.Content.Headers.ContentLength > maxBytes)
            throw new InvalidDataException("Gói tải vượt dung lượng giới hạn.");
        await using Stream stream = await response.Content.ReadAsStreamAsync();
        await using var memory = new MemoryStream();
        byte[] buffer = new byte[8192];
        int size;
        while ((size = await stream.ReadAsync(buffer)) != 0)
        {
            if (memory.Length + size > maxBytes) throw new InvalidDataException("Gói tải quá lớn.");
            memory.Write(buffer, 0, size);
        }
        if (memory.Length < minBytes) throw new InvalidDataException("Gói tải không đầy đủ.");
        return Encoding.UTF8.GetString(memory.ToArray()).TrimStart('\ufeff');
    }

    private async Task ExecuteAsync(bool forceRepair)
    {
        if (installing) return;
        installing = true;
        UpdateButtons(true);
        log.Clear();
        logLines = 0;
        currentPercent = 0;
        progress.Value = 0;
        percent.Text = "0%";
        string tempDir = Path.Combine(Path.GetTempPath(), "KanToolSetup-" + Guid.NewGuid().ToString("N"));
        try
        {
            Directory.CreateDirectory(tempDir);
            SetProgress(3, "Kiểm tra bản mới nhất", "Tải thông tin từ GitHub.");
            string latest = await FetchTextAsync(ManifestUri, 400, 100_000);
            string script = await FetchTextAsync(ScriptUri, 5_000, 200_000);
            string? installed = null;
            string file = Path.Combine(root, "installed.json");
            if (File.Exists(file)) installed = await File.ReadAllTextAsync(file, Encoding.UTF8);
            var data = InstallerManifest.Create(latest, installed);
            if (!script.Contains("KANBAN TOOLS - CAI DAT", StringComparison.Ordinal) ||
                !script.Contains("function Need-Component", StringComparison.Ordinal) ||
                !script.Contains("Stage-LatestBootstrapper", StringComparison.Ordinal))
                throw new InvalidDataException("Nguồn cài đặt GitHub không hợp lệ.");
            var manifestFile = Path.Combine(tempDir, "manifest.json");
            var scriptFile = Path.Combine(tempDir, "install.ps1");
            await File.WriteAllTextAsync(manifestFile, latest, new UTF8Encoding(false));
            await File.WriteAllTextAsync(scriptFile, script, new UTF8Encoding(false));
            currentMode = forceRepair ? "/repair" : data.InstalledVersion == null ? "/install" : "/update";
            versions.Text = $"Máy hiện tại: {data.InstalledVersion ?? "Chưa cài"}   ·   GitHub: {data.LatestVersion}";
            SetProgress(18, "Đã tải bộ cài", "Đang cài đặt bằng PowerShell ẩn, không mở CMD.");
            AppendLog("Chế độ: " + currentMode);
            int exit = await RunPowerShellAsync(scriptFile, manifestFile, currentMode);
            if (exit != 0)
                throw new InvalidOperationException($"Quá trình cài đặt không hoàn tất (mã lỗi {exit}). Xem Nhật ký.");
            SetProgress(100, "Cài đặt / cập nhật hoàn tất",
                "Các thành phần chính đã vượt qua bước kiểm tra sau cài đặt.");
            AppendLog("Hoàn tất. KanScan là thành phần tùy chọn cần gói ZIP chính xác.");
            try { RegisterLocalLauncher(); }
            catch (Exception err) { AppendLog("Không tạo được lối tắt (không ảnh hưởng KanTool): " + err.Message); }
            MessageBox.Show(this, "KanBan Tools đã cài đặt / cập nhật xong.\n\n" +
                "Những thành phần tùy chọn nếu thiếu sẽ được ghi trong nhật ký.", "Hoàn tất",
                MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
        catch (Exception ex)
        {
            status.Text = "Cài đặt chưa hoàn tất";
            detail.Text = "Không xóa dữ liệu người dùng. Mở Nhật ký để tìm bước lỗi.";
            AppendLog("LỖI: " + ex.Message);
            MessageBox.Show(this, ex.Message + "\n\nXem nhật ký tại:\n" +
                Path.Combine(root, "logs"), "KanTool chưa cài đặt xong",
                MessageBoxButtons.OK, MessageBoxIcon.Error);
        }
        finally
        {
            try { if (Directory.Exists(tempDir)) Directory.Delete(tempDir, true); }
            catch { /* Temp cleanup is best effort. */ }
            installing = false;
            UpdateButtons(false);
            if (!IsDisposed) await CheckVersionAsync();
        }
    }

    private async Task<int> RunPowerShellAsync(string script, string manifestFile, string mode)
    {
        Directory.CreateDirectory(Path.Combine(root, "logs"));
        var info = new ProcessStartInfo
        {
            FileName = Path.Combine(
                Environment.GetFolderPath(Environment.SpecialFolder.System), "WindowsPowerShell",
                "v1.0", "powershell.exe"),
            UseShellExecute = false,
            CreateNoWindow = true,
            WindowStyle = ProcessWindowStyle.Hidden,
            RedirectStandardOutput = true,
            RedirectStandardError = true,
            StandardOutputEncoding = Encoding.UTF8,
            StandardErrorEncoding = Encoding.UTF8
        };
        foreach (string arg in new[] { "-NoLogo", "-NoProfile", "-NonInteractive",
                     "-ExecutionPolicy", "Bypass", "-File", script,
                     "-Mode", mode, "-ManifestPath", manifestFile })
            info.ArgumentList.Add(arg);

        using var process = new Process { StartInfo = info };
        var rawLogFile = Path.Combine(root, "logs", "setup-ui.log");
        using var writer = new StreamWriter(rawLogFile, append: true, Encoding.UTF8)
        { AutoFlush = true };
        writer.WriteLine($"--- KanTool setup {DateTime.Now:O} ---");
        void Log(string line)
        {
            lock (writer) writer.WriteLine(line);
            ThreadLog(line);
        }
        process.OutputDataReceived += (_, e) => { if (e.Data != null) Log(e.Data); };
        process.ErrorDataReceived += (_, e) => { if (e.Data != null) Log("ERROR: " + e.Data); };

        if (!process.Start()) throw new InvalidOperationException("Không mở được PowerShell.");
        process.BeginOutputReadLine();
        process.BeginErrorReadLine();
        await process.WaitForExitAsync();
        return process.ExitCode;
    }

    private void RegisterLocalLauncher()
    {
        // A versioned name prevents overwriting an EXE currently running on Windows.
        string targetDir = Path.Combine(root, "installer");
        Directory.CreateDirectory(targetDir);
        string target = Path.Combine(targetDir, "KanTool-Setup-v1.0.0.exe");
        string source = Application.ExecutablePath;
        if (!string.Equals(Path.GetFullPath(source), Path.GetFullPath(target),
            StringComparison.OrdinalIgnoreCase))
            File.Copy(source, target, overwrite: true);
        using var rootKey = Registry.CurrentUser.CreateSubKey(@"Software\Classes\kanbantoolsetup");
        rootKey?.SetValue("", "URL:KanTool Setup");
        rootKey?.SetValue("URL Protocol", "");
        using var cmd = Registry.CurrentUser.CreateSubKey(
            @"Software\Classes\kanbantoolsetup\shell\open\command");
        cmd?.SetValue("", "\"" + target + "\" \"%1\"");
        // Start Menu entry uses the same installed GUI and no cmd.exe.
        string programs = Environment.GetFolderPath(Environment.SpecialFolder.Programs);
        string shortcut = Path.Combine(programs, "KanTool - Cài đặt & Cập nhật.url");
        File.WriteAllText(shortcut, "[InternetShortcut]\r\nURL=kanbantoolsetup://open\r\n",
            new UTF8Encoding(false));
    }

    private void OpenLogFolder()
    {
        string folder = Path.Combine(root, "logs");
        Directory.CreateDirectory(folder);
        Process.Start(new ProcessStartInfo { FileName = folder, UseShellExecute = true });
    }

    private void OnFormClosing(object? sender, FormClosingEventArgs e)
    {
        if (installing)
        {
            e.Cancel = true;
            MessageBox.Show(this, "Đang cài đặt. Hãy hoàn tất trước khi đóng cửa sổ.",
                "KanTool Setup", MessageBoxButtons.OK, MessageBoxIcon.Warning);
        }
        else http.Dispose();
    }
}
