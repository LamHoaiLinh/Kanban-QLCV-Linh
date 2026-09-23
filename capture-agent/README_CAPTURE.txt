KANBAN CAPTURE AGENT v3
=======================
Mục đích: chụp màn hình nhanh toàn Windows cho Kanban chạy trên GitHub Pages.

Điểm quan trọng
- Bạn KHÔNG cần cài Python.
- CAI_DAT_CHUP_NHANH.bat tự tải KanbanCapture.exe đã được đóng gói sẵn từ repo.
- Agent chạy cục bộ trên 127.0.0.1:47631; ảnh không được tải lên máy chủ.
- Cài đặt chỉ dùng HKCU và %LOCALAPPDATA%, không yêu cầu quyền Administrator trong điều kiện bình thường.

Vì sao cần Agent
- Trang web không thể tự đăng ký Alt+C cho toàn Windows.
- Trang web cũng không thể tự tạo một file ảnh thật trong Clipboard để Ctrl+V vào Windows Explorer.
- Vì vậy phần chụp toàn Windows phải chạy bằng một chương trình nhỏ trên máy.

Cài / cập nhật
1. Trong Kanban, bấm CHỤP và chọn “Tải bộ cài”, hoặc lấy file CAI_DAT_CHUP_NHANH.bat trong thư mục capture-agent.
2. Chạy CAI_DAT_CHUP_NHANH.bat.
3. Bộ cài tự dừng bản cũ, tải KanbanCapture.exe, kiểm tra SHA256, đăng ký Alt+C/nút CHỤP và khởi động Agent.
4. Khi thấy “CAI DAT / CAP NHAT THANH CONG”, quay lại Kanban và bấm “Thử lại”.
5. Nếu bạn từng cài bản Python cũ, bộ cài v3 vẫn thay thế bằng bản EXE mới; Python không còn là điều kiện sử dụng.

Sử dụng
- Alt + C ở bất kỳ cửa sổ Windows nào: chụp nhanh.
- Hoặc bấm nút CHỤP trong Kanban.
- Kéo chuột tạo vùng chụp. Ngoài vùng chọn được làm tối.
- Khung chọn có 8 điểm kéo để thay đổi kích thước và có thể kéo cả khung sang vị trí khác.
- Thanh dọc bên phải: Chọn/di chuyển, Chữ, Bút, Khung, Mũi tên, Mosaic, đổi màu, Hoàn tác.
- Thanh ngang dưới khung: Hủy, Hoàn tác, Lưu file, Copy/Xong.
- Ctrl + C: tương đương Copy/Xong.
- Enter: tương đương Copy/Xong.
- Ctrl + S: lưu file thủ công.
- Sau Copy/Xong, Ctrl + V trong Zalo/Messenger/Word sẽ dán ảnh.
- Ctrl + V trong Desktop/Windows Explorer sẽ tạo file JPG/PNG ngay.

Cài đặt
- Chuột phải nút CHỤP trong Kanban để mở cài đặt Agent.
- Mặc định JPG chất lượng 100, subsampling 0.
- Bạn có thể đổi sang PNG.
- File Clipboard tạm nằm trong %LOCALAPPDATA%\KanbanCapture\Clipboard và tự dọn file cũ.

Nếu bấm CHỤP không phản ứng
- Kanban tự kiểm tra Agent.
- Nếu Agent chưa chạy, Kanban hiện hộp hướng dẫn và nút Tải bộ cài.
- Chạy lại CAI_DAT_CHUP_NHANH.bat rồi bấm “Thử lại”.
- Nếu Alt+C bị ứng dụng khác chiếm phím, Agent sẽ báo rõ; nút CHỤP trong Kanban vẫn có thể dùng.
