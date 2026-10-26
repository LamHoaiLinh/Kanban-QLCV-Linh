# KanScan v1.4 – thành phần tùy chọn trong KanBan Tools

KanBan hiện có tab **CÔNG CỤ → KanScan**. Trên Windows, KanTool có thể cài phần mềm KanScan v1.4 qua `kan-tools/kanscan/install-kanscan.ps1`, nhưng chỉ từ bản ZIP v1.4 do người dùng tải về.

## Cài đặt

1. Tải đúng file **KanScan_v1.4_Chinh_Rieng_Tung_Anh.zip** đã nhận từ cuộc trò chuyện ChatGPT, giữ nguyên tệp và đặt trong **Downloads** (hoặc Desktop/Documents).
2. Trong KanBan, chuột phải nút **CÔNG CỤ** → **Cập nhật / sửa KanBan Tools**. KanTool chạy kiểm tra/cài các thành phần chính như hiện tại.
3. Sau khi thành phần chính đã qua kiểm tra, KanTool thử tìm file ZIP, xác minh SHA-256 đã ghim và cài KanScan trong `%LOCALAPPDATA%\KanBanTools\kanscan\`.
4. Mở **CÔNG CỤ → KanScan → Khởi động KanScan**. Xác nhận mở ứng dụng bên ngoài nếu trình duyệt hỏi. Giao diện Windows của KanScan mở không hiện CMD.
5. Quét QR bằng iPhone/Android cùng mạng và sử dụng toàn bộ chức năng v1.4 như trước; ảnh lưu trực tiếp trên PC.

## Bảo toàn chức năng

- **Không thay đổi** app.py, KanScan.py, templates hay thuật toán xử lý ảnh v1.4 trong ZIP.
- Không sửa các cổng KanMedia, Capture, KanPass, ký PDF, KanBackup/Kopia; KanScan ưu tiên cổng **18765** và tự chọn cổng khác nếu bận.
- KanScan dùng **.venv riêng**, không cài thư viện vào Python dùng chung của KanBan Tools.
- Không tự khởi động KanScan mỗi khi bật Windows; chỉ bật khi người dùng nhấn **Khởi động KanScan**.
- Không xóa dữ liệu KanScan người dùng trong `%LOCALAPPDATA%\KanScan` và thư mục ảnh đã chọn.
- Không upload ảnh chứng từ lên GitHub; chỉ lưu về PC thông qua Wi-Fi/LAN.
- Nếu ZIP chưa tồn tại hoặc cài addon lỗi, KanTool bỏ qua addon và **không dừng/cập nhật lại các công cụ chính vì lỗi này**.
- Cài lại KanTool không ghi đè KanScan v1.4 đã cài đúng phiên bản.

## Ranh giới kỹ thuật

GitHub Pages không chạy được Python và không thể trực tiếp lưu ảnh chứng từ vào máy của người dùng. Vì vậy ứng dụng nhận ảnh Windows là bắt buộc. Trong repository chỉ có mã tích hợp và bộ cài tùy chọn; **bộ mã nguồn gốc của KanScan v1.4 vẫn giữ trong ZIP người dùng có**, chưa được đưa toàn bộ lên GitHub.

## Kiểm tra khi có lỗi

- Đảm bảo ZIP còn nguyên (không giải nén hay chỉnh sửa), đúng bản v1.4; bộ cài đối chiếu SHA-256: `911faf44a23833210ebec0130ff4a7e5b20076cf894331a5699ac0bf7a2b78ae`.
- Xem `%LOCALAPPDATA%\KanBanTools\logs\install-latest.log` nếu KanTool cài thất bại.
- Kiểm tra `%LOCALAPPDATA%\KanBanTools\kanscan\installed.json` để biết KanScan đã cài.
- Nếu hệ thống đã có KanScan phiên bản cũ chạy, hãy đóng bản cũ trước khi mở bản tích hợp để tránh hai cửa sổ nhận ảnh.
- Chỉ bật chia sẻ trên mạng nội bộ đáng tin cậy và không chuyển tiếp cổng ra Internet.
