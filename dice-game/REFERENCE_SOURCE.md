# Tham khảo cơ chế thả xúc xắc

Nguồn tham khảo do người dùng cung cấp: Project-Swords RPG Dice Roller (GPL v3).

Bản Dice Arena trong KanBan **không sao chép mã nguồn GPL** từ project này. Phần được học ở mức ý tưởng/kiến trúc tương tác gồm:
- Giữ nút để nạp lực rồi thả để tung.
- Chạm nhanh dùng mức lực trung bình.
- Thả chuột/tay ở ngoài nút vẫn kết thúc thao tác nạp lực.
- Lực ném chỉ làm thay đổi chuyển động/animation, không làm thay đổi xác suất kết quả.

Cơ chế trên được viết lại độc lập bằng engine D6/D10 sẵn có của Dice Arena.

## Tham khảo cơ chế thanh canh thời điểm
Nguồn tham khảo do người dùng cung cấp: `Big-Fish-master.zip`.

Bản tích hợp **không sao chép mã nguồn** từ project này. Phần học ở mức ý tưởng tương tác là: một marker di chuyển qua lại trên thanh, người chơi bấm để chốt vị trí, rồi đánh giá độ gần vùng tâm. Toàn bộ timing engine, độ khó theo Công, target-cycle, projectile, sát thương, âm thanh và UI trong Dice Arena được viết lại độc lập.
