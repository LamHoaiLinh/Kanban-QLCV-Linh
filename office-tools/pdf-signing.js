/*
 * PDF Signing module for Kanban Cá Nhân.
 * Scope: ONLY the PDF > Ký số sub-tool.
 * - Does not read/write Kanban task data.
 * - Uses a dedicated localStorage key + dedicated IndexedDB database.
 * - Personal signing: self-signed certificate + encrypted private key stored locally in browser.
 * - Enterprise signing: sends PDF only to a local Windows Signing Agent on 127.0.0.1.
 */

const SIGN_SETTINGS_KEY = 'linh_kanban_pdf_signing_settings_v1';
const SIGN_DB_NAME = 'linh_kanban_pdf_signing_store_v1';
const SIGN_DB_STORE = 'secrets';
const PERSONAL_SECRET_KEY = 'personal-secret-v2';
const LEGACY_PERSONAL_P12_KEY = 'personal-p12';
const AGENT_URL = 'http://127.0.0.1:8765';
const AGENT_DOWNLOAD = './office-tools/downloads/KanBan_Signing_Agent.exe';
const SIGN_LIBS = {
  forge: 'https://unpkg.com/node-forge@1.3.1/dist/forge.min.js',
  signpdf: 'https://esm.sh/@signpdf/signpdf@3.3.0',
  placeholderPdfLib: 'https://esm.sh/@signpdf/placeholder-pdf-lib@3.3.0?deps=pdf-lib@1.17.1',
  pdfLibEsm: 'https://esm.sh/pdf-lib@1.17.1'
};

const DEFAULTS = {
  mode: 'personal',
  personal: {name:'',email:'',years:5,certMeta:null,extraFields:[]},
  enterprise: {company:'',tax:'',certThumbprint:'',certLabel:'',tsa:'',extraFields:[]},
  design: {
    preset:'professional', layout:'logo-left',
    background:'#eef4ff', backgroundOpacity:100,
    borderColor:'#b8c9e8', borderWidth:0, borderStyle:'solid', radius:10,
    padding:10, shadow:false, shadowBlur:10,
    primaryColor:'#0b4ea2', secondaryColor:'#1c2d3a', accentColor:'#0b4ea2',
    fontFamily:'Times New Roman', fontWeight:'700',
    labelSize:5.0, primarySize:8.5, metaSize:5.2, lineHeight:1.18,
    align:'left',
    logoMode:'left', logoSize:72, logoOpacity:100, logoGap:8,
    watermarkOpacity:12, logoOffsetX:0, logoOffsetY:0,
    showLabel:true, showDate:true, showEmail:true, showExtra:true, showCertificateNote:false,
    dateFormat:'dd/MM/yyyy HH:mm:ss',
    customLine1:'', customLine2:'',
    logoDataUrl:'',
    customFontName:'',
  }
};

let api = null;
let host = null;
let st = createState();
let forgeLoading = null;
let signModulesLoading = null;
let pageRenderToken = 0;

function createState(){
  const saved = loadSettings();
  const design={...DEFAULTS.design,...(saved.design||{})};
  // Font file tùy chỉnh chỉ tồn tại trong phiên hiện tại; không lưu byte font vào dữ liệu KanBan.
  design.customFontName='';
  const personal={...DEFAULTS.personal,...(saved.personal||{})};
  const enterprise={...DEFAULTS.enterprise,...(saved.enterprise||{})};
  // Migrate cấu hình cũ chỉ có 1 nhãn/giá trị sang danh sách linh hoạt.
  if(!Array.isArray(personal.extraFields)) personal.extraFields=[];
  if(!personal.extraFields.length && saved.personal?.extraValue){
    personal.extraFields=[{label:saved.personal.extraLabel||'Thông tin',value:saved.personal.extraValue||''}];
  }
  personal.extraFields=normalizeExtraFields(personal.extraFields);
  if(!Array.isArray(enterprise.extraFields)) enterprise.extraFields=[];
  enterprise.extraFields=normalizeExtraFields(enterprise.extraFields);
  return {
    mode: saved.mode || DEFAULTS.mode,
    personal,
    enterprise,
    design,
    file:null, bytes:null, pdfjsDoc:null, page:1, pageCount:0, pageSize:{width:595,height:842},
    rect:{x:55,y:690,w:250,h:70}, // top-left PDF coordinates
    previewScale:1,
    hasDigitalSignature:false,
    customFontFace:null,
    customFontUrl:null,
    certRecord:null,
    agent:{online:false,version:'',certificates:[],busy:false},
    dragging:null,
  };
}

function normalizeExtraFields(fields){
  return (Array.isArray(fields)?fields:[]).slice(0,12).map(x=>({
    label:String(x?.label||'').slice(0,80), value:String(x?.value||'').slice(0,300)
  }));
}
function extraFieldsHtml(mode,fields){
  const prefix=mode==='personal'?'ps':'es';
  const rows=normalizeExtraFields(fields);
  const labelHints='Chức danh,Điện thoại,Website,Địa chỉ,Phòng ban,Mã nhân viên,CCCD,Email phụ';
  return `<div class="office-sign-extra-block">
    <div class="office-sign-extra-head"><div><b>Thông tin hiển thị thêm</b><span>Tự đặt nhãn bất kỳ: chức danh, điện thoại, website, địa chỉ…</span></div><button class="office-btn" type="button" id="${prefix}AddExtra">+ Thêm</button></div>
    <datalist id="${prefix}ExtraHints">${labelHints.split(',').map(x=>`<option value="${escAttr(x)}"></option>`).join('')}</datalist>
    <div class="office-sign-extra-list" id="${prefix}ExtraList">
      ${rows.length?rows.map((r,i)=>`<div class="office-sign-extra-row" data-extra-row="${i}">
        <label class="office-field"><span>Nhãn</span><input data-extra-label="${i}" list="${prefix}ExtraHints" value="${escAttr(r.label)}" placeholder="Ví dụ: Điện thoại"></label>
        <label class="office-field"><span>Giá trị</span><input data-extra-value="${i}" value="${escAttr(r.value)}" placeholder="Ví dụ: 0901 234 567"></label>
        <button type="button" class="office-btn danger office-sign-extra-remove" data-extra-remove="${i}" title="Xóa dòng này">Xóa</button>
      </div>`).join(''):'<div class="office-sign-extra-empty">Chưa có thông tin thêm. Bấm “+ Thêm” nếu cần.</div>'}
    </div>
  </div>`;
}

function cloneSafeSettings(){
  return {
    mode:st.mode,
    personal:{...st.personal,certMeta:st.personal.certMeta||null},
    enterprise:{...st.enterprise},
    design:{...st.design,customFontName:st.design.customFontName||''}
  };
}
function loadSettings(){
  try{
    const x=JSON.parse(localStorage.getItem(SIGN_SETTINGS_KEY)||'{}');
    return x&&typeof x==='object'?x:{};
  }catch{return {}}
}
function saveSettings(){
  try{localStorage.setItem(SIGN_SETTINGS_KEY,JSON.stringify(cloneSafeSettings()));}catch{}
}

export async function renderPdfSigningTool(container, helpers){
  host=container; api=helpers;
  ensureFullscreenCleanupHook();
  await loadPersonalRecordQuiet();
  render();
  if(st.file) queueMicrotask(()=>renderPdfPage());
  if(st.mode==='enterprise') queueMicrotask(()=>checkAgent(false));
}

function render(){
  if(!host)return;
  const fsOn=isSignFullscreen();
  host.innerHTML=`
    <div class="office-sign-topline">
      <div class="office-sign-modebar">
        <button class="office-sign-mode ${st.mode==='personal'?'active':''}" data-sign-mode="personal" type="button"><b>👤 Ký cá nhân</b><span>Mặc định · không cần cài thêm</span></button>
        <button class="office-sign-mode ${st.mode==='enterprise'?'active':''}" data-sign-mode="enterprise" type="button"><b>🏢 Ký doanh nghiệp</b><span>USB Token · dùng Agent Windows</span></button>
      </div>
      <button class="office-btn office-sign-fullscreen-btn" id="signFullscreen" type="button" title="Phóng to / thu nhỏ giao diện">${fsOn?'🗗 Thu nhỏ':'⛶ Toàn màn hình'}</button>
    </div>
    <div class="office-sign-grid">
      <div class="office-sign-left">
        ${documentCard()}
        ${identityCard()}
      </div>
      <div class="office-sign-right">
        ${designerCard()}
        ${signActionCard()}
      </div>
    </div>`;
  bindMode();bindDocument();bindIdentity();bindDesigner();bindActions();
  renderDesignPreview();
  if(st.file) queueMicrotask(()=>renderPdfPage());
}

function documentCard(){
  const fileInfo=st.file?`<div class="office-sign-file-info"><strong>${esc(st.file.name)}</strong><span>${fmtBytes(st.file.size)} · ${st.pageCount||'?'} trang${st.hasDigitalSignature?' · ⚠ Có chữ ký số':''}</span></div>`:'';
  return `<div class="office-card office-sign-doc-card">
    <div class="office-card-title-row"><div><h4>1. PDF & vị trí ký</h4><p class="office-card-note">Chọn PDF rồi kéo trực tiếp khung chữ ký trên trang. Có thể kéo khung để di chuyển và kéo góc phải dưới để đổi kích thước.</p></div>${st.file?'<button class="office-btn danger" id="signClearPdf" type="button">Bỏ PDF</button>':''}</div>
    <div class="office-dropzone office-sign-drop" id="signPdfDrop"><strong>${st.file?'Đổi PDF khác':'Browse hoặc kéo thả PDF cần ký'}</strong><span>Tệp chỉ được xử lý trong trình duyệt; doanh nghiệp chỉ gửi đến Agent cục bộ 127.0.0.1.</span><input type="file" accept="application/pdf,.pdf" hidden></div>
    ${fileInfo}
    ${st.file?`<div class="office-sign-pagebar"><button class="office-btn" id="signPrevPage" ${st.page<=1?'disabled':''}>←</button><label>Trang <input id="signPageNo" type="number" min="1" max="${st.pageCount}" value="${st.page}"> / ${st.pageCount}</label><button class="office-btn" id="signNextPage" ${st.page>=st.pageCount?'disabled':''}>→</button><span class="spacer"></span><button class="office-btn" id="signResetBox">Đặt lại ô ký</button></div>
    <div class="office-sign-pdf-stage" id="signPdfStage"><div class="office-sign-pdf-wrap" id="signPdfWrap"><canvas id="signPdfCanvas"></canvas><div class="office-sign-box" id="signBox"><span class="office-sign-box-hint">KÉO ĐỂ DI CHUYỂN</span><i class="office-sign-resize" title="Kéo để đổi kích thước"></i></div></div></div>
    <div class="office-sign-coords" id="signCoords"></div>`:''}
  </div>`;
}

