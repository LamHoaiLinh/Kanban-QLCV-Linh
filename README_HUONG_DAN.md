# KANBAN CÁ NHÂN STATIC v2.0

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
