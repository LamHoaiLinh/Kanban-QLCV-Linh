# -*- coding: utf-8 -*-
from __future__ import annotations

import json
import os
import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

if len(sys.argv) < 2:
    raise SystemExit("Thiếu JobId")

JOB_ID = sys.argv[1]
ROOT = Path(os.environ.get("LOCALAPPDATA", Path.home())) / "KanBanTools"
JOBS = ROOT / "jobs"
UPLOADS = ROOT / "uploads"
BIN = ROOT / "media" / "bin"
NODE = ROOT / "media" / "node" / "node.exe"
FFMPEG = BIN / "ffmpeg.exe"
FFPROBE = BIN / "ffprobe.exe"
DOWNLOADS = Path(os.environ.get("USERPROFILE", str(Path.home()))) / "Desktop" / "KanDownload"
REQUEST = JOBS / f"{JOB_ID}.request.json"
STATUS = JOBS / f"{JOB_ID}.status.json"
CANCEL = JOBS / f"{JOB_ID}.cancel"
LOG = JOBS / f"{JOB_ID}.worker.log"
CREATE_NO_WINDOW = getattr(subprocess, "CREATE_NO_WINDOW", 0x08000000 if os.name == "nt" else 0)

DOWNLOADS.mkdir(parents=True, exist_ok=True)

def log(msg: str) -> None:
    try:
        with LOG.open("a", encoding="utf-8") as f:
            f.write(msg.rstrip() + "\n")
    except Exception:
        pass

def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8-sig"))

def save_json(path: Path, data: dict) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    tmp.replace(path)

def status(state: str, percent: float, message: str, current: str = "", index: int = 0,
           total: int = 0, output: str = "", error: str = "", child_pid: int = 0,
           speed: str = "", eta: str = "", stage: str = "") -> None:
    save_json(STATUS, {
        "ok": state != "error",
        "state": state,
        "percent": max(0, min(100, round(float(percent), 1))),
        "message": message,
        "current": current,
        "index": index,
        "total": total,
        "output": output,
        "error": error,
        "speed": speed,
        "eta": eta,
        "stage": stage,
        "workerPid": os.getpid(),
        "childPid": child_pid,
    })

def check_cancel() -> None:
    if CANCEL.exists():
        raise KeyboardInterrupt

def safe_name(text: str) -> str:
    text = str(text or "").strip()
    text = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "_", text).rstrip(" .")
    return text[:150]

def unique_path(folder: Path, name: str, ext: str) -> Path:
    name = safe_name(name) or "media"
    p = folder / f"{name}{ext}"
    i = 2
    while p.exists():
        p = folder / f"{name} ({i}){ext}"
        i += 1
    return p

def env() -> dict[str, str]:
    e = os.environ.copy()
    e["PYTHONIOENCODING"] = "utf-8"
    e["PYTHONUTF8"] = "1"
    if NODE.exists():
        e["PATH"] = str(NODE.parent) + os.pathsep + e.get("PATH", "")
    return e

def run_capture(args: list[str], timeout: int = 60) -> tuple[int, str]:
    check_cancel()
    cp = subprocess.run(
        args,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=timeout,
        env=env(),
        creationflags=CREATE_NO_WINDOW if os.name == "nt" else 0,
    )
    log("$ " + " ".join(args))
    log(cp.stdout)
    check_cancel()
    return cp.returncode, cp.stdout

def run_lines(args: list[str], on_line=None, allow_fail=False) -> int:
    check_cancel()
    log("$ " + " ".join(args))
    p = subprocess.Popen(
        args,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        encoding="utf-8",
        errors="replace",
        bufsize=1,
        universal_newlines=True,
        env=env(),
        creationflags=CREATE_NO_WINDOW if os.name == "nt" else 0,
    )
    last_lines: list[str] = []
    try:
        assert p.stdout is not None
        for raw in p.stdout:
            line = raw.rstrip("\r\n")
            if line:
                log(line)
                last_lines.append(line)
                if len(last_lines) > 30:
                    last_lines.pop(0)
                if on_line:
                    on_line(line, p.pid)
            check_cancel()
        code = p.wait()
    except KeyboardInterrupt:
        try:
            if os.name == "nt":
                subprocess.run(["taskkill.exe", "/PID", str(p.pid), "/T", "/F"],
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
                               creationflags=CREATE_NO_WINDOW)
            else:
                p.kill()
        except Exception:
            pass
        raise
    if code != 0 and not allow_fail:
        tail = " | ".join(last_lines[-5:])
        raise RuntimeError(tail or f"Tiến trình xử lý kết thúc với mã {code}.")
    return code

