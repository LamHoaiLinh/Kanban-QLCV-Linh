// App shell: canvas underneath, UI floating above, global keyboard shortcuts,
// screensaver/kiosk handling, toast notifications.

import { useEffect, useRef, useState } from 'react';
import { AquariumCanvas, addAquariumFish, removeAquariumFish } from './ui/AquariumCanvas';
import { ControlPanel } from './ui/ControlPanel';
import { Toolbar } from './ui/Toolbar';
import { InfoCard } from './ui/InfoCard';
import { Hud } from './ui/Hud';
import { useStore } from './state/store';
import { getEngine } from './engine/engineRef';
import { audioEngine } from './audio/AudioEngine';

export default function App() {
  const uiHidden = useStore((s) => s.uiHidden);
  const panelOpen = useStore((s) => s.panelOpen);
  const showHud = useStore((s) => s.showHud);
  const feedMode = useStore((s) => s.feedMode);
  const toast = useStore((s) => s.toast);
  const audioVolume = useStore((s) => s.audioVolume);
  const musicOn = useStore((s) => s.musicOn);
  const set = useStore((s) => s.set);
  const [revealVisible, setRevealVisible] = useState(false);
  const [foodClicks,setFoodClicks]=useState(0);
  const fishTotal=useStore(s=>Object.values(s.config.fish).reduce((total,n)=>total+n,0));
  const embedded=new URLSearchParams(location.search).has('kanban');
  useEffect(()=>{
    const onFeed=(e:Event)=>setFoodClicks((e as CustomEvent<{count:number}>).detail.count);
    window.addEventListener('kanaquarium-fed',onFeed);
    return ()=>window.removeEventListener('kanaquarium-fed',onFeed);
  },[]);
  const revealTimer = useRef<ReturnType<typeof setTimeout>>();

  // Kiosk mode: ?kiosk=1 starts full-screen-quiet with a cinematic camera —
  // perfect for a TV or wall display.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('kiosk')) {
      set({ uiHidden: true, cameraMode: 'cinematic', panelOpen: false });
    }
  }, [set]);

  // Embedded launch: always present the setup panel on entry, while preserving
  // the existing tank, creatures, and all durable settings.
  useEffect(() => {
    if(embedded) set({uiHidden:false,panelOpen:true});
  }, [embedded,set]);

  // Volume/music settings → audio engine (audio starts from the toolbar tap).
  useEffect(() => { audioEngine.setVolume(audioVolume); }, [audioVolume]);
  useEffect(() => { audioEngine.setMusic(musicOn); }, [musicOn]);

  // Global keyboard shortcuts (skipped while typing in an input).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;
      const s = useStore.getState();
      if(e.key==='Escape'&&new URLSearchParams(location.search).has('kanban')&&window.parent!==window){
        e.preventDefault();window.parent.postMessage({type:'aquarium-game-close'},location.origin);return;
      }
      switch (e.key.toLowerCase()) {
        case 'h':
          set({ uiHidden: !s.uiHidden, ...(s.uiHidden ? {} : { panelOpen: false }) });
          break;
        case 'f':
          set({ feedMode: !s.feedMode });
          break;
        case 'c':
          set({ cameraMode: s.cameraMode === 'cinematic' ? 'orbit' : 'cinematic' });
          break;
        case 'p': {
          const engine = getEngine();
          if (engine) {
            const a = document.createElement('a');
            a.href = engine.screenshot();
            a.download = 'aquarium.png';
            a.click();
          }
          break;
        }
        case 'escape':
          if (s.selectedFishKey) set({ selectedFishKey: null, followFishKey: null });
          else if (s.uiHidden) set({ uiHidden: false });
          else set({ panelOpen: false });
          break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [set]);

  // While the UI is hidden, moving the pointer briefly reveals an exit button.
  useEffect(() => {
    if (!uiHidden) return;
    const onMove = () => {
      setRevealVisible(true);
      clearTimeout(revealTimer.current);
      revealTimer.current = setTimeout(() => setRevealVisible(false), 2500);
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      clearTimeout(revealTimer.current);
    };
  }, [uiHidden]);

  return (
    <>
      <AquariumCanvas />
      {embedded && (<>
        <div className="kanban-aquarium-help">Trái: thả thức ăn · Mỗi 10 lần: bánh cá/gấu · Phải: thêm cá · Shift + phải: bớt cá · ESC: về KanBan</div>
        <div className="kanban-aquarium-stock">
          <button title="Bớt 1 con cá (Shift + chuột phải)" aria-label="Bớt một cá" onClick={removeAquariumFish}>−</button>
          <span>Cá: <strong>{fishTotal}</strong>/60</span>
          <button title="Thêm cá, có hiệu ứng rơi" aria-label="Thêm một cá" disabled={fishTotal>=60} onClick={()=>addAquariumFish()}>+</button>
          <span className="kanban-aquarium-feed-count">Đã thả: {foodClicks} · Còn {10-foodClicks%10} lượt đến bánh</span>
        </div>
        <button className="kanban-aquarium-exit" title="Về KanBan (ESC)" onClick={()=>window.parent.postMessage({type:'aquarium-game-close'},location.origin)}>✕</button>
      </>)}
      {!uiHidden && (
        <>
          <Toolbar />
          {panelOpen ? <ControlPanel /> : (
            <button className="open-panel" aria-label="Mở bảng cài đặt hồ cá" onClick={() => set({ panelOpen: true })}>🛠️</button>
          )}
          <InfoCard />
          {feedMode && <div className="feed-hint">Nhấp chuột để cho cá ăn · nhấn F để tắt</div>}
        </>
      )}
      {uiHidden && (
        <button
          className={`reveal ${revealVisible ? 'visible' : ''}`}
          onClick={() => set({ uiHidden: false })}
        >
          Hiện bảng điều khiển (H)
        </button>
      )}
      {showHud && <Hud />}
      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  );
}
