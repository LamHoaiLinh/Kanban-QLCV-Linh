# Farm asset pipeline v1

Phạm vi này chỉ quản lý hình của `farm-game`. Không đổi khóa lưu dữ liệu, economy hoặc logic Kanban.

## Luồng chuẩn

1. Chọn asset trong `manifest.json`; ID game (`carrot`, `wood`, `villa_1`...) phải trùng ID đang có trong `config.js`.
2. Lấy template tương ứng trong `prompt-templates.json`, thay đủ biến và giữ nguyên `sharedStyle`/`sharedNegative` để các đợt tạo hình đồng nhất.
3. Tạo file nguồn PNG nền trong suốt theo kích thước `source`; kiểm tra không có chữ, logo, nền cảnh hoặc vật thể bị cắt.
4. Xuất WebP theo thông số `delivery`, đặt đúng đường dẫn đã khai báo trong manifest.
5. Với cây: thêm stage đã hoàn tất vào `readyVariants`. Với vật liệu/công trình/NPC: đổi `ready` thành `true`.
6. Chạy `node farm-game/assets/validate-manifest.mjs`, sau đó mở Farm và kiểm tra fallback bằng cách tạm đổi một file về `ready: false`.

## Quy ước ID và tên file

- Cây: `crop.<cropId>.<seed|sprout|growing|mature|dead>` → `crops/<cropId>/<stage>.webp`.
- Vật liệu: `material.<materialId>` → `materials/<materialId>.webp`.
- Công trình: `building.<villaId>` → `buildings/<villaId>-<slug>.webp`.
- NPC: `npc.<npcId>` → `npcs/<npcId>.webp`.
- Chỉ dùng chữ thường ASCII, số, `_`, `-`; không dấu cách, không dấu tiếng Việt.

## Định nghĩa 5 stage cây

- `seed`: vừa gieo, mầm chưa hoặc mới nhú; chiều cao khoảng 20% stage trưởng thành.
- `sprout`: 2–4 lá non; chiều cao khoảng 40%.
- `growing`: hình dáng cây đã nhận diện được, chưa có hoặc chưa chín nông sản; khoảng 70%.
- `mature`: cây khỏe, nông sản chín rõ; 100%.
- `dead`: cùng dáng mature nhưng khô héo, màu nâu xám, không hiệu ứng bệnh hoặc biểu tượng UI.

## Cơ chế tương thích

`asset-loader.js` chỉ tải file được đánh dấu sẵn sàng. File thiếu, manifest lỗi hoặc ảnh tải lỗi đều quay về canvas/emoji hiện tại; dữ liệu chơi không đổi. Vì vậy có thể đưa asset lên theo từng stage hoặc từng nhóm mà không cần chờ hoàn tất toàn bộ bộ hình.