def duration(path: Path) -> float:
    try:
        code, out = run_capture([
            str(FFPROBE), "-v", "error", "-show_entries", "format=duration",
            "-of", "default=nw=1:nk=1", str(path)
        ], 20)
        if code == 0:
            return float((out.strip().splitlines() or ["0"])[-1])
    except Exception:
        pass
    return 0.0

def stream_types(path: Path) -> set[str]:
    try:
        code, out = run_capture([
            str(FFPROBE), "-v", "quiet", "-print_format", "json",
            "-show_streams", str(path)
        ], 20)
        if code == 0:
            j = json.loads(out)
            return {str(x.get("codec_type", "")) for x in j.get("streams", [])}
    except Exception:
        pass
    return set()

def rename_from_metadata(path: Path) -> Path:
    if not path.exists():
        return path
    try:
        code, out = run_capture([
            str(FFPROBE), "-v", "quiet", "-print_format", "json",
            "-show_format", str(path)
        ], 20)
        if code != 0:
            return path
        tags = (json.loads(out).get("format") or {}).get("tags") or {}
        title = safe_name(tags.get("title", ""))
        artist = safe_name(tags.get("artist", "") or tags.get("album_artist", ""))
        if not title:
            return path
        base = f"{artist} - {title}" if artist else title
        dst = unique_path(path.parent, base, path.suffix)
        if dst != path:
            path.replace(dst)
            return dst
    except Exception as exc:
        log("Metadata rename skipped: " + repr(exc))
    return path

def yt_info(url: str) -> dict:
    code, out = run_capture([
        sys.executable, "-m", "yt_dlp",
        "--no-playlist", "--skip-download", "--js-runtimes", "node", "-J", url
    ], 90)
    if code != 0:
        raise RuntimeError("Không đọc được thông tin video.")
    return json.loads(out)

def resolve_height(formats: list[dict], quality: str) -> int:
    hs = sorted({int(f["height"]) for f in formats if f.get("height")})
    if not hs:
        return 0
    if quality == "ultra":
        return max(hs)
    want, cap = 1080, 1440
    if quality == "medium":
        want, cap = 720, 1080
    elif quality == "low":
        want, cap = 480, 720
    higher = [h for h in hs if h >= want and h <= cap]
    if higher:
        return min(higher)
    lower = [h for h in hs if h < want]
    if lower:
        return max(lower)
    return max(hs)

