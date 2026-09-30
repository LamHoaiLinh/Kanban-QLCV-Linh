KANBAN CAPTURE AGENT v5
=======================
Mục đích: chụp màn hình nhanh toàn Windows cho Kanban chạy trên GitHub Pages.

Điểm quan trọng
- Bạn KHÔNG cần cài Python.
- Giao diện Kanban chỉ cung cấp bộ cài/cập nhật CAI_DAT_CHUP_NHANH.bat.
- BAT dùng curl/PowerShell có sẵn trên Windows để tải Agent đã biên dịch sẵn.
- BAT tự dừng Agent cũ, tải gói ZIP mới nhất, kiểm tra SHA256, giải nén, ghi đè và khởi động lại.
- Không cần tự xóa KanbanCapture.exe cũ trước khi cập nhật.
- Agent chạy cục bộ trên 127.0.0.1:47631; ảnh không được tải lên máy chủ.
- Cài đặt dùng HKCU và %LOCALAPPDATA%, thông thường không cần quyền Administrator.

Cài / cập nhật
1. Trong Kanban nhấp chuột phải nút CHỤP.
2. Chọn “Tải / cập nhật .BAT”.
3. Mở CAI_DAT_CHUP_NHANH.bat vừa tải.
4. BAT tự dừng Agent cũ.
5. BAT tải KanbanCapture-package.zip và file SHA256 từ GitHub.
6. BAT kiểm tra SHA256, giải nén và ghi đè %LOCALAPPDATA%\KanbanCapture\KanbanCapture.exe.
7. BAT đăng ký Alt+C, nút CHỤP và tự khởi động cùng Windows.
8. Khi hiện “CAI DAT / CAP NHAT THANH CONG”, quay lại Kanban và bấm “Kiểm tra lại”.

Nếu bạn từng cài bản cũ
- Chỉ cần chạy lại CAI_DAT_CHUP_NHANH.bat mới.
- Không cần gỡ hoặc xóa bản cũ.
- Không cần Python.

Sử dụng
- Alt + C ở bất kỳ cửa sổ Windows nào: chụp nhanh.
- Alt + X: bắt đầu chụp dài theo khung cố định.
- Trong Alt+X: chọn/chỉnh vùng và chú thích như Alt+C, nhấn X để chốt từng đoạn; sau đoạn đầu khung (x, y, width, height) được khóa.
- Cuộn chuột để chuyển nội dung phía dưới; Agent tự làm mới ảnh nền trong đúng khung đã khóa.
- Ctrl+Z / Ctrl+Y: Undo / Redo thao tác hiện tại; khi không còn thao tác edit, có thể hoàn tác/làm lại đoạn đã chốt.
- Ctrl+C: tự chốt đoạn cuối nếu cần, dò phần overlap theo chiều dọc, ghép chuỗi và copy ảnh dài; Ctrl+V ra Desktop/Explorer để tạo một file ảnh.
- Nếu hai đoạn không có overlap đủ tin cậy, Agent giữ nguyên cả đoạn thay vì tự cắt, ưu tiên không làm mất nội dung.
- Hoặc bấm nút CHỤP trong Kanban để dùng chế độ Alt+C.
- Kéo chuột tạo vùng chụp; ngoài vùng chọn được làm tối.
- Alt+C: 4 nút màu cam ở bốn góc dùng để kéo độc lập và ôm đúng 4 góc tài liệu; cách này sửa cả xoay lệch lẫn méo phối cảnh/hình thang.
- Nút xanh lá phía trên là tay xoay toàn bộ khung; 4 nút giữa cạnh dùng để thay đổi kích thước.
- Ctrl+C / Lưu file sẽ biến tứ giác đã chọn thành ảnh chữ nhật thẳng trước khi xuất; xoay/phối cảnh đều có Undo/Redo.
- Khung chọn có thể kéo cả khung sang vị trí khác.
- Thanh dọc: Chọn/di chuyển, Chữ, Bút, Khung, Mũi tên, Mosaic, đổi màu, Hoàn tác/Làm lại.
- Khi chọn Bút/Khung/Mũi tên, thanh dọc hiện nút −/+ để chỉnh độ dày nét.
- Khi chọn Chữ, thanh dọc hiện nút −/+ để chỉnh cỡ chữ.
- Hover lên chữ: con trỏ đổi sang bàn tay; giữ chuột trái để kéo cả chuỗi chữ.
- Nhấp đúp chữ: vào chế độ sửa.
- Bôi đen một phần chữ: hiện thanh định dạng A−/A+, B, I, U và màu.
- Enter trong ô sửa chữ: xuống dòng.
- Ctrl+Enter: xác nhận nội dung.
- Delete khi đang chọn/hover chuỗi chữ: xóa chuỗi.
- Ctrl+Z / Ctrl+Y: Undo / Redo.
- Thanh ngang: Hủy, Hoàn tác, Làm lại, Lưu file, Copy/Xong.
- Ctrl + C hoặc Enter (khi không đang gõ chữ): Copy/Xong.
- Ctrl + S: lưu thủ công.
- Ctrl + V trong Zalo/Messenger/Word: dán ảnh.
- Ctrl + V trong Desktop/Explorer: tạo file JPG/PNG.

Nếu cài đặt còn lỗi
- “Không tải được gói”: kiểm tra mạng hoặc Windows Security có chặn raw.githubusercontent.com hay không.
- “Không giải nén/chép được Agent”: mở Windows Security > Protection history để xem KanbanCapture.exe có bị cách ly không.
- “Agent chưa khởi động”: kiểm tra SmartScreen/Windows Security.