function identityCard(){
  if(st.mode==='personal'){
    const meta=st.personal.certMeta;
    return `<div class="office-card">
      <div class="office-card-title-row"><div><h4>2. Chữ ký cá nhân</h4><p class="office-card-note">Certificate self-signed được tạo ngay trên máy. Private key được mã hóa bằng mật khẩu và lưu trong kho riêng của trình duyệt; không cần USB Token.</p></div><span class="office-recommend-badge">Không cần USB Token</span></div>
      <div class="office-grid">
        <label class="office-field"><span>Họ và tên</span><input id="psName" value="${escAttr(st.personal.name)}" placeholder="Ví dụ: Lâm Hoài Linh"></label>
        <label class="office-field"><span>Email</span><input id="psEmail" type="email" value="${escAttr(st.personal.email)}" placeholder="email@example.com"></label>
      </div>
      ${extraFieldsHtml('personal',st.personal.extraFields)}
      <div class="office-sign-cert-status ${meta?'good':''}">${meta?`<b>✓ Đã có certificate cá nhân</b><span>${esc(meta.subject||st.personal.name)} · RSA ${meta.bits||2048} · hết hạn ${esc(meta.notAfter||'')}</span>`:'<b>Chưa có certificate cá nhân</b><span>Khi bấm Ký cá nhân, KanBan sẽ mở popup tạo certificate ngay.</span>'}</div>
      <div class="office-grid office-sign-personal-tools">
        <label class="office-field"><span>Hiệu lực certificate mới</span><select id="psYears">${[1,2,3,5,10].map(n=>`<option value="${n}" ${Number(st.personal.years)===n?'selected':''}>${n} năm</option>`).join('')}</select><small>Mật khẩu chỉ được hỏi trong popup khi tạo/kiểm tra/ký và không được lưu.</small></label>
        <div class="office-field"><span>Cách dùng</span><div class="office-sign-security-note">Nếu quên mật khẩu, bấm <b>Xóa certificate</b> rồi tạo lại. Tên/email/thông tin hiển thị vẫn được giữ.</div></div>
      </div>
      <div class="office-toolbar"><button class="office-btn primary" id="psCreate">${meta?'Tạo certificate mới / cập nhật':'Tạo certificate cá nhân'}</button><button class="office-btn danger" id="psDelete" ${meta?'':'disabled'}>Xóa certificate</button><button class="office-btn" id="psImport">Nhập P12/PFX</button><button class="office-btn" id="psBackup" ${meta?'':'disabled'}>Tải bản sao P12</button><button class="office-btn" id="psCheck" ${meta?'':'disabled'}>Kiểm tra mật khẩu</button></div>
      <div class="office-warning" style="margin-top:10px">Self-signed giúp phát hiện PDF bị sửa sau khi ký nhưng Foxit/Adobe có thể hiển thị <b>Unknown/Untrusted signer</b>. Không xem nó tương đương chữ ký số công cộng do CA cấp.</div>
    </div>`;
  }
  const agentOnline=st.agent.online;
  return `<div class="office-card">
    <div class="office-card-title-row"><div><h4>2. Chữ ký doanh nghiệp</h4><p class="office-card-note">KanBan không truy cập trực tiếp USB Token. Signing Agent cục bộ gọi Windows Certificate Store/CSP/KSP giống luồng app desktop.</p></div><span class="office-recommend-badge ${agentOnline?'good':''}">${agentOnline?'✓ Agent đang chạy':'Cần Signing Agent'}</span></div>
    <div class="office-grid">
      <label class="office-field"><span>Tên doanh nghiệp</span><input id="esCompany" value="${escAttr(st.enterprise.company)}" placeholder="CÔNG TY ..."></label>
      <label class="office-field"><span>MST</span><input id="esTax" value="${escAttr(st.enterprise.tax)}" placeholder="Mã số thuế"></label>
    </div>
    ${extraFieldsHtml('enterprise',st.enterprise.extraFields)}
    <div class="office-sign-agent-panel">
      <div><b id="agentStatus">${agentOnline?`✓ Đã kết nối ${esc(st.agent.version||'KanBan Signing Agent')}`:'Chưa kết nối Agent tại 127.0.0.1:8765'}</b><span>${agentOnline?'USB Token/chứng thư được xử lý cục bộ trên Windows.':'Cài một lần trên Windows; sau đó chỉ cần cắm Token và mở Agent.'}</span></div>
      <div class="office-toolbar"><a class="office-btn primary" href="${AGENT_DOWNLOAD}" download>Tải Signing Agent (.exe)</a><button class="office-btn" id="agentCheck">Kiểm tra kết nối</button><button class="office-btn" id="agentCertRefresh" ${agentOnline?'':'disabled'}>Đọc chứng thư</button></div>
    </div>
    <div class="office-grid">
      <label class="office-field"><span>Chứng thư Windows</span><select id="esCert" ${agentOnline?'':'disabled'}>${certificateOptions()}</select><small>Ứng dụng ưu tiên certificate khớp tên/MST; tránh certificate localhost/test.</small></label>
      <div class="office-field"><span>PIN USB Token</span><div class="office-sign-security-note">PIN sẽ được hỏi bằng popup khi bấm <b>KÝ DOANH NGHIỆP</b>; không lưu trong KanBan.</div></div>
      <label class="office-field"><span>TSA URL (tùy chọn)</span><input id="esTsa" value="${escAttr(st.enterprise.tsa)}" placeholder="Để trống nếu không dùng"></label>
      <div class="office-field"><span>Bảo mật</span><div class="office-sign-security-note">PDF và PIN chỉ gửi tới <b>127.0.0.1</b> trên chính máy. Agent không upload file lên máy chủ.</div></div>
    </div>
  </div>`;
}

function certificateOptions(){
  if(!st.agent.certificates.length)return '<option value="">Chưa đọc chứng thư</option>';
  const ranked=[...st.agent.certificates].sort((a,b)=>scoreCert(b)-scoreCert(a));
  return ranked.map(c=>`<option value="${escAttr(c.thumbprint)}" ${st.enterprise.certThumbprint===c.thumbprint?'selected':''}>${esc(c.who||c.common_name||'Certificate')} · ${esc(c.key_desc||'')} · hết hạn ${esc(c.not_after||'')}</option>`).join('');
}
function scoreCert(c){
  const blob=`${c.organization||''} ${c.common_name||''} ${c.subject||''} ${c.issuer||''}`.toLowerCase();
  const company=st.enterprise.company.trim().toLowerCase();
  const tax=st.enterprise.tax.replace(/\D/g,'');
  let s=0;
  if(tax && blob.replace(/\D/g,'').includes(tax))s+=1000;
  if(company && blob.includes(company))s+=600;
  for(const t of ['đào tạo','lái xe','bình tân'])if(company.includes(t)&&blob.includes(t))s+=60;
  if(/localhost|\btest\b|development|self-signed/.test(blob))s-=700;
  return s;
}