def download_one(url: str, kind: str, fmt: str, quality: str,
                 index: int, total: int, base: float, slice_pct: float,
                 all_playlist: bool = False) -> str:
    title = f"Link {index}"
    info = None
    if not all_playlist:
        status("running", base, f"Đang đọc thông tin link {index}/{total}…", "", index, total)
        info = yt_info(url)
        title = str(info.get("title") or f"Media {index}")
    else:
        status("running", base, f"Đang chuẩn bị playlist {index}/{total}…", "", index, total)
    status("running", base, f"Đang tải “{title}” — 0%", title, index, total)
    if all_playlist:
        tmpl = str(DOWNLOADS / "%(playlist_title)s" / "%(playlist_index)03d - %(title).180B [%(id)s].%(ext)s")
    else:
        tmpl = str(DOWNLOADS / "%(title).180B [%(id)s].%(ext)s")
    args = [
        sys.executable, "-m", "yt_dlp",
        "--js-runtimes", "node", "--newline", "--progress", "--no-overwrites",
        "--embed-metadata", "--ffmpeg-location", str(BIN), "-o", tmpl,
        "--progress-template", "download:KM_PROGRESS:%(progress._percent_str)s|%(progress._speed_str)s|%(progress._eta_str)s",
        "--print", "before_dl:KM_ITEM:%(playlist_index)s/%(playlist_count)s:%(title)s",
        "--print", "after_move:KM_FILE:%(filepath)s",
    ]
    args.append("--yes-playlist" if all_playlist else "--no-playlist")
    if all_playlist:
        args += ["--download-archive", str(DOWNLOADS / ".kanmedia-playlist-archive.txt")]
    if kind == "audio":
        codec = fmt if fmt in {"mp3", "m4a", "opus", "flac", "wav"} else "mp3"
        args += ["-f", "bestaudio/best", "-x", "--audio-format", codec]
        if codec == "mp3":
            qmap = {"ultra": "0", "high": "2", "medium": "4", "low": "7"}
            args += ["--audio-quality", qmap.get(quality, "2")]
        elif codec == "m4a":
            qmap = {"ultra": "256K", "high": "192K", "medium": "128K", "low": "96K"}
            args += ["--audio-quality", qmap.get(quality, "192K")]
        elif codec == "opus":
            qmap = {"ultra": "192K", "high": "160K", "medium": "128K", "low": "96K"}
            args += ["--audio-quality", qmap.get(quality, "160K")]
        # FLAC/WAV không tạo thêm chất lượng từ nguồn nén; luôn dùng nguồn tốt nhất.
    else:
        if all_playlist:
            cap = {"high": 1080, "medium": 720, "low": 480}.get(quality)
            if cap:
                selector = f"bestvideo[height<={cap}]+bestaudio/best[height<={cap}]"
                args += ["-f", selector]
        else:
            h = resolve_height((info or {}).get("formats") or [], quality)
            if h:
                selector = (
                    f"bestvideo[height={h}]+bestaudio/"
                    f"best[height={h}]/"
                    f"bestvideo[height<={h}]+bestaudio/"
                    f"best[height<={h}]"
                )
                args += ["-f", selector]
        if fmt == "mkv":
            args += ["--merge-output-format", "mkv"]
        elif fmt == "webm":
            args += ["--merge-output-format", "webm"]
        else:
            args += ["--merge-output-format", "mp4", "--remux-video", "mp4"]

    args.append(url)
    output_file = {"path": ""}
    playlist_state = {"item": 0, "count": 0, "title": title}

    def line_cb(line: str, pid: int):
        item = re.match(r"KM_ITEM:([^/]+)/([^:]+):(.*)", line)
        if item:
            try:
                playlist_state["item"] = int(item.group(1))
            except Exception:
                playlist_state["item"] = 0
            try:
                playlist_state["count"] = int(item.group(2))
            except Exception:
                playlist_state["count"] = 0
            playlist_state["title"] = item.group(3).strip() or title
            shown = playlist_state["title"]
            if playlist_state["item"] and playlist_state["count"]:
                status("running", base,
                       f"Đang xử lý bài {playlist_state['item']}/{playlist_state['count']}: “{shown}”",
                       shown, playlist_state["item"], playlist_state["count"], child_pid=pid)
            else:
                status("running", base, f"Đang xử lý “{shown}”", shown, index, total, child_pid=pid)
            return
        m = re.search(r"KM_PROGRESS:\s*([0-9.]+)%\|([^|]*)\|(.*)$", line)
        if m:
            p = float(m.group(1))
            speed = m.group(2).strip()
            eta = m.group(3).strip()
            shown = playlist_state["title"] or title
            if all_playlist and playlist_state["item"] and playlist_state["count"]:
                overall = ((playlist_state["item"] - 1) + p / 100.0) / playlist_state["count"]
                pct = base + slice_pct * overall
                msg = f"Đang tải bài {playlist_state['item']}/{playlist_state['count']} “{shown}” — {round(p)}%"
                status("running", pct, msg, shown, playlist_state["item"], playlist_state["count"],
                       child_pid=pid, speed=speed, eta=eta, stage="download")
            else:
                status("running", base + slice_pct * p / 100.0,
                       f"Đang tải “{shown}” — {round(p)}%", shown, index, total,
                       child_pid=pid, speed=speed, eta=eta, stage="download")
        elif line.startswith("[Merger]"):
            shown = playlist_state["title"] or title
            status("running", base + slice_pct * 0.985, f"Đang ghép hình và tiếng “{shown}”",
                   shown, playlist_state["item"] or index, playlist_state["count"] or total,
                   child_pid=pid, stage="merge")
        elif line.startswith("[Metadata]") or line.startswith("[EmbedSubtitle]"):
            shown = playlist_state["title"] or title
            status("running", base + slice_pct * 0.99, f"Đang ghi thông tin file “{shown}”",
                   shown, playlist_state["item"] or index, playlist_state["count"] or total,
                   child_pid=pid, stage="metadata")
        elif line.startswith("[ExtractAudio]") or line.startswith("[VideoRemuxer]"):
            shown = playlist_state["title"] or title
            status("running", base + slice_pct * 0.99, f"Đang chuyển định dạng “{shown}”",
                   shown, playlist_state["item"] or index, playlist_state["count"] or total,
                   child_pid=pid, stage="convert")
        elif line.startswith("KM_FILE:"):
            output_file["path"] = line.split(":", 1)[1].strip()

    run_lines(args, line_cb)
    shown = playlist_state["title"] or title
    status("running", base + slice_pct * 0.995, f"Đang hoàn tất file “{shown}”", shown,
           playlist_state["item"] or index, playlist_state["count"] or total)
    path = Path(output_file["path"]) if output_file["path"] else None
    if not path or not path.exists():
        candidates = sorted((p for p in DOWNLOADS.rglob("*") if p.is_file()),
                            key=lambda p: p.stat().st_mtime, reverse=True)
        path = candidates[0] if candidates else None
    if path and path.exists():
        if not all_playlist:
            path = rename_from_metadata(path)
        return str(path)
    return ""

