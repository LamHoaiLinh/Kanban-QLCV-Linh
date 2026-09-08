/*
 * PDF Signing module for Kanban Cá Nhân.
 * Scope: ONLY the PDF > Ký số sub-tool.
 * - Does not read/write Kanban task data.
 * - Uses a dedicated localStorage key + dedicated IndexedDB database.
 * - Personal signing: self-signed P12 generated and used locally in browser.
 * - Enterprise signing: sends PDF only to a local Windows Signing Agent on 127.0.0.1.
 */

const SIGN_SETTINGS_KEY = 'linh_kanban_pdf_signing_settings_v1';
const SIGN_DB_NAME = 'linh_kanban_pdf_signing_store_v1';
const SIGN_DB_STORE = 'secrets';
const PERSONAL_P12_KEY = 'personal-p12';
const AGENT_URL = 'http://127.0.0.1:8765';
const AGENT_DOWNLOAD = './office-tools/downloads/KanBan_Signing_Agent.exe';
const SIGN_LIBS = {
  forge: 'https://unpkg.com/node-forge@1.3.1/dist/forge.min.js',
  signpdf: 'https://esm.sh/@signpdf/signpdf@3.3.0',
  signerP12: 'https://esm.sh/@signpdf/signer-p12@3.3.0',
  placeholderPdfLib: 'https://esm.sh/@signpdf/placeholder-pdf-lib@3.3.0?deps=pdf-lib@1.17.1',
  pdfLibEsm: 'https://esm.sh/pdf-lib@1.17.1'
};

const DEFAULTS = {
  mode: 'personal',
  personal: {name:'',email:'',extraLabel:'Thông tin',extraValue:'',years:5,certMeta:null},
  enterprise: {company:'',tax:'',certThumbprint:'',certLabel:'',tsa:''},
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
  return {
    mode: saved.mode || DEFAULTS.mode,
    personal: {...DEFAULTS.personal,...(saved.personal||{})},
    enterprise: {...DEFAULTS.enterprise,...(saved.enterprise||{})},
    design,
    file:null, bytes:null, pdfjsDoc:null, page:1, pageCount:0, pageSize:{width:595,height:842},
    rect:{x:55,y:690,w:250,h:70}, // top-left PDF coordinates
    previewScale:1,
    hasDigitalSignature:false,
    allowRewriteSigned:false,
    customFontFace:null,
    customFontUrl:null,
    certRecord:null,
    agent:{online:false,version:'',certificates:[],busy:false},
    dragging:null,
  };
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
  await loadPersonalRecordQuiet();
  render();
  if(st.file) queueMicrotask(()=>renderPdfPage());
  if(st.mode==='enterprise') queueMicrotask(()=>checkAgent(false));
}

function render(){
  if(!host)return;
  host.innerHTML=`
    <div class="office-sign-modebar">
      <button class="office-sign-mode ${st.mode==='personal'?'active':''}" data-sign-mode="personal" type="button"><b>👤 Ký cá nhân</b><span>Mặc định · không cần cài thêm</span></button>
      <button class="office-sign-mode ${st.mode==='enterprise'?'active':''}" data-sign-mode="enterprise" type="button"><b>🏢 Ký doanh nghiệp</b><span>USB Token · dùng Agent Windows</span></button>
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
    ${st.hasDigitalSignature&&st.mode==='personal'?`<div class="office-warning office-sign-signed-warning"><strong>PDF đã có chữ ký số.</strong> Ký cá nhân thuần trình duyệt phải lưu lại cấu trúc PDF và có thể làm chữ ký cũ mất hiệu lực. <label class="office-check"><input id="signAllowRewrite" type="checkbox" ${st.allowRewriteSigned?'checked':''}> Tôi hiểu rủi ro và vẫn muốn ký cá nhân trên bản này</label></div>`:''}
  </div>`;
}

