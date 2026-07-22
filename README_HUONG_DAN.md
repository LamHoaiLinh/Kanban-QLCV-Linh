# KANBAN CÁ NHÂN – BẢN STATIC GITHUB PAGES
## Chức năng chính
- Nhiều dự án riêng biệt dạng slot.
- Nhiều cột và thẻ công việc trong từng dự án.
- Kéo thả cột, kéo thả thẻ giữa các cột bằng chuột hoặc màn hình cảm ứng.
- Thẻ có mô tả, nhãn màu và danh sách kiểm tra.
- Thêm, sửa, xóa, nhân bản cột và thẻ.
- Tìm kiếm trong dự án, hoàn tác thay đổi gần nhất, giao diện sáng/tối.
- Tự lưu trên trình duyệt, xuất/nhập JSON để sao lưu.
- Chạy hoàn toàn tĩnh, không đăng nhập, không máy chủ, không MongoDB.
## Chạy thử trên Windows
Nhấp đúp `BAT_CHAY_THU.bat`. Trình duyệt sẽ mở `http://localhost:8080`.
## Upload lên GitHub Pages
1. Tạo repository mới, ví dụ `kanban-ca-nhan`.
2. Upload toàn bộ file và thư mục trong bộ mã này vào thư mục gốc repository. `index.html` phải nằm ngay cấp ngoài cùng.
3. Vào `Settings` → `Pages`.
4. Chọn `Deploy from a branch`.
5. Chọn nhánh `main`, thư mục `/ (root)`, bấm `Save`.
6. Mở đường dẫn GitHub Pages được tạo, thường có dạng `https://TEN-TAI-KHOAN.github.io/kanban-ca-nhan/`.
## Lưu ý rất quan trọng về dữ liệu
GitHub Pages chỉ lưu mã nguồn. Công việc được lưu trong Local Storage của từng trình duyệt.
- Mở trình duyệt khác hoặc thiết bị khác sẽ không tự có dữ liệu cũ.
- Xóa dữ liệu trình duyệt có thể làm mất công việc.
- Trước khi đổi máy hoặc xóa trình duyệt, bấm `Xuất bản sao JSON`.
- Ở thiết bị mới, bấm `Nhập dữ liệu` để phục hồi.
## Phím tắt
- `/`: tìm kiếm.
- `N`: thêm công việc vào cột đầu tiên.
- `Ctrl + Z`: hoàn tác.
## Khác biệt với Wekan gốc
Wekan gốc là ứng dụng Meteor + MongoDB cần máy chủ. Bản này được viết lại độc lập theo nhu cầu quản lý cá nhân để chạy được trên GitHub Pages, nên đã loại bỏ đăng nhập, phân quyền, cộng tác nhiều người, thông báo, máy chủ và cơ sở dữ liệu.
