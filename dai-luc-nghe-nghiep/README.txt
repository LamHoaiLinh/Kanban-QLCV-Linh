ĐẠI LỤC NGHỀ NGHIỆP — DEMO LOCAL v2

1. Nhấp đúp CHOI_GAME.bat.
2. Game mở trên trình duyệt.
3. Làm theo Hướng dẫn khám phá ở góc dưới bên phải.
4. Game tự lưu và tự tính hành động đang chạy khi đóng game rồi quay lại.

Bản demo v2 có:
- 6 nghề; mỗi nghề có 12 nội dung mở dần theo cấp.
- Nội dung chưa mở vẫn hiện tối với tên ???.
- Thời gian khai thác tăng dần; dụng cụ chế tạo tự giảm thời gian khi sở hữu.
- 6 bậc phẩm chất vật phẩm: Phổ thông → Cải tiến → Hiếm → Sử thi → Truyền thuyết → Thần thoại.
- Hiệu ứng nổi khi nhận nguyên liệu, nhận/trừ xu và khi bấm mở khóa còn thiếu điều kiện.
- Tooltip trong Túi đồ giải thích công dụng và gợi ý nên bán hay giữ.
- Bán nhanh theo 1 / 10 / 50 / Tất cả hoặc nhập số lượng tùy ý.
- 1–2 nhiệm vụ phụ xuất hiện có khoảng nghỉ; hoàn thành được thư nhắc và thưởng xu.
- Chợ NPC với giá mua/bán biến động.
- 12 khu vực bản đồ; chỉ tính "Đã khám phá" sau khi người chơi tự bấm Khám phá.
- Hòm thư tự xóa sau 2 ngày thực tế và có nút Xóa toàn bộ thư.
- Báo cáo tiến độ offline.
- Xuất / nhập Save JSON.

Lưu ý: Nếu đã chơi bản demo v1, game giữ tiến trình chính nhưng đặt lại trạng thái khám phá bản đồ để sửa cơ chế mở khu vực.

=== BẢN CÂN BẰNG 3 SLOT ===
- Giá Luyện kim đã cân lại để giá thành phẩm cao hơn nguyên liệu khoảng 8-11%, tránh công thức càng luyện càng lỗ.
- Giá dụng cụ/trang bị đã cân lại để hạn chế vòng mua nguyên liệu -> chế -> bán lấy lời vô hạn.
- Chiến lợi phẩm được giảm giá bán và tỷ lệ nhận để Chiến đấu không lấn át hoàn toàn nghề sản xuất.
- Hệ thống sát thương chiến đấu dùng Công, Tốc đánh, Chí mạng, Xuyên giáp và Phòng thủ của quái để tính DPS/thời gian hạ mục tiêu.
- Vũ khí mở theo hai lớp: cấp Chế tác để chế tạo và cấp Chiến đấu để được phép trang bị.
- Chuỗi vũ khí: Kiếm sắt -> Kiếm thép -> Kiếm Mithril -> Đại kiếm Hắc Diện -> Đại kiếm Titan -> Tinh Kiếm -> Ma Đao Hư Không.
- Có 3 Slot chơi độc lập. Save cũ tự chuyển sang Slot 1 trong lần mở đầu tiên.

FIX 1.0.2 - 26/08/2026
- Không reset thời gian khi bấm lại đúng hành động đang chạy.
- Engine chạy bằng timer độc lập 100ms, không phụ thuộc riêng requestAnimationFrame.
- Giữ vị trí cuộn khi giao diện render lại sau mỗi lượt.
- Auto-fit desktop theo kích thước iframe/màn hình; mobile giữ layout responsive.
- Ẩn scrollbar nhưng vẫn cho phép cuộn; chặn tràn ngang.
