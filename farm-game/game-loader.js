// Farm V3 safe bootstrap.
// Loads the latest game source without stale browser cache, removes one obsolete
// duplicate helper block introduced during the V3.1 merge, then executes it as
// an ES module. This keeps the Farm usable while the main game file remains easy
// to replace independently.

function showBootError(error){
  console.error('Farm boot error:',error);
  const banner=document.getElementById('tutorialBanner');
  if(banner){
    banner.hidden=false;
    banner.style.display='block';
    banner.style.background='#fff1f1';
    banner.style.borderColor='#e7aaaa';
    banner.innerHTML=`<b>Farm chưa khởi động được.</b><div style="margin-top:6px;font-size:12px">${String(error?.message||error)}</div><div style="margin-top:6px;font-size:11px">Hãy tải lại trang. Nếu lỗi còn xuất hiện, gửi ảnh phần thông báo này để kiểm tra.</div>`;
  }
}

function ensurePatchStyle(){
  if(document.getElementById('farm-ui-patch'))return;
  const style=document.createElement('style');
  style.id='farm-ui-patch';
  style.textContent=`
    .req-line{display:flex;align-items:center;justify-content:space-between;gap:8px}
    .req-line .req-crop{display:inline-flex;align-items:center;gap:6px}
    .req-line .farm-asset.inline-icon.req-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle}
    .req-line .farm-asset.inline-icon.req-icon img,
    .req-line .farm-asset.inline-icon.req-icon svg{width:18px;height:18px;display:block}
  `;
  document.head.appendChild(style);
}

window.addEventListener('error',e=>showBootError(e.error||e.message));
window.addEventListener('unhandledrejection',e=>showBootError(e.reason));

async function bootFarm(){
  try{
    ensurePatchStyle();
    const stamp=Date.now();
    const response=await fetch(`./game.js?live=${stamp}`,{cache:'no-store'});
    if(!response.ok)throw new Error(`Không tải được game.js (HTTP ${response.status})`);
    let source=await response.text();

    // Blob modules cannot resolve relative imports, so rewrite them to absolute URLs.
    const configUrl=new URL('./config.js?v=3.1.0',location.href).href;
    const assetUrl=new URL('./asset-loader.js?v=2.1.0',location.href).href;
    source=source.replace("from './config.js?v=3.1.0';",`from '${configUrl}';`);
    source=source.replace("from './asset-loader.js?v=2.1.0';",`from '${assetUrl}';`);

    // V3.1 merge accidentally left an older helper set immediately before
    // orderDifficulty(), while the newer implementations appear right after it.
    const firstHelpers=source.indexOf('function levelCropPool()');
    const difficulty=source.indexOf('function orderDifficulty(');
    if(firstHelpers>=0&&difficulty>firstHelpers){
      source=source.slice(0,firstHelpers)+source.slice(difficulty);
    }

    // Start UI immediately; image assets continue loading asynchronously.
    source=source.replace(
      'initFarmAssets().finally(init);',
      "init();\ninitFarmAssets().then(()=>{if(gameStarted)renderAll()}).catch(()=>{});"
    );

    // Lift crop art a little so the roots are not hidden by the growth bar.
    source=source.replace(
      'const drewAsset=drawFarmAsset(x,assetId,{x:W/2,y:H-12,width:assetSize,height:assetSize,alpha:p.deadAt?.68:1});',
      'const drewAsset=drawFarmAsset(x,assetId,{x:W/2,y:H-24,width:assetSize,height:assetSize,alpha:p.deadAt?.68:1});'
    );

    // Show a small crop icon in order requirements for children who cannot read yet.
    source=source.replace(
      '<span>${cropById[id].name}</span>',
      '<span class="req-crop">${farmAssetMarkup(`crop.${id}.mature`,"farm-asset inline-icon req-icon")||cropSymbol(cropById[id])} ${cropById[id].name}</span>'
    );

    const blob=new Blob([source],{type:'text/javascript'});
    const moduleUrl=URL.createObjectURL(blob);
    try{
      await import(moduleUrl);
    }finally{
      setTimeout(()=>URL.revokeObjectURL(moduleUrl),1000);
    }
  }catch(error){
    showBootError(error);
  }
}

bootFarm();