def ffmpeg_run(src: Path, options: list[str], dst: Path, dur: float,
               base: float, slice_pct: float, label: str, current: str = "",
               index: int = 0, total: int = 0, allow_fail=False) -> int:
    args = [str(FFMPEG), "-hide_banner", "-y", "-i", str(src)] + options + [
        "-progress", "pipe:1", "-nostats", str(dst)
    ]
    started = time.time()
    def cb(line: str, pid: int):
        m = re.match(r"out_time_(?:us|ms)=([0-9]+)", line)
        if m and dur > 0:
            p = min(99.0, (float(m.group(1)) / (dur * 1_000_000.0)) * 100.0)
            elapsed = max(0.1, time.time() - started)
            eta = ""
            if p > 0.5:
                remain = elapsed * (100.0 - p) / p
                eta = f"{int(remain//60):02d}:{int(remain%60):02d}"
            status("running", base + slice_pct * p / 100.0,
                   f"{label} — {round(p)}%", current, index, total, child_pid=pid,
                   eta=eta, stage="ffmpeg")
        elif line == "progress=end":
            status("running", base + slice_pct, f"{label} — 100%", current, index, total, child_pid=pid, stage="ffmpeg")
    return run_lines(args, cb, allow_fail=allow_fail)

def read_upload(upload_id: str) -> dict:
    p = UPLOADS / f"{upload_id}.json"
    if not p.exists():
        raise RuntimeError("Không tìm thấy file đã nhận.")
    return load_json(p)

def cleanup_upload(upload_id: str) -> None:
    try:
        meta_path = UPLOADS / f"{upload_id}.json"
        meta = load_json(meta_path) if meta_path.exists() else {}
        raw = str(meta.get("path") or "")
        if raw:
            Path(raw).unlink(missing_ok=True)
        meta_path.unlink(missing_ok=True)
    except Exception as exc:
        log("Upload cleanup skipped: " + repr(exc))