function designerCard(){
  const d=st.design;
  return `<div class="office-card office-sign-designer-card">
    <div class="office-card-title-row"><div><h4>3. Thiết kế chữ ký</h4><p class="office-card-note">Preview bên dưới chính là hình được đặt vào PDF. Có nhiều preset và phần tinh chỉnh nâng cao.</p></div><button class="office-btn" id="signDesignReset">Khôi phục mẫu</button></div>
    <div class="office-sign-presetbar">
      ${[['professional','Chuyên nghiệp'],['minimal','Tối giản'],['watermark','Watermark'],['compact','Gọn'],['seal','Dấu cá nhân'],['center','Căn giữa']].map(([id,l])=>`<button type="button" data-sign-preset="${id}" class="${d.preset===id?'active':''}">${l}</button>`).join('')}
    </div>
    <div class="office-sign-design-preview"><canvas id="signDesignCanvas" width="900" height="280"></canvas></div>
    <details class="office-sign-details" open><summary>Bố cục & logo</summary>
      <div class="office-grid three">
        <label class="office-field"><span>Kiểu logo</span><select id="sdLogoMode">${[['left','Bên trái'],['right','Bên phải'],['top','Phía trên'],['watermark','Chìm giữa'],['seal','Monogram / dấu tròn'],['none','Không logo']].map(([v,l])=>`<option value="${v}" ${d.logoMode===v?'selected':''}>${l}</option>`).join('')}</select></label>
        <label class="office-field"><span>Logo</span><div class="office-inline-input"><button class="office-btn" id="sdLogoPick">${d.logoDataUrl?'Đổi logo':'Chọn logo'}</button>${d.logoDataUrl?'<button class="office-btn danger" id="sdLogoClear">×</button>':''}</div></label>
        <label class="office-field"><span>Kích thước logo</span><input id="sdLogoSize" type="range" min="20" max="130" value="${d.logoSize}"><small>${d.logoSize}%</small></label>
        <label class="office-field"><span>Độ đậm logo</span><input id="sdLogoOpacity" type="range" min="10" max="100" value="${d.logoOpacity}"><small>${d.logoOpacity}%</small></label>
        <label class="office-field"><span>Độ chìm watermark</span><input id="sdWatermarkOpacity" type="range" min="3" max="40" value="${d.watermarkOpacity}"><small>${d.watermarkOpacity}%</small></label>
        <label class="office-field"><span>Khoảng logo ↔ chữ</span><input id="sdLogoGap" type="number" min="0" max="40" step="1" value="${d.logoGap}"></label>
        <label class="office-field"><span>Dịch logo X</span><input id="sdLogoX" type="number" min="-60" max="60" value="${d.logoOffsetX}"></label>
        <label class="office-field"><span>Dịch logo Y</span><input id="sdLogoY" type="number" min="-60" max="60" value="${d.logoOffsetY}"></label>
        <label class="office-field"><span>Căn chữ</span><select id="sdAlign"><option value="left" ${d.align==='left'?'selected':''}>Trái</option><option value="center" ${d.align==='center'?'selected':''}>Giữa</option><option value="right" ${d.align==='right'?'selected':''}>Phải</option></select></label>
      </div>
    </details>
    <details class="office-sign-details"><summary>Font & kích thước chữ</summary>
      <div class="office-grid three">
        <label class="office-field"><span>Font</span><select id="sdFont">${['Times New Roman','Arial','Segoe UI','Tahoma','Georgia','Verdana','Courier New'].map(v=>`<option ${d.fontFamily===v?'selected':''}>${v}</option>`).join('')}</select></label>
        <label class="office-field"><span>Font tùy chỉnh</span><button class="office-btn" id="sdFontPick">${d.customFontName?esc(d.customFontName):'Import TTF/OTF'}</button></label>
        <label class="office-field"><span>Độ đậm tên</span><select id="sdWeight"><option value="400" ${d.fontWeight==='400'?'selected':''}>Thường</option><option value="600" ${d.fontWeight==='600'?'selected':''}>Semi Bold</option><option value="700" ${d.fontWeight==='700'?'selected':''}>Bold</option><option value="800" ${d.fontWeight==='800'?'selected':''}>Extra Bold</option></select></label>
        <label class="office-field"><span>Cỡ nhãn (pt)</span><input id="sdLabelSize" type="number" min="3" max="18" step="0.2" value="${d.labelSize}"></label>
        <label class="office-field"><span>Cỡ tên/CTY (pt)</span><input id="sdPrimarySize" type="number" min="4" max="28" step="0.2" value="${d.primarySize}"></label>
        <label class="office-field"><span>Cỡ thông tin (pt)</span><input id="sdMetaSize" type="number" min="3" max="16" step="0.2" value="${d.metaSize}"></label>
        <label class="office-field"><span>Giãn dòng</span><input id="sdLineHeight" type="number" min="0.8" max="2" step="0.02" value="${d.lineHeight}"></label>
        <label class="office-field"><span>Màu tên/CTY</span><input id="sdPrimaryColor" type="color" value="${d.primaryColor}"></label>
        <label class="office-field"><span>Màu thông tin</span><input id="sdSecondaryColor" type="color" value="${d.secondaryColor}"></label>
      </div>
    </details>
    <details class="office-sign-details"><summary>Nền, viền & khoảng trắng</summary>
      <div class="office-grid three">
        <label class="office-field"><span>Màu nền</span><input id="sdBg" type="color" value="${d.background}"></label>
        <label class="office-field"><span>Độ đậm nền</span><input id="sdBgOpacity" type="range" min="0" max="100" value="${d.backgroundOpacity}"><small>${d.backgroundOpacity}%</small></label>
        <label class="office-field"><span>Bo góc</span><input id="sdRadius" type="number" min="0" max="40" value="${d.radius}"></label>
        <label class="office-field"><span>Màu viền</span><input id="sdBorderColor" type="color" value="${d.borderColor}"></label>
        <label class="office-field"><span>Độ dày viền</span><input id="sdBorderWidth" type="number" min="0" max="5" step="0.5" value="${d.borderWidth}"></label>
        <label class="office-field"><span>Kiểu viền</span><select id="sdBorderStyle"><option value="solid" ${d.borderStyle==='solid'?'selected':''}>Liền</option><option value="dashed" ${d.borderStyle==='dashed'?'selected':''}>Đứt</option><option value="dotted" ${d.borderStyle==='dotted'?'selected':''}>Chấm</option></select></label>
        <label class="office-field"><span>Padding</span><input id="sdPadding" type="number" min="2" max="32" value="${d.padding}"></label>
        <label class="office-field"><span>Bóng nhẹ</span><label class="office-check"><input id="sdShadow" type="checkbox" ${d.shadow?'checked':''}> Hiện shadow</label></label>
        <label class="office-field"><span>Độ mờ bóng</span><input id="sdShadowBlur" type="number" min="0" max="30" value="${d.shadowBlur}"></label>
      </div>
    </details>
    <details class="office-sign-details"><summary>Nội dung hiển thị</summary>
      <div class="office-sign-checkgrid">
        <label class="office-check"><input id="sdShowLabel" type="checkbox" ${d.showLabel?'checked':''}> “Ký bởi:”</label>
        <label class="office-check"><input id="sdShowDate" type="checkbox" ${d.showDate?'checked':''}> Ngày giờ</label>
        <label class="office-check"><input id="sdShowEmail" type="checkbox" ${d.showEmail?'checked':''}> Email</label>
        <label class="office-check"><input id="sdShowExtra" type="checkbox" ${d.showExtra?'checked':''}> MST / thông tin thêm</label>
        <label class="office-check"><input id="sdShowCertificateNote" type="checkbox" ${d.showCertificateNote?'checked':''}> Ghi chú loại chữ ký</label>
      </div>
      <div class="office-grid">
        <label class="office-field"><span>Dòng tùy chỉnh 1</span><input id="sdCustom1" value="${escAttr(d.customLine1)}" placeholder="Ví dụ: Kế toán trưởng"></label>
        <label class="office-field"><span>Dòng tùy chỉnh 2</span><input id="sdCustom2" value="${escAttr(d.customLine2)}" placeholder="Không bắt buộc"></label>
      </div>
    </details>
  </div>`;
}

function signActionCard(){
  const ready=Boolean(st.file&&(st.mode==='personal'?true:st.agent.online));
  return `<div class="office-card office-sign-action-card">
    <h4>4. Ký PDF</h4>
    <div class="office-sign-summary">${signSummary()}</div>
    <div class="office-toolbar"><button class="office-btn" id="signExportAppearance">Xuất PNG mẫu</button><span class="spacer"></span><button class="office-btn primary office-sign-main-btn" id="signRun" ${ready?'':'disabled'}>${st.mode==='personal'?'KÝ CÁ NHÂN':'KÝ DOANH NGHIỆP'}</button></div>
  </div>`;
}
function signSummary(){
  const a=[];
  a.push(st.file?`✓ ${esc(st.file.name)}`:'✗ Chưa chọn PDF');
  a.push(st.file?`Trang ${st.page} · ô ${Math.round(st.rect.w)}×${Math.round(st.rect.h)} pt`: 'Chưa có vị trí ký');
  if(st.mode==='personal')a.push(st.certRecord?'✓ Certificate cá nhân đã sẵn sàng':'✗ Chưa tạo certificate cá nhân');
  else a.push(st.agent.online?'✓ Signing Agent đang chạy':'✗ Chưa kết nối Signing Agent');
  return a.map(x=>`<span>${x}</span>`).join('');
}

function bindMode(){
  host.querySelectorAll('[data-sign-mode]').forEach(b=>b.onclick=()=>{
    st.mode=b.dataset.signMode;saveSettings();render();if(st.mode==='enterprise')checkAgent(false);
  });
}
function bindDocument(){
  const drop=host.querySelector('#signPdfDrop');
  if(drop){
    api.bindDropzone(drop,f=>/\.pdf$/i.test(f.name),files=>loadPdf(files[0]));
    drop.querySelector('input').onchange=e=>loadPdf(e.target.files?.[0]);
  }
  host.querySelector('#signClearPdf')?.addEventListener('click',()=>{st.file=null;st.bytes=null;st.pdfjsDoc=null;st.page=1;st.pageCount=0;st.hasDigitalSignature=false;render();});
  host.querySelector('#signPrevPage')?.addEventListener('click',()=>setPage(st.page-1));
  host.querySelector('#signNextPage')?.addEventListener('click',()=>setPage(st.page+1));
  host.querySelector('#signPageNo')?.addEventListener('change',e=>setPage(Number(e.target.value)||1));
  host.querySelector('#signResetBox')?.addEventListener('click',()=>{resetRect();renderPdfPage();});
}
function bindIdentity(){
  if(st.mode==='personal'){
    bindInput('#psName',v=>st.personal.name=v);
    bindInput('#psEmail',v=>st.personal.email=v);
    bindExtraFields('personal');
    host.querySelector('#psYears')?.addEventListener('change',e=>{st.personal.years=Number(e.target.value)||5;saveSettings();});
    host.querySelector('#psCreate')?.addEventListener('click',createPersonalCertificate);
    host.querySelector('#psDelete')?.addEventListener('click',deletePersonalCertificate);
    host.querySelector('#psImport')?.addEventListener('click',importPersonalP12);
    host.querySelector('#psBackup')?.addEventListener('click',backupPersonalP12);
    host.querySelector('#psCheck')?.addEventListener('click',checkPersonalSecret);
  }else{
    bindInput('#esCompany',v=>st.enterprise.company=v);
    bindInput('#esTax',v=>st.enterprise.tax=v);
    bindExtraFields('enterprise');
    bindInput('#esTsa',v=>st.enterprise.tsa=v);
    host.querySelector('#agentCheck')?.addEventListener('click',()=>checkAgent(true));
    host.querySelector('#agentCertRefresh')?.addEventListener('click',refreshAgentCertificates);
    host.querySelector('#esCert')?.addEventListener('change',e=>{st.enterprise.certThumbprint=e.target.value;const c=st.agent.certificates.find(x=>x.thumbprint===e.target.value);st.enterprise.certLabel=c?.who||'';saveSettings();renderDesignPreview();});
  }
}
function bindExtraFields(mode){
  const target=mode==='personal'?st.personal:st.enterprise;
  const prefix=mode==='personal'?'ps':'es';
  host.querySelector(`#${prefix}AddExtra`)?.addEventListener('click',()=>{
    target.extraFields=normalizeExtraFields(target.extraFields);
    if(target.extraFields.length>=12)return alert('Tối đa 12 dòng thông tin thêm.');
    target.extraFields.push({label:'',value:''});saveSettings();render();
  });
  host.querySelectorAll(`[data-extra-label]`).forEach(el=>el.addEventListener('input',e=>{
    const i=Number(e.currentTarget.dataset.extraLabel);target.extraFields[i]??={label:'',value:''};target.extraFields[i].label=e.currentTarget.value;saveSettings();renderDesignPreview();updateBoxArtwork();
  }));
  host.querySelectorAll(`[data-extra-value]`).forEach(el=>el.addEventListener('input',e=>{
    const i=Number(e.currentTarget.dataset.extraValue);target.extraFields[i]??={label:'',value:''};target.extraFields[i].value=e.currentTarget.value;saveSettings();renderDesignPreview();updateBoxArtwork();
  }));
  host.querySelectorAll(`[data-extra-remove]`).forEach(el=>el.addEventListener('click',e=>{
    const i=Number(e.currentTarget.dataset.extraRemove);target.extraFields.splice(i,1);saveSettings();render();
  }));
}

