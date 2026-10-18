// Central app state (Zustand). React components subscribe to slices of this;
// the 3D engine subscribes once and rebuilds/retunes the scene when the tank
// config changes. Saved tanks + settings persist to localStorage automatically.

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CameraMode, DayNightMode, QualityTier, TankConfig } from '../types';
import { DEFAULT_TANK, PRESETS } from '../data/presets';
import { decodeShareHash } from './share';
import { speciesForWater } from '../data/species';
import { floraForWater } from '../data/flora';
import { decorForWater } from '../data/decor';
import { createRandomWaterTank } from '../data/randomWaterTank';
import { tankDims } from '../data/tanks';
import { normalizeStock, resizeStock } from '../data/stocking';
import type { EcoMode } from '../engine/Ecology';

export interface AppState {
  config: TankConfig;
  savedTanks: Record<string, TankConfig>;
  favoriteNames: string[];
  defaultFavorite: string | null;
  // Last independent setup for each water type; persisted across reloads.
  waterDrafts: Partial<Record<'freshwater' | 'saltwater', TankConfig>>;

  // Settings (persisted)
  quality: QualityTier | 'auto';
  audioOn: boolean;
  audioVolume: number;
  musicOn: boolean;
  ecoMode: EcoMode; // persisted, never affects saved tank schema

  // Session UI state (not persisted)
  cameraMode: CameraMode;
  followFishKey: string | null;      // "speciesId:index" while camera-following
  selectedFishKey: string | null;    // shows the info card
  uiHidden: boolean;                 // pure "just watch" mode
  panelOpen: boolean;
  showHud: boolean;                  // dev perf HUD
  reducedMotion: boolean;
  smartCinema: boolean;
  resizeSnapshot: TankConfig | null;
  undoResize: () => void;
  softFinsOn: boolean; // true = natural fin shader, false = original rigid fins
  feedMode: boolean;                 // next tap on the water drops food
  toast: string | null;

  // Actions
  setConfig: (patch: Partial<TankConfig>) => void;
  setWater: (water: 'freshwater' | 'saltwater') => void;
  restoreWaterDraft: () => void;
  randomizeSize: (gallons:number) => void;
  setFishCount: (id: string, count: number) => void;
  setFloraCount: (id: string, count: number) => void;
  toggleDecor: (id: string) => void;
  nameFish: (key: string, name: string) => void;
  applyPreset: (preset: TankConfig) => void;
  randomize: () => void;
  saveTank: (name: string) => void;
  loadTank: (name: string) => void;
  deleteTank: (name: string) => void;
  saveFavorite: (name: string) => void;
  toggleFavorite: (name: string) => void;
  setDefaultFavorite: (name: string | null) => void;
  set: (patch: Partial<AppState>) => void;
  showToast: (msg: string) => void;
}

// A share link (#t=...) overrides the persisted current tank on first load.
const sharedConfig = typeof window !== 'undefined' ? decodeShareHash() : null;