function identityCard(){
  if(st.mode==='personal'){
    const meta=st.personal.certMeta;
    return `<div class="office-card">
      <div class="office-card-title-row"><div><h4>2. Chữ ký cá nhân</h4><p class="office-card-note">Tạo certificate self-signed ngay trên máy. Private key được lưu trong P12 đã mã hóa trong kho riêng của trình duyệt; mật khẩu không được lưu.</p></div><span class="office-recommend-badge">Không cần USB Token</span></div>
      <div class="office-grid">
        <label class="office-field"><span>Họ và tên</span><input id="psName" value="${escAttr(st.personal.name)}" placeholder="Ví dụ: Lâm Hoài Linh"></label>
        <label class="office-field"><span>Email</span><input id="psEmail" type="email" value="${escAttr(st.personal.email)}" placeholder="email@example.com"></label>
        <label class="office-field"><span>Nhãn thông tin thêm</span><select id="psExtraLabel">${['Thông tin','CCCD','Chức danh','Mã cá nhân','Điện thoại'].map(x=>`<option ${st.personal.extraLabel===x?'selected':''}>${x}</option>`).join('')}</select></label>
        <label class="office-field"><span>Giá trị</span><input id="psExtraValue" value="${escAttr(st.personal.extraValue)}" placeholder="Không bắt buộc"></label>
      </div>
      <div class="office-sign-cert-status ${meta?'good':''}">${meta?`<b>✓ Đã có certificate cá nhân</b><span>${esc(meta.subject||st.personal.name)} · RSA ${meta.bits||2048} · hết hạn ${esc(meta.notAfter||'')}</span>`:'<b>Chưa có certificate cá nhân</b><span>Tạo một lần rồi dùng lại trên trình duyệt này.</span>'}</div>
      <div class="office-grid three office-sign-password-grid">
        <label class="office-field"><span>Mật khẩu P12</span><input id="psPassword" type="password" autocomplete="new-password" placeholder="Không lưu mật khẩu"></label>
        <label class="office-field"><span>Nhập lại khi tạo mới</span><input id="psPassword2" type="password" autocomplete="new-password" placeholder="Chỉ dùng khi tạo/cập nhật"></label>
        <label class="office-field"><span>Hiệu lực</span><select id="psYears">${[1,2,3,5,10].map(n=>`<option value="${n}" ${Number(st.personal.years)===n?'selected':''}>${n} năm</option>`).join('')}</select></label>
      </div>
      <div class="office-toolbar"><button class="office-btn primary" id="psCreate">${meta?'Tạo certificate mới / cập nhật':'Tạo certificate cá nhân'}</button><button class="office-btn" id="psImport">Nhập P12/PFX</button><button class="office-btn" id="psBackup" ${meta?'':'disabled'}>Tải bản sao P12</button><button class="office-btn" id="psCheck" ${meta?'':'disabled'}>Kiểm tra mật khẩu</button></div>
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
    <div class="office-sign-agent-panel">
      <div><b id="agentStatus">${agentOnline?`✓ Đã kết nối ${esc(st.agent.version||'KanBan Signing Agent')}`:'Chưa kết nối Agent tại 127.0.0.1:8765'}</b><span>${agentOnline?'USB Token/chứng thư được xử lý cục bộ trên Windows.':'Cài một lần trên Windows; sau đó chỉ cần cắm Token và mở Agent.'}</span></div>
      <div class="office-toolbar"><a class="office-btn primary" href="${AGENT_DOWNLOAD}" download>Tải Signing Agent (.exe)</a><button class="office-btn" id="agentCheck">Kiểm tra kết nối</button><button class="office-btn" id="agentCertRefresh" ${agentOnline?'':'disabled'}>Đọc chứng thư</button></div>
    </div>
    <div class="office-grid">
      <label class="office-field"><span>Chứng thư Windows</span><select id="esCert" ${agentOnline?'':'disabled'}>${certificateOptions()}</select><small>Ứng dụng ưu tiên certificate khớp tên/MST; tránh certificate localhost/test.</small></label>
      <label class="office-field"><span>PIN USB Token</span><input id="esPin" type="password" autocomplete="off" placeholder="Không lưu PIN" ${agentOnline?'':'disabled'}></label>
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
  const ready=Boolean(st.file&&(st.mode==='personal'?st.certRecord:st.agent.online));
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
  const allow=host.querySelector('#signAllowRewrite');if(allow)allow.onchange=e=>st.allowRewriteSigned=e.target.checked;
}
function bindIdentity(){
  if(st.mode==='personal'){
    bindInput('#psName',v=>st.personal.name=v);
    bindInput('#psEmail',v=>st.personal.email=v);
    bindInput('#psExtraValue',v=>st.personal.extraValue=v);
    host.querySelector('#psExtraLabel')?.addEventListener('change',e=>{st.personal.extraLabel=e.target.value;saveSettings();renderDesignPreview();});
    host.querySelector('#psYears')?.addEventListener('change',e=>{st.personal.years=Number(e.target.value)||5;saveSettings();});
    host.querySelector('#psCreate')?.addEventListener('click',createPersonalCertificate);
    host.querySelector('#psImport')?.addEventListener('click',importPersonalP12);
    host.querySelector('#psBackup')?.addEventListener('click',backupPersonalP12);
    host.querySelector('#psCheck')?.addEventListener('click',checkPersonalP12);
  }else{
    bindInput('#esCompany',v=>st.enterprise.company=v);
    bindInput('#esTax',v=>st.enterprise.tax=v);
    bindInput('#esTsa',v=>st.enterprise.tsa=v);
    host.querySelector('#agentCheck')?.addEventListener('click',()=>checkAgent(true));
    host.querySelector('#agentCertRefresh')?.addEventListener('click',refreshAgentCertificates);
    host.querySelector('#esCert')?.addEventListener('change',e=>{st.enterprise.certThumbprint=e.target.value;const c=st.agent.certificates.find(x=>x.thumbprint===e.target.value);st.enterprise.certLabel=c?.who||'';saveSettings();renderDesignPreview();});
  }
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
}

async function loadPdf(file){
  if(!file)return;
  try{
    api.startBusy('Đang đọc PDF để ký…');
    const bytes=new Uint8Array(await file.arrayBuffer());
    const pdfjs=await api.ensurePdfJs();
    const task=pdfjs.getDocument({data:bytes.slice()});
    const doc=await task.promise;
    st.file=file;st.bytes=bytes;st.pdfjsDoc=doc;st.page=1;st.pageCount=doc.numPages;st.hasDigitalSignature=bytesContainAscii(bytes,'/ByteRange');st.allowRewriteSigned=false;
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
  const metrics=lines.map(line=>{const size=(line.kind==='primary'?d.primarySize:line.kind==='label'?d.labelSize:d.metaSize)*s;const lh=size*d.lineHeight;total+=lh;return {line,size,lh};});
  let y=text.y+Math.max(0,(text.h-total)/2);
  for(const m of metrics){y+=m.lh*.78;ctx.fillStyle=m.line.kind==='primary'?d.primaryColor:d.secondaryColor;const weight=m.line.kind==='primary'?d.fontWeight:(m.line.kind==='label'?'500':'400');let fs=m.size;ctx.font=`${weight} ${fs}px ${family}`;const max=text.w;while(fs>3*s&&ctx.measureText(m.line.text).width>max){fs*=.94;ctx.font=`${weight} ${fs}px ${family}`;}ctx.fillText(m.line.text,tx,y,max);y+=m.lh*.22;}
}

function signatureLines(){
  const d=st.design,lines=[];
  if(d.showLabel)lines.push({kind:'label',text:'Ký bởi:'});
  lines.push({kind:'primary',text:primaryText()||'NGƯỜI KÝ'});
  if(st.mode==='enterprise'){
    if(d.showExtra&&st.enterprise.tax)lines.push({kind:'meta',text:`MST: ${st.enterprise.tax}`});
  }else{
    if(d.showExtra&&st.personal.extraValue)lines.push({kind:'meta',text:`${st.personal.extraLabel||'Thông tin'}: ${st.personal.extraValue}`});
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

async function createPersonalCertificate(){
  const name=host.querySelector('#psName')?.value.trim(),email=host.querySelector('#psEmail')?.value.trim(),pass=host.querySelector('#psPassword')?.value||'',pass2=host.querySelector('#psPassword2')?.value||'';if(!name)return alert('Hãy nhập họ và tên.');if(pass.length<6)return alert('Mật khẩu P12 nên có ít nhất 6 ký tự.');if(pass!==pass2)return alert('Hai lần nhập mật khẩu chưa khớp.');
  try{api.startBusy('Đang tạo RSA key và certificate cá nhân…');const forge=await ensureForge();const keys=await forgeGenerateKeyPair(forge,2048);const cert=forge.pki.createCertificate();cert.publicKey=keys.publicKey;cert.serialNumber=randomHex(16);cert.validity.notBefore=new Date(Date.now()-86400000);cert.validity.notAfter=new Date();cert.validity.notAfter.setFullYear(cert.validity.notAfter.getFullYear()+(Number(st.personal.years)||5));const attrs=[{name:'commonName',value:name},{name:'organizationName',value:'Chữ ký cá nhân'}];if(email)attrs.push({name:'emailAddress',value:email});cert.setSubject(attrs);cert.setIssuer(attrs);cert.setExtensions([{name:'basicConstraints',cA:false},{name:'keyUsage',digitalSignature:true,nonRepudiation:true},{name:'extKeyUsage',clientAuth:true,emailProtection:true},{name:'subjectKeyIdentifier'}]);cert.sign(keys.privateKey,forge.md.sha256.create());const p12=forge.pkcs12.toPkcs12Asn1(keys.privateKey,[cert],pass,{algorithm:'3des',friendlyName:name});const der=forge.asn1.toDer(p12).getBytes();const bytes=binaryStringToU8(der);const meta={subject:name,email,bits:2048,notAfter:cert.validity.notAfter.toLocaleDateString('vi-VN'),createdAt:new Date().toISOString(),certPem:forge.pki.certificateToPem(cert)};await idbPut(PERSONAL_P12_KEY,{bytes:bytes.buffer,meta});st.certRecord={bytes,meta};st.personal.certMeta=meta;saveSettings();api.endBusy('Đã tạo certificate cá nhân. Hãy tải bản sao P12 để dự phòng.');render();setTimeout(()=>alert('Đã tạo certificate cá nhân. Nên bấm “Tải bản sao P12” và lưu ở nơi an toàn.'),50);}catch(e){api.showError(e)}}
async function importPersonalP12(){
  const files=await api.fileInput('.p12,.pfx,application/x-pkcs12',false);const f=files?.[0];if(!f)return;const pass=prompt('Nhập mật khẩu của P12/PFX để kiểm tra (mật khẩu không được lưu):','');if(pass===null)return;try{api.startBusy('Đang kiểm tra P12/PFX…');const bytes=new Uint8Array(await f.arrayBuffer());const meta=await parseP12Meta(bytes,pass);await idbPut(PERSONAL_P12_KEY,{bytes:bytes.buffer,meta});st.certRecord={bytes,meta};st.personal.certMeta=meta;st.personal.name=meta.subject||st.personal.name;st.personal.email=meta.email||st.personal.email;saveSettings();api.endBusy('Đã nhập P12/PFX cá nhân.');render();}catch(e){api.showError(e)}}
async function backupPersonalP12(){if(!st.certRecord)return;await api.saveBlob(new Blob([st.certRecord.bytes],{type:'application/x-pkcs12'}),`${safeStem(st.personal.name||'chu_ky_ca_nhan')}.p12`,'PKCS#12');}
async function checkPersonalP12(){if(!st.certRecord)return;const pass=host.querySelector('#psPassword')?.value||'';if(!pass)return alert('Nhập mật khẩu P12 ở ô mật khẩu.');try{await parseP12Meta(st.certRecord.bytes,pass);alert('Mật khẩu đúng. Certificate cá nhân sẵn sàng để ký.');}catch(e){alert(`Không mở được P12: ${e.message||e}`)}}
async function parseP12Meta(bytes,password){const forge=await ensureForge();const asn1=forge.asn1.fromDer(u8ToBinaryString(bytes));const p12=forge.pkcs12.pkcs12FromAsn1(asn1,false,password);const bags=p12.getBags({bagType:forge.pki.oids.certBag})[forge.pki.oids.certBag]||[];const cert=bags[0]?.cert;if(!cert)throw new Error('P12 không có certificate.');const cn=cert.subject.getField('CN')?.value||'Certificate cá nhân';const email=cert.subject.getField('E')?.value||'';let bits=2048;try{bits=cert.publicKey.n.bitLength()}catch{}return {subject:cn,email,bits,notAfter:cert.validity.notAfter.toLocaleDateString('vi-VN'),importedAt:new Date().toISOString(),certPem:forge.pki.certificateToPem(cert)};}
async function loadPersonalRecordQuiet(){try{const r=await idbGet(PERSONAL_P12_KEY);if(r?.bytes){st.certRecord={bytes:new Uint8Array(r.bytes),meta:r.meta||{}};st.personal.certMeta=r.meta||st.personal.certMeta;}}catch{}}

async function checkAgent(show=true){
  try{const r=await fetch(`${AGENT_URL}/health`,{method:'GET',headers:{'X-KanBan-Agent':'linh-kanban-v1'},cache:'no-store',targetAddressSpace:'loopback'});if(!r.ok)throw new Error(`HTTP ${r.status}`);const j=await r.json();st.agent.online=true;st.agent.version=j.version||'KanBan Signing Agent';if(show)alert(`Đã kết nối ${st.agent.version}.`);render();await refreshAgentCertificates();return true;}catch(e){st.agent.online=false;st.agent.certificates=[];if(show)alert('Chưa kết nối Signing Agent. Hãy tải/cài Agent, mở Agent rồi thử lại.');render();return false;}
}
async function refreshAgentCertificates(){
  if(!st.agent.online){await checkAgent(false);if(!st.agent.online)return;}
  try{api.startBusy('Đang đọc chứng thư Windows qua Agent…');const q=new URLSearchParams({company:st.enterprise.company||'',tax:st.enterprise.tax||''});const r=await fetch(`${AGENT_URL}/certificates?${q}`,{headers:{'X-KanBan-Agent':'linh-kanban-v1'},cache:'no-store',targetAddressSpace:'loopback'});if(!r.ok)throw new Error(await r.text());const j=await r.json();st.agent.certificates=Array.isArray(j.certificates)?j.certificates:[];const best=[...st.agent.certificates].sort((a,b)=>scoreCert(b)-scoreCert(a))[0];const current=st.agent.certificates.find(c=>c.thumbprint===st.enterprise.certThumbprint);if(best&&scoreCert(best)>0&&(!current||scoreCert(best)>scoreCert(current)+50)){st.enterprise.certThumbprint=best.thumbprint;st.enterprise.certLabel=best.who||'';saveSettings();}api.endBusy(`Đã đọc ${st.agent.certificates.length} chứng thư Windows.`);render();}catch(e){api.showError(e)}
}

async function runSign(){
  if(!st.file||!st.bytes)return alert('Hãy chọn PDF.');if(st.mode==='personal')return signPersonal();return signEnterprise();
}
async function signPersonal(){
  if(!st.certRecord)return alert('Hãy tạo hoặc nhập certificate cá nhân.');if(st.hasDigitalSignature&&!st.allowRewriteSigned)return alert('PDF đã có chữ ký số. Ký cá nhân thuần trình duyệt có thể làm chữ ký cũ mất hiệu lực. Nếu vẫn muốn tiếp tục, hãy đánh dấu ô xác nhận rủi ro bên dưới preview PDF.');const pass=host.querySelector('#psPassword')?.value||'';if(!pass)return alert('Nhập mật khẩu P12.');
  try{api.startBusy('Đang chuẩn bị chữ ký cá nhân…');await parseP12Meta(st.certRecord.bytes,pass);const [mods,appearanceBlob]=await Promise.all([ensureSignModules(),createAppearancePng()]);const {PDFDocument}=mods.pdfLib;const pdfDoc=await PDFDocument.load(st.bytes,{ignoreEncryption:false});const page=pdfDoc.getPage(st.page-1);const png=await pdfDoc.embedPng(new Uint8Array(await appearanceBlob.arrayBuffer()));const rect=pdfRectBottomLeft();page.drawImage(png,{x:rect[0],y:rect[1],width:rect[2]-rect[0],height:rect[3]-rect[1]});mods.placeholder.pdflibAddPlaceholder({pdfDoc,pdfPage:page,reason:'Ký số cá nhân',contactInfo:st.personal.email||'',name:st.personal.name||'Người ký',location:'KanBan Cá Nhân',signatureLength:32768,widgetRect:rect,signingTime:new Date()});const prepared=await pdfDoc.save({useObjectStreams:false,updateFieldAppearances:false});const signer=new mods.signer.P12Signer(st.certRecord.bytes,{passphrase:pass});const engine=mods.signpdf.default?.sign?mods.signpdf.default:new mods.signpdf.SignPdf();api.setStatus('Đang tạo chữ ký CMS…',70);const signed=await engine.sign(prepared,signer);await api.saveBlob(new Blob([signed],{type:'application/pdf'}),`${safeStem(st.file.name)}_SIGNED_PERSONAL.pdf`,'PDF đã ký');api.endBusy('Đã ký cá nhân. Mở bằng Foxit/Adobe để kiểm tra chữ ký.');}catch(e){api.showError(new Error(`Ký cá nhân thất bại: ${e.message||e}`))}
}
async function signEnterprise(){
  if(!st.agent.online){const ok=await checkAgent(true);if(!ok)return;}if(!st.enterprise.certThumbprint)return alert('Hãy đọc và chọn chứng thư Windows.');const pin=host.querySelector('#esPin')?.value||'';if(!pin)return alert('Nhập PIN USB Token.');
  try{api.startBusy('Đang gửi yêu cầu ký tới Agent cục bộ…');const appearance=await createAppearancePng();const appearanceB64=await blobToBase64(appearance);const pdfB64=u8ToBase64(st.bytes);const payload={pdfBase64:pdfB64,fileName:st.file.name,page:st.page,rect:pdfRectBottomLeft(),appearancePngBase64:appearanceB64,thumbprint:st.enterprise.certThumbprint,pin,tsa:st.enterprise.tsa||'',company:st.enterprise.company||'',tax:st.enterprise.tax||''};const r=await fetch(`${AGENT_URL}/sign`,{method:'POST',headers:{'Content-Type':'application/json','X-KanBan-Agent':'linh-kanban-v1'},body:JSON.stringify(payload),targetAddressSpace:'loopback'});if(!r.ok){let msg=await r.text();try{msg=JSON.parse(msg).error||msg}catch{}throw new Error(msg)}const out=new Uint8Array(await r.arrayBuffer());await api.saveBlob(new Blob([out],{type:'application/pdf'}),`${safeStem(st.file.name)}_SIGNED.pdf`,'PDF đã ký');api.endBusy('Đã ký doanh nghiệp qua Windows Signing Agent.');}catch(e){api.showError(new Error(`Ký doanh nghiệp thất bại: ${e.message||e}`))}
}
function pdfRectBottomLeft(){const {x,y,w,h}=st.rect;return [x,st.pageSize.height-(y+h),x+w,st.pageSize.height-y];}

async function ensureForge(){if(globalThis.forge)return globalThis.forge;if(forgeLoading)return forgeLoading;forgeLoading=new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=SIGN_LIBS.forge;s.async=true;s.onload=()=>globalThis.forge?resolve(globalThis.forge):reject(new Error('node-forge không khởi tạo.'));s.onerror=()=>reject(new Error('Không tải được node-forge. Kiểm tra Internet.'));document.head.appendChild(s);});return forgeLoading;}
async function ensureSignModules(){if(signModulesLoading)return signModulesLoading;signModulesLoading=(async()=>{try{const [signpdf,signer,placeholder,pdfLib]=await Promise.all([import(SIGN_LIBS.signpdf),import(SIGN_LIBS.signerP12),import(SIGN_LIBS.placeholderPdfLib),import(SIGN_LIBS.pdfLibEsm)]);return {signpdf,signer,placeholder,pdfLib};}catch(e){signModulesLoading=null;throw new Error('Không tải được thư viện ký PDF trên trình duyệt. Kiểm tra Internet rồi thử lại. '+(e.message||e));}})();return signModulesLoading;}
function forgeGenerateKeyPair(forge,bits){return new Promise((resolve,reject)=>forge.pki.rsa.generateKeyPair({bits,e:0x10001,workers:2},(err,k)=>err?reject(err):resolve(k)));}
function randomHex(bytes){const a=new Uint8Array(bytes);crypto.getRandomValues(a);return [...a].map(x=>x.toString(16).padStart(2,'0')).join('');}

function openDb(){return new Promise((resolve,reject)=>{const req=indexedDB.open(SIGN_DB_NAME,1);req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(SIGN_DB_STORE))db.createObjectStore(SIGN_DB_STORE)};req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);});}
async function idbPut(key,value){const db=await openDb();return new Promise((resolve,reject)=>{const tx=db.transaction(SIGN_DB_STORE,'readwrite');tx.objectStore(SIGN_DB_STORE).put(value,key);tx.oncomplete=()=>{db.close();resolve()};tx.onerror=()=>{db.close();reject(tx.error)}})}
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
