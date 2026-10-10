# Realism 4.2 — báo cáo nghiệm thu

Nguồn: 505cdfaf2eb09401b4921e2b121cc0600be97b62. CI: https://github.com/LamHoaiLinh/Kanban-QLCV-Linh/actions/runs/38051981811.

Đã triển khai: giới hạn hồ tới 100 cá; chuẩn hóa preset/random/load/resize; giữ tên và snapshot đã lưu, undo resize; vây kín hai mặt và LOD; chuyển động, nhảy có xác suất, mổ bề mặt thật; 20 loại sự kiện có tuyến và thời hạn thật; camera quan sát sự kiện, pan/pinch và bố cục dọc.

## Kiểm thử PASS

- 100 fish / 30 simulated minutes, boundaries, solid collisions, finite poses, stuck recovery
- 20 shrink/grow cycles, no NaN, named metadata retained, no automatic respawn
- save/load/resize/undo, durable saved snapshot unchanged
- low quality render cap never edits durable stock
- conditional jump 50/100, 50 splashes, every actor returns
- approach, inspect, 3–8 quick pecks / 4–8Hz, withdraw, cruise
- at least five real actor routes selected by event camera
- Shift pan/click suppresses feed, twenty drags stay bounded, manual takeover
- two touch pointers pan/pinch and 1/2/1 transition
- no page errors or invalid shader state
- Giữ nguyên và chạy đủ tám bộ regression cũ.
- Audit đủ 20 loại sự kiện với cá thực hiện tuyến di chuyển; mổ được kính, gỗ và lá.
- Video tự nhiên hơn 3 phút: 6 mẫu, mỗi mẫu 100 cá, không NaN hoặc vi phạm thành hồ.
- Xuất 12 ảnh so sánh vây, clip ông tiên 15 giây, mổ kính phát chậm, nhảy/splash/trở lại và ảnh dọc trước/sau pan/pinch.

## Đo so sánh trước / sau

Các số dưới đây đã đo ở vòng kiểm thử trước khi sửa timeout mổ kính, Chromium SwiftShader 960×600, chất lượng medium, có tải ghi hình đồng thời. Đây là thời gian khung hình trong GPU phần mềm, không phải FPS của máy PC/điện thoại.

| Cá | P50 trước / sau (ms) | P95 trước / sau (ms) | Draw calls trước / sau | Triangles trước / sau |
|---|---|---|---|---|
| 20 | 233 / 200 | 433 / 350 | 39 / 39 | 38,624 / 32,384 |
| 60 | 350 / 350 | 1,017 / 1,000 | 39 / 39 | 106,144 / 87,424 |
| 100 | Chưa hỗ trợ / 350 | Chưa hỗ trợ / 1,017 | Chưa hỗ trợ / 39 | Chưa hỗ trợ / 142,464 |

## Giới hạn và đường dẫn bằng chứng

Chưa chứng nhận 60 FPS trên PC hoặc 30 FPS trên điện thoại thật. Test touch dùng PointerEvent trong Chromium; ảnh dọc dùng viewport 390×844. Stress 30 phút là mô phỏng tăng tốc qua physics thực, còn video tự nhiên chạy theo thời gian thực. Các clip hành vi cận cảnh dùng fixture QA để nhìn rõ.

Mở index.html để xem toàn bộ ảnh/video. Dữ liệu máy: capture-report.json, realism42-report.json, realism42-event-audit.json, realism42-surfaces-review.json. CI main có bước kiểm tra đúng asset trên Pages, nút Hồ Cá, ESC, Alt+H, canvas và không có QA hooks ở production; kết quả nằm trong artifact realism42-production-review.

## Kiểm tra bản production — PASS

CI main: https://github.com/LamHoaiLinh/Kanban-QLCV-Linh/actions/runs/38051981811.

Asset được phục vụ: ./assets/index-BxKfHugf.js. Root HTTP 200. Nút Hồ Cá mở canvas; ESC đóng; Alt+H mở lại; không có QA hooks trên production hoặc lỗi JavaScript. Dữ liệu kiểm tra: production-report.json. Ảnh chụp production nằm trong artifact realism42-production-review của CI main.

Trang chạy: https://lamhoailinh.github.io/Kanban-QLCV-Linh/. Ảnh/video: https://lamhoailinh.github.io/Kanban-QLCV-Linh/aquarium-review/.
