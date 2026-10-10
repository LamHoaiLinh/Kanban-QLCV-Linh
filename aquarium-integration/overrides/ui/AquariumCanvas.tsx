// Mounts the 3D engine into a plain div and wires the Zustand store to it.
// React never re-renders the canvas — the engine runs its own loop; this
// component only shuttles state changes across the boundary.

import { useEffect, useRef } from 'react';
import { Engine } from '../engine/Engine';
import { setEngine, getEngine } from '../engine/engineRef';
import { useStore } from '../state/store';
import { normalizeStock, effectiveFishCap } from '../data/stocking';

// Keep all stock changes in one place so buttons and mouse shortcuts behave identically.
let mostRecentAdded:string|null=null;
export function addAquariumFish(clientX?:number,clientY?:number):void{
  const s=useStore.getState();
  const total=Object.values(s.config.fish).reduce((sum,n)=>sum+n,0);
  if(total>=effectiveFishCap(s.config)){s.showToast('Đã đạt sức chứa của bể. Hãy tăng dung tích hoặc bớt cá.');return;}
  const choices=Object.entries(s.config.fish).filter(([id,n])=>n>0&&!id.includes('snail')&&!id.includes('shrimp'));
  const id=choices.length?choices[Math.floor(Math.random()*choices.length)][0]
    :(s.config.water==='freshwater'?'guppy':'green-chromis');
  const proposed=normalizeStock({...s.config,fish:{...s.config.fish,[id]:(s.config.fish[id]||0)+1}});
  if((proposed.fish[id]||0)<=(s.config.fish[id]||0)){s.showToast('Loài này đã đạt giới hạn phù hợp với bể.');return;}
  getEngine()?.queueFishDrop(clientX,clientY);
  s.setFishCount(id,(s.config.fish[id]||0)+1);
  mostRecentAdded=id;
  s.showToast('Cá mới đang rơi vào hồ');
}
export function removeAquariumFish():void{
  const s=useStore.getState();
  const fish=Object.entries(s.config.fish)
    .filter(([id,n])=>n>0&&!id.includes('snail')&&!id.includes('shrimp'));
  if(!fish.length){s.showToast('Không còn cá để bớt');return;}
  const id=mostRecentAdded&&s.config.fish[mostRecentAdded]>0?mostRecentAdded:
    fish.sort((a,b)=>b[1]-a[1])[0][0];
  s.setFishCount(id,(s.config.fish[id]||0)-1);
  s.showToast('Đã đưa bớt 1 con cá ra khỏi hồ');
}

export function AquariumCanvas() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let engine: Engine;
    try {
      engine = new Engine(host);
    } catch (err) {
      // WebGL unavailable (very old device / disabled). Show a friendly note.
      console.error('WebGL init failed:', err);
      host.innerHTML =
        '<div style="display:grid;place-items:center;height:100%;color:#8fa8b8;font-size:15px;padding:24px;text-align:center">' +
        'This aquarium needs WebGL, which your browser has disabled or doesn’t support.</div>';
      return;
    }
    setEngine(engine);

    // Engine → store: fish taps select + follow; auto-quality notifies.
    engine.callbacks.onFishPicked = (key) => {
      const s = useStore.getState();
      if (key) {
        s.set({ selectedFishKey: key, followFishKey: key });
        engine.followFish(key);
      } else if (s.selectedFishKey) {
        s.set({ selectedFishKey: null, followFishKey: null });
        engine.followFish(null);
      }
    };
    engine.callbacks.onAddFish=addAquariumFish;
    engine.callbacks.onRemoveFish=removeAquariumFish;
    engine.callbacks.onFed=(kind,count)=>window.dispatchEvent(new CustomEvent('kanaquarium-fed',{detail:{kind,count}}));
    engine.callbacks.onAutoQuality = (tier) => {
      useStore.getState().showToast(`Đã giảm chất lượng xuống ${tier} để giữ chuyển động mượt. Dữ liệu hồ đã lưu vẫn được giữ nguyên.`);
    };

    // Initial sync + granular subscriptions (store → engine).
    if(new URLSearchParams(location.search).get('qa')==='1')Object.assign(window,{
      __kan42Store:(action:string)=>{
        const s=useStore.getState();
        if(action==='exercise'){
          s.setConfig({gallons:180,fish:{'neon-tetra':100},fishNames:{'neon-tetra:0':'Linh'}});
          s.saveTank('QA42');const saved=JSON.stringify(useStore.getState().savedTanks.QA42);
          s.setConfig({gallons:5});const trimmed=Object.values(useStore.getState().config.fish).reduce((a,b)=>a+b,0);
          const savedUnchanged=saved===JSON.stringify(useStore.getState().savedTanks.QA42);
          s.undoResize();const restored=Object.values(useStore.getState().config.fish).reduce((a,b)=>a+b,0);
          s.loadTank('QA42');const reloaded=Object.values(useStore.getState().config.fish).reduce((a,b)=>a+b,0);
          s.deleteTank('QA42');return {savedUnchanged,trimmed,restored,reloaded};
        }
        return {config:s.config,savedTanks:s.savedTanks};
      }
    });
    const s0 = useStore.getState();
    engine.setQuality(s0.quality);
    engine.applyConfig(s0.config);
    engine.setReducedMotion(s0.reducedMotion);
    engine.setSoftFins(s0.softFinsOn);
    engine.setEcoMode(s0.ecoMode);
    engine.setCameraMode(s0.cameraMode);
    engine.rig.smartCinema=s0.smartCinema;
    engine.rig.onManual=()=>useStore.getState().set({cameraMode:'orbit',followFishKey:null});

    let resizeTimer:ReturnType<typeof setTimeout>|undefined;
    const unsub = useStore.subscribe((state, prev) => {
      if (state.config !== prev.config) {
        clearTimeout(resizeTimer);
        const sliderResize=state.config.gallons!==prev.config.gallons&&state.config.name===prev.config.name&&state.config.water===prev.config.water&&state.config.decor===prev.config.decor&&state.config.flora===prev.config.flora;
        if(sliderResize)resizeTimer=setTimeout(()=>engine.applyConfig(useStore.getState().config),180);
        else engine.applyConfig(state.config);
      }
      if(state.smartCinema!==prev.smartCinema)engine.rig.smartCinema=state.smartCinema;
      if (state.quality !== prev.quality) engine.setQuality(state.quality);
      if (state.feedMode !== prev.feedMode) engine.setFeedMode(state.feedMode);
      if (state.reducedMotion !== prev.reducedMotion) engine.setReducedMotion(state.reducedMotion);
      if (state.softFinsOn !== prev.softFinsOn) engine.setSoftFins(state.softFinsOn);
      if (state.ecoMode !== prev.ecoMode) engine.setEcoMode(state.ecoMode);
      if (state.cameraMode !== prev.cameraMode && state.cameraMode !== 'follow') {
        engine.setCameraMode(state.cameraMode);
      }
      if (state.followFishKey !== prev.followFishKey) {
        engine.followFish(state.followFishKey);
      }
    });

    return () => {
      clearTimeout(resizeTimer);
      unsub();
      setEngine(null);
      engine.dispose();
    };
  }, []);

  // Also react to OS-level reduced-motion changes live.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => useStore.getState().set({ reducedMotion: mq.matches });
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  return <div id="canvas-host" ref={hostRef} aria-label="Aquarium view. Drag to look around, scroll to zoom." role="img" />;
}

export { getEngine };
