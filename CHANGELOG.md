# v6.22 — Đời Lập Nghiệp v1.1
- Thêm đồng hồ 24 giờ theo phút; mọi việc, ăn, tập, hẹn hò, mua tài sản và mở cơ sở đều tiêu tốn thời gian.
- Việc làm có khung giờ, khu vực, thời lượng riêng; việc ngắn không bị ép trả ít tiền.
- Sau 22:00 vẫn được làm việc nhưng có hao sức/thiếu ngủ; 01:00 tự sang ngày mới nếu còn thức.
- Nút Về nghỉ tính giờ ngủ/dậy động; ngủ muộn có thể làm lỡ việc sáng.
- Thêm thời tiết, thứ trong tuần, việc gấp và việc ca đêm.
- Phương tiện rút ngắn phần di chuyển thay vì cộng tiền máy móc.
- Tình yêu/gia đình tiêu cả tiền lẫn thời gian; doanh nghiệp giúp người chơi mua lại thời gian.
- Menu có hướng dẫn toàn bộ cơ chế cơ bản; bổ sung giao diện mobile và thanh thao tác dưới màn hình.
- Giữ 3 ô lưu và 10 lối sống Roguelite; tương thích save v1 bằng migrate.

# v6.21 — Đời Lập Nghiệp
- Thêm game **Đời Lập Nghiệp** vào GAME Hub.
- 3 ô lưu độc lập; 10 lối sống khởi đầu kiểu roguelite và Điểm sự nghiệp mở khóa qua nhiều hành trình.
- Gameplay theo ngày: việc làm, ăn uống, tập luyện, sức khỏe, tinh thần, nhà ở, xe cộ, vay vốn và kinh doanh.
- Tiến trình đời sống mở dần: hẹn hò, kết hôn, chủ động sinh con, chi phí gia đình và học hành.
- Ngành kinh doanh có bão hòa và chi phí nhân sự để buộc chuyển dần sang nhóm ngành doanh thu cao hơn.
- Hiệu ứng tiền +/− nổi chậm rồi mờ dần để người chơi kịp nhìn giao dịch.

# CHANGELOG

## v7.2.1 – Hotfix kẹt sau khi bắn
- Sửa lỗi Đấu Trường có thể đứng ở pha bắn nếu Web Animations `finished` bị pending hoặc hiệu ứng projectile phát sinh lỗi runtime.
- Thêm watchdog/fallback cho projectile và `catch/finally` để luôn nhả `combatBusy`, tiếp tục lượt an toàn.
- Bump Dice/cache lên 7.2.1 để tránh GitHub Pages/Service Worker giữ JS cũ.

## v4.0 – Dice Arena
- Thay game Marble Draw bằng Dice Arena.
- Nút `DRAW` đổi thành `DICE`.
- Cho chọn 1–10 xúc xắc.
- Thêm hai chế độ thả đồng thời và thả từng viên.
- Dùng model xúc xắc, cốc lắc và vật liệu từ asset Dice Animation 2.
- Hiển thị kết quả từng viên, tổng điểm và lịch sử gần đây.
- Lưu dữ liệu Dice Arena bằng khóa riêng, không thay đổi dữ liệu Kanban.
- Cập nhật Service Worker lên `linh-kanban-static-v40-dice`.


## v3.2 – Marble Draw
- Thêm nút `DRAW` trên thanh công cụ Kanban.
- Thêm workspace toàn màn hình `MARBLE DRAW – ĐƯỜNG ĐUA MAY MẮN`.
- Thêm quản lý nhiều sự kiện bằng IndexedDB riêng.
- Thêm nhập danh sách người tham dự bằng Excel/CSV và nhập trực tiếp.
- Thêm tải file Excel mẫu.
- Thêm kiểm tra dữ liệu, mã trùng, tên trống và trạng thái đủ điều kiện.
- Thêm khóa danh sách, SHA-256, base-seed commitment và mapping hash.
- Thêm xáo thử, xáo chính thức nhiều lần và khóa mapping.
- Thêm 10 viên bi số 0–9 có cùng cấu hình vật lý.
- Thêm đường đua Three.js + Rapier, pegboard, bộ chia, rotor và cảm biến đích.
- Thêm quay chữ số từ hàng cao nhất xuống hàng thấp nhất.
- Thêm xử lý mã trống bằng cách quay lại toàn bộ chuỗi, không dùng modulo.
- Thêm nhiều giải theo tên giải; có thể loại người đã trúng khỏi các giải sau.
- Thêm lịch sử kết quả, xuất Excel, in/lưu PDF và verification JSON.
- Thêm benchmark nhanh kiểm tra phân bổ chữ số vào vị trí xuất phát.
- Giữ nguyên khóa Local Storage và toàn bộ logic Kanban v3.1.
- Cập nhật Service Worker lên `linh-kanban-static-v32`.

