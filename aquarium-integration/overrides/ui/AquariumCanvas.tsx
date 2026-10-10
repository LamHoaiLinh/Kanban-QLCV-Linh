// Mounts the 3D engine into a plain div and wires the Zustand store to it.
// React never re-renders the canvas — the engine runs its own loop; this
// component only shuttles state changes across the boundary.

import { useEffect, useRef } from 'react';
import { Engine } from '../engine/Engine';
import { setEngine, getEngine } from '../engine/engineRef';
import { useStore } from '../state/store';

// Keep all stock changes in one place so buttons and mouse shortcuts behave identically.
let mostRecentAdded:string|null=null;
export function addAquariumFish(clientX?:number,clientY?:number):void{
  const s=useStore.getState();
  const total=Object.values(s.config.fish).reduce((sum,n)=>sum+n,0);
  if(total>=60){s.showToast('Đã đủ 60 sinh vật, hãy bớt cá trước');return;}
  const choices=Object.entries(s.config.fish).filter(([id,n])=>n>0&&!id.includes('snail')&&!id.includes('shrimp'));
  const id=choices.length?choices[Math.floor(Math.random()*choices.length)][0]
    :(s.config.water==='freshwater'?'guppy':'green-chromis');
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
      useStore.getState().showToast(`Lowered quality to “${tier}” to keep things smooth. You can pin a tier in Settings.`);
    };

    // Initial sync + granular subscriptions (store → engine).
    const s0 = useStore.getState();
    engine.setQuality(s0.quality);
    engine.applyConfig(s0.config);
    engine.setReducedMotion(s0.reducedMotion);
    engine.setEcoMode(s0.ecoMode);
    engine.setCameraMode(s0.cameraMode);

    const unsub = useStore.subscribe((state, prev) => {
      if (state.config !== prev.config) engine.applyConfig(state.config);
      if (state.quality !== prev.quality) engine.setQuality(state.quality);
      if (state.feedMode !== prev.feedMode) engine.setFeedMode(state.feedMode);
      if (state.reducedMotion !== prev.reducedMotion) engine.setReducedMotion(state.reducedMotion);
      if (state.ecoMode !== prev.ecoMode) engine.setEcoMode(state.ecoMode);
      if (state.cameraMode !== prev.cameraMode && state.cameraMode !== 'follow') {
        engine.setCameraMode(state.cameraMode);
      }
      if (state.followFishKey !== prev.followFishKey) {
        engine.followFish(state.followFishKey);
      }
    });

    return () => {
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
