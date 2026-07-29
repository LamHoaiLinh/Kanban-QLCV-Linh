# Báo cáo kiểm tra v3.2

## Đã kiểm tra
- Cú pháp toàn bộ JavaScript Kanban, Office Tools và Marble Draw bằng `node --check`.
- HTML không trùng ID.
- Toàn bộ import module local tồn tại.
- Các file chính, GLB và Excel mẫu trả về HTTP 200 qua static server.
- Hàm kiểm tra danh sách với 300 và 500 người.
- Khóa danh sách, SHA-256, seed commitment, track hash và physics hash.
- Xáo chính thức, gán mã 000…N-1 và chạy lại mapping từ seed + shuffleCount.
- Khóa dữ liệu Kanban `linh_personal_kanban_v1` không thay đổi.
- `app.js`, `music-player.js` và `office-tools.js` của Kanban có SHA-256 giống hệt bản v3.1 đầu vào.
- File Excel mẫu mở đúng cấu trúc bằng OpenPyXL khi tạo.

## Chưa thể kiểm thử tự động trong môi trường đóng gói
- Render WebGL/Rapier thực tế: Chromium của môi trường đóng gói không khởi tạo được GPU/ANGLE và bị treo do DBus/GPU sandbox.
- Import module Three.js/Rapier từ CDN: môi trường dòng lệnh không có DNS trực tiếp.
- Vì vậy cần chạy thử đường đua trên Chrome/Edge của máy thật trước khi dùng cho sự kiện chính thức.

## Kiểm thử thực tế cần làm trước sự kiện
1. Mở DRAW và chạy thử đủ 10 viên ít nhất 20 lượt.
2. Kiểm tra không viên nào thường xuyên bị kẹt.
3. Kiểm tra cảm biến đích ghi đúng viên đầu tiên.
4. Chạy benchmark vật lý riêng trên đúng laptop và màn hình máy chiếu sẽ dùng.
5. Xuất và đối chiếu `verification.json`.
6. Chỉ chuyển sang Chạy chính thức sau khi danh sách, mapping và đường đua đã khóa.
