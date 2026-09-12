# Gia Khang Worksheet Editor v7.4.3

Sửa lỗi chế độ **Sửa chữ**:
- Khi đang sửa một khung chữ, click lại vào chính khung đó không còn render lại DOM và làm mất caret/focus.
- Sau khi đổi cỡ chữ, màu chữ hoặc nền chữ trên toolbar, focus được trả lại khung chữ nên có thể gõ tiếp ngay.
- Giữ lại vùng chữ đã chọn sau khi áp dụng định dạng.
- Chuyển từ **Di chuyển** sang **Sửa chữ** khi đang chọn một khung text sẽ vào sửa trực tiếp khung đó.
- Không thay đổi logic project/autosave/export hiện có.

Cache/service worker được nâng phiên bản để GitHub Pages không giữ JS cũ.