let toastTimer: ReturnType<typeof setTimeout> | undefined;

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      config: sharedConfig ?? DEFAULT_TANK,
      savedTanks: {},
      favoriteNames: [],
      defaultFavorite: null,
      waterDrafts: {},
      quality: 'auto',
      audioOn: false, // muted by default — browsers block autoplay anyway
      audioVolume: 0.6,
      musicOn: false,
      ecoMode: 'natural',
      cameraMode: 'orbit',
      followFishKey: null,
      selectedFishKey: null,
      uiHidden: false,
      panelOpen: new URLSearchParams(location.search).has('kanban')?true:(window.matchMedia?.('(min-width: 900px)').matches ?? true),
      showHud: false,
      reducedMotion: window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
      smartCinema: true,
      resizeSnapshot: null,
      undoResize: () => { const old=get().resizeSnapshot;if(old)set({config:old,resizeSnapshot:null,followFishKey:null,selectedFishKey:null}); },
      softFinsOn: true,
      feedMode: false,
      toast: null,

      setConfig: (patch) => {
        const before=get().config, original=get().resizeSnapshot;
        const volumeChange=patch.gallons!==undefined&&patch.gallons!==before.gallons;
        const explicitStock=patch.fish!==undefined||patch.water!==undefined;
        // Always derive the temporary display stock from the ORIGINAL aquarium,
        // never from the previously trimmed step of a dragged slider.
        const source=volumeChange&&!explicitStock&&original&&original.water===before.water
          ?original:before;
        const fitted=volumeChange&&!explicitStock
          ?resizeStock(source,patch.gallons!)
          :{...before,...patch};
        const next=volumeChange&&!explicitStock
          ?{...before,...patch,fish:fitted.fish,fishNames:fitted.fishNames}
          :fitted;
        const shrinking=volumeChange&&patch.gallons!<before.gallons;
        const returning=!!original&&volumeChange&&patch.gallons!>=original.gallons;
        const snapshot=explicitStock||returning?null
          :shrinking?(original??structuredClone(before)):original;
        set({
          config:next,resizeSnapshot:snapshot,
          ...(volumeChange?{followFishKey:null,selectedFishKey:null}:{})
        });
        if(volumeChange){
          const previousCount=Object.values(before.fish).reduce((a,b)=>a+b,0);
          const nextCount=Object.values(next.fish).reduce((a,b)=>a+b,0);
          const substituted=Object.keys(next.fish).some(id=>!source.fish[id]);
          if(shrinking&&previousCount>0&&substituted)
            get().showToast(`Hồ ${Math.round(patch.gallons!*3.785)} lít: đã chọn sinh vật nhỏ phù hợp. Phóng lớn sẽ khôi phục đàn cá cũ.`);
          else if(shrinking&&previousCount>nextCount)
            get().showToast(`Đã cân đối từ ${previousCount} xuống ${nextCount} sinh vật theo sức chứa. Phóng lớn sẽ khôi phục đàn cũ.`);
        }
      },

      // Switching ecosystems composes a fresh, stocked aquarium at the
      // current size, while keeping the old layout for explicit restoration.
      setWater: (water) => set((s) => {
        if (s.config.water === water) return s;
        return {
          waterDrafts:{...s.waterDrafts,[s.config.water]:structuredClone(s.config)},
          config:createRandomWaterTank(water,s.config.gallons),
          resizeSnapshot:null,followFishKey:null,selectedFishKey:null,
        };
      }),

      // Restore the user's former design only when requested.
      restoreWaterDraft: () => set((s) => {
        const saved=s.waterDrafts[s.config.water];
        if (!saved) return s;
        return {config:structuredClone(saved),resizeSnapshot:null,
          followFishKey:null,selectedFishKey:null};
      }),

      // Only explicit UI size changes create a NEW full random composition.
      // Slider previews still use setConfig() and keep the original snapshot.
      randomizeSize: (gallons) => set((s) => {
        const target=Math.max(5,Math.min(180,Math.round(gallons)));
        return {config:createRandomWaterTank(s.config.water,target),
          resizeSnapshot:structuredClone(s.resizeSnapshot??s.config),
          followFishKey:null,selectedFishKey:null};
      }),

      setFishCount: (id, count) =>
        set((s) => {
          const fish = { ...s.config.fish };
          // This is an interactive visualization, not a fish shop: the user
          // decides the count. Render performance limits are applied separately
          // by the engine; never discard the requested population here.
          if (count <= 0) delete fish[id];
          else fish[id] = Math.min(9999,Math.max(1,Math.floor(count)));
          return { config: { ...s.config, fish },resizeSnapshot:null };
        }),

      setFloraCount: (id, count) =>
        set((s) => {
          const flora = { ...s.config.flora };
          if (count <= 0) delete flora[id]; else flora[id] = Math.min(count, 24);
          return { config: { ...s.config, flora } };
        }),

      toggleDecor: (id) =>
        set((s) => ({
          config: {
            ...s.config,
            decor: s.config.decor.includes(id)
              ? s.config.decor.filter((d) => d !== id)
              : [...s.config.decor, id],
          },
        })),

      nameFish: (key, name) =>
        set((s) => ({
          config: { ...s.config, fishNames: { ...s.config.fishNames, [key]: name } },
        })),

      applyPreset: (preset) => set({ config: normalizeStock(structuredClone(preset)), resizeSnapshot:null,followFishKey: null, selectedFishKey: null }),

      // Curated theme first, then gentle variation. Unlike fully independent
      // random objects, these compositions keep foreground room for swimming.
      randomize: () => {
        const water=Math.random()<.7?'freshwater' as const:'saltwater' as const;
        const choices=PRESETS.filter(p=>p.water===water);
        const template=choices[Math.floor(Math.random()*choices.length)];
        const config=structuredClone(template);
        const species=speciesForWater(water);
        const fish:Record<string,number>={};
        for(const [id,amount] of Object.entries(config.fish)){
          const sp=species.find(s=>s.id===id);
          if(!sp)continue;
          fish[id]=Math.max(sp.minGroup,amount+Math.floor(Math.random()*5)-2);
        }
        config.fish=fish;
        for(const [id,amount] of Object.entries(config.flora))
          config.flora[id]=Math.max(1,amount+Math.floor(Math.random()*3)-1);
        config.name='Hồ cá ngẫu nhiên';
        set({config:normalizeStock(config),resizeSnapshot:null,followFishKey:null,selectedFishKey:null});
        get().showToast('Đã tạo hồ cá ngẫu nhiên theo bố cục '+template.name+'.');
      },

      saveTank: (name) =>
        set((s) => ({
          savedTanks: { ...s.savedTanks, [name]: { ...structuredClone(s.config), name } },
          config: { ...s.config, name },
        })),

      saveFavorite: (name) => set((s) => {
        const safeName=name.trim().slice(0,40) || 'Bể yêu thích';
        const existing={ ...s.savedTanks, [safeName]:{...structuredClone(s.config),name:safeName} };
        return {
          savedTanks:existing,
          favoriteNames:s.favoriteNames.includes(safeName)?s.favoriteNames:[...s.favoriteNames,safeName],
        };
      }),

      toggleFavorite: (name) => set((s) => {
        if(!s.savedTanks[name])return s;
        const wasFavorite=s.favoriteNames.includes(name);
        return {
          favoriteNames:wasFavorite?s.favoriteNames.filter(n=>n!==name):[...s.favoriteNames,name],
          defaultFavorite:wasFavorite && s.defaultFavorite===name?null:s.defaultFavorite,
        };
      }),

      setDefaultFavorite: (name) => set((s) => ({
        defaultFavorite:name && s.favoriteNames.includes(name) && !!s.savedTanks[name]?name:null,
      })),

      loadTank: (name) => {
        const saved = get().savedTanks[name];
        if(saved){
          const config=structuredClone(saved);
          if(config.name==='Surprise Tank'||config.name==='Hồ cá bất ngờ')
            config.name='Hồ cá ngẫu nhiên';
          set({config,resizeSnapshot:null,followFishKey:null,selectedFishKey:null});
        }
      },

      deleteTank: (name) =>
        set((s) => {
          const savedTanks = { ...s.savedTanks };
          delete savedTanks[name];
          return { savedTanks,
            favoriteNames:s.favoriteNames.filter(n=>n!==name),
            defaultFavorite:s.defaultFavorite===name?null:s.defaultFavorite,
          };
        }),

      set: (patch) => set(patch),

      showToast: (msg) => {
        clearTimeout(toastTimer);
        set({ toast: msg });
        toastTimer = setTimeout(() => set({ toast: null }), 4200);
      },
    }),
    {
      name: 'aquarium-v1',
      // Only persist durable things — session UI state stays fresh each visit.
      partialize: (s) => ({
        config: s.config,
        savedTanks: s.savedTanks,
        favoriteNames:s.favoriteNames,
        defaultFavorite:s.defaultFavorite,
        waterDrafts: s.waterDrafts,
        // A resize backup is durable too: reloading while viewing a nano tank
        // must never irreversibly discard the original large-tank species.
        resizeSnapshot: s.resizeSnapshot,
        quality: s.quality,
        audioOn: s.audioOn,
        audioVolume: s.audioVolume,
        musicOn: s.musicOn,
        ecoMode: s.ecoMode,
        smartCinema:s.smartCinema,
      }),
      merge: (persisted, current) => {
        const merged = { ...current, ...(persisted as Partial<AppState>) };
        if(typeof merged.smartCinema!=='boolean')merged.smartCinema=true;
        if(merged.ecoMode!=='natural'&&merged.ecoMode!=='relax')
          merged.ecoMode='natural';
        // Migrate prior versions: their saved aquariums remain available.
        merged.favoriteNames=Array.isArray(merged.favoriteNames)
          ?merged.favoriteNames.filter(n=>typeof n==='string'&&!!merged.savedTanks?.[n]):[];
        if(typeof merged.defaultFavorite!=='string' ||
          !merged.favoriteNames.includes(merged.defaultFavorite) ||
          !merged.savedTanks?.[merged.defaultFavorite])merged.defaultFavorite=null;
        // An explicitly preferred favorite re-opens at startup. Shared
        // links still take precedence and never erase the favorite library.
        if (sharedConfig) merged.config=sharedConfig;
        else if(merged.defaultFavorite)merged.config=structuredClone(merged.savedTanks[merged.defaultFavorite]);
        // Keep saved tank keys intact, but migrate built-in random labels.
        if(merged.config?.name==='Surprise Tank'||merged.config?.name==='Hồ cá bất ngờ')
          merged.config={...merged.config,name:'Hồ cá ngẫu nhiên'};
        // Older persisted versions did not have independent water drafts.
        // Their currently active tank remains valid, and other water starts
        // empty until the user populates it.
        if(!merged.waterDrafts || typeof merged.waterDrafts!=='object')
          merged.waterDrafts={};
        return merged;
      },
    }
  )
);

export { PRESETS };
