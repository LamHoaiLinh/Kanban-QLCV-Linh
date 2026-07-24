(() => {
  'use strict';

  /*
   * TRÌNH PHÁT NHẠC LOCAL CHO KANBAN CÁ NHÂN
   * - Chỉ tạo Object URL cho bài đang phát để tiết kiệm RAM.
   * - Lưu tùy chọn và danh sách thư mục gần đây trong localStorage.
   * - Lưu FileSystemDirectoryHandle trong IndexedDB vì localStorage không thể chứa handle.
   * - Không gửi tệp nhạc ra Internet.
   */

  const MUSIC_STORAGE_KEY = 'linh_kanban_music_settings_v1';
  const MUSIC_SETTINGS_VERSION = 2; // v2: mặc định phát lặp toàn bộ playlist
  const MUSIC_DB_NAME = 'linh_kanban_music_db';
  const MUSIC_DB_VERSION = 1;
  const MUSIC_HANDLE_STORE = 'directoryHandles';
  const SUPPORTED_EXTENSIONS = new Set(['mp3', 'wav', 'ogg', 'flac', 'm4a']);
  const MAX_RECENT_FOLDERS = 5;

  const refs = {};
  const player = new Audio();
  player.preload = 'metadata';

  let settings = loadMusicSettings();
  let tracks = [];
  let currentIndex = -1;
  let currentObjectUrl = '';
  let currentDirectoryId = null;
  let currentDirectoryName = '';
  let metadataGeneration = 0;
  let shuffleHistory = [];
  let toastTimer = null;

  document.addEventListener('DOMContentLoaded', initMusicPlayer);

  function initMusicPlayer() {
    cacheRefs();
    bindEvents();
    applySavedPlayerSettings();
    saveMusicSettings(); // Lưu ngay cấu hình Repeat All mặc định hoặc dữ liệu vừa nâng cấp.
    renderEmptyPlayer();
    renderRecentFolders();
    restoreMostRecentFolder();
    exposePublicApi();
  }

  function cacheRefs() {
    [
      'musicPlayer','musicBrowseBtn','musicFolderInput','musicRecentBtn','musicRecentName','musicDropHint','musicFolderLabel',
      'musicPrevLine','musicCurrentLine','musicNextLine','musicPrevBtn','musicPlayPauseBtn','musicNextBtn','musicShuffleBtn',
      'musicRepeatBtn','musicProgress','musicCurrentTime','musicDuration','musicVolume','musicPlaylistBtn','musicStatus',
      'musicPlaylistDialog','musicPlaylistList','musicPlaylistCount','musicPlaylistFolder','musicSortSelect','musicRecentSelect',
      'musicOpenRecentBtn','musicPlaylistBrowseBtn','musicPlaylistEmpty'
    ].forEach(id => refs[id] = document.getElementById(id));
  }

  function bindEvents() {
    refs.musicBrowseBtn.addEventListener('click', browseMusicDirectory);
    refs.musicFolderInput.addEventListener('change', loadFilesFromInput);
    refs.musicRecentBtn.addEventListener('click', reopenMostRecentFolder);
    refs.musicPlaylistBtn.addEventListener('click', openPlaylistDialog);
    refs.musicOpenRecentBtn.addEventListener('click', openSelectedRecentFolder);
    refs.musicPlaylistBrowseBtn.addEventListener('click', () => { refs.musicPlaylistDialog.close(); browseMusicDirectory(); });
    refs.musicSortSelect.addEventListener('change', changeSortMode);
    refs.musicPlaylistList.addEventListener('click', handlePlaylistClick);

    refs.musicPrevBtn.addEventListener('click', playPrevious);
    refs.musicPlayPauseBtn.addEventListener('click', togglePlayback);
    refs.musicNextBtn.addEventListener('click', playNext);
    refs.musicShuffleBtn.addEventListener('click', toggleShuffle);
    refs.musicRepeatBtn.addEventListener('click', cycleRepeatMode);
    refs.musicProgress.addEventListener('input', seekTrack);
    refs.musicVolume.addEventListener('input', changeVolume);

    player.addEventListener('loadedmetadata', updateProgressUi);
    player.addEventListener('durationchange', updateProgressUi);
    player.addEventListener('timeupdate', updateProgressUi);
    player.addEventListener('play', updatePlaybackState);
    player.addEventListener('pause', updatePlaybackState);
    player.addEventListener('ended', handleTrackEnded);
    player.addEventListener('error', handleAudioError);

    document.addEventListener('keydown', handleKeyboardShortcut);
    document.addEventListener('visibilitychange', saveMusicSettings);
    window.addEventListener('beforeunload', cleanupMusicPlayer);

    ['dragenter','dragover'].forEach(type => refs.musicPlayer.addEventListener(type, handleDragOver));
    ['dragleave','drop'].forEach(type => refs.musicPlayer.addEventListener(type, handleDragLeave));
    refs.musicPlayer.addEventListener('drop', handleFolderDrop);
  }

  function applySavedPlayerSettings() {
    player.volume = clamp(Number(settings.volume), 0, 1);
    refs.musicVolume.value = String(player.volume);
    refs.musicSortSelect.value = settings.sortMode;
    updateModeButtons();
  }

  // ===== Chọn và đọc thư mục nhạc =====
  async function browseMusicDirectory() {
    try {
      if ('showDirectoryPicker' in window && window.isSecureContext) {
        const handle = await window.showDirectoryPicker({ mode: 'read' });
        await rememberAndLoadDirectory(handle);
      } else {
        refs.musicFolderInput.click();
      }
    } catch (error) {
      if (error?.name !== 'AbortError') {
        console.error('Không thể chọn thư mục nhạc:', error);
        showMusicToast('Không thể mở thư mục nhạc.');
      }
    }
  }

  async function rememberAndLoadDirectory(handle) {
    const existing = settings.recentFolders.find(item => item.name === handle.name);
    const id = existing?.id || makeDirectoryId(handle.name);
    try {
      await putDirectoryHandle(id, handle);
      rememberRecentFolder({ id, name: handle.name, lastUsed: Date.now() });
    } catch (error) {
      console.warn('Không thể lưu quyền thư mục gần đây:', error);
    }
    await loadTracksFromDirectoryHandle(handle, id);
  }

  async function loadTracksFromDirectoryHandle(handle, directoryId = null) {
    setLoadingState(`Đang đọc thư mục “${handle.name}”…`);
    try {
      const permission = await ensureReadPermission(handle);
      if (!permission) {
        showMusicToast('Bạn chưa cấp quyền đọc thư mục nhạc.');
        renderRecentFolders();
        return;
      }

      const found = [];
      await collectTracksFromDirectory(handle, '', found);
      if (!found.length) {
        setTrackCollection([], handle.name, directoryId);
        showMusicToast('Không tìm thấy tệp nhạc được hỗ trợ trong thư mục.');
        return;
      }
      setTrackCollection(found, handle.name, directoryId);
    } catch (error) {
      console.error('Lỗi đọc thư mục nhạc:', error);
      setLoadingState('Không thể đọc thư mục nhạc.');
      showMusicToast('Không thể đọc thư mục nhạc.');
    }
  }

  async function collectTracksFromDirectory(directoryHandle, parentPath, output) {
    for await (const [name, entry] of directoryHandle.entries()) {
      const relativePath = parentPath ? `${parentPath}/${name}` : name;
      if (entry.kind === 'directory') {
        await collectTracksFromDirectory(entry, relativePath, output);
        continue;
      }
      if (!isSupportedAudioName(name)) continue;
      output.push(createTrackRecord({
        name,
        relativePath,
        sourceType: 'handle',
        getFile: () => entry.getFile()
      }));
    }
  }

  async function loadFilesFromInput(event) {
    const files = [...(event.target.files || [])].filter(file => isSupportedAudioName(file.name));
    event.target.value = '';
    const folderName = files[0]?.webkitRelativePath?.split('/')[0] || 'Thư mục đã chọn';
    const records = files.map(file => createTrackRecord({
      name: file.name,
      relativePath: file.webkitRelativePath || file.name,
      sourceType: 'file',
      getFile: async () => file
    }));
    setTrackCollection(records, folderName, null);
    if (!records.length) showMusicToast('Không tìm thấy tệp nhạc được hỗ trợ.');
  }

  function createTrackRecord({ name, relativePath, sourceType, getFile }) {
    const fallbackTitle = stripFileExtension(name);
    return {
      id: relativePath,
      name,
      relativePath,
      sourceType,
      getFile,
      title: fallbackTitle,
      artist: '',
      metadataReady: false,
      metadataError: false
    };
  }

  function setTrackCollection(nextTracks, folderName, directoryId) {
    const rememberedTrackId = directoryId && settings.lastDirectoryId === directoryId ? settings.lastTrackId : null;
    stopPlaybackAndReleaseUrl();
    metadataGeneration += 1;
    tracks = nextTracks;
    currentIndex = -1;
    shuffleHistory = [];
    currentDirectoryId = directoryId;
    currentDirectoryName = folderName || '';
    sortTracks(false);

    if (directoryId) {
      settings.lastDirectoryId = directoryId;
      rememberRecentFolder({ id: directoryId, name: currentDirectoryName, lastUsed: Date.now() });
    }
    settings.lastFolderName = currentDirectoryName;
    saveMusicSettings();

    refs.musicFolderLabel.textContent = currentDirectoryName || 'Chưa chọn thư mục';
    refs.musicStatus.textContent = tracks.length ? `${tracks.length} bài hát` : 'Chưa có bài hát';
    refs.musicDropHint.textContent = tracks.length ? 'Kéo thư mục khác vào đây để thay playlist' : 'Hoặc kéo thả thư mục nhạc vào đây';
    renderRecentFolders();
    renderTrackContext();
    renderPlaylist();
    updateControlsAvailability();

    if (tracks.length) {
      const rememberedIndex = rememberedTrackId ? tracks.findIndex(track => track.id === rememberedTrackId) : -1;
      currentIndex = rememberedIndex >= 0 ? rememberedIndex : 0;
      renderTrackContext();
      hydrateMetadataInBackground(metadataGeneration);
      showMusicToast(`Đã tải ${tracks.length} bài hát.`);
    }
  }

  // ===== Đọc metadata nhẹ theo hàng đợi, không nạp audio vào RAM =====
  async function hydrateMetadataInBackground(generation) {
    const queue = tracks.slice();
    const workers = Array.from({ length: Math.min(3, queue.length) }, async () => {
      while (queue.length && generation === metadataGeneration) {
        const track = queue.shift();
        if (!track || track.metadataReady) continue;
        try {
          const file = await track.getFile();
          const metadata = await readAudioMetadata(file);
          track.title = metadata.title || stripFileExtension(track.name);
          track.artist = metadata.artist || '';
          track.metadataReady = true;
        } catch (error) {
          track.metadataReady = true;
          track.metadataError = true;
          console.debug('Không đọc được metadata:', track.name, error);
        }
        if (generation !== metadataGeneration) return;
        renderTrackContext();
        renderPlaylist();
      }
    });
    await Promise.all(workers);
    if (generation === metadataGeneration && settings.sortMode === 'title-asc') sortTracks(true);
  }

  async function readAudioMetadata(file) {
    const extension = getExtension(file.name);
    if (extension === 'mp3') return readMp3Metadata(file);
    if (extension === 'flac') return readFlacMetadata(file);
    if (extension === 'ogg') return readOggMetadata(file);
    if (extension === 'wav') return readWavMetadata(file);
    if (extension === 'm4a') return readM4aMetadata(file);
    return { title: '', artist: '' };
  }

  async function readMp3Metadata(file) {
    const head = await file.slice(0, Math.min(file.size, 1024 * 1024)).arrayBuffer();
    const bytes = new Uint8Array(head);
    let title = '';
    let artist = '';

    if (bytes.length >= 10 && ascii(bytes, 0, 3) === 'ID3') {
      const version = bytes[3];
      const tagSize = syncSafeInt(bytes, 6);
      let offset = 10;
      const limit = Math.min(bytes.length, 10 + tagSize);
      while (offset + 10 <= limit) {
        const frameId = ascii(bytes, offset, 4);
        if (!/^[A-Z0-9]{4}$/.test(frameId)) break;
        const frameSize = version === 4 ? syncSafeInt(bytes, offset + 4) : readUint32BE(bytes, offset + 4);
        if (!frameSize || offset + 10 + frameSize > bytes.length) break;
        const payload = bytes.slice(offset + 10, offset + 10 + frameSize);
        if (frameId === 'TIT2') title = decodeId3Text(payload);
        if (frameId === 'TPE1') artist = decodeId3Text(payload);
        if (title && artist) break;
        offset += 10 + frameSize;
      }
    }

    if ((!title || !artist) && file.size >= 128) {
      const tail = new Uint8Array(await file.slice(file.size - 128).arrayBuffer());
      if (ascii(tail, 0, 3) === 'TAG') {
        title ||= decodeLatin1(tail.slice(3, 33));
        artist ||= decodeLatin1(tail.slice(33, 63));
      }
    }
    return { title: cleanMetadataText(title), artist: cleanMetadataText(artist) };
  }

  async function readFlacMetadata(file) {
    const buffer = await file.slice(0, Math.min(file.size, 1024 * 1024)).arrayBuffer();
    const bytes = new Uint8Array(buffer);
    if (ascii(bytes, 0, 4) !== 'fLaC') return { title: '', artist: '' };
    let offset = 4;
    while (offset + 4 <= bytes.length) {
      const header = bytes[offset];
      const isLast = Boolean(header & 0x80);
      const blockType = header & 0x7f;
      const length = (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3];
      const start = offset + 4;
      const end = start + length;
      if (end > bytes.length) break;
      if (blockType === 4) return parseVorbisCommentBlock(bytes.slice(start, end));
      offset = end;
      if (isLast) break;
    }
    return { title: '', artist: '' };
  }

  async function readOggMetadata(file) {
    const buffer = await file.slice(0, Math.min(file.size, 1024 * 1024)).arrayBuffer();
    const bytes = new Uint8Array(buffer);
    const vorbisIndex = findByteSequence(bytes, [3, 118, 111, 114, 98, 105, 115]); // \x03vorbis
    if (vorbisIndex >= 0) return parseVorbisCommentBlock(bytes.slice(vorbisIndex + 7));
    const opusIndex = findAscii(bytes, 'OpusTags');
    if (opusIndex >= 0) return parseVorbisCommentBlock(bytes.slice(opusIndex + 8));
    return { title: '', artist: '' };
  }

  async function readWavMetadata(file) {
    const buffer = await file.slice(0, Math.min(file.size, 1024 * 1024)).arrayBuffer();
    const bytes = new Uint8Array(buffer);
    if (ascii(bytes, 0, 4) !== 'RIFF' || ascii(bytes, 8, 4) !== 'WAVE') return { title: '', artist: '' };
    let offset = 12;
    let title = '';
    let artist = '';
    while (offset + 8 <= bytes.length) {
      const chunkId = ascii(bytes, offset, 4);
      const size = readUint32LE(bytes, offset + 4);
      const start = offset + 8;
      const end = Math.min(bytes.length, start + size);
      if (chunkId === 'LIST' && ascii(bytes, start, 4) === 'INFO') {
        let infoOffset = start + 4;
        while (infoOffset + 8 <= end) {
          const infoId = ascii(bytes, infoOffset, 4);
          const infoSize = readUint32LE(bytes, infoOffset + 4);
          const infoStart = infoOffset + 8;
          const infoEnd = Math.min(end, infoStart + infoSize);
          const value = decodeLatin1(bytes.slice(infoStart, infoEnd));
          if (infoId === 'INAM') title = value;
          if (infoId === 'IART') artist = value;
          infoOffset = infoStart + infoSize + (infoSize % 2);
        }
      }
      offset = start + size + (size % 2);
    }
    return { title: cleanMetadataText(title), artist: cleanMetadataText(artist) };
  }

  async function readM4aMetadata(file) {
    const buffer = await file.slice(0, Math.min(file.size, 2 * 1024 * 1024)).arrayBuffer();
    const bytes = new Uint8Array(buffer);
    return {
      title: cleanMetadataText(readM4aTextAtom(bytes, [0xa9, 0x6e, 0x61, 0x6d])),
      artist: cleanMetadataText(readM4aTextAtom(bytes, [0xa9, 0x41, 0x52, 0x54]))
    };
  }

  function readM4aTextAtom(bytes, atomType) {
    const index = findByteSequence(bytes, atomType);
    if (index < 4) return '';
    const atomStart = index - 4;
    const atomSize = readUint32BE(bytes, atomStart);
    const atomEnd = Math.min(bytes.length, atomStart + atomSize);
    const dataIndex = findAscii(bytes, 'data', index + 4, atomEnd);
    if (dataIndex < 4) return '';
    const dataStart = dataIndex - 4;
    const dataSize = readUint32BE(bytes, dataStart);
    const contentStart = dataStart + 16;
    const contentEnd = Math.min(atomEnd, dataStart + dataSize);
    if (contentStart >= contentEnd) return '';
    return decodeUtf8(bytes.slice(contentStart, contentEnd));
  }

  function parseVorbisCommentBlock(bytes) {
    if (bytes.length < 8) return { title: '', artist: '' };
    let offset = 0;
    const vendorLength = readUint32LE(bytes, offset);
    offset += 4 + vendorLength;
    if (offset + 4 > bytes.length) return { title: '', artist: '' };
    const count = readUint32LE(bytes, offset);
    offset += 4;
    let title = '';
    let artist = '';
    for (let index = 0; index < count && offset + 4 <= bytes.length; index += 1) {
      const length = readUint32LE(bytes, offset);
      offset += 4;
      if (offset + length > bytes.length) break;
      const comment = decodeUtf8(bytes.slice(offset, offset + length));
      offset += length;
      const separator = comment.indexOf('=');
      if (separator < 1) continue;
      const key = comment.slice(0, separator).toUpperCase();
      const value = comment.slice(separator + 1);
      if (key === 'TITLE') title = value;
      if (key === 'ARTIST') artist = value;
    }
    return { title: cleanMetadataText(title), artist: cleanMetadataText(artist) };
  }

  // ===== Điều khiển phát nhạc: chỉ bài hiện tại có Object URL =====
  async function playTrack(index, { autoplay = true, rememberHistory = true } = {}) {
    if (!tracks.length) return;
    const normalizedIndex = normalizeIndex(index);
    if (normalizedIndex < 0) return;

    if (rememberHistory && currentIndex >= 0 && currentIndex !== normalizedIndex) {
      shuffleHistory.push(currentIndex);
      if (shuffleHistory.length > 100) shuffleHistory.shift();
    }

    currentIndex = normalizedIndex;
    const track = tracks[currentIndex];
    setLoadingState(`Đang mở “${track.title}”…`);
    try {
      const file = await track.getFile();
      releaseObjectUrl();
      currentObjectUrl = URL.createObjectURL(file);
      player.src = currentObjectUrl;
      player.load();
      settings.lastTrackId = track.id;
      saveMusicSettings();
      renderTrackContext();
      renderPlaylist();
      if (autoplay) await player.play();
    } catch (error) {
      console.error('Không thể phát bài hát:', error);
      showMusicToast('Không thể phát tệp nhạc này.');
      refs.musicStatus.textContent = 'Lỗi phát nhạc';
    }
  }

  async function togglePlayback() {
    if (!tracks.length) {
      showMusicToast('Hãy chọn thư mục nhạc trước.');
      return;
    }
    if (currentIndex < 0) {
      await playTrack(0);
      return;
    }
    if (!player.src) {
      await playTrack(currentIndex);
      return;
    }
    if (player.paused) await player.play().catch(handleAudioError);
    else player.pause();
  }

  function playNext() {
    if (!tracks.length) return;
    if (settings.shuffle && tracks.length > 1) {
      let next = currentIndex;
      while (next === currentIndex) next = Math.floor(Math.random() * tracks.length);
      playTrack(next);
      return;
    }
    const next = currentIndex + 1;
    if (next < tracks.length) playTrack(next);
    else if (settings.repeat === 'all') playTrack(0);
    else {
      player.pause();
      player.currentTime = 0;
      updateProgressUi();
    }
  }

  function playPrevious() {
    if (!tracks.length) return;
    if (player.currentTime > 4) {
      player.currentTime = 0;
      return;
    }
    if (settings.shuffle && shuffleHistory.length) {
      const previous = shuffleHistory.pop();
      playTrack(previous, { rememberHistory: false });
      return;
    }
    const previous = currentIndex - 1;
    if (previous >= 0) playTrack(previous);
    else if (settings.repeat === 'all') playTrack(tracks.length - 1);
  }

  function handleTrackEnded() {
    if (settings.repeat === 'one') {
      player.currentTime = 0;
      player.play().catch(handleAudioError);
      return;
    }
    playNext();
  }

  function toggleShuffle() {
    settings.shuffle = !settings.shuffle;
    shuffleHistory = [];
    saveMusicSettings();
    updateModeButtons();
  }

  function cycleRepeatMode() {
    settings.repeat = settings.repeat === 'off' ? 'all' : settings.repeat === 'all' ? 'one' : 'off';
    saveMusicSettings();
    updateModeButtons();
  }

  function updateModeButtons() {
    refs.musicShuffleBtn.classList.toggle('active', settings.shuffle);
    refs.musicShuffleBtn.setAttribute('aria-pressed', String(settings.shuffle));
    refs.musicShuffleBtn.dataset.tooltip = settings.shuffle ? 'Tắt phát ngẫu nhiên' : 'Bật phát ngẫu nhiên';

    const labels = { off: 'Tắt lặp', all: 'Lặp toàn bộ', one: 'Lặp một bài' };
    refs.musicRepeatBtn.classList.toggle('active', settings.repeat !== 'off');
    refs.musicRepeatBtn.dataset.mode = settings.repeat;
    refs.musicRepeatBtn.setAttribute('aria-label', labels[settings.repeat]);
    refs.musicRepeatBtn.dataset.tooltip = labels[settings.repeat];
    refs.musicRepeatBtn.innerHTML = settings.repeat === 'one' ? '↻<small>1</small>' : settings.repeat === 'all' ? '↻<small>A</small>' : '↻';
  }

  function seekTrack() {
    if (!Number.isFinite(player.duration)) return;
    player.currentTime = (Number(refs.musicProgress.value) / 1000) * player.duration;
  }

  function changeVolume() {
    player.volume = clamp(Number(refs.musicVolume.value), 0, 1);
    settings.volume = player.volume;
    saveMusicSettings();
  }

  function updateProgressUi() {
    const duration = Number.isFinite(player.duration) ? player.duration : 0;
    const current = Number.isFinite(player.currentTime) ? player.currentTime : 0;
    refs.musicProgress.value = duration ? String(Math.round((current / duration) * 1000)) : '0';
    refs.musicCurrentTime.textContent = formatAudioTime(current);
    refs.musicDuration.textContent = formatAudioTime(duration);
  }

  function updatePlaybackState() {
    refs.musicPlayPauseBtn.textContent = player.paused ? '▶' : '❚❚';
    refs.musicPlayPauseBtn.setAttribute('aria-label', player.paused ? 'Phát nhạc' : 'Tạm dừng');
    refs.musicPlayPauseBtn.dataset.tooltip = player.paused ? 'Phát nhạc' : 'Tạm dừng';
    refs.musicPlayer.classList.toggle('is-playing', !player.paused);
    if (currentIndex >= 0) refs.musicStatus.textContent = player.paused ? 'Đã tạm dừng' : 'Đang phát';
  }

  function renderEmptyPlayer() {
    refs.musicFolderLabel.textContent = settings.lastFolderName || 'Chưa chọn thư mục';
    refs.musicStatus.textContent = 'Chưa có bài hát';
    renderTrackContext();
    updateControlsAvailability();
  }

  function renderTrackContext() {
    const previous = getTrackAt(currentIndex - 1);
    const current = getTrackAt(currentIndex);
    const next = getTrackAt(currentIndex + 1);
    renderContextLine(refs.musicPrevLine, previous, 'Bài trước');
    renderContextLine(refs.musicCurrentLine, current, 'Chưa chọn bài');
    renderContextLine(refs.musicNextLine, next, 'Bài tiếp theo');
  }

  function renderContextLine(element, track, fallback) {
    const title = track?.title || fallback;
    const artist = track?.artist || '';
    element.innerHTML = `<span class="music-line-title">${escapeHtml(title)}</span>${artist ? `<span class="music-line-artist">${escapeHtml(artist)}</span>` : ''}`;
    element.title = artist ? `${title} — ${artist}` : title;
  }

  // ===== Danh sách bài hát đầy đủ =====
  function openPlaylistDialog() {
    renderPlaylist();
    renderRecentFolders();
    refs.musicPlaylistDialog.showModal();
    requestAnimationFrame(scrollCurrentTrackIntoView);
  }

  function renderPlaylist() {
    refs.musicPlaylistFolder.textContent = currentDirectoryName || 'Chưa chọn thư mục';
    refs.musicPlaylistCount.textContent = `${tracks.length} bài`;
    refs.musicPlaylistEmpty.hidden = Boolean(tracks.length);
    refs.musicPlaylistList.innerHTML = tracks.map((track, index) => {
      const active = index === currentIndex;
      const artist = track.artist ? `<span class="playlist-track-artist">${escapeHtml(track.artist)}</span>` : '';
      return `<button class="playlist-track${active ? ' active' : ''}" type="button" data-track-index="${index}">
        <span class="playlist-track-number">${active && !player.paused ? '▶' : index + 1}</span>
        <span class="playlist-track-copy"><span class="playlist-track-title">${escapeHtml(track.title)}</span>${artist}<span class="playlist-track-path">${escapeHtml(track.relativePath)}</span></span>
      </button>`;
    }).join('');
  }

  function handlePlaylistClick(event) {
    const row = event.target.closest('[data-track-index]');
    if (!row) return;
    playTrack(Number(row.dataset.trackIndex));
  }

  function scrollCurrentTrackIntoView() {
    refs.musicPlaylistList.querySelector('.playlist-track.active')?.scrollIntoView({ block: 'center' });
  }

  function changeSortMode() {
    settings.sortMode = refs.musicSortSelect.value === 'title-asc' ? 'title-asc' : 'file-asc';
    sortTracks(true);
    saveMusicSettings();
  }

  function sortTracks(preserveCurrent) {
    const currentId = preserveCurrent && currentIndex >= 0 ? tracks[currentIndex]?.id : null;
    const compare = settings.sortMode === 'title-asc'
      ? (a, b) => compareVietnamese(a.title, b.title) || compareVietnamese(a.name, b.name)
      : (a, b) => compareVietnamese(a.relativePath, b.relativePath);
    tracks.sort(compare);
    if (currentId) currentIndex = tracks.findIndex(track => track.id === currentId);
    renderTrackContext();
    renderPlaylist();
  }

  async function restoreMostRecentFolder() {
    const recent = settings.recentFolders[0];
    if (!recent) return;
    refs.musicRecentBtn.hidden = false;
    refs.musicRecentName.textContent = recent.name;
    try {
      const handle = await getDirectoryHandle(recent.id);
      if (!handle) return;
      const permission = await queryReadPermission(handle);
      if (permission === 'granted') {
        await loadTracksFromDirectoryHandle(handle, recent.id);
      }
    } catch (error) {
      console.debug('Không thể tự mở thư mục gần đây:', error);
    }
  }

  async function reopenMostRecentFolder() {
    const recent = settings.recentFolders[0];
    if (!recent) return browseMusicDirectory();
    await openRecentFolderById(recent.id);
  }

  async function openSelectedRecentFolder() {
    const id = refs.musicRecentSelect.value;
    if (!id) return;
    await openRecentFolderById(id);
  }

  async function openRecentFolderById(id) {
    try {
      const handle = await getDirectoryHandle(id);
      if (!handle) {
        showMusicToast('Quyền thư mục gần đây không còn. Hãy Browse lại thư mục.');
        return;
      }
      await loadTracksFromDirectoryHandle(handle, id);
    } catch (error) {
      console.error('Không thể mở thư mục gần đây:', error);
      showMusicToast('Không thể mở thư mục gần đây.');
    }
  }

  function renderRecentFolders() {
    const recent = settings.recentFolders || [];
    const latest = recent[0];
    refs.musicRecentBtn.hidden = !latest;
    refs.musicRecentName.textContent = latest?.name || '';
    refs.musicRecentSelect.innerHTML = recent.length
      ? recent.map(item => `<option value="${escapeAttr(item.id)}">${escapeHtml(item.name)}</option>`).join('')
      : '<option value="">Chưa có thư mục gần đây</option>';
    refs.musicOpenRecentBtn.disabled = !recent.length;
  }

  function rememberRecentFolder(folder) {
    const next = [folder, ...settings.recentFolders.filter(item => item.id !== folder.id)]
      .sort((a, b) => b.lastUsed - a.lastUsed)
      .slice(0, MAX_RECENT_FOLDERS);
    settings.recentFolders = next;
    settings.lastDirectoryId = folder.id;
    settings.lastFolderName = folder.name;
    saveMusicSettings();
  }

  // ===== Kéo thả thư mục/tệp nhạc =====
  async function handleFolderDrop(event) {
    event.preventDefault();
    refs.musicPlayer.classList.remove('drag-over');
    const items = [...(event.dataTransfer?.items || [])];
    if (!items.length) return;

    try {
      if (items[0].getAsFileSystemHandle) {
        const handles = (await Promise.all(items.map(item => item.getAsFileSystemHandle()))).filter(Boolean);
        const directory = handles.find(handle => handle.kind === 'directory');
        if (directory) {
          await rememberAndLoadDirectory(directory);
          return;
        }
        const files = [];
        for (const handle of handles) {
          if (handle.kind !== 'file' || !isSupportedAudioName(handle.name)) continue;
          files.push(createTrackRecord({ name: handle.name, relativePath: handle.name, sourceType: 'handle', getFile: () => handle.getFile() }));
        }
        setTrackCollection(files, 'Tệp đã thả', null);
        return;
      }

      const entries = items.map(item => item.webkitGetAsEntry?.()).filter(Boolean);
      if (entries.length) {
        const records = [];
        for (const entry of entries) await collectTracksFromLegacyEntry(entry, '', records);
        const folderName = entries.find(entry => entry.isDirectory)?.name || 'Tệp đã thả';
        setTrackCollection(records, folderName, null);
        return;
      }

      const files = [...(event.dataTransfer?.files || [])].filter(file => isSupportedAudioName(file.name));
      setTrackCollection(files.map(file => createTrackRecord({ name: file.name, relativePath: file.name, sourceType: 'file', getFile: async () => file })), 'Tệp đã thả', null);
    } catch (error) {
      console.error('Không thể đọc thư mục được kéo thả:', error);
      showMusicToast('Không thể đọc thư mục được kéo thả.');
    }
  }

  async function collectTracksFromLegacyEntry(entry, parentPath, output) {
    const path = parentPath ? `${parentPath}/${entry.name}` : entry.name;
    if (entry.isFile) {
      if (!isSupportedAudioName(entry.name)) return;
      const file = await legacyFileEntryToFile(entry);
      output.push(createTrackRecord({ name: file.name, relativePath: path, sourceType: 'file', getFile: async () => file }));
      return;
    }
    if (!entry.isDirectory) return;
    const children = await readAllLegacyDirectoryEntries(entry.createReader());
    for (const child of children) await collectTracksFromLegacyEntry(child, path, output);
  }

  function legacyFileEntryToFile(entry) {
    return new Promise((resolve, reject) => entry.file(resolve, reject));
  }

  async function readAllLegacyDirectoryEntries(reader) {
    const entries = [];
    while (true) {
      const batch = await new Promise((resolve, reject) => reader.readEntries(resolve, reject));
      if (!batch.length) break;
      entries.push(...batch);
    }
    return entries;
  }

  function handleDragOver(event) {
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    refs.musicPlayer.classList.add('drag-over');
  }

  function handleDragLeave(event) {
    event.preventDefault();
    if (event.type === 'dragleave' && refs.musicPlayer.contains(event.relatedTarget)) return;
    refs.musicPlayer.classList.remove('drag-over');
  }

  function handleKeyboardShortcut(event) {
    if (!event.ctrlKey || event.code !== 'Space') return;
    event.preventDefault();
    togglePlayback();
  }

  function handleAudioError(error) {
    if (error instanceof Event) console.warn('Trình duyệt không phát được định dạng này:', player.error);
    else console.warn('Lỗi phát nhạc:', error);
    refs.musicStatus.textContent = 'Không phát được tệp';
    updatePlaybackState();
  }

  function updateControlsAvailability() {
    const disabled = !tracks.length;
    [refs.musicPrevBtn, refs.musicPlayPauseBtn, refs.musicNextBtn, refs.musicShuffleBtn, refs.musicRepeatBtn, refs.musicPlaylistBtn].forEach(button => {
      button.disabled = disabled;
    });
    refs.musicProgress.disabled = disabled;
  }

  function setLoadingState(message) {
    refs.musicStatus.textContent = message;
  }

  function getTrackAt(index) {
    return index >= 0 && index < tracks.length ? tracks[index] : null;
  }

  function normalizeIndex(index) {
    const number = Number(index);
    if (!Number.isInteger(number) || number < 0 || number >= tracks.length) return -1;
    return number;
  }

  function stopPlaybackAndReleaseUrl() {
    player.pause();
    player.removeAttribute('src');
    player.load();
    releaseObjectUrl();
    updateProgressUi();
    updatePlaybackState();
  }

  function releaseObjectUrl() {
    if (!currentObjectUrl) return;
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = '';
  }

  function cleanupMusicPlayer() {
    settings.volume = player.volume;
    saveMusicSettings();
    releaseObjectUrl();
  }

  // ===== Lưu cài đặt nhạc trong localStorage =====
  function loadMusicSettings() {
    const defaults = {
      settingsVersion: MUSIC_SETTINGS_VERSION,
      volume: 0.72,
      shuffle: false,
      repeat: 'all',
      sortMode: 'file-asc',
      lastDirectoryId: null,
      lastFolderName: '',
      lastTrackId: null,
      recentFolders: []
    };
    try {
      const raw = JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY) || 'null');
      // Nâng dữ liệu cũ lên v2: lần đầu cập nhật sẽ bật Repeat All mặc định.
      // Sau lần này, lựa chọn người dùng tiếp tục được lưu bình thường.
      const isLegacySettings = Number(raw?.settingsVersion || 0) < MUSIC_SETTINGS_VERSION;
      const repeatMode = isLegacySettings
        ? 'all'
        : (['off','all','one'].includes(raw?.repeat) ? raw.repeat : defaults.repeat);
      return {
        ...defaults,
        ...(raw || {}),
        settingsVersion: MUSIC_SETTINGS_VERSION,
        volume: clamp(Number(raw?.volume ?? defaults.volume), 0, 1),
        shuffle: Boolean(raw?.shuffle),
        repeat: repeatMode,
        sortMode: raw?.sortMode === 'title-asc' ? 'title-asc' : 'file-asc',
        recentFolders: Array.isArray(raw?.recentFolders) ? raw.recentFolders.filter(item => item?.id && item?.name).slice(0, MAX_RECENT_FOLDERS) : []
      };
    } catch (error) {
      console.warn('Không đọc được cài đặt nhạc:', error);
      return defaults;
    }
  }

  function saveMusicSettings() {
    try {
      localStorage.setItem(MUSIC_STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn('Không lưu được cài đặt nhạc:', error);
    }
  }

  async function clearAllMusicData() {
    stopPlaybackAndReleaseUrl();
    localStorage.removeItem(MUSIC_STORAGE_KEY);
    try {
      await new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(MUSIC_DB_NAME);
        request.onsuccess = resolve;
        request.onerror = () => reject(request.error);
        request.onblocked = resolve;
      });
    } catch (error) {
      console.warn('Không xóa được dữ liệu thư mục nhạc:', error);
    }
    settings = loadMusicSettings();
    tracks = [];
    currentIndex = -1;
    currentDirectoryId = null;
    currentDirectoryName = '';
    renderEmptyPlayer();
    renderRecentFolders();
    renderPlaylist();
  }

  function exposePublicApi() {
    window.KanbanMusicPlayer = {
      clearAllData: clearAllMusicData,
      togglePlayback,
      browseDirectory: browseMusicDirectory
    };
  }

  // ===== IndexedDB dùng để lưu FileSystemDirectoryHandle =====
  function openMusicDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(MUSIC_DB_NAME, MUSIC_DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(MUSIC_HANDLE_STORE)) db.createObjectStore(MUSIC_HANDLE_STORE, { keyPath: 'id' });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async function putDirectoryHandle(id, handle) {
    const db = await openMusicDb();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction(MUSIC_HANDLE_STORE, 'readwrite');
      transaction.objectStore(MUSIC_HANDLE_STORE).put({ id, handle, name: handle.name, updatedAt: Date.now() });
      transaction.oncomplete = resolve;
      transaction.onerror = () => reject(transaction.error);
    });
    db.close();
  }

  async function getDirectoryHandle(id) {
    const db = await openMusicDb();
    const record = await new Promise((resolve, reject) => {
      const request = db.transaction(MUSIC_HANDLE_STORE, 'readonly').objectStore(MUSIC_HANDLE_STORE).get(id);
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
    db.close();
    return record?.handle || null;
  }

  async function queryReadPermission(handle) {
    if (!handle?.queryPermission) return 'granted';
    return handle.queryPermission({ mode: 'read' });
  }

  async function ensureReadPermission(handle) {
    const current = await queryReadPermission(handle);
    if (current === 'granted') return true;
    if (!handle?.requestPermission) return false;
    return (await handle.requestPermission({ mode: 'read' })) === 'granted';
  }

  function makeDirectoryId(name) {
    const safe = String(name || 'music').toLocaleLowerCase('vi').replace(/[^a-z0-9à-ỹ]+/gi, '-').replace(/^-|-$/g, '');
    return `music-folder-${safe || 'folder'}-${Date.now()}`;
  }

  function isSupportedAudioName(name) {
    return SUPPORTED_EXTENSIONS.has(getExtension(name));
  }

  function getExtension(name) {
    return String(name || '').split('.').pop().toLocaleLowerCase('en');
  }

  function stripFileExtension(name) {
    return String(name || '').replace(/\.[^.]+$/, '').trim();
  }

  function compareVietnamese(a, b) {
    return String(a || '').localeCompare(String(b || ''), 'vi', { sensitivity: 'base', numeric: true });
  }

  function formatAudioTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const total = Math.floor(seconds);
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const secs = total % 60;
    return hours ? `${hours}:${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}` : `${minutes}:${String(secs).padStart(2,'0')}`;
  }

  function decodeId3Text(payload) {
    if (!payload.length) return '';
    const encoding = payload[0];
    const data = payload.slice(1);
    if (encoding === 0) return decodeLatin1(data);
    if (encoding === 3) return decodeUtf8(data);
    if (encoding === 2) return decodeUtf16Be(data);
    if (encoding === 1) {
      if (data[0] === 0xff && data[1] === 0xfe) return new TextDecoder('utf-16le').decode(data.slice(2));
      if (data[0] === 0xfe && data[1] === 0xff) return decodeUtf16Be(data.slice(2));
      return new TextDecoder('utf-16le').decode(data);
    }
    return '';
  }

  function decodeLatin1(bytes) {
    return new TextDecoder('windows-1252').decode(bytes);
  }

  function decodeUtf8(bytes) {
    return new TextDecoder('utf-8').decode(bytes);
  }

  function decodeUtf16Be(bytes) {
    const swapped = new Uint8Array(bytes.length - (bytes.length % 2));
    for (let index = 0; index < swapped.length; index += 2) {
      swapped[index] = bytes[index + 1];
      swapped[index + 1] = bytes[index];
    }
    return new TextDecoder('utf-16le').decode(swapped);
  }

  function cleanMetadataText(value) {
    return String(value || '').replace(/\0/g, '').trim();
  }

  function ascii(bytes, start, length) {
    let value = '';
    for (let index = start; index < start + length && index < bytes.length; index += 1) value += String.fromCharCode(bytes[index]);
    return value;
  }

  function syncSafeInt(bytes, offset) {
    return ((bytes[offset] & 0x7f) << 21) | ((bytes[offset + 1] & 0x7f) << 14) | ((bytes[offset + 2] & 0x7f) << 7) | (bytes[offset + 3] & 0x7f);
  }

  function readUint32BE(bytes, offset) {
    return (((bytes[offset] << 24) >>> 0) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0;
  }

  function readUint32LE(bytes, offset) {
    return (bytes[offset] | (bytes[offset + 1] << 8) | (bytes[offset + 2] << 16) | ((bytes[offset + 3] << 24) >>> 0)) >>> 0;
  }

  function findAscii(bytes, text, start = 0, end = bytes.length) {
    return findByteSequence(bytes, [...text].map(char => char.charCodeAt(0)), start, end);
  }

  function findByteSequence(bytes, sequence, start = 0, end = bytes.length) {
    outer: for (let index = start; index <= end - sequence.length; index += 1) {
      for (let offset = 0; offset < sequence.length; offset += 1) {
        if (bytes[index + offset] !== sequence[offset]) continue outer;
      }
      return index;
    }
    return -1;
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, Number.isFinite(value) ? value : min));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
  }

  function escapeAttr(value) {
    return escapeHtml(value).replace(/`/g, '&#96;');
  }

  function showMusicToast(message) {
    const sharedToast = document.getElementById('toast');
    if (sharedToast) {
      clearTimeout(toastTimer);
      sharedToast.textContent = message;
      sharedToast.classList.add('show');
      toastTimer = setTimeout(() => sharedToast.classList.remove('show'), 2400);
      return;
    }
    console.info(message);
  }
})();