function bindInput(sel,setter){
  const el=host.querySelector(sel);if(!el)return;el.addEventListener('input',e=>{setter(e.target.value);saveSettings();renderDesignPreview();updateBoxArtwork();});
}

function bindDesigner(){
  host.querySelectorAll('[data-sign-preset]').forEach(b=>b.onclick=()=>applyPreset(b.dataset.signPreset));
  host.querySelector('#signDesignReset')?.addEventListener('click',()=>{st.design={...DEFAULTS.design,logoDataUrl:st.design.logoDataUrl};saveSettings();render();});
  const map={
    '#sdLogoMode':['logoMode','value'],'#sdLogoSize':['logoSize','number'],'#sdLogoOpacity':['logoOpacity','number'],'#sdWatermarkOpacity':['watermarkOpacity','number'],'#sdLogoGap':['logoGap','number'],'#sdLogoX':['logoOffsetX','number'],'#sdLogoY':['logoOffsetY','number'],
    '#sdAlign':['align','value'],'#sdFont':['fontFamily','value'],'#sdWeight':['fontWeight','value'],'#sdLabelSize':['labelSize','number'],'#sdPrimarySize':['primarySize','number'],'#sdMetaSize':['metaSize','number'],'#sdLineHeight':['lineHeight','number'],
    '#sdPrimaryColor':['primaryColor','value'],'#sdSecondaryColor':['secondaryColor','value'],'#sdBg':['background','value'],'#sdBgOpacity':['backgroundOpacity','number'],'#sdRadius':['radius','number'],'#sdBorderColor':['borderColor','value'],'#sdBorderWidth':['borderWidth','number'],'#sdBorderStyle':['borderStyle','value'],'#sdPadding':['padding','number'],'#sdShadowBlur':['shadowBlur','number'],
    '#sdCustom1':['customLine1','value'],'#sdCustom2':['customLine2','value']
  };
  Object.entries(map).forEach(([sel,[key,kind]])=>{const el=host.querySelector(sel);if(!el)return;const fn=e=>{st.design[key]=kind==='number'?Number(e.target.value):e.target.value;saveSettings();renderDesignPreview();updateBoxArtwork();syncRangeLabel(el);};el.addEventListener(el.type==='range'?'input':'change',fn);if(el.tagName==='INPUT'&&el.type==='text')el.addEventListener('input',fn);});
  [['#sdShadow','shadow'],['#sdShowLabel','showLabel'],['#sdShowDate','showDate'],['#sdShowEmail','showEmail'],['#sdShowExtra','showExtra'],['#sdShowCertificateNote','showCertificateNote']].forEach(([sel,key])=>{host.querySelector(sel)?.addEventListener('change',e=>{st.design[key]=e.target.checked;saveSettings();renderDesignPreview();updateBoxArtwork();});});
  host.querySelector('#sdLogoPick')?.addEventListener('click',pickLogo);
  host.querySelector('#sdLogoClear')?.addEventListener('click',()=>{st.design.logoDataUrl='';saveSettings();render();});
  host.querySelector('#sdFontPick')?.addEventListener('click',pickCustomFont);
}
function syncRangeLabel(el){const small=el.closest('.office-field')?.querySelector('small');if(small)small.textContent=`${el.value}%`;}

function bindActions(){
  host.querySelector('#signExportAppearance')?.addEventListener('click',exportAppearancePng);
  host.querySelector('#signRun')?.addEventListener('click',runSign);
  host.querySelector('#signFullscreen')?.addEventListener('click',toggleSignFullscreen);
}


function officeDialogEl(){return host?.closest('dialog')||document.querySelector('#officeToolsDialog');}
function isSignFullscreen(){return Boolean(officeDialogEl()?.classList.contains('office-sign-fullscreen'));}
function toggleSignFullscreen(){
  const dlg=officeDialogEl();if(!dlg)return;
  dlg.classList.toggle('office-sign-fullscreen');
  const btn=host?.querySelector('#signFullscreen');
  if(btn)btn.textContent=dlg.classList.contains('office-sign-fullscreen')?'🗗 Thu nhỏ':'⛶ Toàn màn hình';
  setTimeout(()=>{if(st.file)renderPdfPage();},80);
}
function ensureFullscreenCleanupHook(){
  const dlg=officeDialogEl();if(!dlg||dlg.dataset.signFullscreenHook)return;
  dlg.dataset.signFullscreenHook='1';
  dlg.addEventListener('close',()=>dlg.classList.remove('office-sign-fullscreen'));
}

async function loadPdf(file){
  if(!file)return;
  try{
    api.startBusy('Đang đọc PDF để ký…');
    const bytes=new Uint8Array(await file.arrayBuffer());
    const pdfjs=await api.ensurePdfJs();
    const task=pdfjs.getDocument({data:bytes.slice()});
    const doc=await task.promise;
    st.file=file;st.bytes=bytes;st.pdfjsDoc=doc;st.page=1;st.pageCount=doc.numPages;st.hasDigitalSignature=bytesContainAscii(bytes,'/ByteRange');
    const p=await doc.getPage(1);const vp=p.getViewport({scale:1});st.pageSize={width:vp.width,height:vp.height};resetRect();
    api.endBusy(`Đã đọc ${doc.numPages} trang PDF.`);render();
  }catch(e){api.showError(e)}
}
function bytesContainAscii(bytes,s){
  const pat=new TextEncoder().encode(s);outer:for(let i=0;i<=bytes.length-pat.length;i++){for(let j=0;j<pat.length;j++)if(bytes[i+j]!==pat[j])continue outer;return true}return false;
}
function resetRect(){
  const w=Math.min(280,st.pageSize.width*0.48), h=Math.min(82,st.pageSize.height*0.11);
  st.rect={x:Math.max(25,(st.pageSize.width-w)/2),y:Math.max(25,st.pageSize.height-h-55),w,h};
}
async function setPage(n){n=Math.max(1,Math.min(st.pageCount,n));if(n===st.page)return;st.page=n;const p=await st.pdfjsDoc.getPage(n);const vp=p.getViewport({scale:1});st.pageSize={width:vp.width,height:vp.height};resetRect();render();}

async function renderPdfPage(){
  if(!st.pdfjsDoc||!host?.querySelector('#signPdfCanvas'))return;
  const token=++pageRenderToken;
  try{
    const page=await st.pdfjsDoc.getPage(st.page);if(token!==pageRenderToken)return;
    const base=page.getViewport({scale:1});st.pageSize={width:base.width,height:base.height};
    const stage=host.querySelector('#signPdfStage');const maxW=Math.max(360,Math.min(790,(stage?.clientWidth||790)-28));const scale=maxW/base.width;st.previewScale=scale;
    const vp=page.getViewport({scale});const canvas=host.querySelector('#signPdfCanvas');canvas.width=Math.round(vp.width*devicePixelRatio);canvas.height=Math.round(vp.height*devicePixelRatio);canvas.style.width=`${vp.width}px`;canvas.style.height=`${vp.height}px`;const ctx=canvas.getContext('2d');ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);await page.render({canvasContext:ctx,viewport:vp}).promise;
    const wrap=host.querySelector('#signPdfWrap');wrap.style.width=`${vp.width}px`;wrap.style.height=`${vp.height}px`;
    positionBox();bindBoxPointer();updateBoxArtwork();
  }catch(e){console.error(e)}
}
function positionBox(){
  const box=host?.querySelector('#signBox');if(!box)return;const s=st.previewScale;box.style.left=`${st.rect.x*s}px`;box.style.top=`${st.rect.y*s}px`;box.style.width=`${st.rect.w*s}px`;box.style.height=`${st.rect.h*s}px`;updateCoords();
}
function updateCoords(){const c=host?.querySelector('#signCoords');if(c)c.textContent=`Trang ${st.page} · X ${st.rect.x.toFixed(1)} · Y ${st.rect.y.toFixed(1)} · Rộng ${st.rect.w.toFixed(1)} pt · Cao ${st.rect.h.toFixed(1)} pt`;}
function bindBoxPointer(){
  const box=host?.querySelector('#signBox'),wrap=host?.querySelector('#signPdfWrap'),resize=host?.querySelector('.office-sign-resize');if(!box||!wrap)return;
  box.onpointerdown=e=>{if(e.target===resize)return;e.preventDefault();box.setPointerCapture(e.pointerId);st.dragging={type:'move',sx:e.clientX,sy:e.clientY,orig:{...st.rect}};};
  resize.onpointerdown=e=>{e.preventDefault();e.stopPropagation();resize.setPointerCapture(e.pointerId);st.dragging={type:'resize',sx:e.clientX,sy:e.clientY,orig:{...st.rect}};};
  const move=e=>{if(!st.dragging)return;const dx=(e.clientX-st.dragging.sx)/st.previewScale,dy=(e.clientY-st.dragging.sy)/st.previewScale,o=st.dragging.orig;if(st.dragging.type==='move'){st.rect.x=clamp(o.x+dx,0,st.pageSize.width-o.w);st.rect.y=clamp(o.y+dy,0,st.pageSize.height-o.h);}else{st.rect.w=clamp(o.w+dx,80,st.pageSize.width-o.x);st.rect.h=clamp(o.h+dy,35,st.pageSize.height-o.y);}positionBox();updateBoxArtwork();};
  const up=()=>{st.dragging=null;};box.onpointermove=move;box.onpointerup=up;box.onpointercancel=up;resize.onpointermove=move;resize.onpointerup=up;resize.onpointercancel=up;
  wrap.onpointerdown=e=>{if(e.target!==wrap&&e.target.tagName!=='CANVAS')return;if(e.target===box||box.contains(e.target))return;const r=wrap.getBoundingClientRect();const x=(e.clientX-r.left)/st.previewScale,y=(e.clientY-r.top)/st.previewScale;st.rect.x=clamp(x-st.rect.w/2,0,st.pageSize.width-st.rect.w);st.rect.y=clamp(y-st.rect.h/2,0,st.pageSize.height-st.rect.h);positionBox();updateBoxArtwork();};
}

