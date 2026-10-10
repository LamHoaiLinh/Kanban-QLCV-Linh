// The build-your-tank control panel: water type, tank size, fish, plants,
// decor, saved tanks and settings — everything updates the live scene.

import { useEffect, useMemo, useRef, useState } from 'react';
import { useStore, PRESETS } from '../state/store';
import { getEngine } from '../engine/engineRef';
import type { EcoSnapshot } from '../engine/Ecology';
import { speciesForWater } from '../data/species';
import { floraForWater } from '../data/flora';
import { decorForWater } from '../data/decor';
import { MIN_GALLONS, MAX_GALLONS, tankDims, presetNameFor, TANK_PRESETS } from '../data/tanks';
import { stockingWarnings, totalBioload } from '../data/compatibility';
import { encodeShareUrl } from '../state/share';
import { isNativeIOS, nativeShare } from '../platform/native';
import type { SpeciesDef, FloraDef } from '../types';

type Tab = 'tank' | 'fish' | 'flora' | 'decor' | 'saved' | 'settings';
const OLD_NAMES:Record<string,string>={
'Amazon Community':'Cộng đồng Amazon','Nano Planted':'Hồ thủy sinh mini','Reef Lagoon':'Đầm san hô','Betta Oasis':'Ốc đảo Betta',
'Blackwater Stream':'Suối nước trà','Tang Highway':'Đại dương xanh','My Aquarium':'Hồ cá của tôi','My Tank':'Hồ của tôi','Surprise Tank':'Hồ cá ngẫu nhiên','Hồ cá bất ngờ':'Hồ cá ngẫu nhiên'
};
const viTank=(s:string)=>OLD_NAMES[s]||s;
const li=(n:number)=>Math.round(n*3.785);
const viTrait=(s:string)=>({
peaceful:'Hiền hòa',aggressive:'Hung dữ',semiaggressive:'Hơi dữ', 'semi-aggressive':'Hơi dữ',
easy:'Dễ chăm',moderate:'Trung bình',advanced:'Khó chăm',expert:'Khó chăm',
mid:'Tầng giữa',bottom:'Tầng đáy',top:'Tầng mặt',all:'Mọi tầng',
rosette:'Dạng bụi',stem:'Dạng thân',moss:'Rêu',carpet:'Thảm nền',floating:'Cây nổi',
softcoral:'San hô mềm',hardcoral:'San hô cứng',anemone:'Hải quỳ'
} as Record<string,string>)[s]||s;


export function ControlPanel() {
  const panelRef=useRef<HTMLElement>(null);
  const [tab, setTab] = useState<Tab>('tank');
  const config = useStore((s) => s.config);
  const set = useStore((s) => s.set);

  const isSalt = config.water === 'saltwater';

  // KanBan integration: auto-close after 15s without interaction INSIDE
  // the panel. Any tab change, tap, typing, scrolling or pointer activity
  // restarts the timer. No listeners remain after the panel is closed.
  useEffect(()=>{
    if(!new URLSearchParams(location.search).has('kanban'))return;
    const node=panelRef.current;
    if(!node)return;
    let timer:ReturnType<typeof setTimeout>;
    let lastMove=0;
    const reset=()=>{
      clearTimeout(timer);
      timer=setTimeout(()=>useStore.getState().set({panelOpen:false}),15000);
    };
    const onMove=()=>{
      const now=Date.now();
      if(now-lastMove<750)return;
      lastMove=now;
      reset();
    };
    for(const name of ['click','pointerdown','keydown','input','change','wheel','focusin','touchstart']){
      node.addEventListener(name,reset,{passive:true});
    }
    node.addEventListener('pointermove',onMove,{passive:true});
    reset();
    return ()=>{
      clearTimeout(timer);
      for(const name of ['click','pointerdown','keydown','input','change','wheel','focusin','touchstart']){
        node.removeEventListener(name,reset);
      }
      node.removeEventListener('pointermove',onMove);
    };
  },[]);

  return (
    <aside ref={panelRef} className="panel" aria-label="Bảng điều khiển hồ cá">
      <div className="panel-head">
        <h1>🐠 {viTank(config.name || 'Hồ cá của tôi')}</h1>
        <button className="close" aria-label="Đóng bảng điều khiển" onClick={() => set({ panelOpen: false })}>✕</button>
      </div>
      <nav className="tabs" aria-label="Danh mục điều khiển">
        {(
          [
            ['tank', 'Bể'],
            ['fish', 'Cá'],
            ['flora', isSalt ? 'San hô' : 'Cây'],
            ['decor', 'Trang trí'],
            ['saved', 'Đã lưu'],
            ['settings', 'Cài đặt'],
          ] as [Tab, string][]
        ).map(([t, label]) => (
          <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>
            {label}
          </button>
        ))}
      </nav>
      <div className="panel-body">
        {tab === 'tank' && <TankTab />}
        {tab === 'fish' && <FishTab />}
        {tab === 'flora' && <FloraTab />}
        {tab === 'decor' && <DecorTab />}
        {tab === 'saved' && <SavedTab />}
        {tab === 'settings' && <SettingsTab />}
      </div>
    </aside>
  );
}