## v3.6
- Đổi Marble Draw sang một màn hình Home duy nhất.
- Nút Xáo danh sách thay đổi thật thứ tự người tham dự trong bảng.
- Bỏ cột Chức danh khỏi giao diện và Excel mẫu.
- Cho chọn 2–10 viên bi mỗi lượt; 3 viên sẽ dùng số 1, 2, 3.
- Số trên viên bi bám theo mặt nhìn thấy và không quay vòng quanh viên bi.
- Thay máng bằng một mặt liền, giảm số chướng ngại để hạn chế kẹt bi.
- Bấm Bắt đầu đua sẽ tự chuẩn bị danh sách và tự chạy các lượt.


## 5.4 - D10 GLB asset
- Added user-provided `dice-game/assets/D10.glb`.
- Added `dice-game/js/d10-engine.js` for Three.js rendering and asset animation.
- D6 remains CSS-based; D10 uses GLB with CSS fallback.


## Update Game Hub + Bách Chiêu v1.0 + Farm realtime orders
- Thêm Bách Chiêu v1.0 (từ bản hoàn thiện Smooth Input) vào Game Hub.
- Dùng ảnh tu tiên làm banner Game Hub.
- Nông Trại Nhỏ: đồng hồ đơn hàng chạy theo thời gian thực và tiếp tục trôi khi đóng game; hết hạn khi offline không khởi động lại cooldown từ lúc mở game.


## Dice Arena 6.0 – Đại Hội Linh Thú
- Thêm cơ chế giữ để nạp lực, thả để tung; chạm nhanh dùng lực trung bình.
- Lực ném thay đổi chuyển động xúc xắc nhưng không tác động xác suất kết quả.
- Thêm nút ĐẠI HỘI LINH THÚ mở game đua trong popup riêng.
- 6 Linh Thú có passive khác nhau, 5 xúc xắc D6, giữ/reroll tối đa 1 lần, combo Đôi/Bộ ba/Sảnh/Chẵn/Lẻ/Song 6.
- 5 địa hình thay đổi luật: Thảo Nguyên, Khúc Cua, Bùn Lầy, Cầu Hẹp, Nước Rút.
- 5 AI dùng cùng xác suất xúc xắc, chỉ khác chiến lược giữ/reroll.

## Dice Arena 7.0 – Đấu Trường Chẵn Lẻ
- Thay mode đua Linh Thú bằng **Đấu Trường Chẵn Lẻ** trong Dice Arena; chế độ tung xúc xắc tự do vẫn giữ nguyên.
- Mỗi đấu thủ luôn dùng đúng 2 D6; toàn bộ đấu thủ tung đồng thời ở đầu vòng và lưu kết quả riêng theo slot.
- Xúc xắc lẻ hiển thị đỏ và cộng Công; xúc xắc chẵn hiển thị xanh và cộng Khiên.
- Hỗ trợ 2–6 slot, mỗi slot chọn Người chơi hoặc AI, đổi tên tự do và có thể chọn trùng nhân vật.
- Có 12 nhân vật toàn thân, cân bằng 6 nữ/6 nam, trải từ trẻ em đến người lớn tuổi.
- Đấu thủ được bố trí thành vòng tròn để đường đạn dễ quan sát.
- Sau pha canh lực, vòng sáng khóa mục tiêu chạy qua các đối thủ với tốc độ bám theo tốc độ thanh canh lực; bấm BẮN để chốt đúng người đang sáng.
- Viên đạn có vệt sáng vàng; kích thước tăng theo Công và độ chính xác. PERFECT tạo đạn khổng lồ và hiệu ứng va chạm mạnh.
- Chỉ trừ Khiên/Tim sau khi projectile thực sự chạm mục tiêu; số nổi dùng biểu tượng `🛡️ -x` và `❤️ -y` để trẻ nhỏ dễ hiểu.
- Thêm âm hiệu riêng cho tung xúc xắc, thanh canh, đổi mục tiêu, bắn, PERFECT, khiên vỡ và trúng đạn.
- Popup luật nhanh có tùy chọn **Không hiện hướng dẫn này lần sau**.
- Service Worker cập nhật cache lên `linh-kanban-static-v700-dice-even-odd-arena`.