function applyPreset(id){
  const keepLogo=st.design.logoDataUrl,keepFont=st.design.customFontName;
  const presets={
    professional:{preset:id,logoMode:'left',background:'#eef4ff',backgroundOpacity:100,borderWidth:0,radius:8,padding:10,primaryColor:'#0b4ea2',secondaryColor:'#263746',fontFamily:'Times New Roman',fontWeight:'700',labelSize:5,primarySize:8.5,metaSize:5.2,lineHeight:1.16,align:'left',logoSize:72,logoGap:8,shadow:false},
    minimal:{preset:id,logoMode:'none',background:'#ffffff',backgroundOpacity:0,borderWidth:0,radius:0,padding:7,primaryColor:'#111111',secondaryColor:'#222222',fontFamily:'Arial',fontWeight:'600',labelSize:4.7,primarySize:8,metaSize:4.8,lineHeight:1.12,align:'left',shadow:false},
    watermark:{preset:id,logoMode:'watermark',background:'#ffffff',backgroundOpacity:100,borderWidth:0,radius:7,padding:8,primaryColor:'#153f72',secondaryColor:'#243442',fontFamily:'Times New Roman',fontWeight:'700',labelSize:4.8,primarySize:8.8,metaSize:5,lineHeight:1.14,align:'center',watermarkOpacity:10,logoSize:115,shadow:false},
    compact:{preset:id,logoMode:'left',background:'#ffffff',backgroundOpacity:100,borderWidth:1,borderColor:'#d5dce5',radius:5,padding:6,primaryColor:'#1c2d3a',secondaryColor:'#3e4d58',fontFamily:'Arial',fontWeight:'700',labelSize:4,primarySize:7.3,metaSize:4.3,lineHeight:1.06,align:'left',logoSize:55,logoGap:5,shadow:false},
    seal:{preset:id,logoMode:'seal',background:'#fffdf9',backgroundOpacity:100,borderWidth:1,borderColor:'#b7904d',radius:12,padding:9,primaryColor:'#6e4d18',secondaryColor:'#594b37',accentColor:'#b7904d',fontFamily:'Georgia',fontWeight:'700',labelSize:4.5,primarySize:8.6,metaSize:4.8,lineHeight:1.12,align:'left',logoSize:68,logoGap:9,shadow:false},
    center:{preset:id,logoMode:'top',background:'#f8fbff',backgroundOpacity:100,borderWidth:1,borderColor:'#cfdbea',radius:12,padding:8,primaryColor:'#174c8f',secondaryColor:'#33485d',fontFamily:'Times New Roman',fontWeight:'700',labelSize:4.6,primarySize:8.2,metaSize:4.7,lineHeight:1.08,align:'center',logoSize:46,logoGap:4,shadow:false}
  };
  st.design={...st.design,...presets[id],logoDataUrl:keepLogo,customFontName:keepFont};saveSettings();render();
}

async function pickLogo(){
  const files=await api.fileInput('image/png,image/jpeg,image/webp,.png,.jpg,.jpeg,.webp',false);const f=files?.[0];if(!f)return;const raw=await fileToDataUrl(f);st.design.logoDataUrl=await optimizeImageData(raw,640);saveSettings();render();
}
async function pickCustomFont(){
  const files=await api.fileInput('.ttf,.otf,font/ttf,font/otf',false);const f=files?.[0];if(!f)return;
  try{if(st.customFontUrl)URL.revokeObjectURL(st.customFontUrl);st.customFontUrl=URL.createObjectURL(f);const family=`KBSignCustom_${Date.now()}`;const face=new FontFace(family,`url(${st.customFontUrl})`);await face.load();document.fonts.add(face);st.customFontFace=family;st.design.customFontName=f.name;saveSettings();render();}catch(e){api.showError(e)}
}
function currentFontFamily(){return st.customFontFace||st.design.fontFamily||'Times New Roman';}

async function renderDesignPreview(){
  const canvas=host?.querySelector('#signDesignCanvas');if(!canvas)return;await drawSignatureArtwork(canvas,900,280,Math.max(2,900/Math.max(160,st.rect.w)));}
async function updateBoxArtwork(){
  const box=host?.querySelector('#signBox');if(!box)return;
  try{const c=document.createElement('canvas');const aspect=Math.max(.15,st.rect.h/st.rect.w);const w=900,h=Math.round(w*aspect);await drawSignatureArtwork(c,w,h,w/st.rect.w);box.style.backgroundImage=`url(${c.toDataURL('image/png')})`;box.style.backgroundSize='100% 100%';}catch{}
}
async function createAppearancePng(){
  const c=document.createElement('canvas');const pxPerPt=Math.min(4,Math.max(2.2,1200/Math.max(120,st.rect.w)));const w=Math.max(600,Math.round(st.rect.w*pxPerPt)),h=Math.max(150,Math.round(st.rect.h*pxPerPt));await drawSignatureArtwork(c,w,h,pxPerPt);return await canvasToBlob(c,'image/png');
}

async function drawSignatureArtwork(canvas,width,height,pxPerPt){
  canvas.width=Math.max(2,Math.round(width));canvas.height=Math.max(2,Math.round(height));const ctx=canvas.getContext('2d');ctx.clearRect(0,0,width,height);const d=st.design;const s=pxPerPt||width/Math.max(1,st.rect.w);const radius=d.radius*s,pad=d.padding*s;
  ctx.save();if(d.shadow){ctx.shadowColor='rgba(0,0,0,.18)';ctx.shadowBlur=d.shadowBlur*s*.35;ctx.shadowOffsetY=2*s;}
  roundedPath(ctx,0,0,width,height,radius);ctx.fillStyle=hexAlpha(d.background,d.backgroundOpacity/100);ctx.fill();ctx.shadowColor='transparent';if(d.borderWidth>0){ctx.lineWidth=d.borderWidth*s;ctx.strokeStyle=d.borderColor;if(d.borderStyle==='dashed')ctx.setLineDash([5*s,3*s]);else if(d.borderStyle==='dotted')ctx.setLineDash([1*s,3*s]);ctx.stroke();ctx.setLineDash([]);}ctx.restore();

  let logo=null;if(d.logoMode!=='none'&&d.logoDataUrl){try{logo=await loadImage(d.logoDataUrl)}catch{}}
  const inner={x:pad,y:pad,w:width-pad*2,h:height-pad*2};let text={...inner};
  const logoPct=d.logoSize/100,logoGap=d.logoGap*s,ox=d.logoOffsetX*s,oy=d.logoOffsetY*s;
  if(d.logoMode==='watermark'&&logo){const targetH=inner.h*logoPct,ratio=logo.width/logo.height,targetW=Math.min(inner.w*.9,targetH*ratio),th=targetW/ratio;ctx.save();ctx.globalAlpha=d.watermarkOpacity/100;ctx.drawImage(logo,inner.x+(inner.w-targetW)/2+ox,inner.y+(inner.h-th)/2+oy,targetW,th);ctx.restore();}
  else if(d.logoMode==='left'&&logo){const lh=Math.min(inner.h*logoPct,inner.h),lw=lh*(logo.width/logo.height);ctx.save();ctx.globalAlpha=d.logoOpacity/100;ctx.drawImage(logo,inner.x+ox,inner.y+(inner.h-lh)/2+oy,lw,lh);ctx.restore();text.x+=lw+logoGap;text.w-=lw+logoGap;}
  else if(d.logoMode==='right'&&logo){const lh=Math.min(inner.h*logoPct,inner.h),lw=lh*(logo.width/logo.height);ctx.save();ctx.globalAlpha=d.logoOpacity/100;ctx.drawImage(logo,inner.x+inner.w-lw+ox,inner.y+(inner.h-lh)/2+oy,lw,lh);ctx.restore();text.w-=lw+logoGap;}
  else if(d.logoMode==='top'&&logo){const lh=Math.min(inner.h*.38*logoPct,inner.h*.42),lw=Math.min(inner.w*.65,lh*(logo.width/logo.height));const realH=lw/(logo.width/logo.height);ctx.save();ctx.globalAlpha=d.logoOpacity/100;ctx.drawImage(logo,inner.x+(inner.w-lw)/2+ox,inner.y+oy,lw,realH);ctx.restore();text.y+=realH+logoGap;text.h-=realH+logoGap;}
  else if(d.logoMode==='seal'){const size=Math.min(inner.h*.82,inner.w*.25)*logoPct;const cx=inner.x+size/2,cy=inner.y+inner.h/2;ctx.save();ctx.strokeStyle=d.accentColor||d.primaryColor;ctx.lineWidth=Math.max(1,1.6*s);ctx.beginPath();ctx.arc(cx,cy,size*.46,0,Math.PI*2);ctx.stroke();ctx.beginPath();ctx.arc(cx,cy,size*.36,0,Math.PI*2);ctx.stroke();ctx.fillStyle=d.accentColor||d.primaryColor;ctx.font=`${Math.round(size*.26)}px ${currentFontFamily()}`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(initials(primaryText()),cx,cy);ctx.restore();text.x+=size+logoGap;text.w-=size+logoGap;}

  const lines=signatureLines();const family=currentFontFamily();const align=d.align;ctx.textAlign=align;ctx.textBaseline='alphabetic';const tx=align==='center'?text.x+text.w/2:align==='right'?text.x+text.w:text.x;let total=0;
  let metrics=lines.map(line=>{const size=(line.kind==='primary'?d.primarySize:line.kind==='label'?d.labelSize:d.metaSize)*s;const lh=size*d.lineHeight;total+=lh;return {line,size,lh};});
  // Nhiều dòng thông tin: tự co toàn bộ cỡ chữ theo chiều cao để không tràn khỏi ô ký.
  if(total>text.h&&total>0){const fit=Math.max(.52,text.h/total);total=0;metrics=metrics.map(m=>{const size=m.size*fit,lh=m.lh*fit;total+=lh;return {...m,size,lh};});}
  let y=text.y+Math.max(0,(text.h-total)/2);
  for(const m of metrics){y+=m.lh*.78;ctx.fillStyle=m.line.kind==='primary'?d.primaryColor:d.secondaryColor;const weight=m.line.kind==='primary'?d.fontWeight:(m.line.kind==='label'?'500':'400');let fs=m.size;ctx.font=`${weight} ${fs}px ${family}`;const max=text.w;while(fs>3*s&&ctx.measureText(m.line.text).width>max){fs*=.94;ctx.font=`${weight} ${fs}px ${family}`;}ctx.fillText(m.line.text,tx,y,max);y+=m.lh*.22;}
}