// ─────────────────────── Tank tab ───────────────────────
function TankTab() {
  const config = useStore((s) => s.config);
  const setConfig = useStore((s) => s.setConfig);
  const setWater = useStore((s) => s.setWater);
  const applyPreset = useStore((s) => s.applyPreset);
  const randomize = useStore((s) => s.randomize);
  const isSalt = config.water === 'saltwater';

  return (
    <>
      <div className="section">
        <h2>Loại nước</h2>
        <div className="seg" role="radiogroup" aria-label="Loại nước">
          <button className={!isSalt ? 'active' : ''} onClick={() => setWater('freshwater')}>🌿 Nước ngọt</button>
          <button className={isSalt ? 'active' : ''} onClick={() => setWater('saltwater')}>🪸 Nước mặn</button>
        </div>
        {Object.keys(config.fish).length > 0 && (
          <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '6px 2px 0' }}>
            Thay loại nước sẽ xóa đàn cá hiện có vì sinh vật nước ngọt và nước mặn không thể ở chung.
          </p>
        )}
      </div>

      <div className="section">
        <h2>Dung tích — {presetNameFor(config.gallons)}</h2>
        <div className="slider-row">
          <input
            type="range" min={MIN_GALLONS} max={MAX_GALLONS} step={1}
            value={config.gallons}
            aria-label="Dung tích của hồ cá"
            onChange={(e) => setConfig({ gallons: Number(e.target.value) })}
          />
          <span className="value">{li(config.gallons)} lít</span>
        </div>
        <div className="seg" style={{ marginTop: 8 }}>
          {TANK_PRESETS.map((p) => (
            <button
              key={p.name}
              className={Math.abs(config.gallons - p.gallons) <= 3 ? 'active' : ''}
              title={p.blurb}
              onClick={() => setConfig({ gallons: p.gallons })}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Nền đáy</h2>
        <div className="seg">
          {(isSalt
            ? ([['sand', 'Cát'], ['crushedcoral', 'San hô vụn'], ['blacksand', 'Cát đen']] as const)
            : ([['sand', 'Cát'], ['gravel', 'Sỏi'], ['blacksand', 'Cát đen']] as const)
          ).map(([id, label]) => (
            <button key={id} className={config.substrate === id ? 'active' : ''} onClick={() => setConfig({ substrate: id })}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Phông nền</h2>
        <div className="seg">
          {([['natural', 'Tự nhiên'], ['planted', 'Thủy sinh'], ['reef', 'San hô'], ['deepblue', 'Xanh thẳm'], ['black', 'Đen']] as const).map(([id, label]) => (
            <button key={id} className={config.background === id ? 'active' : ''} onClick={() => setConfig({ background: id })}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Ánh sáng</h2>
        <div className="seg">
          {([['daylight', '☀️ Ban ngày'], ['warm', '🌅 Ánh vàng'], ['actinic', '💙 Xanh biển'], ['blackwater', '🍂 Nước trà']] as const).map(([id, label]) => (
            <button key={id} className={config.lighting === id ? 'active' : ''} onClick={() => setConfig({ lighting: id })}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Ngày và đêm</h2>
        <div className="seg">
          {([['day', 'Ngày'], ['night', 'Đêm'], ['cycle', 'Chu kỳ'], ['realtime', 'Giờ thực']] as const).map(([id, label]) => (
            <button key={id} className={config.dayNight === id ? 'active' : ''} onClick={() => setConfig({ dayNight: id })}>
              {label}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '6px 2px 0' }}>
          “Chu kỳ” mô phỏng một ngày trong 4 phút. “Giờ thực” dùng giờ của máy tính; cá hoạt động về đêm sẽ thức khi trời tối.
        </p>
      </div>

      <EcologySection />

      <div className="section">
        <h2>Các mẫu bể</h2>
        <div className="preset-list">
          {PRESETS.map((p) => (
            <button key={p.name} onClick={() => applyPreset(p)}>
              <div className="p-name">{viTank(p.name)}</div>
              <div className="p-desc">
                {p.water === 'saltwater' ? 'Nước mặn' : 'Nước ngọt'} · {li(p.gallons)} lít ·{' '}
                {Object.values(p.fish).reduce((a, b) => a + b, 0)} sinh vật
              </div>
            </button>
          ))}
        </div>
        <div className="row-actions" style={{ marginTop: 10 }}>
          <button className="btn primary" onClick={randomize}>🎲 Tạo ngẫu nhiên</button>
        </div>
      </div>
    </>
  );
}

// ───────── Realism 3.0: observational ecology, never required chores ─────────
function EcologySection(){
  const ecoMode=useStore(s=>s.ecoMode);
  const set=useStore(s=>s.set);
  const [snapshot,setSnapshot]=useState<EcoSnapshot|null>(null);
  const update=()=>setSnapshot(getEngine()?.getEcoSnapshot()??null);
  useEffect(()=>{
    update();
    const timer=window.setInterval(update,2000);
    return ()=>window.clearInterval(timer);
  },[]);
  return (
    <div className="section" aria-label="Hệ sinh thái mô phỏng">
      <h2>Hệ sinh thái mô phỏng</h2>
      <div className="seg" role="group" aria-label="Chế độ hồ cá">
        <button className={ecoMode==='natural'?'active':''}
          aria-pressed={ecoMode==='natural'}
          onClick={()=>set({ecoMode:'natural'})}>Ngắm cá tự nhiên</button>
        <button className={ecoMode==='relax'?'active':''}
          aria-pressed={ecoMode==='relax'}
          onClick={()=>set({ecoMode:'relax'})}>Thư giãn tương tác</button>
      </div>
      <p className="eco-note">{ecoMode==='natural'
        ?'Cá tự tìm chỗ nghỉ, trú ẩn và rỉa nền. Nước biến đổi nhẹ theo thức ăn, cây và số cá.'
        :'Giữ chuyển động quen thuộc, giảm các hoạt động tự phát. Hồ không cần chăm sóc.'}</p>
      {snapshot&&(
        <>
          <div className="eco-metrics" aria-label="Chỉ số mô phỏng">
            <div><span>Nhiệt độ</span><strong>{snapshot.temperature.toFixed(1)}°C</strong></div>
            <div><span>Oxy (chỉ số)</span><strong>{snapshot.oxygen}/100</strong></div>
            <div><span>Nước sạch</span><strong>{snapshot.cleanliness}/100</strong></div>
            <div><span>Thức ăn dư</span><strong>{snapshot.leftover}</strong></div>
          </div>
          <p className="eco-note">Hoạt động tự nhiên: {snapshot.grazeEvents} lần rỉa nền · {snapshot.restEvents} lượt nghỉ · {snapshot.shelterEvents} lượt trú ẩn · {snapshot.schoolEvents} lần đàn đổi hướng.</p>
        </>
      )}
      <div className="row-actions" style={{marginTop:8}}>
        <button className="btn" onClick={()=>{
          getEngine()?.cleanEco();update();
        }}>Làm sạch nước mô phỏng</button>
      </div>
      <p className="eco-note">Các chỉ số chỉ để minh họa, không phải phép đo nước thực tế. Không có cá chết hoặc mất hồ khi không mở ứng dụng.</p>
    </div>
  );
}

// ─────────────────────── Fish tab ───────────────────────
const speciesChipStyle = (sp: SpeciesDef) => ({
  background: `linear-gradient(180deg, ${sp.palette.back}, ${sp.palette.base} 55%, ${sp.palette.belly})`,
});

function FishTab() {
  const config = useStore((s) => s.config);
  const setFishCount = useStore((s) => s.setFishCount);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'peaceful' | 'schooling' | 'bottom' | 'easy' | 'inverts'>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const pool = speciesForWater(config.water);
  const list = useMemo(() => {
    const q = search.trim().toLowerCase();
    return pool.filter((sp) => {
      if (q && !`${sp.common} ${sp.scientific} ${sp.colorTags.join(' ')}`.toLowerCase().includes(q)) return false;
      switch (filter) {
        case 'peaceful': return sp.temperament === 'peaceful' && !sp.invert;
        case 'schooling': return sp.archetype === 'schooler';
        case 'bottom': return sp.zone === 'bottom' && !sp.invert;
        case 'easy': return sp.careLevel === 'easy';
        case 'inverts': return !!sp.invert;
        default: return true;
      }
    });
  }, [pool, search, filter]);

  const dims = tankDims(config.gallons);
  const load = totalBioload(config.fish);
  const pct = Math.min(160, Math.round((load / dims.capacity) * 100));
  const warnings = useMemo(() => stockingWarnings(config), [config]);

  return (
    <>
      <div className="capacity" aria-label={`Mật độ nuôi ${pct}%`}>
        <div className="bar">
          <div
            className={`fill ${pct > 125 ? 'over' : pct > 100 ? 'warn' : ''}`}
            style={{ width: `${Math.min(100, (pct / 160) * 100 * 1.6)}%` }}
          />
        </div>
        <div className="label">
          Mật độ nuôi: <strong>{pct}%</strong> sức chứa bể {li(config.gallons)} lít
          {pct <= 100 ? ' — phù hợp' : pct <= 125 ? ' — hơi đông' : ' — quá đông'}
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="section">
          <div className="warning-list">
            {warnings.map((w, i) => (
              <div key={i} className={`warning warning-${w.severity}`} role="note">{w.message}</div>
            ))}
          </div>
        </div>
      )}

      <div className="search-row">
        <input
          type="search" placeholder="Tìm cá theo tên hoặc màu…"
          value={search} onChange={(e) => setSearch(e.target.value)}
          aria-label="Tìm cá"
        />
      </div>
      <div className="filter-chips" role="group" aria-label="Lọc danh sách cá">
        {([['all', 'Tất cả'], ['schooling', 'Bơi theo đàn'], ['peaceful', 'Hiền hòa'], ['bottom', 'Tầng đáy'], ['easy', 'Dễ nuôi'], ['inverts', 'Tép, ốc']] as const).map(([id, label]) => (
          <button key={id} className={filter === id ? 'active' : ''} onClick={() => setFilter(id)}>{label}</button>
        ))}
      </div>

      {list.map((sp) => {
        const count = config.fish[sp.id] ?? 0;
        return (
          <div key={sp.id}>
            <div className="species-row">
              <div className="species-chip" style={speciesChipStyle(sp)} aria-hidden />
              <div className="species-info">
                <div className="name">{sp.common}</div>
                <div className="meta">
                  {(sp.adultSizeIn*2.54).toFixed(1)} cm · {viTrait(sp.temperament)} · {viTrait(sp.zone)} · {sp.minGroup > 1 ? `Đàn từ ${sp.minGroup} con` : 'Có thể ở riêng'}
                </div>
              </div>
              <button
                className="info-btn" aria-label={`Thông tin ${sp.common}`}
                onClick={() => setExpanded(expanded === sp.id ? null : sp.id)}
              >ⓘ</button>
              <div className="stepper">
                <button aria-label={`Bớt một ${sp.common}`} onClick={() => setFishCount(sp.id, count - 1)} disabled={count === 0}>−</button>
                <span className="count">{count}</span>
                <button aria-label={`Thêm một ${sp.common}`} onClick={() => setFishCount(sp.id, count + 1)}>+</button>
              </div>
            </div>
            {expanded === sp.id && <SpeciesDetails sp={sp} />}
          </div>
        );
      })}
      {list.length === 0 && <p style={{ color: 'var(--text-dim)', fontSize: 13.5 }}>Không tìm thấy loài phù hợp. Hãy thử tên khác.</p>}
    </>
  );
}

function SpeciesDetails({ sp }: { sp: SpeciesDef }) {
  return (
    <div style={{ padding: '4px 10px 12px 62px', fontSize: 13, lineHeight: 1.5, color: '#c4d4de' }}>
      <div style={{ fontStyle: 'italic', color: 'var(--text-dim)', marginBottom: 4 }}>{sp.scientific}</div>
      <div><strong>Xuất xứ:</strong> {sp.habitat}</div>
      <div style={{ marginTop: 4, borderLeft: '2.5px solid var(--accent)', paddingLeft: 9 }}>{sp.funFact}</div>
      <div style={{ marginTop: 4, color: 'var(--text-dim)' }}>
        Mức chăm sóc: {viTrait(sp.careLevel)} · Bể tối thiểu {li(sp.minGallons)} lít
        {sp.water === 'saltwater' && sp.reefSafe === false ? ' · Có thể rỉa san hô' : ''}
      </div>
    </div>
  );
}

// ─────────────────────── Flora tab ───────────────────────
function FloraTab() {
  const config = useStore((s) => s.config);
  const setFloraCount = useStore((s) => s.setFloraCount);
  const [expanded, setExpanded] = useState<string | null>(null);
  const list = floraForWater(config.water);
  const isSalt = config.water === 'saltwater';

  return (
    <>
      <p style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 0 }}>
        {isSalt
          ? 'San hô bám lên đá. Thêm đá tạo rạn trong mục Trang trí để hồ tự nhiên; quan sát Xenia co mở.'
          : 'Cây đung đưa theo dòng nước. Dương xỉ Java, ráy và rêu thích hợp bám vào lũa hoặc đá.'}
      </p>
      {list.map((f) => {
        const count = config.flora[f.id] ?? 0;
        return (
          <div key={f.id}>
            <div className="species-row">
              <div
                className="species-chip"
                style={{ background: `linear-gradient(135deg, ${f.colors[0]}, ${f.colors[1 % f.colors.length]})` }}
                aria-hidden
              />
              <div className="species-info">
                <div className="name">{f.name}</div>
                <div className="meta">{viTrait(f.kind)} · {viTrait(f.careLevel)}</div>
              </div>
              <button className="info-btn" aria-label={`Thông tin ${f.name}`} onClick={() => setExpanded(expanded === f.id ? null : f.id)}>ⓘ</button>
              <div className="stepper">
                <button aria-label={`Bớt một ${f.name}`} onClick={() => setFloraCount(f.id, count - 1)} disabled={count === 0}>−</button>
                <span className="count">{count}</span>
                <button aria-label={`Thêm một ${f.name}`} onClick={() => setFloraCount(f.id, count + 1)}>+</button>
              </div>
            </div>
            {expanded === f.id && (
              <div style={{ padding: '4px 10px 12px 62px', fontSize: 13, lineHeight: 1.5, color: '#c4d4de' }}>
                <div style={{ fontStyle: 'italic', color: 'var(--text-dim)', marginBottom: 4 }}>{(f as FloraDef).scientific}</div>
                {f.info}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

// ─────────────────────── Decor tab ───────────────────────
function DecorTab() {
  const config = useStore((s) => s.config);
  const toggleDecor = useStore((s) => s.toggleDecor);
  const list = decorForWater(config.water);
  const natural = list.filter((d) => !d.playful);
  const playful = list.filter((d) => d.playful);

  return (
    <>
      <div className="section">
        <h2>Đá và lũa</h2>
        <div className="decor-grid">
          {natural.map((d) => (
            <button
              key={d.id}
              className={config.decor.includes(d.id) ? 'active' : ''}
              onClick={() => toggleDecor(d.id)}
              title={d.info}
              aria-pressed={config.decor.includes(d.id)}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>
      <div className="section">
        <h2>Vật trang trí</h2>
        <div className="decor-grid">
          {playful.map((d) => (
            <button
              key={d.id}
              className={config.decor.includes(d.id) ? 'active' : ''}
              onClick={() => toggleDecor(d.id)}
              title={d.info}
              aria-pressed={config.decor.includes(d.id)}
            >
              {d.name}
            </button>
          ))}
        </div>
      </div>
      <p style={{ fontSize: 12.5, color: 'var(--text-dim)' }}>
        Đá sủi tạo cột bọt khí, đá rạn là chỗ bám của san hô và nơi cá trú ẩn.
      </p>
    </>
  );
}

// ─────────────────────── Saved tab ───────────────────────
function SavedTab() {
  const config = useStore((s) => s.config);
  const savedTanks = useStore((s) => s.savedTanks);
  const saveTank = useStore((s) => s.saveTank);
  const loadTank = useStore((s) => s.loadTank);
  const deleteTank = useStore((s) => s.deleteTank);
  const showToast = useStore((s) => s.showToast);
  const [name, setName] = useState(viTank(config.name || 'Hồ của tôi'));

  const names = Object.keys(savedTanks);

  return (
    <>
      <div className="section">
        <h2>Lưu hồ hiện tại</h2>
        <div className="name-input">
          <input
            value={name} onChange={(e) => setName(e.target.value)}
            aria-label="Tên hồ cá" maxLength={40}
          />
          <button className="btn primary" onClick={() => { saveTank(name.trim() || 'Hồ của tôi'); showToast(`Đã lưu “${name.trim() || 'Hồ của tôi'}”.`); }}>
            Lưu
          </button>
        </div>
      </div>
      <div className="section">
        <h2>Hồ đã lưu</h2>
        {names.length === 0 && <p style={{ color: 'var(--text-dim)', fontSize: 13.5 }}>Chưa có hồ nào được lưu. Dữ liệu hồ được giữ trong trình duyệt này.</p>}
        {names.map((n) => (
          <div className="saved-row" key={n}>
            <span className="s-name">{viTank(n)}</span>
            <button className="btn" onClick={() => loadTank(n)}>Mở</button>
            <button className="btn danger" aria-label={`Xóa hồ ${viTank(n)}`} onClick={() => deleteTank(n)}>🗑</button>
          </div>
        ))}
      </div>
      <div className="section">
        <h2>Chia sẻ</h2>
        <button
          className="btn"
          onClick={async () => {
            const url = encodeShareUrl(config);
            // iOS app: the native share sheet beats a silent clipboard write.
            if (isNativeIOS() && nativeShare(url)) return;
            try {
              await navigator.clipboard.writeText(url);
              showToast('Đã sao chép liên kết chia sẻ hồ cá.');
            } catch {
              window.prompt('Sao chép liên kết này:', url);
            }
          }}
        >
          🔗 Sao chép liên kết
        </button>
      </div>
    </>
  );
}

// ─────────────────────── Settings tab ───────────────────────
function SettingsTab() {
  const quality = useStore((s) => s.quality);
  const audioOn = useStore((s) => s.audioOn);
  const audioVolume = useStore((s) => s.audioVolume);
  const musicOn = useStore((s) => s.musicOn);
  const showHud = useStore((s) => s.showHud);
  const reducedMotion = useStore((s) => s.reducedMotion);
  const set = useStore((s) => s.set);

  return (
    <>
      <div className="section">
        <h2>Chất lượng đồ họa</h2>
        <div className="seg">
          {(['auto', 'low', 'medium', 'high', 'ultra'] as const).map((q) => (
            <button key={q} className={quality === q ? 'active' : ''} onClick={() => set({ quality: q })}>
              {({auto:'Tự động',low:'Thấp',medium:'Vừa',high:'Cao',ultra:'Siêu cao'} as Record<string,string>)[q]}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '6px 2px 0' }}>
          Tự động chọn chất lượng phù hợp và giảm bớt hiệu ứng nếu máy chạy chậm.
        </p>
      </div>

      <div className="section">
        <h2>Âm thanh</h2>
        <div className="seg">
          <button className={audioOn ? 'active' : ''} onClick={() => set({ audioOn: !audioOn })}>
            {audioOn ? '🔊 Tiếng nước: Bật' : '🔇 Tắt tiếng'}
          </button>
          <button className={musicOn ? 'active' : ''} onClick={() => set({ musicOn: !musicOn })}>
            {musicOn ? '🎵 Nhạc: Bật' : '🎵 Nhạc: Tắt'}
          </button>
        </div>
        <div className="slider-row" style={{ marginTop: 10 }}>
          <span style={{ fontSize: 13, color: 'var(--text-dim)' }}>Âm lượng</span>
          <input
            type="range" min={0} max={1} step={0.05} value={audioVolume}
            aria-label="Âm lượng"
            onChange={(e) => set({ audioVolume: Number(e.target.value) })}
          />
        </div>
      </div>

      <div className="section">
        <h2>Chuyển động và hiệu năng</h2>
        <div className="seg">
          <button className={reducedMotion ? 'active' : ''} onClick={() => set({ reducedMotion: !reducedMotion })}>
            {reducedMotion ? '🐢 Bơi chậm: Bật' : 'Bơi chậm: Tắt'}
          </button>
          <button className={showHud ? 'active' : ''} onClick={() => set({ showHud: !showHud })}>
            {showHud ? '📈 Hiệu năng: Bật' : 'Hiệu năng: Tắt'}
          </button>
        </div>
      </div>

      <div className="section">
        <h2>Giới thiệu</h2>
        <p style={{ fontSize: 12.5, color: 'var(--text-dim)', lineHeight: 1.6 }}>
          Hồ cá 3D được dựng trong trình duyệt bằng Three.js, không cần cài thêm phần mềm.
          Phím tắt: <kbd>H</kbd> ẩn giao diện · <kbd>F</kbd> cho ăn · <kbd>C</kbd> camera điện ảnh · <kbd>P</kbd> chụp ảnh.
        </p>
      </div>
    </>
  );
}
