# KANBAN CÁ NHÂN STATIC v2.4

## 1. Điểm mới
- Có 9 hình nền tùy chọn; mặc định là **Beautiful Background6**.
- Có nút `▧` để đổi hình nền và nút `?` mở hướng dẫn nhanh.
- Có tooltip khi rê chuột hoặc dùng bàn phím chọn các nút, biểu tượng kéo thả.
- Bố cục desktop được thu gọn để màn hình rộng hiển thị đồng thời 5 cột.
- Dự án ở thanh bên trái có thể kéo thả để sắp xếp.
- Dự án mới có 5 cột mặc định theo thứ tự:
  1. Đã hoàn thành
  2. Việc cần làm/chưa sắp xếp
  3. Việc hôm nay
  4. Việc ngày mai
  5. Mục tiêu/ý tưởng
- Dữ liệu từ bản v1.0 được giữ nguyên. Bốn cột mặc định cũ sẽ tự chuyển sang cấu trúc 5 cột mới.
- Nội dung hướng dẫn dùng cách xưng hô “Bạn”.

## 2. Upload lên GitHub Pages
1. Giải nén file ZIP.
2. Mở repository GitHub đang dùng.
3. Xóa hoặc ghi đè toàn bộ file cũ bằng toàn bộ file và thư mục trong gói này.
4. Commit thay đổi.
5. Vào `Settings` → `Pages` → chọn `Deploy from a branch` → nhánh `main` → thư mục `/root`.
6. Chờ GitHub Pages cập nhật rồi mở lại trang.
7. Nhấn `Ctrl + F5` một lần để trình duyệt bỏ cache phiên bản cũ.

## 3. Giữ dữ liệu cũ
- Giữ nguyên đường dẫn repository GitHub Pages và không đổi tên repository thì dữ liệu Local Storage cũ vẫn còn.
- Nên bấm **Xuất bản sao JSON** trước khi thay mã nguồn để có bản dự phòng.
- Không xóa dữ liệu trang web trong trình duyệt nếu chưa xuất JSON.

## 4. Chạy thử trên Windows
- Nhấp đúp `BAT_CHAY_THU.bat`.
- Trình duyệt sẽ mở trang ở máy cục bộ.

## 5. Lưu ý
- Đây là static site, không có máy chủ và không có tài khoản.
- Dữ liệu chỉ lưu trong trình duyệt đang sử dụng.
- Khi đổi máy hoặc đổi trình duyệt, dùng **Xuất bản sao JSON** và **Nhập dữ liệu**.


## Cập nhật v2.1
- Thêm đồng hồ làm việc tiếng Việt ở khu vực đầu trang, có bộ đếm ngược tùy chỉnh và chuông báo khi hết giờ.
- Tên dự án ở thanh bên tự giảm cỡ chữ để đọc được đầy đủ hơn.


## Cập nhật v2.2
- Đồng hồ mặc định thu gọn để ưu tiên không gian bảng công việc.
- Chỉ khi bấm nút mở rộng trên đồng hồ thì phần đặt giờ và nút hẹn giờ mới hiện ra.
- Đồng hồ được đưa lên hàng trên và canh ngang với khu vực nút Hoàn tác.


## Cập nhật v2.3
- Thêm nút Cài đặt trên thanh công cụ.
- Trong Cài đặt có chức năng xóa toàn bộ dữ liệu ứng dụng.
- Trước khi xóa, ứng dụng đề nghị người dùng xuất backup JSON.
- Chỉ cho phép xóa khi người dùng gõ chính xác `OK`.
- Chức năng xóa chỉ xóa dữ liệu của Kanban này, không xóa dữ liệu của các website khác cùng tên miền.


## Cập nhật v2.4
- Thêm quy tắc tự động chuyển toàn bộ công việc từ cột nguồn sang cuối cột đích khi sang ngày mới.
- Có thể thêm nhiều thao tác chuyển bằng dấu `＋`; quy tắc được lưu trong Local Storage.
- Khi trang đang mở, quy tắc chạy ngay lúc qua 00:00. Nếu trang đang đóng, quy tắc chạy ở lần mở đầu tiên của ngày mới.
- Bổ sung nút **Xóa toàn bộ nội dung** trong hộp chỉnh sửa cột.
- Công việc bị xóa được lưu gọn dưới dạng văn bản thuần túy, kèm ngày tạo, ngày sửa cuối và ngày xóa.
- Mục **Nội dung đã xóa** có hai tầng: Đã xóa → Thùng rác → Xóa vĩnh viễn.


## Cập nhật v2.5 – Trình phát nhạc local
- Thêm trình phát nhạc gọn trong sidebar, không thay đổi logic Kanban cũ.
- Chọn thư mục bằng File System Access API trên Chrome/Edge hoặc dùng cơ chế chọn thư mục dự phòng.
- Hỗ trợ MP3, WAV, OGG, FLAC, M4A theo codec mà trình duyệt đang hỗ trợ.
- Có Play/Pause, bài trước/sau, Shuffle, Repeat All/One, tiến trình, thời gian và âm lượng.
- Hiển thị 3 dòng: bài trước, bài đang phát và bài tiếp theo; nghệ sĩ chỉ hiện khi đọc được metadata.
- Danh sách đầy đủ mở trong popup, có sắp xếp theo tên file hoặc tên bài hát, highlight và click để phát.
- Kéo thả thư mục vào trình phát và dùng Ctrl + Space để phát/tạm dừng.
- Thông tin thư mục gần đây lưu trong localStorage; quyền thư mục lưu bằng IndexedDB để có thể mở lại khi trình duyệt còn cấp quyền.
- Chỉ bài đang phát được tạo nguồn audio, không load toàn bộ thư viện vào RAM.


## Cập nhật v2.6 – Ghi chú nhanh
- Thêm các đầu mục ghi chú ngay dưới tên dự án.
- Mỗi dự án có bộ ghi chú riêng; bấm dấu ＋ để tạo thêm.
- Hỗ trợ chữ đậm, nghiêng, gạch chân, tiêu đề, danh sách dấu chấm và danh sách đánh số.
- Khi dán, ứng dụng chỉ nhận văn bản thuần túy; không lưu hình ảnh, tệp hoặc mã nhúng.
- Ghi chú được lưu chung trong dữ liệu Kanban nên có trong file backup JSON.