function signatureLines(){
  const d=st.design,lines=[];
  if(d.showLabel)lines.push({kind:'label',text:'Ký bởi:'});
  lines.push({kind:'primary',text:primaryText()||'NGƯỜI KÝ'});
  if(st.mode==='enterprise'){
    if(d.showExtra&&st.enterprise.tax)lines.push({kind:'meta',text:`MST: ${st.enterprise.tax}`});
    if(d.showExtra)normalizeExtraFields(st.enterprise.extraFields).forEach(f=>{if(f.value.trim())lines.push({kind:'meta',text:`${f.label.trim()||'Thông tin'}: ${f.value.trim()}`})});
  }else{
    if(d.showExtra)normalizeExtraFields(st.personal.extraFields).forEach(f=>{if(f.value.trim())lines.push({kind:'meta',text:`${f.label.trim()||'Thông tin'}: ${f.value.trim()}`})});
    if(d.showEmail&&st.personal.email)lines.push({kind:'meta',text:`Email: ${st.personal.email}`});
  }
  if(d.customLine1.trim())lines.push({kind:'meta',text:d.customLine1.trim()});if(d.customLine2.trim())lines.push({kind:'meta',text:d.customLine2.trim()});
  if(d.showDate)lines.push({kind:'meta',text:`Ngày ký: ${formatDate(new Date())}`});
  if(d.showCertificateNote)lines.push({kind:'meta',text:st.mode==='personal'?'Chữ ký số cá nhân (self-signed)':'Chữ ký số doanh nghiệp'});
  return lines;
}
function primaryText(){return st.mode==='enterprise'?st.enterprise.company:st.personal.name;}
function initials(v=''){return v.trim().split(/\s+/).slice(-2).map(x=>x[0]||'').join('').toUpperCase()||'KS';}
function formatDate(d){const p=n=>String(n).padStart(2,'0');return `${p(d.getDate())}/${p(d.getMonth()+1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;}
function roundedPath(ctx,x,y,w,h,r){r=Math.min(Math.max(0,r),w/2,h/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();}
function hexAlpha(hex,a){const h=(hex||'#ffffff').replace('#','');const v=h.length===3?h.split('').map(x=>x+x).join(''):h;const n=parseInt(v,16)||0;return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${clamp(a,0,1)})`;}

async function exportAppearancePng(){try{const blob=await createAppearancePng();await api.saveBlob(blob,`${safeStem(st.file?.name||'chu_ky')}_mau_chu_ky.png`,'PNG chữ ký');}catch(e){api.showError(e)}}


function closeSigningModal(){
  const dlg=officeDialogEl();
  dlg?.querySelector('.office-sign-modal-layer')?.remove();
}
function openSigningForm({title,subtitle='',html='',confirm='Xác nhận',validate=null,wide=false}={}){
  return new Promise(resolve=>{
    closeSigningModal();
    const parent=officeDialogEl()||document.body;
    const layer=document.createElement('div');
    layer.className='office-sign-modal-layer';
    layer.innerHTML=`<div class="office-sign-modal ${wide?'wide':''}" role="dialog" aria-modal="true" aria-label="${escAttr(title)}">
      <div class="office-sign-modal-head"><div><h3>${esc(title)}</h3>${subtitle?`<p>${esc(subtitle)}</p>`:''}</div><button type="button" class="icon-btn" data-modal-close aria-label="Đóng">×</button></div>
      <form class="office-sign-modal-form">
        <div class="office-sign-modal-fields">${html}</div>
        <div class="office-sign-modal-error" aria-live="polite"></div>
        <div class="office-sign-modal-actions"><button type="button" class="office-btn" data-modal-cancel>Hủy</button><button type="submit" class="office-btn primary">${esc(confirm)}</button></div>
      </form>
    </div>`;
    parent.appendChild(layer);
    const form=layer.querySelector('form'),errEl=layer.querySelector('.office-sign-modal-error');
    const finish=v=>{document.removeEventListener('keydown',key,true);layer.remove();resolve(v);};
    const key=e=>{if(e.key==='Escape'){e.preventDefault();finish(null)}};
    document.addEventListener('keydown',key,true);
    layer.querySelector('[data-modal-close]').onclick=()=>finish(null);
    layer.querySelector('[data-modal-cancel]').onclick=()=>finish(null);
    layer.addEventListener('pointerdown',e=>{if(e.target===layer)finish(null)});
    form.onsubmit=async e=>{
      e.preventDefault();errEl.textContent='';
      const btn=form.querySelector('button[type="submit"]');btn.disabled=true;
      try{
        const values=Object.fromEntries(new FormData(form).entries());
        const msg=validate?await validate(values,form):'';
        if(msg){errEl.textContent=msg;btn.disabled=false;return}
        finish(values);
      }catch(err){errEl.textContent=err?.message||String(err);btn.disabled=false}
    };
    setTimeout(()=>layer.querySelector('input,select,textarea')?.focus(),30);
  });
}

async function requestPersonalPassword({title='Nhập mật khẩu certificate',confirm='Tiếp tục',verify=true}={}){
  if(!st.certRecord)return null;
  return await openSigningForm({
    title,
    subtitle:'Mật khẩu chỉ dùng trong lần thao tác này và không được lưu.',
    confirm,
    html:`<label class="office-field"><span>Mật khẩu certificate</span><input name="password" type="password" autocomplete="current-password" required placeholder="Nhập mật khẩu certificate"></label>`,
    validate:async v=>{
      if(!v.password)return 'Vui lòng nhập mật khẩu.';
      if(verify){
        try{await getPersonalKeyMaterial(v.password)}
        catch{return 'Mật khẩu không đúng. Nếu đã quên mật khẩu, hãy đóng popup, bấm “Xóa certificate” rồi tạo lại.'}
      }
      return '';
    }
  });
}

async function createPersonalCertificate(options={}){
  const continueToSign=Boolean(options.continueToSign);
  const result=await openSigningForm({
    title:st.certRecord?'Tạo certificate cá nhân mới':'Tạo certificate cá nhân',
    subtitle:'Không cần USB Token. Certificate và private key được tạo ngay trên trình duyệt; private key được mã hóa bằng mật khẩu.',
    confirm:continueToSign?'Tạo & ký PDF':'Tạo certificate',
    wide:true,
    html:`<div class="office-grid">
      <label class="office-field"><span>Họ và tên</span><input name="name" value="${escAttr(st.personal.name)}" required placeholder="Ví dụ: Lâm Hoài Linh"></label>
      <label class="office-field"><span>Email</span><input name="email" type="email" value="${escAttr(st.personal.email)}" placeholder="email@example.com"></label>
      <label class="office-field"><span>Hiệu lực</span><select name="years">${[1,2,3,5,10].map(n=>`<option value="${n}" ${Number(st.personal.years)===n?'selected':''}>${n} năm</option>`).join('')}</select></label>
      <div></div>
      <label class="office-field"><span>Mật khẩu certificate</span><input name="password" type="password" autocomplete="new-password" required placeholder="Ít nhất 6 ký tự"></label>
      <label class="office-field"><span>Nhập lại mật khẩu</span><input name="password2" type="password" autocomplete="new-password" required placeholder="Nhập lại mật khẩu"></label>
    </div>
    <div class="office-sign-modal-note">Các dòng như Chức danh, Điện thoại, Website… được lấy từ phần “Thông tin hiển thị thêm” trên giao diện và có thể sửa bất cứ lúc nào mà không cần tạo lại certificate.</div>`,
    validate:v=>{
      if(!String(v.name||'').trim())return 'Vui lòng nhập họ và tên.';
      if(String(v.password||'').length<6)return 'Mật khẩu nên có ít nhất 6 ký tự.';
      if(v.password!==v.password2)return 'Hai lần nhập mật khẩu chưa khớp.';
      return '';
    }
  });
  if(!result)return false;
  const name=String(result.name||'').trim(),email=String(result.email||'').trim(),pass=String(result.password||'');
  st.personal.name=name;st.personal.email=email;st.personal.years=Number(result.years)||5;
  try{
    api.startBusy('Đang tạo RSA key và certificate cá nhân…');
    const forge=await ensureForge();
    const keys=await forgeGenerateKeyPair(forge,2048);
    const cert=forge.pki.createCertificate();
    cert.publicKey=keys.publicKey;
    cert.serialNumber=randomHex(16);
    cert.validity.notBefore=new Date(Date.now()-86400000);
    cert.validity.notAfter=new Date();
    cert.validity.notAfter.setFullYear(cert.validity.notAfter.getFullYear()+(Number(st.personal.years)||5));
    const attrs=[{name:'commonName',value:name},{name:'organizationName',value:'Chữ ký cá nhân'}];
    if(email)attrs.push({name:'emailAddress',value:email});
    cert.setSubject(attrs);cert.setIssuer(attrs);
    cert.setExtensions([{name:'basicConstraints',cA:false},{name:'keyUsage',digitalSignature:true,nonRepudiation:true},{name:'extKeyUsage',clientAuth:true,emailProtection:true},{name:'subjectKeyIdentifier'}]);
    cert.sign(keys.privateKey,forge.md.sha256.create());
    const certPem=forge.pki.certificateToPem(cert);
    const encryptedKeyPem=forge.pki.encryptRsaPrivateKey(keys.privateKey,pass,{algorithm:'aes256'});
    // Kiểm tra ngay bằng chính mật khẩu vừa nhập trước khi lưu.
    if(!forge.pki.decryptRsaPrivateKey(encryptedKeyPem,pass))throw new Error('Không kiểm tra được private key sau khi tạo.');
    const meta={subject:name,email,bits:2048,notAfter:cert.validity.notAfter.toLocaleDateString('vi-VN'),createdAt:new Date().toISOString(),certPem,storage:'pem-v2'};
    const record={kind:'pem-v2',certPem,encryptedKeyPem,meta};
    await idbPut(PERSONAL_SECRET_KEY,record);
    // Xóa bản P12 cũ để không vô tình dùng lại certificate lỗi.
    await idbDelete(LEGACY_PERSONAL_P12_KEY).catch(()=>{});
    st.certRecord=record;st.personal.certMeta=meta;saveSettings();
    api.endBusy('Đã tạo certificate cá nhân.');
    render();
    if(continueToSign){if(await confirmPersonalRewriteIfNeeded())await signPersonalWithPassword(pass);}
    else setTimeout(()=>alert('Đã tạo certificate cá nhân. Mật khẩu không được lưu. Nên tải bản sao P12 và cất ở nơi an toàn.'),50);
    return true;
  }catch(e){api.showError(e);return false}
}

