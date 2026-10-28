# KanScan v1.5 – xoay trái/phải từng trang, tích hợp KanBan Tools

KanScan giữ nguyên v1.4: camera hệ thống iOS/Android, chụp đơn/chụp nối, A4/A5 tự xác định ngang/dọc, chỉnh 4 góc thủ công, sửa/xóa riêng từng ảnh, ảnh JPEG lưu trên PC. Bản v1.5 chỉ bổ sung hai nút **↶ Xoay trái 90°** và **↷ Xoay phải 90°** trong menu nhấn giữ/chạm vào trang.

## Nâng cấp qua GitHub – không làm ảnh hưởng KanBan

- GitHub patch nguồn: `kan-tools/kanscan/upgrade_rotate_v15.py`; installer: `kan-tools/kanscan/install-kanscan.ps1`.
- **Máy đã cài KanScan v1.4 qua KanTool:** chuột phải **CÔNG CỤ** → **Cập nhật/sửa KanBan Tools**. Installer tải bản vá v1.5 từ GitHub, sao lưu ba tệp cần sửa, áp dụng và kiểm tra, tự khôi phục nếu lỗi. Không cần ZIP lại.
- **Máy cài KanScan lần đầu:** đặt nguyên ZIP v1.4 `KanScan_v1.4_Chinh_Rieng_Tung_Anh.zip` trong Downloads, Desktop hoặc Documents, sau đó cập nhật KanTool. Installer kiểm tra SHA-256 chính xác của ZIP gốc và tự nâng lên v1.5.
- **Máy chạy KanScan v1.4 độc lập ngoài KanTool:** có thể sử dụng ZIP v1.5 hoàn chỉnh do ChatGPT cung cấp; hoặc cài bản v1.4 vào KanTool theo cách ở trên.
- Đóng cửa sổ KanScan cũ và **khởi động lại KanScan** sau cập nhật để Python tải mã mới.

## Các trường hợp đã thiết kế

1. Chạm ảnh thu nhỏ số 3 hoặc nhấn giữ trang số 3 trong ảnh ghép → **Xoay trái 90°** hoặc **Xoay phải 90°**.
2. Ảnh số 3 xoay ngay, ảnh 1 và 2 giữ nguyên; thumbnail, ảnh ghép, bản xuất JPEG được dựng lại.
3. Hướng xoay được lưu trong metadata của bộ ảnh chưa hoàn tất. Khi chỉnh lại bốn góc trên ảnh gốc, hướng xoay đã chọn vẫn được áp dụng.
4. Chụp lại riêng trang sẽ đặt hướng xoay về 0; xóa trang sẽ dồn thông tin xoay theo đúng trang còn lại.
5. Xoay không sửa ảnh gốc `raw_*`; hình gốc luôn giữ để đối chiếu.

## Cơ chế cách ly

- KanScan dùng `%LOCALAPPDATA%\KanBanTools\kanscan\.venv`, không thay đổi môi trường Python chung.
- Chạy khi người dùng mở **CÔNG CỤ → KanScan → Khởi động KanScan**, không tự động chạy nền cùng Windows, không hiện CMD.
- Không chiếm các cổng 47631, 47632, 47634, 8765 của KanBan Tools. KanScan ưu tiên 18765 và tự chọn cổng kế tiếp nếu bị chiếm.
- Bộ cài tiếp tục kiểm tra KanMedia, KanPass, Capture Agent, PDF và Backup như cũ; thiếu ZIP, thiếu mạng hoặc nâng cấp KanScan lỗi sẽ **không làm hỏng hoặc dừng bộ cài chính**.
- Ảnh chứng từ chỉ lưu trên PC; GitHub Pages không lưu chứng từ.
- Lưu ý: quá trình áp dụng bản vá vào app hiện có chưa được nghiệm thu trên máy Windows của người dùng. GitHub CI xác thực cú pháp và cơ chế bỏ qua an toàn, không thay thế kiểm thử iPhone thực tế.

## Gỡ riêng tính năng

KanScan là thành phần riêng, không cần xóa KanBan. Không xóa thư mục `%LOCALAPPDATA%\KanScan` hoặc thư mục JPEG nếu còn chứng từ cần lưu.

## Hạn chế

Repository đang lưu **bản vá nguồn v1.5 và bộ tích hợp**, không phải toàn bộ mã nguồn gốc v1.4. Để cài trên máy mới vẫn cần bản ZIP v1.4 đã ghim hash. Muốn phát hành hoàn toàn độc lập từ GitHub, cần xuất bản toàn bộ nguồn gốc và/hoặc gói cài Windows.
