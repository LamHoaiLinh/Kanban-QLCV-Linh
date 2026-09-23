KANBAN CAPTURE AGENT
====================
Mục đích: bổ sung chụp màn hình toàn Windows cho bản Kanban chạy trên GitHub Pages.
Lý do cần Agent: trình duyệt web không thể đăng ký phím nóng toàn hệ thống hoặc đưa một file ảnh thật (CF_HDROP) vào Clipboard để Ctrl+V trong Windows Explorer tạo file.

Cài một lần
1. Mở thư mục capture-agent.
2. Chạy CAI_DAT_CHUP_NHANH.bat.
3. Agent tự chạy nền và tự khởi động cùng Windows.

Sử dụng
- Alt + C ở bất kỳ cửa sổ nào: chụp nhanh.
- Kéo chọn vùng cần chụp.
- Công cụ: Chọn, Bút, Khung, Mũi tên, Chữ, Mosaic, Hoàn tác, màu vẽ, Hủy, Xong.
- Sau khi Xong: ảnh đồng thời nằm trong Clipboard dạng ảnh và dạng file.
- Ctrl + V trong Word/Zalo/ứng dụng hỗ trợ ảnh: dán hình.
- Ctrl + V trong Desktop/Windows Explorer: tạo file JPG/PNG ngay, không cần Paint.
- Nút CHỤP trong Kanban gọi cùng công cụ; chuột phải nút CHỤP để mở cài đặt.

Cài đặt mặc định
- Định dạng file: JPG.
- Chất lượng JPG: 100, subsampling 0.
- Có thể đổi sang PNG trong cửa sổ Cài đặt.
- File tạm lưu ở %LOCALAPPDATA%\KanbanCapture\Clipboard và tự dọn file cũ.

Gỡ đăng ký nếu cần
Mở Command Prompt tại thư mục đã cài và chạy:
  py "%LOCALAPPDATA%\KanbanCapture\capture_agent.py" --uninstall
Sau đó có thể xóa thư mục %LOCALAPPDATA%\KanbanCapture nếu không cần giữ ảnh tạm.
