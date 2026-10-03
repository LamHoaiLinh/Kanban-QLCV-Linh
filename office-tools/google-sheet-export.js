/*
 * KAN AI - Google Sheet + Apps Script FULL Snapshot.
 * Chạy hoàn toàn trong trình duyệt.
 * - Cấu hình Google OAuth Web Client ID một lần trên KanBan.
 * - Không cần chép exporter vào từng Apps Script project.
 * - Không lưu JSON lên Google Drive.
 * - Không xuất màu/border để giữ file nhẹ.
 */
const SETTINGS_KEY='linh_kanban_google_sheet_export_v1';
const GIS_SRC='https://accounts.google.com/gsi/client';
const GOOGLE_SCOPES=[
  'https://www.googleapis.com/auth/script.projects.readonly',
  'https://www.googleapis.com/auth/spreadsheets.readonly'
].join(' ');

let gisPromise=null;
let tokenState={clientId:'',accessToken:'',expiresAt:0};

export function renderGoogleSheetExporter(host,api={}){
  const settings=loadSettings();
  const origin=location.origin;
  host.innerHTML=\`
    <div class="office-card">
      <div class="office-card-title-row">
        <div>
          <h4>Xuất FULL Google Sheet + Apps Script cho AI</h4>
          <p class="office-card-note">Chỉ cần dán URL Apps Script. KanBan tự lấy toàn bộ <code>.gs</code>, <code>.html</code>, <code>appsscript.json</code> và Google Sheet đang gắn với project.</p>
        </div>
        <span class="office-recommend-badge">1 JSON · tải về máy</span>
      </div>

      <label class="office-field">
        <span>URL Apps Script hoặc Script ID</span>
        <input id="gsExportScriptUrl" type="text" autocomplete="off"
          placeholder="https://script.google.com/.../projects/xxxxxxxx/edit"
          value="\${escapeHtml(settings.lastScriptUrl||'')}">
        <small>Ví dụ: mở Apps Script cần xuất → Ctrl+L → Ctrl+C → dán vào đây.</small>
      </label>

      <div class="office-toolbar">
        <button class="office-btn primary" id="gsExportRun" type="button">Đăng nhập Google & xuất FULL JSON</button>
        <button class="office-btn" id="gsExportForgetToken" type="button">Đăng nhập lại</button>
        <span class="spacer"></span>
        <span id="gsExportState" class="office-card-note"></span>
      </div>

      <div class="office-card-note" style="margin-top:10px">
        <strong>JSON giữ:</strong> dữ liệu gốc + giá trị hiển thị + công thức + number format (ngày, tiền, %, CCCD/SĐT có số 0 đầu), merge, hyperlink, note, validation, font cơ bản, căn lề, độ rộng cột, freeze, named range, filter và toàn bộ source Apps Script.
        <br><strong>Cố ý bỏ:</strong> màu và border/kẻ ô để giảm dung lượng.
      </div>
    </div>

    <div class="office-card">
      <div class="office-card-title-row">
        <div>
          <h4>Thiết lập Google một lần</h4>
          <p class="office-card-note">Client ID là mã công khai của ứng dụng OAuth, không phải mật khẩu. KanBan chỉ lưu nó trong trình duyệt này.</p>
        </div>
      </div>

      <label class="office-field">
        <span>Google OAuth Web Client ID</span>
        <input id="gsExportClientId" type="text" autocomplete="off"
          placeholder="xxxxxxxx.apps.googleusercontent.com"
          value="\${escapeHtml(settings.clientId||'')}">
        <small>Authorized JavaScript origin cần có: <code>\${escapeHtml(origin)}</code></small>
      </label>

      <div class="office-toolbar">
        <button class="office-btn" id="gsExportSaveClient" type="button">Lưu Client ID</button>
        <button class="office-btn danger" id="gsExportClearClient" type="button">Xóa cấu hình</button>
      </div>

      <details style="margin-top:10px">
        <summary style="cursor:pointer;font-weight:700">Cách tạo Client ID lần đầu (chỉ làm 1 lần)</summary>
        <div class="office-card-note" style="margin-top:8px;line-height:1.6">
          1. Google Cloud Console → chọn/tạo một project riêng cho KAN AI Exporter.<br>
          2. Enable <strong>Google Apps Script API</strong> và <strong>Google Sheets API</strong>.<br>
          3. Cấu hình OAuth consent screen; nếu app đang Testing thì thêm chính email Google của anh vào Test users.<br>
          4. Credentials → Create credentials → OAuth client ID → <strong>Web application</strong>.<br>
          5. Authorized JavaScript origins → thêm <code>\${escapeHtml(origin)}</code>.<br>
          6. Copy Client ID và dán vào ô phía trên.<br>
          7. Vào <code>https://script.google.com/home/usersettings</code> và bật <strong>Google Apps Script API</strong> một lần.
        </div>
      </details>
    </div>

    <div class="office-warning">
      FULL Snapshot có source code nguyên văn. Nếu project đang hard-code API key, password hoặc token thì chúng cũng sẽ nằm trong JSON; không chia sẻ file công khai.
    </div>
  \`;

  const clientInput=host.querySelector('#gsExportClientId');
  const scriptInput=host.querySelector('#gsExportScriptUrl');
  const stateEl=host.querySelector('#gsExportState');

  host.querySelector('#gsExportSaveClient').onclick=()=>{
    const clientId=clientInput.value.trim();
    if(!isClientId(clientId)){setLocalState(stateEl,'Client ID chưa đúng dạng *.apps.googleusercontent.com',true);return}
    saveSettings({clientId,lastScriptUrl:scriptInput.value.trim()});
    resetToken();
    setLocalState(stateEl,'Đã lưu Client ID.');
  };

  host.querySelector('#gsExportClearClient').onclick=()=>{
    localStorage.removeItem(SETTINGS_KEY);
    clientInput.value='';
    resetToken();
    setLocalState(stateEl,'Đã xóa cấu hình.');
  };

  host.querySelector('#gsExportForgetToken').onclick=()=>{
    resetToken();
    setLocalState(stateEl,'Đã xóa token của phiên hiện tại. Lần xuất tới sẽ đăng nhập lại.');
  };

  host.querySelector('#gsExportRun').onclick=async()=>{
    const clientId=clientInput.value.trim();
    const source=scriptInput.value.trim();
    if(!isClientId(clientId)){setLocalState(stateEl,'Hãy nhập Google OAuth Web Client ID ở phần “Thiết lập Google một lần”.',true);clientInput.focus();return}
    let scriptId='';
    try{scriptId=parseScriptId(source)}catch(error){setLocalState(stateEl,error.message,true);scriptInput.focus();return}

    saveSettings({clientId,lastScriptUrl:source});
    try{
      api.startBusy?.('Đang xin quyền Google…');
      setLocalState(stateEl,'Đang đăng nhập Google…');
      const token=await getAccessToken(clientId);
      api.setStatus?.('Đang đọc Apps Script…',10);
      setLocalState(stateEl,'Đang đọc toàn bộ source Apps Script…');
      const snapshot=await buildFullSnapshot(scriptId,token,(message,pct)=>{
        api.setStatus?.(message,pct);
        setLocalState(stateEl,message);
      });
      const json=JSON.stringify(snapshot);
      const filename=makeFilename(snapshot);
      const blob=new Blob([json],{type:'application/json;charset=utf-8'});
      api.setStatus?.('Đang tạo file JSON…',96);
      if(api.saveBlob)await api.saveBlob(blob,filename,'KAN AI FULL Snapshot JSON');
      else downloadBlob(blob,filename);
      api.endBusy?.(\`Đã xuất \${filename} · \${formatBytes(blob.size)}\`);
      setLocalState(stateEl,\`Đã xuất \${snapshot.sheets?.length||0} sheet + \${snapshot.appsScript?.files?.length||0} file Apps Script · \${formatBytes(blob.size)}\`);
    }catch(error){
      const friendly=friendlyGoogleError(error);
      if(api.showError)api.showError(new Error(friendly));
      else setLocalState(stateEl,friendly,true);
    }
  };
}

function loadSettings(){
  try{return {...JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{}')}}catch{return {}}
}
function saveSettings(patch){
  const next={...loadSettings(),...patch};
  localStorage.setItem(SETTINGS_KEY,JSON.stringify(next));
}
function isClientId(value){return /^[A-Za-z0-9._-]+\.apps\.googleusercontent\.com$/.test(String(value||'').trim())}
function parseScriptId(value){
  const v=String(value||'').trim();
  if(!v)throw new Error('Hãy dán URL Apps Script hoặc Script ID.');
  const m=v.match(/\/projects\/([A-Za-z0-9_-]+)(?:\/|$)/);
  const id=m?m[1]:v;
  if(!/^[A-Za-z0-9_-]{20,}$/.test(id))throw new Error('Không nhận ra Script ID. Hãy dán URL trang Apps Script có dạng .../projects/ID/edit.');
  return id;
}
function resetToken(){
  if(tokenState.accessToken&&globalThis.google?.accounts?.oauth2?.revoke){
    try{google.accounts.oauth2.revoke(tokenState.accessToken,()=>{})}catch{}
  }
  tokenState={clientId:'',accessToken:'',expiresAt:0};
}
function setLocalState(el,text,error=false){
  if(!el)return;
  el.textContent=text||'';
  el.style.color=error?'#b42318':'';
}
function ensureGoogleIdentity(){
  if(globalThis.google?.accounts?.oauth2)return Promise.resolve();
  if(gisPromise)return gisPromise;
  gisPromise=new Promise((resolve,reject)=>{
    const existing=document.querySelector(\`script[src="\${GIS_SRC}"]\`);
    if(existing){
      const timer=setInterval(()=>{
        if(globalThis.google?.accounts?.oauth2){clearInterval(timer);resolve()}
      },60);
      setTimeout(()=>{clearInterval(timer);if(globalThis.google?.accounts?.oauth2)resolve();else reject(new Error('Không tải được Google Identity Services.'))},10000);
      return;
    }
    const script=document.createElement('script');
    script.src=GIS_SRC;
    script.async=true;
    script.defer=true;
    script.onload=()=>globalThis.google?.accounts?.oauth2?resolve():reject(new Error('Google Identity Services chưa sẵn sàng.'));
    script.onerror=()=>reject(new Error('Không tải được Google Identity Services. Kiểm tra kết nối Internet.'));
    document.head.appendChild(script);
  });
  return gisPromise;
}
async function getAccessToken(clientId){
  if(tokenState.clientId===clientId&&tokenState.accessToken&&Date.now()<tokenState.expiresAt-60000)return tokenState.accessToken;
  await ensureGoogleIdentity();
  return new Promise((resolve,reject)=>{
    let client;
    try{
      client=google.accounts.oauth2.initTokenClient({
        client_id:clientId,
        scope:GOOGLE_SCOPES,
        include_granted_scopes:true,
        callback:response=>{
          if(response?.error){reject(new Error(response.error_description||response.error));return}
          if(!response?.access_token){reject(new Error('Google không trả access token.'));return}
          tokenState={
            clientId,
            accessToken:response.access_token,
            expiresAt:Date.now()+Number(response.expires_in||3500)*1000
          };
          resolve(response.access_token);
        },
        error_callback:err=>reject(new Error(err?.message||err?.type||'Không mở được cửa sổ đăng nhập Google.'))
      });
      client.requestAccessToken({prompt:''});
    }catch(error){reject(error)}
  });
}
async function googleJson(url,token){
  const response=await fetch(url,{headers:{Authorization:\`Bearer \${token}\`},cache:'no-store'});
  const text=await response.text();
  let data=null;
  try{data=text?JSON.parse(text):{}}catch{data={raw:text}}
  if(!response.ok){
    const message=data?.error?.message||data?.error_description||text||\`HTTP \${response.status}\`;
    const error=new Error(message);
    error.status=response.status;
    error.google=data;
    throw error;
  }
  return data;
}

async function buildFullSnapshot(scriptId,token,onProgress=()=>{}){
  const scriptBase=\`https://script.googleapis.com/v1/projects/\${encodeURIComponent(scriptId)}\`;
  onProgress('Đang đọc thông tin project Apps Script…',15);
  const project=await googleJson(scriptBase,token);
  onProgress('Đang đọc source .gs / .html / appsscript.json…',28);
  const content=await googleJson(scriptBase+'/content',token);

  const files=(content.files||[]).map(file=>({
    name:file.name||'',
    fileName:scriptFileName(file.name,file.type),
    type:file.type||'',
    source:file.source||''
  })).sort((a,b)=>(a.type==='JSON'?-1:b.type==='JSON'?1:a.fileName.localeCompare(b.fileName)));

  const styles=[];
  const styleMap=new Map();
  let spreadsheet=null;
  if(project.parentId){
    onProgress('Đang đọc toàn bộ Google Sheet…',42);
    const fields=[
      'spreadsheetId',
      'properties(title,locale,timeZone)',
      'namedRanges(name,range)',
      'sheets('+
        'properties(sheetId,title,index,hidden,gridProperties(rowCount,columnCount,frozenRowCount,frozenColumnCount)),'+
        'merges,basicFilter,'+
        'data(startRow,startColumn,'+
          'rowData(values(userEnteredValue,effectiveValue,formattedValue,'+
            'effectiveFormat(numberFormat,textFormat(fontFamily,fontSize,bold,italic),horizontalAlignment,verticalAlignment,wrapStrategy),'+
            'hyperlink,note,textFormatRuns(startIndex,format(link(uri))),dataValidation)),'+
          'columnMetadata(pixelSize,hiddenByUser))'+
      ')'
    ].join(',');
    const sheetUrl=
      \`https://sheets.googleapis.com/v4/spreadsheets/\${encodeURIComponent(project.parentId)}?includeGridData=true&fields=\${encodeURIComponent(fields)}\`;
    spreadsheet=await googleJson(sheetUrl,token);
    onProgress('Đang nén cấu trúc Sheet cho AI…',76);
  }

  const compact=spreadsheet?compactSpreadsheet(spreadsheet,styles,styleMap):null;
  onProgress('Đang đóng gói FULL Snapshot…',90);
  return {
    format:'KAN_AI_GOOGLE_SHEET_APPS_SCRIPT_FULL_SNAPSHOT',
    version:'4.0-web',
    exportedAt:new Date().toISOString(),
    schema:{
      cell:['row','column','type','rawValue','displayValue','formula','styleId','note','hyperlink','validation'],
      style:['numberFormat','bold','italic','fontFamily','fontSize','horizontalAlignment','verticalAlignment','wrapStrategy'],
      column:['fromColumn','toColumn','widthPx','hidden'],
      type:{s:'text/string',n:'number',b:'boolean',e:'empty',err:'error'},
      instructions:[
        'rawValue la gia tri thuc; displayValue la chuoi nguoi dung dang nhin thay.',
        'CCCD, CMND, SDT, MST va ma dinh danh co the co so 0 o dau; khong tu y chuyen thanh number.',
        'Ngay, tien va phan tram phai doc dong thoi rawValue, displayValue va numberFormat.',
        'Formula phai duoc bao toan.',
        'Mau va border co y khong export de giam dung luong.',
        'appsScript.files[].source la source nguyen van cua .gs, .html va appsscript.json.'
      ]
    },
    workbook:compact?compact.workbook:{
      id:project.parentId||null,
      name:null,
      url:project.parentId?\`https://docs.google.com/spreadsheets/d/\${project.parentId}/edit\`:null
    },
    styles,
    namedRanges:compact?.namedRanges||[],
    sheets:compact?.sheets||[],
    appsScript:{
      scriptId:project.scriptId||scriptId,
      title:project.title||null,
      parentId:project.parentId||null,
      url:\`https://script.google.com/home/projects/\${scriptId}/edit\`,
      files
    },
    warnings:spreadsheet?[]:['Project Apps Script này không có parentId Google Sheet nên snapshot chỉ chứa Apps Script.']
  };
}

function compactSpreadsheet(api,styles,styleMap){
  const workbook={
    id:api.spreadsheetId,
    name:api.properties?.title||'Google_Sheet',
    url:\`https://docs.google.com/spreadsheets/d/\${api.spreadsheetId}/edit\`,
    locale:api.properties?.locale||null,
    timeZone:api.properties?.timeZone||null
  };
  const sheetNameById=new Map((api.sheets||[]).map(s=>[s.properties?.sheetId,s.properties?.title||'']));
  const namedRanges=(api.namedRanges||[]).map(nr=>[
    nr.name||'',
    nr.range?.sheetId??null,
    gridRangeToA1(nr.range)
  ]);
  const sheets=(api.sheets||[]).map(sheet=>compactSheet(sheet,styles,styleMap,sheetNameById));
  return {workbook,namedRanges,sheets};
}

function compactSheet(sheet,styles,styleMap){
  const p=sheet.properties||{};
  const gp=p.gridProperties||{};
  const out={
    id:p.sheetId,
    name:p.title||'',
    index:p.index??0,
    hidden:Boolean(p.hidden),
    maxRows:gp.rowCount??null,
    maxColumns:gp.columnCount??null,
    usedRows:0,
    usedColumns:0,
    frozenRows:gp.frozenRowCount||0,
    frozenColumns:gp.frozenColumnCount||0,
    merges:(sheet.merges||[]).map(gridRangeToA1).filter(Boolean),
    columns:[],
    cells:[]
  };
  if(sheet.basicFilter)out.filter=sheet.basicFilter;

  const colMeta=new Map();
  for(const grid of sheet.data||[]){
    const startRow=grid.startRow||0;
    const startColumn=grid.startColumn||0;
    (grid.columnMetadata||[]).forEach((meta,i)=>{
      if(meta&&Object.keys(meta).length)colMeta.set(startColumn+i+1,[meta.pixelSize??null,meta.hiddenByUser?1:0]);
    });
    (grid.rowData||[]).forEach((rowData,ri)=>{
      const row=startRow+ri+1;
      (rowData.values||[]).forEach((cell,ci)=>{
        if(!meaningfulCell(cell))return;
        const col=startColumn+ci+1;
        const formula=cell.userEnteredValue?.formulaValue??null;
        const valueObj=formula?cell.effectiveValue:cell.userEnteredValue;
        const unpack=unpackValue(valueObj);
        const fmt=cell.effectiveFormat||{};
        const stylePack=[
          fmt.numberFormat?.pattern||'',
          fmt.textFormat?.bold?1:0,
          fmt.textFormat?.italic?1:0,
          fmt.textFormat?.fontFamily||null,
          fmt.textFormat?.fontSize??null,
          fmt.horizontalAlignment||null,
          fmt.verticalAlignment||null,
          fmt.wrapStrategy||null
        ];
        const styleId=getStyleId(stylePack,styles,styleMap);
        const display=shouldKeepDisplay(unpack.raw,cell.formattedValue,formula,fmt.numberFormat?.pattern)
          ? (cell.formattedValue??null):null;
        const link=extractApiLinks(cell);
        out.cells.push(trimArray([
          row,col,unpack.type,unpack.raw,display,formula,styleId,
          cell.note||null,link,cell.dataValidation||null
        ]));
        if(row>out.usedRows)out.usedRows=row;
        if(col>out.usedColumns)out.usedColumns=col;
      });
    });
  }
  for(const merge of sheet.merges||[]){
    if(merge.endRowIndex>out.usedRows)out.usedRows=merge.endRowIndex;
    if(merge.endColumnIndex>out.usedColumns)out.usedColumns=merge.endColumnIndex;
  }
  out.columns=metadataRuns(colMeta);
  return out;
}

function meaningfulCell(cell){
  if(!cell)return false;
  return Boolean(
    cell.userEnteredValue||
    cell.effectiveValue||
    cell.formattedValue!=null||
    cell.note||
    cell.hyperlink||
    (cell.textFormatRuns&&cell.textFormatRuns.length)||
    cell.dataValidation
  );
}
function unpackValue(value){
  if(!value)return {type:'e',raw:null};
  if(Object.prototype.hasOwnProperty.call(value,'stringValue'))return {type:'s',raw:value.stringValue};
  if(Object.prototype.hasOwnProperty.call(value,'numberValue'))return {type:'n',raw:value.numberValue};
  if(Object.prototype.hasOwnProperty.call(value,'boolValue'))return {type:'b',raw:value.boolValue};
  if(Object.prototype.hasOwnProperty.call(value,'errorValue'))return {type:'err',raw:value.errorValue};
  if(Object.prototype.hasOwnProperty.call(value,'formulaValue'))return {type:'s',raw:value.formulaValue};
  return {type:'e',raw:null};
}
function shouldKeepDisplay(raw,display,formula,numberFormat){
  if(display==null)return false;
  if(formula)return true;
  if(typeof raw==='number'){
    if(String(display)!==String(raw))return true;
    return Boolean(numberFormat&&String(numberFormat).toLowerCase()!=='general');
  }
  if(typeof raw==='boolean')return display!==(raw?'TRUE':'FALSE');
  if(typeof raw==='string')return display!==raw;
  return Boolean(display);
}
function getStyleId(pack,styles,map){
  const normalized=trimArray(pack.slice());
  const key=JSON.stringify(normalized);
  if(map.has(key))return map.get(key);
  const id=styles.length;
  styles.push(normalized);
  map.set(key,id);
  return id;
}
function extractApiLinks(cell){
  if(cell.hyperlink)return cell.hyperlink;
  const runs=cell.textFormatRuns||[];
  const result=[];
  for(let i=0;i<runs.length;i++){
    const uri=runs[i]?.format?.link?.uri;
    if(!uri)continue;
    const start=runs[i].startIndex||0;
    const end=i+1<runs.length?(runs[i+1].startIndex||start):String(cell.formattedValue||'').length;
    result.push([start,end,uri]);
  }
  return result.length?result:null;
}
function metadataRuns(map){
  if(!map.size)return [];
  const keys=[...map.keys()].sort((a,b)=>a-b);
  const out=[];
  let start=keys[0],end=start,current=map.get(start),prev=start;
  for(let i=1;i<keys.length;i++){
    const k=keys[i],v=map.get(k);
    if(k===prev+1&&JSON.stringify(v)===JSON.stringify(current)){end=k}
    else{
      out.push(trimArray([start,end,current[0],current[1]]));
      start=end=k;current=v;
    }
    prev=k;
  }
  out.push(trimArray([start,end,current[0],current[1]]));
  return out;
}
function gridRangeToA1(range){
  if(!range||range.startRowIndex==null||range.startColumnIndex==null||range.endRowIndex==null||range.endColumnIndex==null)return null;
  const a=\`\${columnLetter(range.startColumnIndex+1)}\${range.startRowIndex+1}\`;
  const b=\`\${columnLetter(range.endColumnIndex)}\${range.endRowIndex}\`;
  return a===b?a:\`\${a}:\${b}\`;
}
function columnLetter(n){
  let s='';
  while(n>0){n--;s=String.fromCharCode(65+n%26)+s;n=Math.floor(n/26)}
  return s;
}
function trimArray(a){
  while(a.length&&(a[a.length-1]===null||a[a.length-1]===undefined))a.pop();
  return a;
}
function scriptFileName(name,type){
  const base=String(name||'Unnamed');
  if(type==='SERVER_JS')return base+'.gs';
  if(type==='HTML')return base+'.html';
  if(type==='JSON')return base.toLowerCase()==='appsscript'?'appsscript.json':base+'.json';
  return base;
}
function makeFilename(snapshot){
  const base=safeName(snapshot.workbook?.name||snapshot.appsScript?.title||'Google_Sheet');
  const stamp=new Date().toISOString().replace(/[-:]/g,'').slice(0,15).replace('T','_');
  return \`AI_FULL_SNAPSHOT_\${base}_\${stamp}.json\`;
}
function safeName(value){
  return String(value||'snapshot').replace(/[\\/:*?"<>|]/g,'_').replace(/\s+/g,' ').trim()||'snapshot';
}
function formatBytes(n){
  if(n<1024)return n+' B';
  if(n<1024*1024)return (n/1024).toFixed(1)+' KB';
  return (n/1024/1024).toFixed(2)+' MB';
}
function downloadBlob(blob,name){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),2500);
}
function escapeHtml(value){
  return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function friendlyGoogleError(error){
  const raw=String(error?.message||error||'Lỗi không xác định.');
  if(error?.status===401)return 'Phiên đăng nhập Google đã hết hạn. Bấm “Đăng nhập lại” rồi xuất lại.';
  if(error?.status===403){
    return 'Google từ chối quyền (403). Kiểm tra: OAuth Client ID đã xin scope Apps Script + Sheets, Google Apps Script API và Google Sheets API đã Enable, tài khoản đã được thêm vào Test users nếu OAuth app đang Testing, và Google Apps Script API trong script.google.com/home/usersettings đang ON. Chi tiết: '+raw;
  }
  if(error?.status===404)return 'Không tìm thấy project hoặc Google Sheet. Kiểm tra URL Apps Script và tài khoản Google đang đăng nhập. Chi tiết: '+raw;
  if(/popup|window|closed|failed_to_open/i.test(raw))return 'Trình duyệt chặn cửa sổ đăng nhập Google. Cho phép pop-up cho KanBan rồi thử lại.';
  return raw;
}
