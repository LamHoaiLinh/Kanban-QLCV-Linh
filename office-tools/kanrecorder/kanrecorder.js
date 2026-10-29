/* KanRecorder control panel for local Windows recorder.
 * External protocol opens a native UI: browsers never access screen, mic or files.
 */
const DEFAULT = Object.freeze({cursor:true,clicks:true,keys:true,audio:'both',fps:'30'});

export function renderKanRecorderTool(host,{setStatus}={}){
  const opt={...DEFAULT};
  host.innerHTML=`<section class="office-tool-panel active" aria-label="KanRecorder">
    <div class="office-tool-head"><div><h3>KanRecorder · Quay màn hình Windows</h3>
    <p>Kéo chọn vùng, nhấn F9 để bắt đầu, F9 để tạm dừng/tiếp tục và F10 để xuất MP4. Không phủ đen desktop.</p></div></div>
    <div class="office-card" style="max-width:820px;display:grid;gap:15px">
      <h4>Thiết lập trước khi mở KanRecorder</h4>
      <div class="office-warning">Chế độ quay: <strong>Region</strong> · Kéo chuột chọn vùng màn hình. Chỉ khởi động quay sau khi anh bấm bắt đầu trong cửa sổ Windows.</div>
      <div style="display:grid;gap:9px">
        <label><input type="checkbox" data-rec="cursor" checked> Hiện con trỏ chuột</label>
        <label><input type="checkbox" data-rec="clicks" checked> Vòng sáng khi click trái/phải</label>
        <label><input type="checkbox" data-rec="keys" checked> Hiển thị phím tắt và phím điều hướng</label>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:16px">
        <label>Âm thanh
          <select data-rec="audio">
            <option value="both">Micro + âm thanh máy tính</option>
            <option value="mic">Chỉ micro</option>
            <option value="system">Chỉ âm thanh máy tính</option>
            <option value="none">Không âm thanh</option>
          </select>
        </label>
        <label>Khung hình
          <select data-rec="fps"><option value="15">15 FPS</option><option value="30" selected>30 FPS</option><option value="60">60 FPS</option></select>
        </label>
      </div>
      <div class="office-toolbar"><button class="office-btn primary" type="button" data-rec-open>Mở KanRecorder trên Windows</button></div>
      <p class="office-card-note" data-rec-message>Sau khi kéo chọn vùng: Ctrl+Alt+F9 để BẮT ĐẦU / tạm dừng / tiếp tục. Chỉ Ctrl+Alt+F10 mới kết thúc và xuất MP4. Video nằm tại Videos/KanRecorder.</p>
      <p class="office-card-note">Bảo mật: chỉ hiển thị phím tắt, không hiển thị chữ đang gõ; vòng click và nhãn phím được chèn vào MP4 khi xuất (không dùng lớp phủ toàn màn hình). Video và âm thanh giữ trên máy. Nếu trình duyệt không mở được, chuột phải nút CÔNG CỤ → Cập nhật / sửa KanBan Tools.</p>
    </div>
  </section>`;
  host.querySelector('[data-rec-open]').addEventListener('click',()=>{
    for(const name of ['cursor','clicks','keys'])opt[name]=host.querySelector('[data-rec="'+name+'"]').checked;
    opt.audio=host.querySelector('[data-rec="audio"]').value;
    opt.fps=host.querySelector('[data-rec="fps"]').value;
    const params=new URLSearchParams({mode:'region',cursor:opt.cursor?'1':'0',clicks:opt.clicks?'1':'0',
                                      keys:opt.keys?'1':'0',audio:opt.audio,fps:opt.fps});
    const message=host.querySelector('[data-rec-message]');
    message.textContent='Đang yêu cầu Windows mở KanRecorder. Nếu trình duyệt hỏi quyền mở ứng dụng ngoài, chọn Cho phép. Nếu chưa cài, cập nhật KanTool.';
    if(setStatus)setStatus('Đã gửi yêu cầu mở KanRecorder trên Windows.');
    // This user gesture only opens settings; it does not start capture.
    window.location.href='kanbanrecorder://open?'+params.toString();
  });
}