async function deletePersonalCertificate(){
  if(!st.certRecord)return;
  const ok=confirm('Xóa certificate cá nhân đang lưu trên trình duyệt này?\n\nTên, email và các thông tin hiển thị vẫn được giữ để anh tạo certificate mới.');
  if(!ok)return;
  try{
    await idbDelete(PERSONAL_SECRET_KEY).catch(()=>{});
    await idbDelete(LEGACY_PERSONAL_P12_KEY).catch(()=>{});
    st.certRecord=null;st.personal.certMeta=null;saveSettings();render();
    api.setStatus('Đã xóa certificate cá nhân. Có thể tạo lại ngay.',100);
  }catch(e){api.showError(e)}
}

async function parseImportedP12(bytes,password){
  const forge=await ensureForge();
  const asn1=forge.asn1.fromDer(u8ToBinaryString(bytes));
  const p12=forge.pkcs12.pkcs12FromAsn1(asn1,false,password);
  const certBags=p12.getBags({bagType:forge.pki.oids.certBag})[forge.pki.oids.certBag]||[];
  let keyBags=p12.getBags({bagType:forge.pki.oids.pkcs8ShroudedKeyBag})[forge.pki.oids.pkcs8ShroudedKeyBag]||[];
  if(!keyBags.length)keyBags=p12.getBags({bagType:forge.pki.oids.keyBag})[forge.pki.oids.keyBag]||[];
  const privateKey=keyBags.find(b=>b?.key)?.key;
  if(!privateKey)throw new Error('P12/PFX không có private key.');
  let certificate=null;
  for(const b of certBags){
    if(!b?.cert)continue;
    const pub=b.cert.publicKey;
    if(pub?.n&&privateKey?.n&&privateKey.n.compareTo(pub.n)===0){certificate=b.cert;break}
  }
  certificate ||= certBags.find(b=>b?.cert)?.cert;
  if(!certificate)throw new Error('P12/PFX không có certificate.');
  const cn=certificate.subject.getField('CN')?.value||'Certificate cá nhân';
  const email=certificate.subject.getField('E')?.value||'';
  let bits=2048;try{bits=certificate.publicKey.n.bitLength()}catch{}
  const certPem=forge.pki.certificateToPem(certificate);
  return {forge,privateKey,certificate,certPem,meta:{subject:cn,email,bits,notAfter:certificate.validity.notAfter.toLocaleDateString('vi-VN'),importedAt:new Date().toISOString(),certPem,storage:'pem-v2'}};
}

async function importPersonalP12(){
  const files=await api.fileInput('.p12,.pfx,application/x-pkcs12',false);const f=files?.[0];if(!f)return;
  const bytes=new Uint8Array(await f.arrayBuffer());
  const result=await openSigningForm({
    title:'Nhập P12/PFX cá nhân',
    subtitle:`File: ${f.name}. Sau khi nhập, KanBan chuyển certificate sang kho nội bộ ổn định hơn để ký trên trình duyệt.`,
    confirm:'Nhập certificate',
    html:`<label class="office-field"><span>Mật khẩu P12/PFX</span><input name="password" type="password" autocomplete="current-password" required placeholder="Nhập mật khẩu"></label>`,
    validate:async v=>{try{await parseImportedP12(bytes,v.password);return ''}catch{return 'Mật khẩu không đúng hoặc P12/PFX không hợp lệ.'}}
  });
  if(!result)return;
  try{
    api.startBusy('Đang nhập P12/PFX…');
    const parsed=await parseImportedP12(bytes,result.password);
    const encryptedKeyPem=parsed.forge.pki.encryptRsaPrivateKey(parsed.privateKey,result.password,{algorithm:'aes256'});
    const record={kind:'pem-v2',certPem:parsed.certPem,encryptedKeyPem,meta:parsed.meta};
    await idbPut(PERSONAL_SECRET_KEY,record);
    await idbDelete(LEGACY_PERSONAL_P12_KEY).catch(()=>{});
    st.certRecord=record;st.personal.certMeta=parsed.meta;st.personal.name=parsed.meta.subject||st.personal.name;st.personal.email=parsed.meta.email||st.personal.email;saveSettings();
    api.endBusy('Đã nhập certificate cá nhân.');render();
  }catch(e){api.showError(e)}
}

async function getPersonalKeyMaterial(password){
  if(!st.certRecord)throw new Error('Chưa có certificate cá nhân.');
  const forge=await ensureForge();
  if(st.certRecord.kind==='pem-v2'){
    const privateKey=forge.pki.decryptRsaPrivateKey(st.certRecord.encryptedKeyPem,password);
    if(!privateKey)throw new Error('Mật khẩu không đúng.');
    const certificate=forge.pki.certificateFromPem(st.certRecord.certPem);
    return {forge,privateKey,certificate};
  }
  // Tương thích certificate P12 của các bản KanBan cũ; nếu mở được sẽ tự chuyển sang định dạng mới.
  if(st.certRecord.bytes){
    const parsed=await parseImportedP12(st.certRecord.bytes,password);
    const encryptedKeyPem=parsed.forge.pki.encryptRsaPrivateKey(parsed.privateKey,password,{algorithm:'aes256'});
    const record={kind:'pem-v2',certPem:parsed.certPem,encryptedKeyPem,meta:parsed.meta};
    await idbPut(PERSONAL_SECRET_KEY,record);
    st.certRecord=record;st.personal.certMeta=parsed.meta;saveSettings();
    return {forge:parsed.forge,privateKey:parsed.privateKey,certificate:parsed.certificate};
  }
  throw new Error('Dữ liệu certificate không hợp lệ. Hãy xóa và tạo lại.');
}

async function backupPersonalP12(){
  if(!st.certRecord)return;
  const r=await requestPersonalPassword({title:'Mật khẩu để xuất bản sao P12',confirm:'Tạo P12',verify:true});if(!r)return;
  try{
    const {forge,privateKey,certificate}=await getPersonalKeyMaterial(r.password);
    const p12=forge.pkcs12.toPkcs12Asn1(privateKey,[certificate],r.password,{algorithm:'3des',friendlyName:st.personal.name||'KanBan Personal'});
    const bytes=binaryStringToU8(forge.asn1.toDer(p12).getBytes());
    await api.saveBlob(new Blob([bytes],{type:'application/x-pkcs12'}),`${safeStem(st.personal.name||'chu_ky_ca_nhan')}.p12`,'PKCS#12');
  }catch(e){api.showError(e)}
}
async function checkPersonalSecret(){
  if(!st.certRecord)return createPersonalCertificate();
  const r=await requestPersonalPassword({title:'Kiểm tra mật khẩu certificate',confirm:'Kiểm tra',verify:true});
  if(r)alert('Mật khẩu đúng. Certificate cá nhân sẵn sàng để ký.');
}
async function loadPersonalRecordQuiet(){
  try{
    const fresh=await idbGet(PERSONAL_SECRET_KEY);
    if(fresh?.encryptedKeyPem&&fresh?.certPem){st.certRecord=fresh;st.personal.certMeta=fresh.meta||st.personal.certMeta;return}
    const legacy=await idbGet(LEGACY_PERSONAL_P12_KEY);
    if(legacy?.bytes){st.certRecord={kind:'legacy-p12',bytes:new Uint8Array(legacy.bytes),meta:legacy.meta||{}};st.personal.certMeta=legacy.meta||st.personal.certMeta;}
  }catch{}
}

async function checkAgent(show=true){
  try{const r=await fetch(`${AGENT_URL}/health`,{method:'GET',headers:{'X-KanBan-Agent':'linh-kanban-v1'},cache:'no-store',targetAddressSpace:'loopback'});if(!r.ok)throw new Error(`HTTP ${r.status}`);const j=await r.json();st.agent.online=true;st.agent.version=j.version||'KanBan Signing Agent';if(show)alert(`Đã kết nối ${st.agent.version}.`);render();await refreshAgentCertificates();return true;}catch(e){st.agent.online=false;st.agent.certificates=[];if(show)alert('Chưa kết nối Signing Agent. Hãy tải/cài Agent, mở Agent rồi thử lại.');render();return false;}
}
async function refreshAgentCertificates(){
  if(!st.agent.online){await checkAgent(false);if(!st.agent.online)return;}
  try{api.startBusy('Đang đọc chứng thư Windows qua Agent…');const q=new URLSearchParams({company:st.enterprise.company||'',tax:st.enterprise.tax||''});const r=await fetch(`${AGENT_URL}/certificates?${q}`,{headers:{'X-KanBan-Agent':'linh-kanban-v1'},cache:'no-store',targetAddressSpace:'loopback'});if(!r.ok)throw new Error(await r.text());const j=await r.json();st.agent.certificates=Array.isArray(j.certificates)?j.certificates:[];const best=[...st.agent.certificates].sort((a,b)=>scoreCert(b)-scoreCert(a))[0];const current=st.agent.certificates.find(c=>c.thumbprint===st.enterprise.certThumbprint);if(best&&scoreCert(best)>0&&(!current||scoreCert(best)>scoreCert(current)+50)){st.enterprise.certThumbprint=best.thumbprint;st.enterprise.certLabel=best.who||'';saveSettings();}api.endBusy(`Đã đọc ${st.agent.certificates.length} chứng thư Windows.`);render();}catch(e){api.showError(e)}
}

async function confirmPersonalRewriteIfNeeded(){
  if(!st.hasDigitalSignature)return true;
  const r=await openSigningForm({
    title:'PDF đã có chữ ký số',
    subtitle:'KanBan luôn xuất ra một file mới và không thay đổi file gốc.',
    confirm:'Tôi hiểu, tiếp tục ký bản sao',
    html:`<div class="office-warning"><b>Lưu ý về chữ ký đã có</b><br>Ký cá nhân thuần trình duyệt cần dựng lại cấu trúc PDF để chèn hình chữ ký. Vì vậy chữ ký số đã có trên <b>bản sao mới</b> có thể bị Foxit/Adobe đánh dấu không còn hợp lệ. <b>File gốc của anh vẫn nguyên vẹn.</b></div>
      <label class="office-check office-sign-confirm-risk"><input name="understand" type="checkbox" value="yes"> Tôi đã hiểu và muốn tạo bản sao để ký cá nhân</label>`,
    validate:v=>v.understand==='yes'?'':'Vui lòng đánh dấu xác nhận trước khi tiếp tục.'
  });
  return Boolean(r);
}

