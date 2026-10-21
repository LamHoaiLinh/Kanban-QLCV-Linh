# Kiếm Ảnh Tranh Hùng — trò chơi chiến thuật web

## Phạm vi
- Trò chơi gốc do KanBan phát triển độc lập, lấy cảm hứng từ thể loại chiến thuật theo lượt và roguelite, với phong cách võ hiệp tiếng Việt.
- **Không phải** bản chuyển đổi, bản dịch, bản crack, hoặc bản phân phối Shogun Showdown của Roboatino.
- File người dùng cung cấp (`ShogunShowdown_Win.zip`) là bản Unity Windows đã biên dịch; không đưa EXE/DLL/tài nguyên thương mại lên kho GitHub.
- Bản chính chủ: https://roboatino.itch.io/shogunshowdown

## Chức năng
- Ba nhân vật: Thiên Sơn Kiếm Khách, Vô Ảnh Du Hiệp, Huyền Môn Đạo Sĩ.
- Tác chiến trên 9 ô; chuyển hướng, di chuyển, nhận biết tầm tấn công.
- Xếp chuỗi tối đa 3 chiêu trước khi thi triển; các kỹ năng có hồi lực.
- 5 ải, kẻ địch và trùm cuối, cơ duyên giữa các ải.
- Toàn bộ từ ngữ hiển thị trong game độc lập theo phong cách kiếm hiệp.
- Tự động lưu trên localStorage với khóa `kanban_kiem_anh_v1`.

## Điều khiển
- A/D hoặc ←/→: di chuyển.
- W hoặc ↑: quay hướng; phím số 1–9: chọn chiêu.
- Enter: thi triển; Space: tĩnh tâm; Backspace: bỏ chiêu cuối.
- Tất cả thao tác đều có nút cho chuột và màn hình cảm ứng.

## Tích hợp với KanBan
- URL nội bộ: `kiem-anh-tranh-hung/index.html`.
- Hub Game: thêm `kiemanh` (iframe) và `shogunalpha` (liên kết sang trò chơi gốc trên itch.io).
- Thoát qua thông điệp `kiem-anh-close` cho launcher.
- `sw.js` thêm tuyến vào nhóm game và tăng phiên bản cache.
- Game tách biệt khỏi dữ liệu công việc KanBan và các game khác.

## Phạm vi kiểm tra
- Kiểm tra cú pháp JS ở game, launcher và service worker.
- Kiểm tra logic mô phỏng: tạo nhân vật, xếp/thi triển chiêu, di chuyển, đổi hướng, lưu tự động, thắng ải, chọn cơ duyên, thắng trùm cuối, thất bại, đóng cửa sổ.
- Chưa xác nhận kiểm thử trực quan trên trình duyệt PC/iPhone thực tế hoặc trạng thái triển khai GitHub Pages.

## Nâng cấp tương lai
- Nếu muốn Việt hóa **đúng Shogun Showdown** thay vì game độc lập, cần bản mã nguồn/được tác giả cho phép dịch và phân phối WebGL, rồi mới xây pipeline bản địa hóa chính thức.
