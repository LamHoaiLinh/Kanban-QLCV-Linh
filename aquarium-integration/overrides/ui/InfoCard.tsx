// Tap-a-fish info card: species facts + "name your fish" + follow control.

import { useState } from 'react';
import { useStore } from '../state/store';
import { speciesById } from '../data/species';

export function InfoCard() {
  const selectedFishKey = useStore((s) => s.selectedFishKey);
  const followFishKey = useStore((s) => s.followFishKey);
  const fishNames = useStore((s) => s.config.fishNames);
  const nameFish = useStore((s) => s.nameFish);
  const set = useStore((s) => s.set);
  const [draft, setDraft] = useState('');

  if (!selectedFishKey) return null;
  const speciesId = selectedFishKey.split(':')[0];
  const sp = speciesById.get(speciesId);
  if (!sp) return null;

  const petName = fishNames[selectedFishKey];
  const following = followFishKey === selectedFishKey;

  return (
    <div className="info-card" role="dialog" aria-label={`Thông tin về ${sp.common}`}>
      <button className="close" aria-label="Đóng" onClick={() => set({ selectedFishKey: null, followFishKey: null })}>✕</button>
      <h3>{petName ? `${petName} · ${sp.common}` : sp.common}</h3>
      <div className="sci">{sp.scientific}</div>
      <div className="chips">
        <span className="chip">{(sp.adultSizeIn*2.54).toFixed(1)} cm trưởng thành</span>
        <span className="chip">{({peaceful:'Hiền hòa',aggressive:'Hung dữ',semiaggressive:'Hơi dữ'} as Record<string,string>)[sp.temperament]||sp.temperament}</span>
        <span className="chip">{({top:'Tầng mặt',mid:'Tầng giữa',bottom:'Tầng đáy'} as Record<string,string>)[sp.zone]||sp.zone}</span>
        <span className="chip">Chăm sóc: {({easy:'Dễ',moderate:'Vừa',expert:'Khó'} as Record<string,string>)[sp.careLevel]||sp.careLevel}</span>
        {sp.minGroup > 1 && <span className="chip">Đàn từ {sp.minGroup} con</span>}
      </div>
      <p><strong>Xuất xứ:</strong> {sp.habitat}</p>
      <p className="fact">{sp.funFact}</p>
      <div className="name-input">
        <input
          placeholder={petName ? `Đổi tên ${petName}…` : 'Đặt tên cá…'}
          value={draft}
          maxLength={24}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && draft.trim()) { nameFish(selectedFishKey, draft.trim()); setDraft(''); }
          }}
          aria-label="Đặt tên cá"
        />
        <button
          className="btn primary"
          disabled={!draft.trim()}
          onClick={() => { nameFish(selectedFishKey, draft.trim()); setDraft(''); }}
        >Lưu tên</button>
      </div>
      <div className="row-actions" style={{ marginTop: 8 }}>
        <button
          className="btn"
          onClick={() => set({ followFishKey: following ? null : selectedFishKey, cameraMode: following ? 'orbit' : 'follow' })}
        >
          {following ? '👁 Ngừng theo dõi' : '👁 Theo dõi cá'}
        </button>
      </div>
    </div>
  );
}