async function runSign(){
  if(!st.file||!st.bytes)return alert('Hãy chọn PDF.');
  if(st.mode==='personal'){
    if(!st.certRecord)return createPersonalCertificate({continueToSign:true});
    return signPersonal();
  }
  return signEnterprise();
}
async function signPersonal(){
  if(!st.certRecord)return createPersonalCertificate({continueToSign:true});
  if(!(await confirmPersonalRewriteIfNeeded()))return;
  const r=await requestPersonalPassword({title:'Nhập mật khẩu certificate để ký',confirm:'KÝ BẢN SAO PDF',verify:true});
  if(!r)return;
  return signPersonalWithPassword(r.password);
}
async function makeForgeKeySigner(mods,privateKey,certificate){
  const forge=await ensureForge();
  const BaseSigner=mods.signpdf.Signer;
  if(!BaseSigner)throw new Error('Thư viện ký PDF không cung cấp Signer base.');
  return new (class extends BaseSigner{
    async sign(pdfBuffer,signingTime=undefined){
      if(!privateKey?.n||!privateKey?.e)throw new Error('Ký cá nhân trên trình duyệt hiện hỗ trợ certificate RSA.');
      const p7=forge.pkcs7.createSignedData();
      p7.content=forge.util.createBuffer(u8ToBinaryString(pdfBuffer));
      p7.addCertificate(certificate);
      p7.addSigner({
        key:privateKey,certificate,digestAlgorithm:forge.pki.oids.sha256,
        authenticatedAttributes:[
          {type:forge.pki.oids.contentType,value:forge.pki.oids.data},
          {type:forge.pki.oids.signingTime,value:signingTime||new Date()},
          {type:forge.pki.oids.messageDigest}
        ]
      });
      p7.sign({detached:true});
      return binaryStringToU8(forge.asn1.toDer(p7.toAsn1()).getBytes());
    }
  })();
}
async function signPersonalWithPassword(pass){
  try{
    api.startBusy('Đang chuẩn bị bản sao để ký cá nhân…');
    const keyMaterial=await getPersonalKeyMaterial(pass);
    const [mods,appearanceBlob]=await Promise.all([ensureSignModules(),createAppearancePng()]);
    const {PDFDocument}=mods.pdfLib;
    const pdfDoc=await PDFDocument.load(st.bytes,{ignoreEncryption:false});
    const page=pdfDoc.getPage(st.page-1);
    const png=await pdfDoc.embedPng(new Uint8Array(await appearanceBlob.arrayBuffer()));
    const rect=pdfRectBottomLeft();
    page.drawImage(png,{x:rect[0],y:rect[1],width:rect[2]-rect[0],height:rect[3]-rect[1]});
    mods.placeholder.pdflibAddPlaceholder({
      pdfDoc,pdfPage:page,reason:'Ký số cá nhân',contactInfo:st.personal.email||'',
      name:st.personal.name||'Người ký',location:'KanBan Cá Nhân',
      signatureLength:32768,widgetRect:rect,signingTime:new Date()
    });
    const prepared=await pdfDoc.save({useObjectStreams:false,updateFieldAppearances:false});
    const signer=await makeForgeKeySigner(mods,keyMaterial.privateKey,keyMaterial.certificate);
    const engine=mods.signpdf.default?.sign?mods.signpdf.default:new mods.signpdf.SignPdf();
    api.setStatus('Đang tạo chữ ký CMS…',70);
    const signed=await engine.sign(prepared,signer);
    await api.saveBlob(new Blob([signed],{type:'application/pdf'}),`${safeStem(st.file.name)}_BAN_SAO_KY_CA_NHAN.pdf`,'Bản sao PDF đã ký cá nhân');
    api.endBusy('Đã tạo bản sao và ký cá nhân. File gốc không thay đổi.');
  }catch(e){
    const msg=String(e?.message||e);
    const friendly=/password|decrypt|mật khẩu/i.test(msg)?'Mật khẩu certificate không đúng. Nếu quên mật khẩu, hãy xóa certificate và tạo lại.':msg;
    api.showError(new Error(`Ký cá nhân thất bại: ${friendly}`));
  }
}
async function signEnterprise(){
  if(!st.agent.online){const ok=await checkAgent(true);if(!ok)return;}
  if(!st.enterprise.certThumbprint)return alert('Hãy đọc và chọn chứng thư Windows.');
  const pinForm=await openSigningForm({
    title:'Nhập PIN USB Token',
    subtitle:`Chứng thư: ${st.enterprise.certLabel||'Chứng thư Windows đã chọn'}. PIN chỉ gửi tới Signing Agent trên chính máy và không được lưu.`,
    confirm:'KÝ BẢN SAO PDF',
    html:`<label class="office-field"><span>PIN USB Token</span><input name="pin" type="password" autocomplete="off" required placeholder="Nhập PIN"></label>`,
    validate:v=>v.pin?'':'Vui lòng nhập PIN USB Token.'
  });
  if(!pinForm)return;const pin=pinForm.pin;
  try{api.startBusy('Đang gửi yêu cầu ký tới Agent cục bộ…');const appearance=await createAppearancePng();const appearanceB64=await blobToBase64(appearance);const pdfB64=u8ToBase64(st.bytes);const payload={pdfBase64:pdfB64,fileName:st.file.name,page:st.page,rect:pdfRectBottomLeft(),appearancePngBase64:appearanceB64,thumbprint:st.enterprise.certThumbprint,pin,tsa:st.enterprise.tsa||'',company:st.enterprise.company||'',tax:st.enterprise.tax||''};const r=await fetch(`${AGENT_URL}/sign`,{method:'POST',headers:{'Content-Type':'application/json','X-KanBan-Agent':'linh-kanban-v1'},body:JSON.stringify(payload),targetAddressSpace:'loopback'});if(!r.ok){let msg=await r.text();try{msg=JSON.parse(msg).error||msg}catch{}throw new Error(msg)}const out=new Uint8Array(await r.arrayBuffer());await api.saveBlob(new Blob([out],{type:'application/pdf'}),`${safeStem(st.file.name)}_BAN_SAO_KY_DOANH_NGHIEP.pdf`,'Bản sao PDF đã ký doanh nghiệp');api.endBusy('Đã tạo bản sao và ký doanh nghiệp qua Windows Signing Agent.');}catch(e){api.showError(new Error(`Ký doanh nghiệp thất bại: ${e.message||e}`))}
}
function pdfRectBottomLeft(){const {x,y,w,h}=st.rect;return [x,st.pageSize.height-(y+h),x+w,st.pageSize.height-y];}

async function ensureForge(){if(globalThis.forge)return globalThis.forge;if(forgeLoading)return forgeLoading;forgeLoading=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=SIGN_LIBS.forge;s.async=true;s.onload=()=>globalThis.forge?resolve(globalThis.forge):reject(new Error('node-forge không khởi tạo.'));s.onerror=()=>reject(new Error('Không tải được node-forge. Kiểm tra Internet.'));document.head.appendChild(s);});return forgeLoading;}
async function ensureSignModules(){if(signModulesLoading)return signModulesLoading;signModulesLoading=(async()=>{try{const [signpdf,placeholder,pdfLib]=await Promise.all([import(SIGN_LIBS.signpdf),import(SIGN_LIBS.placeholderPdfLib),import(SIGN_LIBS.pdfLibEsm)]);return {signpdf,placeholder,pdfLib};}catch(e){signModulesLoading=null;throw new Error('Không tải được thư viện ký PDF trên trình duyệt. Kiểm tra Internet rồi thử lại. '+(e.message||e));}})();return signModulesLoading;}
function forgeGenerateKeyPair(forge,bits){return new Promise((resolve,reject)=>forge.pki.rsa.generateKeyPair({bits,e:0x10001,workers:2},(err,k)=>err?reject(err):resolve(k)));}
function randomHex(bytes){const a=new Uint8Array(bytes);crypto.getRandomValues(a);return [...a].map(x=>x.toString(16).padStart(2,'0')).join('');}

function openDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open(SIGN_DB_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(SIGN_DB_STORE))db.createObjectStore(SIGN_DB_STORE)};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function idbPut(key,value){const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(SIGN_DB_STORE,'readwrite');tx.objectStore(SIGN_DB_STORE).put(value,key);tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error)}})}
async function idbDelete(key){const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(SIGN_DB_STORE,'readwrite');tx.objectStore(SIGN_DB_STORE).delete(key);tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error)}})}
async function idbGet(key){const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(SIGN_DB_STORE,'readonly');const req=tx.objectStore(SIGN_DB_STORE).get(key);req.onsuccess=()=>{db.close();resolve(req.result)};req.onerror=()=>{db.close();reject(req.error)}})}

function loadImage(src){return new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(new Error('Không đọc được logo.'));i.src=src;});}
async function optimizeImageData(src,maxSide=640){try{const img=await loadImage(src);const scale=Math.min(1,maxSide/Math.max(img.width,img.height));if(scale>=.999)return src;const c=document.createElement('canvas');c.width=Math.max(1,Math.round(img.width*scale));c.height=Math.max(1,Math.round(img.height*scale));c.getContext('2d').drawImage(img,0,0,c.width,c.height);return c.toDataURL('image/png');}catch{return src}}
function fileToDataUrl(f){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(f)});}
function canvasToBlob(c,type='image/png'){return new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(new Error('Không xuất được ảnh chữ ký.')),type));}
function blobToBase64(blob){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]||'');r.onerror=reject;r.readAsDataURL(blob)});}
function u8ToBase64(u8){let s='';const chunk=0x8000;for(let i=0;i<u8.length;i+=chunk)s+=String.fromCharCode(...u8.subarray(i,i+chunk));return btoa(s);}
function binaryStringToU8(s){const a=new Uint8Array(s.length);for(let i=0;i<s.length;i++)a[i]=s.charCodeAt(i)&255;return a;}
function u8ToBinaryString(a){let s='';const chunk=0x8000;for(let i=0;i<a.length;i+=chunk)s+=String.fromCharCode(...a.subarray(i,i+chunk));return s;}
function esc(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function escAttr(v=''){return esc(v).replace(/`/g,'&#96;');}
function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
function safeStem(n='file'){return String(n).replace(/\.pdf$/i,'').replace(/[<>:"/\\|?*\x00-\x1F]/g,'_').trim()||'file';}
function fmtBytes(n=0){return api?.formatBytes?api.formatBytes(n):n<1048576?`${(n/1024).toFixed(1)} KB`:`${(n/1048576).toFixed(1)} MB`;}
