# Báo cáo sử dụng marblie-main

## Nguồn
- Tên dự án: Marblie.
- Tác giả: Younghoo Nam.
- Giấy phép: MIT.
- Bản quyền và toàn văn giấy phép được giữ tại `marble-draw/LICENSE_MARBLIE.txt`.

## Phần được tái sử dụng
- Các asset GLB trong `public/models`, được sao chép sang `marble-draw/assets/models`.
- `starter.glb` và `ring-long.glb` được tải làm thành phần hình ảnh của đường đua mẫu.
- Các âm thanh va chạm gốc được lưu tại `marble-draw/assets/sounds` để tiếp tục phát triển.
- Kiến trúc tham khảo gồm Three.js, Rapier, rigid body hình cầu, fixed timestep, track module và camera.

## Phần được viết mới
- Giao diện quản lý sự kiện và người tham dự.
- Excel import, nhập trực tiếp, IndexedDB và backup.
- Seed commitment, SHA-256, xáo chính thức và mapping mã số.
- Đường đua bốc thăm 10 chữ số, cảm biến đích và quản lý từng hàng số.
- Quy tắc mã trống, nhiều giải, kết quả và verification JSON.
- Launcher cách ly Marble Draw khỏi mã và dữ liệu Kanban.

## Lý do không chép nguyên Marblie
Marblie gốc là một sandbox xây dựng đường đua bằng Vite/TypeScript. Marble Draw cần một quy trình sự kiện cố định, kết quả qua cảm biến, quản lý seed và dữ liệu người tham dự. Vì vậy các asset và mô hình kỹ thuật được tận dụng, còn lớp nghiệp vụ bốc thăm được viết riêng.