def convert_one(meta: dict, fmt: str, quality: str,
                base: float, slice_pct: float, index: int, total: int) -> str:
    src = Path(meta["path"])
    name = safe_name(Path(str(meta.get("name") or src.name)).stem)
    dst = unique_path(DOWNLOADS, name, "." + fmt)
    dur = duration(src)
    label = f"Đang chuyển “{meta.get('name', src.name)}”"
    current = str(meta.get("name", src.name))
    status("running", base, label, current, index, total)

    if fmt in {"mp4", "mkv", "webm"}:
        code = ffmpeg_run(src, ["-map", "0?", "-c", "copy"], dst, dur, base, slice_pct,
                          label, current, index, total, allow_fail=True)
        if code == 0 and dst.exists():
            return str(dst)
        try:
            dst.unlink(missing_ok=True)
        except Exception:
            pass
        crf = "23"
        if quality == "high":
            crf = "18"
        elif quality == "light":
            crf = "29"
        if fmt == "webm":
            opts = ["-c:v", "libvpx-vp9", "-crf", crf, "-b:v", "0",
                    "-c:a", "libopus", "-b:a", "128k"]
        else:
            opts = ["-c:v", "libx264", "-preset", "medium", "-crf", crf,
                    "-c:a", "aac", "-b:a", "160k"]
        ffmpeg_run(src, opts, dst, dur, base, slice_pct, label, current, index, total)
    else:
        if fmt == "wav":
            opts = ["-vn", "-c:a", "pcm_s16le"]
        elif fmt == "flac":
            opts = ["-vn", "-c:a", "flac"]
        elif fmt == "m4a":
            bitrate = "256k" if quality == "high" else "128k" if quality == "light" else "192k"
            opts = ["-vn", "-c:a", "aac", "-b:a", bitrate]
        elif fmt == "ogg":
            q = "7" if quality == "high" else "3" if quality == "light" else "5"
            opts = ["-vn", "-c:a", "libvorbis", "-q:a", q]
        else:
            q = "0" if quality == "high" else "6" if quality == "light" else "3"
            opts = ["-vn", "-c:a", "libmp3lame", "-q:a", q]
        ffmpeg_run(src, opts, dst, dur, base, slice_pct, label, current, index, total)

    return str(rename_from_metadata(dst))

def edit_one(meta: dict, p: dict) -> str:
    src = Path(meta["path"])
    dur = duration(src)
    types = stream_types(src)
    has_video = "video" in types
    has_audio = "audio" in types
    start = max(0.0, float(p.get("start") or 0))
    end = float(p.get("end") or 0)
    if end <= 0 or (dur > 0 and end > dur):
        end = dur
    speed = float(p.get("speed") or 1)
    speed = min(2.0, max(0.5, speed))
    vol = max(0.0, float(p.get("volume") if p.get("volume") is not None else 1))
    extract = bool(p.get("extractMp3"))
    mute = bool(p.get("mute"))
    normalize = bool(p.get("normalize"))
    fade_in = max(0.0, float(p.get("fadeIn") or 0))
    fade_out = max(0.0, float(p.get("fadeOut") or 0))
    cut = str(p.get("cut") or "keep")

    base_name = safe_name(Path(str(meta.get("name") or src.name)).stem)
    audio_only = extract or (has_audio and not has_video)
    ext = ".mp3" if audio_only else ".mp4"
    dst = unique_path(DOWNLOADS, base_name + " - edited", ext)

    opts: list[str] = []
    out_dur = dur
    if cut == "keep" and end > start:
        opts += ["-ss", str(start), "-to", str(end)]
        out_dur = max(0.0, end - start)

    vf: list[str] = []
    af: list[str] = []
    if speed != 1:
        if has_video and not extract:
            vf.append(f"setpts=PTS/{speed}")
        if has_audio:
            af.append(f"atempo={speed}")
        if out_dur:
            out_dur /= speed

    if has_audio and not mute:
        if normalize:
            af.append("loudnorm=I=-16:TP=-1.5:LRA=11")
        elif vol != 1:
            af.append(f"volume={vol}")
        if fade_in > 0:
            af.append(f"afade=t=in:st=0:d={fade_in}")
        if fade_out > 0 and out_dur > 0:
            fo = max(0.0, out_dur - fade_out)
            af.append(f"afade=t=out:st={fo}:d={fade_out}")

    if cut == "remove" and end > start:
        filters: list[str] = []
        if has_video and not extract:
            chain = f"[0:v]select=not(between(t\\,{start}\\,{end})),setpts=N/FRAME_RATE/TB"
            if vf:
                chain += "," + ",".join(vf)
            filters.append(chain + "[v]")
        if has_audio and not mute:
            chain = f"[0:a]aselect=not(between(t\\,{start}\\,{end})),asetpts=N/SR/TB"
            if af:
                chain += "," + ",".join(af)
            filters.append(chain + "[a]")
        if filters:
            opts += ["-filter_complex", ";".join(filters)]
            if has_video and not extract:
                opts += ["-map", "[v]"]
            if has_audio and not mute:
                opts += ["-map", "[a]"]
        if dur:
            out_dur = max(0.0, dur - (end - start)) / speed
    else:
        if vf:
            opts += ["-vf", ",".join(vf)]
        if af and not mute:
            opts += ["-af", ",".join(af)]

    if extract or audio_only:
        if not has_audio:
            raise RuntimeError("File không có âm thanh để xuất MP3.")
        opts += ["-vn", "-c:a", "libmp3lame", "-q:a", "0" if extract else "2"]
    elif has_video:
        opts += ["-c:v", "libx264", "-preset", "medium", "-crf", "20"]
        if mute or not has_audio:
            opts += ["-an"]
        else:
            opts += ["-c:a", "aac", "-b:a", "160k"]
    else:
        raise RuntimeError("Không nhận diện được audio/video trong file.")

    label = f"Đang chỉnh “{meta.get('name', src.name)}”"
    ffmpeg_run(src, opts, dst, out_dur, 5, 94, label, str(meta.get("name", src.name)), 1, 1)
    return str(rename_from_metadata(dst))

