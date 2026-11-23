# Cờ Vua Kanban

Truy cập **Kanban → GAME → Cờ Vua Kanban**, hoặc mở trực tiếp đường dẫn `chess-kanban/index.html`.

## Chức năng
- Hai người cùng thiết bị; nhấn **Đấu với máy** để bật bot (bot chơi quân Đen).
- Độ khó **Dễ / Vừa / Khó**; **Ván mới, Đi lại, Lật bàn, Gợi ý, Đầu hàng**.
- Công tắc Sáng/Tối, bật/tắt âm, lịch sử nước đi, sao chép/tải thế cờ FEN.
- Phong cấp, chiếu hết, hòa cờ, chọn quân: phần mô tả và thông báo đều bằng tiếng Việt.
- Bấm **← Game Hub** để đóng game và quay về Kanban khi mở trong iframe.
- Phím tắt: N (ván mới), U (đi lại), B (đấu với máy), F (lật bàn), H (gợi ý), T (giao diện), M (âm thanh).

## Kỹ thuật
Static HTML/CSS/JS, không cần backend, chạy trong iframe cùng origin trên GitHub Pages. Ký hiệu nước đi và FEN giữ nguyên chuẩn để tương thích phần mềm cờ vua khác. Theme lưu ở localStorage với khóa riêng `kanban-chess-theme-v1`.

## Ghi công
Xem `ATTRIBUTION.md` và `../THIRD_PARTY_LICENSES.md`.
