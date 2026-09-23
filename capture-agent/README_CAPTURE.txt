KANBAN CAPTURE AGENT v4
=======================
Mục đích: chụp màn hình nhanh toàn Windows cho Kanban chạy trên GitHub Pages.

Điểm quan trọng
- Bạn KHÔNG cần cài Python.
- Bộ cài v4 không tải trực tiếp file EXE vào thư mục Temp.
- Bộ cài tải một gói ZIP với tên ngẫu nhiên vào %LOCALAPPDATA%\KanbanCapture, kiểm tra SHA256 rồi mới giải nén.
- Cách này tránh lỗi Access denied đã gặp khi PowerShell cố tạo KanbanCapture_download.exe trong %TEMP%.
- Agent chạy cục bộ trên 127.0.0.1:47631; ảnh không được tải lên máy chủ.
- Cài đặt dùng HKCU và %LOCALAPPDATA%, thông thường không cần quyền Administrator.

Cài / cập nhật
1. Trong Kanban bấm CHỤP và chọn “Tải bộ cài”.
2. Chạy CAI_DAT_CHUP_NHANH.bat.
3. Bộ cài tự dừng Agent cũ.
4. Bộ cài tải KanbanCapture-package.zip, kiểm tra SHA256, giải nén và cài KanbanCapture.exe.
5. Bộ cài đăng ký Alt+C, nút CHỤP và tự khởi động cùng Windows.
6. Khi thấy “CAI DAT / CAP NHAT THANH CONG”, quay lại Kanban và bấm “Thử lại”.

Nếu bạn từng cài bản cũ
- Chỉ cần chạy lại BAT v4; không cần gỡ bản cũ.
- Python không còn là điều kiện sử dụng.

Sử dụng
- Alt + C ở bất kỳ cửa sổ Windows nào: chụp nhanh.
- Hoặc bấm nút CHỤP trong Kanban.
- Kéo chuột tạo vùng chụp; ngoài vùng chọn được làm tối.
- Khung chọn có 8 điểm resize và có thể kéo cả khung sang vị trí khác.
- Thanh dọc: Chọn/di chuyển, Chữ, Bút, Khung, Mũi tên, Mosaic, đổi màu, Hoàn tác.
- Thanh ngang: Hủy, Hoàn tác, Lưu file, Copy/Xong.
- Ctrl + C hoặc Enter: Copy/Xong.
- Ctrl + S: lưu thủ công.
- Ctrl + V trong Zalo/Messenger/Word: dán ảnh.
- Ctrl + V trong Desktop/Explorer: tạo file JPG/PNG.

Nếu cài đặt còn lỗi
- “Không tải được gói”: kiểm tra mạng hoặc Windows Security có chặn raw.githubusercontent.com hay không.
- “Không giải nén/chép được Agent”: mở Windows Security > Protection history để xem KanbanCapture.exe có bị cách ly không.
- “Agent chưa khởi động”: kiểm tra SmartScreen/Windows Security.
