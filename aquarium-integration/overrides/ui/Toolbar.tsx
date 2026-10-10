// Bottom toolbar: the always-available quick actions.

import { useStore } from '../state/store';
import { getEngine } from '../engine/engineRef';
import { audioEngine } from '../audio/AudioEngine';
import { isNativeIOS, nativeSaveImage } from '../platform/native';

export function Toolbar() {
  const feedMode = useStore((s) => s.feedMode);
  const cameraMode = useStore((s) => s.cameraMode);
  const audioOn = useStore((s) => s.audioOn);
  const panelOpen = useStore((s) => s.panelOpen);
  const config = useStore((s) => s.config);
  const set = useStore((s) => s.set);
  const setConfig = useStore((s) => s.setConfig);
  const showToast = useStore((s) => s.showToast);

  const takePhoto = () => {
    const engine = getEngine();
    if (!engine) return;
    // Briefly hidden UI isn't needed — the canvas capture never includes DOM UI.
    const url = engine.screenshot();
    // In the iOS app an <a download> click does nothing — hand the PNG to the
    // native share sheet instead.
    if (isNativeIOS() && nativeSaveImage(url)) return;
    const a = document.createElement('a');
    a.href = url;
    a.download = `aquarium-${(config.name || 'tank').replace(/\s+/g, '-').toLowerCase()}.png`;
    a.click();
    showToast('Đã lưu ảnh hồ cá');
  };

  const toggleAudio = async () => {
    const next = !audioOn;
    set({ audioOn: next });
    // start() must happen inside this click handler (autoplay policy).
    await audioEngine.setEnabled(next);
    if (next) {
      audioEngine.setVolume(useStore.getState().audioVolume);
      audioEngine.setMusic(useStore.getState().musicOn);
    }
  };

  const isNight = config.dayNight === 'night';

  return (
    <div className="toolbar" role="toolbar" aria-label="Thanh điều khiển hồ cá">
      <button
        data-tip="Cho cá ăn (F)"
        className={feedMode ? 'active' : ''}
        aria-pressed={feedMode}
        onClick={() => set({ feedMode: !feedMode })}
      >🫘</button>
      <button
        data-tip={isNight ? 'Chuyển sang ngày' : 'Chuyển sang đêm'}
        onClick={() => setConfig({ dayNight: isNight ? 'day' : 'night' })}
      >{isNight ? '☀️' : '🌙'}</button>
      <button
        data-tip="Camera điện ảnh (C)"
        className={cameraMode === 'cinematic' ? 'active' : ''}
        aria-pressed={cameraMode === 'cinematic'}
        onClick={() => set({ cameraMode: cameraMode === 'cinematic' ? 'orbit' : 'cinematic' })}
      >🎥</button>
      <button data-tip={audioOn ? 'Tắt tiếng' : 'Bật âm thanh'} aria-pressed={audioOn} onClick={toggleAudio}>
        {audioOn ? '🔊' : '🔇'}
      </button>
      <button data-tip="Chụp ảnh hồ cá (P)" onClick={takePhoto}>📸</button>
      <div className="divider" aria-hidden />
      <button
        data-tip="Chỉ ngắm cá, ẩn giao diện (H)"
        onClick={() => set({ uiHidden: true, cameraMode: 'cinematic', panelOpen: false, selectedFishKey: null, followFishKey: null })}
      >🖥️</button>
      {/* The Fullscreen API doesn't exist in the iOS app's web view — and the
          app is already full-screen there — so the button only renders on web. */}
      {!isNativeIOS() && (
        <button
          data-tip="Toàn màn hình"
          onClick={() => {
            if (document.fullscreenElement) void document.exitFullscreen();
            else void document.documentElement.requestFullscreen?.();
          }}
        >⛶</button>
      )}
      {!panelOpen && (
        <button data-tip="Tùy chỉnh bể" onClick={() => set({ panelOpen: true })}>🛠️</button>
      )}
    </div>
  );
}
