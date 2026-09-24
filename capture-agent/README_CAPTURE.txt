KANBAN CAPTURE AGENT v5
=======================
Mục đích: chụp màn hình nhanh toàn Windows cho Kanban chạy trên GitHub Pages.

Điểm quan trọng
- Bạn KHÔNG cần cài Python.
- Có thêm bộ cài một chạm CAI_DAT_CHUP_NHANH.exe tải trực tiếp từ giao diện Kanban.
- File EXE tự dừng Agent cũ, tải gói mới, kiểm tra SHA256, ghi đè và khởi động lại.
- Vẫn giữ CAI_DAT_CHUP_NHANH.bat làm phương án dự phòng.
- Bộ cài tải một gói ZIP, kiểm tra SHA256 rồi mới giải nén.
- Cách này tránh lỗi Access denied đã gặp khi PowerShell cố tạo KanbanCapture_download.exe trong %TEMP%.
- Agent chạy cục bộ trên 127.0.0.1:47631; ảnh không được tải lên máy chủ.
- Cài đặt dùng HKCU và %LOCALAPPDATA%, thông thường không cần quyền Administrator.

Cài / cập nhật
1. Trong Kanban nhấp chuột phải nút CHỤP.
2. Chọn “Tải / cập nhật .EXE”.
3. Mở CAI_DAT_CHUP_NHANH.exe vừa tải.
4. Bộ cài tự dừng Agent cũ, tải KanbanCapture-package.zip, kiểm tra SHA256, giải nén và ghi đè KanbanCapture.exe.
5. Bộ cài đăng ký Alt+C, nút CHỤP và tự khởi động cùng Windows.
6. Quay lại Kanban, nhấp chuột phải nút CHỤP và bấm “Kiểm tra lại”.

Nếu bạn từng cài bản cũ
- Chỉ cần chạy CAI_DAT_CHUP_NHANH.exe mới; không cần gỡ hoặc xóa bản cũ.
- Nếu EXE bị Windows chặn, có thể dùng BAT dự phòng ngay trong cùng bảng cài đặt.
- Python không còn là điều kiện sử dụng.

Sử dụng
- Alt + C ở bất kỳ cửa sổ Windows nào: chụp nhanh.
- Hoặc bấm nút CHỤP trong Kanban.
- Kéo chuột tạo vùng chụp; ngoài vùng chọn được làm tối.
- Khung chọn có 8 điểm resize và có thể kéo cả khung sang vị trí khác.
- Thanh dọc: Chọn/di chuyển, Chữ, Bút, Khung, Mũi tên, Mosaic, đổi màu, Hoàn tác.
- Khi chọn Bút/Khung/Mũi tên, thanh dọc hiện nút −/+ để chỉnh độ dày nét ngay trong lúc chụp.
- Khi chọn Chữ, thanh dọc hiện nút −/+ để chỉnh cỡ chữ ngay trong lúc chụp.
- Khi nhập chữ, Enter dùng để xuống dòng; Ctrl+Enter xác nhận nội dung.
- Sau khi tạo chữ, khi rê chuột lên chữ con trỏ đổi sang hình bàn tay; giữ chuột trái để kéo cả khung chữ sang vị trí khác.
- Nhấp đúp chữ để vào chế độ sửa.
- Trong chế độ sửa, bôi đen một phần chữ sẽ hiện thanh định dạng riêng cho vùng đang chọn: A−/A+ đổi cỡ, B in đậm, U gạch dưới và bảng màu.
- Định dạng áp dụng theo đúng phần ký tự đang bôi đen, vì vậy trong cùng một khung chữ có thể có nhiều cỡ, đậm/gạch dưới và màu khác nhau.
- Enter trong ô sửa chữ dùng để xuống dòng; Ctrl+Enter xác nhận nội dung.
- Thanh ngang: Hủy, Hoàn tác, Lưu file, Copy/Xong.
- Ctrl + C hoặc Enter (khi không đang gõ chữ): Copy/Xong.
- Ctrl + S: lưu thủ công.
- Ctrl + V trong Zalo/Messenger/Word: dán ảnh.
- Ctrl + V trong Desktop/Explorer: tạo file JPG/PNG.

Nếu cài đặt còn lỗi
- “Không tải được gói”: kiểm tra mạng hoặc Windows Security có chặn raw.githubusercontent.com hay không.
- “Không giải nén/chép được Agent”: mở Windows Security > Protection history để xem KanbanCapture.exe có bị cách ly không.
- “Agent chưa khởi động”: kiểm tra SmartScreen/Windows Security.