def main():
    if not REQUEST.exists():
        raise RuntimeError("Không tìm thấy yêu cầu tác vụ.")
    req = load_json(REQUEST)
    mode = str(req.get("mode") or "")
    p = req.get("payload") or {}
    global DOWNLOADS
    DOWNLOADS = Path(str(p.get("downloadDir") or DOWNLOADS))
    DOWNLOADS.mkdir(parents=True, exist_ok=True)
    status("running", 1, "Đang chuẩn bị…")

    if mode == "download":
        urls = list(p.get("urls") or [])
        if not urls:
            raise RuntimeError("Không có link để tải.")
        last = ""
        slice_pct = 98.0 / len(urls)
        for i, url in enumerate(urls):
            check_cancel()
            last = download_one(
                str(url), str(p.get("kind") or "audio"), str(p.get("format") or "mp3"),
                str(p.get("quality") or "high"), i + 1, len(urls),
                1 + slice_pct * i, slice_pct, bool(p.get("allPlaylist"))
            )
        status("done", 100, "Hoàn tất.", total=len(urls), output=last)
    elif mode == "convert":
        ids = list(p.get("uploadIds") or [])
        if not ids:
            raise RuntimeError("Không có file để chuyển.")
        last = ""
        slice_pct = 98.0 / len(ids)
        for i, uid in enumerate(ids):
            check_cancel()
            uid = str(uid)
            last = convert_one(
                read_upload(uid), str(p.get("format") or "mp4"),
                str(p.get("quality") or "medium"),
                1 + slice_pct * i, slice_pct, i + 1, len(ids)
            )
            cleanup_upload(uid)
        status("done", 100, "Hoàn tất.", total=len(ids), output=last)
    elif mode == "edit":
        uid = str(p.get("uploadId") or "")
        last = edit_one(read_upload(uid), p)
        cleanup_upload(uid)
        status("done", 100, "Hoàn tất.", total=1, output=last)
    else:
        raise RuntimeError("Loại tác vụ không hợp lệ.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        status("cancelled", 0, "Đã hủy tác vụ.")
    except Exception as exc:
        log("ERROR: " + repr(exc))
        status("error", 0, "Tác vụ không hoàn tất.", error=str(exc))
        raise
