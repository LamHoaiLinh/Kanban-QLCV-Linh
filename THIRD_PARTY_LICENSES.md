# Thư viện bên thứ ba

## JSZip 3.x
- Mục đích: tạo ZIP khi xuất nhiều file.
- Giấy phép: MIT hoặc GPLv3.
- Được đóng gói cục bộ tại `office-tools/vendor/jszip.min.js`.

## pdf-lib 1.17.1
- Mục đích: tạo, gộp, tách, sao chép, xoay và thay đổi kích thước trang PDF.
- Giấy phép: MIT.
- Được tải lười theo phiên bản cố định khi mở công cụ PDF.

## PDF.js 4.10.38
- Mục đích: hiển thị thumbnail và render trang PDF thành PNG.
- Giấy phép: Apache License 2.0.
- Được tải lười theo phiên bản cố định khi cần xem/render PDF.

## SheetJS Community Edition 0.20.3
- Mục đích: đọc và ghi XLSX/XLS/XLSM/CSV trong trình duyệt.
- Giấy phép: Apache License 2.0.
- Được tải lười theo phiên bản cố định khi mở công cụ Excel.

Các tệp người dùng chọn không được gửi đến các địa chỉ thư viện. Trình duyệt chỉ tải mã JavaScript của thư viện; nội dung file được xử lý trong bộ nhớ trên thiết bị.

## Flutter Tarot Card
- Nguồn tham khảo và bộ ảnh: flutter_tarot_card, tác giả Dao Hong Vinh.
- Giấy phép mã nguồn đi kèm: MIT License.
- Bản tích hợp web được viết lại bằng JavaScript/CSS, không sử dụng Flutter runtime.

## Three.js 0.185.1
- Mục đích: hiển thị và phát animation cho asset `D10.glb` trong Dice Arena.
- Giấy phép: MIT.
- Được tải theo phiên bản cố định từ jsDelivr khi người dùng chọn D10.
- Dice Arena vẫn có phương án D10 CSS dự phòng nếu thư viện 3D không tải được.


## Tetr.js
- Original author: Simon M. Laroche
- License: MIT
- Used as a gameplay/visual reference for the embedded Tetris module. The original MIT license is included at `tetris-game/LICENSE.txt`.


## yt-dlp
- Mục đích: đọc thông tin nguồn và tải media cho KanMedia.
- Nguồn: dự án `yt-dlp/yt-dlp`.
- Giấy phép: Unlicense.
- KanBan không nhúng binary yt-dlp vào mã web; `KanTool.bat` tạo môi trường Python cục bộ và cài/cập nhật yt-dlp từ PyPI.

## FFmpeg / FFprobe
- Mục đích: ghép luồng, chuyển đổi định dạng, cắt/chỉnh audio-video và đọc metadata.
- Nguồn tải runtime: `BtbN/FFmpeg-Builds`, gói Windows x64 GPL static.
- KanTool ưu tiên kiểm SHA256 từ trường `digest` của GitHub Release khi trường này có sẵn.
- FFmpeg là phần mềm bên thứ ba với giấy phép phụ thuộc cấu hình build; gói KanMedia đang chọn biến thể GPL. Xem thông tin giấy phép đi kèm dự án FFmpeg/BtbN khi phân phối lại.

## Node.js
- Mục đích: JavaScript runtime cho khả năng trích xuất YouTube hiện đại của yt-dlp.
- Nguồn: `nodejs.org`, nhánh portable Windows x64 v24.
- Giấy phép chính của Node.js: MIT; các thành phần đi kèm có thể có giấy phép riêng.
- KanTool kiểm SHA256 theo `SHASUMS256.txt` chính thức trước khi giải nén.

## KanMedia runtime
- `kanmedia-server.ps1` và `kanmedia-worker.ps1` là mã nguồn của chính dự án KanBan, chạy cục bộ trên `127.0.0.1`.
- KanTool không tắt Windows Security, không thêm Defender exclusion và không nhúng executable dưới dạng Base64/obfuscation.
