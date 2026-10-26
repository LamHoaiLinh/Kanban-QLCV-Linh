# KanScan v1.4 trong KanBan Tools

Mục **CÔNG CỤ → KanScan** được tích hợp bằng `office-tools/kanscan-integration.js`. Tính năng này KHÔNG thay đổi ứng dụng chụp KanScan v1.4, không thay đổi dữ liệu KanBan và không truyền chứng từ lên GitHub.

## Kiến trúc

- GitHub Pages: giao diện KanBan và mục điều hướng KanScan.
- Windows: chương trình KanScan v1.4 chạy cục bộ, mặc định cổng 18765, tự đổi cổng nếu bị chiếm.
- iPhone/Android: quét QR hiển thị trong cửa sổ KanScan trên PC để truy cập phiên chụp (cùng mạng LAN/Wi-Fi).
- Ảnh cuối cùng: lưu trong thư mục JPEG trên Windows, không lưu trong repository.

## Sử dụng

1. Khởi động ứng dụng KanScan v1.4 có sẵn trên Windows: `KanScan_v1_4.exe` hoặc `KHOI_DONG_KHONG_CMD.vbs` (nếu đã cài môi trường Python).
2. Trong KanBan, mở **CÔNG CỤ → KanScan** và bấm **Mở KanScan trên PC**. Có thể sửa địa chỉ nếu ứng dụng dùng cổng khác.
3. Để chụp từ điện thoại, quét QR trên cửa sổ KanScan của PC. Tiếp tục dùng nguyên quy trình chụp đơn, chụp nối, chọn A4/A5, chỉnh bốn góc, chụp lại/xóa từng ảnh rồi bấm Xong.
4. Lấy tệp JPEG trong thư mục KanScan đã chọn trên PC.

## Giới hạn

GitHub Pages là host tĩnh: không thể chạy Python, tự mở EXE hoặc ghi trực tiếp lên ổ đĩa của máy tính từ iPhone. Vì thế KanScan PC phải đang chạy. Mục Tools là điểm mở/tài liệu tích hợp; không phải bản thay thế server. Chưa đưa bộ ZIP mã nguồn KanScan v1.4 vào repository này.

**Lưu ý bảo mật:** Chỉ dùng trên Wi-Fi/LAN tin cậy và không mở cổng KanScan ra Internet. Không commit ảnh chứng từ hoặc dữ liệu kế toán vào GitHub.
