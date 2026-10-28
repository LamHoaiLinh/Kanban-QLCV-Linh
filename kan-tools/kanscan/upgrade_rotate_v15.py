"""KanScan v1.5: add page-left/right rotation to a clean v1.4 installation.
Idempotent, rejects unrecognized source layout before writing any file.
"""
import ast
import sys
from pathlib import Path

def replace(source, old, new, label):
    count = source.count(old)
    if count != 1:
        raise RuntimeError("KanScan patch anchor %s: expected one, got %s" % (label, count))
    return source.replace(old, new, 1)

def apply(root):
    root = Path(root)
    fpy, fhtml, fgui = root/'app.py', root/'templates'/'index.html', root/'KanScan.py'
    py, html, gui = [p.read_text(encoding='utf-8') for p in (fpy,fhtml,fgui)]
    if "def rotate_page(doc_id, number):" in py and 'id="rotateLeft"' in html:
        return False
    py = replace(py, "'manual_corners': []})",
                 "'manual_corners': [], 'rotations': []})", "draft")
    py = replace(py, "    flags = meta.get('cropped_flags', [False] * count)\n    result = []",
                 "    flags = meta.get('cropped_flags', [False] * count)\n    rotations = meta.get('rotations', [])\n    result = []", "metadata")
    py = replace(py, "'cropped': flags[i] if i < len(flags) else False})",
                 "'cropped': flags[i] if i < len(flags) else False,\n                       'rotation': rotations[i] if i < len(rotations) else 0})", "details")
    py = replace(py, "            meta.setdefault('manual_corners', []).append(None)",
                 "            meta.setdefault('manual_corners', []).append(None)\n"
                 "            meta.setdefault('rotations', [0] * (number - 1)).append(0)", "add")
    py = replace(py,
        "            cropped = manual_perspective_crop(normalized, points)\n            temp = directory / f'.manual_{number:02d}.tmp'",
        "            cropped = manual_perspective_crop(normalized, points)\n"
        "            rotation = meta.get('rotations', [0] * meta['count'])[number - 1]\n"
        "            if rotation:\n"
        "                cropped = cropped.transpose({90: Image.Transpose.ROTATE_270,\n"
        "                                             180: Image.Transpose.ROTATE_180,\n"
        "                                             270: Image.Transpose.ROTATE_90}[rotation])\n"
        "            temp = directory / f'.manual_{number:02d}.tmp'", "manual-crop")
    py = replace(py,
        "            meta.setdefault('manual_corners', [None] * meta['count'])[number-1] = None\n            remove_join_previews(directory)",
        "            meta.setdefault('manual_corners', [None] * meta['count'])[number-1] = None\n"
        "            rotations = meta.setdefault('rotations', [0] * meta['count'])\n"
        "            rotations[number-1] = 0\n            remove_join_previews(directory)", "replace")
    py = replace(py, "('page_sizes', 'captured_at', 'cropped_flags', 'manual_corners')",
                 "('page_sizes', 'captured_at', 'cropped_flags', 'manual_corners', 'rotations')", "delete")
    route = '''@app.post('/api/rotate/<doc_id>/<int:number>')
@require_local_post
@needs_pairing
def rotate_page(doc_id, number):
    """Rotate one processed page, preserve all original photos and remaining pages."""
    try:
        with lock:
            meta = metadata(doc_id)
            if meta['finished']:
                return api_error('Bộ ảnh đã hoàn tất, không thể xoay.')
            if not 1 <= number <= meta['count']:
                return api_error('Số trang không hợp lệ.', 404)
            direction = (request.get_json(silent=True) or {}).get('direction')
            if direction not in ('left', 'right'):
                return api_error('Chọn xoay trái hoặc xoay phải.')
            folder = draft_path(doc_id)
            destination = folder / f'page_{number:02d}.jpeg'
            temporary = folder / f'.rotate_{number:02d}_{uuid.uuid4().hex}.tmp'
            with Image.open(destination) as opened:
                transformed = opened.transpose(
                    Image.Transpose.ROTATE_90 if direction == 'left'
                    else Image.Transpose.ROTATE_270
                )
                try:
                    transformed.save(temporary, format='JPEG',
                                     quality=CONFIG['jpeg_quality'], optimize=True)
                    os.replace(temporary, destination)
                finally:
                    transformed.close()
                    temporary.unlink(missing_ok=True)
            rotations = meta.setdefault('rotations', [0] * meta['count'])
            while len(rotations) < meta['count']:
                rotations.append(0)
            rotations[number - 1] = (rotations[number - 1] +
                                     (90 if direction == 'right' else -90)) % 360
            remove_join_previews(folder)
            save_metadata(doc_id, meta)
            with Image.open(destination) as im:
                orientation = page_geometry(im, meta['page_sizes'][number - 1])[2]
            return jsonify({'ok': True, 'number': number, 'rotation': rotations[number - 1],
                            'orientation': orientation, 'pages': page_details(meta),
                            'preview_bands': preview_page_bands(doc_id, meta)})
    except (FileNotFoundError, ValueError, OSError) as exc:
        return api_error(str(exc))


'''
    py = replace(py, "@app.delete('/api/page/<doc_id>/<int:number>')\n",
                 route+"@app.delete('/api/page/<doc_id>/<int:number>')\n", "rotate-route")
    html = replace(html,'<button id="cropPage">▱ Chọn 4 góc giấy thủ công</button>',
        '<button id="cropPage">▱ Chọn 4 góc giấy thủ công</button>\n'
        '      <div class="rotate-actions" role="group" aria-label="Xoay trang đã chọn">\n'
        '        <button id="rotateLeft">↶ Xoay trái 90°</button>\n'
        '        <button id="rotateRight">↷ Xoay phải 90°</button>\n'
        '      </div>', "buttons")
    html = replace(html, '</style>',
        '.rotate-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n'
        '.rotate-actions button{min-width:0;font-size:14px;padding:12px 8px;border-radius:12px}\n'
        '</style>', "css")
    html = replace(html, '    <p>Chỉ chỉnh trang đã chọn, các trang khác được giữ nguyên.</p>',
        '    <p>Chỉ chỉnh trang đã chọn, các trang khác được giữ nguyên. Xoay ảnh 90° sẽ cập nhật ngay ảnh ghép.</p>',
        "description")
    html = replace(html,
        "  const sub=document.createElement('small');sub.textContent=info.paper_size+' · '+(info.cropped?'Đã căn giấy':'Chưa bắt mép');",
        "  const sub=document.createElement('small');sub.textContent=info.paper_size+' · '+(info.cropped?'Đã căn giấy':'Chưa bắt mép')+(info.rotation?' · '+info.rotation+'°':'');",
        "thumbnail")
    client = '''async function rotateSelected(direction){
 if(!editPage||busy)return;
 const n=editPage;working(true);
 notice('Đang xoay '+(direction==='left'?'trái':'phải')+' ảnh số '+n+'…','warning');
 try{
  await api('/api/rotate/'+docId+'/'+n,{method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({direction})});
  closePageMenu();await reloadPages();
  notice('Đã xoay '+(direction==='left'?'trái':'phải')+' 90° ảnh số '+n+'. Các ảnh khác giữ nguyên.');
 }catch(err){notice('Không xoay được ảnh: '+err.message,'error');}
 finally{working(false);}
}
'''
    html = replace(html, "async function deleteSelectedPage(){", client+"async function deleteSelectedPage(){", "client")
    html = replace(html, "el('cropPage').addEventListener('click',openCropEditor);",
        "el('cropPage').addEventListener('click',openCropEditor);\n"
        "el('rotateLeft').addEventListener('click',()=>rotateSelected('left'));\n"
        "el('rotateRight').addEventListener('click',()=>rotateSelected('right'));", "clicks")
    html = replace(html, ' v1.4</span>', ' v1.5</span>', "mobile-version")
    gui = gui.replace("v1.4", "v1.5")
    ast.parse(py)
    ast.parse(gui)
    for path, data in ((fpy,py),(fhtml,html),(fgui,gui)):
        path.write_text(data,encoding='utf-8')
    return True

if __name__=='__main__':
    print("KanScan v1.5 patch complete" if apply(Path(sys.argv[1])) else "Already v1.5")
