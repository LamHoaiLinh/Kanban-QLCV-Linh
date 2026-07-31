# CHANGELOG

## v4.0 – Dice Arena
- Thay game Marble Draw bằng Dice Arena.
- Nút `DRAW` đổi thành `DICE`.
- Cho chọn 1–10 xúc xắc.
- Thêm hai chế độ thả đồng thời và thả từng viên.
- Dùng model xúc xắc, cốc lắc và vật liệu từ asset Dice Animation 2.
- Hiển thị kết quả từng viên, tổng điểm và lịch sử gần đây.
- Lưu dữ liệu Dice Arena bằng khóa riêng, không thay đổi dữ liệu Kanban.
- Cập nhật Service Worker lên `linh-kanban-static-v40-dice`.


## v3.2 – Marble Draw
- Thêm nút `DRAW` trên thanh công cụ Kanban.
- Thêm workspace toàn màn hình `MARBLE DRAW – ĐƯỜNG ĐUA MAY MẮN`.
- Thêm quản lý nhiều sự kiện bằng IndexedDB riêng.
- Thêm nhập danh sách người tham dự bằng Excel/CSV và nhập trực tiếp.
- Thêm tải file Excel mẫu.
- Thêm kiểm tra dữ liệu, mã trùng, tên trống và trạng thái đủ điều kiện.
- Thêm khóa danh sách, SHA-256, base-seed commitment và mapping hash.
- Thêm xáo thử, xáo chính thức nhiều lần và khóa mapping.
- Thêm 10 viên bi số 0–9 có cùng cấu hình vật lý.
- Thêm đường đua Three.js + Rapier, pegboard, bộ chia, rotor và cảm biến đích.
- Thêm quay chữ số từ hàng cao nhất xuống hàng thấp nhất.
- Thêm xử lý mã trống bằng cách quay lại toàn bộ chuỗi, không dùng modulo.
- Thêm nhiều giải theo tên giải; có thể loại người đã trúng khỏi các giải sau.
- Thêm lịch sử kết quả, xuất Excel, in/lưu PDF và verification JSON.
- Thêm benchmark nhanh kiểm tra phân bổ chữ số vào vị trí xuất phát.
- Giữ nguyên khóa Local Storage và toàn bộ logic Kanban v3.1.
- Cập nhật Service Worker lên `linh-kanban-static-v32`.

## v3.6
- Đổi Marble Draw sang một màn hình Home duy nhất.
- Nút Xáo danh sách thay đổi thật thứ tự người tham dự trong bảng.
- Bỏ cột Chức danh khỏi giao diện và Excel mẫu.
- Cho chọn 2–10 viên bi mỗi lượt; 3 viên sẽ dùng số 1, 2, 3.
- Số trên viên bi bám theo mặt nhìn thấy và không quay vòng quanh viên bi.
- Thay máng bằng một mặt liền, giảm số chướng ngại để hạn chế kẹt bi.
- Bấm Bắt đầu đua sẽ tự chuẩn bị danh sách và tự chạy các lượt.


## 5.4 - D10 GLB asset
- Added user-provided `dice-game/assets/D10.glb`.
- Added `dice-game/js/d10-engine.js` for Three.js rendering and asset animation.
- D6 remains CSS-based; D10 uses GLB with CSS fallback.
