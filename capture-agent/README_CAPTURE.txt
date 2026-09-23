KANBAN CAPTURE AGENT v2
=======================
Mục đích: chụp màn hình nhanh toàn Windows cho Kanban chạy trên GitHub Pages.

Vì sao cần Agent
- Trang web không thể tự đăng ký Alt+C cho toàn Windows.
- Trang web cũng không thể tự tạo một file ảnh thật trong Clipboard để Ctrl+V vào Windows Explorer.
- Agent chạy cục bộ trên 127.0.0.1:47631; ảnh không tải lên máy chủ.

Cài / cập nhật một lần
1. Pull bản mới từ GitHub.
2. Mở thư mục capture-agent.
3. Chạy CAI_DAT_CHUP_NHANH.bat.
4. Nếu đã từng cài bản cũ, vẫn chạy lại file BAT này. Bản v2 sẽ dừng Agent cũ, chép bản mới và khởi động lại.
5. Cuối quá trình phải thấy thông báo Agent đã được cài và khởi động.

Sử dụng
- Alt + C ở bất kỳ cửa sổ Windows nào: chụp nhanh.
- Hoặc bấm nút CHỤP trong Kanban.
- Kéo chuột tạo vùng chụp. Ngoài vùng chọn sẽ được làm tối.
- Khung chọn có các điểm kéo để thay đổi kích thước và có thể kéo cả khung sang vị trí khác.
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
- Có thể đổi sang PNG.
- File Clipboard tạm nằm trong %LOCALAPPDATA%\KanbanCapture\Clipboard và tự dọn file cũ.

Nếu bấm CHỤP không phản ứng
- Bản web v2 sẽ tự kiểm tra Agent.
- Nếu Agent chưa chạy hoặc là bản cũ, Kanban hiện hộp hướng dẫn và nút Tải bộ cài.
- Chạy lại CAI_DAT_CHUP_NHANH.bat rồi bấm “Thử lại”.
- Nếu Alt+C không đăng ký được vì ứng dụng khác chiếm phím, Agent sẽ báo rõ; nút CHỤP trong Kanban vẫn dùng được.
